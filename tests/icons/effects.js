(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjkzLC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOTQsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzk5NjZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0MC4wMDg0OSwyNzMuMzMzMzNjLTE1LjA5MDMsLTQ4Ljg0NzI3IC00NC40NzMzMywtNzguNTM1NzYgLTkzLjM0MTgyLC05My4zMjQ4NWM0OC43Mjg0OCwtMTQuODgyNDIgNzguMzg3MjcsLTQ0LjYzNDU1IDkzLjM0MTgyLC05My4zNDE4MmMxNC43NzIxMiw0OC4zNzYzNiA0NC4zMjkwOSw3Ny44NTY5NyA5My4zMjQ4NSw5My4zNDE4MmMtNDguOTc4NzksMTQuNzg5MDkgLTc4LjQwODQ4LDQ0LjE0NjY3IC05My4zMjQ4NSw5My4zMjQ4NXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzA2NToxMTIuNjc3NDA1LS0+';

  let toCorrectThing = null;
  let active = false;
  let flipY = false;
  const vm = Scratch.vm;
  const renderer = vm.renderer;
  const _drawThese = renderer._drawThese;
  const gl = renderer._gl;
  const canvas = renderer.canvas;
  let width = 0;
  let height = 0;
  let scratchUnitWidth = 480;
  let scratchUnitHeight = 360;

  class Effects {

    getInfo() {
      return {

        id: 'xeltalliveffects',
        name: 'Effects',

        color1: '#9966FF',
        color2: '#855CD6',
        color3: '#774DCB',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'setClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set clipping box x1:[X1] y1:[Y1] x2:[X2] y2:[Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'clearClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear clipping box',
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'getClipbox',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clipping box [PROP]',
            arguments: {
              PROP: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'min x',
                menu: 'props'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          '---',
          {
            opcode: 'setAdditiveBlend',
            blockType: Scratch.BlockType.COMMAND,
            text: 'turn additive blending [STATE]',
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'on',
                menu: 'states'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'getAdditiveBlend',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is additive blending on?',
            filter: [Scratch.TargetType.SPRITE]
          }
        ],

        menus: {
          states: {
            acceptReporters: true,
            items: ['on', 'off']
          },
          props: {
            acceptReporters: true,
            items: ['min x', 'min y', 'max x', 'max y', 'width', 'height']
          }
        }
      }
    }

    setClipbox ({X1, Y1, X2, Y2}, {target}) {
      return false;
    }
    clearClipbox (args, {target}) {
      return false;
    }
    setAdditiveBlend ({STATE}, {target}) {
      return false;
    }
    getClipbox ({PROP}, {target}) {
      return false;
    }
  }

  Scratch.extensions.register(new Effects());
})(Scratch);
