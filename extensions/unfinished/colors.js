(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjk0LC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTg3LjMyMjk1LDE1MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNmZjRjNGMiIHN0cm9rZS13aWR0aD0iMCIvPjxnPjxwYXRoIGQ9Ik0zMDkuNTAyNzgsNjEuODk2MDVjMTIuNDc0MDEsMS4yNjU3NSAyMy41MzU1Miw0LjQ3NTk3IDM0LjIxMTgxLDkuOTA1ODNjMjQuMDg1ODUsMTIuMjUzODggNDAuMjI4NjcsMzMuODQ0OTEgNDMuNjQwNjgsNTguMzM0MzRjMS4xNTU2Nyw4LjM0NjU4IDAuNjk3MDgsMTYuNjAxNDUgLTEuMjg0MDksMjMuMjA1MzNjLTIuNDM5NzcsOC4xNjMxNCAtNi4zODM3NiwxNC43ODUzNyAtMTIuMzI3MjYsMjAuNzgzOWMtNy4yODI2Miw3LjM1NiAtMTYuNzExNSwxMi4yNTM4NyAtMjYuNTQzOTYsMTMuNzk0NzhjLTEuMDA4OTMsMC4xNjUxIC0yLjAzNjE5LDAuMzMwMiAtMi4yOTMwMiwwLjQwMzU3Yy0wLjI1NjgyLDAuMDU1MDQgLTYuMDM1MjMsMC4xNjUxMSAtMTIuODQwOSwwLjIzODQ4Yy0xMy42ODQ3MywwLjE0Njc1IC0xMy41Mzc5NywwLjEyODQxIC0xNi4yNzEyNCwxLjM3NTgxYy00LjEwOTA5LDEuODg5NDQgLTcuMDgwODMsNS40NDgyMSAtOC4yMzY1Miw5LjkwNTgzYy0wLjQ1ODYsMS43NDI2OSAtMC40NTg2LDUuMjA5NzMgMCw2Ljk3MDc2YzAuNDc2OTUsMS45MDc3OSAxLjc2MTA0LDQuNDAyNTkgMi45OTAxLDUuODcwMTRjMi43Njk5NywzLjMwMTk1IDMuNzk3MjQsNS42NDk5OCA0LjAxNzM2LDkuMjYzNzhjMC4yNTY4MiwzLjc2MDU1IC0wLjg2MjE3LDcuMjI3NTkgLTMuMjQ2OTEsMTAuMTgwOTljLTEuOTQ0NDgsMi40MjE0MyAtNC42MjI3Myw0LjEwOTA5IC03Ljk2MTM2LDUuMDQ0NjRjLTEuOTgxMTgsMC41NTAzMiAtOC45MTUyNCwwLjM4NTIyIC0xNC42Mzg2MSwtMC4zNjY4OGMtMTYuNTI4MDcsLTIuMTQ2MjYgLTMxLjcxNzAxLC04LjczMTggLTQ0Ljc1OTY5LC0xOS4zODk3NWMtMi44NDMzNCwtMi4zMjk3MSAtOS4xMzUzNywtOC41MzAwMiAtMTEuMjk5OTcsLTExLjE1MzIzYy00Ljk4OTYxLC02LjAxNjg3IC04LjI3MzIxLC0xMS4wNzk4NiAtMTEuNjY2ODcsLTE3Ljk3NzI2Yy0zLjEwMDE2LC02LjI5MjAzIC00Ljc4NzgyLC0xMC44OTY0MSAtNi40MjA0NSwtMTcuMzM1MjFjLTEuODUyNzYsLTcuNDI5MzggLTIuNTQ5ODMsLTEzLjI0NDQ2IC0yLjU0OTgzLC0yMS4zNzA5Yy0wLjAxODM1LC01Ljc2MDA2IDAuMTI4NDEsLTguMDE2MzkgMC44MjU0OCwtMTIuODA0MjFjMi43MzMyNywtMTkuMTE0NTkgMTEuNjMwMTgsLTM2LjU0MTUxIDI1LjYwODQyLC01MC4yMDc4OWMxNS4zOTA3MywtMTUuMDYwNTMgMzQuNzgwNDgsLTIzLjYyNzI0IDU2LjY0NjY4LC0yNS4wMjEzOWMyLjQwMzA4LC0wLjE0Njc1IDExLjcwMzU1LDAuMDczMzcgMTQuNDAwMTQsMC4zNDg1M3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMjguNTAwMDMsMTYwYzAsLTEwLjMxNTI0IDguMzYyMTYsLTE4LjY3NzQgMTguNjc3NCwtMTguNjc3NGMxMC4zMTUyNCwwIDE4LjY3NzQsOC4zNjIxNiAxOC42Nzc0LDE4LjY3NzRjMCwxMC4zMTUyNCAtOC4zNjIxNiwxOC42Nzc0IC0xOC42Nzc0LDE4LjY3NzRjLTEwLjMxNTI0LDAgLTE4LjY3NzQsLTguMzYyMTYgLTE4LjY3NzQsLTE4LjY3NzR6IiBmaWxsPSIjZmY0YzRjIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjQxLjUwMDAzLDExM2MwLC0xMC4zMTUyNCA4LjM2MjE2LC0xOC42Nzc0IDE4LjY3NzQsLTE4LjY3NzRjMTAuMzE1MjQsMCAxOC42Nzc0LDguMzYyMTYgMTguNjc3NCwxOC42Nzc0YzAsMTAuMzE1MjQgLTguMzYyMTYsMTguNjc3NCAtMTguNjc3NCwxOC42Nzc0Yy0xMC4zMTUyNCwwIC0xOC42Nzc0LC04LjM2MjE2IC0xOC42Nzc0LC0xOC42Nzc0eiIgZmlsbD0iI2ZmNGM0YyIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI4OC41MDAwMSw5My41YzAsLTEwLjMxNTI0IDguMzYyMTYsLTE4LjY3NzQgMTguNjc3NCwtMTguNjc3NGMxMC4zMTUyNCwwIDE4LjY3NzQsOC4zNjIxNiAxOC42Nzc0LDE4LjY3NzRjMCwxMC4zMTUyNCAtOC4zNjIxNiwxOC42Nzc0IC0xOC42Nzc0LDE4LjY3NzRjLTEwLjMxNTI0LDAgLTE4LjY3NzQsLTguMzYyMTYgLTE4LjY3NzQsLTE4LjY3NzR6IiBmaWxsPSIjZmY0YzRjIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzMxLjUwMDAzLDEyMWMwLC0xMC4zMTUyNCA4LjM2MjE2LC0xOC42Nzc0IDE4LjY3NzQsLTE4LjY3NzRjMTAuMzE1MjQsMCAxOC42Nzc0LDguMzYyMTYgMTguNjc3NCwxOC42Nzc0YzAsMTAuMzE1MjQgLTguMzYyMTYsMTguNjc3NCAtMTguNjc3NCwxOC42Nzc0Yy0xMC4zMTUyNCwwIC0xOC42Nzc0LC04LjM2MjE2IC0xOC42Nzc0LC0xOC42Nzc0eiIgZmlsbD0iI2ZmNGM0YyIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcwNTU6MTEyLjY3NzM5NDk5OTk5OTk5LS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjY2MzZDNkIiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  const deafultHex = '#ff0000';
  const deafultDec = '16711680';
  const deafultRGBA = '{"r":255,"g":255,"b":255,"a":1}';
  const deafultRGB = '{"r":255,"g":255,"b":255}';
  const deafultHSVA = '{"h":360,"s":100,"v":100,"a":1}';
  const deafultHSV = '{"h":360,"s":100,"v":100}';
  const deafultHSLA = '{"h":360,"s":100,"l":100,"a":1}';
  const deafultHSL = '{"h":360,"s":100,"l":100}';
  const deafultCMYK = '{"s":255,"m":255,"y":255,"k":0,"key":"#ff0000"}';

  class ScratchColors {
    getInfo() {
      return {

        id: 'truefantomcolors',
        name: 'Colors',
        color1: '#ff4c4c',
        menuIconURI: icon,

        blocks: [
          {
            opcode: 'color_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COLOR] as [TYPE]',
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR
              },
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'color_type_menu'
              }
            }
          },
          {
            opcode: 'random_color_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random [TYPE] with [WITH]',
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'color_type_menu'
              },
              WITH: {
                type: Scratch.ArgumentType.STRING,
                menu: 'color_mode_menu'
              }
            }
          }
        ],

        menus: {
          json_type_menu: {
            acceptReporters: false,
            items: ['array', 'object', 'map']
          },
          color_type_menu: {
            acceptReporters: false,
            items: ['hex', 'dec']
          },
          color_mode_menu: {
            acceptReporters: false,
            items: ['not opacity', 'opacity']
          },
          // RGBA
          rgba_color_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          rgba_alpha_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          rgba_components_menu: {
            acceptReporters: false,
            items: ['red', 'green', 'blue', 'alpha']
          },
          rgb_components_menu: {
            acceptReporters: false,
            items: ['red', 'green', 'blue']
          },
          // HSVA
          hsva_color_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsva_parm_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsva_alpha_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsva_components_menu: {
            acceptReporters: false,
            items: ['hue', 'saturation', 'value', 'alpha']
          },
          hsv_components_menu: {
            acceptReporters: false,
            items: ['hue', 'saturation', 'value']
          },
          // HSLA
          hsla_color_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsla_parm_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsla_alpha_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          hsla_components_menu: {
            acceptReporters: false,
            items: ['hue', 'saturation', 'lightness', 'alpha']
          },
          hsl_components_menu: {
            acceptReporters: false,
            items: ['hue', 'saturation', 'lightness']
          },
          // CMYK
          cmyk_color_menu: {
            acceptReporters: false,
            items: ['test', 'test']
          },
          cmyk_components_menu: {
            acceptReporters: false,
            items: ['cyan', 'magenta', 'yellow', 'key', 'key color']
          }
        }
      };
    }

    color_block({COLOR, TYPE}) {
      return COLOR;
    }

    random_color_block({TYPE, MODE}) {
      return '#ff4c4c';
    }
  }

  Scratch.extensions.register(new ScratchColors());
})(Scratch);
