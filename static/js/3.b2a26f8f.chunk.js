(this.webpackJsonpweather_forecast_app =
  this.webpackJsonpweather_forecast_app || []).push([
  [3],
  {
    14: function (t, e, n) {
      'use strict'
      n.r(e),
      n.d(e, 'getCLS', function () {
        return d
      }),
      n.d(e, 'getFCP', function () {
        return S
      }),
      n.d(e, 'getFID', function () {
        return F
      }),
      n.d(e, 'getLCP', function () {
        return k
      }),
      n.d(e, 'getTTFB', function () {
        return C
      })
      let i
      let a
      let r
      let o
      const u = function (t, e) {
        return {
          name: t,
          value: void 0 === e ? -1 : e,
          delta: 0,
          entries: [],
          id: 'v1-'
            .concat(Date.now(), '-')
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
      }
      const c = function (t, e) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            if (t === 'first-input' && !('PerformanceEventTiming' in self)) {
              return
            }
            const n = new PerformanceObserver(function (t) {
              return t.getEntries().map(e)
            })
            return n.observe({ type: t, buffered: !0 }), n
          }
        } catch (t) {}
      }
      const f = function (t, e) {
        const n = function n (i) {
          (i.type !== 'pagehide' && document.visibilityState !== 'hidden') ||
            (t(i),
            e &&
              (removeEventListener('visibilitychange', n, !0),
              removeEventListener('pagehide', n, !0)))
        }
        addEventListener('visibilitychange', n, !0),
        addEventListener('pagehide', n, !0)
      }
      const s = function (t) {
        addEventListener(
          'pageshow',
          function (e) {
            e.persisted && t(e)
          },
          !0
        )
      }
      const p = typeof WeakSet === 'function' ? new WeakSet() : new Set()
      const m = function (t, e, n) {
        let i
        return function () {
          e.value >= 0 &&
            (n || p.has(e) || document.visibilityState === 'hidden') &&
            ((e.delta = e.value - (i || 0)),
            (e.delta || void 0 === i) && ((i = e.value), t(e)))
        }
      }
      var d = function (t, e) {
        let n
        let i = u('CLS', 0)
        const a = function (t) {
          t.hadRecentInput || ((i.value += t.value), i.entries.push(t), n())
        }
        const r = c('layout-shift', a)
        r &&
          ((n = m(t, i, e)),
          f(function () {
            r.takeRecords().map(a), n()
          }),
          s(function () {
            (i = u('CLS', 0)), (n = m(t, i, e))
          }))
      }
      let v = -1
      const l = function () {
        return document.visibilityState === 'hidden' ? 0 : 1 / 0
      }
      const h = function () {
        f(function (t) {
          const e = t.timeStamp
          v = e
        }, !0)
      }
      const g = function () {
        return (
          v < 0 &&
            ((v = l()),
            h(),
            s(function () {
              setTimeout(function () {
                (v = l()), h()
              }, 0)
            })),
          {
            get timeStamp () {
              return v
            }
          }
        )
      }
      var S = function (t, e) {
        let n
        const i = g()
        let a = u('FCP')
        const r = function (t) {
          t.name === 'first-contentful-paint' &&
            (f && f.disconnect(),
            t.startTime < i.timeStamp &&
              ((a.value = t.startTime), a.entries.push(t), p.add(a), n()))
        }
        const o = performance.getEntriesByName('first-contentful-paint')[0]
        var f = o ? null : c('paint', r);
        (o || f) &&
          ((n = m(t, a, e)),
          o && r(o),
          s(function (i) {
            (a = u('FCP')),
            (n = m(t, a, e)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (a.value = performance.now() - i.timeStamp), p.add(a), n()
              })
            })
          }))
      }
      const y = { passive: !0, capture: !0 }
      const w = new Date()
      const E = function (t, e) {
        i || ((i = e), (a = t), (r = new Date()), b(removeEventListener), L())
      }
      var L = function () {
        if (a >= 0 && a < r - w) {
          const t = {
            entryType: 'first-input',
            name: i.type,
            target: i.target,
            cancelable: i.cancelable,
            startTime: i.timeStamp,
            processingStart: i.timeStamp + a
          }
          o.forEach(function (e) {
            e(t)
          }),
          (o = [])
        }
      }
      const T = function (t) {
        if (t.cancelable) {
          const e =
            (t.timeStamp > 1e12 ? new Date() : performance.now()) - t.timeStamp
          t.type == 'pointerdown'
            ? (function (t, e) {
                const n = function () {
                  E(t, e), a()
                }
                const i = function () {
                  a()
                }
                var a = function () {
                  removeEventListener('pointerup', n, y),
                  removeEventListener('pointercancel', i, y)
                }
                addEventListener('pointerup', n, y),
                addEventListener('pointercancel', i, y)
              })(e, t)
            : E(e, t)
        }
      }
      var b = function (t) {
        ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (
          e
        ) {
          return t(e, T, y)
        })
      }
      var F = function (t, e) {
        let n
        const r = g()
        let d = u('FID')
        const v = function (t) {
          t.startTime < r.timeStamp &&
            ((d.value = t.processingStart - t.startTime),
            d.entries.push(t),
            p.add(d),
            n())
        }
        const l = c('first-input', v);
        (n = m(t, d, e)),
        l &&
            f(function () {
              l.takeRecords().map(v), l.disconnect()
            }, !0),
        l &&
            s(function () {
              let r;
              (d = u('FID')),
              (n = m(t, d, e)),
              (o = []),
              (a = -1),
              (i = null),
              b(addEventListener),
              (r = v),
              o.push(r),
              L()
            })
      }
      var k = function (t, e) {
        let n
        const i = g()
        let a = u('LCP')
        const r = function (t) {
          const e = t.startTime
          e < i.timeStamp && ((a.value = e), a.entries.push(t)), n()
        }
        const o = c('largest-contentful-paint', r)
        if (o) {
          n = m(t, a, e)
          const d = function () {
            p.has(a) || (o.takeRecords().map(r), o.disconnect(), p.add(a), n())
          };
          ['keydown', 'click'].forEach(function (t) {
            addEventListener(t, d, { once: !0, capture: !0 })
          }),
          f(d, !0),
          s(function (i) {
            (a = u('LCP')),
            (n = m(t, a, e)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (a.value = performance.now() - i.timeStamp), p.add(a), n()
              })
            })
          })
        }
      }
      var C = function (t) {
        let e
        const n = u('TTFB');
        (e = function () {
          try {
            const e =
              performance.getEntriesByType('navigation')[0] ||
              (function () {
                const t = performance.timing
                const e = { entryType: 'navigation', startTime: 0 }
                for (const n in t) {
                  n !== 'navigationStart' &&
                    n !== 'toJSON' &&
                    (e[n] = Math.max(t[n] - t.navigationStart, 0))
                }
                return e
              })()
            if (((n.value = n.delta = e.responseStart), n.value < 0)) return;
            (n.entries = [e]), t(n)
          } catch (t) {}
        }),
        document.readyState === 'complete'
          ? setTimeout(e, 0)
          : addEventListener('pageshow', e)
      }
    }
  }
])
// # sourceMappingURL=3.b2a26f8f.chunk.js.map
