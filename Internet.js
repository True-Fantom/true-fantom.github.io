(function(Scratch) {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjY3LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTI3LjMyMjY4LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiM0MDQwNDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE4LjUiPjxwYXRoIGQ9Ik0yNDAuNzA5NTksMTI0Ljc4MTI1djQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ2LDYuNzk0OTZoLTQ3LjA0MjQ4Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OGM1LjE5NTU5LDAgNy44NDA0NiwxLjU5ODQgNy44NDA0Niw2Ljc5NDk2eiIvPjxwYXRoIGQ9Ik0zMDIuMDEzODIsMTg2LjA4NTUydjQ5LjEzMzIyYzAsNS4xOTY2MSAtMi42NDM3NCw2Ljc5NDk2IC03Ljg0MDQ1LDYuNzk0OTZoLTQ3LjA0MjQ5Yy01LjE5NzY4LDAgLTcuODQwNDYsLTEuNTk4NCAtNy44NDA0NiwtNi43OTQ5NnYtNDkuMTMzMjFjMCwtNS4xOTY2IDIuNjQyNzgsLTYuNzk0OTYgNy44NDA0NiwtNi43OTQ5Nmg0Ny4wNDI0OWM1LjE5NTU4LDAgNy44NDA0NSwxLjU5ODQgNy44NDA0NSw2Ljc5NDk2eiIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MzI1OjExMi42Nzc0MDUtLT4=';
  
  /**
   * @typedef CacheEntry
   * @property {number} expires
   * @property {boolean} value
   */

  /** @type {Map<string, Promise<CacheEntry>>} */
  const computing = new Map();
  /** @type {Map<string, CacheEntry>} */
  const computed = new Map();

  /**
   * @param {string} uri
   * @returns {Promise<CacheEntry>}
   */
  const pingWebSocket = async (uri) => {
    /** @type {WebSocket} */
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

  /**
   * @param {string} uri
   * @returns {boolean|Promise<boolean>}
   */
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
        
        color1: '#404040',
        color2: '#3a3a3a',
        color3: '#333333',

        menuIconURI: icon,

        blocks: [
          
          {
            opcode: "ping",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is cloud data server [SERVER] up?",
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "wss://clouddata.turbowarp.org",
              }
            }
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
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?',
            arguments: {}
          }

        ],
        
        menus: {
          
        }
      }
    }

    ping({SERVER}) {
      return cachedPingWebSocket(SERVER);
    }
    
    get_url_block({URL}) {
      return fetch(String(URL)).then(res => res.text()).catch(err => '');
    }
    
    connected_to_internet_block() {
      return navigator.onLine;
    }
    
  }

  Scratch.extensions.register(new Internet());
  
})(Scratch);
