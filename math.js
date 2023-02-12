(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDcuMzIyODEsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzk0LjEzMDk3LDEzMi41MDkyN2wtMzUuMjQ3NTIsLTAuMDQ5MjNjLTAuOTQyMDgsNDEuNDQ4ODkgLTIxLjE1OTAxLDk0LjU5NzU0IDcuNDYwMzgsOTQuMjEzMzljMTAuNTAwMTgsLTAuNDQ4MTggMTEuMDYzNDgsLTE2LjA2MTEgMTAuODI1NjgsLTI2LjMwNTE4bDE5LjIyODE0LDEzLjM2NjY3YzAsMTIuNDIwOTQgLTEwLjE0MTgxLDM0Ljg1MjU0IC0zNS4xMTE3NCwzNC4wMjAyYy0xNS4xNzQwMywtMC4xMjgwNSAtMjkuNDQ4NjIsLTExLjI0NDA4IC0yOS44MzI3OCwtMzAuMTk1NjJjMC41MTIyLC0yOC40OTEzMyA2LjMwODAyLC01Ni4zMDg4OSA3Ljk3MjY3LC04NS4zNzY0NWwtMjYuMDA4NDUsLTAuNTY0MjhjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNS40OTYxIC0zNC41MzIyMiwxMTYuMzI4NDNjLTcuNjgzMDYsLTAuMzIwMTIgLTE0Ljc4OTg4LC01LjgyNjMyIC0xNS41NTgxOSwtMTQuNzg5ODhjLTIuMTEyODQsLTE1LjgxNDI5IDMwLjY5MjYxLC0yNS4xNTk4MSAzMS44NDUwNiwtMTAyLjI0NjQ3Yy0zMS42OTI2MSwtMy41MjE0IC0zMS44MDU0NSwxNS42ODQwMyAtMzcuMTgzNTgsMjEuNzY2NDVsLTE0LjM4NjA2LC0xLjU4NDE1YzE4Ljc2NTU4LC00NC45NDMyNiA5LjQ1ODI5LC0zOS4xMTU4NCAxNTAuNzY1MTIsLTM4LjQzMTM1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxOTQ5OTk5OTk5ODoxMTIuNjc3NDA1LS0+';

  const Bool = (A) => {
    return typeof A === 'string' && A.toLowerCase() === 'false' ? false : Boolean(A);
  };

  const Num = (A) => {
    return typeof A === 'string' && isNaN(Number(A)) ? 0 : Number(A);
  };

  const JsonStr = (A) => {
    return JSON.stringify(A, (key, value) => {return value === undefined ? '' : value}, 0);
  };

  class Math01 {

    getInfo() {
      return {

        id: 'math01',
        name: 'Math',

        color1: '#59c059',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'root_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] √ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'negative_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '- [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          '---',
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
                defaultValue: '50'
              }
            }
          },
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
                defaultValue: '50'
              }
            }
          },
          { 
            opcode: 'exactly_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≡ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          '---',
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
          '---',
          {
            opcode: 'exactly_cont_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] exactly contains [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              }
            }
          },
          '---',
          {
            opcode: 'atan2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'atan2 of x: [A] y: [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'round_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'round [A] to [B] digits after dot',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          '---',
          {
            opcode: 'trigonometry_functions_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] of [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: 'trigonometry_functions'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          '---',
          {
            opcode: 'pi_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pi'
          },
          {
            opcode: 'e_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'e'
          },
          {
            opcode: 'infinity_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'infinity'
          },
          '---',
          {
            opcode: 'is_number_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is number [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'is_int_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is int [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'is_float_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is float [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          }
        ],

        menus: {
          trigonometry_functions: { 
            acceptReporters: false,
            items: [
              {
                text: 'sinh',
                value: '1'
              },
              {
                text: 'cosh',
                value: '2'
              },
              {
                text: 'tanh',
                value: '3'
              },
              {
                text: 'asinh',
                value: '4'
              },
              {
                text: 'acosh',
                value: '5'
              },
              {
                text: 'atanh',
                value: '6'
              }
            ]
          }
        }
      }
    }

    exponent_block({A, B}) {
      return Num(A) ** Num(B);
    }
    root_block({A, B}) {
      return Num(B) ** (1 / Num(A));
    }
    negative_block({A}) {
      return 0 - Num(A);
    }
    more_or_equal_block({A, B}) {
      return A >= B;
    }
    less_or_equal_block({A, B}) {
      return A <= B;
    }
    exactly_equal_block({A, B}) {
      return A == B;
    }
    equ_block({A, B}) {
      return Bool(A) === Bool(B);
    }
    xor_block({A, B}) {
      return Bool(A) !== Bool(B);
    }
    exactly_cont_block({A, B}) {
      return String(A).includes(String(B));
    }
    atan2_block({A, B}) {
      return Math.atan2(Num(A), Num(B));
    }
    round_block({A, B}) {
      try {return Num(A).toFixed(Num(B))} catch(err) {return ''}
    }
    trigonometry_functions_block({A, B}) {
      switch (Number(A)) {
        case 1: return Math.sinh(B);
        case 2: return Math.cosh(B);
        case 3: return Math.tanh(B);
        case 4: return Math.asinh(B);
        case 5: return Math.acosh(B);
        case 6: return Math.atanh(B);
      }
    }
    pi_block() {
      return Math.PI;
    }
    e_block() {
      return Math.E;
    }
    infinity_block() {
      return Number.POSITIVE_INFINITY;
    }
    is_number_block({A}) {
      return !isNaN(Number(A));
    }
    is_int_block({A}) {
      return Number(A) % 1 === 0;
    }
    is_float_block({A}) {
      return Number(A) % 1 > 0;
    }
  }

  Scratch.extensions.register(new Math01());
})(Scratch);
