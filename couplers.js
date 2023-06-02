(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjgyLC0zNy4zMjI1OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTg3LjMyMjgyLDE1MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjNDA0MDQwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSI+PHBhdGggZD0iTTI2Ni4wNjU1NywxNjEuNjQyMTZjMi44MTU2MSw0LjM0OTk0IDQuNDY1MDksOS41MjA4NyA0LjQ2NTA5LDE1LjA3MTU5YzAsMi42NTgzMSAtMC4zOTg5Myw1LjIxNjk2IC0xLjA5NzA5LDcuNjUyODVsLTMuMDE1MTEsNi44NTEwMmMtNC45MDI0LDguMDAxOTYgLTEzLjcwOTg0LDEzLjM3OTk1IC0yMy43Njc4MiwxMy4zNzk5NWMtMTUuMzY2OTksMCAtMjcuODgwMDMsLTEyLjUxMjk1IC0yNy44ODAwMywtMjcuODgzODJjMCwtMTUuMzcwODcgMTIuNTEzMDQsLTI3Ljg3NjIzIDI3Ljg4MDAzLC0yNy44NzYyM2M3LjA5NjYsMCAxMy41NjQwOCwyLjY5Mjk1IDE4LjQ4OTUxLDcuMDY1OTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjM0LjkwNTksMTc1LjQwNzM5bDEwOS40MjUyMywtNzQuMzQ4NjZsLTEyLjMxNDUsMTA2LjM1NDY1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE3LjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMTYuMDcxNiwxMjkuODI2MzRsLTQuNjQ5MjIsLTUuOTE1MDRjLTMuMDk5NDcsLTUuMDAyMTQgLTQuOTMzMDIsLTEwLjg3ODg3IC00LjkzMzAyLC0xNy4xODUyNWMwLC0xOC4wMzY5NCAxNC42Njg4NiwtMzIuNzA1OCAzMi42OTc5LC0zMi43MDU4YzE4LjAzNjkzLDAgMzIuNzA1NzgsMTQuNjY4ODYgMzIuNzA1NzgsMzIuNzA1OGMwLDE4LjAyOTE3IC0xNC42Njg4NiwzMi43MDE4MiAtMzIuNzA1NzgsMzIuNzAxODJjLTkuMDE0NTIsMCAtMTcuMjAwNDUsLTMuNjcxMDIgLTIzLjExNTY0LC05LjYwMTU0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTMxMC4yNDEwOSwyMDAuNjg0ODdjMy4xMDcwOCwtOS4wNjgyOSAxMS42MTUyNSwtMTUuNjQzMTEgMjEuNzE5MzQsLTE1LjY0MzExYzEyLjcxMjU2LDAgMjMuMDQ2NjcsMTAuMzQxODYgMjMuMDQ2NjcsMjMuMDU0MjZjMCwxMi43MDQ4MyAtMTAuMzM0MSwyMy4wNDY2NiAtMjMuMDQ2NjcsMjMuMDQ2NjZjLTEyLjY2NjM5LDAgLTIyLjk2OTk0LC0xMC4yNzI3MSAtMjMuMDM4OTIsLTIyLjkyMzl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzE3NTAwMDAwMDAzOjExMi42Nzc0MDUwMDAwMDAwMi0tPg==';

  const cast = Scratch.Cast;

  class Couplers {
    getInfo() {
      return {

        id: 'truefantomcouplers',
        name: 'Couplers',
        color1: '#404040',
        menuIconURI: icon,

        blocks: [
          {
            opcode: 'value1_or_value2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [BOOLEAN] then [VALUE1] else [VALUE2]',
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              VALUE1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              VALUE2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          },
          {
            opcode: 'value_with_wait_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'wait [WAIT] seconds then [VALUE]',
            arguments: {
              WAIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            hideFromPalette: true, // Was moved to "Math" extension!
            opcode: 'boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[MENU]',
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: 'boolean_menu'
              }
            }
          },
          {
            opcode: 'value_in_boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'value_in_string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            hideFromPalette: true, // Probably useless
            opcode: 'true_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            hideFromPalette: true, // Probably useless
            opcode: 'false_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          }
        ],
        menus: {
          boolean_menu: { // Was moved to "Math" extension!
            acceptReporters: true,
            items: ['true', 'false', 'random']
          }
        }
      };
    }

    value1_or_value2_block({BOOLEAN, VALUE1, VALUE2}) {
      return cast.toBoolean(BOOLEAN) ? VALUE1 : VALUE2;
    }
    value_with_wait_block({WAIT, VALUE}, util) {
      if (util.stackTimerNeedsInit()) {
        const duration = Math.max(0, 1000 * cast.toNumber(WAIT));
        util.startStackTimer(duration);
        this.runtime.requestRedraw();
        util.yield();
      } else if (!util.stackTimerFinished()) {
        util.yield();
      }
      return VALUE;
    }
    boolean_block({MENU}) {
      const menu = cast.toString(MENU).toLowerCase();
      switch (menu) {
        case 'true': return true;
        case 'false': return false;
        case 'random': default: return Math.random() < 0.5;
      }
    }
    value_in_boolean_block({VALUE}) {
      return VALUE;
    }
    value_in_string_block({VALUE}) {
      return VALUE;
    }
    true_block() {
      return true;
    }
    false_block() {
      return false;
    }
  }

  Scratch.extensions.register(new Couplers());
})(Scratch);
