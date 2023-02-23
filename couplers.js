(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjY5LC02Ny4zMjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMjcuMzIyNywxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNDA0MDQwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTY4Ljc3NTgsMjI5Ljg1Njk1YzAsLTExLjgwMDgyIDkuNTY2NDQsLTIxLjM2NzI3IDIxLjM2NzI2LC0yMS4zNjcyN2MzLjE4MzU4LDAuMDE4ODggNi4zMjI3MiwwLjc0ODg5IDkuMTg3OTMsMi4xMzY3M2wxNi4yMzkxMSwtMTYuMzgxNTdjLTUuMjcyMzMsLTguNzY0NzggLTUuMjcyMzMsLTE5LjcyNDkgMCwtMjguNDg5NjhsLTkuMTE2NywtOS4yNTkxNWMtMi44NjUyMSwxLjM4Nzg0IC02LjAwNDM0LDIuMTE3ODUgLTkuMTg3OTIsMi4xMzY3MmMtMTEuODAwODIsMCAtMjEuMzY3MjYsLTkuNTY2NDQgLTIxLjM2NzI2LC0yMS4zNjcyNmMwLC0xMS44MDA4MiA5LjU2NjQ0LC0yMS4zNjcyNyAyMS4zNjcyNiwtMjEuMzY3MjdjMTEuODAwODIsMCAyMS4zNjcyNyw5LjU2NjQ1IDIxLjM2NzI3LDIxLjM2NzI3Yy0wLjAxODg4LDMuMTgzNTggLTAuNzQ4ODksNi4zMjI3MiAtMi4xMzY3Myw5LjE4NzkybDkuMjU5MTUsOS4xMTY3YzguNzY0NzgsLTUuMjcyMzMgMTkuNzI0OSwtNS4yNzIzMyAyOC40ODk2OCwwbDE2LjM4MTU3LC0xNi4yMzkxMmMtMS4zODc4NCwtMi44NjUyMSAtMi4xMTc4NiwtNi4wMDQzMyAtMi4xMzY3MywtOS4xODc5MmMwLC0xMS44MDA4MiA5LjU2NjQ0LC0yMS4zNjcyNyAyMS4zNjcyNiwtMjEuMzY3MjdjMTEuODAwODIsMCAyMS4zNjcyNyw5LjU2NjQ1IDIxLjM2NzI3LDIxLjM2NzI3YzAsMTEuODAwODIgLTkuNTY2NDUsMjEuMzY3MjYgLTIxLjM2NzI3LDIxLjM2NzI2Yy0zLjE4MzU4LC0wLjAxODg4IC02LjMyMjcxLC0wLjc0ODg4IC05LjE4NzkyLC0yLjEzNjcybC0xNi4yMzkxMiwxNi4zODE1N2M1LjI3MjMzLDguNzY0NzggNS4yNzIzMywxOS43MjQ5IDAsMjguNDg5NjhsOC45MDMwMiw5LjQwMTZjMi45MTg0MSwtMS40Njg1IDYuMTM0NjksLTIuMjQ4MiA5LjQwMTYsLTIuMjc5MThjMTEuODAwODIsMCAyMS4zNjcyNiw5LjU2NjQ1IDIxLjM2NzI2LDIxLjM2NzI3YzAsMTEuODAwODIgLTkuNTY2NDQsMjEuMzY3MjYgLTIxLjM2NzI2LDIxLjM2NzI2Yy0xMS44MDA4MiwwIC0yMS4zNjcyNiwtOS41NjY0NCAtMjEuMzY3MjYsLTIxLjM2NzI1Yy0wLjA1ODU4LC0zLjE5MTI3IDAuNTk4NTMsLTYuMzU1MTMgMS45MjMwNSwtOS4yNTkxNWwtOS4wNDU0OCwtOS4wNDU0N2MtOC43NjQ3OCw1LjI3MjMzIC0xOS43MjQ5LDUuMjcyMzMgLTI4LjQ4OTY4LDBsLTE2LjM4MTU3LDE2LjIzOTEyYzEuMzg3ODQsMi44NjUyMSAyLjExNzg1LDYuMDA0MzUgMi4xMzY3Myw5LjE4NzkzYzAsMTEuODAwODIgLTkuNTY2NDUsMjEuMzY3MjYgLTIxLjM2NzI3LDIxLjM2NzI2Yy0xMS44MDA4MiwwIC0yMS4zNjcyNiwtOS41NjY0NCAtMjEuMzY3MjYsLTIxLjM2NzI1ek0yNzUuNjEyMTEsMjIyLjczNDUzYzAsMy45MzM2MSAzLjE4ODgyLDcuMTIyNDIgNy4xMjI0Miw3LjEyMjQyYzMuOTMzNjEsMCA3LjEyMjQxLC0zLjE4ODgyIDcuMTIyNDEsLTcuMTIyNDJjMCwtMy45MzM2IC0zLjE4ODgxLC03LjEyMjQyIC03LjEyMjQxLC03LjEyMjQyYy0zLjkzMzYsMCAtNy4xMjI0MiwzLjE4ODgyIC03LjEyMjQyLDcuMTIyNDJ6TTI4Mi43MzQ1MiwxMzAuMTQzMDZjMCwzLjkzMzYxIDMuMTg4ODEsNy4xMjI0MiA3LjEyMjQxLDcuMTIyNDJjMy45MzM2MSwwIDcuMTIyNDIsLTMuMTg4ODEgNy4xMjI0MiwtNy4xMjI0MmMwLC0zLjkzMzYgLTMuMTg4ODEsLTcuMTIyNDIgLTcuMTIyNDIsLTcuMTIyNDJjLTMuOTMzNiwwIC03LjEyMjQxLDMuMTg4ODIgLTcuMTIyNDEsNy4xMjI0MnpNMjQwLDE2NS43NTUxNmMtNy44NjcyMSwwIC0xNC4yNDQ4NCw2LjM3NzYzIC0xNC4yNDQ4NCwxNC4yNDQ4NGMwLDcuODY3MjEgNi4zNzc2MywxNC4yNDQ4NCAxNC4yNDQ4NCwxNC4yNDQ4NGM3Ljg2NzIxLDAgMTQuMjQ0ODQsLTYuMzc3NjMgMTQuMjQ0ODQsLTE0LjI0NDg0YzAsLTcuODY3MjEgLTYuMzc3NjMsLTE0LjI0NDg0IC0xNC4yNDQ4NCwtMTQuMjQ0ODR6TTE5Ny4yNjU0NywxNDQuMzg3OWMzLjkzMzYxLDAgNy4xMjI0MiwtMy4xODg4MSA3LjEyMjQyLC03LjEyMjQyYzAsLTMuOTMzNiAtMy4xODg4MSwtNy4xMjI0MiAtNy4xMjI0MiwtNy4xMjI0MmMtMy45MzM2LDAgLTcuMTIyNDIsMy4xODg4MSAtNy4xMjI0Miw3LjEyMjQyYzAsMy45MzM2MSAzLjE4ODgyLDcuMTIyNDIgNy4xMjI0Miw3LjEyMjQyek0xODMuMDIwNjQsMjI5Ljg1Njk1YzAsMy45MzM2MSAzLjE4ODgyLDcuMTIyNDIgNy4xMjI0Miw3LjEyMjQyYzMuOTMzNjEsMCA3LjEyMjQyLC0zLjE4ODgxIDcuMTIyNDIsLTcuMTIyNDJjMCwtMy45MzM2IC0zLjE4ODgyLC03LjEyMjQyIC03LjEyMjQyLC03LjEyMjQyYy0zLjkzMzYsMCAtNy4xMjI0MiwzLjE4ODgyIC03LjEyMjQyLDcuMTIyNDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MzA1OjExMi42Nzc0MDUtLT4=';

  class Couplers01 {

    getInfo() {
      return {

        id: 'truefantomcouplers01',
        name: 'Couplers',

        color1: '#404040',
        color2: '#3a3a3a',
        color3: '#333333',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'value_in_boolean_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'true_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            opcode: 'false_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          {
            opcode: 'value_in_string_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[VALUE]',
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          }
        ]
      }
    }

    value_in_boolean_block({VALUE}) {
      return VALUE;
    }
    true_block() {
      return true;
    }
    false_block() {
      return false;
    }
    value_in_string_block({VALUE}) {
      return VALUE;
    }
  }

  Scratch.extensions.register(new Couplers01());
})(Scratch);
