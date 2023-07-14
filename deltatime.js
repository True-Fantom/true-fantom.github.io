// TurboWarp Extension : Deltatime by XeroName & True-Fantom
// First generation at 2023-06-21 KST
// Latest update at 2023-07-7 MSK
// v1.4.0

/*
Referenced articles :
- https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
- https://stackoverflow.com/questions/4787431/how-do-i-check-framerate-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

Thanks to the "XeroName", for creating the extension.

Thanks to the "True-Fantom", for modifying the extension and the image to it.

Thanks to the "TheShovel", one of the TurboWarp Extension's developer named "ShovelUtils".
I learned how to use "Runtime Steps" of Scratch VM through that code. (XeroName)
*/

//==================== Scratch Zone ====================//
(Scratch => {
  'use strict';

//==================== Error Unsandboxed Message ====================//
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('DeltaTime must be run unsandboxed');
  }
//==================== Error Unsandboxed Message END ====================//

//==================== Var Zone ====================//
  const iconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMzAxLC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE4Ny4zMjMwMiwxNTBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNzYxYzhjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMxMy41Mjg0MSwyMDMuMjk1OThoLTk2Ljc4MDE1di0xMi4xOTA0M2wzNC40OTAwMSwtOTQuNDAxNTNoMjcuNTAyODFsMzQuNzg3MzQsOTQuODQ3NTJ6TTI1OC42NzE0NiwxMzQuNDY0NjNsLTE2LjA1NTY5LDQ5Ljk1MTA1aDQ0Ljg5NjQ3bC0xNS45MDcwMywtNDkuOTUxMDVjLTAuNDcwNzcsLTEuNjAwNjEgLTEuMDk4MTIsLTMuNjA0MTEgLTEuODgyMDgsLTYuMDEwNDhjLTAuMDQxNTcsLTAuMTI3MzggLTAuMDgzMTksLTAuMjU0NzMgLTAuMTI0ODgsLTAuMzgyMDdjLTAuODQyNDIsLTIuNTc2ODQgLTEuNjg0ODYsLTUuMjAzMjMgLTIuNTI3MjksLTcuODc5MThjLTAuMzAwMDcsLTAuOTUyMjQgLTAuNTkxNDcsLTEuOTA3MiAtMC44NzQxNCwtMi44NjQ3NWMtMC4yNzg1LC0wLjk0MzUyIC0wLjUzMDIzLC0xLjgzNDAxIC0wLjc1NTIxLC0yLjY3MTQ5Yy0wLjEzMDE2LC0wLjQ4MjUzIC0wLjI1NjAzLC0wLjk2NjIgLTAuMzc3NiwtMS40NTA5NmMtMC40OTU1NSwxLjk4MjE5IC0xLjE4OTMxLDQuNDM1MTQgLTIuMDgxMjksNy4zNTg4NmMtMC44OTE5OCwyLjkyMzcyIC0xLjczNDQxLDUuNjk4NzggLTIuNTI3MjksOC4zMjUxN2MtMC43MzA0NCwyLjQxODI2IC0xLjI5MjM5LDQuMTg1MzkgLTEuNjg1ODUsNS4zMDEzNWMtMC4wMzIyNywwLjA5MTMzIC0wLjA2NDk4LDAuMTgyNTEgLTAuMDk4MTIsMC4yNzM1NHoiLz48cGF0aCBkPSJNMzU0LjQxMDk2LDExNS44ODE2NXY4Ny40MTQzM2gtMjIuNDQ4MjR2LTg3LjQxNDMzaC0yOC44NDA3OHYtMTguNzMxNjRoODAuMTI5OHYxOC43MzE2NHoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3Njk4NToxMTIuNjc3Mzk0OTk5OTk5OTktLT4=';

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  let calculateFps = 30; // FPS value of Calculator

  let filterPower = 16; // Number value of Filter Mode

  let dtLimit = 1; // Number value of DT Limit
//==================== Var Zone END ====================//

//==================== "Deltatime Watcher" Zone ====================//
  const infinityToZero = val => {
    return val === Infinity ? 0 : val;
  };

  let lastFrameTime = performance.now();
  let leftovers = 0;

  let framesTimer = 0;
  let vmFPS, vmDt;

  const oldStep = vm.runtime._step;

  vm.runtime._step = function () {
    oldStep.call(this);

    const thisFrameTime = performance.now();
    const changeFrameTime = thisFrameTime - lastFrameTime;
    const filter = 10 ** filterPower;

    const frames = 1000 / changeFrameTime + leftovers;

    vmFPS = Math.floor(frames * filter) / filter;
    vmDt = Math.min(infinityToZero(1 / vmFPS), dtLimit);

    leftovers = frames - vmFPS;
    lastFrameTime = thisFrameTime;

    framesTimer++;
  };

  vm.on('PROJECT_START', () => {
    leftovers = 0;
    framesTimer = 0;
  });
//==================== "Deltatime Watcher" Zone END ====================//

//==================== Extension Zone ====================//
  class ScratchDt {
    getInfo() {
      return {

        id: 'xeronametruefantomdt',
        name: 'DeltaTime',
        color1: '#761c8c',
        menuIconURI: iconURI,

        blocks: [
//==================== "Resources from Scratch VM" Blocks ====================//
          {
            opcode: 'getDt_vm',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Δt',
          },
          {
            opcode: 'getFPS_vm',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fps',
          },
          '---',
//========== Frames Timer Blocks ==========//
          {
            opcode: 'getFramesTimer',
            blockType: Scratch.BlockType.REPORTER,
            text: 'frames timer',
          },
          {
            opcode: 'resetFramesTimer',
            blockType: Scratch.BlockType.COMMAND,
            text: 'reset frames timer'
          },
//==================== Calculator Blocks ====================//
          '---',
          {
            opcode: 'setCalculatorStandard',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set calculation standard to [FPS] fps',
            arguments: {
              FPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30,
              },
            },
          },
          {
            opcode: 'getCalculatorStandard',
            blockType: Scratch.BlockType.REPORTER,
            text: 'calculation standard',
            disableMonitor: true,
          },
          {
            opcode: 'calcMultiplyValue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'calculate [DISTANCE]',
            arguments: {
              DISTANCE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
//==================== Filter Blocks ====================//
          '---',
          {
            opcode: 'setFilterPower',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set noise filter power to [POWER] digits after dot',
            arguments: {
              POWER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16,
              },
            },
          },
          {
            opcode: 'getFilterPower',
            blockType: Scratch.BlockType.REPORTER,
            text: 'noise filter power',
          },
          {
            opcode: 'setFilterInterpolation',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set noise filter interpolation to [MODE] steps',
            arguments: {
              MODE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16,
              },
            },
          },
          {
            opcode: 'getFilterInterpolation',
            blockType: Scratch.BlockType.REPORTER,
            text: 'noise filter interpolation',
          },
//========== DT Limit Blocks ==========//
          '---',
          {
            opcode: 'changeDtLimit',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change Δt limit by [LIMIT]',
            arguments: {
              LIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0.2,
              },
            },
          },
          {
            opcode: 'setDtLimit',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set Δt limit to [LIMIT]',
            arguments: {
              LIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: 'getDtLimit',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Δt limit',
          },
//==================== Frames Utility Blocks ====================//
          '---',
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
//==================== Block Sections END ====================//
        ],
//==================== Menu Zone ====================//
        menus: {
          pause_menu: {
            acceptReporters: true,
            items: ['enabled', 'disabled'],
          },
        },
//==================== Menu Zone END ====================//
      };
    }

//========== Return of "Resources from Scratch VM" ==========//
    getDt_vm() {
      return vmDt;
    }
    getFPS_vm() {
      return vmFPS;
    }
//========== Frames Timer ==========//
    getFramesTimer() {
      return framesTimer;
    }
    resetFramesTimer() {
      framesTimer = 0;
    }
//========== Calculators ==========//
    setCalculatorStandard({ FPS }) {
      calculateFps = Math.max(0, cast.toNumber(FPS));
    }
    calcMultiplyValue({ DISTANCE }) {
      return calculateFps * cast.toNumber(DISTANCE);
    }
    getCalculatorStandard() {
      return calculateFps;
    }
//========== Filter ==========//
    setFilterPower({ POWER }) {
      filterPower = Math.min(Math.max(0, Math.floor(cast.toNumber(POWER))), 16);
    }
    getFilterPower() {
      return filterPower;
    }
//========== DT Limit ==========//
    setDtLimit({ LIMIT }) {
      dtLimit = Math.max(0, cast.toNumber(LIMIT));
    }
    changeDtLimit({ LIMIT }) {
      dtLimit = Math.max(0, dtLimit + cast.toNumber(LIMIT));
    }
    getDtLimit() {
      return dtLimit;
    }
//==================== Frames Utility ====================//
    waitTicks({ TICKS }, util) {
      if (util.getParam('ticks_timer') === null) {
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
      if (util.getParam('ticks_timer') === null) {
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
//========== Block Function/Return Sections END ==========//
  }
//==================== Extension Zone END ====================//

  Scratch.extensions.register(new ScratchDt());
})(Scratch);
//==================== Scratch Zone END ====================//
