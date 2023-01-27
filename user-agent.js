(Scratch => {
  'use strict';

  class UserAgent {

    getInfo() {
      return {

        id: 'useragent',
        name: 'User Agent',

        blocks: [
          {
            opcode: 'user_agent_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'user agent'
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
