(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOCwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM1Ljc3Nyw5Mi4yNTc0MWMtNDIuNzQ2NTUsMS4xNTE2NCAtNzAuOTYyNDEsMzEuMjAxMjMgLTgwLjAxMTU2LDYxLjU0MjM3Yy0xMS40MjI2NywzOC4yOTk0IDMuODU1MDcsODMuMzY1NzggNDAuNjE4MDIsMTAxLjUyOTIyYy0yMy40OTU4MSwtMTguMjIwODEgLTQxLjEzNTM1LC0xMTYuMjMzMjcgMjkuMzg3MzIsLTEyNy4yNDMyNmMzNy40OTAwNSwtNS44NTI5NCA2Ny4zMTE3NCw2Mi40NTczNyAyMy44ODE5NSw5NS40NjI3NGM3My42ODkxNiwtNi4xNzc0IDUzLjU4ODY0LC0xMzcuNDQ0NzUgLTEzLjg3NTcyLC0xMzEuMjkxMDd6TTI2MC43MjYyNywyMjkuNTExNTNjNTMuMTE3MTgsLTEzLjU0MjExIDUyLjgxNzMxLC04OS44NDM5NSAyMC40ODQ2NCwtMTI3LjUwNjcxYzg3Ljc2NzU5LDU1LjQxMzIgMzYuMTg5NDEsMTU0LjYwNTQ3IC0yNi4yNjIzNiwxNjQuOTE1N2MtNDAuNjQ3NDUsNi43MTA1MyAtNjYuNjgwODQsLTE5Ljk2MzQ3IC03MS4zMDgwNywtNjEuMDQ1ODZjLTMuMTcxNDEsLTI4LjE1NzA2IDUuMTUwNDcsLTY3LjEyNzUyIDQzLjczMjU5LC02OS4wOTUyOWMtMzguMTM0MDcsMjguMjM2NzQgLTE1Ljc2OTk1LDEwNy41NDA0OSAzMy4zNTMyLDkyLjczMjE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzIwNToxMTIuNjc3NDA1LS0+';
  const json = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  const toScratchData = val => {
    return val === undefined || typeof val === 'object' ? '' : val;
  };
  const toJsonData = val => {
    return JSON.parse(val, null);
  };
  const toJsonString = val => {
    return JSON.stringify(val, (key, value) => {return value === undefined ? '' : value}, 0);
  };
  const toArray = val => {
    return Array.isArray(val) ? val : [val];
  };
  const toObject = val => {
    return !Array.isArray(val) && typeof val === 'object' && val !== null && !(val instanceof RegExp) ? val : {'1':val};
  };
  const isRegExp = val => {
    return val instanceof RegExp;
  };
  const isArray = val => {
    return Array.isArray(val);
  };
  const isObject = val => {
    return !Array.isArray(val) && typeof val === 'object' && val !== null && !(val instanceof RegExp);
  };

  const toScratchIndex = (INDEX, DATA) => {
    if (isArray(DATA) && typeof INDEX === 'number') {
      return INDEX - 1;
    }
    if (isObject(DATA) && typeof INDEX === 'string') {
      return INDEX;
    }
    throw new TypeError('index is incorrect');
  };

  class ScratchJson {

    getInfo() {
      return {

        id: 'truefantomjson',
        name: 'Json',

        color1: '#808080',
        color2: '#737373',
        color3: '#666666',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'is_json_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] [JSON_STRING] ?',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
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
            text: '[VALUE] to [IMAGE]',
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
            text: '[JSON_STRING] of [IMAGE]',
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
            opcode: 'json_components_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[COMPONENTS] of [IMAGE] [JSON_STRING]',
            arguments: {
              COMPONENTS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'components_menu'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":2,"vegetables":2}'
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
            text: '[IMAGE] item by [IMAGE] path [JSON_PATH] of [IMAGE] [JSON_STRING]',
            arguments: {
              JSON_PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruits",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
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
            text: '[IMAGE] set item by [IMAGE] path [JSON_PATH] of [IMAGE] [JSON_STRING] to [IMAGE] [JSON_VALUE]',
            arguments: {
              JSON_PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruits",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
              },
              JSON_VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"mango"'
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
            text: '[IMAGE] delete item by [IMAGE] path [JSON_PATH] of [IMAGE] [JSON_STRING]',
            arguments: {
              JSON_PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruits",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
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
            text: 'length of [IMAGE] [JSON_STRING]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
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
            text: '[IMAGE] [JSON_STRING] contains item by [IMAGE] path [JSON_PATH] ?',
            arguments: {
              JSON_PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["fruits",1]'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":["apple","banana"]}'
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
                defaultValue: '{"fruits":2}'
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
            text: 'values of [IMAGE] [JSON_STRING] split by [SPLIT1]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":2,"vegetables":2}'
              },
              SPLIT1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
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
            text: 'values and keys of [IMAGE] [JSON_STRING] split by [SPLIT1] and [SPLIT2]',
            arguments: {
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruits":2,"vegetables":2}'
              },
              SPLIT1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
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
          components_menu: {
            acceptReporters: true,
            items: ['values', 'keys', 'pairs (array)', 'pairs (object)']
          }
        }
      }
    }

    is_json_block({JSON_STRING}) {
      try {
        const data = toJsonData(String(JSON_STRING));
        return true;
      } catch(err) {return false}
    }
    to_json_block({VALUE}) {
      try {
        return toJsonString(VALUE);
      } catch(err) {return ''}
    }
    from_json_block({JSON_STRING}) {
      try {
        return toScratchData(toJsonData(String(JSON_STRING)));
      } catch(err) {return ''}
    }
    is_array_block({JSON_STRING}) {
      try {
        const data = toJsonData(String(JSON_STRING));
        return isArray(data);
      } catch(err) {return false}
    }
    is_object_block({JSON_STRING}) {
      try {
        const data = toJsonData(String(JSON_STRING));
        return isObject(data);
      } catch(err) {return false}
    }
    length_of_json_block({JSON_STRING}) {
      try {
        const data = toJsonData(String(JSON_STRING));
        return isArray(data) ? data.length : isObject(data) ? Object.keys(data).length : 1;
      } catch(err) {return 0}
    }
    json_split_by_splits_block({JSON_STRING, SPLIT1, SPLIT2}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let split1 = String(SPLIT1);
        let split2 = String(SPLIT2);
        if (!isArray(data) && !isObject(data)) {data = toArray(data)}
        let str = '';
        for (let [k,v] of Object.entries(data)) {
          str += typeof v === 'object' ? `${k}${split2}${toJsonString(v)}${split1}` : `${k}${split2}${v}${split1}`
        }
        return str.substring(0, str.length - SPLIT1.length);
      } catch(err) {return ''}
    }
    json_split_by_split_block({JSON_STRING, SPLIT1}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let split1 = String(SPLIT1);
        if (!isArray(data) && !isObject(data)) {data = toArray(data)}
        let str = '';
        for (let [k,v] of Object.entries(data)) {
          str += typeof v === 'object' ? `${toJsonString(v)}${split1}` : `${v}${split1}`
        }
        return str.substring(0, str.length - SPLIT1.length);
      } catch(err) {return ''}
    }
    get_json_item_block({JSON_PATH, JSON_STRING}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let currentProp = data;
        let path = toArray(toJsonData(String(JSON_PATH)));
        path.forEach((prop, index) => {
          currentProp = currentProp[toScratchIndex(prop, currentProp)];
        });
        return toJsonString(currentProp);
      } catch(err) {return ''}
    }
    set_json_item_block({JSON_PATH, JSON_STRING, JSON_VALUE}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let currentProp = data;
        let value = toJsonData(String(JSON_VALUE));
        let path = toArray(toJsonData(String(JSON_PATH)));
        path.forEach((prop, index) => {
          try {
            if (index === path.length - 1) {currentProp[toScratchIndex(prop, currentProp)] = value}
            else {currentProp = currentProp[toScratchIndex(prop, currentProp)]}
          } catch(err) {return toJsonString(data)}
        });
        return toJsonString(data);
      } catch(err) {return ''}
    }
    delete_json_item_block({JSON_PATH, JSON_STRING}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let currentProp = data;
        let path = toArray(toJsonData(String(JSON_PATH)));
        path.forEach((prop, index) => {
          try {
            if (index === path.length - 1) {delete currentProp[toScratchIndex(prop, currentProp)]}
            else {currentProp = currentProp[toScratchIndex(prop, currentProp)]}
          } catch(err) {return toJsonString(data)}
        });
        return toJsonString(data);
      } catch(err) {return ''}
    }
    json_contains_block({JSON_PATH, JSON_STRING}) {
      try {
        let data = toJsonData(String(JSON_STRING));
        let currentProp = data;
        let path = toArray(toJsonData(String(JSON_PATH)));
        path.forEach((prop, index) => {
          currentProp = currentProp[toScratchIndex(prop, currentProp)];
        });
        return currentProp !== undefined;
      } catch(err) {return false}
    }
    json_components_block({COMPONENTS, JSON_STRING}) {
      try {
        const data = toJsonData(String(JSON_STRING));
        if (isArray(data) || isObject(data)) {
          const components = String(COMPONENTS).toLowerCase();
          switch (components) {
            case 'values': return toJsonString(Object.values(data));
            case 'keys': return toJsonString(Object.keys(data));
            case 'pairs (array)': return toJsonString(Object.entries(data));
            case 'pairs (object)': default: return toJsonString(Object.assign({}, data));
          }
        }
        return '';
      } catch(err) {return ''}
    }
  }

  Scratch.extensions.register(new ScratchJson());
})(Scratch);
