(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjc1LC0zNy4zMjI1OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjI3NiwxNTBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNDA0MDQwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiI+PHBhdGggZD0iTTIzNi4wMzcwOCwxMDcuMDE0MjhjMCwtMTEuNjk1OTYgOS40ODE0NCwtMjEuMTc3NCAyMS4xNzc0LC0yMS4xNzc0YzExLjY5NTk2LDAgMjEuMTc3NCw5LjQ4MTQ0IDIxLjE3NzQsMjEuMTc3NGMwLDExLjY5NTk2IC05LjQ4MTQ0LDIxLjE3NzQgLTIxLjE3NzQsMjEuMTc3NGMtMTEuNjk1OTYsMCAtMjEuMTc3NCwtOS40ODE0NCAtMjEuMTc3NCwtMjEuMTc3NHoiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMjguNzUxMzcsMTAwLjA3MTQyYzAsLTExLjY5NTk2IDkuNDgxNDQsLTIxLjE3NzQgMjEuMTc3NCwtMjEuMTc3NGMxMS42OTU5NiwwIDIxLjE3NzQsOS40ODE0NCAyMS4xNzc0LDIxLjE3NzRjMCwxMS42OTU5NiAtOS40ODE0NCwyMS4xNzc0IC0yMS4xNzc0LDIxLjE3NzRjLTExLjY5NTk2LDAgLTIxLjE3NzQsLTkuNDgxNDQgLTIxLjE3NzQsLTIxLjE3NzR6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzIxLjYwODUsMTkyLjY0Mjg1YzAsLTExLjY5NTk2IDkuNDgxNDQsLTIxLjE3NzQgMjEuMTc3NCwtMjEuMTc3NGMxMS42OTU5NiwwIDIxLjE3NzQsOS40ODE0NCAyMS4xNzc0LDIxLjE3NzRjMCwxMS42OTU5NiAtOS40ODE0NCwyMS4xNzc0IC0yMS4xNzc0LDIxLjE3NzRjLTExLjY5NTk2LDAgLTIxLjE3NzQsLTkuNDgxNDQgLTIxLjE3NzQsLTIxLjE3NzR6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjI4Ljg5NDIyLDE5OS45Mjg1N2MwLC0xMS42OTU5NiA5LjQ4MTQ0LC0yMS4xNzc0IDIxLjE3NzQsLTIxLjE3NzRjMTEuNjk1OTYsMCAyMS4xNzc0LDkuNDgxNDQgMjEuMTc3NCwyMS4xNzc0YzAsMTEuNjk1OTYgLTkuNDgxNDQsMjEuMTc3NCAtMjEuMTc3NCwyMS4xNzc0Yy0xMS42OTU5NiwwIC0yMS4xNzc0LC05LjQ4MTQ0IC0yMS4xNzc0LC0yMS4xNzc0eiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI2Ni40NDk3MywxOTMuNjQyNjVsLTEwLjA0NTY1LC05LjgyMzkxbDIyLjU5NSwtMjMuMTA1MDFsMTAuMDQ1NjUsOS44MjM5MXoiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMzMuNjY1NzYsMTA2LjA0NzA2bDEwLjA0NTY1LDkuODIzOTFsLTIyLjU5NSwyMy4xMDUwMWwtMTAuMDQ1NjYsLTkuODIzOTF6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjU5LjQyNjYzLDExOS41NzAxOGw5LjgyMzkxLC0xMC4wNDU2NWwyMy4xMDUsMjIuNTk1bC05LjgyMzkxLDEwLjA0NTY2eiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTM0MS4xODg4NywxODEuMTE5NTNsLTkuODIzOTEsMTAuMDQ1NjZsLTIzLjEwNTAxLC0yMi41OTVsOS44MjM5MSwtMTAuMDQ1NjZ6IiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjc4LjgyMjYyLDE1MGMwLC0xMS42OTU5NiA5LjQ4MTQ0LC0yMS4xNzc0IDIxLjE3NzQsLTIxLjE3NzRjMTEuNjk1OTYsMCAyMS4xNzc0LDkuNDgxNDQgMjEuMTc3NCwyMS4xNzc0YzAsMTEuNjk1OTYgLTkuNDgxNDQsMjEuMTc3NCAtMjEuMTc3NCwyMS4xNzc0Yy0xMS42OTU5NiwwIC0yMS4xNzc0LC05LjQ4MTQ0IC0yMS4xNzc0LC0yMS4xNzc0eiIgc3Ryb2tlLXdpZHRoPSIxNCIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MjQ1OjExMi42Nzc0MDUtLT4=';

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
            text: '[BOOLEAN] ? [VALUE1] : [VALUE2]',
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
            opcode: 'true_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true',
            hideFromPalette: true
          },
          {
            opcode: 'false_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false',
            hideFromPalette: true
          }
        ],
        menus: {
          boolean_menu: {
            acceptReporters: true,
            items: ['true', 'false', 'random']
          }
        }
      };
    }

    value1_or_value2_block({BOOLEAN, VALUE1, VALUE2}) {
      return cast.toBoolean(BOOLEAN) ? VALUE1 : VALUE2;
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
