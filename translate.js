(function(Scratch) {
  'use strict';

  Scratch.translate.setup({
    en: {
      name: 'Test',
      testblock: 'test block'
    },
    ru: {
      name: 'Тест',
      testblock: 'тест блок'
    },
    zh: {
      name: '测试',
      testblock: '测试块'
    },
  });

  class TestClass {
    getInfo() {
      return {
        id: 'testl10n',
        name: Scratch.translate({id: 'name', default: 'Test'}),
        blocks: [
          {
            opcode: 'TestBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({id: 'testblock', default: 'test block'})
          }
        ]
      };
    }

    TestBlock() {
      return '';
    }
  }

  Scratch.extensions.register(new TestClass());
})(Scratch);
