(function(Scratch) {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjcsLTY3LjMyMjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTEyNy4zMjI3MSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjMDA2NjE2IiBzdHJva2Utd2lkdGg9IjAiLz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0yNjEuMzYyMzUsMTQ2LjYyMzU5bC01LjE1MDk3LDUuMjc0NjJsLTEzLjE4NTUxLC0xMi4yMzk4OWwxOS4yMzY4OSwtMTkuNDk1ODljMTAuNTkxNDcsLTEwLjU5MTQ3IDI3Ljc1ODQsLTEwLjU5MTQ3IDM4LjM0MTEyLDBsMTIuNzgwMzgsMTIuNzgwMzhjMTAuNTkxNDcsMTAuNTgyNzEgMTAuNTkxNDcsMjcuNzQ5NjUgMCwzOC4zNDExMmwtMzguMzQxMTIsMzguMzQxMTJjLTEwLjU5MTQ3LDEwLjU4Njk1IC0yNy43NDk2NSwxMC41ODY5NSAtMzguMzQxMTIsMGwtMTIuNzgwMzcsLTEyLjc4MDM3bC0xMi42NzM3OCwtMTMuMjI2MTJsMTIuMjYzMDQsLTEyLjQzM2wyNS45NzE0OSwyNS42NTkxMmMzLjUyMTc0LDMuNTIxNzQgOS4yNTg2NCwzLjUyMTc0IDEyLjc4MDM4LDBsMzguMzQxMTIsLTM4LjM0MTEyYzMuNTMwNDksLTMuNTMwNDkgMy41MzA0OSwtOS4yNTg2NCAwLC0xMi43ODAzOGwtMTIuNzgwMzcsLTEyLjc4MDM3Yy0zLjUyMTc0LC0zLjUyMTczIC05LjI0OTg4LC0zLjUzMDQ5IC0xMi43ODAzOCwwbC0xMy42ODA3OSwxMy42ODA3OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTIxOC42Mzc2OSwyMTMuMzc2NGw1LjE1MDk3LC01LjI3NDYybDEzLjE4NTUxLDEyLjIzOTg5bC0xOS4yMzY4OSwxOS40OTU4OWMtMTAuNTkxNDcsMTAuNTkxNDcgLTI3Ljc1ODQsMTAuNTkxNDcgLTM4LjM0MTEyLDBsLTEyLjc4MDM4LC0xMi43ODAzOGMtMTAuNTkxNDcsLTEwLjU4MjcxIC0xMC41OTE0NywtMjcuNzQ5NjUgMCwtMzguMzQxMTFsMzguMzQxMTIsLTM4LjM0MTEyYzEwLjU5MTQ3LC0xMC41ODY5NSAyNy43NDk2NSwtMTAuNTg2OTUgMzguMzQxMTIsMGwxMi43ODAzNywxMi43ODAzN2wxMi42NzM3OCwxMy4yMjYxMmwtMTIuMjYzMDUsMTIuNDMzbC0yNS45NzE0OCwtMjUuNjU5MTJjLTMuNTIxNzQsLTMuNTIxNzQgLTkuMjU4NjQsLTMuNTIxNzQgLTEyLjc4MDM4LDBsLTM4LjM0MTEyLDM4LjM0MTEyYy0zLjUzMDQ5LDMuNTMwNDkgLTMuNTMwNDksOS4yNTg2NCAwLDEyLjc4MDM4bDEyLjc4MDM3LDEyLjc4MDM3YzMuNTIxNzQsMy41MjE3MyA5LjI0OTg4LDMuNTMwNDkgMTIuNzgwMzgsMGwxMy42ODA3OSwtMTMuNjgwNzl6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3Mjk1OjExMi42Nzc0MDUtLT4=';

  const computing = new Map();
  
  const computed = new Map();

  const pingWebSocket = async (uri) => {
    let ws;
    try {
      ws = new WebSocket(uri);
    } catch (e) {
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

  class Internet {

    constructor() {}

    getInfo() {
      return {

        id: 'Internet',
        name: 'Internet',
        
        color1: '#006616',
        color2: '#005212',
        color3: '#005C14',

        menuIconURI: icon,

        blocks: [
          
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?',
            arguments: {}
          },
          
          {
            opcode: 'get_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          },
          
          {
            opcode: "ping_block",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is cloud data server up [SERVER] ?",
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "wss://clouddata.turbowarp.org",
              }
            }
          }

        ],
        
        menus: {
          
        }
      }
    }

    connected_to_internet_block() {
      return navigator.onLine;
    }
    
    get_url_block({URL}) {
      return fetch(String(URL)).then(res => res.text()).catch(err => '');
    }
    
    ping_block({SERVER}) {
      return cachedPingWebSocket(String(SERVER));
    }
 
  }

  Scratch.extensions.register(new Internet());
  
})(Scratch);
