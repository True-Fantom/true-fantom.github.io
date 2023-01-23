(Scratch => {
  'use strict';

  var g = function (b) {
      var a = y(b);
      return null !== b && ('object' === a || 'function' === a);
    },
    I = ['__proto__', 'prototype', 'constructor'],
    H = function (b) {
      return !b.some(function (a) {
        return I.includes(a);
      });
    },
    r = {
      get: function (b, a, c) {
        if (!g(b) || 'string' !== typeof a) return void 0 === c ? b : c;
        a = p(a);
        if (0 !== a.length) {
          for (var d = 0; d < a.length; d++) {
            if (!Object.prototype.propertyIsEnumerable.call(b, a[d])) return c;
            b = b[a[d]];
            if (void 0 === b || null === b) {
              if (d !== a.length - 1) return c;
              break;
            }
          }
          return b;
        }
      },
      set: function (b, a, c) {
        if (!g(b) || 'string' !== typeof a) return b;
        var d = b;
        a = p(a);
        for (var f = 0; f < a.length; f++) {
          var e = a[f];
          g(b[e]) || (b[e] = {});
          f === a.length - 1 && (b[e] = c);
          b = b[e];
        }
        return d;
      },
      delete: function (b, a) {
        if (g(b) && 'string' === typeof a) {
          a = p(a);
          for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (c === a.length - 1) {
              delete b[d];
              break;
            }
            b = b[d];
            if (!g(b)) break;
          }
        }
      },
      has: function (b, a) {
        if (!g(b) || 'string' !== typeof a) return !1;
        a = p(a);
        if (0 === a.length) return !1;
        for (var c = 0; c < a.length; c++)
          if (g(b)) {
            if (!(a[c] in b)) return !1;
            b = b[a[c]];
          } else return !1;
        return !0;
      },
    },
    J = function (b) {
      b = b.charCodeAt(0).toString(16).toUpperCase();
      return '0x' + (b.length % 2 ? '0' : '') + b;
    },
    D = (function (b) {
      function a(b, f, e, h) {
        if (!(this instanceof a))
          throw new TypeError('Cannot call a class as a function');
        var d = e || 20;
        if (f) {
          var k = b.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);
          e = k
            ? +k[2]
            : b.message.match(/^Unexpected end of JSON.*/i)
            ? f.length - 1
            : null;
          k = k
            ? b.message.replace(
                /^Unexpected token ./,
                'Unexpected token '
                  .concat(JSON.stringify(k[1]), ' (')
                  .concat(J(k[1]), ')')
              )
            : b.message;
          if (null !== e && void 0 !== e) {
            var g = e <= d ? 0 : e - d;
            d = e + d >= f.length ? f.length : e + d;
            d =
              (0 === g ? '' : '...') +
              f.slice(g, d) +
              (d === f.length ? '' : '...');
            e = {
              message:
                k +
                ' while parsing '
                  .concat(f === d ? '' : 'near ')
                  .concat(JSON.stringify(d)),
              position: e,
            };
          } else
            e = {
              message: k + " while parsing '".concat(f.slice(0, 2 * d), "'"),
              position: 0,
            };
        } else
          e = {
            message: b.message + ' while parsing empty string',
            position: 0,
          };
        f = c.call(this, e.message);
        Object.assign(w(f), e);
        f.code = 'EJSONPARSE';
        f.systemError = b;
        Error.captureStackTrace(w(f), h || f.constructor);
        return f;
      }
      F(a, b);
      var c = G(a);
      E(a, [
        {
          key: 'name',
          get: function () {
            return this.constructor.name;
          },
          set: function (a) {},
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return this.constructor.name;
          },
        },
      ]);
      return a;
    })(v(SyntaxError)),
    K = Symbol.for('indent'),
    L = Symbol.for('newline'),
    M = /^\s*[{\[]((?:\r?\n)+)([\s\t]*)/,
    l = function f(a, c, d) {
      var e = String(a).replace(/^\uFEFF/, '');
      d = d || 20;
      try {
        var h = e.match(M) || [, '', ''];
        var g = Array.isArray(h) ? h : void 0;
        var k;
        if (!(k = g))
          if ('undefined' !== typeof Symbol && Symbol.iterator in Object(h)) {
            g = [];
            var l = !0,
              m = !1,
              n = void 0;
            try {
              for (
                var p = h[Symbol.iterator](), r;
                !(l = (r = p.next()).done) && (g.push(r.value), 3 !== g.length);
                l = !0
              );
            } catch (z) {
              (m = !0), (n = z);
            } finally {
              try {
                if (!l && null != p['return']) p['return']();
              } finally {
                if (m) throw n;
              }
            }
            k = g;
          } else k = void 0;
        var t;
        if (!(t = k))
          a: {
            if (h) {
              if ('string' === typeof h) {
                t = C(h, 3);
                break a;
              }
              var u = Object.prototype.toString.call(h).slice(8, -1);
              'Object' === u && h.constructor && (u = h.constructor.name);
              if ('Map' === u || 'Set' === u) {
                t = Array.from(h);
                break a;
              }
              if (
                'Arguments' === u ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
              ) {
                t = C(h, 3);
                break a;
              }
            }
            t = void 0;
          }
        var q;
        if (!(q = t))
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        var v = q[1],
          w = q[2],
          x = JSON.parse(e, c);
        x && 'object' === y(x) && ((x[L] = v), (x[K] = w));
        return x;
      } catch (z) {
        if ('string' !== typeof a && !Buffer.isBuffer(a))
          throw (
            ((c = Array.isArray(a) && 0 === a.length),
            Object.assign(
              new TypeError(
                'Cannot parse '.concat(c ? 'an empty array' : String(a))
              ),
              { code: 'EJSONPARSE', systemError: z }
            ))
          );
        throw new D(z, e, d, f);
      }
    };
  l.JSONParseError = D;
  l.noExceptions = function (a, c) {
    try {
      return JSON.parse(String(a).replace(/^\uFEFF/, ''), c);
    } catch (d) {}
  };

  class N {
    getInfo() {
      return {
        id: 'DotProp',
        name: 'Dot Prop',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get [path] from [object] and use [defaultValue] if not found',
            arguments: {
              path: { type: Scratch.ArgumentType.STRING, defaultValue: 'a.b' },
              object: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":{"b":"Hello World"}}',
              },
              defaultValue: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Value not found',
              },
            },
          },
          {
            opcode: 'set',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Set [path] in [object] to [value]',
            arguments: {
              path: { type: Scratch.ArgumentType.STRING, defaultValue: 'a.c' },
              object: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":{"b":"Hello World"}}',
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Lorem ipsum',
              },
            },
          },
          {
            opcode: 'has',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Does [object] contain [path]',
            arguments: {
              object: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":{"b":"Hello World"}}',
              },
              path: { type: Scratch.ArgumentType.STRING, defaultValue: 'a.b' },
            },
          },
          {
            opcode: 'delete',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Delete [path] from [object]',
            arguments: {
              path: { type: Scratch.ArgumentType.STRING, defaultValue: 'a.b' },
              object: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":{"b":"Hello World"}}',
              },
            },
          },
        ],
      };
    }
    get({ path: a, object: c, defaultValue: d }) {
      a = r.get(l(c), a, d);
      return 'object' === typeof a ? JSON.stringify(a) : a;
    }
    set({ path: a, object: c, value: d }) {
      return JSON.stringify(r.set(l(c), a, d));
    }
    has({ object: a, path: c }) {
      return r.has(l(a), c);
    }
    delete({ object: a, path: c }) {
      a = l(a);
      r.delete(a, c);
      return JSON.stringify(a);
    }
  }
  
  Scratch.extensions.register(new N());
})();
