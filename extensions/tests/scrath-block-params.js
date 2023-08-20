(Scratch => {
  'use strict';

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  class ScratchBlockParams {
    getInfo() {
      return {

        id: 'truefantomscrathblockparams',
        name: 'Params-Test',

        blocks: [
          {
            opcode: 'waitTicks',
            blockType: Scratch.BlockType.COMMAND,
            text: 'wait [TICKS] ticks',
            arguments: {
              TICKS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: 'waitTicksReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'wait [TICKS] ticks then [VALUE]',
            arguments: {
              TICKS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple',
              },
            },
          },
          {
            opcode: 'waitFrames',
            blockType: Scratch.BlockType.COMMAND,
            text: 'wait [FRAMES] frames',
            arguments: {
              FRAMES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: 'waitFramesReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'wait [FRAMES] frames then [VALUE]',
            arguments: {
              FRAMES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple',
              }
            }
          }
        ]
      };
    }

    waitTicks({ TICKS }, util) {
      if (util.getParam('ticks_need') === null) {
        util.initParams();
        util.pushParam('ticks_need', Math.max(0, cast.toNumber(TICKS)));
        util.pushParam('ticks_timer', 0);
      }
      if (util.getParam('ticks_need') > util.getParam('ticks_timer')) {
        util.pushParam('ticks_timer', util.getParam('ticks_timer') + 1);
        util.yield();
      }
    }
    waitTicksReporter({ TICKS, VALUE }, util) {
      if (util.getParam('ticks_need') === null) {
        util.initParams();
        util.pushParam('ticks_need', Math.max(0, cast.toNumber(TICKS)));
        util.pushParam('ticks_timer', 0);
      }
      if (util.getParam('ticks_need') > util.getParam('ticks_timer')) {
        util.pushParam('ticks_timer', util.getParam('ticks_timer') + 1);
        util.yield();
      }
      return VALUE;
    }
    waitFrames({ FRAMES }, util) {
      if (util.getParam('frames_need') === null) {
        util.initParams();
        util.pushParam('frames_need', Math.max(0, cast.toNumber(FRAMES)));
        util.pushParam('frames_timer', 0);
      }
      if (util.getParam('frames_need') > util.getParam('frames_timer')) {
        util.pushParam('frames_timer', util.getParam('frames_timer') + 1);
        util.yield();
      }
    }
    waitFramesReporter({ FRAMES, VALUE }, util) {
      if (util.getParam('frames_need') === null) {
        util.initParams();
        util.pushParam('frames_need', Math.max(0, cast.toNumber(FRAMES)));
        util.pushParam('frames_timer', 0);
      }
      if (util.getParam('frames_need') > util.getParam('frames_timer')) {
        util.pushParam('frames_timer', util.getParam('frames_timer') + 1);
        util.yield();
      }
      return VALUE;
    }
  }

  Scratch.extensions.register(new ScratchBlockParams());
})(Scratch);
