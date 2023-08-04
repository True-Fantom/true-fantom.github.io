// TurboWarp Extension: Deltatime by True-Fantom & XeroName v8.0.2

/*
Official Documentations:
- https://true-fantom.github.io/docs/deltatime.html
*/

/*
Referenced Articles:
- https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
- https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
*/

/*
Special Thanks:
- Thanks to the "TheShovel", for showing how to use runtime steps to TurboWarp extension creators.
- Thanks to the "XeroName", for creating the original extension.
- Thanks to the "True-Fantom", for modifying the extension and the image to it.
*/

(Scratch => {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('DeltaTime Extension must be run Unsandboxed!');
  }

  const icon_uri = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMzAxLC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjMwMiwxNTBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjYWY1NWRkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMxMy41Mjg0MSwyMDMuMjk1OThoLTk2Ljc4MDE1di0xMi4xOTA0M2wzNC40OTAwMSwtOTQuNDAxNTNoMjcuNTAyODFsMzQuNzg3MzQsOTQuODQ3NTJ6TTI1OC42NzE0NiwxMzQuNDY0NjNsLTE2LjA1NTY5LDQ5Ljk1MTA1aDQ0Ljg5NjQ3bC0xNS45MDcwMywtNDkuOTUxMDVjLTAuNDcwNzcsLTEuNjAwNjEgLTEuMDk4MTIsLTMuNjA0MTEgLTEuODgyMDgsLTYuMDEwNDhjLTAuMDQxNTcsLTAuMTI3MzggLTAuMDgzMTksLTAuMjU0NzMgLTAuMTI0ODgsLTAuMzgyMDdjLTAuODQyNDIsLTIuNTc2ODQgLTEuNjg0ODYsLTUuMjAzMjMgLTIuNTI3MjksLTcuODc5MThjLTAuMzAwMDcsLTAuOTUyMjQgLTAuNTkxNDcsLTEuOTA3MiAtMC44NzQxNCwtMi44NjQ3NWMtMC4yNzg1LC0wLjk0MzUyIC0wLjUzMDIzLC0xLjgzNDAxIC0wLjc1NTIxLC0yLjY3MTQ5Yy0wLjEzMDE2LC0wLjQ4MjUzIC0wLjI1NjAzLC0wLjk2NjIgLTAuMzc3NiwtMS40NTA5NmMtMC40OTU1NSwxLjk4MjE5IC0xLjE4OTMxLDQuNDM1MTQgLTIuMDgxMjksNy4zNTg4NmMtMC44OTE5OCwyLjkyMzcyIC0xLjczNDQxLDUuNjk4NzggLTIuNTI3MjksOC4zMjUxN2MtMC43MzA0NCwyLjQxODI2IC0xLjI5MjM5LDQuMTg1MzkgLTEuNjg1ODUsNS4zMDEzNWMtMC4wMzIyNywwLjA5MTMzIC0wLjA2NDk4LDAuMTgyNTEgLTAuMDk4MTIsMC4yNzM1NHoiLz48cGF0aCBkPSJNMzU0LjQxMDk2LDExNS44ODE2NXY4Ny40MTQzM2gtMjIuNDQ4MjR2LTg3LjQxNDMzaC0yOC44NDA3OHYtMTguNzMxNjRoODAuMTI5OHYxOC43MzE2NHoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3Njk4NToxMTIuNjc3Mzk0OTk5OTk5OTktLT4=';

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  let fps, dt;
  let frame_timer = 0;
  let framesim_framerate = 30;

  const infinityToZero = val => {
    return val === Infinity ? 0 : val;
  };

  let last_frame_time = performance.now();
  const oldStep = vm.runtime._step;

  vm.runtime._step = function () {
    const this_frame_time = performance.now();
    fps = 1000 / (this_frame_time - last_frame_time);
    dt = infinityToZero(1 / fps);
    frame_timer++;
    last_frame_time = this_frame_time;
    oldStep.call(this);
  };

  vm.on('PROJECT_START', () => {
    frame_timer = 0;
  });

  class ScratchDeltaTime {
    getInfo() {
      return {

        id: 'truefantomxeronamedeltatime',
        name: 'DeltaTime',
        color1: '#af55dd',
        menuIconURI: icon_uri,
        docsURI: 'https://true-fantom.github.io/docs/deltatime.html',

        blocks: [
          {
            opcode: 'fps_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fps'
          },
          {
            opcode: 'dt_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Δt'
          },
          '---',
          {
            opcode: 'frame_timer_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'frame timer'
          },
          {
            opcode: 'reset_frame_timer_command',
            blockType: Scratch.BlockType.COMMAND,
            text: 'reset frame timer'
          },
          '---',
          {
            opcode: 'set_framesim_framerate_command',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set framesim framerate to [FPS] fps',
            arguments: {
              FPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30
              }
            }
          },
          {
            opcode: 'framesim_framerate_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'framesim framerate'
          },
          {
            opcode: 'framesim_coefficient_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'framesim coefficient'
          },
          '---',
          {
            opcode: 'wait_frames_command',
            blockType: Scratch.BlockType.COMMAND,
            text: 'wait [FRAMES] frames',
            arguments: {
              FRAMES: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          {
            opcode: 'wait_ticks_command',
            blockType: Scratch.BlockType.COMMAND,
            text: 'wait [TICKS] ticks',
            arguments: {
              TICKS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          }
        ]
      };
    }

    fps_reporter() {
      return fps;
    }
    dt_reporter() {
      return dt;
    }
    frame_timer_reporter() {
      return frame_timer;
    }
    reset_frame_timer_command() {
      frame_timer = 0;
    }
    set_framesim_framerate_command({FPS}) {
      calculation_framerate = Math.max(0, cast.toNumber(FPS));
    }
    framesim_framerate_reporter() {
      return framesim_framerate;
    }
    framesim_coefficient_reporter() {
      return framesim_framerate * dt;
    }
    wait_frames_command({FRAMES}, util) {
      const times = Math.round(cast.toNumber(FRAMES));
      if (typeof util.stackFrame.loopCounter === 'undefined') {
        util.stackFrame.loopCounter = times;
      }
      util.stackFrame.loopCounter--;
      if (util.stackFrame.loopCounter >= 0) {
        util.yieldTick();
      }
    }
    wait_ticks_command({TICKS}, util) {
      const times = Math.round(cast.toNumber(TICKS));
      if (typeof util.stackFrame.loopCounter === 'undefined') {
        util.stackFrame.loopCounter = times;
      }
      util.stackFrame.loopCounter--;
      if (util.stackFrame.loopCounter >= 0) {
        util.yield();
      }
    }
  }

  Scratch.extensions.register(new ScratchDeltaTime());
})(Scratch);
