(Scratch => {
  'use strict';

  class TypeOf {

    getInfo() {
      return {

        id: 'typeof',
        name: 'TypeOf',

        blocks: [
          {
            opcode: 'type_of_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'type of [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          '---',
          {
            opcode: 'null_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'null'
          },
          {
            opcode: 'undefined_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'undefined'
          },
          {
            opcode: 'bigint_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'bigint'
          },
          {
            opcode: 'symbol_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'symbol'
          },
          {
            opcode: 'date_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'date'
          },
          {
            opcode: 'regex_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'regex'
          },
          {
            opcode: 'array_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'array'
          },
          {
            opcode: 'object_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'object'
          }
        ]
      }
    } 

    type_of_block({A}) {
      return typeof A;
    }
    null_block() {
      return null;
    }
    type_of_block() {
      return undefined;
    }
    bigint_block() {
      return 3445678908623456789876543245678765432345678765432345678765434567876543456787654345676543456787654345678765434567898765434567876543234567876543234567876543456789876543456787654323456787654323456765454678987654678909865467890875435678976543567898765456789876545678954467865467n;
    }
    symbol_block() {
      return Symbol()
    }
    date_block() {
      return Date.now();
    }
    regex_block() {
      return /asasasadsadasd/;
    }
    array_block() {
      return [1,2,3,4545,465,56];
    }
    object_block() {
      return typeof {"a":1,"b":5,"asfd":7777};
    }
  }

  Scratch.extensions.register(new TypeOf());
})(Scratch);
