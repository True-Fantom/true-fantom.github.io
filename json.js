(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMjI1LjM1NDgsMjI1LjM1NDgiIGhlaWdodD0iMjI1LjM1NDgiIHdpZHRoPSIyMjUuMzU0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc0LC02Ny4zMjI2KSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzE0NjYwMCIgZD0iTTEyNy4zMjI3NSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6Ij48L3BhdGg+PGcgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTI2MS4zNjIzNSwxNDYuNjIzNTlsLTUuMTUwOTcsNS4yNzQ2MmwtMTMuMTg1NTEsLTEyLjIzOTg5bDE5LjIzNjg5LC0xOS40OTU4OWMxMC41OTE0NywtMTAuNTkxNDcgMjcuNzU4NCwtMTAuNTkxNDcgMzguMzQxMTIsMGwxMi43ODAzOCwxMi43ODAzOGMxMC41OTE0NywxMC41ODI3MSAxMC41OTE0NywyNy43NDk2NSAwLDM4LjM0MTEybC0zOC4zNDExMiwzOC4zNDExMmMtMTAuNTkxNDcsMTAuNTg2OTUgLTI3Ljc0OTY1LDEwLjU4Njk1IC0zOC4zNDExMiwwbC0xMi43ODAzNywtMTIuNzgwMzdsLTEyLjY3Mzc4LC0xMy4yMjYxMmwxMi4yNjMwNCwtMTIuNDMzbDI1Ljk3MTQ5LDI1LjY1OTEyYzMuNTIxNzQsMy41MjE3NCA5LjI1ODY0LDMuNTIxNzQgMTIuNzgwMzgsMGwzOC4zNDExMiwtMzguMzQxMTJjMy41MzA0OSwtMy41MzA0OSAzLjUzMDQ5LC05LjI1ODY0IDAsLTEyLjc4MDM4bC0xMi43ODAzNywtMTIuNzgwMzdjLTMuNTIxNzQsLTMuNTIxNzMgLTkuMjQ5ODgsLTMuNTMwNDkgLTEyLjc4MDM4LDBsLTEzLjY4MDc5LDEzLjY4MDc5eiI+PC9wYXRoPjxwYXRoIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjE4LjYzNzczLDIxMy4zNzY0bDUuMTUwOTcsLTUuMjc0NjJsMTMuMTg1NTEsMTIuMjM5ODlsLTE5LjIzNjg5LDE5LjQ5NTg5Yy0xMC41OTE0NywxMC41OTE0NyAtMjcuNzU4NCwxMC41OTE0NyAtMzguMzQxMTIsMGwtMTIuNzgwMzgsLTEyLjc4MDM4Yy0xMC41OTE0NywtMTAuNTgyNzEgLTEwLjU5MTQ3LC0yNy43NDk2NSAwLC0zOC4zNDExMWwzOC4zNDExMiwtMzguMzQxMTJjMTAuNTkxNDcsLTEwLjU4Njk1IDI3Ljc0OTY1LC0xMC41ODY5NSAzOC4zNDExMiwwbDEyLjc4MDM3LDEyLjc4MDM3bDEyLjY3Mzc4LDEzLjIyNjEybC0xMi4yNjMwNSwxMi40MzNsLTI1Ljk3MTQ4LC0yNS42NTkxMmMtMy41MjE3NCwtMy41MjE3NCAtOS4yNTg2NCwtMy41MjE3NCAtMTIuNzgwMzgsMGwtMzguMzQxMTIsMzguMzQxMTJjLTMuNTMwNDksMy41MzA0OSAtMy41MzA0OSw5LjI1ODY0IDAsMTIuNzgwMzhsMTIuNzgwMzcsMTIuNzgwMzdjMy41MjE3NCwzLjUyMTczIDkuMjQ5ODgsMy41MzA0OSAxMi43ODAzOCwwbDEzLjY4MDc5LC0xMy42ODA3OXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzI1NToxMTIuNjc3NDA1LS0+';

  class Network {

    getInfo() {
      return {

        id: 'json',
        name: 'Json',

        color1: '#aa5667',
        color2: '#aa5668',
        color3: '#aa5669',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'get_json_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[PATH] split by [SPLIT] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
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
            text: '[PATH] split by [SPLIT] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
              }
            }
          },
          '---',
          {
            opcode: 'contains_json_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[PATH] split by [SPLIT] of [JSON_STRING]',
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fruit/apples'
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
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
                text: '(5) undefined',
                value: '5'
              },
              {
                text: '(6) nothing',
                value: '6'
              }
            ]
          }
        }
      }
    }

    get_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') path.splice(0, 1);
        if (path[path.length - 1] === '') path.splice(-1, 1);
        var json;
        try {
          json = JSON.parse(' ' + String(JSON_STRING));
        } catch (err) {
          return '';
        }
        path.forEach(prop => json = json[prop]);
        if (json === null) return 'null';
        else if (json === undefined) return '';
        else if (typeof json === 'object') return JSON.stringify(json);
        else return String(json);
      } catch (err) {
        return '';
      }
    }
    set_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') path.splice(0, 1);
        if (path[path.length - 1] === '') path.splice(-1, 1);
        var json;
        try {
          json = JSON.parse(' ' + String(JSON_STRING));
        } catch (err) {
          return '';
        }
        path.forEach(prop => json = json[prop]);
        if (json === null) return 'null';
        else if (json === undefined) return '';
        else if (typeof json === 'object') return JSON.stringify(json);
        else return String(json);
      } catch (err) {
        return '';
      }
    }
    contains_json_block({PATH, JSON_STRING, SPLIT}) {
      try {
        var path = String(PATH).split(String(SPLIT)).map(prop => decodeURIComponent(prop));
        if (path[0] === '') path.splice(0, 1);
        if (path[path.length - 1] === '') path.splice(-1, 1);
        var json;
        try {
          json = JSON.parse(' ' + String(JSON_STRING));
        } catch (err) {
          return '';
        }
        path.forEach(prop => json = json[prop]);
        if (json === null) return 'null';
        else if (json === undefined) return '';
        else if (typeof json === 'object') return JSON.stringify(json);
        else return String(json);
      } catch (err) {
        return '';
      }
    }
  }

  Scratch.extensions.register(new Network());
})(Scratch);
