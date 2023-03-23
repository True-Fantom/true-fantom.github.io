(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjg3LC0zNy4zMjI1OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjI4OCwxNTBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjMzU3MzM1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMDAsMTMyLjc0MjVjMTIuODMyNSwtMTQuNjAyNSAyNi4zMjg3NSwtMjYuOTkyNSA0NC4yNSwtMjYuOTkyNWMyOC45ODM3NSwwIDQ0LjI1LDIyLjM0NjI1IDQ0LjI1LDQ0LjI1YzAsMjEuOTAzNzUgLTE1LjI2NjI1LDQ0LjI1IC00NC4yNSw0NC4yNWMtMTcuOTIxMjUsMCAtMzEuNDE3NSwtMTIuMzkgLTQ0LjI1LC0yNi45OTI1Yy0xMi44MzI1LDE0LjYwMjUgLTI2Ljc3MTI1LDI2Ljk5MjUgLTQ0LjI1LDI2Ljk5MjVjLTI4Ljk4Mzc1LDAgLTQ0LjI1LC0yMi4zNDYyNSAtNDQuMjUsLTQ0LjI1YzAsLTIxLjkwMzc1IDE1LjI2NjI1LC00NC4yNSA0NC4yNSwtNDQuMjVjMTcuNDc4NzUsMCAzMS40MTc1LDEyLjM5IDQ0LjI1LDI2Ljk5MjV6TTIzMy42MjUwNSwxNTBjMCwxMC4xNzc1IDUuNzUyNSwyMi4xMjUgMjIuMTI1LDIyLjEyNWM5LjI5MjUsMCAxOS40NywtMTAuMzk4NzUgMjkuNjQ3NSwtMjIuMTI1Yy0xMC4xNzc1LC0xMS43MjYyNSAtMjAuMzU1LC0yMi4xMjUgLTI5LjY0NzUsLTIyLjEyNWMtMTYuMzcyNSwwIC0yMi4xMjUsMTEuOTQ3NSAtMjIuMTI1LDIyLjEyNXpNMzE0LjYwMjQ4LDE1MGM5Ljk1NjI1LDExLjcyNjI1IDIwLjEzMzc1LDIyLjEyNSAyOS42NDc1LDIyLjEyNWMxNi4zNzI1LDAgMjIuMTI1LC0xMS45NDc1IDIyLjEyNSwtMjIuMTI1YzAsLTEwLjE3NzUgLTUuNzUyNSwtMjIuMTI1IC0yMi4xMjUsLTIyLjEyNWMtOS41MTM3NSwwIC0xOS40NywxMC4zOTg3NSAtMjkuNjQ3NSwyMi4xMjV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMzNTczMzUiIHN0cm9rZS13aWR0aD0iNS41Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzEyNDk5OTk5OTk5OjExMi42Nzc0MDUtLT4=';

  const cast = Scratch.Cast;

  const toBigInt = value => {
    if (typeof value === 'boolean') {
      return BigInt(value);
    }
    if (typeof value === 'number') {
      if (Number.isNaN(value)) {
        return 0n;
      }
      return BigInt(value);
    }
    const n = Number(value);
    if (Number.isNaN(n)) {
      return 0n;
    }
    return BigInt(n);
  };

  const powBigInt = (v1, v2) => {
    return v1 ** v2;
  }

  class ScratchBigInt {

    getInfo() {
      return {

        id: 'truefantombigint',
        name: 'BigInt',

        color1: '#357335',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'add_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] + [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'subtract_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] - [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'multiply_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] * [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'divide_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] / [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'exponent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] ^ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'root_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A] √ [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'negative_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '- [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          }
        ]
      };
    }

    add_block({A, B}) {
      return toBigInt(A) + toBigInt(B);
    }
    subtract_block({A, B}) {
      return toBigInt(A) - toBigInt(B);
    }
    multiply_block({A, B}) {
      return toBigInt(A) * toBigInt(B);
    }
    divide_block({A, B}) {
      return toBigInt(A) / toBigInt(B);
    }
    exponent_block({A, B}) {
      return powBigInt(toBigInt(A), toBigInt(B));
    }
    root_block({A, B}) {
      return powBigInt(toBigInt(B), (1n / toBigInt(A)));
    }
    negative_block({A}) {
      return 0n - toBigInt(A);
    }
  }

  Scratch.extensions.register(new ScratchBigInt());
})(Scratch);
