(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0ODEiIGhlaWdodD0iMjI1LjM1NDgiIHZpZXdCb3g9IjAsMCwyMjUuMzU0ODEsMjI1LjM1NDgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMzIyODMsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTEyNy4zMjI4NSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjZTYyODJhIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTI3LjMyMjg0LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNlNjI4MmEiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMjEuODI3NTYsMjEwLjY3NjA4bDAuMDczNjEsMC4wNDQxNmwtMC40MjQ0OSwwLjczMzY1Yy0wLjAwMjQ1LDAuMDAyNDUgLTAuMDAyNDUsMC4wMDQ5MSAtMC4wMDQ5MSwwLjAwOTgyYy0wLjAwMjQ1LDAuMDA0OTEgLTAuMDA0OTEsMC4wMDczNiAtMC4wMDczNiwwLjAwOTgybC0xMy41Nzg3NCwyMy41MjM1NmwtMC4wMTIyNywtMC4wMDczNmMtMS4zNzQwNywyLjMzMzQ2IC00LjM4MjI5LDMuMTQwNzMgLTYuNzM1MzksMS43NzY0OGMtMC4zMzg2MSwtMC4xOTYyOSAtMC42MzU1MSwtMC40MzQzIC0wLjkxMDMyLC0wLjY5MTk1bC00MS42MzE4MiwtMjQuMDM2Mzh2NDkuMjExMjdoLTAuMTYxOTRjMC4wMDI0NSwwLjAyOTQ1IDAuMDA5ODIsMC4wNTY0NCAwLjAwOTgyLDAuMDg1ODhjMCwyLjQzODk3IC0xLjc3MTU3LDQuNDUzNDYgLTQuMDk3NjcsNC44NTgzMnYwLjA5MDc4aC0yOC4wMjYwOHYtMC4wMTcxOGMtMi43MTEzMywtMC4wMjIwOSAtNC45MDczOSwtMi4yMjMwNSAtNC45MDczOSwtNC45NDE3NGMwLC0wLjM5MDEzIDAuMDU2NDMsLTAuNzY1NTUgMC4xNDIzMSwtMS4xMzExNXYtNDguMDc1MjJsLTQyLjYxODIsMjQuNjAzMThsLTAuMDc4NTIsLTAuMTM3NDFjLTAuMDI2OTksMC4wMTQ3MiAtMC4wNDY2MiwwLjAzNjggLTAuMDczNjEsMC4wNTE1MmMtMi4xMTI2MywxLjIxNzAzIC00Ljc0Mjk5LDAuNjk0NCAtNi4yNTY5MiwtMS4xMTY0M2wtMC4wNzg1MiwwLjA0NjYybC0xNC4wMTMwNCwtMjQuMjcxOTNsMC4wMTcxNywtMC4wMDk4MmMtMS4zNDIxNywtMi4zNTMwOSAtMC41MzQ5MSwtNS4zNjYyMyAxLjgyMzA5LC02LjcyMzEyYzAuMzM2MTUsLTAuMTkzODQgMC42ODcwNCwtMC4zMzM3IDEuMDQ1MjgsLTAuNDQxNjdsNDEuNzgxNDksLTI0LjEyNDcxbC00Mi43MjEyNiwtMjQuNjY0NTNjLTAuMDE0NzIsLTAuMDA3MzYgLTAuMDI5NDQsLTAuMDEyMjcgLTAuMDQ0MTYsLTAuMDE5NjNjLTAuMDE0NzIsLTAuMDA3MzYgLTAuMDI0NTQsLTAuMDE5NjMgLTAuMDM5MjYsLTAuMDI2OTlsLTAuMDg1ODgsLTAuMDQ5MDdsMC4wMDQ5MSwtMC4wMDczNmMtMi4yMjc5NiwtMS4zNzg5NyAtMi45OTM1LC00LjI0OTggLTEuNzQ3MDMsLTYuNTU2MjdsLTAuMDEyMjcsLTAuMDA3MzZsMTMuNTQ0MzksLTIzLjQ2MjIxbDAuMDI0NTQsMC4wMTQ3MmMwLjAyOTQ1LC0wLjA1MTUzIDAuMDQ0MTYsLTAuMTA3OTYgMC4wNzM2MSwtMC4xNTk0OWMxLjMzOTcyLC0yLjMyMzY1IDQuMjcxODgsLTMuMTMzMzYgNi42MTc2MSwtMS44NzQ2MmwwLjAxNDcyLC0wLjAyNDU0bDQyLjgxNjk1LDI0LjcyMDk2di00OS4zNTYwNWgwLjAxNDcyYzAuMDc2MDYsLTIuNjE1NjMgMi4xNzg4OCwtNC43MTYgNC44MDE4OCwtNC43ODk2MXYtMC4wMTcxOGgyNy4wODg3OHYwLjAzMTljMC4wNjEzNCwtMC4wMDI0NSAwLjExNzc4LC0wLjAxNzE4IDAuMTc5MTIsLTAuMDE3MThjMi42NzY5OCwwIDQuODUwOTYsMi4xMzQ3MiA0LjkzMTkzLDQuNzkyMDZoMC4wMjQ1NHY0OS40Mzk0N2w0Mi43NDU3OSwtMjQuNjg5MDZsMC4wMDk4MiwwLjAxNDcyYzIuMzA2NDcsLTEuMjM5MTEgNS4xNzQ4MywtMC40NjYyIDYuNTQ4OSwxLjc2NjY2bDAuMDE3MTgsLTAuMDA5ODJsMTMuNTQ0MzksMjMuNDYyMjJsLTAuMDI2OTksMC4wMTQ3MmMwLjAzMTksMC4wNTE1MyAwLjA3MzYxLDAuMDkzMjQgMC4xMDMwNSwwLjE0NDc3YzEuMzM5NzIsMi4zMjExOSAwLjU3OTA3LDUuMjc1NDQgLTEuNjg1NjksNi42NzQwNWwwLjAxMjI3LDAuMDIyMDhsLTQyLjY2OTczLDI0LjYzNTA4bDQyLjQ3MzQ0LDI0LjUyMjIxbC0wLjA4MzQzLDAuMTQ0NzdjMC4wMjQ1NCwwLjAxNDcyIDAuMDUzOTgsMC4wMjIwOSAwLjA3ODUxLDAuMDM2ODFjMi4xMTI2MywxLjIyMTk0IDIuOTczODgsMy43NTkwNiAyLjE2OTA3LDUuOTc0NzR6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MTY1OjExMi42Nzc0MDUtLT4=';
  const miniRegExp = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  class ScratchRegExp {

    getInfo() {
      return {

        id: 'truefantomregexp',
        name: 'RegExp',

        color1: '#e6282a',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'regexp_test_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STRING] matches regex /[REGEX]/[FLAGS]?',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello world!'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hello'
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
              }
            }
          },
          '---',
          {
            opcode: 'regexp_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]',
            arguments: {
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '.'
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'g'
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello world!'
              },
              REPLACE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '$&$&'
              }
            }
          },
          {
            opcode: 'regexp_match_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]',
            arguments: {
              ITEM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello world!'
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '(.) (.{2})'
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'g'
              }
            }
          }
        ]
      };
    }

    regexp_test_block(args, util) {
      try {
        args.STRING = args.STRING.toString();
        args.REGEX = args.REGEX.toString();
        args.FLAGS = args.FLAGS.toString();
        return new RegExp(args.REGEX, args.FLAGS).test(args.STRING);
      } catch (e) {
        console.error(e);
        return false;
      }
    }
    regexp_replace_block(args, util) {
      try {
        args.STRING = args.STRING.toString();
        args.REPLACE = args.REPLACE.toString();
        args.REGEX = args.REGEX.toString();
        args.FLAGS = args.FLAGS.toString();
        return args.STRING.replace(
          new RegExp(args.REGEX, args.FLAGS),
          args.REPLACE
        );
      } catch (e) {
        console.error(e);
        return '';
      }
    }
    regexp_match_block(args, util) {
      try {
        args.STRING = args.STRING.toString();
        args.REGEX = args.REGEX.toString();
        args.FLAGS = args.FLAGS.toString();
        args.ITEM = Number(args.ITEM) || 0;
        // Cache the last matched string
        if (!(
          matchCache &&
          matchCache.string === args.STRING &&
          matchCache.regex === args.REGEX &&
          matchCache.flags === args.FLAGS
        )) {
          const newFlags = args.FLAGS.includes('g') ? args.FLAGS : args.FLAGS + 'g';
          const regex = new RegExp(args.REGEX, newFlags);
          matchCache = {
            string: args.STRING,
            regex: args.REGEX,
            flags: args.FLAGS,
            arr: args.STRING.match(regex)
          };
        }
        return matchCache.arr[args.ITEM - 1] || '';
      } catch (e) {
        console.error(e);
        return '';
      }
    }
  }

  Scratch.extensions.register(new ScratchRegExp());
})(Scratch);
