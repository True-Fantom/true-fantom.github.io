(function(Scratch) {
  'use strict';
  
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjcyLC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyNzMsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzAwMDBmZiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTI0MC4wMDAwNCwxODBsLTk3LjUyMDY1LDU2LjMwMzU3Yy0yMC4xMTUzMywtMzQuODQwNzcgLTIwLjExNTMzLC03Ny43NjYzNyAwLC0xMTIuNjA3MTRjMjAuMTE1MzMsLTM0Ljg0MDc3IDU3LjI4OTk5LC01Ni4zMDM1NyA5Ny41MjA2NSwtNTYuMzAzNTd2MTEyLjYwNzE0IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjQwLjAwMDAyLDE4MHYtMTEyLjYwNzE0YzQwLjIzMDY2LDAgNzcuNDA1MzIsMjEuNDYyOCA5Ny41MjA2NSw1Ni4zMDM1N2MyMC4xMTUzMywzNC44NDA3NyAyMC4xMTUzMyw3Ny43NjYzNyAwLDExMi42MDcxNGwtOTcuNTIwNjUsLTU2LjMwMzU3IiBmaWxsPSIjMDBmZjAwIiBzdHJva2U9IiNmZmZmZmYiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3Mjc1OjExMi42Nzc0MDUtLT4=';

  class ColorTest {

    constructor() {}

    getInfo() {
      return {

        id: 'ColorTest',
        name: 'Color Test',
        
        color1: '#146600',
        
        menuIconURI: icon,

        blocks: [
          
          {
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[bool]',
            arguments: {
              bool: {
                type: Scratch.ArgumentType.BOOLEAN,
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
