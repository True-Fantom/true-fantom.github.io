(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYyLjMyMjg5LC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE2Mi4zMjI4OSwxNTAuMDAwMDFjMCwtNjIuMjMwMDEgNTAuNDQ3NCwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3NCAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjYzkxMzkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE5Ny41NTUxOCwxNTAuMDAwMDFjMCwtNDIuNzcxNTkgMzQuNjczMjQsLTc3LjQ0NDgxIDc3LjQ0NDgzLC03Ny40NDQ4MWM0Mi43NzE1NywwIDc3LjQ0NDgxLDM0LjY3MzI0IDc3LjQ0NDgxLDc3LjQ0NDgxYzAsNDIuNzcxNTkgLTM0LjY3MzIzLDc3LjQ0NDgyIC03Ny40NDQ4MSw3Ny40NDQ4M2MtNDIuNzcxNTksMCAtNzcuNDQ0ODIsLTM0LjY3MzIzIC03Ny40NDQ4MiwtNzcuNDQ0ODJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTI4Ni45NjcwNSwxNjEuODMzNDRjLTYuNTM4MzYsNi42MDgxIC0xNy4xOTI2NSw2LjY2NzExIC0yMy44MDQyMSwwLjEyOTdjLTYuNjA4MSwtNi41MzgzNSAtNi42NjM2NCwtMTcuMTkzNjEgLTAuMTI1MjgsLTIzLjgwMTdjNi41MzgzNiwtNi42MDgxIDM2LjE0MDczLC0xMi45MjY0MyAzNi40MzMzNiwtMTIuNjI3NjhjMC4yOTI2NCwwLjI5ODc2IC01Ljk2NTUxLDI5LjY5MTU4IC0xMi41MDM4NywzNi4yOTk2OHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MTE6MTEyLjY3NzM5LS0+';
  const miniDate = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOTIuMzg5NjMiIGhlaWdodD0iMTkyLjM4OTY0IiB2aWV3Qm94PSIwLDAsMTkyLjM4OTYzLDE5Mi4zODk2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OC44MDUyNywtNTMuODA0OTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xOTcuNTU1MjcsMTQ5Ljk5OThjMCwtNDIuNzcxNTkgMzQuNjczMjMsLTc3LjQ0NDgxIDc3LjQ0NDgyLC03Ny40NDQ4MWM0Mi43NzE1NywwIDc3LjQ0NDgxLDM0LjY3MzIzIDc3LjQ0NDgxLDc3LjQ0NDgxYzAsNDIuNzcxNTkgLTM0LjY3MzIzLDc3LjQ0NDgyIC03Ny40NDQ4MSw3Ny40NDQ4M2MtNDIuNzcxNTksMCAtNzcuNDQ0ODIsLTM0LjY3MzIyIC03Ny40NDQ4MiwtNzcuNDQ0ODF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2M5MjM5IiBzdHJva2Utd2lkdGg9IjM3LjUiLz48cGF0aCBkPSJNMTk3LjU1NTI3LDE0OS45OTk4YzAsLTQyLjc3MTU5IDM0LjY3MzIzLC03Ny40NDQ4MSA3Ny40NDQ4MiwtNzcuNDQ0ODFjNDIuNzcxNTcsMCA3Ny40NDQ4MSwzNC42NzMyMyA3Ny40NDQ4MSw3Ny40NDQ4MWMwLDQyLjc3MTU5IC0zNC42NzMyMyw3Ny40NDQ4MiAtNzcuNDQ0ODEsNzcuNDQ0ODNjLTQyLjc3MTU5LDAgLTc3LjQ0NDgyLC0zNC42NzMyMiAtNzcuNDQ0ODIsLTc3LjQ0NDgxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0yODYuOTY3MDUsMTYxLjgzMzQzYy02LjUzODM2LDYuNjA4MSAtMTcuMTkyNjUsNi42NjcxMSAtMjMuODA0MjEsMC4xMjk3Yy02LjYwODEsLTYuNTM4MzUgLTYuNjYzNjMsLTE3LjE5MzYxIC0wLjEyNTI4LC0yMy44MDE3YzYuNTM4MzYsLTYuNjA4MSAzNi4xNDA3MywtMTIuOTI2NDMgMzYuNDMzMzcsLTEyLjYyNzY3YzAuMjkyNjQsMC4yOTg3NSAtNS45NjU1MSwyOS42OTE1OCAtMTIuNTAzODgsMzYuMjk5Njd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2M5MjM5IiBzdHJva2Utd2lkdGg9IjI3LjUiLz48cGF0aCBkPSJNMjg2Ljk2NzA1LDE2MS44MzM0M2MtNi41MzgzNiw2LjYwODEgLTE3LjE5MjY1LDYuNjY3MTEgLTIzLjgwNDIxLDAuMTI5N2MtNi42MDgxLC02LjUzODM1IC02LjY2MzYzLC0xNy4xOTM2MSAtMC4xMjUyOCwtMjMuODAxN2M2LjUzODM2LC02LjYwODEgMzYuMTQwNzQsLTEyLjkyNjQ0IDM2LjQzMzM3LC0xMi42Mjc2N2MwLjI5MjY0LDAuMjk4NzUgLTUuOTY1NTIsMjkuNjkxNTggLTEyLjUwMzg4LDM2LjI5OTY4eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjk2LjE5NDcyOTk5OTk5OTk5Ojk2LjE5NTAxLS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjQjgyMDIyIiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  class ScratchDate {

    getInfo() {
      return {

        id: 'truefantomdate',
        name: 'Date',

        color1: '#cc9139',

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
