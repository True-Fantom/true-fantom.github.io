(Scratch => {
  'use strict';

  class WinHW {

    getInfo() {
      return {

        id: 'winhw',
        name: 'WinHW',

        blocks: [
          {
            opcode: 'height_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'height'
          },
          {
            opcode: 'width_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'width'
          }
        ]
      }
    } 

    height_block() {
      return window.innerHeight;
    }
    width_block() {
      return window.innerWidth;
    }
  }

  Scratch.extensions.register(new WinHW());
})(Scratch);
