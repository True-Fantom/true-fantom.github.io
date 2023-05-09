(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0ODEiIGhlaWdodD0iMjI1LjM1NDgiIHZpZXdCb3g9IjAsMCwyMjUuMzU0ODEsMjI1LjM1NDgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODcuMzIyOTEsLTM3LjMyMjYxKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTg3LjMyMjkyLDE1MC4wMDAwMWMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNlNjI4MmEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE4Ny4zMjI5MSwxNTAuMDAwMDFjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNWRiZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzVkYmYwMCIgc3Ryb2tlLXdpZHRoPSI3LjUiPjxwYXRoIGQ9Ik0yMTkuOTU0MjEsMTcyLjQ4OTIyaDI4LjcxNzIxbDMuNzM2MDMsLTQ0Ljk3ODQxaC0yOC43MTcxOGwyLjUwOTI3LC0zMC4wMDUwNWgyOC43MTcyMWwyLjUwOTI4LC0zMC4wMDUwNmgyOC41NDk5MmwtMi41MDkyOCwzMC4wMDUwNmg0MS44MjExOWwyLjQ1MzUsLTMwLjAwNTA2aDI4LjYwNTY4bC0yLjU2NTAxLDMwLjAwNTA2aDI4LjcxNzE5bC0yLjUwOTI4LDMwLjAwNTA1aC05OS4wMzI1OGwtMy43MzYwMyw0NC45Nzg0Mmg5OC45NzY4MWwtMi4zNDE5OSwzMC4wMDUwM2gtMjguNzE3MTlsLTIuNDUzNTMsMzAuMDA1MDZoLTI4LjcxNzE4bDIuNTA5MjgsLTMwLjAwNTA2aC00MS42NTM4OGwtMi41MDkyOCwzMC4wMDUwNmgtMjguNTQ5OTJsMi40NTM1MywtMzAuMDA1MDZoLTI4LjcxNzIxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMzgwLjA0NTc3LDEyNy41MTA3NmgtMjguNzE3MjJsLTMuNzM2MDIsNDQuOTc4NDFoMjguNzE3MTlsLTIuNTA5MjgsMzAuMDA1MDVoLTI4LjcxNzIxbC0yLjUwOTI4LDMwLjAwNTA1aC0yOC41NDk5MmwyLjUwOTI4LC0zMC4wMDUwNWgtNDEuODIxMTlsLTIuNDUzNSwzMC4wMDUwNWgtMjguNjA1NjhsMi41NjUwMSwtMzAuMDA1MDVoLTI4LjcxNzE4bDIuNTA5MjcsLTMwLjAwNTA1aDk5LjAzMjU4bDMuNzM2MDMsLTQ0Ljk3ODQxaC05OC45NzY4MWwyLjM0MiwtMzAuMDA1MDNoMjguNzE3MTlsMi40NTM1MywtMzAuMDA1MDVoMjguNzE3MTlsLTIuNTA5MjgsMzAuMDA1MDVoNDEuNjUzODhsMi41MDkyOCwtMzAuMDA1MDVoMjguNTQ5OTJsLTIuNDUzNTMsMzAuMDA1MDVoMjguNzE3MjF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MDk0OTk5OTk5OTg6MTEyLjY3NzM5NDk5OTk5OTk5LS0+';
  const miniHash = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMC4yOTUwMiIgaGVpZ2h0PSIyMC4yMDc5NCIgdmlld0JveD0iMCwwLDIwLjI5NTAyLDIwLjIwNzk0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg5Ljg1MjQ4LC0xMzkuODk2MDMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNGE5OTAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjkwLjY4MTYzLDE1Mi42MTgwM2gzLjM0MzA1bDAuNDM0OTIsLTUuMjM2MDZoLTMuMzQzMDRsMC4yOTIxMSwtMy40OTI5N2gzLjM0MzA1bDAuMjkyMTEsLTMuNDkyOTdoMy4zMjM1N2wtMC4yOTIxMSwzLjQ5Mjk3aDQuODY4NTJsMC4yODU2MiwtMy40OTI5N2gzLjMzMDA2bC0wLjI5ODYsMy40OTI5N2gzLjM0MzA1bC0wLjI5MjExLDMuNDkyOTdoLTExLjUyODY1bC0wLjQzNDkyLDUuMjM2MDZoMTEuNTIyMTZsLTAuMjcyNjQsMy40OTI5N2gtMy4zNDMwNWwtMC4yODU2MiwzLjQ5Mjk3aC0zLjM0MzA0bDAuMjkyMTEsLTMuNDkyOTdoLTQuODQ5MDRsLTAuMjkyMTEsMy40OTI5N2gtMy4zMjM1N2wwLjI4NTYyLC0zLjQ5Mjk3aC0zLjM0MzA1eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMzA5LjMxODMzLDE0Ny4zODE5N2gtMy4zNDMwNWwtMC40MzQ5Miw1LjIzNjA2aDMuMzQzMDVsLTAuMjkyMTEsMy40OTI5N2gtMy4zNDMwNWwtMC4yOTIxMSwzLjQ5Mjk3aC0zLjMyMzU3bDAuMjkyMTEsLTMuNDkyOTdoLTQuODY4NTJsLTAuMjg1NjIsMy40OTI5N2gtMy4zMzAwNmwwLjI5ODYsLTMuNDkyOTdoLTMuMzQzMDRsMC4yOTIxMSwtMy40OTI5N2gxMS41Mjg2NWwwLjQzNDkyLC01LjIzNjA2aC0xMS41MjIxNmwwLjI3MjY0LC0zLjQ5Mjk3aDMuMzQzMDVsMC4yODU2MiwtMy40OTI5N2gzLjM0MzA1bC0wLjI5MjExLDMuNDkyOTdoNC44NDkwNGwwLjI5MjExLC0zLjQ5Mjk3aDMuMzIzNTdsLTAuMjg1NjIsMy40OTI5N2gzLjM0MzA1eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMC4xNDc1MjM2OTkwODUwNzoxMC4xMDM5NzAwMDAwMDAwNi0tPg==';

  class CryptoScratch {

    getInfo() {
      return {

        id: 'truefantomcrypto',
        name: 'Crypto',

        color1: '#5dbf00',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'is_hash_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniHash
              }
            }
          },
          '---',
          {
            opcode: 'hash_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] [A] with global salt [B] and local salt [C] of [D] with [E] iterations',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'sha-3-512'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              D: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              E: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10000
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniHash
              }
            }
          }
        ]
      };
    }

    bitwiseRightShift({LEFT, RIGHT}) {
      return LEFT >> RIGHT;
    }
  }

  Scratch.extensions.register(new CryptoScratch());
})(Scratch);
