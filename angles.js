(Scratch => {
  'use strict';

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDcuMzIyODEsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzk0LjEzMDk3LDEzMi41MDkyN2wtMzUuMjQ3NTIsLTAuMDQ5MjNjLTAuOTQyMDgsNDEuNDQ4ODkgLTIxLjE1OTAxLDk0LjU5NzU0IDcuNDYwMzgsOTQuMjEzMzljMTAuNTAwMTgsLTAuNDQ4MTggMTEuMDYzNDgsLTE2LjA2MTEgMTAuODI1NjgsLTI2LjMwNTE4bDE5LjIyODE0LDEzLjM2NjY3YzAsMTIuNDIwOTQgLTEwLjE0MTgxLDM0Ljg1MjU0IC0zNS4xMTE3NCwzNC4wMjAyYy0xNS4xNzQwMywtMC4xMjgwNSAtMjkuNDQ4NjIsLTExLjI0NDA4IC0yOS44MzI3OCwtMzAuMTk1NjJjMC41MTIyLC0yOC40OTEzMyA2LjMwODAyLC01Ni4zMDg4OSA3Ljk3MjY3LC04NS4zNzY0NWwtMjYuMDA4NDUsLTAuNTY0MjhjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNS40OTYxIC0zNC41MzIyMiwxMTYuMzI4NDNjLTcuNjgzMDYsLTAuMzIwMTIgLTE0Ljc4OTg4LC01LjgyNjMyIC0xNS41NTgxOSwtMTQuNzg5ODhjLTIuMTEyODQsLTE1LjgxNDI5IDMwLjY5MjYxLC0yNS4xNTk4MSAzMS44NDUwNiwtMTAyLjI0NjQ3Yy0zMS42OTI2MSwtMy41MjE0IC0zMS44MDU0NSwxNS42ODQwMyAtMzcuMTgzNTgsMjEuNzY2NDVsLTE0LjM4NjA2LC0xLjU4NDE1YzE4Ljc2NTU4LC00NC45NDMyNiA5LjQ1ODI5LC0zOS4xMTU4NCAxNTAuNzY1MTIsLTM4LjQzMTM1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxOTQ5OTk5OTk5ODoxMTIuNjc3NDA1LS0+';

  const cast = Scratch.Cast;

  const toAngle = val => {
    const angle = cast.toNumber(val);
    if (Math.abs(angle) > 180) {
      const normalized_angle = angle % 360;
      if (normalized_angle > 180) {
        return normalized_angle - 360;
      } 
      if (normalized_angle < -180) {
        return normalized_angle + 360;
      }
      return normalized_angle;
    }
    if (angle === -180) {
      return 180;
    }
    return angle;
  };
  
  class ScratchAngles {
    getInfo() {
      return {

        id: 'truefantomangles',
        name: 'Angles',
        color1: '#4c97ff',
        menuIconURI: menuIconURI,

        blocks: [
          {
            opcode: 'a_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              }
            }
          },
          '---',
          {
            opcode: 'ax_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [A] to [B] steps x',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'ay_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle [A] to [B] steps y',
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          '---',
          {
            opcode: 'angle_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'angle of x: [A] y: [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'steps_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'steps of x: [A] y: [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
        ]
      }
    }

    a_block({A}) {
      return toAngle(cast.toNumber(A));
    }
    ax_block({A, B}) {
      const alpha = cast.toNumber(A);
      const x = Math.round(Math.sin((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const y = Math.round(Math.cos((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const sum = Math.abs(x) + Math.abs(y);
      return cast.toNumber((x / sum) * cast.toNumber(B));
    }
    ay_block({A, B}) {
      const alpha = cast.toNumber(A);
      const x = Math.round(Math.sin((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const y = Math.round(Math.cos((Math.PI * alpha) / 180) * 1e10) / 1e10;
      const sum = Math.abs(x) + Math.abs(y);
      return cast.toNumber((y / sum) * cast.toNumber(B));
    }
    angle_block({A, B}) {
      return (Math.atan2(cast.toNumber(A), cast.toNumber(B)) * 180) / Math.PI;
    }
    steps_block({A, B}) {
      return Math.abs(cast.toNumber(A)) + Math.abs(cast.toNumber(B));
    }
  }

  Scratch.extensions.register(new ScratchAngles());
})(Scratch);
