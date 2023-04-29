(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0ODEiIGhlaWdodD0iMjI1LjM1NDgiIHZpZXdCb3g9IjAsMCwyMjUuMzU0ODEsMjI1LjM1NDgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzIyODUsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTEyNy4zMjI4NywxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjZTYyODJhIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTI3LjMyMjg2LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNlNjI4MmEiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0zMDcuODI3MTEsMjM1LjAxMzU5Yy0xLjYxMjIzLDIuNzM3OTcgLTQuOTMyODgsMi40NjE0NyAtNy42NDkyMywxLjA4NTAzYy0yLjgzNDI1LC0xLjQzNjE5IC00MS42NTEwMSwtMjQuMDQ3NDkgLTQxLjY1MTAxLC0yNC4wNDc0OWMwLDAgLTAuMTUyMjEsMzAuMDcyMDYgLTAuMTUyMjEsNDkuMzE5ODhjMCwyLjU5NDYzIC0xLjUyNTkxLDQuNTU2MjcgLTQuMDk5NSw0Ljk1MTM5Yy0yLjU3MzYsMC4zOTUxMiAtMjQuODYyNzIsMC4wMDg2OSAtMjguMDM5MDQsLTAuMDE3MTZjLTMuMTc2MzIsLTAuMDI1ODUgLTQuNjk2NzMsLTIuOTgzNDQgLTQuNzY3MjUsLTYuMDc1NzNjLTAuMDcyMzcsLTMuMTc1NiAwLC00OC4wOTczMiAwLC00OC4wOTczMmMwLDAgLTI1Ljg4OTU3LDE1LjMxNTYxIC00Mi43ODk5OSwyNC41Mjg1N2MtMi4yNDc4MywxLjI5NDkzIC00LjcwOTY5LDAuOTYwNTEgLTYuMzM4MzYsLTEuMDcwM2MtMS42Mjg2NywtMi4wMzA4MSAtMTIuNDI4NzcsLTIxLjUzNDEgLTE0LjAwMjM2LC0yNC4yOTI5MmMtMS41NzM1OSwtMi43NTg4MSAwLjYyNTYsLTUuODUzMDQgMi44Njk2OSwtNy4xNjgxYzIuNzQwMTcsLTEuNjA1NzkgNDEuODAwNzUsLTI0LjEzNTg0IDQxLjgwMDc1LC0yNC4xMzU4NGMwLDAgLTQwLjU1NzI0LC0yMy4zMjU2NSAtNDIuOTA1NCwtMjQuNzc5Yy0yLjM0ODE2LC0xLjQ1MzM1IC0yLjc3NTY2LC0zLjk4ODI3IC0xLjc2MDEyLC02LjU2NjY0YzEuMDE1NTQsLTIuNTc4MzcgMTEuNTU0MzIsLTE5Ljk1MjM2IDEzLjY0ODg1LC0yMy42MTc4N2MyLjA5NDU0LC0zLjY2NTUxIDQuMDc3MDcsLTMuMDgwNjYgNi42MzUzNiwtMS44OTk5OWMyLjU1ODI5LDEuMTgwNjcgNDIuODM2NjgsMjQuNzMyMzEgNDIuODM2NjgsMjQuNzMyMzFjMCwwIC0wLjA2NTUyLC00Ni42MTg2NSAwLjAxNDczLC00OS4zNzg3M2MwLjA4MDI1LC0yLjc2MDA4IDIuMDYzNTUsLTQuMzk4NyA0LjgwNDA4LC00LjgwOTA0YzIuNzQwNTMsLTAuNDEwMzQgMjcuMDM5ODksMC4wMzQzNiAyNy4xMDEyNywwLjAzMTkzYzAuMDYxMzgsLTAuMDAyNDMgMC4xMTc4NSwtMC4wMTcyMSAwLjE3OTIzLC0wLjAxNzIxYzIuODA2NSwwIDQuNzAyNDksMS45OTA0MiA0Ljk1ODczLDQuNzk0MjdjMC4yNTYyNCwyLjgwMzg1IDAsNDkuNDYyMjcgMCw0OS40NjIyN2MwLDAgNDAuMzQyMTcsLTIzLjM3ODYyIDQyLjc3NTMxLC0yNC42ODU3NWMyLjQzMzE0LC0xLjMwNzEzIDQuODQyOTksLTAuNDExMDIgNi41NjkwNywxLjc1NzY4YzEuNzI2MDcsMi4xNjg3MSAxMy40OTE2OSwyMy40MzYyMSAxMy41MjM2MiwyMy40ODc3M2MwLjAzMTkzLDAuMDUxNTIgMC4wNzM2NywwLjA5MzMgMC4xMDMxMiwwLjE0NDgyYzEuNDA0NDksMi40MzM0MSAwLjYyNzksNS4wNzI2MiAtMS42NzQxOSw2LjY5OTIxYy0yLjMwMjA5LDEuNjI2NiAtNDIuNjg5MzgsMjQuNjQ2NDMgLTQyLjY4OTM4LDI0LjY0NjQzbDQyLjQwOTUsMjQuNjc4MzZjMC4wMjQ1OSwwLjAxNDcyIDAuMDU0MDQsMC4wMjIwNyAwLjA3ODU4LDAuMDM2NzljMi4xMTM1OSwxLjIyMjUxIDIuOTc1MiwzLjc2MDggMi4xNzAwNiw1Ljk3NzUxYy0wLjgwNTE0LDIuMjE2NzEgLTEyLjM0ODM0LDIxLjU4NjkyIC0xMy45NjA1OCwyNC4zMjQ4OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2I4MjAyMiIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxNDU6MTEyLjY3NzQwNS0tPg==';

  const cast = Scratch.Cast;

  const dec2bin = dec => {
    return (dec >>> 0).toString(2);
  };
  const bin2dec = bin => {
    return parseInt(bin, 2) << 0;
  };

  class Bitwise {

    getInfo() {
      return {

        id: 'Bitwise',
        name: 'Bitwise',

        color1: '#34d1d1',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'toBits',
            blockType: Scratch.BlockType.REPORTER,
            text: '[CENTRAL] to bits',
            arguments: {
              CENTRAL: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'ofBits',
            blockType: Scratch.BlockType.REPORTER,
            text: '[CENTRAL] of bits',
            arguments: {
              CENTRAL: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'bitwiseRightShift',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] ⇒ [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'bitwiseLeftShift',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] ⇐ [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'bitwiseAnd',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] and [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'bitwiseOr',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] or [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'bitwiseXor',
            blockType: Scratch.BlockType.REPORTER,
            text: '[LEFT] xor [RIGHT]',
            arguments: {
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              RIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'bitwiseNot',
            blockType: Scratch.BlockType.REPORTER,
            text: 'not [CENTRAL]',
            arguments: {
              CENTRAL: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          }
        ]
      };
    }

    toBits({CENTRAL}) {
      return dec2bin(CENTRAL);
    }
    ofBits({CENTRAL}) {
      return bin2dec(CENTRAL);
    }
    bitwiseRightShift({LEFT, RIGHT}) {
      return LEFT >> RIGHT;
    }
    bitwiseLeftShift({LEFT, RIGHT}) {
      return LEFT << RIGHT;
    }
    bitwiseAnd({LEFT, RIGHT}) {
      return LEFT & RIGHT;
    }
    bitwiseOr({LEFT, RIGHT}) {
      return LEFT | RIGHT;
    }
    bitwiseXor({LEFT, RIGHT}) {
      return LEFT ^ RIGHT;
    }
    bitwiseNot({CENTRAL}) {
      return ~CENTRAL;
    }
  }

  Scratch.extensions.register(new Bitwise());
})(Scratch);
