(function(Scratch) {
  'use strict';
  
  class Sound {
    constructor() {}
    getInfo() {
      return {
        id: 'notSoundt',
        name: 'Soundt',
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
          '---',
          {
            opcode: 'sound',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'does [a] sound exist in this sprite?',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'recording1',
              }
            }
          },
          {
            opcode: 'sound_all',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'does [a] sound exist?',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'recording1',
              }
            }
          },
          {
            opcode: 'all_sounds',
            blockType: Scratch.BlockType.REPORTER,
            text: 'all exist sounds in this sprite split by [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' ',
              }
            }
          },
          {
            opcode: 'all_sounds_all',
            blockType: Scratch.BlockType.REPORTER,
            text: 'all exist sounds split by [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' ',
              }
            }
          },
          {
            opcode: 'count_sounds',
            blockType: Scratch.BlockType.REPORTER,
            text: 'exist sounds in this sprite count',
            arguments: {}
          },
          {
            opcode: 'count_sounds_all',
            blockType: Scratch.BlockType.REPORTER,
            text: 'exist sounds count',
            arguments: {}
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
    
    sound_all({a}) {
      return "";
    }
    
    all_sounds({a}) {
      return "";
    }
    
    all_sounds_all({a}) {
      return "";
    }
    
    count_sounds() {
      return "";
    }
    
    count_sounds_all() {
      return "";
    }
  }

  Scratch.extensions.register(new Sound());
})(Scratch);
