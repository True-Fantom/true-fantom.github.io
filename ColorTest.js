(function(Scratch) {
  'use strict';
  
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjY3LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTI3LjMyMjY4LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiM0MDQwNDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE4LjUiPjxwYXRoIGQ9Ik0yNDAuNzA5NTksMTI0Ljc4MTI1djQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ2LDYuNzk0OTZoLTQ3LjA0MjQ4Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OGM1LjE5NTU5LDAgNy44NDA0NiwxLjU5ODQgNy44NDA0Niw2Ljc5NDk2eiIvPjxwYXRoIGQ9Ik0zMDIuMDEzODIsMTg2LjA4NTUydjQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ1LDYuNzk0OTZoLTQ3LjA0MjQ5Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OWM1LjE5NTU4LDAgNy44NDA0NSwxLjU5ODQgNy44NDA0NSw2Ljc5NDk2eiIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MzI1OjExMi42Nzc0MDUtLT4=';

  class ColorTest {

    constructor() {}

    getInfo() {
      return {

        id: 'ColorTest',
        name: 'Color Test',
        
        color1: '#ff0000',
        color2: '#00ff00',
        color3: '#0000ff',
        
        menuIconURI: icon,

        blocks: [
          
          {
            opcode: 'xor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },    
          
          {
            opcode: 'equ_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] equ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          
          '---',
          
          {
            opcode: 'less_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          
          {
            opcode: 'more_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≥ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },                
          
          '---',
          
          {
            opcode: 'string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'string_in_boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[BOOL]',
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.STRING,  
                menu: 'bool_menu'
              }
            }
          },
        ],
        
        menus: {
           
          bool_menu: {
            items: ['true', 'false'],
            acceptReporters: true
          }
        }
      }
    } 
    
    less_or_equal_block({A, B}) {
      return A <= B;
    }

    more_or_equal_block({A, B}) {
      return A >= B;
    }
    
    string_in_boolean_block({STRING}) {
      return String(STRING);
    }    
    
    bool_block({BOOL}) {
      if (typeof BOOL === 'string') {
        if (BOOL.toLowerCase() === 'false') {
          BOOL = false;
        }
      }
      if (Boolean(BOOL)) {
        return true;
      }
      else {
        return false;
      }
    }

    xor_block({A, B}) {
      if (typeof A === 'string') {
        if (A.toLowerCase() === 'false') {
          A = false;
        }
      }
      if (typeof B === 'string') {
        if (B.toLowerCase() === 'false') {
          B = false;
        }
      }
      if (Boolean(A) ^ Boolean(B) > 0) {
        return true;
      }
      else {
        return false;
      }
    }    
    
    equ_block({A, B}) {
      if (typeof A === 'string') {
        if (A.toLowerCase() === 'false') {
          A = false;
        }
      }
      if (typeof B === 'string') {
        if (B.toLowerCase() === 'false') {
          B = false;
        }
      }
      return (Boolean(A) == Boolean(B));
    }   
    
    string_block({A}) {
      return String(A);
    }
    
  }

  Scratch.extensions.register(new Color Test());
  
})(Scratch);
