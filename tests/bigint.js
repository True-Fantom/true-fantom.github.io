(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjg1LC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjI4NSwxNTAuMDAwMDFjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjMzU3MzM1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMDAuMDAwMDEsMTM0LjQ5NzVjMTEuNTI3NSwtMTMuMTE3NSAyMy42NTEyNSwtMjQuMjQ3NSAzOS43NSwtMjQuMjQ3NWMyNi4wMzYyNSwwIDM5Ljc1LDIwLjA3Mzc1IDM5Ljc1LDM5Ljc1YzAsMTkuNjc2MjUgLTEzLjcxMzc1LDM5Ljc1IC0zOS43NSwzOS43NWMtMTYuMDk4NzUsMCAtMjguMjIyNSwtMTEuMTMgLTM5Ljc1LC0yNC4yNDc1Yy0xMS41Mjc1LDEzLjExNzUgLTI0LjA0ODc1LDI0LjI0NzUgLTM5Ljc1LDI0LjI0NzVjLTI2LjAzNjI1LDAgLTM5Ljc1LC0yMC4wNzM3NSAtMzkuNzUsLTM5Ljc1YzAsLTE5LjY3NjI1IDEzLjcxMzc1LC0zOS43NSAzOS43NSwtMzkuNzVjMTUuNzAxMjUsMCAyOC4yMjI1LDExLjEzIDM5Ljc1LDI0LjI0NzV6TTI0MC4zNzUwNCwxNTBjMCw5LjE0MjUgNS4xNjc1LDE5Ljg3NSAxOS44NzUsMTkuODc1YzguMzQ3NSwwIDE3LjQ5LC05LjM0MTI1IDI2LjYzMjUsLTE5Ljg3NWMtOS4xNDI1LC0xMC41MzM3NSAtMTguMjg1LC0xOS44NzUgLTI2LjYzMjUsLTE5Ljg3NWMtMTQuNzA3NSwwIC0xOS44NzUsMTAuNzMyNSAtMTkuODc1LDE5Ljg3NXpNMzEzLjExNzQ5LDE1MGM4Ljk0Mzc1LDEwLjUzMzc1IDE4LjA4NjI1LDE5Ljg3NSAyNi42MzI1LDE5Ljg3NWMxNC43MDc1LDAgMTkuODc1LC0xMC43MzI1IDE5Ljg3NSwtMTkuODc1YzAsLTkuMTQyNSAtNS4xNjc1LC0xOS44NzUgLTE5Ljg3NSwtMTkuODc1Yy04LjU0NjI1LDAgLTE3LjQ5LDkuMzQxMjUgLTI2LjYzMjUsMTkuODc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzU3MzM1IiBzdHJva2Utd2lkdGg9IjMuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxNDUwMDAwMDAwMjoxMTIuNjc3Mzk0OTk5OTk5OTktLT4=';

  const cast = Scratch.Cast;

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

  const toNaNNumber = value => {
    // If value is already a number we don't need to coerce it with
    // Number().
    if (typeof value === 'number') {
      // Scratch treats NaN as 0, when needed as a number, but it shouldn't be here
      // E.g., 0 + NaN -> 0.
      return value;
    }
    const n = Number(value);
      // Scratch treats NaN as 0, when needed as a number, but it shouldn't be here
      // E.g., 0 + NaN -> 0.
    return n;
  };

  const isTrueInt = val => {
    // Values that are already numbers.
    if (typeof val === 'number') {
      if (isNaN(val)) { // NaN is considered an integer.
        return true;
      }
      // True if it's "round" (e.g., 2.0 and 2).
      return val === Math.floor(val);
    } else if (typeof val === 'boolean') {
      // `True` and `false` always represent integer after Scratch cast.
      return true;
    } else if (typeof val === 'string') {
      // If it contains a decimal point, don't consider it an int, but it shouldn't be here
      const n = Number(val);
      if (isNaN(n)) { // NaN is considered an integer.
        return true;
      }
      // True if it's "round" (e.g., 2.0 and 2).
      return n === Math.floor(n);
    }
    return false;
  };

  class ScratchBigInt {

    getInfo() {
      return {

        id: 'truefantombigint',
        name: 'BigInt',

        color1: '#357335',

        menuIconURI: icon,

        blocks: [
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
          },
          '---',
          {
            opcode: 'more_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≥ [B]',
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
            opcode: 'less_or_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≤ [B]',
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
            opcode: 'not_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≠ [B]',
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
          {
            opcode: 'almost_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≈ [B]',
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
            opcode: 'not_almost_equal_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] ≉ [B]',
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
            opcode: 'nand_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nand [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'nor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] nor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'xor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'xnor_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] xnor [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.BOOLEAN,
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
            opcode: 'trunc2_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'trunc of [A] with [B] digits after dot',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          {
            opcode: 'trunc_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'trunc of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'is_multiple_of_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] is multiple of [B] ?',
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
          '---',
          {
            opcode: 'log_with_base_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'log of [A] with base [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          '---',
          {
            opcode: 'pi_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝜋'
          },
          {
            opcode: 'e_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '𝘦'
          },
          {
            opcode: 'infinity_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '∞'
          },
          '---',
          {
            opcode: 'is_safe_number_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is safe number [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          '---',
          {
            opcode: 'is_number_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is number [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'is_int_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is int [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              }
            }
          },
          {
            opcode: 'is_float_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is float [A] ?',
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

    exponent_block({A, B}) {
      return Math.pow(cast.toNumber(A), cast.toNumber(B));
    }
    root_block({A, B}) {
      return Math.pow(cast.toNumber(B), (1 / cast.toNumber(A)));
    }
    negative_block({A}) {
      return 0 - cast.toNumber(A);
    }
    more_or_equal_block({A, B}) {
      return cast.compare(A, B) >= 0;
    }
    less_or_equal_block({A, B}) {
      return cast.compare(A, B) <= 0;
    }
    not_equal_block({A, B}) {
      return cast.compare(A, B) !== 0;
    }
    exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) === 0;
    }
    not_exactly_equal_block({A, B}) {
      return exactlyCompare(A, B) !== 0;
    }
    almost_equal_block({A, B}) {
      const c = cast.compare(A, B);
      return c <= 0.5 && c >= -0.5;
    }
    not_almost_equal_block({A, B}) {
      const c = cast.compare(A, B);
      return !(c <= 0.5 && c >= -0.5);
    }
    nand_block({A, B}) {
      return !(cast.toBoolean(A) && cast.toBoolean(B));
    }
    nor_block({A, B}) {
      return !(cast.toBoolean(A) || cast.toBoolean(B));
    }
    xor_block({A, B}) {
      return cast.toBoolean(A) !== cast.toBoolean(B);
    }
    xnor_block({A, B}) {
      return cast.toBoolean(A) === cast.toBoolean(B);
    }
    exactly_cont_block({A, B}) {
      return cast.toString(A).includes(cast.toString(B));
    }
    trunc2_block({A, B}) {
      let n = Math.floor(cast.toNumber(B));
      if (n >= 1) {
        n = 10 ** n;
        if (n !== Infinity) {
          return Math.trunc(cast.toNumber(A) * n) / n;
        }
        return cast.toNumber(A);
      }
      return Math.trunc(cast.toNumber(A));
    }
    trunc_block({A}) {
      return Math.trunc(cast.toNumber(A));
    }
    is_multiple_of_block({A, B}) {
      return cast.toNumber(A) % cast.toNumber(B) === 0;
    }
    log_with_base_block({A, B}) {
      return Math.log(cast.toNumber(A)) / Math.log(cast.toNumber(B));
    }
    pi_block() {
      return Math.PI;
    }
    e_block() {
      return Math.E;
    }
    infinity_block() {
      return Infinity;
    }
    is_safe_number_block({A}) {
      return Number.isSafeInteger(cast.toNumber(A));
    }
    is_number_block({A}) {
      return !Number.isNaN(toNaNNumber(A));
    }
    is_int_block({A}) {
      return isTrueInt(A) && !Number.isNaN(toNaNNumber(A));
    }
    is_float_block({A}) {
      return !isTrueInt(A) && !Number.isNaN(toNaNNumber(A));
    }
  }

  Scratch.extensions.register(new ScratchBigInt());
})(Scratch);
