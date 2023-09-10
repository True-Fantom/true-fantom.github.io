(Scratch => {
  'use strict';

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjk4LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOTksMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzRjOTdmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI5OC43MTE0NSwxMjUuNzY1NzJjMjkuOTUyNzcsMzIuNDI1NDIgMjcuOTQ4MjksODIuOTkyOTQgLTQuNDc3MTQsMTEyLjk0NTcxYy0zMi40MjU0MywyOS45NTI3NiAtODIuOTkyOTQsMjcuOTQ4MjkgLTExMi45NDU3MSwtNC40NzcxNGMtMjkuOTUyNzYsLTMyLjQyNTQyIC0yNy45NDgyOCwtODIuOTkyOTUgNC40NzcxNCwtMTEyLjk0NTcxYzMyLjQyNTQyLC0yOS45NTI3NiA4Mi45OTI5NSwtMjcuOTQ4MjggMTEyLjk0NTcxLDQuNDc3MTR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTcuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjU5LjQxMjQ5LDE2Mi4wNjc4M2M5LjkwMzY2LDEwLjcyMTIyIDkuMjQwODksMjcuNDQxIC0xLjQ4MDMzLDM3LjM0NDY2Yy0xMC43MjEyMiw5LjkwMzY2IC0yNy40NDEwMSw5LjI0MDg4IC0zNy4zNDQ2NiwtMS40ODAzM2MtOS45MDM2NSwtMTAuNzIxMjIgLTkuMjQwODgsLTI3LjQ0MSAxLjQ4MDMzLC0zNy4zNDQ2NmMxMC43MjEyMiwtOS45MDM2NiAyNy40NDEsLTkuMjQwODggMzcuMzQ0NjUsMS40ODAzM3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zMDguOTU4NzUsMjA3LjU0NDE4bC02OC45NjgzNywtMjcuNTAyMDZsMC4xNTY1OSwtNzUuMzU5ODEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxNy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQyLjg4NDkzLDE3Ny4zMzUwOGMxLjQ3MTc5LDEuNTkzMjkgMS4zNzMzLDQuMDc4MDMgLTAuMjE5OTksNS41NDk4MmMtMS41OTMyOSwxLjQ3MTc5IC00LjA3ODAzLDEuMzczMyAtNS41NDk4MiwtMC4yMTk5OWMtMS40NzE3OSwtMS41OTMyOSAtMS4zNzMzLC00LjA3ODAzIDAuMjE5OTksLTUuNTQ5ODJjMS41OTMyOSwtMS40NzE3OSA0LjA3ODA0LC0xLjM3MzI5IDUuNTQ5ODIsMC4yMnoiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0iIzRjOTdmZiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PC9nPjwvc3ZnPg==';

  const cast = Scratch.Cast;

  const toAngle = val => {
    const angle = cast.toNumber(val);
    if (Math.abs(angle) > 180) {
      const normalized_angle = angle % 360;
      if (normalized_angle > 180) {
        return normalized_angle - 360;
      } 
      if (normalized_angle < -180) {
        return normalized_angle + 360;
      }
      return normalized_angle;
    }
    if (angle === -180) {
      return 180;
    }
    return angle;
  };
  
  class ScratchAngles {
    getInfo() {
      return {

        id: 'truefantomangles',
        name: 'Angles',
        color1: '#4c97ff',
        menuIconURI: menuIconURI,

        blocks: [
          {
            opcode: 'to_angle_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'to angle [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              }
            }
          },
          '---',
          {
            opcode: 'ax_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [A] to [B] steps x',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'ay_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [A] to [B] steps y',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          '---',
          {
            opcode: 'angle_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle of x: [A] y: [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'steps_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'steps of x: [A] y: [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
        ]
      }
    }

    to_angle_block({A}) {
      return toAngle(cast.toNumber(A));
    }
    ax_block({A, B}) {
      const alpha = cast.toNumber(A);
      const x = Math.round(Math.sin((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const y = Math.round(Math.cos((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const sum = Math.abs(x) + Math.abs(y);
      return cast.toNumber((x / sum) * cast.toNumber(B));
    }
    ay_block({A, B}) {
      const alpha = cast.toNumber(A);
      const x = Math.round(Math.sin((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const y = Math.round(Math.cos((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const sum = Math.abs(x) + Math.abs(y);
      return cast.toNumber((y / sum) * cast.toNumber(B));
    }
    angle_block({A, B}) {
      return (Math.atan2(cast.toNumber(A), cast.toNumber(B)) * 180) / Math.PI;
    }
    steps_block({A, B}) {
      return Math.abs(cast.toNumber(A)) + Math.abs(cast.toNumber(B));
    }
  }

  Scratch.extensions.register(new ScratchAngles());
})(Scratch);
