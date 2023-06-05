(Scratch => {
  'use strict';

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  class ScratchTest {
    getInfo() {
      return {

        id: 'truefantombroadcasts',
        name: 'Broadcasts',
        color1: '#e08b9f',

        blocks: [
          {
            opcode: 'broadcasts_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'all broadcasts',
          },
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

    broadcasts_block() {
      return Scratch.vm.runtime.getTargetForStage().getBroadcastMsgs();
    }
    broadcast_block() {
      return Scratch.vm.runtime.getTargetForStage().getAllBroadcastMessages();
    }
  }

  Scratch.extensions.register(new ScratchTest());
})(Scratch);
