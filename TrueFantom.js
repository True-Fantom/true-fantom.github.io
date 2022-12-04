(function(Scratch) {
  'use strict';
  
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCwwLDQ1LDQ1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjUsLTE1Ny41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjE3LjUsMTgwYzAsLTEyLjQgMTAuMSwtMjIuNSAyMi41LC0yMi41YzEyLjQsMCAyMi41LDEwLjEgMjIuNSwyMi41YzAsMTIuNCAtMTAuMSwyMi41IC0yMi41LDIyLjVjLTEyLjQsMCAtMjIuNSwtMTAuMSAtMjIuNSwtMjIuNXoiIGZpbGw9IiM0MDQwNDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik0yNDAuMTM4OSwxNjkuMTkxMjF2OS42MTc1OGMwLDEuMDE3MjEgLTAuNTE3NSwxLjMzMDA4IC0xLjUzNDczLDEuMzMwMDhoLTkuMjA4MzNjLTEuMDE3NDIsMCAtMS41MzQ3MywtMC4zMTI4OCAtMS41MzQ3MywtMS4zMzAwOHYtOS42MTc1OGMwLC0xLjAxNzIxIDAuNTE3MzEsLTEuMzMwMDggMS41MzQ3MywtMS4zMzAwOGg5LjIwODMzYzEuMDE3MDEsMCAxLjUzNDczLDAuMzEyODggMS41MzQ3MywxLjMzMDA4eiIvPjxwYXRoIGQ9Ik0yNTIuMTM4OSwxODEuMTkxMjF2OS42MTc1OGMwLDEuMDE3MjEgLTAuNTE3NSwxLjMzMDA4IC0xLjUzNDczLDEuMzMwMDhoLTkuMjA4MzNjLTEuMDE3NDIsMCAtMS41MzQ3MywtMC4zMTI4OCAtMS41MzQ3MywtMS4zMzAwOHYtOS42MTc1OGMwLC0xLjAxNzIxIDAuNTE3MzEsLTEuMzMwMDggMS41MzQ3MywtMS4zMzAwOGg5LjIwODMzYzEuMDE3MDEsMCAxLjUzNDczLDAuMzEyODggMS41MzQ3MywxLjMzMDA4eiIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoyMi41OjIyLjUtLT4=';

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
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'A'
              }
            }          
          },
          
          '---',
          
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
                defaultValue: 0
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
                defaultValue: 0
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
          
          '---',             
          
          {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
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
            text: '[ROOT] √ [NUM]',
            arguments: {
              ROOT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
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
                defaultValue: '5'
              }
            }
          },  
          
          '---',
          
          {
            opcode: 'date_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: 'date_menu'
              }  
            }
          },
          
          '---',
          
          {
            opcode: 'value_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                menu: 'value_menu'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'ternary_operator_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [A] else [B] in [BOOL]',
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'start_end_letters_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'letters [START] to [END] in [STRING]',
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
          
          '---',
          
          {
            opcode: 'letter_case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[OPER] [TEXT]',
            arguments: {
              OPER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'letter_case_menu'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'APPLES is cool'
              }
            }
          },
          
          {
            opcode: 'defining_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'first character is [OPER] in [TEXT] ?',
            arguments: {
              OPER: {
                type: Scratch.ArgumentType.STRING,
                menu: 'defining_case_menu'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          {
            opcode: 'sensitive_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'first character is case sensitive in [TEXT] ?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1 apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'word_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word [NUM] separated by [SEPER] in [STRING]',
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              SEPER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },
            
          {
            opcode: 'word_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'word count separated by [SEPER] in [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              },
              SEPER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              } 
            }
          },          
          
          '---',
          
          {
            opcode: 'new_line_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'new line',
            disableMonitor: true,
            arguments: {}
          },
          
          {
            opcode: 'join_new_line_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join on new line [A] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          },
          
          {
            opcode: 'line_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'line count in [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'red apple'
              }
            }
          }, 
          
          '---',
          
          {
            opcode: 'triple_join_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [A] [B] [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple '
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana '
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'orange'
              }
            }
          },
          
          {
            opcode: 'reverse_string_block',
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
          
          '---',
          
          {
            opcode: 'replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [REGEX] with [NEWSTRING] in [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'BANANAs'
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
          },
          
          {
            opcode: 'str_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'str replace [REGEX] with [NEWSTRING] in [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'BANANAs'
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
          },
          
          '---',
          
          {
            opcode: 'parse_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[PATH] in [JSON_STRING]',
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
          
          '---',
          
          {
            opcode: 'is_nan_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is NaN [TEXT] ?',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'get_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ],
        
        menus: {
           
          letter_case_menu: {  
            items: ['uppercase', 'lowercase', 'capitalize', 'capitalize all', 'swap', 'wave one', 'wave two'],
            acceptReporters: true
          },
          
          defining_case_menu: {
            items: ['uppercase', 'lowercase'],
            acceptReporters: true
          },

          bool_menu: {
            items: ['true', 'false'],
            acceptReporters: true
          },
          
          date_menu: {  
            items: ['millisecond', 'week number'],
            acceptReporters: false
          },
        
          value_menu: {  
            items: ['pi', 'e', 'infinity'],
            acceptReporters: true
          }
          
        }
      }
    }
    
    str_equal_block({A, B}) {
      return String(A) == String(B);
    }

    str_cont_block({A, B}) {
      return String(A).includes(String(B));
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
      if (Boolean(BOOL) && BOOL!=='false') {
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
    
    exponent_block({A, B}) {
      return Math.pow(A, B);
    }

    root_block({ROOT, NUM}) {
      return NUM ** (1/ROOT);
    }
    
    negative_block({A}) {
      return 0 - A;
    }
    
    value_block({A}) {
      if (String(A).toLowerCase() === 'pi') {
        return Math.PI;
      }
      else if (String(A).toLowerCase() === 'e') {
        return Math.E;
      }
      else if (String(A).toLowerCase() === 'infinity') {
        return Infinity;
      }
      else {
        return '';
      }
    }
    
    string_block({A}) {
      return String(A);
    }
    
    date_block({A}) {
      if (String(A).toLowerCase() === 'millisecond') {
        return Date.now() % 1000;
      }
      else if (String(A).toLowerCase() === 'week number') {
        let date = new Date(Date.now());
        return Math.ceil(date.getDate() / 7);
      }
      else {
        return '';
      }
    }
    
    ternary_operator_block({BOOL, A, B}) {
      if (typeof BOOL === 'string') {
        if (BOOL.toLowerCase() === 'false') {
          BOOL = false;
        }
      }
      return Boolean(BOOL) ? String(A) : String(B);
    }

    start_end_letters_block({STRING, START, END}) {
      return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }

    is_nan_block({TEXT}) {
      return isNaN(TEXT);
    }
    
    get_url_block({URL}) {
      return fetch(URL).then(res => res.text())
        .catch(err => '');
    }

    parse_json_block({PATH, JSON_STRING}) {
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

    reverse_string_block({TEXT}) {
      var emptyStr = '';
      var txt = TEXT.toString();
      var localCount = TEXT.length - 1;
      while (localCount != -1) {
        emptyStr = emptyStr + txt.charAt(localCount);
        localCount -= 1;
      }
      return emptyStr;    
    }    
    
    letter_case_block({OPER, TEXT}) {  
      if (String(OPER).toLowerCase() === 'uppercase') {
        return TEXT.toUpperCase();
      }
      else if (String(OPER).toLowerCase() === 'lowercase') {
        return TEXT.toLowerCase();
      }
      else if (String(OPER).toLowerCase() === 'capitalize') {
        return TEXT.charAt(0).toUpperCase() + TEXT.slice(1).toLowerCase();
      }
      else if (String(OPER).toLowerCase() === 'capitalize all') {
        var splitStr = TEXT.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' ');
      }
      else if (String(OPER).toLowerCase() === 'swap') {
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
      else if (String(OPER).toLowerCase() === 'wave one') {
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
      else if (String(OPER).toLowerCase() === 'wave two') {
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
      else {
        return '';  
      }
    }
    
    defining_case_block({OPER, TEXT}) {
      if (TEXT === '') {
        return '';
      }
      else {
        if (String(OPER).toLowerCase() === 'uppercase') {
          if (TEXT[0] === TEXT[0].toLowerCase()) {
            return false;
          }
          else {
            return true;
          }
        }
        else if (String(OPER).toLowerCase() === 'lowercase') {
          if (TEXT[0] === TEXT[0].toLowerCase()) {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return '';
        }
      }
    }
    
    sensitive_case_block({TEXT}) {
      if (TEXT === '') {
        return '';
      }
      else {
        if (TEXT[0].toUpperCase() === TEXT[0].toLowerCase()) {
          return false;
        }
        else {
          return true;
        }
      }
    }
    
    word_block({NUM, STRING, SEPER}) {
      var str = STRING;
      var res = str.split(SEPER);
      return (res[NUM - 1]);
    }  
    
    word_count_block({STRING, SEPER}) {
      var str = STRING;
      var res = str.split(SEPER);
      return res.length;
    }
    
    new_line_block(){
      return '\n';
    }
    
    join_new_line_block({A, B}){
      return A + '\n' + B;
    }
    
    line_count_block({STRING}) {
      var lines = STRING.split(/\r\n|\r|\n/);
      return lines.length;
    }
    
    triple_join_block({A, B, C}){
      return A + B + C;
    }
    
    repeat_block({NUM, TEXT}) {
      return TEXT.repeat(Math.floor(NUM));
    }    
    
    replace_block({STRING, REGEX, NEWSTRING}) {
      return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
    }
    
    str_replace_block({STRING, REGEX, NEWSTRING}) { 
      return STRING.toString().replace(new RegExp(REGEX, 'g'), NEWSTRING);
    }
    
  }

  Scratch.extensions.register(new Fantøm());
  
})(Scratch);
