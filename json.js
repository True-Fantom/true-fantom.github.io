(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOCwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM1Ljc3Nyw5Mi4yNTc0MWMtNDIuNzQ2NTUsMS4xNTE2NCAtNzAuOTYyNDEsMzEuMjAxMjMgLTgwLjAxMTU2LDYxLjU0MjM3Yy0xMS40MjI2NywzOC4yOTk0IDMuODU1MDcsODMuMzY1NzggNDAuNjE4MDIsMTAxLjUyOTIyYy0yMy40OTU4MSwtMTguMjIwODEgLTQxLjEzNTM1LC0xMTYuMjMzMjcgMjkuMzg3MzIsLTEyNy4yNDMyNmMzNy40OTAwNSwtNS44NTI5NCA2Ny4zMTE3NCw2Mi40NTczNyAyMy44ODE5NSw5NS40NjI3NGM3My42ODkxNiwtNi4xNzc0IDUzLjU4ODY0LC0xMzcuNDQ0NzUgLTEzLjg3NTcyLC0xMzEuMjkxMDd6TTI2MC43MjYyNywyMjkuNTExNTNjNTMuMTE3MTgsLTEzLjU0MjExIDUyLjgxNzMxLC04OS44NDM5NSAyMC40ODQ2NCwtMTI3LjUwNjcxYzg3Ljc2NzU5LDU1LjQxMzIgMzYuMTg5NDEsMTU0LjYwNTQ3IC0yNi4yNjIzNiwxNjQuOTE1N2MtNDAuNjQ3NDUsNi43MTA1MyAtNjYuNjgwODQsLTE5Ljk2MzQ3IC03MS4zMDgwNywtNjEuMDQ1ODZjLTMuMTcxNDEsLTI4LjE1NzA2IDUuMTUwNDcsLTY3LjEyNzUyIDQzLjczMjU5LC02OS4wOTUyOWMtMzguMTM0MDcsMjguMjM2NzQgLTE1Ljc2OTk1LDEwNy41NDA0OSAzMy4zNTMyLDkyLjczMjE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzIwNToxMTIuNjc3NDA1LS0+';
  const json = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOCwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM1Ljc3Nyw5Mi4yNTc0MWMtNDIuNzQ2NTUsMS4xNTE2NCAtNzAuOTYyNDEsMzEuMjAxMjMgLTgwLjAxMTU2LDYxLjU0MjM3Yy0xMS40MjI2NywzOC4yOTk0IDMuODU1MDcsODMuMzY1NzggNDAuNjE4MDIsMTAxLjUyOTIyYy0yMy40OTU4MSwtMTguMjIwODEgLTQxLjEzNTM1LC0xMTYuMjMzMjcgMjkuMzg3MzIsLTEyNy4yNDMyNmMzNy40OTAwNSwtNS44NTI5NCA2Ny4zMTE3NCw2Mi40NTczNyAyMy44ODE5NSw5NS40NjI3NGM3My42ODkxNiwtNi4xNzc0IDUzLjU4ODY0LC0xMzcuNDQ0NzUgLTEzLjg3NTcyLC0xMzEuMjkxMDd6TTI2MC43MjYyNywyMjkuNTExNTNjNTMuMTE3MTgsLTEzLjU0MjExIDUyLjgxNzMxLC04OS44NDM5NSAyMC40ODQ2NCwtMTI3LjUwNjcxYzg3Ljc2NzU5LDU1LjQxMzIgMzYuMTg5NDEsMTU0LjYwNTQ3IC0yNi4yNjIzNiwxNjQuOTE1N2MtNDAuNjQ3NDUsNi43MTA1MyAtNjYuNjgwODQsLTE5Ljk2MzQ3IC03MS4zMDgwNywtNjEuMDQ1ODZjLTMuMTcxNDEsLTI4LjE1NzA2IDUuMTUwNDcsLTY3LjEyNzUyIDQzLjczMjU5LC02OS4wOTUyOWMtMzguMTM0MDcsMjguMjM2NzQgLTE1Ljc2OTk1LDEwNy41NDA0OSAzMy4zNTMyLDkyLjczMjE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzIwNToxMTIuNjc3NDA1LS0+';

  const Scr = (A) => {
    return A === undefined || typeof A === 'object' ? '' : A;
  };
  const Bool = (A) => {
    return typeof A === 'string' && A.toLowerCase() === 'false' ? false : Boolean(A);
  };
  const Num = (A) => {
    return typeof A === 'string' && isNaN(Number(A)) ? 0 : Number(A);
  };
  const JsonData = (A) => {
    return JSON.parse(A, null);
  };
  const JsonStr = (A) => {
    return JSON.stringify(A, (key, value) => {return value === undefined ? '' : value}, 0);
  };
  const Arr = (A) => {
    return Array.isArray(A) ? A : Array.from({length: 1}, (v) => A);
  };
  const Obj = (A) => {
    return !Array.isArray(A) && typeof A === 'object' && A !== null && !(A instanceof RegExp) ? A : {};
  };
  const isRegExp = (A) => {
    return A instanceof RegExp;
  };
  const isArr = (A) => {
    return Array.isArray(A);
  };
  const isObj = (A) => {
    return !Array.isArray(A) && typeof A === 'object' && A !== null && !(A instanceof RegExp);
  };

  class Network {

    getInfo() {
      return {

        id: 'json',
        name: 'Json',

        color1: '#808080',
        color2: '#737373',
        color3: '#666666',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'is_json_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is json [JSON_STRING] ?',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'to_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[VALUE] to json',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          {
            opcode: 'from_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'json [JSON_STRING]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"apple"'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'get_json_item_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] item by [IMAGE] path [PATH] of [IMAGE] [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruit",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          {
            opcode: 'set_json_item_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'set item by [IMAGE] path [PATH] of [IMAGE] [JSON_STRING] to json [VALUE]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["vegetables"]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["potato","tomato"]'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          {
            opcode: 'delete_json_item_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete item by json path [PATH] of json [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruit",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'length_of_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'length of json [JSON_STRING]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          {
            opcode: 'json_contains_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'json [JSON_STRING] contains item by json path [PATH] ?',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruit",2]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":["apple","banana"]}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'is_object_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] object [JSON_STRING] ?',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":2}'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'is_array_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] array [JSON_STRING] ?',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          '---',
          {
            opcode: 'json_split_by_split_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] values of [IMAGE] [JSON_STRING] split by [SPLIT1]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]'
              },
              SPLIT1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          },
          {
            opcode: 'json_split_by_splits_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] values and keys of [IMAGE] [JSON_STRING] split by [SPLIT1] and [SPLIT2]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]'
              },
              SPLIT1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              },
              SPLIT2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ':'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: json
              }
            }
          }
        ],

        menus: {
          value_type_menu: { 
            acceptReporters: true,
            items: [
              {
                text: '(1) string',
                value: '1'
              },
              {
                text: '(2) number',
                value: '2'
              },
              {
                text: '(3) boolean',
                value: '3'
              },
              {
                text: '(4) null',
                value: '4'
              }
            ]
          }
        }
      }
    }

    is_json_block({JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        return true;
      } catch(err) {return false}
    }
    to_json_block({VALUE}) {
      try {
        return JsonStr(VALUE);
      } catch(err) {return ''}
    }
    from_json_block({JSON_STRING}) {
      try {
        return Scr(JsonData(JSON_STRING));
      } catch(err) {return ''}
    }
    is_array_block({JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        return isArr(JSON_STRING);
      } catch(err) {return false}
    }
    is_object_block({JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        return isObj(JSON_STRING);
      } catch(err) {return false}
    }
    length_of_json_block({JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        return isArr(JSON_STRING) ? JSON_STRING.length : isObj(JSON_STRING) ? Object.keys(JSON_STRING).length : 1;
      } catch(err) {return 0}
    }
    json_split_by_splits_block({JSON_STRING, SPLIT1, SPLIT2}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        if (!isArr(JSON_STRING) && !isObj(JSON_STRING)) {JSON_STRING = Arr(JSON_STRING)}
        let str = '';
        for (let [k,v] of Object.entries(JSON_STRING)) {
          str += typeof v === 'object' ? `${k}${SPLIT2}${JsonStr(v)}${SPLIT1}` : `${k}${SPLIT2}${v}${SPLIT1}`
        }
        return str;
      } catch(err) {return ''}
    }
    json_split_by_split_block({JSON_STRING, SPLIT1}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        if (!isArr(JSON_STRING) && !isObj(JSON_STRING)) {JSON_STRING = Arr(JSON_STRING)}
        let str = '';
        for (let [k,v] of Object.entries(JSON_STRING)) {
          str += typeof v === 'object' ? `${JsonStr(v)}${SPLIT1}` : `${v}${SPLIT1}`
        }
        return str;
      } catch(err) {return ''}
    }
    get_json_item_block({PATH, JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        PATH = Arr(JsonData(PATH));
        PATH.forEach(prop => JSON_STRING = isArr(JSON_STRING) ? JSON_STRING[prop - 1] : JSON_STRING[prop]);
        return JsonStr(JSON_STRING);
      } catch(err) {return ''}
    }
    set_json_item_block({PATH, JSON_STRING, VALUE}) {
      try {
        return '';
      } catch(err) {return ''}
    }
    delete_json_item_block({PATH, JSON_STRING}) {
      try {
        return '';
      } catch(err) {return ''}
    }
    json_contains_block({PATH, JSON_STRING}) {
      try {
        JSON_STRING = JsonData(JSON_STRING);
        PATH = Arr(JsonData(PATH));
        PATH.forEach(prop => JSON_STRING = isArr(JSON_STRING) ? JSON_STRING[prop - 1] : JSON_STRING[prop]);
        return JSON_STRING !== undefined;
      } catch(err) {return false}
    }
  }

  Scratch.extensions.register(new Network());
})(Scratch);
