(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0ODEiIGhlaWdodD0iMjI1LjM1NDgiIHZpZXdCb3g9IjAsMCwyMjUuMzU0ODEsMjI1LjM1NDgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzIyODUsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTEyNy4zMjI4NywxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjZTYyODJhIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTI3LjMyMjg2LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNlNjI4MmEiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0zMDcuODI3MTEsMjM1LjAxMzU5Yy0xLjYxMjIzLDIuNzM3OTcgLTQuOTMyODgsMi40NjE0NyAtNy42NDkyMywxLjA4NTAzYy0yLjgzNDI1LC0xLjQzNjE5IC00MS42NTEwMSwtMjQuMDQ3NDkgLTQxLjY1MTAxLC0yNC4wNDc0OWMwLDAgLTAuMTUyMjEsMzAuMDcyMDYgLTAuMTUyMjEsNDkuMzE5ODhjMCwyLjU5NDYzIC0xLjUyNTkxLDQuNTU2MjcgLTQuMDk5NSw0Ljk1MTM5Yy0yLjU3MzYsMC4zOTUxMiAtMjQuODYyNzIsMC4wMDg2OSAtMjguMDM5MDQsLTAuMDE3MTZjLTMuMTc2MzIsLTAuMDI1ODUgLTQuNjk2NzMsLTIuOTgzNDQgLTQuNzY3MjUsLTYuMDc1NzNjLTAuMDcyMzcsLTMuMTc1NiAwLC00OC4wOTczMiAwLC00OC4wOTczMmMwLDAgLTI1Ljg4OTU3LDE1LjMxNTYxIC00Mi43ODk5OSwyNC41Mjg1N2MtMi4yNDc4MywxLjI5NDkzIC00LjcwOTY5LDAuOTYwNTEgLTYuMzM4MzYsLTEuMDcwM2MtMS42Mjg2NywtMi4wMzA4MSAtMTIuNDI4NzcsLTIxLjUzNDEgLTE0LjAwMjM2LC0yNC4yOTI5MmMtMS41NzM1OSwtMi43NTg4MSAwLjYyNTYsLTUuODUzMDQgMi44Njk2OSwtNy4xNjgxYzIuNzQwMTcsLTEuNjA1NzkgNDEuODAwNzUsLTI0LjEzNTg0IDQxLjgwMDc1LC0yNC4xMzU4NGMwLDAgLTQwLjU1NzI0LC0yMy4zMjU2NSAtNDIuOTA1NCwtMjQuNzc5Yy0yLjM0ODE2LC0xLjQ1MzM1IC0yLjc3NTY2LC0zLjk4ODI3IC0xLjc2MDEyLC02LjU2NjY0YzEuMDE1NTQsLTIuNTc4MzcgMTEuNTU0MzIsLTE5Ljk1MjM2IDEzLjY0ODg1LC0yMy42MTc4N2MyLjA5NDU0LC0zLjY2NTUxIDQuMDc3MDcsLTMuMDgwNjYgNi42MzUzNiwtMS44OTk5OWMyLjU1ODI5LDEuMTgwNjcgNDIuODM2NjgsMjQuNzMyMzEgNDIuODM2NjgsMjQuNzMyMzFjMCwwIC0wLjA2NTUyLC00Ni42MTg2NSAwLjAxNDczLC00OS4zNzg3M2MwLjA4MDI1LC0yLjc2MDA4IDIuMDYzNTUsLTQuMzk4NyA0LjgwNDA4LC00LjgwOTA0YzIuNzQwNTMsLTAuNDEwMzQgMjcuMDM5ODksMC4wMzQzNiAyNy4xMDEyNywwLjAzMTkzYzAuMDYxMzgsLTAuMDAyNDMgMC4xMTc4NSwtMC4wMTcyMSAwLjE3OTIzLC0wLjAxNzIxYzIuODA2NSwwIDQuNzAyNDksMS45OTA0MiA0Ljk1ODczLDQuNzk0MjdjMC4yNTYyNCwyLjgwMzg1IDAsNDkuNDYyMjcgMCw0OS40NjIyN2MwLDAgNDAuMzQyMTcsLTIzLjM3ODYyIDQyLjc3NTMxLC0yNC42ODU3NWMyLjQzMzE0LC0xLjMwNzEzIDQuODQyOTksLTAuNDExMDIgNi41NjkwNywxLjc1NzY4YzEuNzI2MDcsMi4xNjg3MSAxMy40OTE2OSwyMy40MzYyMSAxMy41MjM2MiwyMy40ODc3M2MwLjAzMTkzLDAuMDUxNTIgMC4wNzM2NywwLjA5MzMgMC4xMDMxMiwwLjE0NDgyYzEuNDA0NDksMi40MzM0MSAwLjYyNzksNS4wNzI2MiAtMS42NzQxOSw2LjY5OTIxYy0yLjMwMjA5LDEuNjI2NiAtNDIuNjg5MzgsMjQuNjQ2NDMgLTQyLjY4OTM4LDI0LjY0NjQzbDQyLjQwOTUsMjQuNjc4MzZjMC4wMjQ1OSwwLjAxNDcyIDAuMDU0MDQsMC4wMjIwNyAwLjA3ODU4LDAuMDM2NzljMi4xMTM1OSwxLjIyMjUxIDIuOTc1MiwzLjc2MDggMi4xNzAwNiw1Ljk3NzUxYy0wLjgwNTE0LDIuMjE2NzEgLTEyLjM0ODM0LDIxLjU4NjkyIC0xMy45NjA1OCwyNC4zMjQ4OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2I4MjAyMiIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxNDU6MTEyLjY3NzQwNS0tPg==';
  const miniDate = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYyLjMyMjg5LC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE2Mi4zMjI4OSwxNTAuMDAwMDFjMCwtNjIuMjMwMDEgNTAuNDQ3NCwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3NCAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmI2NDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE5Ny41NTUxOCwxNTAuMDAwMDFjMCwtNDIuNzcxNTkgMzQuNjczMjQsLTc3LjQ0NDgxIDc3LjQ0NDgzLC03Ny40NDQ4MWM0Mi43NzE1NywwIDc3LjQ0NDgxLDM0LjY3MzI0IDc3LjQ0NDgxLDc3LjQ0NDgxYzAsNDIuNzcxNTkgLTM0LjY3MzIzLDc3LjQ0NDgyIC03Ny40NDQ4MSw3Ny40NDQ4M2MtNDIuNzcxNTksMCAtNzcuNDQ0ODIsLTM0LjY3MzIzIC03Ny40NDQ4MiwtNzcuNDQ0ODJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTI4Ni45NjcwNSwxNjEuODMzNDRjLTYuNTM4MzYsNi42MDgxIC0xNy4xOTI2NSw2LjY2NzExIC0yMy44MDQyMSwwLjEyOTdjLTYuNjA4MSwtNi41MzgzNSAtNi42NjM2NCwtMTcuMTkzNjEgLTAuMTI1MjgsLTIzLjgwMTdjNi41MzgzNiwtNi42MDgxIDM2LjE0MDczLC0xMi45MjY0MyAzNi40MzMzNiwtMTIuNjI3NjhjMC4yOTI2NCwwLjI5ODc2IC01Ljk2NTUxLDI5LjY5MTU4IC0xMi41MDM4NywzNi4yOTk2OHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MTE6MTEyLjY3NzM5LS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjQjgyMDIyIiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  class ScratchDate {

    getInfo() {
      return {

        id: 'truefantomdate',
        name: 'Date',

        color1: '#ffb647',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'is_regexp_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          '---',
          {
            opcode: 'regexp_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] with pattern [A] and flags [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_contains_flags_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[IMAGE] [A] contains flags [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_components_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[B] of [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'components_menu'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          '---',
          {
            opcode: 'regexp_set_pattern_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] set [B] of [IMAGE] [A] to [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'components_menu'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_add_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] add flags [B] to [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_delete_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] delete flags [B] of [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          '---',
          {
            opcode: 'regexp_test_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] matches with [IMAGE] [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace matches of [A] with [IMAGE] [B] to [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              }
            }
          },
          {
            opcode: 'regexp_split_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE2] [A] split by matches with [IMAGE1] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE1: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              },
              IMAGE2: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          },
          {
            opcode: 'regexp_match_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE2] match [C] of [A] with [IMAGE1] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                menu: 'match_menu'
              },
              IMAGE1: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDate
              },
              IMAGE2: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          }
        ],
        menus: {
          components_menu: {
            acceptReporters: false,
            items: ['pattern', 'flags']
          },
          match_menu: {
            acceptReporters: false,
            items: ['values', 'keys', 'pairs', 'map']
          }
        }
      };
    }

    is_regexp_block({A}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        return RegExpCompare(redat, restr);
      } catch(err) {return false}
    }
    regexp_block({A, B}) {
      try {
        return toRegExpString(new RegExp(cast.toString(A), cast.toString(B)));
      } catch(err) {return ''}
    }
    regexp_contains_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let output = true;
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? flags.splice(flags.indexOf(flag), 1) : output = false);
          return output;
        }
        return false;
      } catch(err) {return false}
    }
    regexp_components_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          const components = cast.toString(B).toLowerCase();
          switch (components) {
            case 'pattern': return redat.source;
            case 'flags': return redat.flags;
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_set_pattern_flags_block({A, B, C}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          const components = cast.toString(B).toLowerCase();
          switch (components) {
            case 'pattern': return toRegExpString(new RegExp(cast.toString(C), redat.flags));
            case 'flags': return toRegExpString(new RegExp(redat.source, cast.toString(C)));
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_add_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let flagtest = new RegExp('test', cast.toString(B));
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? void(0) : flags.push(flag));
          return toRegExpString(new RegExp(redat.source, flags.join('')));
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_delete_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let flagtest = new RegExp('test', cast.toString(B));
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? flags.splice(flags.indexOf(flag), 1) : void(0));
          return toRegExpString(new RegExp(redat.source, flags.join('')));
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_test_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return redat.test(cast.toString(A))}
        return false;
      } catch(err) {return false}
    }
    regexp_replace_block({A, B, C}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return cast.toString(A).replace(redat, cast.toString(C))}
        return '';
      } catch(err) {return ''}
    }
    regexp_split_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return toJsonString(cast.toString(A).split(redat) || [])}
        return '';
      } catch(err) {return ''}
    }
    regexp_match_block({A, B, C}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        let str = cast.toString(A);
        if (RegExpCompare(redat, restr)) {
          const gredat = redat.global ? redat : new RegExp(redat.source, redat.flags + 'g');
          const match = cast.toString(C).toLowerCase();
          let data;
          switch (match) {
            case 'values':
              data = str.match(redat) || [];
              return toJsonString(data);
            case 'keys':
              data = Array.from(str.matchAll(gredat)).map(val => String(val.index + 1));
              return toJsonString(redat.global ? data : data[0] ? [data[0]] : []);
            case 'pairs':
              data = Array.from(str.matchAll(gredat)).reduce((obj, val) => (obj[val.index + 1] = val[0], obj), {});
              return toJsonString(redat.global ? data : Object.keys(data)[0] ? {[Object.keys(data)[0]] : Object.values(data)[0]} : {});
            case 'map':
              data = Array.from(str.matchAll(gredat)).map(val => [String(val.index + 1), val[0]]);
              return toJsonString(redat.global ? data : data[0] ? [data[0]] : []);
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_match_all_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          if (redat.global) {return toJsonString(Array.from(cast.toString(A).matchAll(redat)).map(val => val.index + 1))} 
          else {return toJsonString([cast.toString(A).search(redat) + 1])}
        }
        return '';
      } catch(err) {return ''}
    }
  }

  Scratch.extensions.register(new ScratchDate());
})(Scratch);
