(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjgsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDcuMzIyODEsMTgwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzk0LjEzMDk3LDEzMi41MDkyN2wtMzUuMjQ3NTIsLTAuMDQ5MjNjLTAuOTQyMDgsNDEuNDQ4ODkgLTIxLjE1OTAxLDk0LjU5NzU0IDcuNDYwMzgsOTQuMjEzMzljMTAuNTAwMTgsLTAuNDQ4MTggMTEuMDYzNDgsLTE2LjA2MTEgMTAuODI1NjgsLTI2LjMwNTE4bDE5LjIyODE0LDEzLjM2NjY3YzAsMTIuNDIwOTQgLTEwLjE0MTgxLDM0Ljg1MjU0IC0zNS4xMTE3NCwzNC4wMjAyYy0xNS4xNzQwMywtMC4xMjgwNSAtMjkuNDQ4NjIsLTExLjI0NDA4IC0yOS44MzI3OCwtMzAuMTk1NjJjMC41MTIyLC0yOC40OTEzMyA2LjMwODAyLC01Ni4zMDg4OSA3Ljk3MjY3LC04NS4zNzY0NWwtMjYuMDA4NDUsLTAuNTY0MjhjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNS40OTYxIC0zNC41MzIyMiwxMTYuMzI4NDNjLTcuNjgzMDYsLTAuMzIwMTIgLTE0Ljc4OTg4LC01LjgyNjMyIC0xNS41NTgxOSwtMTQuNzg5ODhjLTIuMTEyODQsLTE1LjgxNDI5IDMwLjY5MjYxLC0yNS4xNTk4MSAzMS44NDUwNiwtMTAyLjI0NjQ3Yy0zMS42OTI2MSwtMy41MjE0IC0zMS44MDU0NSwxNS42ODQwMyAtMzcuMTgzNTgsMjEuNzY2NDVsLTE0LjM4NjA2LC0xLjU4NDE1YzE4Ljc2NTU4LC00NC45NDMyNiA5LjQ1ODI5LC0zOS4xMTU4NCAxNTAuNzY1MTIsLTM4LjQzMTM1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcxOTQ5OTk5OTk5ODoxMTIuNjc3NDA1LS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  const deafultHsv = '{"h": 360, "s": 1, "v": 1}';
  const deafultRgb = '{"r": 255, "g": 0, "b": 0}';
  const deafultHex = '#ff0000';
  const deafultDecimal = '16711680';

  class ScratchColors {
    getInfo() {
      return {

        id: 'truefantomcolors',
        name: 'Colors',
        color1: '#ff4c4c',
        menuIconURI: icon,

        blocks: [
          {
           opcode: 'colorPicker',
                    text: '[OUTPUT] of [COLOR]',
                    disableMonitor: true,
                    arguments: {
                        OUTPUT: {
                            type: ArgumentType.STRING,
                            menu: "outputColorType"
                        },
                        COLOR: {
                            type: ArgumentType.COLOR
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'defaultBlack',
                    text: 'black',
                    disableMonitor: true,
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'defaultWhite',
                    text: 'white',
                    disableMonitor: true,
                    blockType: BlockType.REPORTER
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'RGB'
                },
                {
                    opcode: 'rgbToDecimal',
                    text: 'rgb [color] to decimal',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultRgb
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'rgbToHex',
                    text: 'rgb [color] to hex',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultRgb
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'rgbToHsv',
                    text: 'rgb [color] to hsv',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultRgb
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'Hex'
                },
                {
                    opcode: 'hexToDecimal',
                    text: 'hex [color] to decimal',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHex
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'hexToRgb',
                    text: 'hex [color] to rgb',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHex
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'hexToHsv',
                    text: 'hex [color] to hsv',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHex
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'Decimal'
                },
                {
                    opcode: 'decimalToHex',
                    text: 'decimal [color] to hex',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultDecimal
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'decimalToRgb',
                    text: 'decimal [color] to rgb',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultDecimal
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'decimalToHsv',
                    text: 'decimal [color] to hsv',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultDecimal
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    blockType: BlockType.LABEL,
                    text: 'HSV'
                },
                {
                    opcode: 'hsvToHex',
                    text: 'hsv [color] to hex',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHsv
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'hsvToRgb',
                    text: 'hsv [color] to rgb',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHsv
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'hsvToDecimal',
                    text: 'hsv [color] to decimal',
                    arguments: {
                        color: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultHsv
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                "---",
                {
                    blockType: BlockType.LABEL,
                    text: 'Other'
                },
                {
                    opcode: 'csbMaker',
                    text: 'color: [h] saturation: [s] brightness: [v] transparency: [a]',
                    arguments: {
                        h: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        s: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        v: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        a: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'hsvMaker',
                    text: 'h: [h] s: [s] v: [v] a: [a]',
                    arguments: {
                        h: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        s: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        v: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        a: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'rgbMaker',
                    text: 'r: [r] g: [g] b: [b] a: [a]',
                    arguments: {
                        r: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        g: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        b: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        a: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'mixColors',
                    text: 'mix [color1] [color2] by [percent]',
                    arguments: {
                        color1: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultRgb
                        },
                        color2: {
                            type: ArgumentType.STRING,
                            defaultValue: this.deafultRgb
                        },
                        percent: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50'
                        }
                    },
                    blockType: BlockType.REPORTER
                }
            ],
            menus: {
                outputColorType: {
                    items: [
                        { text: 'decimal', value: "decimal" },
                        { text: 'rgb', value: "rgb" },
                        { text: 'hsv', value: "hsv" },
                        { text: 'hex', value: "hex" }
                    ],
                    acceptReporters: true
                }
            }
        };
    }

    defaultBlack () {
        return JSON.stringify(Color.RGB_BLACK);
    }
    defaultWhite () {
        return JSON.stringify(Color.RGB_WHITE);
    }

    colorPicker (args) {
        const color = Cast.toNumber(args.COLOR);
        const argsColor = { color: color };
        switch (Cast.toString(args.OUTPUT).toLowerCase()) {
        case "rgb":
            return this.decimalToRgb(argsColor);
        case "hsv":
            return this.decimalToHsv(argsColor);
        case "hex":
            return this.decimalToHex(argsColor);
        default:
            return color;
        }
    }

    csbMaker (args) {
        const color = {
            h: args.h * 360 / 100,
            s: args.s / 100,
            v: args.v / 100
        };
        if (!isNaN(args.a)) color.a = args.a / 100;
        return JSON.stringify(color);
    }
    hsvMaker (args) {
        const color = {
            h: args.h,
            s: args.s,
            v: args.v
        };
        if (!isNaN(args.a)) color.a = args.a;
        return JSON.stringify(color);
    }
    rgbMaker (args) {
        const color = {
            r: args.r,
            g: args.g,
            b: args.b
        };
        if (!isNaN(args.a)) color.a = args.a;
        return JSON.stringify(color);
    }
    mixColors (args) {
        const color1 = this._validateColor(args.color1, 'rgbObj');
        const color2 = this._validateColor(args.color2, 'rgbObj');
        return JSON.stringify(Color.mixRgb(color1, color2, args.percent));
    }

    rgbToDecimal (args) {
        const color = validateJSON(args.color).object;
        return Color.rgbToDecimal(color);
    }
    rgbToHex (args) {
        const color = validateJSON(args.color).object;
        return Color.rgbToHex(color);
    }
    rgbToHsv (args) {
        const color = validateJSON(args.color).object;
        return JSON.stringify(Color.rgbToHsv(color));
    }
    hexToDecimal (args) {
        const color = args.color;
        return Color.hexToDecimal(color);
    }
    hexToRgb (args) {
        const color = Color.hexToRgb(args.color);
        return JSON.stringify(color);
    }
    hexToHsv (args) {
        const color = Color.hexToRgb(args.color);
        return JSON.stringify(Color.rgbToHsv(color));
    }
    decimalToHex (args) {
        const color = Number(args.color);
        return Color.decimalToHex(color);
    }
    decimalToRgb (args) {
        const color = Color.decimalToRgb(Number(args.color));
        return JSON.stringify(color);
    }
    decimalToHsv (args) {
        const color = Color.decimalToRgb(Number(args.color));
        return JSON.stringify(Color.rgbToHsv(color));
    }
    hsvToHex (args) {
        const color = Color.hsvToRgb(validateJSON(args.color).object);
        return Color.rgbToHex(color);
    }
    hsvToRgb (args) {
        const color = Color.hsvToRgb(validateJSON(args.color).object);
        return JSON.stringify(color);
    }
    hsvToDecimal (args) {
        const color = Color.hsvToRgb(validateJSON(args.color).object);
        return Color.rgbToDecimal(color);
    }
  }

  Scratch.extensions.register(new ScratchColors());
})(Scratch);
