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
            opcode: 'broadcast_rep_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'broadcast [MENU]',
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: 'broadcasts_menu'
              }
            }
          },
          {
            opcode: 'broadcast_com_block',
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
            items: 'getBroadcasts'
          }
        }
      };
    }

    broadcastsSort(A, B) {
      const textA = A.text;
      const textB = B.text;
      let comparison = 0;
      if (textA > textB) {
        comparison = 1;
      } else if (textA < textB) {
        comparison = -1;
      }
      return comparison;
    }
    getBroadcasts() {
      // @ts-expect-error - Blockly not typed yet
      // eslint-disable-next-line no-undef
      const broadcasts = typeof Blockly === 'undefined' ? [] : Blockly.getMainWorkspace()
        .getVariableMap()
        .getVariablesOfType('broadcast_msg')
        .map(model => ({
          text: model.name,
          value: model.getId()
        }));
      if (broadcasts.length > 0) {
        return broadcasts.sort(this.broadcastsSort);
      } else {
        return [{text: '', value: ''}];
      }
    }
    broadcast_rep_block({MENU}) {
      return MENU;
    }
    broadcas_com_block({MENU}) {
      Blockly.getMainWorkspace().editor.refreshWorkspace();
    }
  }

  Scratch.extensions.register(new ScratchTest());
})(Scratch);
