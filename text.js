(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgzLC02Ny4zMjI2NCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNy4zMjI4MywxODAuMDAwMDRjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNTljMDU5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zMDUuNTg2NTcsMTUyLjQzMzU2aC0zNy43MzMyNHYtMTcuNTYzOWgzNy42Njk2MWwtMC4xNTA4NCwtMzYuNTkxNWgyMS4xMjk5NXYzNi41OTE1aDM4LjI5OTA5djE3LjU2MzloLTM4LjI5OTA5bDEuMzkzOTcsNjkuMjc5ODdjLTAuMDI5NDUsMi43Mjk2MiAwLjIzODg0LDUuNDU0MzEgMC44MDAxMyw4LjEyNTc1YzEuNzA5MjIsNy42Nzc3IDYuMTYxMTgsMTIuMTAxMjIgMTMuMzU1OSwxMy4yNzA1MWMxLjM2OTIzLDAuMjE1NzggMi43NTM2LDAuMzIxIDQuMTM5NzIsMC4zMTQ2OWMzLjQxMzU5LDAgNy4zODQ5OSwtMC41NTcwMSAxMS45MTQxOSwtMS42NzEwMWMyLjA2NDY1LC0wLjUxMzE4IDQuMTExNjQsLTEuMDk0OSA2LjEzNzYxLC0xLjc0NDIxbDMuOTAzMSwxNi4xMDAyNmMtNC42NTQ5MSwxLjk3MzA2IC05LjQ5ODU2LDMuNDY3MiAtMTQuNDU2MDcsNC40NTkyOGMtMy44MzU3NiwwLjc1ODI5IC03LjczNTg1LDEuMTQzOSAtMTEuNjQ1ODQsMS4xNTE0MWMtNC4xNTIzMiwwLjAzNjQ2IC04LjI4OTQ3LC0wLjUwNTQxIC0xMi4yOTIzLC0xLjYxMDAzYy01LjM5NjQ1LC0xLjUwNTU1IC0xMC4zNDUzNywtNC4zMDE5MyAtMTQuNDE5NDgsLTguMTQ3N2MtMy44NzQ5MSwtMy43MTI0NCAtNi43MTQzNywtOC4zNzE0NiAtOC4yMzc5NiwtMTMuNTE2ODljLTEuMDQyNDcsLTMuMzE5MjUgLTEuNzAxOTEsLTYuOTg5NzkgLTEuOTc4MzgsLTExLjAxMTZjLTAuMTAxOTUsLTEuNDk4MDggLTAuMTUyMzgsLTIuOTk5MiAtMC4xNTEyNSwtNC41MDA3NHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxNjk5OTk5OTk5OToxMTIuNjc3MzY1LS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  const toScratchData = val => {
    return val === undefined || typeof val === 'object' ? '' : val;
  };

  const toJsonData = val => {
    return JSON.parse(val);
  };
  const toJsonString = val => {
    return JSON.stringify(val, (key, value) => {return value === undefined ? '' : value}, 0);
  };

  const isNotPrimitiveData = val => {
    return val instanceof Object;
  };
  const isArray = val => {
    return val instanceof Array;
  };
  const isObject = val => {
    return val instanceof Object && !(val instanceof Array);
  };

  const toArray = val => {
    return isArray(val) ? val : isObject(val) ? Object.values(val) : [val];
  };
  const toObject = val => {
    return isObject(val) ? val : isArray(val) ? val.reduce((array, currentValue, currentIndex) => ({...array, [currentIndex + 1] : currentValue}), {}) : {'1':val};
  };

  const dataValues = val => {
    return Object.values(toObject(val));
  };
  const dataKeys = val => {
    return Object.keys(toObject(val));
  };
  const dataPairs = val => {
    return toObject(val);
  };
  const dataMap = val => {
    return Object.entries(toObject(val));
  };

  const isUpperCase = val => {
    return val.toUpperCase() === val && val.toUpperCase() !== val.toLowerCase();
  };
  const isLowerCase = val => {
    return val.toLowerCase() === val && val.toUpperCase() !== val.toLowerCase();
  };
  const isNoneCase = val => {
    return val.toUpperCase() === val.toLowerCase();
  };

  const isNotActuallyZero = val => {
    if (typeof val !== 'string') return false;
    for (let i = 0; i < val.length; i++) {
      const code = val.charCodeAt(i);
      // '0'.charCodeAt(0) === 48
      // '\t'.charCodeAt(0) === 9
      // We include tab for compatibility with scratch-www's broken trim() polyfill.
      // https://github.com/TurboWarp/scratch-vm/issues/115
      // https://scratch.mit.edu/projects/788261699/
      if (code === 48 || code === 9) {
        return false;
      }
    }
    return true;
  };

  const exactlyCompare = (v1, v2) => {
    let n1 = Number(v1);
    let n2 = Number(v2);
    if (n1 === 0 && isNotActuallyZero(v1)) {
      n1 = NaN;
    } else if (n2 === 0 && isNotActuallyZero(v2)) {
      n2 = NaN;
    }
    if (isNaN(n1) || isNaN(n2)) {
      // At least one argument can't be converted to a number.
      // Scratch compares strings as case insensitive, but it shouldn't be here
      const s1 = String(v1);
      const s2 = String(v2);
      if (s1 < s2) {
        return -1;
      } else if (s1 > s2) {
        return 1;
      }
      return 0;
    }
    // Handle the special case of Infinity
    if (
      (n1 === Infinity && n2 === Infinity) ||
      (n1 === -Infinity && n2 === -Infinity)
    ) {
      return 0;
    }
    // Compare as numbers.
    return n1 - n2;
  };

  class ScratchText {

    getInfo() {
      return {

        id: 'truefantomtext',
        name: 'Text',

        color1: '#59c059',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'exactly_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≡ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
              }
            }
          },
          {
            opcode: 'not_exactly_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≢ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50
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
            opcode: 'repeat_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'repeat [B] times [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              }
            }
          },
          {
            opcode: 'reverse_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          '---',
          {
            opcode: 'is_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [B] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'case_menu'
              }
            }
          },
          {
            opcode: 'is_wave_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [B] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'wave_case_menu'
              }
            }
          },
          {
            opcode: 'is_capitalize_case_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is capitalize [A] split by [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple-banana'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '-'
              }
            }
          },
          {
            opcode: 'case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[B] of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'case_menu'
              }
            }
          },
          {
            opcode: 'wave_case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[B] of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'wave_case_menu'
              }
            }
          },
          {
            opcode: 'capitalize_case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'capitalize of [A] split by [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple-banana'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '-'
              }
            }
          },
          {
            opcode: 'swap_case_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'swap case of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          '---',
          {
            opcode: 'to_unicode_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] to [IMAGE] unicode',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          },
          {
            opcode: 'of_unicode_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] of [IMAGE] unicode',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[97,112,112,108,101]'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          },
          '---',
          {
            opcode: 'exponential_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'number [A] as exponential',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'text_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'number [A] as text',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          }
        ],
        menus: {
          case_menu: {
            acceptReporters: false,
            items: ['uppercase', 'lowercase']
          },
          wave_case_menu: {
            acceptReporters: false,
            items: ['wave one', 'wave two']
          }
        }
      };
    }

    exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) === 0;
    }
    not_exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) !== 0;
    }
    exactly_cont_block({A, B}) {
      return cast.toString(A).includes(cast.toString(B));
    }
    repeat_block({A, B}) {
      return cast.toString(A).repeat(Math.floor(cast.toNumber(B)));
    }
    reverse_block({A}) {
      return Array.from(cast.toString(A)).reverse().join('');
    }
    is_case_block({A, B}) {
      const mode = cast.toString(B).toLowerCase();
      const text = cast.toString(A);
      switch (mode) {
        case 'uppercase': return isUpperCase(text);
        case 'lowercase': return isLowerCase(text);
      }
    }
    is_wave_case_block({A, B}) {
      const mode = cast.toString(B).toLowerCase();
      const text = cast.toString(A);
      let wave;
      switch (mode) {
        case 'wave one':
          wave = Array.from(text).map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
          return wave === text && !isNoneCase(text);
        case 'wave two':
          wave = Array.from(text).map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase()).join('');
          return wave === text && !isNoneCase(text);
      }
    }
    is_capitalize_case_block({A, B}) {
      const split = cast.toString(B);
      const text = cast.toString(A).split(split).map(word => (word !== '' ? word[0].toUpperCase() + word.substring(1).toLowerCase() : '') + split).join('');
      const capitalize = text.substring(0, text.length - split.length);
      return capitalize === capitalize && !isNoneCase(capitalize);
    }
    case_block({A, B}) {
      const mode = cast.toString(B).toLowerCase();
      const text = cast.toString(A);
      switch (mode) {
        case 'uppercase': return text.toUpperCase();
        case 'lowercase': return text.toLowerCase();
      }
    }
    wave_case_block({A, B}) {
      const mode = cast.toString(B).toLowerCase();
      const text = cast.toString(A);
      switch (mode) {
        case 'wave one': return Array.from(text).map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
        case 'wave two': return Array.from(text).map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase()).join('');
      }
    }
    capitalize_case_block({A, B}) {
      const split = cast.toString(B);
      const text = cast.toString(A).split(split).map(word => (word !== '' ? word[0].toUpperCase() + word.substring(1).toLowerCase() : '') + split).join('');
      return text.substring(0, text.length - split.length);
    }
    swap_case_block({A}) {
      return Array.from(cast.toString(A)).map(char => isUpperCase(char) ? char.toLowerCase() : char.toUpperCase()).join('');
    }
    to_unicode_block({A}) {
      return toJsonString(Array.from(cast.toString(A)).map(char => char.charCodeAt(0)));
    }
    of_unicode_block({A}) {
      try {
        return toArray(toJsonData(cast.toString(A))).map(code => String.fromCharCode(code)).join('');
      } catch(err) {return ''}
    }
    exponential_block({A}) {
      return cast.toNumber(A).toExponential();
    }
    text_block({A}) {
      return cast.toNumber(A).toLocaleString();
    }
  }

  Scratch.extensions.register(new ScratchText());
})(Scratch);
