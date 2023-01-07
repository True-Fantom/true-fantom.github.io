(function(Scratch) {
  'use strict';

  class Test {

    constructor() {}

    getInfo() {
      return {

        id: 'test3',
        name: 'Test 3',
        
        color1: '#163879',

        blocks: [
          
          {
            opcode: 'a1_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a2_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a3_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a4_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a5_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a6_block',
            blockType: Scratch.BlockType.COMMAND,
            text: '',
            arguments: {}
          }
          
        ],
        
        menus: {
          
        }
      }
    } 
    
    a1_block() {
      try {
        window.open('https://extensions.turbowarp.org/', '_blank');
      } catch (err) {}
    }
    
    a2_block() {
      try {
        let params = 'menubar=0';
        window.open('https://extensions.turbowarp.org/', '_blank', params);
      } catch (err) {}
    }
    
    a3_block() {
      try {
        let params = 'toolbar=0';
        window.open('https://extensions.turbowarp.org/', '_blank', params);
      } catch (err) {}
    }
    
    a4_block() {
      try {
        let params = 'location=0';
        window.open('https://extensions.turbowarp.org/', '_blank', params);
      } catch (err) {}
    }
    
    a5_block() {
      try {
        let params = 'status=0';
        window.open('https://extensions.turbowarp.org/', '_blank', params);
      } catch (err) {}
    }
    
    a6_block() {
      try {
        window.open('https://extensions.turbowarp.org/', '_blank');
      } catch (err) {}
    }
    
    a7_block() {
      try {
        let params = 'width=100,height=100,left=0,top=0,menubar=1,toolbar=0,location=1,status=0';
        window.open('https://extensions.turbowarp.org/', '_blank', params);
      } catch (err) {}
    }
    
  }

  Scratch.extensions.register(new Test());
  
})(Scratch);
