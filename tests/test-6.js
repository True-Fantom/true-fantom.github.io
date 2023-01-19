(function(Scratch) {
  'use strict';

  class Test {

    constructor() {}

    getInfo() {
      return {

        id: 'test1',
        name: 'Test 1',

        blocks: [
          
          {
            opcode: 'a1_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'language',
            arguments: {}
          },
          
          {
            opcode: 'a2_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a3_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a4_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a5_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a6_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '',
            arguments: {}
          },
          
          {
            opcode: 'a7_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          }
          
        ],
        
        menus: {
          
        }
      }
    } 
    
    a1_block() {
      return 'type: ' + navigator.connection.type;
    }
    
    a2_block() {
      return 'downlink: ' + navigator.connection.downlink + ' Mb/s';
    }
    
    a3_block() {
      return 'rtt: ' + navigator.connection.rtt + ' ms';
    }
    
    a4_block() {
      return 'downlink max: ' + navigator.connection.downlinkMax + ' Mb/s';
    }
    
    a5_block() {
      return 'effective type: ' + navigator.connection.effectiveType;
    }
    
    a6_block() {
      return 'save data: ' + navigator.connection.saveData;
    }
    
    a7_block({STRING}) {
      if (Math.abs(STRING) < 1.0) {
        var e = parseInt(STRING.toString().split('e-')[1]);
        if (e) {
            STRING *= Math.pow(10,e-1);
            STRING = '0.' + (new Array(e)).join('0') + STRING.toString().substring(2);
        }
      } else {
        var e = parseInt(STRING.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            STRING /= Math.pow(10,e);
            STRING += (new Array(e+1)).join('0');
        }
      }
      return STRING;
    }
    
  }

  Scratch.extensions.register(new Test());
  
})(Scratch);
