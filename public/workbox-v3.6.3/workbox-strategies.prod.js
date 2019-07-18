this.workbox = this.workbox || {}, this.workbox.strategies = function (e, t, s) {
    "use strict";
    try {
        self.workbox.v["workbox:strategies:3.6.3"] = 1
    } catch (e) {
    }

    class r {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.s = t.fetchOptions || null, this.r = t.matchOptions || null
        }

        handle({event: e}) {
            var t = this;
            return babelHelpers.asyncToGenerator(function* () {
                return t.makeRequest({event: e, request: e.request})
            })()
        }

        makeRequest({event: e, request: s}) {
            var r = this;
            return babelHelpers.asyncToGenerator(function* () {
                "string" == typeof s && (s = new Request(s));
                let n, i = yield t.cacheWrapper.match({
                    cacheName: r.e,
                    request: s,
                    event: e,
                    matchOptions: r.r,
                    plugins: r.t
                });
                if (!i) try {
                    i = yield r.n(s, e)
                } catch (e) {
                    n = e
                }
                if (n) throw n;
                return i
            })()
        }

        n(e, r) {
            var n = this;
            return babelHelpers.asyncToGenerator(function* () {
                const i = yield s.fetchWrapper.fetch({request: e, event: r, fetchOptions: n.s, plugins: n.t}),
                    u = i.clone(),
                    l = t.cacheWrapper.put({cacheName: n.e, request: e, response: u, event: r, plugins: n.t});
                if (r) try {
                    r.waitUntil(l)
                } catch (e) {
                }
                return i
            })()
        }
    }

    class n {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.r = t.matchOptions || null
        }

        handle({event: e}) {
            var t = this;
            return babelHelpers.asyncToGenerator(function* () {
                return t.makeRequest({event: e, request: e.request})
            })()
        }

        makeRequest({event: e, request: s}) {
            var r = this;
            return babelHelpers.asyncToGenerator(function* () {
                return "string" == typeof s && (s = new Request(s)), yield t.cacheWrapper.match({
                    cacheName: r.e,
                    request: s,
                    event: e,
                    matchOptions: r.r,
                    plugins: r.t
                })
            })()
        }
    }

    var i = {cacheWillUpdate: ({response: e}) => e.ok || 0 === e.status ? e : null};

    class u {
        constructor(t = {}) {
            if (this.e = e.cacheNames.getRuntimeName(t.cacheName), t.plugins) {
                let e = t.plugins.some(e => !!e.cacheWillUpdate);
                this.t = e ? t.plugins : [i, ...t.plugins]
            } else this.t = [i];
            this.i = t.networkTimeoutSeconds, this.s = t.fetchOptions || null, this.r = t.matchOptions || null
        }

        handle({event: e}) {
            var t = this;
            return babelHelpers.asyncToGenerator(function* () {
                return t.makeRequest({event: e, request: e.request})
            })()
        }

        makeRequest({event: e, request: t}) {
            var s = this;
            return babelHelpers.asyncToGenerator(function* () {
                const r = [];
                "string" == typeof t && (t = new Request(t));
                const n = [];
                let i;
                if (s.i) {
                    const {id: u, promise: l} = s.u({request: t, event: e, logs: r});
                    i = u, n.push(l)
                }
                const u = s.l({timeoutId: i, request: t, event: e, logs: r});
                n.push(u);
                let l = yield Promise.race(n);
                return l || (l = yield u), l
            })()
        }

        u({request: e, logs: t, event: s}) {
            var r = this;
            let n;
            var i;
            return {
                promise: new Promise(t => {
                    const u = (i = babelHelpers.asyncToGenerator(function* () {
                        t(yield r.c({request: e, event: s}))
                    }), function () {
                        return i.apply(this, arguments)
                    });
                    n = setTimeout(u, 1e3 * this.i)
                }), id: n
            }
        }

        l({timeoutId: e, request: r, logs: n, event: i}) {
            var u = this;
            return babelHelpers.asyncToGenerator(function* () {
                let n, l;
                try {
                    l = yield s.fetchWrapper.fetch({request: r, event: i, fetchOptions: u.s, plugins: u.t})
                } catch (e) {
                    n = e
                }
                if (e && clearTimeout(e), n || !l) l = yield u.c({request: r, event: i}); else {
                    const e = l.clone(),
                        s = t.cacheWrapper.put({cacheName: u.e, request: r, response: e, event: i, plugins: u.t});
                    if (i) try {
                        i.waitUntil(s)
                    } catch (e) {
                    }
                }
                return l
            })()
        }

        c({event: e, request: s}) {
            return t.cacheWrapper.match({
                cacheName: this.e,
                request: s,
                event: e,
                matchOptions: this.r,
                plugins: this.t
            })
        }
    }

    class l {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.s = t.fetchOptions || null
        }

        handle({event: e}) {
            var t = this;
            return babelHelpers.asyncToGenerator(function* () {
                return t.makeRequest({event: e, request: e.request})
            })()
        }

        makeRequest({event: e, request: t}) {
            var r = this;
            return babelHelpers.asyncToGenerator(function* () {
                let n, i;
                "string" == typeof t && (t = new Request(t));
                try {
                    i = yield s.fetchWrapper.fetch({request: t, event: e, fetchOptions: r.s, plugins: r.t})
                } catch (e) {
                    n = e
                }
                if (n) throw n;
                return i
            })()
        }
    }

    class c {
        constructor(t = {}) {
            if (this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], t.plugins) {
                let e = t.plugins.some(e => !!e.cacheWillUpdate);
                this.t = e ? t.plugins : [i, ...t.plugins]
            } else this.t = [i];
            this.s = t.fetchOptions || null, this.r = t.matchOptions || null
        }

        handle({event: e}) {
            var t = this;
            return babelHelpers.asyncToGenerator(function* () {
                return t.makeRequest({event: e, request: e.request})
            })()
        }

        makeRequest({event: e, request: s}) {
            var r = this;
            return babelHelpers.asyncToGenerator(function* () {
                "string" == typeof s && (s = new Request(s));
                const n = r.n({request: s, event: e});
                let i = yield t.cacheWrapper.match({
                    cacheName: r.e,
                    request: s,
                    event: e,
                    matchOptions: r.r,
                    plugins: r.t
                });
                if (i) {
                    if (e) try {
                        e.waitUntil(n)
                    } catch (e) {
                    }
                } else i = yield n;
                return i
            })()
        }

        n({request: e, event: r}) {
            var n = this;
            return babelHelpers.asyncToGenerator(function* () {
                const i = yield s.fetchWrapper.fetch({request: e, event: r, fetchOptions: n.s, plugins: n.t}),
                    u = t.cacheWrapper.put({cacheName: n.e, request: e, response: i.clone(), event: r, plugins: n.t});
                if (r) try {
                    r.waitUntil(u)
                } catch (e) {
                }
                return i
            })()
        }
    }

    var o = Object.freeze({CacheFirst: r, CacheOnly: n, NetworkFirst: u, NetworkOnly: l, StaleWhileRevalidate: c});
    const a = {cacheFirst: r, cacheOnly: n, networkFirst: u, networkOnly: l, staleWhileRevalidate: c}, h = {};
    return Object.keys(a).forEach(e => {
        h[e] = ((t = {}) => {
            return new (0, a[e])(Object.assign(t))
        })
    }), Object.assign(h, o)
}(workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-strategies.prod.js.map
