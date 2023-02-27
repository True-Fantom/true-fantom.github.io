(Scratch => {
  'use strict';

  let cameraX = 0;
  let cameraY = 0;
  let cameraZoom = 100;
  let cameraBG = '#ffffff';
  
  class Camera {

    getInfo() {
      return {

        color1: '#ff4da7',
        color2: '#b93778',
        color3: '#b93778',

        id: 'DTcamera',

        name: 'Camera',

        blocks: [
          {
            opcode: 'setBoth',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera to x: [x] y: [y]',
            arguments: {
              x: {
                type: 'number',
                defaultValue: 0
              },
              y: {
                type: 'number',
                defaultValue: 0
              },
            }
          },
          '---',
          {
            opcode: 'changeZoom',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera zoom by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setZoom',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera zoom to [val] %',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 100
              }
            }
          },
          '---',
          {
            opcode: 'changeX',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera x by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setX',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera x to [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'changeY',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera y by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setY',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera y to [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 0
              }
            }
          },
          '---',
          {
            opcode: 'getX',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera x',
          },
          {
            opcode: 'getY',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera y',
          },
          {
            opcode: 'getZoom',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera zoom',
          },
          /*  REMOVED - touching color still returns white
          {
            opcode: 'setCol',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set background color to [val]',
            arguments: {
              val: {
                type: 'color'
              }
            }
          },
          */
        ]
      }
    }

    setBoth(ARGS) {
      cameraX = +ARGS.x;
      cameraY = +ARGS.y;
    }
    changeZoom(ARGS) {
      cameraZoom += +ARGS.val;
    }
    setZoom(ARGS) {
      cameraZoom = +ARGS.val;
    }
    changeX(ARGS) {
      cameraX += +ARGS.val;
    }
    setX(ARGS) {
      cameraX = +ARGS.val;
    }
    changeY(ARGS) {
      cameraY += +ARGS.val;
    }
    setY(ARGS) {
      cameraY = +ARGS.val;
    }
    getX() {
      return cameraX;
    }
    getY() {
      return cameraY;
    }
    getZoom() {
      return cameraZoom;
    }
    setCol(ARGS) {
      cameraBG = ARGS.val;
    }
  }

  Scratch.extensions.register(new Camera());
})(Scratch)
