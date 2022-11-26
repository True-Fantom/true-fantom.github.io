(function(Scratch) {
  'use strict';
  
  const icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCwwLDQ1LDQ1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjUsLTE1Ny41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjE3LjUsMTgwYzAsLTEyLjQgMTAuMSwtMjIuNSAyMi41LC0yMi41YzEyLjQsMCAyMi41LDEwLjEgMjIuNSwyMi41YzAsMTIuNCAtMTAuMSwyMi41IC0yMi41LDIyLjVjLTEyLjQsMCAtMjIuNSwtMTAuMSAtMjIuNSwtMjIuNXoiIGZpbGw9IiM0MDQwNDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik0yNDAuMTM4OSwxNjkuMTkxMjF2OS42MTc1OGMwLDEuMDE3MjEgLTAuNTE3NSwxLjMzMDA4IC0xLjUzNDczLDEuMzMwMDhoLTkuMjA4MzNjLTEuMDE3NDIsMCAtMS41MzQ3MywtMC4zMTI4OCAtMS41MzQ3MywtMS4zMzAwOHYtOS42MTc1OGMwLC0xLjAxNzIxIDAuNTE3MzEsLTEuMzMwMDggMS41MzQ3MywtMS4zMzAwOGg5LjIwODMzYzEuMDE3MDEsMCAxLjUzNDczLDAuMzEyODggMS41MzQ3MywxLjMzMDA4eiIvPjxwYXRoIGQ9Ik0yNTIuMTM4OSwxODEuMTkxMjF2OS42MTc1OGMwLDEuMDE3MjEgLTAuNTE3NSwxLjMzMDA4IC0xLjUzNDczLDEuMzMwMDhoLTkuMjA4MzNjLTEuMDE3NDIsMCAtMS41MzQ3MywtMC4zMTI4OCAtMS41MzQ3MywtMS4zMzAwOHYtOS42MTc1OGMwLC0xLjAxNzIxIDAuNTE3MzEsLTEuMzMwMDggMS41MzQ3MywtMS4zMzAwOGg5LjIwODMzYzEuMDE3MDEsMCAxLjUzNDczLDAuMzEyODggMS41MzQ3MywxLjMzMDA4eiIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoyMi41OjIyLjUtLT4=";

  class Fantøm {

    constructor() {}

    getInfo() {
      return {

        id: 'Fantom',
        name: 'Fantøm',

        color1: '#404040',
        
        menuIconURI: icon,

        blocks: [
          {
            opcode: 'isExactly',

            blockType: Scratch.BlockType.BOOLEAN,

            text: '[A] == [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLE'
              }
            }
          },
          {
            opcode: 'isLessOrEqual',

            blockType: Scratch.BlockType.BOOLEAN,

            text: '[A] <= [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              }
            }
          },
          {
            opcode: 'isMoreOrEqual',

            blockType: Scratch.BlockType.BOOLEAN,

            text: '[A] >= [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              }
            }
          },
          {
            opcode: 'trueBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            opcode: 'falseBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          {
            opcode: 'exponent',

            blockType: Scratch.BlockType.REPORTER,

            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER
              },
              B: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'pi',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pi'
          },
          {
            opcode: 'ternaryOperator',

            blockType: Scratch.BlockType.REPORTER,

            text: 'if [A] then [B] else [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'letters',

            blockType: Scratch.BlockType.REPORTER,

            text: 'letters [START] to [END] of [STRING]',
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'fetchFrom',

            blockType: Scratch.BlockType.REPORTER,

            text: 'get [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          },
          {
            opcode: 'parseJSON',

            blockType: Scratch.BlockType.REPORTER,

            text: '[PATH] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
              }
            }
          },
          {
            opcode: 'stringToBoolean',

            blockType: Scratch.BlockType.BOOLEAN,

            text: '[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'true'
              }
            }
          },
          {
            opcode: 'regexReplace',

            blockType: Scratch.BlockType.REPORTER,

            text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'bananas are awesome. i like bananas.'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          }
        ]
      }
    }

    isExactly({A, B}) {
      return A === B;
    }

    isLessOrEqual({A, B}) {
      return A <= B;
    }

    isMoreOrEqual({A, B}) {
      return A >= B;
    }

    trueBlock() {
      return true;
    }

    falseBlock() {
      return false;
    }

    exponent({A, B}) {
      return Math.pow(A, B);
    }

    pi() {
      return Math.PI;
    }

    ternaryOperator({A, B, C}) {
      return A ? B : C;
    }

    letters({STRING, START, END}) {
      return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }

    fetchFrom({URL}) {
      return fetch(URL).then(res => res.text())
        .catch(err => '');
    }

    parseJSON({PATH, JSON_STRING}) {
      try {
        const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
        if (path[0] === '') path.splice(0, 1);
        if (path[path.length - 1] === '') path.splice(-1, 1);
        let json;
        try {
          json = JSON.parse(' ' + JSON_STRING);
        } catch (e) {
          return e.message;
        }
        path.forEach(prop => json = json[prop]);
        if (json === null) return 'null';
        else if (json === undefined) return '';
        else if (typeof json === 'object') return JSON.stringify(json);
        else return json.toString();
      } catch (err) {
        return '';
      }
    }

    stringToBoolean({STRING}) {
      return STRING;
    }

    regexReplace({STRING, REGEX, NEWSTRING}) {
      return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
    }

  }

  Scratch.extensions.register(new Fantøm());
  
})(Scratch);
