(Scratch => {
  'use strict';

  class ScratchTest {
    getInfo() {
      return {

        id: 'truefantombroadcasts',
        name: 'Broadcasts',
        color1: '#e08b9f',

        blocks: [
          {
            opcode: 'broadcast_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'broadcast [MENU]',
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: 'broadcasts_menu'
              }
            }
          }
        ],
        menus: {
          broadcasts_menu: {
            acceptReporters: true,
            items: ['test1', 'test2']
          }
        }
      };
    }

    broadcast_block() {
      return true;
    }
  }

  Scratch.extensions.register(new ScratchTest());
})(Scratch);
