// Name: Comment Blocks
// ID: truefantomcommentblocks
// Description: Annotate and structure your scripts.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>

(Scratch => {
  "use strict";

  const iconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMzAzLC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTI3LjMyMzA0LDE4MGMwLC02Mi4yMzAwMSA1MC40NDczOSwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3MzkgMTEyLjY3NzQsMTEyLjY3NzRjMCw2Mi4yMzAwMSAtNTAuNDQ3MzksMTEyLjY3NzQgLTExMi42Nzc0LDExMi42Nzc0Yy02Mi4yMzAwMSwwIC0xMTIuNjc3NCwtNTAuNDQ3MzkgLTExMi42Nzc0LC0xMTIuNjc3NHoiIGZpbGw9IiNkNmNmODMiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMTcuMjcxMDcsMTIyLjQ1MjI3aDIxLjc2MTc3bC00Mi44Nzg2OSwxMTUuMDk1NDdoLTIxLjc2MTc3eiIvPjxwYXRoIGQ9Ik0yODMuODQ1ODcsMTIyLjQ1MjI3aDIxLjc2MTc3bC00Mi44Nzg2OSwxMTUuMDk1NDdoLTIxLjc2MTc3eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
  const commentURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCwwLDIyLjU0NTQ0LDE5LjE4NDM3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4LjcyNzMsLTE3MC40MDc4MykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzYuNjU1ODMsMTcxLjUzMjg0aDMuMjAxODhsLTYuMzA4ODgsMTYuOTM0MzdoLTMuMjAxODh6IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Yzk1NWYiIHN0cm9rZS13aWR0aD0iMi4yNSIvPjxwYXRoIGQ9Ik0yNDYuNDUxMiwxNzEuNTMyODRoMy4yMDE4OGwtNi4zMDg4OCwxNi45MzQzN2gtMy4yMDE4OHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzljOTU1ZiIgc3Ryb2tlLXdpZHRoPSIyLjI1Ii8+PHBhdGggZD0iTTIzNi42NTU4MiwxNzEuNTMyODNoMy4yMDE4OGwtNi4zMDg4OCwxNi45MzQzN2gtMy4yMDE4OHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+PHBhdGggZD0iTTI0Ni40NTExOSwxNzEuNTMyODNoMy4yMDE4OGwtNi4zMDg4OCwxNi45MzQzN2gtMy4yMDE4OHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+PC9nPjwvZz48L3N2Zz4=";
  const separatorURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCwwLDIxLjUzMzksNS43NTYwMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyOS4yMzMwNSwtMTc3LjEyMikiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNDkuNjQxOTUsMTgxLjc1M2gtMTkuMjgzOXYtMy41MDYwMWgxOS4yODM5eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWM5NTVmIiBzdHJva2Utd2lkdGg9IjIuMjUiLz48cGF0aCBkPSJNMjQ5LjY0MTk1LDE4MS43NTNoLTE5LjI4Mzl2LTMuNTA2MDFoMTkuMjgzOXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+PC9nPjwvZz48L3N2Zz4=";

  class CommentBlocks {
    getInfo() {
      return {
        id: "truefantomcommentblocks",
        name: "Comments",
        color1: "#d6cf83",
        color2: "#bab372",
        color3: "#9c955f",
        menuIconURI: iconURI,
        blocks: [
          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: "[COMMENT_IMAGE] [COMMENT]",
            isEdgeActivated: false,
            arguments: {
              COMMENT_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: commentURI,
              },
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "[COMMENT_IMAGE] [COMMENT]",
            arguments: {
              COMMENT_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: commentURI,
              },
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentConditional",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "[COMMENT_IMAGE] [CONDITIONAL_MODE] [COMMENT]",
            arguments: {
              COMMENT_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: commentURI,
              },
              CONDITIONAL_MODE: {
                type: Scratch.ArgumentType.STRING,
                menu: "сonditional",
              },
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---",
          {
            opcode: "separatorHat",
            blockType: Scratch.BlockType.HAT,
            text: "[SEPARATOR_IMAGE] [SEPARATOR_IMAGE] [SEPARATOR_IMAGE]",
            isEdgeActivated: false,
            arguments: {
              SEPARATOR_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: separatorURI,
              },
            },
          },
          {
            opcode: "separatorCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "[SEPARATOR_IMAGE] [SEPARATOR_IMAGE] [SEPARATOR_IMAGE]",
            arguments: {
              SEPARATOR_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: separatorURI,
              },
            },
          },
          {
            opcode: "separatorConditional",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "[SEPARATOR_IMAGE] [SEPARATOR_IMAGE] [SEPARATOR_IMAGE] [CONDITIONAL_MODE]",
            arguments: {
              SEPARATOR_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: separatorURI,
              },
              CONDITIONAL_MODE: {
                type: Scratch.ArgumentType.STRING,
                menu: "сonditional",
              },
            },
          },
          "---",
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUT] [COMMENT_IMAGE] [COMMENT]",
            arguments: {
              COMMENT_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: commentURI,
              },
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUT] [COMMENT_IMAGE] [COMMENT]",
            arguments: {
              COMMENT_IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: commentURI,
              },
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
        ],
        menus: {
          сonditional: {
            items: ["working", "nonworking"],
            acceptReporters: false,
          },
        },
      };
    }

    commentHat() {
      // no options
    }
    commentCommand() {
      // no options
    }
    commentConditional(args, util) {
      if (args.CONDITIONAL_MODE === "working") {
        return true;
      }
      else {
        // no options
      }
    }
    separatorHat() {
      // no options
    }
    separatorCommand() {
      // no options
    }
    separatorConditional(args, util) {
      if (args.CONDITIONAL_MODE === "working") {
        return true;
      }
      else {
        // no options
      }
    }
    commentReporter(args) {
      return args.INPUT;
    }
    commentBoolean(args) {
      return args.INPUT === undefined ? false : args.INPUT;
    }
  }
  Scratch.extensions.register(new CommentBlocks());
})(Scratch);
