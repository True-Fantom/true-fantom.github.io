(function (Scratch) {
    'use strict';
    let args = ["", "", "",""];
    class RegularExpression {
        getInfo() {
            return {
                color1: '#0081d3',
                color2: '#0067a9',
                color3: '#0067a9',
                id: 'RegularExpression',
                name: '正则表达式',
                blocks: [
                    {
                        opcode: 'set',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '设置处理文本 a: [one] b: [two] c: [three]',
                        arguments: {
                            one: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            two: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            three: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'matchText',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '在 a 中匹配 b',
                        arguments: {
                            flags: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'flags'
                            }
                        }
                    },
                    {
                        opcode: 'searchText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '在 a 中搜索 b',
                    },
                    {
                        opcode: 'replaceText',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '把 a 中的 b 替换为 c',
                    }, '---',
                    {
                        opcode: 'matchTextWithPattern',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '匹配 [text] 中的 [pattern] - [flags]',
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            pattern: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            flags: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'flags'
                            }
                        }
                    },
                    {
                        opcode: 'searchTextWithPattern',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '查找 [text] 中的 [pattern]',
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            pattern: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'replaceTextWithPattern',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '替换 [text] 中的 [pattern] 为 [replacement]',
                        arguments: {
                            text: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            pattern: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            replacement: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    }, '---',
                    {
                        opcode: 'constant',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[constant]',
                        arguments: {
                            constant: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'constant'
                            }
                        }
                    }, '---',
                    {
                        opcode: 'text',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'a',
                    },
                    {
                        opcode: 'pattern',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'b',
                    },
                    {
                        opcode: 'attach',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'c',
                    }
                ],
                menus: {
                    flags: {
                        acceptReporters: false,
                        items: [
                            {
                                text: '全局（g）',
                                value: 'g'
                            },
                            {
                                text: '忽略大小写（i）',
                                value: 'i'
                            }
                        ]
                    },
                    constant: {
                        acceptReporters: true,
                        items: [
                            {
                                text: '英文',
                                value: '[a-zA-Z]'
                            },
                            {
                                text: '英文大写',
                                value: '[A-Z]'
                            },
                            {
                                text: '英文小写',
                                value: '[a-z]'
                            },
                            {
                                text: '数字',
                                value: '[0-9]'
                            },
                            {
                                text: '数字整数',
                                value: '^-?[1-9]\\d*$'
                            },
                            {
                                text: '正整数',
                                value: '^[1-9]\\d*$'
                            },
                            {
                                text: '负整数',
                                value: '^-[1-9]\\d*$'
                            },
                            {
                                text: '非负整数',
                                value: '^[1-9]\\d*|0$'
                            },
                            {
                                text: '非正整数',
                                value: '^-[1-9]\\d*|0$'
                            },
                            {
                                text: '中文字符',
                                value: '[\u4e00-\u9fa5]'
                            },
                            {
                                text: '343535345',
                                value: '[^\\x00-\\xff]'
                            }
                        ]
                    }
                }
            };
        }
        set({ one, two, three }) {
            args[1] = one;
            args[2] = two;
            args[3] = three;
        }
        matchText({ flags }) {
            const regex = new RegExp(args[2], flags);
            return regex.test(args[1]);
        }
        searchText() {
            return args[1].toString().search(args[2].toString());
        }
        replaceText() {
            return args[1].toString().replace(args[2].toString(), args[3].toString());
        }

        matchTextWithPattern({ text, pattern, flags }) {
            const regex = new RegExp(pattern, flags);
            return regex.test(text);
        }
        searchTextWithPattern({ text, pattern }) {
            return text.toString().search(pattern.toString());
        }
        replaceTextWithPattern({ text, pattern, replacement }) {
            return text.toString().replace(pattern.toString(), replacement.toString());
        }

        constant({ constant }) {
            return constant;
        }

        text() {
            return args[1];
        }
        pattern() {
            return args[2];
        }
        attach() {
            return args[3];
        }
    }
    Scratch.extensions.register(new RegularExpression());
})(Scratch);
