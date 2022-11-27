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
        color2: '#303030',
        color3: '#1c1c1c',
        
        menuIconURI: icon,

        blocks: [
          
          { 
            opcode: 'str_equal_block',
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
            opcode: 'str_cont_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] contains [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLE'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              }
            }          
          },
          
          {
            opcode: 'isLessOrEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
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
            text: '[A] ≥ [B]',
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
            opcode: 'matrix_block',

            blockType: Scratch.BlockType.REPORTER,

            text: 'matrix [matrix]',
            arguments: {
              matrix: {
                type: Scratch.ArgumentType.MATRIX,
                defaultValue: '1111111111111111111111111'
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
            opcode: 'bool_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[bool]',
            arguments: {
              bool: {
                type: Scratch.ArgumentType.STRING,  
                menu: "bool_menu"
              }
            }
          },

          {
            opcode: 'bool_xor_block',
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
            opcode: 'num_xor_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] xor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            }
          },          
          
          {
            opcode: 'exponent',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            }
          },
          
          {
            opcode: 'cot_sec_csc_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: "cot_sec_csc_menu"
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              }
            }
          },          
          
          {
            opcode: 'root_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[root] √ [num]',
            arguments: {
              root: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              num: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            }
          }, 
          
          {
            opcode: 'ternaryOperator',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [B] else [C] in [A]',
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
            opcode: 'reverseTxt',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'letterCaseBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: '[oper] [TEXT]',
            arguments: {
              oper: {
                type: Scratch.ArgumentType.STRING,
                menu: "letter_case_menu"
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLES is cool'
              }
            }
          },
          
          {
            opcode: 'word_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word [num] separated by [seper] in [string]',
            arguments: {
              num: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              seper: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },
            
          {
            opcode: 'word_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word count separated by [seper] in [string]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              seper: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },          
          
          {
            opcode: 'repeat_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'repeat [NUM] times [TEXT]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          },          
          
          {
            opcode: 'regexReplace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [REGEX] with [NEWSTRING] in [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'bananas'
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
          
        ],
        
        menus: {
           
          letter_case_menu: {  
            items: ['uppercase', 'lowercase', 'capitalize', 'capitalize all', 'swap', 'wave one', 'wave two'],
            acceptReporters: true
          },

          bool_menu: {  
            items: ['true', 'false'],
            acceptReporters: true
          },
            
          cot_sec_csc_menu: {  
            items: ['cot', 'sec', 'csc'],
            acceptReporters: true
          }            
          
        }
      }
    }
    
    str_equal_block({A, B}) {
      return A === B;
    }

    str_cont_block({A, B}) {
      return A.includes(B);
    }    
    
    isLessOrEqual({A, B}) {
      return A <= B;
    }

    isMoreOrEqual({A, B}) {
      return A >= B;
    }
    
    matrix_block({matrix}) {
      return matrix    
    }
    
    stringToBoolean({STRING}) {
      return STRING;
    }    
    
    bool_block({bool}) {
      if (bool === 'true') {
        return true;
      }
      else {
        return false;
      }
    }

    bool_xor_block({A, B}) {
      if (A ^ B > 0) {
        return true;
      }
      else {
        return false;
      }
    }    
    
    num_xor_block({A, B}) {
      return A ^ B;
    }    
    
    exponent({A, B}) {
      return Math.pow(A, B);
    }
    
    cot_sec_csc_block({A, B}) {
      if (A === 'cot') {
        return 1/Math.tan(B);
      }
      if (A === 'sec') {
        return 1/Math.cos(B);
      }
      if (A === 'csc') {
        return 1/Math.sin(B);
      }
    }

    root_block({root, num}) {
      return num ** (1/root);
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

    reverseTxt({TEXT}) {
      var emptyStr = "";
      var txt = TEXT.toString();
      var localCount = TEXT.length - 1;
      while (localCount != -1) {
        emptyStr = emptyStr + txt.charAt(localCount);
        localCount -= 1;
      }
      return emptyStr;    
    }    
    
    letterCaseBlock({oper, TEXT}) {  
      if (oper === 'uppercase') {
        return TEXT.toUpperCase();
      }
      if (oper === 'lowercase') {
        return TEXT.toLowerCase();
      }
      if (oper === 'capitalize') {
        return TEXT.charAt(0).toUpperCase() + TEXT.slice(1).toLowerCase();
      }
      if (oper === 'capitalize all') {
        var splitStr = TEXT.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' ');
      }
      if (oper === 'swap') {
        let str = TEXT;
        let str2 = '';  
        for (let i = 0; i < str.length; i++) {
          if (str[i].toUpperCase()!=str[i].toLowerCase()) {
            if (str[i].toUpperCase()==str[i]) {
              str2 += str[i].toLowerCase();
            } 
            else {
              str2 += str[i].toUpperCase();
            }
          }
          else {str2 += str[i]};
        } 
        return str2;
      }
      if (oper === 'wave one') {
        let str = TEXT;
        let str2 = '';
        for (let i = 0; i < str.length; i++) {
          if (i%2 == 0) {
            str2 += str[i].toUpperCase();  
          }
          else {str2 += str[i].toLowerCase()};
        } 
        return str2;
      }      
      if (oper === 'wave two') {
        let str = TEXT;
        let str2 = '';
        for (let i = 0; i < str.length; i++) {
          if (i%2 == 0) {
            str2 += str[i].toLowerCase();  
          }
          else {str2 += str[i].toUpperCase()};
        } 
        return str2;
      }
    }
    
    word_block({num, string, seper}) {
      var str = string;
      var res = str.split(seper);
      return (res[num - 1]);
    }  
    
    word_count_block({string, seper}) {
      var str = string;
      var res = str.split(seper);
      return res.length;
    }
    
    repeat_block({NUM, TEXT}) {
      return TEXT.repeat(Math.floor(NUM));
    }    
    
    regexReplace({STRING, REGEX, NEWSTRING}) {
      return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
    }
    
  }

  Scratch.extensions.register(new Fantøm());
  
})(Scratch);
