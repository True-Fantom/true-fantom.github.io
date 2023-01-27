(Scratch => {
  'use strict';

  class UserAgent {

    getInfo() {
      return {

        id: 'useragent',
        name: 'User Agent',

        blocks: [
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?'
          }
        ]
      }
    }

    user_agent_block() {
      try {return navigator.userAgent} catch(err) {return ''}
    }
  }

  Scratch.extensions.register(new UserAgent());
})(Scratch);
