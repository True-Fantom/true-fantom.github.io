(Scratch => {
  'use strict';

  class Colors {

    getInfo() {
      return {

        id: 'colors',
        name: 'Colors',

        blocks: [
          {
            opcode: 'color_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COLOR]',
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR
              }
            }
          }
        ]
      }
    } 

    color_block({COLOR}) {
      return COLOR;
    }
  }

  Scratch.extensions.register(new Colors());
})(Scratch);
