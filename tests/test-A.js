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
          }
        ]
      }
    } 

    type_of_block({A}) {
      return typeof A;
    }
  }

  Scratch.extensions.register(new TypeOf());
})(Scratch);
