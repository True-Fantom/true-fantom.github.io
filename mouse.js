(Scratch => {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Mouse extension must be run unsandboxed');
  }

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMjI1LjM1NDgsMjI1LjM1NDgiIGhlaWdodD0iMjI1LjM1NDgiIHdpZHRoPSIyMjUuMzU0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc0LC02Ny4zMjI2KSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzE0NjYwMCIgZD0iTTEyNy4zMjI3NSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6Ij48L3BhdGg+PGcgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTI2MS4zNjIzNSwxNDYuNjIzNTlsLTUuMTUwOTcsNS4yNzQ2MmwtMTMuMTg1NTEsLTEyLjIzOTg5bDE5LjIzNjg5LC0xOS40OTU4OWMxMC41OTE0NywtMTAuNTkxNDcgMjcuNzU4NCwtMTAuNTkxNDcgMzguMzQxMTIsMGwxMi43ODAzOCwxMi43ODAzOGMxMC41OTE0NywxMC41ODI3MSAxMC41OTE0NywyNy43NDk2NSAwLDM4LjM0MTEybC0zOC4zNDExMiwzOC4zNDExMmMtMTAuNTkxNDcsMTAuNTg2OTUgLTI3Ljc0OTY1LDEwLjU4Njk1IC0zOC4zNDExMiwwbC0xMi43ODAzNywtMTIuNzgwMzdsLTEyLjY3Mzc4LC0xMy4yMjYxMmwxMi4yNjMwNCwtMTIuNDMzbDI1Ljk3MTQ5LDI1LjY1OTEyYzMuNTIxNzQsMy41MjE3NCA5LjI1ODY0LDMuNTIxNzQgMTIuNzgwMzgsMGwzOC4zNDExMiwtMzguMzQxMTJjMy41MzA0OSwtMy41MzA0OSAzLjUzMDQ5LC05LjI1ODY0IDAsLTEyLjc4MDM4bC0xMi43ODAzNywtMTIuNzgwMzdjLTMuNTIxNzQsLTMuNTIxNzMgLTkuMjQ5ODgsLTMuNTMwNDkgLTEyLjc4MDM4LDBsLTEzLjY4MDc5LDEzLjY4MDc5eiI+PC9wYXRoPjxwYXRoIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjE4LjYzNzczLDIxMy4zNzY0bDUuMTUwOTcsLTUuMjc0NjJsMTMuMTg1NTEsMTIuMjM5ODlsLTE5LjIzNjg5LDE5LjQ5NTg5Yy0xMC41OTE0NywxMC41OTE0NyAtMjcuNzU4NCwxMC41OTE0NyAtMzguMzQxMTIsMGwtMTIuNzgwMzgsLTEyLjc4MDM4Yy0xMC41OTE0NywtMTAuNTgyNzEgLTEwLjU5MTQ3LC0yNy43NDk2NSAwLC0zOC4zNDExMWwzOC4zNDExMiwtMzguMzQxMTJjMTAuNTkxNDcsLTEwLjU4Njk1IDI3Ljc0OTY1LC0xMC41ODY5NSAzOC4zNDExMiwwbDEyLjc4MDM3LDEyLjc4MDM3bDEyLjY3Mzc4LDEzLjIyNjEybC0xMi4yNjMwNSwxMi40MzNsLTI1Ljk3MTQ4LC0yNS42NTkxMmMtMy41MjE3NCwtMy41MjE3NCAtOS4yNTg2NCwtMy41MjE3NCAtMTIuNzgwMzgsMGwtMzguMzQxMTIsMzguMzQxMTJjLTMuNTMwNDksMy41MzA0OSAtMy41MzA0OSw5LjI1ODY0IDAsMTIuNzgwMzhsMTIuNzgwMzcsMTIuNzgwMzdjMy41MjE3NCwzLjUyMTczIDkuMjQ5ODgsMy41MzA0OSAxMi43ODAzOCwwbDEzLjY4MDc5LC0xMy42ODA3OXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzI1NToxMTIuNjc3NDA1LS0+';

  const cursors = ['default', 'pointer', 'move', 'grab', 'grabbing', 'text', 'vertical-text', 'wait', 'progress', 'help', 'context-menu', 'zoom-in', 'zoom-out', 'crosshair', 'cell', 'not-allowed', 'copy', 'alias', 'no-drop', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'none'];
  const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'];
  
  const vm = Scratch.vm;
  const canvas = Scratch.renderer.canvas;
  const cast = Scratch.Cast;

  canvas.style.cursor = 'default';
  let cursorData = 'default';
  let cursorName = 'default';

  const setCursor = (CURSOR_NAME, CURSOR_DATA) => {
    if (cursorName !== CURSOR_NAME) {
      cursorName = CURSOR_NAME;
    }
    if (cursorData !== CURSOR_DATA) {
      cursorData = CURSOR_DATA;
      canvas.style.cursor = CURSOR_DATA;
    }
  };

  const toCursorPosition = STRING => {
    switch (STRING) {
      case 'top-left': return [0, 0];
      case 'top-right': return [1, 0];
      case 'bottom-left': return [0, 1];
      case 'bottom-right': return [1, 1];
      case 'center': default: return [0.5, 0.5];
    }
  };

  class Mouse {

    getInfo() {
      return {

        id: 'truefantommouse',
        name: 'Mouse',

        color1: '#146600',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'set_cursor_image_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set cursor to [CURSOR]',
            arguments: {
              CURSOR: {
                type: Scratch.ArgumentType.STRING,
                menu: 'cursors_menu'
              }
            }
          },
          {
            opcode: 'set_cursor_url_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set cursor to [USER_URL] with name: [NAME] ang position: [POSITION]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/dango.png'
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'dango'
              },
              POSITION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'positions_menu'
              }
            }
          },
          {
            opcode: 'cursor_name_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'cursor name'
          },
          {
            opcode: 'cursor_data_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'cursor data'
          }
        ],
        menus: {
          cursors_menu: {
            acceptReporters: true,
            items: cursors
          },
          positions_menu: {
            acceptReporters: true,
            items: positions
          }
        }
      }
    }

    set_cursor_image_block({CURSOR}) {
      const cursor = cast.toString(CURSOR);
      if (!cursors.includes(cursor)) {
        cursor = cursors[cursors.lenght - 1];
      }
      setCursor(cursor, cursor);
    }
    set_cursor_url_block({USER_URL, NAME, POSITION}) {
      const position = toCursorPosition(cast.toString(POSITION));
      const x = position[0] * imgage.width;
      const y = position[1] * imgage.height;
      const data = `url("${imgage.uri}") ${x} ${y}, ${cursorData}`;
      setCursor(name, data);
    }
    cursor_name_block() {
      return cursorName;
    }
    cursor_data_block() {
      return cursorData;
    }
  }

  Scratch.extensions.register(new Mouse());
})(Scratch);
