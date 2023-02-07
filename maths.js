(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjMyMjc3LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjA3LjMyMjc4LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiM1OWMwNTkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTM5MC45NzIyNSwxMTEuNTcxNDhsMC4xOTIwOCwyMS43MDQ2M2wtMzMuOTk3NTIsLTAuMTkyMDhjLTAuMTkyMDgsNDIuNDQ4ODkgLTE1Ljk0MjM0LDkzLjE1NzA2IDEyLjY3NzA1LDkyLjc3MjkxYzEwLjUwMDE4LC0wLjQ0ODE4IDEwLjQzMDE0LC0xOS40MTExIDEwLjk0MjM0LC0yOS42NTUxOGwxMS4xNzgxNCwxMy4yYzAsMTIuNDIwOTQgLTguNjc1MTQsMzkuOTUyNTQgLTMzLjY0NTA3LDM5LjEyMDJjLTE1LjE3NDAzLC0wLjEyODA1IC0yNi42OTg2MiwtMTAuMjQ0MDggLTI3LjA4Mjc4LC0yOS4xOTU2MmMwLjUxMjIsLTI4LjQ5MTMzIDUuMDU4MDIsLTU3LjU1ODg5IDYuNzIyNjcsLTg2LjYyNjQ1bC0yNy41MDg0NSwwLjRjLTcuNTU1LDgyLjQ2NDggLTEwLjI2NjU3LDExNC43ODE4MiAtMzQuNTMyMjIsMTE1LjYxNDE1Yy03LjY4MzA2LC0wLjMyMDEyIC0xNC43ODk4OCwtNS44MjYzMiAtMTUuNTU4MTksLTE0Ljc4OTg4Yy0yLjExMjg0LC0xNS44MTQyOSAzMS42OTI2MSwtMjMuOTQ1NTIgMzIuODQ1MDYsLTEwMS4wMzIxOWMtMzEuNjkyNjEsLTMuNTIxNCAtMzMuODA1NDUsMTQuNDY5NzUgLTM5LjE4MzU4LDIwLjU1MjE3bC0xMy4zODYwNiwtMS41ODQxNWMxOC43NjU1OCwtNDQuOTQzMjYgOS4wMjk3MiwtNDAuOTcyOTkgMTUwLjMzNjU1LC00MC4yODg1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNTljMDU5IiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjExMi42NzcyMjQ5OTk5OTk5OToxMTIuNjc3NDA1LS0+';

  const main_protocols = ['https:', 'http:', 'data:', 'file:', 'blob:', 'ftp:', 'ftps:', 'mailto:', 'news:', 'irc:', 'gopher:', 'nntp:', 'feed:', 'telnet:', 'mms:', 'rtsp:', 'svn:', 'tel:', 'fax:', 'xmpp:'];
  const browser_protocols = ['chrome:', 'edge:', 'brave:', 'browser:', 'about:', 'extension:', 'chrome-extension:'];
  const special_protocols = ['steam:', 'spotify:', 'zoommtg:', 'zoomus:', 'viber:', 'slack:', 'trueconf:', 'rdar:', 'msteams:', 'teamspeak:', 'magnet:', 'streamdeck:', 'skype:', 'sms:', 'comgooglemaps:', 'comgooglemapsurl:', 'comgooglemaps-x-callback:'];
  const ms_protocols = ['ms-help:', 'ms-settings', 'ms-settings-airplanemode:', 'ms-settings-bluetooth:', 'ms-settings-camera:', 'ms-settings-cellular:', 'ms-settings-cloudstorage:', 'ms-settings-emailandaccounts:', 'ms-settings-language:', 'ms-settings-location:', 'ms-settings-lock:', 'ms-settings-nfctransactions:', 'ms-settings-notifications:', 'ms-settings-power:', 'ms-settings-privacy:', 'ms-settings-proximity:', 'ms-settings-screenrotation:', 'ms-settings-wifi:', 'ms-settings-workplace:', 'ms-access:', 'ms-excel:', 'ms-infopath:', 'ms-powerpoint:', 'ms-project:', 'ms-publisher:', 'ms-spd:', 'ms-visio:', 'ms-word:', 'ms-clock:', 'ms-calculator:', 'ms-windows-store:'];
  const protocols = [...main_protocols, ...browser_protocols, ...special_protocols, ...ms_protocols];

  const fetch_url = ({USER_URL, BODY, CONTENT_TYPE, RESPONSES_TYPES, SPLIT}, METHOD) => {
    SPLIT = String(SPLIT);
    CONTENT_TYPE = Number(CONTENT_TYPE);
    RESPONSES_TYPES = String(RESPONSES_TYPES).split(' ').filter(word => word !== '').length >= 1 ? String(RESPONSES_TYPES).split(' ').filter(word => word !== '') : ['9'];
    let single = METHOD === 'GET' || METHOD === 'DELETE';
    return fetch(String(USER_URL), {
      method: METHOD,
      headers: single ? {} : {'Content-Type': CONTENT_TYPE === 1 ? 'text/plain' : 'application/json'},
      redirect: single ? 'follow' : 'follow',
      body: CONTENT_TYPE === 1 ? String(BODY) : JSON.stringify(BODY)})
    .then(res => {
      const responses = [];
      for (let i = 0; i <= RESPONSES_TYPES.length - 1; i++) {
        switch (Number(RESPONSES_TYPES[i])) {
          case 1: responses.push(res.text()); break;
          case 2: responses.push(JSON.stringify(res.json())); break;
          case 3: responses.push(String(res.ok)); break;
          case 4: responses.push(res.status); break;
          case 5: responses.push(res.statusText); break;
          case 6: responses.push(res.type); break;
          case 7: responses.push(String(res.redirected)); break;
          case 8: responses.push(res.url); break;
          case 9: default: responses.push(single ? res.url : String(res.bodyUsed)); break;
        }
      }
      return Promise.all(responses);
    })
    .then(arr => {
      let responses = '';
      for (let i = 0; i <= RESPONSES_TYPES.length - 1; i++) {
        responses += SPLIT + arr[i];
      }
      return SPLIT === '' ? responses : responses.slice(1);
    })
    .catch(err => '');
  };

  class Network {

    getInfo() {
      return {

        id: 'network',
        name: 'Network',

        color1: '#59c059',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?'
          },
          '---',
          {
            opcode: 'browser_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser'
          },
          '---',
          {
            opcode: 'current_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current url'
          },
          '---',
          {
            opcode: 'network_type_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network type'
          },
          {
            opcode: 'network_generation_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network generation'
          },
          '---',
          {
            opcode: 'downlink_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink speed in mb/s'
          },
          {
            opcode: 'downlink_max_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink max speed in mb/s'
          },
          {
            opcode: 'rtt_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'rtt in ms'
          },
          '---',
          {
            opcode: 'get_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/get'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'only_url_response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'delete_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/delete'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'only_url_response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'post_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'post [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/post'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'put_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'put [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/put'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'patch_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'patch [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/patch'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          '---',
          {
            opcode: 'open_link_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new tab',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          },
          {
            opcode: 'open_window_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new window with width: [WIDTH] height: [HEIGHT] left: [LEFT] top: [TOP]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              },
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              TOP: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              }
            }
          },
          {
            opcode: 'redirect_link_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'redirect this tab to [USER_URL]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          }
        ],

        menus: {
          content_type: { 
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              }
            ]
          },
          only_url_response_type: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '(5 1) status text and text',
                value: '5 1'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '(6 4) type and status',
                value: '6 4'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              }
            ]
          },
          response_type: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '(5 1) status text and text',
                value: '5 1'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '(6 4) type and status',
                value: '6 4'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              },
              {
                text: '(9) body used?',
                value: '9'
              }
            ]
          },
          default: { 
            acceptReporters: true,
            items: [
              {
                text: 'default',
                value: 'default'
              }
            ]
          }
        }
      }
    }

    connected_to_internet_block() {
      try {return navigator.onLine} catch(err) {return false}
    }
    browser_block() {
      try {
        let has = input => navigator.userAgent.includes(input);
        if (has('Firefox')) return 'firefox';
        if (has('SamsungBrowser')) return 'samsung internet';
        if ((has('Opera') || has('OPR')) && has('GX')) return 'opera gx';
        if (has('Opera') || has('OPR')) return 'opera';
        if (has('Trident')) return 'internet explorer';
        if (has('Edge')) return 'legacy';
        if (has('Edg')) return 'edge';
        if (has('YaBrowser') || has('YaSearchBrowser')) return 'yandex';
        if (has('Miui')) return 'mi browser';
        if (has('UBrowser')) return 'uc browser';
        if (has('Chrome')) return 'chromium';
        if (has('Safari')) return 'safari';
        return '';
      } catch(err) {return ''}
    }
    current_url_block() {
      try {return document.URL || ''} catch(err) {return ''}
    }
    network_type_block() {
      try {
        switch (navigator.connection.type) {
          case 'bluetooth': return 'bluetooth';
          case 'cellular': return 'cellular';
          case 'ethernet': return 'ethernet';
          case 'wifi': return 'wi-fi';
          case 'wimax': return 'wimax';
          default: return '';
        }
      } catch(err) {return ''}
    }
    network_generation_block() {
      try {
        switch (navigator.connection.effectiveType) {
          case 'slow-2g': case '2g': return '2g';
          case '3g': return '3g';
          case '4g': return '4g';
          default: return '';
        }
      } catch(err) {return ''}
    }
    downlink_speed_block() {
      try {return navigator.connection.downlink || ''} catch(err) {return ''}
    }
    downlink_max_speed_block() {
      try {return navigator.connection.downlinkMax || ''} catch(err) {return ''}
    }
    rtt_block() {
      try {return navigator.connection.rtt || ''} catch(err) {return ''}
    }
    get_block(args) {
      try {return fetch_url(args, 'GET')} catch(err) {return ''}
    }
    delete_block(args) {
      try {return fetch_url(args, 'DELETE')} catch(err) {return ''}
    }
    post_block(args) {
      try {return fetch_url(args, 'POST')} catch(err) {return ''}
    }
    put_block(args) {
      try {return fetch_url(args, 'PUT')} catch(err) {return ''}
    }
    patch_block(args) {
      try {return fetch_url(args, 'PATCH')} catch(err) {return ''}
    }
    open_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_blank');
        }
      } catch(err) {}
    }
    open_window_block({USER_URL,WIDTH,HEIGHT,LEFT,TOP}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          let params = 'popup=1';
          params += isNaN(WIDTH) ? '' : `,width=${Number(WIDTH) < 100 ? 100 : Number(WIDTH) > window.screen.width ? window.screen.width : Number(WIDTH)}`;
          params += isNaN(HEIGHT) ? '' : `,height=${Number(HEIGHT) < 100 ? 100 : Number(HEIGHT) > window.screen.height ? window.screen.height : Number(HEIGHT)}`;
          params += isNaN(LEFT) ? '' : `,left=${Number(LEFT) < 0 ? 0 : Number(LEFT) > window.screen.width ? window.screen.width : Number(LEFT)}`;
          params += isNaN(TOP) ? '' : `,top=${Number(TOP) < 0 ? 0 : Number(TOP) > window.screen.height ? window.screen.height : Number(TOP)}`;
          window.open(String(USER_URL), '_blank', params);
        }
      } catch(err) {}
    }
    redirect_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_self');
        }
      } catch(err) {}
    }
  }

  Scratch.extensions.register(new Network());
})(Scratch);
