(function(Scratch) {
  'use strict';
  
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjY5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNDAuMDAwMDEsMTgwbDk3LjUyMDY1LDU2LjMwMzU3Yy0yMC4xMTUzMywzNC44NDA3NyAtNTcuMjg5OTksNTYuMzAzNTcgLTk3LjUyMDY1LDU2LjMwMzU3Yy00MC4yMzA2NiwwIC03Ny40MDUzMiwtMjEuNDYyOCAtOTcuNTIwNjUsLTU2LjMwMzU3bDk3LjUyMDY1LC01Ni4zMDM1NyIgZmlsbD0iI2RiNDQzNyIgc3Ryb2tlPSIjZmZmZmZmIi8+PHBhdGggZD0iTTEyNy4zMjI3LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiMwMDAwZmYiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0yNDAuMDAwMDEsMTgwbC05Ny41MjA2NSw1Ni4zMDM1N2MtMjAuMTE1MzMsLTM0Ljg0MDc3IC0yMC4xMTUzMywtNzcuNzY2MzcgMCwtMTEyLjYwNzE0YzIwLjExNTMzLC0zNC44NDA3NyA1Ny4yODk5OSwtNTYuMzAzNTcgOTcuNTIwNjUsLTU2LjMwMzU3djExMi42MDcxNCIgZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSIjZmZmZmZmIi8+PHBhdGggZD0iTTI0MC4wMDAwMSwxODB2LTExMi42MDcxNGM0MC4yMzA2NiwwIDc3LjQwNTMyLDIxLjQ2MjggOTcuNTIwNjUsNTYuMzAzNTdjMjAuMTE1MzMsMzQuODQwNzcgMjAuMTE1MzMsNzcuNzY2MzcgMCwxMTIuNjA3MTRsLTk3LjUyMDY1LC01Ni4zMDM1NyIgZmlsbD0iIzAwZmYwMCIgc3Ryb2tlPSIjZmZmZmZmIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzMwNToxMTIuNjc3NDA1LS0+';

  class ColorTest {

    constructor() {}

    getInfo() {
      return {

        id: 'ColorTest',
        name: 'Color Test',
        
        color1: '#ff0000',
        color2: '#0000ff',
        color3: '#00ff00',
        
        menuIconURI: icon,

        blocks: [
          
          {
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[bool]',
            arguments: {
              bool: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          
          {
            opcode: 'string_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },
          
          {
            opcode: 'accept_reporters_true_menu_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[accept_reporters_true_menu]',
            arguments: {
              accept_reporters_true_menu: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'accept_reporters_true_menu'
              }
            }
          },
          
          {
            opcode: 'accept_reporters_false_menu_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[accept_reporters_false_menu]',
            arguments: {
              accept_reporters_false_menu: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'accept_reporters_false_menu'
              }
            }
          }
          
        ],
        
        menus: {
           
          accept_reporters_true_menu: {
            items: [''],
            acceptReporters: true
          },
          
          accept_reporters_false_menu: {
            items: [''],
            acceptReporters: false
          }
          
        }
      }
    } 
    
    bool_block({bool}) {
      return '';
    }
    
    string_block({string}) {
      return '';
    }
    
    accept_reporters_true_menu_block({accept_reporters_true_menu}) {
      return '';
    }
    
    accept_reporters_false_menu_block({accept_reporters_false_menu}) {
      return '';
    }
    
  }

  Scratch.extensions.register(new ColorTest());
  
})(Scratch);
