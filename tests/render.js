(Scratch => {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Render extension must be run unsandboxed");
  }

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjk3LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOTgsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzk5NjZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0MC4wMDc4LDI2NS44MzMzM2MtMTMuODc3NjksLTQ0LjkyMjA0IC00MC44OTk1OCwtNzIuMjI0ODUgLTg1Ljg0MTE0LC04NS44MjU1M2M0NC44MTI4LC0xMy42ODY1MSA3Mi4wODgyOSwtNDEuMDQ3ODUgODUuODQxMTQsLTg1Ljg0MTE0YzEzLjU4NTA3LDQ0LjQ4ODk3IDQwLjc2NjkzLDcxLjYwMDYxIDg1LjgyNTUzLDg1Ljg0MTE0Yy00NS4wNDI5OSwxMy42MDA2OCAtNzIuMTA3OCw0MC41OTkxNyAtODUuODI1NTMsODUuODI1NTN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcwMjU6MTEyLjY3NzQwNS0tPg==';

  let toCorrectThing = null;
  let active = false;
  let flipY = false;
  const vm = Scratch.vm;
  const renderer = vm.renderer;
  const _drawThese = renderer._drawThese;
  const gl = renderer._gl;
  const canvas = renderer.canvas;
  let width = 0;
  let height = 0;
  let scratchUnitWidth = 480;
  let scratchUnitHeight = 360;

  renderer._drawThese = function (drawables, drawMode, projection, opts) {
    active = true;
    [scratchUnitWidth, scratchUnitHeight] = renderer.getNativeSize();
    _drawThese.call(this, drawables, drawMode, projection, opts);
    gl.disable(gl.SCISSOR_TEST);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    active = false;
  };

  const bfb = gl.bindFramebuffer;
  gl.bindFramebuffer = function (target, framebuffer) {
    if (target == gl.FRAMEBUFFER) {
      if (framebuffer == null) {
        toCorrectThing = true;
        flipY = false;
        width = canvas.width;
        height = canvas.height;
      } else if (renderer._penSkinId) {
        const fbInfo = renderer._allSkins[renderer._penSkinId]._framebuffer;
        if (framebuffer == fbInfo.framebuffer) {
          toCorrectThing = true;
          flipY = true;
          width = fbInfo.width;
          height = fbInfo.height;
        } else {
          toCorrectThing = false;
        }
      } else {
        toCorrectThing = false;
      }
    }
    bfb.call(this, target, framebuffer);
  };

  // Getting Drawable
  const dr = renderer.createDrawable('background');
  const DrawableProto = renderer._allDrawables[dr].__proto__;
  renderer.destroyDrawable(dr, 'background');

  // Modifying and expanding Drawable
  const gu = DrawableProto.getUniforms;
  DrawableProto.getUniforms = function () {
    if (active && toCorrectThing) {
      if (this.clipbox) {
        gl.enable(gl.SCISSOR_TEST);
        let x = (this.clipbox.x / scratchUnitWidth + 0.5) * width;
        let y = (this.clipbox.y / scratchUnitHeight + 0.5) * height;
        let w = (this.clipbox.w / scratchUnitWidth) * width;
        let h = (this.clipbox.h / scratchUnitHeight) * height;
        if (flipY) {
          y = (-(this.clipbox.y + this.clipbox.h) / scratchUnitHeight + 0.5) * height;
        }
        gl.scissor(x, y, w, h);
      } else {
        gl.disable(gl.SCISSOR_TEST);
      }
      if (this.additiveBlend) {
        gl.blendFunc(gl.ONE, gl.ONE);
      } else {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      }
    }
    return gu.call(this);
  };
  DrawableProto.updateClipBox = function (clipbox) {
    this.clipbox = clipbox;
  };
  DrawableProto.updateAdditiveBlend = function (enabled) {
    this.additiveBlend = enabled;
  };

  // Expanding renderer
  renderer.updateDrawableClipBox = function (drawableID, clipbox) {
    const drawable = this._allDrawables[drawableID];
    if (!drawable) return;
    drawable.updateClipBox(clipbox);
  };
  renderer.updateDrawableAdditiveBlend = function (drawableID, enabled) {
    const drawable = this._allDrawables[drawableID];
    if (!drawable) return;
    drawable.updateAdditiveBlend(enabled);
  };

  // Reset on stop & clones inherit effects
  const regTargetStuff = function (args) {
    if (args.editingTarget) {
      vm.removeListener('targetsUpdate', regTargetStuff);
      const proto = vm.runtime.targets[0].__proto__;
      const osa = proto.onStopAll;
      proto.onStopAll = function () {
        this.renderer.updateDrawableClipBox.call(renderer, this.drawableID, null);
        this.renderer.updateDrawableAdditiveBlend.call(renderer, this.drawableID, false);
        osa.call(this);
      };
      const mc = proto.makeClone;
      proto.makeClone = function () {
        const newTarget = mc.call(this);
        if (this.clipbox) {
          newTarget.clipbox = Object.assign({}, this.clipbox);
          newTarget.additiveBlend = this.additiveBlend;
          renderer.updateDrawableClipBox.call(renderer, newTarget.drawableID, this.clipbox);
          renderer.updateDrawableAdditiveBlend.call(renderer, newTarget.drawableID, this.additiveBlend);
        }
        return newTarget;
      };
    }
  };
  vm.on('targetsUpdate', regTargetStuff);

  class Render {

    getInfo() {
      return {

        id: 'xeltallivrender',
        name: 'Render',

        color1: '#9966FF',
        color2: '#855CD6',
        color3: '#774DCB',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'setClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set clipping box x1:[X1] y1:[Y1] x2:[X2] y2:[Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'clearClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear clipping box',
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'getClipbox',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clipping box [PROP]',
            arguments: {
              PROP: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'min x',
                menu: 'props'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          '---',
          {
            opcode: 'setAdditiveBlend',
            blockType: Scratch.BlockType.COMMAND,
            text: 'turn additive blending [STATE]',
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'on',
                menu: 'states'
              }
            },
            filter: [Scratch.TargetType.SPRITE]
          },
          {
            opcode: 'getAdditiveBlend',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is additive blending on?',
            filter: [Scratch.TargetType.SPRITE]
          }
        ],

        menus: {
          states: {
            acceptReporters: true,
            items: ['on', 'off']
          },
          props: {
            acceptReporters: true,
            items: ['min x', 'min y', 'max x', 'max y', 'width', 'height']
          }
        }
      }
    }

    setClipbox ({X1, Y1, X2, Y2}, {target}) {
      if (target.isStage) return;
      const newClipbox = {
        x: Math.min(X1, X2),
        y: Math.min(Y1, Y2),
        w: Math.max(X1, X2) - Math.min(X1, X2),
        h: Math.max(Y1, Y2) - Math.min(Y1, Y2)
      };
      target.clipbox = newClipbox;
      renderer.updateDrawableClipBox.call(renderer, target.drawableID, newClipbox);
      if (target.visible) {
        renderer.dirty = true;
        target.emitVisualChange();
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }
    clearClipbox (args, {target}) {
      if (target.isStage) return;
      target.clipbox = null;
      renderer.updateDrawableClipBox.call(renderer, target.drawableID, null);
      if (target.visible) {
        renderer.dirty = true;
        target.emitVisualChange();
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }
    setAdditiveBlend ({STATE}, {target}) {
      let newValue = null;
      if (STATE === 'on') newValue = true;
      if (STATE === 'off') newValue = false;
      if (newValue === null) return;

      if (target.isStage) return;
      target.additiveBlend = newValue;
      renderer.updateDrawableAdditiveBlend.call(renderer, target.drawableID, newValue);
      if (target.visible) {
        renderer.dirty = true;
        target.emitVisualChange();
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }
    getClipbox ({PROP}, {target}) {
      const clipbox = target.clipbox;
      if (!clipbox) return '';
      switch (PROP) {
        case 'min x': return clipbox.x;
        case 'min y': return clipbox.y;
        case 'max x': return clipbox.x + clipbox.w;
        case 'max y': return clipbox.y + clipbox.h;
        case 'width': return clipbox.w;
        case 'height': return clipbox.h;
        default: return '';
      }
    }
    getAdditiveBlend (args, {target}) {
      return target.additiveBlend ?? false;
    }
  }

  Scratch.extensions.register(new Render());
})(Scratch);
