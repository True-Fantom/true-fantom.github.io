(function(Scratch) {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMjI1LjM1NDgsMjI1LjM1NDgiIGhlaWdodD0iMjI1LjM1NDgiIHdpZHRoPSIyMjUuMzU0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc0LC02Ny4zMjI2KSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzE0NjYwMCIgZD0iTTEyNy4zMjI3NSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6Ij48L3BhdGg+PGcgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTI2MS4zNjIzNSwxNDYuNjIzNTlsLTUuMTUwOTcsNS4yNzQ2MmwtMTMuMTg1NTEsLTEyLjIzOTg5bDE5LjIzNjg5LC0xOS40OTU4OWMxMC41OTE0NywtMTAuNTkxNDcgMjcuNzU4NCwtMTAuNTkxNDcgMzguMzQxMTIsMGwxMi43ODAzOCwxMi43ODAzOGMxMC41OTE0NywxMC41ODI3MSAxMC41OTE0NywyNy43NDk2NSAwLDM4LjM0MTEybC0zOC4zNDExMiwzOC4zNDExMmMtMTAuNTkxNDcsMTAuNTg2OTUgLTI3Ljc0OTY1LDEwLjU4Njk1IC0zOC4zNDExMiwwbC0xMi43ODAzNywtMTIuNzgwMzdsLTEyLjY3Mzc4LC0xMy4yMjYxMmwxMi4yNjMwNCwtMTIuNDMzbDI1Ljk3MTQ5LDI1LjY1OTEyYzMuNTIxNzQsMy41MjE3NCA5LjI1ODY0LDMuNTIxNzQgMTIuNzgwMzgsMGwzOC4zNDExMiwtMzguMzQxMTJjMy41MzA0OSwtMy41MzA0OSAzLjUzMDQ5LC05LjI1ODY0IDAsLTEyLjc4MDM4bC0xMi43ODAzNywtMTIuNzgwMzdjLTMuNTIxNzQsLTMuNTIxNzMgLTkuMjQ5ODgsLTMuNTMwNDkgLTEyLjc4MDM4LDBsLTEzLjY4MDc5LDEzLjY4MDc5eiI+PC9wYXRoPjxwYXRoIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjE4LjYzNzczLDIxMy4zNzY0bDUuMTUwOTcsLTUuMjc0NjJsMTMuMTg1NTEsMTIuMjM5ODlsLTE5LjIzNjg5LDE5LjQ5NTg5Yy0xMC41OTE0NywxMC41OTE0NyAtMjcuNzU4NCwxMC41OTE0NyAtMzguMzQxMTIsMGwtMTIuNzgwMzgsLTEyLjc4MDM4Yy0xMC41OTE0NywtMTAuNTgyNzEgLTEwLjU5MTQ3LC0yNy43NDk2NSAwLC0zOC4zNDExMWwzOC4zNDExMiwtMzguMzQxMTJjMTAuNTkxNDcsLTEwLjU4Njk1IDI3Ljc0OTY1LC0xMC41ODY5NSAzOC4zNDExMiwwbDEyLjc4MDM3LDEyLjc4MDM3bDEyLjY3Mzc4LDEzLjIyNjEybC0xMi4yNjMwNSwxMi40MzNsLTI1Ljk3MTQ4LC0yNS42NTkxMmMtMy41MjE3NCwtMy41MjE3NCAtOS4yNTg2NCwtMy41MjE3NCAtMTIuNzgwMzgsMGwtMzguMzQxMTIsMzguMzQxMTJjLTMuNTMwNDksMy41MzA0OSAtMy41MzA0OSw5LjI1ODY0IDAsMTIuNzgwMzhsMTIuNzgwMzcsMTIuNzgwMzdjMy41MjE3NCwzLjUyMTczIDkuMjQ5ODgsMy41MzA0OSAxMi43ODAzOCwwbDEzLjY4MDc5LC0xMy42ODA3OXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzI1NToxMTIuNjc3NDA1LS0+';

  const computing = new Map();
  
  const computed = new Map();

  const pingWebSocket = async (uri) => {
    let ws;
    try {
      ws = new WebSocket(uri);
    } catch (err) {
      return {
        expires: 0,
        value: false
      };
    }
    let timeoutId;
    const isUp = await new Promise((resolve) => {
      ws.onopen = () => {
        setTimeout(() => {
          resolve(true);
        }, 2000)
      };
      ws.onclose = () => {
        resolve(false);
      };
      ws.onerror = () => {
        resolve(false);
      };
      timeoutId = setTimeout(() => {
        ws.close();
      }, 5000);
    });
    ws.close();
    clearTimeout(timeoutId);
    return {
      expires: Date.now() + 60000,
      value: isUp
    };
  };

  const cachedPingWebSocket = (uri) => {
    const computingEntry = computing.get(uri);
    if (computingEntry) {
      return computingEntry.then((entry) => entry.value);
    }
    const computedEntry = computed.get(uri);
    if (computedEntry && Date.now() < computedEntry.expires) {
      return computedEntry.value;
    }
    const promise = pingWebSocket(uri);
    computing.set(uri, promise);
    return promise.then((entry) => {
      computing.delete(uri);
      computed.set(uri, entry);
      return entry.value;
    });
  };

  class Network {

    constructor() {}

    getInfo() {
      return {

        id: 'network',
        name: 'Network',
        
        color1: '#146600',
        color2: '#125C00',
        color3: '#105200',

        menuIconURI: icon,

        blocks: [
          
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?',
            arguments: {}
          },
          
          '---',
          
          {
            opcode: 'network_type_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network type',
            arguments: {}
          },
          
          {
            opcode: 'network_generation_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network generation',
            arguments: {}
          },
          
          {
            opcode: 'downlink_max_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink max speed',
            arguments: {}
          },
          
          {
            opcode: 'downlink_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink speed',
            arguments: {}
          },
          
          {
            opcode: 'network_rtt_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network rtt',
            arguments: {}
          },
          
          '---',
          
          {
            opcode: 'get_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/get'
              }
            }
          },
          
          {
            opcode: 'post_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'post [CONTENT_TYPE] [BODY] to [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/post'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type_menu'
              }
            }
          },
          
          {
            opcode: 'put_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'put [CONTENT_TYPE] [BODY] to [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/put'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type_menu'
              }
            }
          },
          
          '---',
          
          {
            opcode: 'ping_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is cloud data server up [SERVER] ?',
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'wss://clouddata.turbowarp.org',
              }
            }
          }

        ],
        
        menus: {
          
          content_type_menu: {  
            items: ['text', 'json'],
            acceptReporters: true
          }
          
        }
      }
    }

    connected_to_internet_block() {
      return navigator.onLine;
    }
    
    network_type_block() {
      if (navigator.connection.type === undefined) {
        return '';
      }
      else {
        return navigator.connection.type;
      }
    }
    
    network_generation_block() {
      if (navigator.connection.effectiveType === undefined) {
        return '';
      }
      else {
        return navigator.connection.effectiveType;
      }
    }
    
    downlink_max_speed_block() {
      if (navigator.connection.downlinkMax === undefined) {
        return '';
      }
      else {
        return navigator.connection.downlinkMax;
      }
    }
    
    downlink_speed_block() {
      if (navigator.connection.downlink === undefined) {
        return '';
      }
      else {
        return navigator.connection.downlink;
      }
    }
    
    network_rtt_block() {
      if (navigator.connection.rtt === undefined) {
        return '';
      }
      else {
        return navigator.connection.rtt;
      }
    }
    
    get_block({URL}) {
      return fetch(String(URL), {
        method:'GET',
        headers: {}})
        .then(res => res.text())
        .catch(err => '');
    }
    
    post_block({URL, BODY, CONTENT_TYPE}) {
      if (String(CONTENT_TYPE).toLowerCase() === 'text') {
        return fetch(String(URL), {
          method:'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          redirect: 'follow',
          body: String(BODY)})
          .then(res => res.text())
          .catch(err => '');
      }
      else if (String(CONTENT_TYPE).toLowerCase() === 'json') {
        return fetch(String(URL), {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(BODY)})
          .then(res => res.text())
          .catch(err => '');
      }
      else {
        return '';
      }
    }
    
    put_block({URL, BODY, CONTENT_TYPE}) {
      if (String(CONTENT_TYPE).toLowerCase() === 'text') {
        return fetch(String(URL), {
          method:'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          redirect: 'follow',
          body: String(BODY)})
          .then(res => res.text())
          .catch(err => '');
      }
      else if (String(CONTENT_TYPE).toLowerCase() === 'json') {
        return fetch(String(URL), {
          method:'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(BODY)})
          .then(res => res.text())
          .catch(err => '');
      }
      else {
        return '';
      }
    }
    
    ping_block({SERVER}) {
      return cachedPingWebSocket(String(SERVER));
    }
 
  }

  Scratch.extensions.register(new Network());
  
})(Scratch);
