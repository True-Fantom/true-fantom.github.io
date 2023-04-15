(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgzLC02Ny4zMjI2NCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNy4zMjI4MywxODAuMDAwMDRjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNTljMDU5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zMDQuMjgyNzcsMTUxLjc1ODkyaC0zOC42NTY2OXYtMTcuOTkzNzVoMzguNTkxNTFsLTAuMTU0NTMsLTM3LjQ4NzAxaDIxLjY0NzA3djM3LjQ4NzAxaDM5LjIzNjM5djE3Ljk5Mzc1aC0zOS4yMzYzOWwxLjQyODA4LDcwLjk3NTM4Yy0wLjAzMDE3LDIuNzk2NDIgMC4yNDQ2OCw1LjU4Nzc5IDAuODE5NzEsOC4zMjQ2MWMxLjc1MTA1LDcuODY1NiA2LjMxMTk3LDEyLjM5NzM3IDEzLjY4Mjc2LDEzLjU5NTI4YzEuNDAyNzQsMC4yMjEwNiAyLjgyMDk5LDAuMzI4ODYgNC4yNDEwMywwLjMyMjM5YzMuNDk3MTMsMCA3LjU2NTcyLC0wLjU3MDY0IDEyLjIwNTc3LC0xLjcxMTljMi4xMTUxOCwtMC41MjU3NCA0LjIxMjI3LC0xLjEyMTY5IDYuMjg3ODIsLTEuNzg2ODlsMy45OTg2MiwxNi40OTQyOWMtNC43Njg4MywyLjAyMTM1IC05LjczMTAyLDMuNTUyMDUgLTE0LjgwOTg2LDQuNTY4NDFjLTMuOTI5NjMsMC43NzY4NSAtNy45MjUxNywxLjE3MTg5IC0xMS45MzA4NSwxLjE3OTU5Yy00LjI1Mzk0LDAuMDM3MzUgLTguNDkyMzQsLTAuNTE3NzggLTEyLjU5MzEzLC0xLjY0OTQzYy01LjUyODUyLC0xLjU0MjQgLTEwLjU5ODU2LC00LjQwNzIxIC0xNC43NzIzNywtOC4zNDcxYy0zLjk2OTc0LC0zLjgwMzI5IC02Ljg3ODY5LC04LjU3NjMzIC04LjQzOTU3LC0xMy44NDc2OWMtMS4wNjc5OCwtMy40MDA0OCAtMS43NDM1NiwtNy4xNjA4NiAtMi4wMjY3OSwtMTEuMjgxMDljLTAuMTA0NDQsLTEuNTM0NzQgLTAuMTU2MTEsLTMuMDcyNiAtMC4xNTQ5NSwtNC42MTA4OXoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxNjk5OTk5OTk5OToxMTIuNjc3MzY1LS0+';
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
            opcode: 'exponential_block', // Was moved to "Strings" extension
            blockType: Scratch.BlockType.REPORTER,
            text: 'exponential of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'text_block', // Was moved to "Strings" extension
            blockType: Scratch.BlockType.REPORTER,
            text: 'text of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          }
        ],
        menus: {
          boolean_menu: {
            acceptReporters: false,
            items: ['true', 'false']
          },
          floor2_ceiling2_menu: {
            acceptReporters: false,
            items: ['floor', 'ceiling']
          },
          max_min_menu: {
            acceptReporters: false,
            items: ['max', 'min']
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
    exponential_block({A}) {
      return cast.toNumber(A).toExponential();
    }
    text_block({A}) {
      return cast.toNumber(A).toLocaleString();
    }
  }

  Scratch.extensions.register(new ScratchText());
})(Scratch);
