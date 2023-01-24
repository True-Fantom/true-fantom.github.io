(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyOCwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM1Ljc3Nyw5Mi4yNTc0MWMtNDIuNzQ2NTUsMS4xNTE2NCAtNzAuOTYyNDEsMzEuMjAxMjMgLTgwLjAxMTU2LDYxLjU0MjM3Yy0xMS40MjI2NywzOC4yOTk0IDMuODU1MDcsODMuMzY1NzggNDAuNjE4MDIsMTAxLjUyOTIyYy0yMy40OTU4MSwtMTguMjIwODEgLTQxLjEzNTM1LC0xMTYuMjMzMjcgMjkuMzg3MzIsLTEyNy4yNDMyNmMzNy40OTAwNSwtNS44NTI5NCA2Ny4zMTE3NCw2Mi40NTczNyAyMy44ODE5NSw5NS40NjI3NGM3My42ODkxNiwtNi4xNzc0IDUzLjU4ODY0LC0xMzcuNDQ0NzUgLTEzLjg3NTcyLC0xMzEuMjkxMDd6TTI2MC43MjYyNywyMjkuNTExNTNjNTMuMTE3MTgsLTEzLjU0MjExIDUyLjgxNzMxLC04OS44NDM5NSAyMC40ODQ2NCwtMTI3LjUwNjcxYzg3Ljc2NzU5LDU1LjQxMzIgMzYuMTg5NDEsMTU0LjYwNTQ3IC0yNi4yNjIzNiwxNjQuOTE1N2MtNDAuNjQ3NDUsNi43MTA1MyAtNjYuNjgwODQsLTE5Ljk2MzQ3IC03MS4zMDgwNywtNjEuMDQ1ODZjLTMuMTcxNDEsLTI4LjE1NzA2IDUuMTUwNDcsLTY3LjEyNzUyIDQzLjczMjU5LC02OS4wOTUyOWMtMzguMTM0MDcsMjguMjM2NzQgLTE1Ljc2OTk1LDEwNy41NDA0OSAzMy4zNTMyLDkyLjczMjE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzIwNToxMTIuNjc3NDA1LS0+';

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
                defaultValue: '{"apples":1}'
              }
            }
          },
          '---',
          {
            opcode: 'get_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [PATH] split by [SPLIT] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":{"apples":1,"bananas":1}}'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
              }
            }
          },
          {
            opcode: 'set_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'set [PATH] split by [SPLIT] to [VALUE_TYPE] [VALUE] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit":{"apples":1,"bananas":1}}'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1'
              },
              VALUE_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'value_type'
              }
            }
          },
          {
            opcode: 'contains_json_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[JSON_STRING] contains [PATH] split by [SPLIT] ?',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"apples":1}'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
              }
            }
          }
        ],

        menus: {
          value_type: { 
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
              },
              {
                text: '(5) nothing',
                value: '5'
              }
            ]
          }
        }
      }
    }

    is_json_block({JSON_STRING}) {
      try {
        var json = JSON.parse(String(JSON_STRING));
        return true;
      } catch(err) {return false}
    }
    get_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') {path.splice(0, 1)}
        if (path[path.length - 1] === '') {path.splice(-1, 1)}
        var json = JSON.parse(String(JSON_STRING));
        path.forEach(prop => json = json[prop]);
        if (typeof json === 'object') {return JSON.stringify(json)}
        else if (json === undefined) {return ''}
        else {return json}
      } catch(err) {return ''}
    }
    set_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') {path.splice(0, 1)}
        if (path[path.length - 1] === '') {path.splice(-1, 1)}
        var json = JSON.parse(String(JSON_STRING));
        path.forEach(prop => json = json[prop]);
        if (typeof json === 'object') {return JSON.stringify(json)}
        else if (json === undefined) {return ''}
        else {return json}
      } catch(err) {return ''}
    }
    contains_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') {path.splice(0, 1)}
        if (path[path.length - 1] === '') {path.splice(-1, 1)}
        var json = JSON.parse(String(JSON_STRING));
        path.forEach(prop => json = json[prop]);
        if (typeof json === 'object') {return JSON.stringify(json)}
        else if (json === undefined) {return ''}
        else {return json}
      } catch(err) {return ''}
    }
  }

  Scratch.extensions.register(new Network());
})(Scratch);
