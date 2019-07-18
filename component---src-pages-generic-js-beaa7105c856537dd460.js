(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        178: function (e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                i = a.n(n),
                l = a(185);
            t.default = function () {
                return i.a.createElement(
                    l.a,
                    {fullMenu: !0},
                    i.a.createElement(
                        'article',
                        {id: 'main'},
                        i.a.createElement(
                            'header',
                            null,
                            i.a.createElement('h2', null, 'Generic Page'),
                            i.a.createElement(
                                'p',
                                null,
                                'Aliquam ut ex ut interdum donec amet imperdiet eleifend'
                            )
                        ),
                        i.a.createElement(
                            'section',
                            {className: 'wrapper style5'},
                            i.a.createElement(
                                'div',
                                {className: 'inner'},
                                i.a.createElement('h3', null, 'Lorem ipsum dolor'),
                                i.a.createElement(
                                    'p',
                                    null,
                                    'Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.'
                                ),
                                i.a.createElement(
                                    'p',
                                    null,
                                    'Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.'
                                ),
                                i.a.createElement('hr', null),
                                i.a.createElement('h4', null, 'Feugiat aliquam'),
                                i.a.createElement(
                                    'p',
                                    null,
                                    'Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.'
                                ),
                                i.a.createElement(
                                    'p',
                                    null,
                                    'Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.'
                                )
                            )
                        )
                    )
                );
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
                i = a.n(n),
                l = a(0),
                r = a.n(l);
            var u = function (e) {
                    return e.children;
                },
                o = (function (e) {
                    var t, a;

                    function n() {
                        for (
                            var t, a = arguments.length, n = new Array(a), i = 0;
                            i < a;
                            i++
                        )
                            n[i] = arguments[i];
                        return (
                            ((t =
                                e.call.apply(e, [this].concat(n)) ||
                                this).handleClick = function (e) {
                                e.preventDefault();
                                var a = 0,
                                    n = !0,
                                    i = t.props,
                                    l = i.type,
                                    r = i.element,
                                    u = i.offset,
                                    o = i.timeout;
                                if (l && r)
                                    switch (l) {
                                        case 'class':
                                            n = !!(a = document.getElementsByClassName(r)[0]);
                                            break;
                                        case 'id':
                                            n = !!(a = document.getElementById(r));
                                    }
                                n
                                    ? t.scrollTo(a, u, o)
                                    : console.log('Element not found: ' + r);
                            }),
                                t
                        );
                    }

                    (a = e),
                        ((t = n).prototype = Object.create(a.prototype)),
                        (t.prototype.constructor = t),
                        (t.__proto__ = a);
                    var l = n.prototype;
                    return (
                        (l.componentDidMount = function () {
                            i.a.polyfill();
                        }),
                            (l.scrollTo = function (e, t, a) {
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
                            (l.render = function () {
                                return r.a.createElement(
                                    u,
                                    null,
                                    'object' == typeof this.props.children
                                        ? r.a.cloneElement(this.props.children, {
                                            onClick: this.handleClick,
                                        })
                                        : r.a.createElement(
                                        'span',
                                        {onClick: this.handleClick},
                                        this.props.children
                                        )
                                );
                            }),
                            n
                    );
                })(r.a.Component);
            t.a = o;
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
                i = a.n(n),
                l = a(84);
            t.default = function (e) {
                var t = e.location,
                    a = e.pageResources;
                return a
                    ? i.a.createElement(
                        l.a,
                        Object.assign({location: t, pageResources: a}, a.json)
                    )
                    : null;
            };
        },
        185: function (e, t, a) {
            'use strict';
            var n = a(183),
                i = (a(186), a(0)),
                l = a.n(i),
                r = a(58),
                u = a.n(r),
                o = (a(180), l.a.createContext({}));

            function s(e) {
                var t = e.staticQueryData,
                    a = e.data,
                    n = e.query,
                    i = e.render,
                    r = a ? a.data : t[n] && t[n].data;
                return l.a.createElement(
                    l.a.Fragment,
                    null,
                    r && i(r),
                    !r && l.a.createElement('div', null, 'Loading (StaticQuery)')
                );
            }

            var c = function (e) {
                var t = e.data,
                    a = e.query,
                    n = e.render,
                    i = e.children;
                return l.a.createElement(o.Consumer, null, function (e) {
                    return l.a.createElement(s, {
                        data: t,
                        query: a,
                        render: n || i,
                        staticQueryData: e,
                    });
                });
            };
            var m = a(187),
                d = a.n(m),
                p = (a(33), a(181)),
                f = a.n(p);

            function v() {
                return l.a.createElement(
                    'footer',
                    {id: 'footer'},
                    l.a.createElement(
                        'ul',
                        {className: 'icons'},
                        f.a.socialLinks.map(function (e) {
                            var t = e.style,
                                a = e.icon,
                                n = e.name,
                                i = e.url;
                            return l.a.createElement(
                                'li',
                                {key: i},
                                l.a.createElement(
                                    'a',
                                    {
                                        href: i,
                                        className: 'icon ' + t + ' ' + a,
                                        target: '_blank',
                                    },
                                    l.a.createElement('span', {className: 'label'}, n)
                                )
                            );
                        })
                    ),
                    l.a.createElement(
                        'ul',
                        {className: 'copyright'},
                        l.a.createElement('li', null, '© Spectral'),
                        l.a.createElement('li', null, 'Daria Kozielecka'),
                        l.a.createElement(
                            'li',
                            null,
                            'Design: ',
                            l.a.createElement('a', {href: 'http://html5up.net'}, 'HTML5 UP')
                        )
                    )
                );
            }

            var E = a(182);

            function h(e) {
                var t = e.onMenuToggle,
                    a = void 0 === t ? function () {
                    } : t;
                return l.a.createElement(
                    'nav',
                    {id: 'nav'},
                    l.a.createElement(
                        'ul',
                        null,
                        l.a.createElement(
                            'li',
                            {className: 'special'},
                            l.a.createElement(
                                'a',
                                {
                                    href: '#menu',
                                    onClick: function (e) {
                                        e.preventDefault(), a();
                                    },
                                    className: 'menuToggle',
                                },
                                l.a.createElement('span', null, 'Menu')
                            ),
                            l.a.createElement(
                                'div',
                                {id: 'menu'},
                                l.a.createElement(
                                    'ul',
                                    null,
                                    l.a.createElement(
                                        'li',
                                        null,
                                        l.a.createElement(
                                            E.a,
                                            {type: 'id', element: 'banner'},
                                            l.a.createElement(u.a, {to: '#'}, 'Home')
                                        )
                                    ),
                                    l.a.createElement(
                                        'li',
                                        null,
                                        l.a.createElement(
                                            E.a,
                                            {type: 'id', element: 'one'},
                                            l.a.createElement(u.a, {to: '#'}, 'About me')
                                        )
                                    ),
                                    l.a.createElement(
                                        'li',
                                        null,
                                        l.a.createElement(
                                            E.a,
                                            {type: 'id', element: 'two'},
                                            l.a.createElement(u.a, {to: '#'}, 'Projects')
                                        )
                                    ),
                                    l.a.createElement(
                                        'li',
                                        null,
                                        l.a.createElement(
                                            E.a,
                                            {type: 'id', element: 'three'},
                                            l.a.createElement(u.a, {to: '#'}, 'Skills')
                                        )
                                    ),
                                    l.a.createElement(
                                        'li',
                                        null,
                                        l.a.createElement(
                                            E.a,
                                            {type: 'id', element: 'footer'},
                                            l.a.createElement(u.a, {to: '#'}, 'Social media')
                                        )
                                    )
                                ),
                                l.a.createElement('a', {
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

            function g(e) {
                var t = e.fullMenu,
                    a = Object(i.useState)(!1),
                    n = a[0],
                    r = a[1];
                return l.a.createElement(
                    'header',
                    {id: 'header', className: t ? '' : 'alt'},
                    l.a.createElement(
                        'h1',
                        null,
                        l.a.createElement(u.a, {to: '/'}, 'dkozielecka')
                    ),
                    l.a.createElement(
                        'div',
                        {className: n ? 'is-menu-visible' : ' '},
                        l.a.createElement(h, {
                            onMenuToggle: function () {
                                return r(!n);
                            },
                        })
                    )
                );
            }

            var b = (function (e) {
                var t, a;

                function i() {
                    for (var t, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                        n[i] = arguments[i];
                    return (
                        ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                            isPreloaded: !0,
                        }),
                            t
                    );
                }

                (a = e),
                    ((t = i).prototype = Object.create(a.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = a);
                var r = i.prototype;
                return (
                    (r.componentDidMount = function () {
                        var e = this;
                        this.timeoutId = setTimeout(function () {
                            e.setState({isPreloaded: !1});
                        }, 100);
                    }),
                        (r.componentWillUnmount = function () {
                            this.timeoutId && clearTimeout(this.timeoutId);
                        }),
                        (r.render = function () {
                            var e = this.props,
                                t = e.children,
                                a = e.fullMenu,
                                i = this.state.isPreloaded;
                            return l.a.createElement(c, {
                                query: '1044757290',
                                render: function (e) {
                                    return l.a.createElement(
                                        l.a.Fragment,
                                        null,
                                        l.a.createElement(
                                            d.a,
                                            {
                                                title: e.site.siteMetadata.title,
                                                meta: [
                                                    {name: 'description', content: 'dkozielecka'},
                                                    {name: 'keywords', content: 'site, web'},
                                                ],
                                            },
                                            l.a.createElement('html', {lang: 'pl'})
                                        ),
                                        l.a.createElement(
                                            'div',
                                            {
                                                className: i
                                                    ? 'landing main-body is-preload'
                                                    : 'landing main-body',
                                            },
                                            l.a.createElement(
                                                'div',
                                                {id: 'page-wrapper'},
                                                l.a.createElement(g, {fullMenu: a}),
                                                t,
                                                l.a.createElement(v, null)
                                            )
                                        )
                                    );
                                },
                                data: n,
                            });
                        }),
                        i
                );
            })(i.Component);
            t.a = b;
        },
    },
]);
//# sourceMappingURL=component---src-pages-generic-js-beaa7105c856537dd460.js.map
