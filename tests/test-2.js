(Scratch => {
  'use strict';

  const UrlFunction = (A) => {
    try {
      return String(new URL(String(A)));
    } catch(err) {
      try {
        return String(new URL('https://' + String(A)));
      } catch(err) {
        return 'https://turbowarp.org';
      }
    }
  };

  class Fetch {

    getInfo () {
      return {

        id: 'fetch',
        name: 'Fetch',

        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.CUSTOM,
                menu: Scratch.ArgumentMenu.TEXT,
                menuText: 'enter url here',
                characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.~:/?#[]@!$&\'()*+,;=',
                function: UrlFunction,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      }
    }

    get (args) {
      return fetch(args.URL)
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
