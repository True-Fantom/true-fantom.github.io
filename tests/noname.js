(Scratch => {
  'use strict';

  const cast = Scratch.Cast;

  class Comparisons {

    getInfo() {
      return {

        id: 'nonamecomparisons',
        name: 'Comparisons',

        color1: '#00a889',
        color2: '#1e8c76',
        color3: '#1e8c76',

        blocks: [
          {
            opcode: 'equal_negative',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] =- [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '-5'
              },
            }
          },
          {
            opcode: 'equal_PON',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] =± [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '-5'
              },
            }
          },
          {
            opcode: 'equal_almost',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≈ [b] ／ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '6'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
            }
          },
          '---',
          {
            opcode: 'DL',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] < [b] < [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'DLE',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ≤ [b] ≤ [c]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '\n'
              },
            }
          },
        ]
      }
    }

    equal_negative(args) {
      if(isNaN(args.a)||isNaN(args.b)){
        return "NaN";
      }
      else{
        return (args.a == (0 - args.b));
      }
    }
    equal_PON(args) {
      if(isNaN(args.a)||isNaN(args.b)){
        return "NaN";
      }
      else{
        return (args.a == (0 - args.b))||(args.a == args.b);
      }
    }
    equal_almost(args) {
      return (Math.abs(args.a - args.b) <= args.c);
    }
    DL(args) {
      return (args.a < args.b) && (args.b < args.c);
    }
    DLE(args) {
      return (args.a <= args.b) && (args.b <= args.c);
    }
  }

  Scratch.extensions.register(new Comparisons());
})(Scratch);
