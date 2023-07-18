// TurboWarp Extension : Deltatime by XeroName & True-Fantom v7.2.1

/*
Referenced articles :
- https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
- https://stackoverflow.com/questions/4787431/how-do-i-check-framerate-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

Thanks to the "XeroName", for creating the original extension.

Thanks to the "True-Fantom", for modifying the extension and the image to it.

Thanks to the "TheShovel", one of the TurboWarp Extension's developer named "ShovelUtils".
I learned how to use "Runtime Steps" of Scratch VM through that code. (XeroName).
*/

(Scratch => {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('DeltaTime must be run unsandboxed');
  }

  const icon_uri = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMzAxLC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjMwMiwxNTBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjYWY1NWRkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMxMy41Mjg0MSwyMDMuMjk1OThoLTk2Ljc4MDE1di0xMi4xOTA0M2wzNC40OTAwMSwtOTQuNDAxNTNoMjcuNTAyODFsMzQuNzg3MzQsOTQuODQ3NTJ6TTI1OC42NzE0NiwxMzQuNDY0NjNsLTE2LjA1NTY5LDQ5Ljk1MTA1aDQ0Ljg5NjQ3bC0xNS45MDcwMywtNDkuOTUxMDVjLTAuNDcwNzcsLTEuNjAwNjEgLTEuMDk4MTIsLTMuNjA0MTEgLTEuODgyMDgsLTYuMDEwNDhjLTAuMDQxNTcsLTAuMTI3MzggLTAuMDgzMTksLTAuMjU0NzMgLTAuMTI0ODgsLTAuMzgyMDdjLTAuODQyNDIsLTIuNTc2ODQgLTEuNjg0ODYsLTUuMjAzMjMgLTIuNTI3MjksLTcuODc5MThjLTAuMzAwMDcsLTAuOTUyMjQgLTAuNTkxNDcsLTEuOTA3MiAtMC44NzQxNCwtMi44NjQ3NWMtMC4yNzg1LC0wLjk0MzUyIC0wLjUzMDIzLC0xLjgzNDAxIC0wLjc1NTIxLC0yLjY3MTQ5Yy0wLjEzMDE2LC0wLjQ4MjUzIC0wLjI1NjAzLC0wLjk2NjIgLTAuMzc3NiwtMS40NTA5NmMtMC40OTU1NSwxLjk4MjE5IC0xLjE4OTMxLDQuNDM1MTQgLTIuMDgxMjksNy4zNTg4NmMtMC44OTE5OCwyLjkyMzcyIC0xLjczNDQxLDUuNjk4NzggLTIuNTI3MjksOC4zMjUxN2MtMC43MzA0NCwyLjQxODI2IC0xLjI5MjM5LDQuMTg1MzkgLTEuNjg1ODUsNS4zMDEzNWMtMC4wMzIyNywwLjA5MTMzIC0wLjA2NDk4LDAuMTgyNTEgLTAuMDk4MTIsMC4yNzM1NHoiLz48cGF0aCBkPSJNMzU0LjQxMDk2LDExNS44ODE2NXY4Ny40MTQzM2gtMjIuNDQ4MjR2LTg3LjQxNDMzaC0yOC44NDA3OHYtMTguNzMxNjRoODAuMTI5OHYxOC43MzE2NHoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3Njk4NToxMTIuNjc3Mzk0OTk5OTk5OTktLT4=';

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  let dt, fps;
  let frame_timer = 0;

  let calculation_standard = 30;
  let filter_power = 16;
  let filter_interpolation = 0;
  let dt_limit = 1;

  const infinityToZero = val => {
    return val === Infinity ? 0 : val;
  };

  let last_frame_time = performance.now();
  let leftovers = 0;
  const oldStep = vm.runtime._step;

  vm.runtime._step = function () {
    oldStep.call(this);
    const this_frame_time = performance.now();
    const changed_frame_time = this_frame_time - last_frame_time;
    const filter = 10 ** filter_power;
    const frames = 1000 / changed_frame_time + leftovers;
    fps = Math.floor(frames * filter) / filter;
    dt = Math.min(infinityToZero(1 / fps), dt_limit);
    leftovers = frames - fps;
    last_frame_time = this_frame_time;
    frame_timer++;
  };

  vm.on('PROJECT_START', () => {
    frame_timer = 0;
  });

  class ScratchDeltaTime {
    getInfo() {
      return {

        id: 'xeronametruefantomdeltatime',
        name: 'DeltaTime',
        color1: '#af55dd',
        menuIconURI: icon_uri,
        docsURI: 'https://extensions.turbowarp.org/XeroName/Deltatime.html',

        blocks: [
          {
            opcode: 'get_dt_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Δt'
          },
          {
            opcode: 'get_fps_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fps'
          },
          '---',
          {
            opcode: 'get_frame_timer_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'frame timer'
          },
          {
            opcode: 'reset_frame_timer_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'reset frame timer'
          },
          '---',
          {
            opcode: 'set_calculation_standard_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set calculation standard to [FPS] fps',
            arguments: {
              FPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30
              }
            }
          },
          {
            opcode: 'get_calculation_standard_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'calculation standard'
          },
          {
            opcode: 'calculate_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'calculate [DISTANCE]',
            arguments: {
              DISTANCE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          '---',
          {
            opcode: 'set_filter_power_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set noise filter power to [POWER] digits after dot',
            arguments: {
              POWER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
              }
            }
          },
          {
            opcode: 'get_filter_power_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'noise filter power'
          },
          {
            opcode: 'set_filter_interpolation_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set noise filter interpolation to [INTERPOLATION] steps',
            arguments: {
              INTERPOLATION: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
              }
            }
          },
          {
            opcode: 'get_filter_interpolation_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'noise filter interpolation'
          },
          '---',
          {
            opcode: 'set_dt_limit_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set Δt limit to [LIMIT]',
            arguments: {
              LIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          {
            opcode: 'get_dt_limit_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Δt limit'
          }
        ]
      };
    }

    get_dt_block() {
      return dt;
    }
    get_fps_block() {
      return fps;
    }
    get_frame_timer_block() {
      return frame_timer;
    }
    reset_frame_timer_block() {
      frame_timer = 0;
    }
    set_calculation_standard_block({FPS}) {
      calculation_standard = Math.max(0, cast.toNumber(FPS));
    }
    get_calculation_standard_block() {
      return calculation_standard;
    }
    calculate_block({DISTANCE}) {
      return calculation_standard * cast.toNumber(DISTANCE);
    }
    set_filter_power_block({POWER}) {
      filter_power = Math.min(Math.max(0, Math.floor(cast.toNumber(POWER))), 16);
    }
    get_filter_power_block() {
      return filter_power;
    }
    set_filter_interpolation_block({INTERPOLATION}) {
      filter_interpolation = Math.max(0, Math.floor(cast.toNumber(INTERPOLATION)));
    }
    get_filter_interpolation_block() {
      return filter_interpolation;
    }
    set_dt_limit_block({LIMIT}) {
      dt_limit = Math.max(0, cast.toNumber(LIMIT));
    }
    get_dt_limit_block() {
      return dt_limit;
    }
  }

  Scratch.extensions.register(new ScratchDeltaTime());
})(Scratch);
