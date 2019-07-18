(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        177: function (e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                l = a.n(n),
                r = a(185);
            t.default = function () {
                return l.a.createElement(r.a, null);
            };
        },
        180: function (e, t, a) {
            var n;
            e.exports = ((n = a(184)) && n.default) || n;
        },
        181: function (e, t) {
            e.exports = {
                siteTitle: 'Daria Kozielecka portfolio',
                pathPrefix: '/dkozielecka-portfolio/',
                heading: 'Daria Kozielecka',
                subHeading:
                    "Full time JavaScript apps developer. Part time I'm looking some adrealin ",
                socialLinks: [
                    {
                        style: 'brands',
                        icon: 'fa-github',
                        name: 'Github',
                        url: 'https://github.com/dkozielecka',
                    },
                    {
                        style: 'brands',
                        icon: 'fa-linkedin',
                        name: 'Linkedin',
                        url: 'https://www.linkedin.com/in/dkozielecka/',
                    },
                    {
                        style: 'solid',
                        icon: 'fa-envelope',
                        name: 'Email',
                        url: 'mailto:daria.kozielecka@gmail.com',
                    },
                ],
            };
        },
        182: function (e, t, a) {
            'use strict';
            var n = a(188),
                l = a.n(n),
                r = a(0),
                o = a.n(r);
            var i = function (e) {
                    return e.children;
                },
                c = (function (e) {
                    var t, a;

                    function n() {
                        for (
                            var t, a = arguments.length, n = new Array(a), l = 0;
                            l < a;
                            l++
                        )
                            n[l] = arguments[l];
                        return (
                            ((t =
                                e.call.apply(e, [this].concat(n)) ||
                                this).handleClick = function (e) {
                                e.preventDefault();
                                var a = 0,
                                    n = !0,
                                    l = t.props,
                                    r = l.type,
                                    o = l.element,
                                    i = l.offset,
                                    c = l.timeout;
                                if (r && o)
                                    switch (r) {
                                        case 'class':
                                            n = !!(a = document.getElementsByClassName(o)[0]);
                                            break;
                                        case 'id':
                                            n = !!(a = document.getElementById(o));
                                    }
                                n
                                    ? t.scrollTo(a, i, c)
                                    : console.log('Element not found: ' + o);
                            }),
                                t
                        );
                    }

                    (a = e),
                        ((t = n).prototype = Object.create(a.prototype)),
                        (t.prototype.constructor = t),
                        (t.__proto__ = a);
                    var r = n.prototype;
                    return (
                        (r.componentDidMount = function () {
                            l.a.polyfill();
                        }),
                            (r.scrollTo = function (e, t, a) {
                                void 0 === t && (t = 0), void 0 === a && (a = null);
                                var n = e
                                    ? e.getBoundingClientRect().top + window.pageYOffset
                                    : 0;
                                a
                                    ? setTimeout(function () {
                                        window.scroll({top: n + t, left: 0, behavior: 'smooth'});
                                    }, a)
                                    : window.scroll({top: n + t, left: 0, behavior: 'smooth'});
                            }),
                            (r.render = function () {
                                return o.a.createElement(
                                    i,
                                    null,
                                    'object' == typeof this.props.children
                                        ? o.a.cloneElement(this.props.children, {
                                            onClick: this.handleClick,
                                        })
                                        : o.a.createElement(
                                        'span',
                                        {onClick: this.handleClick},
                                        this.props.children
                                        )
                                );
                            }),
                            n
                    );
                })(o.a.Component);
            t.a = c;
        },
        183: function (e) {
            e.exports = {
                data: {
                    site: {siteMetadata: {title: 'Daria Kozielecka portfolio'}},
                },
            };
        },
        184: function (e, t, a) {
            'use strict';
            a.r(t);
            a(23);
            var n = a(0),
                l = a.n(n),
                r = a(84);
            t.default = function (e) {
                var t = e.location,
                    a = e.pageResources;
                return a
                    ? l.a.createElement(
                        r.a,
                        Object.assign({location: t, pageResources: a}, a.json)
                    )
                    : null;
            };
        },
        185: function (e, t, a) {
            'use strict';
            var n = a(183),
                l = (a(186), a(0)),
                r = a.n(l),
                o = a(58),
                i = a.n(o),
                c = (a(180), r.a.createContext({}));

            function u(e) {
                var t = e.staticQueryData,
                    a = e.data,
                    n = e.query,
                    l = e.render,
                    o = a ? a.data : t[n] && t[n].data;
                return r.a.createElement(
                    r.a.Fragment,
                    null,
                    o && l(o),
                    !o && r.a.createElement('div', null, 'Loading (StaticQuery)')
                );
            }

            var s = function (e) {
                var t = e.data,
                    a = e.query,
                    n = e.render,
                    l = e.children;
                return r.a.createElement(c.Consumer, null, function (e) {
                    return r.a.createElement(u, {
                        data: t,
                        query: a,
                        render: n || l,
                        staticQueryData: e,
                    });
                });
            };
            var m = a(187),
                d = a.n(m),
                p = (a(33), a(181)),
                f = a.n(p);

            function E() {
                return r.a.createElement(
                    'footer',
                    {id: 'footer'},
                    r.a.createElement(
                        'ul',
                        {className: 'icons'},
                        f.a.socialLinks.map(function (e) {
                            var t = e.style,
                                a = e.icon,
                                n = e.name,
                                l = e.url;
                            return r.a.createElement(
                                'li',
                                {key: l},
                                r.a.createElement(
                                    'a',
                                    {
                                        href: l,
                                        className: 'icon ' + t + ' ' + a,
                                        target: '_blank',
                                    },
                                    r.a.createElement('span', {className: 'label'}, n)
                                )
                            );
                        })
                    ),
                    r.a.createElement(
                        'ul',
                        {className: 'copyright'},
                        r.a.createElement('li', null, '© Spectral'),
                        r.a.createElement('li', null, 'Daria Kozielecka'),
                        r.a.createElement(
                            'li',
                            null,
                            'Design: ',
                            r.a.createElement('a', {href: 'http://html5up.net'}, 'HTML5 UP')
                        )
                    )
                );
            }

            var h = a(182);

            function v(e) {
                var t = e.onMenuToggle,
                    a = void 0 === t ? function () {
                    } : t;
                return r.a.createElement(
                    'nav',
                    {id: 'nav'},
                    r.a.createElement(
                        'ul',
                        null,
                        r.a.createElement(
                            'li',
                            {className: 'special'},
                            r.a.createElement(
                                'a',
                                {
                                    href: '#menu',
                                    onClick: function (e) {
                                        e.preventDefault(), a();
                                    },
                                    className: 'menuToggle',
                                },
                                r.a.createElement('span', null, 'Menu')
                            ),
                            r.a.createElement(
                                'div',
                                {id: 'menu'},
                                r.a.createElement(
                                    'ul',
                                    null,
                                    r.a.createElement(
                                        'li',
                                        null,
                                        r.a.createElement(
                                            h.a,
                                            {type: 'id', element: 'banner'},
                                            r.a.createElement(i.a, {to: '#'}, 'Home')
                                        )
                                    ),
                                    r.a.createElement(
                                        'li',
                                        null,
                                        r.a.createElement(
                                            h.a,
                                            {type: 'id', element: 'one'},
                                            r.a.createElement(i.a, {to: '#'}, 'About me')
                                        )
                                    ),
                                    r.a.createElement(
                                        'li',
                                        null,
                                        r.a.createElement(
                                            h.a,
                                            {type: 'id', element: 'two'},
                                            r.a.createElement(i.a, {to: '#'}, 'Projects')
                                        )
                                    ),
                                    r.a.createElement(
                                        'li',
                                        null,
                                        r.a.createElement(
                                            h.a,
                                            {type: 'id', element: 'three'},
                                            r.a.createElement(i.a, {to: '#'}, 'Skills')
                                        )
                                    ),
                                    r.a.createElement(
                                        'li',
                                        null,
                                        r.a.createElement(
                                            h.a,
                                            {type: 'id', element: 'footer'},
                                            r.a.createElement(i.a, {to: '#'}, 'Social media')
                                        )
                                    )
                                ),
                                r.a.createElement('a', {
                                    className: 'close',
                                    onClick: function (e) {
                                        e.preventDefault(), a();
                                    },
                                    href: '#menu',
                                })
                            )
                        )
                    )
                );
            }

            function y(e) {
                var t = e.fullMenu,
                    a = Object(l.useState)(!1),
                    n = a[0],
                    o = a[1];
                return r.a.createElement(
                    'header',
                    {id: 'header', className: t ? '' : 'alt'},
                    r.a.createElement(
                        'h1',
                        null,
                        r.a.createElement(i.a, {to: '/'}, 'dkozielecka')
                    ),
                    r.a.createElement(
                        'div',
                        {className: n ? 'is-menu-visible' : ' '},
                        r.a.createElement(v, {
                            onMenuToggle: function () {
                                return o(!n);
                            },
                        })
                    )
                );
            }

            var k = (function (e) {
                var t, a;

                function l() {
                    for (var t, a = arguments.length, n = new Array(a), l = 0; l < a; l++)
                        n[l] = arguments[l];
                    return (
                        ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                            isPreloaded: !0,
                        }),
                            t
                    );
                }

                (a = e),
                    ((t = l).prototype = Object.create(a.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = a);
                var o = l.prototype;
                return (
                    (o.componentDidMount = function () {
                        var e = this;
                        this.timeoutId = setTimeout(function () {
                            e.setState({isPreloaded: !1});
                        }, 100);
                    }),
                        (o.componentWillUnmount = function () {
                            this.timeoutId && clearTimeout(this.timeoutId);
                        }),
                        (o.render = function () {
                            var e = this.props,
                                t = e.children,
                                a = e.fullMenu,
                                l = this.state.isPreloaded;
                            return r.a.createElement(s, {
                                query: '1044757290',
                                render: function (e) {
                                    return r.a.createElement(
                                        r.a.Fragment,
                                        null,
                                        r.a.createElement(
                                            d.a,
                                            {
                                                title: e.site.siteMetadata.title,
                                                meta: [
                                                    {name: 'description', content: 'dkozielecka'},
                                                    {name: 'keywords', content: 'site, web'},
                                                ],
                                            },
                                            r.a.createElement('html', {lang: 'pl'})
                                        ),
                                        r.a.createElement(
                                            'div',
                                            {
                                                className: l
                                                    ? 'landing main-body is-preload'
                                                    : 'landing main-body',
                                            },
                                            r.a.createElement(
                                                'div',
                                                {id: 'page-wrapper'},
                                                r.a.createElement(y, {fullMenu: a}),
                                                t,
                                                r.a.createElement(E, null)
                                            )
                                        )
                                    );
                                },
                                data: n,
                            });
                        }),
                        l
                );
            })(l.Component);
            t.a = k;
        },
    },
]);
//# sourceMappingURL=component---src-pages-elements-js-cd90579f3fa2a7f9be38.js.map
