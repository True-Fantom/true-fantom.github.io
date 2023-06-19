(Scratch => {
  'use strict';

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3LjMyMjk3LC0zNy4zMjI1OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xODcuMzIyOTgsMTUwYzAsLTYyLjIzMDAxIDUwLjQ0NzM5LC0xMTIuNjc3NCAxMTIuNjc3NCwtMTEyLjY3NzRjNjIuMjMwMDEsMCAxMTIuNjc3NCw1MC40NDczOSAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZmlsbD0iI2EyYjQ3ZSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0zMjAuNDU3NDgsMTU3LjY0MTU5bDE3Ljc2NTI3LDQxLjYzMTY5YzUuMDE5NzcsMTMuMDUyOTggLTEuNjg5MTksMjcuNzkzNDggLTE0Ljc0MjE5LDMyLjgxMzI0bC0yLjY0ODQyLDEuMDE4NWMtMTMuMDUyOTksNS4wMTk3OCAtMjcuOTA5OTQsLTEuNDI3MjYgLTMyLjkyOTcsLTE0LjQ4MDM2bC0xOS4xMjY5MSwtNDAuMDY5OTJ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zNjMuNTM3ODYsMTg1Ljg4MjExbC0wLjc3MzgsMC4zNTE3bC0xMDQuMzMzMzYsNDAuMTAxMTlsLTAuNTYyOTcsMC4yMTA4NWMtNS44MzkwMSwyLjI1MTM1IC0xMi43MzM4NiwwLjM1MTcgLTE1LjgyOTM5LC01LjA2NTE5Yy0xLjg5OTI1LC0zLjIzNjM4IC0yLjA0MDA5LC02LjgyNDQ0IC0wLjk4NDU4LC05LjkxOTk2YzEuODI5MjUsLTUuNDE2ODkgMy4wMjUxLC0xMS4xODU4OSAyLjc0MzQsLTE2Ljg4NDM5Yy0wLjE0MDQyLC00LjU3MzA3IC0wLjk4NDU5LC05LjAwNTM3IC0yLjY3Mjk5LC0xMy4yOTY3NmwtOS4wNzU4LC0yMy43MDg5MmMtOS4zNTcwOCwtMjQuMzQyMjMgLTAuNDkyNTQsLTUxLjA3NjI0IDE5LjkxLC02NS42MzkzNGMyMC40MDI1NCwtMTQuNTYzMSAzOC4wMDIxMywtOS40NjMwMiAzOC4wMDIxMywtOS40NjMwMmMwLDAgLTguNjQyMjcsMjMuMjY1MDkgMTAuNjMzMDgsNDQuMTY5NTZjMTkuMjc1MzUsMjAuOTA0NDggNDMuMjY2NywxMy4yNzg5NCA0My4yNjY3LDEzLjI3ODk0YzQuNDMyMjMsNi44MjQwMiAxMy44MzgxNiwxOC43NzkyNiAxOS4zMjU4OSwyMi41Nzg1MmwwLjI4MTI3LDAuMDdjMS44MjkyNSwwLjYzMzM5IDMuMzc3MjIsMS43NTg4MyA0Ljc4MzkzLDMuMDk1NTNjMS40Nzc1NiwxLjY4ODgyIDIuNjczNCwzLjUxNzY1IDMuMjM2MzYsNi4zMzE5MWMxLjA1NTUsNS45MDk5OSAtMi4zOTE3MSwxMS42Nzg1NyAtNy45NDk4NywxMy43ODk0NHoiIHN0cm9rZS1vcGFjaXR5PSIwLjE0OTAyIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTM2NC4yMTIxLDk1Ljc5OTY2YzAsMTYuOTA0MTYgLTEzLjcwMzUzLDMwLjYwNzY5IC0zMC42MDc2OSwzMC42MDc2OWMtMTYuOTA0MTYsMCAtMzAuNjA3NjksLTEzLjcwMzUyIC0zMC42MDc2OSwtMzAuNjA3NjljMCwtMTYuOTA0MTcgMTMuNzAzNTMsLTMwLjYwNzY4IDMwLjYwNzY5LC0zMC42MDc2OGMxNi45MDQxNiwwIDMwLjYwNzY5LDEzLjcwMzUyIDMwLjYwNzY5LDMwLjYwNzY5eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzAyNDk5OTk5OTk5OjExMi42Nzc0MDUtLT4=';
  const jsonIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjODI5MDY1IiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  const makeLabel = (text) => ({
    blockType: 'label',
    text: text
  });

  const toJsonData = val => {
    return JSON.parse(val);
  };
  const toJsonString = val => {
    return JSON.stringify(val, (key, value) => {return value === undefined ? '' : value}, 0);
  };

  let permissionTypeByVM = () => 'default';
  let permissionTypeByBrowser = () => Notification.permission;
  let permissionTypeByGlobal = () => (permissionTypeByVM() === 'default' && permissionTypeByBrowser() === 'default') || (permissionTypeByVM() === 'granted' && permissionTypeByBrowser() === 'default') ? 'default' : permissionTypeByVM() === 'granted' && permissionTypeByBrowser() === 'granted' ? 'granted' : 'denied';

  /** @type {Array.<Notification>} */
  let allNotifications = [];
  /** @type {Object.<string, string>} */
  let allGroups = {};
  /** @type {{click: Object.<string, string>, close: Object.<string, string>, show: Object.<string, string>, error: Object.<string, string>}} */
  let allBroadcasts = {};

  const askVmForNotificationPermission = async () => {
    try {
      // @ts-expect-error - canNotify is too old.
      const allowed = await Scratch.canNotify();
      if (!allowed) {
        throw new Error('Denied by VM');
      }
      permissionTypeByVM = () => 'granted';
    } catch (err) {
      console.warn('Could not request notification permissions', err);
      permissionTypeByVM = () => 'denied';
    }
  };

  const askBrowserForNotificationPermission = async () => {
    try {
      const allowed = await Notification.requestPermission();
      if (!allowed) {
        throw new Error('Denied by browser');
      }
    } catch (err) {
      console.warn('Could not request notification permissions', err);
    }
  };

  class ScratchNotifications {
    getInfo() {
      return {

        id: 'truefantomnotifications',
        name: 'Notifications',
        color1: '#a2b47e',
        menuIconURI: menuIconURI,

        blocks: [
          {
            opcode: 'request_permission_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'request notification permission'
          },
          {
            opcode: 'request_permission_and_wait_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'request notification permission and wait [SOURCE]',
            arguments: {
              SOURCE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'mini_permission_source_menu'
              }
            }
          },
          {
            opcode: 'permission_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[SOURCE] [PERMISSION_TYPE] notification permission?',
            arguments: {
              SOURCE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'permission_source_menu'
              },
              PERMISSION_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'permission_type_menu'
              }
            }
          },
          {
            opcode: 'permission_type_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[SOURCE] notification permission type',
            disableMonitor: true,
            arguments: {
              SOURCE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'permission_source_menu'
              }
            }
          },
          {
            opcode: 'json_permission_types_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] notification permission types [JSON_TYPE]',
            disableMonitor: true,
            arguments: {
              JSON_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'json_menu'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: jsonIconURI
              }
            }
          },
          '---',
          {
            opcode: 'show_notification_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'create [DURATION] [VOLUME] notification [NAME] with title: [TITLE] text: [TEXT] icon: [ICON] and image: [IMAGE]',
            arguments: {
              DURATION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'duration_menu'
              },
              VOLUME: {
                type: Scratch.ArgumentType.STRING,
                menu: 'volume_menu'
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'notification'
              },
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Notification from project!'
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              },
              ICON: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://true-fantom.github.io/images/notification-icon.svg'
              },
              IMAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://true-fantom.github.io/images/notification-image.svg'
              }
            }
          },
          {
            opcode: 'close_notification_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'close notification [INDEX]',
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            }
          },
          {
            opcode: 'close_all_notifications_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'close all notifications'
          },
          '---',
          {
            opcode: 'notification_count_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'notification count'
          },
          {
            opcode: 'json_notifications_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] notifications [JSON_TYPE] where values is [JSON_VALUES_TYPE]',
            disableMonitor: true,
            arguments: {
              JSON_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'json_menu'
              },
              JSON_VALUES_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'json_menu'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: jsonIconURI
              }
            }
          },
          {
            opcode: 'notification_info_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'notification [INDEX] [NOTIFICATION_INFO_TYPE]',
            arguments: {
              INDEX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              NOTIFICATION_INFO_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'notification_info_type_menu'
              }
            }
          },
          {
            opcode: 'notification_index_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'notification [NAME] #',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'notification'
              }
            }
          },
          {
            opcode: 'notification_exist_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'notification [NAME] exist?',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'notification'
              }
            }
          }
        ],
        menus: {
          mini_permission_source_menu: {
            acceptReporters: false,
            items: ['project and browser', 'project']
          },
          permission_source_menu: {
            acceptReporters: false,
            items: ['project and browser', 'project', 'browser']
          },
          permission_type_menu: {
            acceptReporters: false,
            items: ['granted', 'denied', 'did not define']
          },
          duration_menu: {
            acceptReporters: true,
            items: ['temporary', 'eternal']
          },
          volume_menu: {
            acceptReporters: true,
            items: ['noisy', 'silent']
          },
          notification_info_type_menu: {
            acceptReporters: false,
            items: ['name', 'title', 'text', 'icon', 'image', 'duration', 'volume']
          },
          event_menu: {
            acceptReporters: true,
            items: ['click', 'close', 'show', 'error']
          },
          json_menu: {
            acceptReporters: false,
            items: ['values', 'keys', 'pairs', 'map']
          },
          broadcasts_menu: {
            acceptReporters: true,
            items: 'broadcasts_get_function'
          }
        }
      };
    }

    broadcasts_sort_function(A, B) {
      const text_a = A.text.toLowerCase();
      const text_b = B.text.toLowerCase();
      let comparison = 0;
      if (text_a > text_b) {
        comparison = 1;
      } else if (text_a < text_b) {
        comparison = -1;
      }
      return comparison;
    }
    broadcasts_get_function() {
      // @ts-expect-error - Blockly not typed yet
      // eslint-disable-next-line no-undef
      let broadcasts = typeof Blockly === 'undefined' ? [] : Blockly.getMainWorkspace()
        .getVariableMap()
        .getVariablesOfType('broadcast_msg')
        .map(model => ({
          text: model.name,
          value: model.getId()
        }));
      if (broadcasts.length > 0) {
        broadcasts.sort(this.broadcasts_sort_function);
      } else {
        broadcasts = [{text: '', value: ''}];
      }
      return broadcasts;
    }

    async show_notification_function(REQUIREINTERACTION, SILENT, DATA, TITLE, BODY, ICON, IMAGE) {
      allNotifications.push(new Notification(
        TITLE, {
        requireInteraction: REQUIREINTERACTION,
        silent: SILENT,
        body: BODY,
        icon: ICON,
        image: IMAGE,
        data: DATA}
      ));
    }

    request_permission_block() {
      if (permissionTypeByVM() !== 'granted') {
        askVmForNotificationPermission().then(() => {
          if (permissionTypeByVM() === 'granted' && permissionTypeByBrowser() !== 'granted') {
            askBrowserForNotificationPermission();
          }
        });
      }
    }
    request_permission_and_wait_block({SOURCE}) {
      if (permissionTypeByVM() !== 'granted') {
        if (cast.toString(SOURCE).toLowerCase() === 'project and browser') {
          return askVmForNotificationPermission().then(() => {
            if (permissionTypeByVM() === 'granted' && permissionTypeByBrowser() !== 'granted') {
              return askBrowserForNotificationPermission();
            }
          });
        }
        else {
          return askVmForNotificationPermission().then(() => {
            if (permissionTypeByVM() === 'granted' && permissionTypeByBrowser() !== 'granted') {
              askBrowserForNotificationPermission();
            }
          });
        }
      }
    }
    permission_block({SOURCE, PERMISSION_TYPE}) {
      const source = cast.toString(SOURCE).toLowerCase();
      const permission_type = cast.toString(PERMISSION_TYPE).toLowerCase();
      let func;
      switch (source) {
        case 'project and browser': default: func = permissionTypeByGlobal; break;
        case 'project': func = permissionTypeByVM; break;
        case 'browser': func = permissionTypeByBrowser; break;
      }
      switch (permission_type) {
        case 'granted': default: return func() === 'granted';
        case 'denied': return func() === 'denied';
        case 'did not define': return func() === 'default';
      }
    }
    permission_type_block({SOURCE}) {
      const source = cast.toString(SOURCE).toLowerCase();
      let func;
      switch (source) {
        case 'project and browser': default: func = permissionTypeByGlobal; break;
        case 'project': func = permissionTypeByVM; break;
        case 'browser': func = permissionTypeByBrowser; break;
      }
      switch (func()) {
        case 'granted': return 'granted';
        case 'denied': return 'denied';
        case 'default': default: return 'did not define';
      }
    }
    json_permission_types_block({JSON_TYPE}) {
      const json_type = cast.toString(JSON_TYPE).toLowerCase();
      let project_and_browser_source;
      let project_source;
      let browser_source;
      switch (permissionTypeByGlobal()) {
        case 'granted': project_and_browser_source = 'granted'; break;
        case 'denied': project_and_browser_source = 'denied'; break;
        case 'default': default: project_and_browser_source = 'did not define'; break;
      }
      switch (permissionTypeByVM()) {
        case 'granted': project_source = 'granted'; break;
        case 'denied': project_source = 'denied'; break;
        case 'default': default: project_source = 'did not define'; break;
      }
      switch (permissionTypeByBrowser()) {
        case 'granted': browser_source = 'granted'; break;
        case 'denied': browser_source = 'denied'; break;
        case 'default': default: browser_source = 'did not define'; break;
      }
      switch (json_type) {
        case 'values': return toJsonString([project_and_browser_source, project_source, browser_source]);
        case 'keys': return toJsonString(['project and browser', 'project', 'browser']);
        case 'pairs': default: return toJsonString({'project and browser': project_and_browser_source, 'project': project_source, 'browser': browser_source});
        case 'map': return toJsonString([['project and browser', project_and_browser_source], ['project', project_source], ['browser', browser_source]]);
      }
    }
    show_notification_block({DURATION, VOLUME, NAME, TITLE, TEXT, ICON, IMAGE}) {
      if (permissionTypeByGlobal() === 'granted') {
        this.show_notification_function(
          cast.toString(DURATION).toLowerCase() === 'eternal',
          cast.toString(VOLUME).toLowerCase() === 'silent',
          cast.toString(NAME),
          cast.toString(TITLE),
          cast.toString(TEXT),
          cast.toString(ICON),
          cast.toString(IMAGE)
        );
      }
    }
    close_notification_block({INDEX}) {
      if (permissionTypeByGlobal() === 'granted' && allNotifications.length > 0) {
        const index = Math.floor(cast.toNumber(INDEX));
        if (allNotifications.length >= index && index > 0) {
          allNotifications[index - 1].close();
          allNotifications.splice(index - 1, 1);
        }
      }
    }
    close_all_notifications_block() {
      if (permissionTypeByGlobal() === 'granted' && allNotifications.length > 0) {
        allNotifications.forEach(item => item.close());
        allNotifications = [];
      }
    }
    notification_count_block() {
      return allNotifications.length;
    }
    json_notifications_block({JSON_TYPE, JSON_VALUES_TYPE}) {
      const json_type = cast.toString(JSON_TYPE).toLowerCase();
      const json_values_type = cast.toString(JSON_VALUES_TYPE).toLowerCase();
      let newAllNotifications;
      switch (json_values_type) {
        case 'values': newAllNotifications = allNotifications.map(notification => [notification.data, notification.title, notification.body, notification.icon, notification.image, notification.requireInteraction ? 'eternal' : 'temporary', notification.silent ? 'silent' : 'noisy']); break;
        case 'keys': newAllNotifications = allNotifications.map(notification => ['name', 'title', 'text', 'icon', 'image', 'duration', 'volume']); break;
        case 'pairs': default: newAllNotifications = allNotifications.map(notification => [notification.data, notification.title, notification.body, notification.icon, notification.image, notification.requireInteraction ? 'eternal' : 'temporary', notification.silent ? 'silent' : 'noisy']).reduce((array, currentValue, currentIndex) => ({...array, [['name', 'title', 'text', 'icon', 'image', 'duration', 'volume'][currentIndex]] : currentValue}), {}); break;
        case 'map': newAllNotifications = allNotifications.map(notification => [['name', notification.data], ['title', notification.title], ['text', notification.body], ['icon', notification.icon], ['image', notification.image], ['duration', notification.requireInteraction ? 'eternal' : 'temporary'], ['volume', notification.silent ? 'silent' : 'noisy']]); break;
      }
      switch (json_type) {
        case 'values': return toJsonString(newAllNotifications.map((values, index) => values));
        case 'keys': return toJsonString(newAllNotifications.map((values, index) => String(index + 1)));
        case 'pairs': default: return toJsonString(newAllNotifications.map((values, index) => values).reduce((array, currentValue, currentIndex) => ({...array, [currentIndex + 1] : currentValue}), {}));
        case 'map': return toJsonString(newAllNotifications.map((values, index) => [String(index + 1), values]));
      }
    }
    notification_info_block({INDEX, NOTIFICATION_INFO_TYPE}) {
      if (permissionTypeByGlobal() === 'granted' && allNotifications.length > 0) {
        const index = Math.floor(cast.toNumber(INDEX));
        if (allNotifications.length >= index && index > 0) {
          const notification_info_type = cast.toString(NOTIFICATION_INFO_TYPE).toLowerCase();
          switch (notification_info_type) {
            case 'name': default: return allNotifications[index - 1].data;
            case 'title': return allNotifications[index - 1].title;
            case 'text': return allNotifications[index - 1].body;
            case 'icon': return allNotifications[index - 1].icon;
            case 'image': return allNotifications[index - 1].image;
            case 'duration': return allNotifications[index - 1].requireInteraction ? 'eternal' : 'temporary';
            case 'volume': return allNotifications[index - 1].silent ? 'silent' : 'noisy';
          }
        }
      }
      return '';
    }
    notification_index_block({NAME}) {
      const name = cast.toString(NAME).toLowerCase();
      const names = allNotifications.map(notification => notification.data.toLowerCase());
      return names.indexOf(name) + 1;
    }
    notification_exist_block({NAME}) {
      const name = cast.toString(NAME).toLowerCase();
      const names = allNotifications.map(notification => notification.data.toLowerCase());
      return names.includes(name);
    }
  }
  Scratch.extensions.register(new ScratchNotifications());
})(Scratch);
