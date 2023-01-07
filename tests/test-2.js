(function(Scratch) {
  'use strict';
  
  class Sound {
    constructor() {}
    getInfo() {
      return {
        // 'sound' would conflict with normal Scratch
        id: 'notSound',
        name: 'Sound',
        blocks: [
          {
            opcode: 'play',
            blockType: Scratch.BlockType.COMMAND,
            text: 'start sound from url: [path]',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              }
            }
          },
          {
            opcode: 'playUntilDone',
            blockType: Scratch.BlockType.COMMAND,
            text: 'play sound from url: [path] until done',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              }
            }
          },
          {
            opcode: 'save',
            blockType: Scratch.BlockType.COMMAND,
            text: 'save sound from url: [path] as [name]',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              },
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'recording1'
              }
            }
          },
          '---',
          {
            opcode: 'play_file',
            blockType: Scratch.BlockType.COMMAND,
            text: 'start [typee] sound from [path]',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              },
              typee: {
                type: Scratch.ArgumentType.STRING,
                menu: 'aaa'
              }
            }
          },
          {
            opcode: 'playplayUntilDone_file',
            blockType: Scratch.BlockType.COMMAND,
            text: 'play [typee] sound from [path] until done',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              },
              typee: {
                type: Scratch.ArgumentType.STRING,
                menu: 'aaa'
              }
            }
          },
          {
            opcode: 'save_file',
            blockType: Scratch.BlockType.COMMAND,
            text: 'save [typee] sound from [path] as [name]',
            arguments: {
              path: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/meow.mp3'
              },
              typee: {
                type: Scratch.ArgumentType.STRING,
                menu: 'aaa'
              },
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'recording1'
              }
            }
          },
          {
            opcode: 'sound',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'does [a] sound exist?',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'recording1',
              }
            }
          }
        ],
        menus: {
          aaa: {
            acceptReporters: true,
            items: [
              {
                text: '(1) .mp3',
                value: '1'
              },
              {
                text: '(2) .wav',
                value: '2'
              },
              {
                text: '(3) .flac',
                value: '3'
              },
              {
                text: '(4) .aac',
                value: '4'
              }
            ]
          }
        }
      }
    }

    play({path}) {
      return "";
    }

    playUntilDone({path}) {
      return "";
    }
    
    save({path, name}) {
      return "";
    }
    
    play_file({path, typee}) {
      return "";
    }
    
    playUntilDone_file({path, typee}) {
      return "";
    }
    
    save_file({path, typee, name}) {
      return "";
    }
    
    sound({a}) {
      return "";
    }
  }

  Scratch.extensions.register(new Sound());
})(Scratch);
