import {
    ct as xn,
    cu as wn,
    bI as Te,
    e as u,
    cv as we,
    cw as ye,
    cx as yn,
    W as bn,
    ai as Ae,
    Y as vn,
    ag as jn,
    cn as kn,
    j as n,
    am as Nn,
    an as Cn,
    cy as An,
    cz as Sn,
    cA as vt,
    cB as jt,
    cC as Mn,
    K as j,
    Q as E,
    C as w,
    cD as J,
    cE as Ln,
    a0 as B,
    cF as _n,
    cG as Tn,
    cH as Re,
    a6 as W,
    cI as kt,
    cJ as Nt,
    cK as Ct,
    u as S,
    cL as Rn,
    cM as In,
    U as Ie,
    b as Q,
    d as X,
    cN as En,
    cO as Pn,
    f as U,
    aq as zn,
    ar as Fn,
    as as Ze,
    ci as At,
    J as V,
    D as Ee,
    cP as Bn,
    a9 as Se,
    bi as St,
    $ as Mt,
    h as ae,
    t as Z,
    B as re,
    b8 as Ke,
    cQ as Hn,
    cR as Un,
    i as me,
    cS as m,
    cT as Dn,
    c0 as $n,
    cU as Vn,
    cV as On,
    cW as Ye,
    c4 as P,
    cb as Je,
    bQ as ie,
    ca as I,
    a5 as Lt,
    aQ as Wn,
    bw as qn,
    aP as _t,
    cX as Gn,
    cY as Zn,
    P as Kn,
    cZ as Yn,
    aV as Jn,
    c_ as Qn,
    c$ as Xn,
    ad as Qe,
    d0 as es,
    d1 as ts,
    A as ns,
    d2 as ss,
    ba as as,
    a8 as rs,
    d3 as is,
    d4 as os,
    d5 as ls,
    d6 as cs,
    d7 as ds,
    E as Tt,
    a as Rt,
    bC as oe,
    bG as It,
    bz as Et,
    bj as ms,
    d8 as us,
    b1 as be,
    aE as O,
    d9 as hs,
    ax as fs,
    da as ps,
    db as le,
    dc as Pt,
    bc as gs,
    dd as xs,
    m as ws,
    bk as ys,
    bl as bs,
    ch as vs,
    a$ as zt,
    cq as ve,
    cj as js,
    de as Ft,
    df as ks,
    dg as Ns,
    dh as Cs,
    di as As,
    dj as Xe,
    dk as Ss,
    dl as Ms,
    dm as Ls,
    dn as _s,
    dp as Ts,
    dq as Rs
} from "./index-BTMYyhc6.js";
import {
    L as Is,
    A as Es
} from "./Logo-BmlVHmIW.js";
import {
    C as Ps
} from "./SiteName-B1nS1wd2.js";
import {
    i as zs,
    m as Fs,
    D as Bs
} from "./instagram-Bdv7Dlly.js";
import {
    $ as Hs,
    a as Us
} from "./Disclosure-DgCWlw5X.js";
import {
    f as Ds
} from "./add-24-filled-BdM6xnA7.js";
import {
    i as $s,
    L as et,
    $ as Vs,
    U as Os,
    a as Ws,
    b as qs
} from "./Tab-BLMS8a9U.js";
import {
    g as Gs,
    M
} from "./MenuItem-DLax9T5L.js";
import {
    u as ue
} from "./NotificationNewsButton-BDIEeogD.js";
import {
    V as Zs
} from "./index-Cpf8OWOQ.js";
import {
    E as Ks
} from "./Empty-CnG_cY_l.js";
import {
    A as Ys,
    a as tt,
    m as Js,
    i as Bt
} from "./baseline-add-XAdAsUn_.js";
import {
    a as Qs,
    d as Xs,
    c as ea,
    f as ta
} from "./utils-CORjiwlf.js";
import {
    U as Ht,
    B as Pe
} from "./index-m6nh9vV8.js";
import {
    B as Ut,
    g as na,
    u as sa
} from "./UserLink-D-ltrUye.js";
import {
    c as Dt
} from "./rx-DaL_68pT.js";
import {
    i as aa
} from "./baseline-check-Bx2631SZ.js";
import {
    u as nt
} from "./uniqBy-DWZdfvgJ.js";
import {
    C as ra
} from "./CircularSpinner-nWd4HBSC.js";
import {
    i as $t
} from "./baseline-clear-lRfcqXaV.js";
import {
    u as ia
} from "./useIsomorphicLayoutEffect-1Q5YRNQV.js";
import {
    c as oa
} from "./createContainer-DXz_vXnk.js";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
            t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "978a898c-0bd3-432f-a622-80f7b0a8740e", e._sentryDebugIdIdentifier = "sentry-dbid-978a898c-0bd3-432f-a622-80f7b0a8740e")
    } catch {}
})();
{
    var ee = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new Error().stack], {
        "_sentryBundlerPluginAppKey:pixai-web-app-key": !0
    })
}
const Vt = oa();

function la(e, t, s, a, r) {
    return function(i, o) {
        var l = s,
            c = t,
            f = 0;
        i.subscribe(xn(o, function(h) {
            var d = f++;
            c = l ? e(c, h, d) : (l = !0, h), o.next(c)
        }, r))
    }
}

function ca(e, t) {
    return wn(la(e, t, arguments.length >= 2, !0))
}
var st = function(e) {
    var t = window.history,
        s = t[e];
    t[e] = function(a) {
        var r = s.apply(this, arguments),
            i = new Event(e.toLowerCase());
        return i.state = a, window.dispatchEvent(i), r
    }
};
Te && (st("pushState"), st("replaceState"));
var da = function() {
        return {
            trigger: "load",
            length: 1
        }
    },
    te = function(e) {
        var t = window.history,
            s = t.state,
            a = t.length,
            r = window.location,
            i = r.hash,
            o = r.host,
            l = r.hostname,
            c = r.href,
            f = r.origin,
            h = r.pathname,
            d = r.port,
            p = r.protocol,
            x = r.search;
        return {
            trigger: e,
            state: s,
            length: a,
            hash: i,
            host: o,
            hostname: l,
            href: c,
            origin: f,
            pathname: h,
            port: d,
            protocol: p,
            search: x
        }
    },
    ma = function() {
        var e = u.useState(te("load")),
            t = e[0],
            s = e[1];
        return u.useEffect(function() {
            var a = function() {
                    return s(te("popstate"))
                },
                r = function() {
                    return s(te("pushstate"))
                },
                i = function() {
                    return s(te("replacestate"))
                };
            return we(window, "popstate", a), we(window, "pushstate", r), we(window, "replacestate", i),
                function() {
                    ye(window, "popstate", a), ye(window, "pushstate", r), ye(window, "replacestate", i)
                }
        }, []), t
    },
    ua = typeof Event == "function";
const ha = Te && ua ? ma : da;
var Ot = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
};

function fa() {
    var e = u.useState(null),
        t = e[0],
        s = e[1],
        a = u.useState(Ot),
        r = a[0],
        i = a[1],
        o = u.useMemo(function() {
            return new window.ResizeObserver(function(l) {
                if (l[0]) {
                    var c = l[0].contentRect,
                        f = c.x,
                        h = c.y,
                        d = c.width,
                        p = c.height,
                        x = c.top,
                        g = c.left,
                        k = c.bottom,
                        y = c.right;
                    i({
                        x: f,
                        y: h,
                        width: d,
                        height: p,
                        top: x,
                        left: g,
                        bottom: k,
                        right: y
                    })
                }
            })
        }, []);
    return ia(function() {
        if (t) return o.observe(t),
            function() {
                o.disconnect()
            }
    }, [t]), [s, r]
}
const pa = Te && typeof window.ResizeObserver < "u" ? fa : function() {
        return [yn, Ot]
    },
    ga = ["className"],
    xa = e => {
        const {
            alignItems: t,
            classes: s
        } = e;
        return Cn({
            root: ["root", t === "flex-start" && "alignItemsFlexStart"]
        }, Gs, s)
    },
    wa = bn("div", {
        name: "MuiListItemIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
            const {
                ownerState: s
            } = e;
            return [t.root, s.alignItems === "flex-start" && t.alignItemsFlexStart]
        }
    })(({
        theme: e,
        ownerState: t
    }) => Ae({
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: "inline-flex"
    }, t.alignItems === "flex-start" && {
        marginTop: 8
    })),
    se = u.forwardRef(function(t, s) {
        const a = vn({
                props: t,
                name: "MuiListItemIcon"
            }),
            {
                className: r
            } = a,
            i = jn(a, ga),
            o = u.useContext(kn),
            l = Ae({}, a, {
                alignItems: o.alignItems
            }),
            c = xa(l);
        return n.jsx(wa, Ae({
            className: Nn(c.root, r),
            ownerState: l,
            ref: s
        }, i))
    }),
    Wt = An({
        scrolledOut: !1
    });

function hl() {
    const e = Sn(Wt),
        t = u.useRef(null),
        s = vt(t, {
            root: null,
            threshold: 1
        });
    return u.useEffect(() => (s && e(a => {
        a.scrolledOut = !s.isIntersecting
    }), () => {
        e(a => {
            a.scrolledOut = !1
        })
    }), [s, e]), t
}

function ya() {
    const e = jt("growth-artwork-membership-dec-changes"),
        t = (e == null ? void 0 : e.split("-").includes("explore")) ?? !1,
        s = (e == null ? void 0 : e.split("-").includes("hover")) ?? !1,
        a = (e == null ? void 0 : e.split("-").includes("banner")) ?? !1;
    return {
        enableExplore: t,
        enableUseAsRefHover: s,
        enableNewBanner: a
    }
}
const ba = "_bg_1pcro_1",
    va = "_content_1pcro_46",
    ja = {
        bg: ba,
        "bg-gradient": "_bg-gradient_1pcro_1",
        content: va,
        "content-translate": "_content-translate_1pcro_1",
        "bg-bounce": "_bg-bounce_1pcro_1",
        "icon-pop": "_icon-pop_1pcro_1",
        "icon-shake": "_icon-shake_1pcro_1",
        "icon-shadow": "_icon-shadow_1pcro_1"
    };

function ka(e) {
    const t = Mn("(min-width:1200px)"),
        s = ya();
    return n.jsxs("div", {
        className: j("[--height:32px]", "relative z-10 grid h-[--height]", e.className),
        style: e.style,
        children: [n.jsx("div", {
            className: j(ja.bg, "row-start-1 col-start-1")
        }), n.jsxs(E, {
            to: "/membership/plans",
            className: j("row-start-1 col-start-1 relative flex justify-center items-center hover:bg-black/10 no-underline text-white font-medium text-shadow shadow-black/50 transition"),
            onClick: () => {
                const a = "top-bar";
                w("enter_member_click", {
                    location: a
                }), J("member_source", a, {
                    persistent: !0
                })
            },
            children: [n.jsx(Ln, {
                className: j("w-5 h-5 mr-2 -translate-y-px drop-shadow")
            }), n.jsx("span", {
                className: "leading-[100%] text-center lg:text-left",
                children: n.jsx(B, {
                    i18nKey: "membership:membership.banner.label",
                    context: t ? s.enableNewBanner ? "longnew" : "long" : "short",
                    components: {
                        br: n.jsx("br", {}),
                        small: n.jsx("span", {
                            className: "text-xs"
                        })
                    }
                })
            }), n.jsx(_n, {
                className: "w-6 h-6 drop-shadow"
            })]
        })]
    })
}

function Na(e) {
    return n.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        width: "32",
        height: "32",
        fill: "none",
        ...e,
        children: n.jsxs("g", {
            children: [n.jsx("rect", {
                x: "1",
                y: "1",
                width: "30",
                height: "30",
                rx: "7",
                stroke: "currentColor",
                strokeWidth: "2"
            }), n.jsx("path", {
                d: "M12.2549 10.2888C11.9525 11.0513 11.3919 11.6834 10.6711 12.0748C9.95021 12.4662 9.11479 12.5921 8.3106 12.4304C7.50642 12.2688 6.78452 11.8299 6.27087 11.1904C5.75723 10.5508 5.48446 9.75121 5.50015 8.93109C5.51585 8.11097 5.81901 7.3224 6.35675 6.70297C6.89448 6.08355 7.63265 5.6726 8.44243 5.54184C9.25221 5.41109 10.0822 5.56882 10.7876 5.98752C11.4929 6.40622 12.0289 7.0593 12.3019 7.83281H19.6979C19.9731 7.05408 20.5147 6.39772 21.2271 5.97974C21.9394 5.56176 22.7766 5.40908 23.5906 5.54868C24.4046 5.68828 25.1431 6.11118 25.6755 6.74262C26.2079 7.37407 26.4998 8.17339 26.4998 8.99931C26.4998 9.82522 26.2079 10.6245 25.6755 11.256C25.1431 11.8874 24.4046 12.3103 23.5906 12.4499C22.7766 12.5895 21.9394 12.4369 21.2271 12.0189C20.5147 11.6009 19.9731 10.9445 19.6979 10.1658H15.9999C16.7591 11.1746 17.1688 12.4033 17.1669 13.6658V18.3328C17.1665 19.1007 17.4187 19.8474 17.8846 20.4578C18.3505 21.0682 19.0041 21.5085 19.7449 21.7108C20.0484 20.9445 20.6125 20.3099 21.3379 19.9187C22.0632 19.5274 22.9034 19.4046 23.7104 19.5719C24.5175 19.7391 25.2396 20.1857 25.7497 20.8331C26.2598 21.4804 26.5252 22.287 26.4991 23.1107C26.4731 23.9345 26.1572 24.7227 25.6072 25.3364C25.0572 25.9502 24.3082 26.3503 23.4923 26.4662C22.6763 26.5821 21.8456 26.4064 21.1464 25.9701C20.4472 25.5337 19.9243 24.8647 19.6699 24.0808C18.3158 23.8459 17.088 23.1405 16.2031 22.089C15.3182 21.0374 14.8329 19.7072 14.8329 18.3328V13.6658C14.833 12.8981 14.5807 12.1516 14.1149 11.5414C13.6491 10.9312 12.9955 10.491 12.2549 10.2888Z",
                fill: "currentColor"
            })]
        })
    })
}
const qt = Tn("desktopNavigationExpand", !0, void 0, {
        getOnInit: !0
    }),
    Ca = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"
        })
    }),
    Gt = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z"
        })
    }),
    Aa = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm.58 16.401l-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07l-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686zM17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116l5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75m-2.498 2a2.252 2.252 0 1 1 0 4.504a2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504a.752.752 0 0 0 0-1.504"
        })
    }),
    at = e => n.jsx("svg", {
        viewBox: "0 0 20 20",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M6 3a3 3 0 0 0-3 3v3h3.293l2.47-2.47a1.75 1.75 0 0 1 2.474 0L13.707 9H17V6a3 3 0 0 0-3-3zm11 7v4a3 3 0 0 1-2.361 2.932l-3.402-3.402a1.75 1.75 0 0 0-2.474 0L5.36 16.932A3 3 0 0 1 3 14v-4zM6.707 17h6.586l-2.763-2.763a.75.75 0 0 0-1.06 0zm1-8h4.586L10.53 7.237a.75.75 0 0 0-1.06 0zM15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
        })
    }),
    Sa = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "m11.405 9.465l-8.707 8.714a2.27 2.27 0 0 0 3.211 3.208l8.706-8.712zm5.447 5.542L16.75 15a.75.75 0 0 0-.743.648L16 15.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.694.648.743l.102.007H16v.75c0 .38.282.694.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V18h.75a.75.75 0 0 0 .743-.648L19 17.25a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743L16.75 15zm-3.538-7.442l-.136.126l-.712.713l3.21 3.21l.712-.714a2.25 2.25 0 0 0-.001-3.182l-.157-.146a2.25 2.25 0 0 0-2.916-.007M6.852 5.007L6.75 5a.75.75 0 0 0-.743.648L6 5.75v.75h-.75a.75.75 0 0 0-.743.648L4.5 7.25c0 .38.282.693.648.743L5.25 8H6v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648L7.5 8.75V8h.75a.75.75 0 0 0 .743-.648L9 7.25a.75.75 0 0 0-.648-.743L8.25 6.5H7.5v-.75a.75.75 0 0 0-.648-.743L6.75 5zm12-2L18.75 3a.75.75 0 0 0-.743.648L18 3.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743L17.25 6H18v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V6h.75a.75.75 0 0 0 .743-.648L21 5.25a.75.75 0 0 0-.648-.743L20.25 4.5h-.75v-.75a.75.75 0 0 0-.648-.743L18.75 3z"
        })
    }),
    Ma = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "m13.314 7.565l-.136.126l-10.48 10.488a2.27 2.27 0 0 0 3.211 3.208L16.388 10.9a2.25 2.25 0 0 0-.001-3.182l-.157-.146a2.25 2.25 0 0 0-2.916-.007m-.848 2.961l1.088 1.088l-8.706 8.713a.77.77 0 1 1-1.089-1.088zm4.386 4.48L16.75 15a.75.75 0 0 0-.743.648L16 15.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.694.648.743l.102.007H16v.75c0 .38.282.694.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V18h.75a.75.75 0 0 0 .743-.648L19 17.25a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743L16.75 15zm-1.553-6.254l.027.027a.75.75 0 0 1 0 1.061l-.711.713l-1.089-1.089l.73-.73a.75.75 0 0 1 1.043.018M6.852 5.007L6.75 5a.75.75 0 0 0-.743.648L6 5.75v.75h-.75a.75.75 0 0 0-.743.648L4.5 7.25c0 .38.282.693.648.743L5.25 8H6v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648L7.5 8.75V8h.75a.75.75 0 0 0 .743-.648L9 7.25a.75.75 0 0 0-.648-.743L8.25 6.5H7.5v-.75a.75.75 0 0 0-.648-.743L6.75 5zm12-2L18.75 3a.75.75 0 0 0-.743.648L18 3.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743L17.25 6H18v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V6h.75a.75.75 0 0 0 .743-.648L21 5.25a.75.75 0 0 0-.648-.743L20.25 4.5h-.75v-.75a.75.75 0 0 0-.648-.743L18.75 3z"
        })
    }),
    rt = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
        })
    }),
    La = e => n.jsxs("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: [n.jsx("path", {
            fill: "currentColor",
            d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5c0 .12.05.23.13.33c.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4c0-3.86-3.59-7-8-7z"
        }), n.jsx("circle", {
            cx: 6.5,
            cy: 11.5,
            r: 1.5,
            fill: "currentColor"
        }), n.jsx("circle", {
            cx: 9.5,
            cy: 7.5,
            r: 1.5,
            fill: "currentColor"
        }), n.jsx("circle", {
            cx: 14.5,
            cy: 7.5,
            r: 1.5,
            fill: "currentColor"
        }), n.jsx("circle", {
            cx: 17.5,
            cy: 11.5,
            r: 1.5,
            fill: "currentColor"
        })]
    }),
    _a = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2c1.16-.54 3.65-1.81 5.26-3.42c4.59-4.59 4.63-8.33 4.36-9.93a.979.979 0 0 0-.79-.79c-1.6-.27-5.34-.23-9.93 4.36c-1.61 1.61-2.87 4.1-3.42 5.26c-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6a3 3 0 0 1-.82 2.71c-.77.77-3.16 1.34-4.71 1.64c-.69.13-1.3-.48-1.17-1.17c.3-1.55.86-3.94 1.64-4.71a3 3 0 0 1 2.71-.82c1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2z"
        })
    }),
    Ta = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsxs("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            children: [n.jsx("path", {
                d: "m10.05 10.607l-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.07-7.072m4.315.365l3.878 3.878a2 2 0 0 1 0 2.828v0a2 2 0 0 1-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61L2.49 3.075l1.414-1.414L7.44 3.782zm0 0l2.83 2.83"
            }), n.jsx("path", {
                d: "M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718s4.95-2.121 6.717-1.06l-3.04 3.04l-.283 3.111l3.111-.282l3.04-3.041c1.062 1.768.68 4.978-1.06 6.717c-1.74 1.74-4.564 1.905-6.717 1.061"
            })]
        })
    }),
    Ra = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M7 23q-.825 0-1.413-.588T5 21V3q0-.825.588-1.413T7 1h7v2H7v1h7v2H7v12h10v-2h2v5q0 .825-.588 1.413T17 23H7Zm10-12.8V4q0-.425.288-.713T18 3q.425 0 .713.288T19 4v6.2l1.9-1.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-3.6 3.6q-.3.3-.7.3t-.7-.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9ZM14 4H7V3h7v1Z"
        })
    }),
    Ia = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z"
        })
    }),
    it = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
        })
    }),
    Ea = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M5 9v12H1V9h4m4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H9m0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03V19Z"
        })
    }),
    Pa = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        })
    }),
    za = e => n.jsx("svg", {
        viewBox: "0 0 28 28",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75v3a.75.75 0 0 1-1.5 0v-3A3.75 3.75 0 0 1 5.75 2h3a.75.75 0 0 1 0 1.5zm0 21q-.16 0-.315-.022l-.018-.002A2.25 2.25 0 0 1 3.5 22.25v-3a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 0 5.75 26h3a.75.75 0 0 0 0-1.5zM24.5 5.75a2.25 2.25 0 0 0-2.25-2.25h-3a.75.75 0 0 1 0-1.5h3A3.75 3.75 0 0 1 26 5.75v3a.75.75 0 0 1-1.5 0zM22.25 24.5q.146 0 .287-.018l.009-.001A2.25 2.25 0 0 0 24.5 22.25v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 22.25 26h-3a.75.75 0 0 1 0-1.5zm-11.768.5h7.036a1.75 1.75 0 0 1 1.732-1.5h3c.262 0 .505-.08.706-.218q.044-.276.044-.57v-.462a2.75 2.75 0 0 0-2.75-2.75H7.75A2.75 2.75 0 0 0 5 22.25v.462q0 .293.04.567c.201.14.446.221.71.221h3a1.75 1.75 0 0 1 1.732 1.5M14 17a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"
        })
    }),
    Fa = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M10.74 10.75L12 8l1.25 2.75L16 12l-2.75 1.26L12 16l-1.26-2.74L8 12l2.74-1.25Z"
        })
    });

function Ba({
    className: e
}) {
    return n.jsxs("span", {
        className: j("relative", e),
        children: [n.jsx(za, {
            className: "size-5"
        }), n.jsx(Fa, {
            className: "absolute top-0 right-0 size-3 bg-gradient-member bg-clip-text"
        })]
    })
}

function Ha() {
    const [e, t] = kt(qt), s = () => {
        t(r => !r)
    }, a = e ? "expanded" : "shrinked";
    return n.jsxs("div", {
        className: "flex flex-col justify-start w-[--app-nav-width] shadow-[1px_0px_#0002] dark:shadow-[inset_-1px_0px_#fff2] relative transition-[width]",
        children: [n.jsx("div", {
            className: "sticky top-[calc(var(--app-header-height)+1em)] w-[calc(100%+0.75em)] h-0 overflow-visible flex justify-end z-100 transition-all",
            children: n.jsx("button", {
                className: "rounded-full bg-background hover:bg-background-secondary drop-shadow-lg transition-transform duration-150 size-6 dark:ring-2 dark:ring-neutral-500",
                onClick: s,
                children: n.jsx(Ia, {
                    className: j("size-6", e ? "rotate-0" : "rotate-180")
                })
            })
        }), n.jsxs("div", {
            className: "sticky top-[--app-header-height] flex flex-col py-1",
            children: [n.jsx(z, {
                type: a,
                item: {
                    name: "home",
                    title: "common:home.label",
                    icon: Gt,
                    link: "/"
                }
            }), n.jsx(z, {
                type: a,
                item: {
                    name: "generation",
                    title: "common:tab.generation",
                    icon: La,
                    link: "/generator/image",
                    onClick: () => {
                        J("generate_source")
                    }
                }
            }), n.jsx(z, {
                type: a,
                item: {
                    name: "market",
                    title: "common:tab.models",
                    icon: $s,
                    link: "/market"
                }
            }), n.jsx(z, {
                type: a,
                item: {
                    name: "workflow-market",
                    title: "common:workflow.label_other",
                    icon: Na,
                    link: "/workflows"
                }
            }), n.jsx(z, {
                type: a,
                item: {
                    name: "user-rank",
                    title: "common:tab.image-rank",
                    icon: Ea,
                    link: "/user-rank"
                }
            }), n.jsx("hr", {
                className: j("border-[#DDD] dark:border-[#424345]", !e && "hidden")
            }), n.jsx(z, {
                type: a,
                item: {
                    name: "tool",
                    title: "common:tab.sites.category",
                    icon: Ta,
                    children: [{
                        name: "tool-isekai",
                        title: "common:tab.sites.me-in-comics",
                        icon: Ba,
                        link: "https://isekai.pixai.art/"
                    }, {
                        name: "tool-realtime-generation",
                        title: "common:tab.sites.realtime-generation",
                        icon: _a,
                        link: "https://pixai.art/realtime-generation"
                    }, {
                        name: "tool-upscaler",
                        title: "common:post-menu.image-upscaler",
                        icon: Aa,
                        link: "https://pixai.art/anime-ai-upscaler"
                    }, {
                        name: "tool-anime-generator",
                        title: "common:tab.sites.anime-ai-generator",
                        icon: it,
                        link: "https://pixai.art/anime-ai-generator"
                    }, {
                        name: "ai-art-generator",
                        title: "common:tab.sites.ai-art-generator",
                        icon: it,
                        link: "https://pixai.art/ai-art-generator"
                    }, {
                        name: "image-stitching-kiss",
                        title: "common:tab.sites.image-stitching-kiss",
                        icon: at,
                        link: "/generator/stitching/kiss"
                    }, {
                        name: "image-stitching-hug",
                        title: "common:tab.sites.image-stitching-hug",
                        icon: at,
                        link: "/generator/stitching/hug"
                    }]
                }
            })]
        }), n.jsx("span", {
            className: "mt-auto"
        }), n.jsxs("div", {
            className: "sticky bottom-0",
            children: [n.jsx(z, {
                type: a,
                item: {
                    name: "mobile",
                    title: "common:tab.mobile.label",
                    icon: Ra,
                    onClick: () => {
                        Nt({
                            trackingArgs: {
                                source: "user"
                            }
                        })
                    }
                }
            }), n.jsx(Ua, {
                expanded: e
            })]
        })]
    })
}

function Ua({
    expanded: e
}) {
    var r, i, o, l, c, f;
    const {
        data: t
    } = Ct(), s = S().i18n.language, a = [{
        name: "Discord",
        icon: rt,
        link: (r = t == null ? void 0 : t.externalUrls) == null ? void 0 : r.discordJoin
    }, {
        name: "X",
        icon: ({
            className: h
        }) => n.jsx(Pa, {
            className: j(h, "scale-90")
        }),
        link: ((i = t == null ? void 0 : t.externalUrls) == null ? void 0 : i.twitterAccounts) ?? ((o = t == null ? void 0 : t.externalUrls) == null ? void 0 : o.twitter)
    }, {
        name: "Reddit",
        icon: zs,
        link: (l = t == null ? void 0 : t.externalUrls) == null ? void 0 : l.reddit
    }, {
        name: "Instagram",
        icon: Fs,
        link: (c = t == null ? void 0 : t.externalUrls) == null ? void 0 : c.instagram
    }];
    return e ? n.jsx("ul", {
        className: "flex px-3 my-2 justify-between",
        children: a.map((h, d) => {
            var p, x;
            return n.jsx(Rn, {
                delay: 250,
                className: "px-2 py-1",
                trigger: n.jsx(In, {
                    href: typeof h.link == "string" ? h.link : ((p = h.link) == null ? void 0 : p[s]) ?? ((x = h.link) == null ? void 0 : x.en),
                    children: n.jsx(Ie, {
                        variant: "ghost",
                        children: n.jsx("li", {
                            className: "bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 drop-shadow-sm hover:drop-shadow-md p-2 rounded-md transition-all cursor-pointer group",
                            children: n.jsx(h.icon, {
                                className: "size-5 opacity-80 group-hover:opacity-100"
                            })
                        })
                    })
                }),
                children: h.name
            }, d)
        })
    }) : n.jsx(z, {
        type: "shrinked",
        item: {
            name: "discord",
            title: "common:join-discord",
            icon: rt,
            link: (f = t == null ? void 0 : t.externalUrls) == null ? void 0 : f.discordJoin
        }
    })
}
const Da = Re({
    slots: {
        root: "",
        icon: "flex-none opacity-70 transition-all",
        label: "",
        labelText: "md:text-sm text-xs leading-none"
    },
    variants: {
        type: {
            shrinked: "",
            expanded: "",
            "list-item": ""
        }
    },
    compoundSlots: [{
        slots: ["root"],
        type: "list-item",
        className: "md:h-8"
    }, {
        slots: ["root"],
        type: "expanded",
        className: "md:h-12"
    }, {
        slots: ["root"],
        type: "shrinked",
        className: "md:h-20"
    }, {
        slots: ["root"],
        type: ["expanded", "list-item"],
        className: "flex-row gap-2 ml-0 justify-start px-3"
    }, {
        slots: ["root"],
        type: "shrinked",
        className: "flex-col grow gap-1 justify-center h-16 text-primary"
    }, {
        slots: ["icon"],
        type: "list-item",
        className: "size-5"
    }, {
        slots: ["icon"],
        type: "expanded",
        className: "size-6"
    }, {
        slots: ["icon"],
        type: "shrinked",
        className: "size-8"
    }, {
        slots: ["label"],
        type: ["expanded", "list-item"],
        className: "flex-grow"
    }, {
        slots: ["labelText"],
        type: ["expanded", "list-item"],
        className: "text-left"
    }, {
        slots: ["labelText"],
        type: "shrinked",
        className: "text-center"
    }, {
        slots: ["labelText"],
        type: ["shrinked", "expanded"],
        className: "font-medium"
    }, {
        slots: ["labelText"],
        type: "list-item",
        className: "font-normal"
    }]
});

function z({
    item: e,
    type: t,
    className: s,
    hidden: a = !1,
    style: r
}) {
    Q();
    const i = X(),
        o = e.link ? e.link === "/" ? i.pathname === e.link : i.pathname.startsWith(e.link) : !1,
        l = t !== "shrinked",
        c = e.children && e.children.length > 0,
        [f, h] = u.useState(),
        d = jt(e.experiment ?? "", !e.experiment),
        [p, x] = u.useState(!1);
    if (!d) return null;
    const g = Da({
            type: t
        }),
        k = {
            variant: "ghost",
            slot: "trigger",
            className: j("w-[calc(100%-0.5em)] rounded-none items-center flex transition-all", "md:rounded-md md:mx-1 md:my-0.5 md:grow-0 relative ring-0 outline-0", "hover:bg-purple-600 hover:bg-opacity-10", o ? "bg-purple-600 bg-opacity-10 dark:bg-opacity-30" : "", g.root(), a && "hidden", s),
            style: r,
            onPress: C => {
                var A;
                w("nav_btn_click", {
                    cate: e.name
                }), (A = e.onClick) == null || A.call(e), c && !l && h(C.target)
            },
            icon: e.icon && n.jsx(e.icon, {
                className: g.icon()
            }),
            labelClassName: g.label(),
            endIcon: typeof e.badge == "string" ? n.jsx($a, {
                type: e.badge
            }) : e.badge ? e.badge : l && c ? n.jsx(En, {
                className: j("transition-all", p && "rotate-180")
            }) : void 0
        },
        y = n.jsx(Ie, {
            ...k,
            children: n.jsx("div", {
                className: g.labelText(),
                children: n.jsx(B, {
                    i18nKey: e.title
                })
            })
        });
    return n.jsxs(n.Fragment, {
        children: [!c && (e.link ? n.jsx(Pn, {
            href: e.link,
            ...k,
            children: n.jsx("div", {
                className: g.labelText(),
                children: n.jsx(B, {
                    i18nKey: e.title
                })
            })
        }) : y), c && !l && n.jsx(Va, {
            button: y,
            items: e.children,
            anchorEl: f,
            hide: () => h(void 0)
        }), c && l && n.jsx(Wa, {
            button: y,
            items: e.children,
            isExpanded: p,
            onExpandedChange: x
        })]
    })
}

function $a(e) {
    switch (e.type) {
        case "new":
            return n.jsx("span", {
                className: "absolute top-0 right-0 inline-block px-1.5 text-xs bg-blue-500 text-white font-medium rounded-full",
                children: "NEW"
            });
        default:
            return null
    }
}

function Va({
    button: e,
    items: t,
    anchorEl: s,
    hide: a
}) {
    const r = W(),
        i = Q(),
        {
            data: o
        } = U(),
        l = s != null,
        {
            t: c
        } = S(["common", "action", "generation", "workflow"]);

    function f(d) {
        var p;
        d.tracker && w(d.tracker.event, d.tracker.attrs), (p = d.onClick) == null || p.call(d), d.link && (/^https?:\/\//.test(d.link) ? window.open(d.link, "_blank", "noopener,noreferrer") : o ? i(d.link) : Ee(void 0, {
            fromPath: d.name && {
                upload: "upload-image",
                manga: "create-manga"
            } [d.name]
        }))
    }
    const h = r ? n.jsx(zn, {
        anchor: "bottom",
        open: l,
        onClose: a,
        elevation: 4,
        children: n.jsxs(Fn, {
            className: "bg-background-secondary",
            children: [t.map(d => n.jsx(Ze, {
                children: n.jsx(et, {
                    onClick: () => f(d),
                    className: j("h-full text-base font-medium", d.className),
                    children: c(d.title)
                })
            }, d.title)), n.jsx(Ze, {
                children: n.jsx(et, {
                    onClick: a,
                    children: c("action:cancel")
                })
            })]
        })
    }) : n.jsx(At, {
        open: l,
        anchorEl: s,
        anchorOrigin: {
            vertical: "top",
            horizontal: r ? "left" : "right"
        },
        transformOrigin: {
            vertical: r ? "bottom" : "top",
            horizontal: "left"
        },
        onClose: a,
        disableScrollLock: !0,
        elevation: 2,
        slotProps: {
            paper: {
                className: "bg-background-secondary"
            }
        },
        children: t.map(d => n.jsx(M, {
            className: j("h-10", d.className),
            onClick: () => {
                f(d), a()
            },
            children: n.jsxs("div", {
                className: j("flex items-center gap-2 w-full h-10 text-base"),
                children: [d.icon && n.jsx(d.icon, {
                    className: "size-5"
                }), n.jsx("div", {
                    children: c(d.title)
                }), typeof d.badge == "string" ? n.jsx(Oa, {
                    type: d.badge
                }) : d.badge]
            })
        }, d.title))
    });
    return n.jsxs(n.Fragment, {
        children: [e, h]
    })
}

function Oa(e) {
    switch (e.type) {
        case "new":
            return n.jsx("span", {
                className: "px-1.5 leading-4 text-xs bg-blue-500 text-white font-medium rounded-full",
                children: "NEW"
            });
        default:
            return null
    }
}

function Wa({
    button: e,
    items: t,
    isExpanded: s,
    onExpandedChange: a
}) {
    return n.jsxs(Hs, {
        isExpanded: s,
        onExpandedChange: a,
        children: [e, n.jsx(Us, {
            children: n.jsx("ul", {
                className: "ml-2",
                children: t.map(r => n.jsx("li", {
                    children: n.jsx(z, {
                        item: r,
                        className: "text-wrap",
                        type: "list-item"
                    })
                }, r.title))
            })
        })]
    })
}

function qa() {
    const e = X(),
        t = s => s === "/" ? e.pathname === s : e.pathname.startsWith(s);
    return n.jsxs("div", {
        className: j("grid grid-cols-[1fr_auto_1fr] place-items-center text-xs fixed inset-x-0 bottom-0 z-20", "bg-gradient-to-t from-background to-background/80 backdrop-blur shadow-[0_-1px_#0002] dark:shadow-[inset_0_1px_#fff2]"),
        style: {
            height: 60
        },
        children: [n.jsxs(E, {
            to: "/",
            "data-active": t("/") ? "" : null,
            className: "group flex flex-col items-center no-underline dark:data-[active]:text-white opacity-60 data-[active]:opacity-100",
            onClick: () => w("nav_btn_click", {
                cate: "home"
            }),
            children: [n.jsx(Gt, {
                className: "size-6 group-data-[active]:hidden"
            }), n.jsx(Ca, {
                className: "size-6 hidden group-data-[active]:block"
            }), n.jsx("span", {
                className: "-mb-0.5 font-medium",
                children: n.jsx(B, {
                    i18nKey: "common:home.label"
                })
            })]
        }), n.jsx(V, {
            component: E,
            to: "/generator/image",
            className: "mx-4 bg-purple-700 dark:bg-purple-500 text-white rounded-full",
            onClick: () => {
                w("mobile_new_btn_click")
            },
            children: n.jsx(Ds, {
                className: "size-6"
            })
        }), n.jsxs(E, {
            to: "/market",
            "data-active": t("/market") ? "" : null,
            className: "group flex flex-col items-center no-underline dark:data-[active]:text-white opacity-60 data-[active]:opacity-100",
            onClick: () => w("nav_btn_click", {
                cate: "market"
            }),
            children: [n.jsx(Ma, {
                className: "size-6 group-data-[active]:hidden"
            }), n.jsx(Sa, {
                className: "size-6 hidden group-data-[active]:block"
            }), n.jsx("span", {
                className: "-mb-0.5 font-medium",
                children: n.jsx(B, {
                    i18nKey: "common:tab.models"
                })
            })]
        })]
    })
}

function Zt() {
    return W() ? n.jsx(qa, {}) : n.jsx(Ha, {})
}
const Ga = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
        })
    }),
    ot = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M19 10c1.13 0 2.16-.39 3-1.02V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1c0 1.48.65 2.79 1.67 3.71L12 11L5.3 6.81a.85.85 0 1 0-.9 1.44l7.07 4.42c.32.2.74.2 1.06 0l4.77-2.98c.54.19 1.1.31 1.7.31zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"
        })
    }),
    Za = e => n.jsx("svg", {
        viewBox: "0 0 20 20",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M6.032 12.907L2.561 9.002a.75.75 0 1 0-1.122.996l4 4.5a.75.75 0 0 0 1.091.032l10.5-10.5a.75.75 0 0 0-1.06-1.06zM11 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z"
        })
    }),
    Ka = e => n.jsx("svg", {
        viewBox: "0 0 20 20",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M17.998 10.17L18 10a8 8 0 1 0-8.844 7.956A3 3 0 0 1 9 17v-.576a6.47 6.47 0 0 1-3.035-1.328l1.564-1.565h.001l7.566-7.566A6.47 6.47 0 0 1 16.5 10h.5c.35 0 .686.06.998.17m-3.963-5.266l-9.131 9.131a6.5 6.5 0 0 1 9.131-9.131M10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z"
        })
    }),
    Ya = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M10.03 3.659c.856-1.548 3.081-1.548 3.937 0l7.746 14.001c.83 1.5-.255 3.34-1.969 3.34H4.254c-1.715 0-2.8-1.84-1.97-3.34zM12.997 17A.999.999 0 1 0 11 17a.999.999 0 0 0 1.997 0m-.259-7.853a.75.75 0 0 0-1.493.103l.004 4.501l.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502z"
        })
    }),
    Ja = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M12 2C6.47 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 13.44c0 .34-.22.56-.56.56H8.56c-.34 0-.56-.22-.56-.56V15h8v.44M16 14H8L7 8l3 2l2-3l2 3l3-2l-1 6Z"
        })
    });

function Qa(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    const s = document.implementation.createHTMLDocument(),
        a = s.createElement("base"),
        r = s.createElement("a");
    return s.head.appendChild(a), s.body.appendChild(r), t && (a.href = t), r.href = e, r.href
}
const Xa = (() => {
    let e = 0;
    const t = () => `0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);
    return () => (e += 1, `u${t()}${e}`)
})();

function F(e) {
    const t = [];
    for (let s = 0, a = e.length; s < a; s++) t.push(e[s]);
    return t
}

function ce(e, t) {
    const a = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    return a ? parseFloat(a.replace("px", "")) : 0
}

function er(e) {
    const t = ce(e, "border-left-width"),
        s = ce(e, "border-right-width");
    return e.clientWidth + t + s
}

function tr(e) {
    const t = ce(e, "border-top-width"),
        s = ce(e, "border-bottom-width");
    return e.clientHeight + t + s
}

function Kt(e, t = {}) {
    const s = t.width || er(e),
        a = t.height || tr(e);
    return {
        width: s,
        height: a
    }
}

function nr() {
    let e, t;
    try {
        t = Bn
    } catch {}
    const s = t && t.env ? t.env.devicePixelRatio : null;
    return s && (e = parseInt(s, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1
}
const T = 16384;

function sr(e) {
    (e.width > T || e.height > T) && (e.width > T && e.height > T ? e.width > e.height ? (e.height *= T / e.width, e.width = T) : (e.width *= T / e.height, e.height = T) : e.width > T ? (e.height *= T / e.width, e.width = T) : (e.width *= T / e.height, e.height = T))
}

function de(e) {
    return new Promise((t, s) => {
        const a = new Image;
        a.decode = () => t(a), a.onload = () => t(a), a.onerror = s, a.crossOrigin = "anonymous", a.decoding = "async", a.src = e
    })
}
async function ar(e) {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t => `data:image/svg+xml;charset=utf-8,${t}`)
}
async function rr(e, t, s) {
    const a = "http://www.w3.org/2000/svg",
        r = document.createElementNS(a, "svg"),
        i = document.createElementNS(a, "foreignObject");
    return r.setAttribute("width", `${t}`), r.setAttribute("height", `${s}`), r.setAttribute("viewBox", `0 0 ${t} ${s}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), r.appendChild(i), i.appendChild(e), ar(r)
}
const _ = (e, t) => {
    if (e instanceof t) return !0;
    const s = Object.getPrototypeOf(e);
    return s === null ? !1 : s.constructor.name === t.name || _(s, t)
};

function ir(e) {
    const t = e.getPropertyValue("content");
    return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
}

function or(e) {
    return F(e).map(t => {
        const s = e.getPropertyValue(t),
            a = e.getPropertyPriority(t);
        return `${t}: ${s}${a?" !important":""};`
    }).join(" ")
}

function lr(e, t, s) {
    const a = `.${e}:${t}`,
        r = s.cssText ? ir(s) : or(s);
    return document.createTextNode(`${a}{${r}}`)
}

function lt(e, t, s) {
    const a = window.getComputedStyle(e, s),
        r = a.getPropertyValue("content");
    if (r === "" || r === "none") return;
    const i = Xa();
    try {
        t.className = `${t.className} ${i}`
    } catch {
        return
    }
    const o = document.createElement("style");
    o.appendChild(lr(i, s, a)), t.appendChild(o)
}

function cr(e, t) {
    lt(e, t, ":before"), lt(e, t, ":after")
}
const ct = "application/font-woff",
    dt = "image/jpeg",
    dr = {
        woff: ct,
        woff2: ct,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: dt,
        jpeg: dt,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp"
    };

function mr(e) {
    const t = /\.([^./]*?)$/g.exec(e);
    return t ? t[1] : ""
}

function ze(e) {
    const t = mr(e).toLowerCase();
    return dr[t] || ""
}

function ur(e) {
    return e.split(/,/)[1]
}

function Me(e) {
    return e.search(/^(data:)/) !== -1
}

function hr(e, t) {
    return `data:${t};base64,${e}`
}
async function Yt(e, t, s) {
    const a = await fetch(e, t);
    if (a.status === 404) throw new Error(`Resource "${a.url}" not found`);
    const r = await a.blob();
    return new Promise((i, o) => {
        const l = new FileReader;
        l.onerror = o, l.onloadend = () => {
            try {
                i(s({
                    res: a,
                    result: l.result
                }))
            } catch (c) {
                o(c)
            }
        }, l.readAsDataURL(r)
    })
}
const je = {};

function fr(e, t, s) {
    let a = e.replace(/\?.*/, "");
    return s && (a = e), /ttf|otf|eot|woff2?/i.test(a) && (a = a.replace(/.*\//, "")), t ? `[${t}]${a}` : a
}
async function Fe(e, t, s) {
    const a = fr(e, t, s.includeQueryParams);
    if (je[a] != null) return je[a];
    s.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
    let r;
    try {
        const i = await Yt(e, s.fetchRequestInit, ({
            res: o,
            result: l
        }) => (t || (t = o.headers.get("Content-Type") || ""), ur(l)));
        r = hr(i, t)
    } catch (i) {
        r = s.imagePlaceholder || "";
        let o = `Failed to fetch resource: ${e}`;
        i && (o = typeof i == "string" ? i : i.message), o && console.warn(o)
    }
    return je[a] = r, r
}
async function pr(e) {
    const t = e.toDataURL();
    return t === "data:," ? e.cloneNode(!1) : de(t)
}
async function gr(e, t) {
    if (e.currentSrc) {
        const i = document.createElement("canvas"),
            o = i.getContext("2d");
        i.width = e.clientWidth, i.height = e.clientHeight, o == null || o.drawImage(e, 0, 0, i.width, i.height);
        const l = i.toDataURL();
        return de(l)
    }
    const s = e.poster,
        a = ze(s),
        r = await Fe(s, a, t);
    return de(r)
}
async function xr(e) {
    var t;
    try {
        if (!((t = e == null ? void 0 : e.contentDocument) === null || t === void 0) && t.body) return await he(e.contentDocument.body, {}, !0)
    } catch {}
    return e.cloneNode(!1)
}
async function wr(e, t) {
    return _(e, HTMLCanvasElement) ? pr(e) : _(e, HTMLVideoElement) ? gr(e, t) : _(e, HTMLIFrameElement) ? xr(e) : e.cloneNode(!1)
}
const yr = e => e.tagName != null && e.tagName.toUpperCase() === "SLOT";
async function br(e, t, s) {
    var a, r;
    let i = [];
    return yr(e) && e.assignedNodes ? i = F(e.assignedNodes()) : _(e, HTMLIFrameElement) && (!((a = e.contentDocument) === null || a === void 0) && a.body) ? i = F(e.contentDocument.body.childNodes) : i = F(((r = e.shadowRoot) !== null && r !== void 0 ? r : e).childNodes), i.length === 0 || _(e, HTMLVideoElement) || await i.reduce((o, l) => o.then(() => he(l, s)).then(c => {
        c && t.appendChild(c)
    }), Promise.resolve()), t
}

function vr(e, t) {
    const s = t.style;
    if (!s) return;
    const a = window.getComputedStyle(e);
    a.cssText ? (s.cssText = a.cssText, s.transformOrigin = a.transformOrigin) : F(a).forEach(r => {
        let i = a.getPropertyValue(r);
        r === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`), _(e, HTMLIFrameElement) && r === "display" && i === "inline" && (i = "block"), r === "d" && t.getAttribute("d") && (i = `path(${t.getAttribute("d")})`), s.setProperty(r, i, a.getPropertyPriority(r))
    })
}

function jr(e, t) {
    _(e, HTMLTextAreaElement) && (t.innerHTML = e.value), _(e, HTMLInputElement) && t.setAttribute("value", e.value)
}

function kr(e, t) {
    if (_(e, HTMLSelectElement)) {
        const s = t,
            a = Array.from(s.children).find(r => e.value === r.getAttribute("value"));
        a && a.setAttribute("selected", "")
    }
}

function Nr(e, t) {
    return _(t, Element) && (vr(e, t), cr(e, t), jr(e, t), kr(e, t)), t
}
async function Cr(e, t) {
    const s = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (s.length === 0) return e;
    const a = {};
    for (let i = 0; i < s.length; i++) {
        const l = s[i].getAttribute("xlink:href");
        if (l) {
            const c = e.querySelector(l),
                f = document.querySelector(l);
            !c && f && !a[l] && (a[l] = await he(f, t, !0))
        }
    }
    const r = Object.values(a);
    if (r.length) {
        const i = "http://www.w3.org/1999/xhtml",
            o = document.createElementNS(i, "svg");
        o.setAttribute("xmlns", i), o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.overflow = "hidden", o.style.display = "none";
        const l = document.createElementNS(i, "defs");
        o.appendChild(l);
        for (let c = 0; c < r.length; c++) l.appendChild(r[c]);
        e.appendChild(o)
    }
    return e
}
async function he(e, t, s) {
    return !s && t.filter && !t.filter(e) ? null : Promise.resolve(e).then(a => wr(a, t)).then(a => br(e, a, t)).then(a => Nr(e, a)).then(a => Cr(a, t))
}
const Jt = /url\((['"]?)([^'"]+?)\1\)/g,
    Ar = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    Sr = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function Mr(e) {
    const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
}

function Lr(e) {
    const t = [];
    return e.replace(Jt, (s, a, r) => (t.push(r), s)), t.filter(s => !Me(s))
}
async function _r(e, t, s, a, r) {
    try {
        const i = s ? Qa(t, s) : t,
            o = ze(t);
        let l;
        return r || (l = await Fe(i, o, a)), e.replace(Mr(t), `$1${l}$3`)
    } catch {}
    return e
}

function Tr(e, {
    preferredFontFormat: t
}) {
    return t ? e.replace(Sr, s => {
        for (;;) {
            const [a, , r] = Ar.exec(s) || [];
            if (!r) return "";
            if (r === t) return `src: ${a};`
        }
    }) : e
}

function Qt(e) {
    return e.search(Jt) !== -1
}
async function Xt(e, t, s) {
    if (!Qt(e)) return e;
    const a = Tr(e, s);
    return Lr(a).reduce((i, o) => i.then(l => _r(l, o, t, s)), Promise.resolve(a))
}
async function ne(e, t, s) {
    var a;
    const r = (a = t.style) === null || a === void 0 ? void 0 : a.getPropertyValue(e);
    if (r) {
        const i = await Xt(r, null, s);
        return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0
    }
    return !1
}
async function Rr(e, t) {
    await ne("background", e, t) || await ne("background-image", e, t), await ne("mask", e, t) || await ne("mask-image", e, t)
}
async function Ir(e, t) {
    const s = _(e, HTMLImageElement);
    if (!(s && !Me(e.src)) && !(_(e, SVGImageElement) && !Me(e.href.baseVal))) return;
    const a = s ? e.src : e.href.baseVal,
        r = await Fe(a, ze(a), t);
    await new Promise((i, o) => {
        e.onload = i, e.onerror = o;
        const l = e;
        l.decode && (l.decode = i), l.loading === "lazy" && (l.loading = "eager"), s ? (e.srcset = "", e.src = r) : e.href.baseVal = r
    })
}
async function Er(e, t) {
    const a = F(e.childNodes).map(r => en(r, t));
    await Promise.all(a).then(() => e)
}
async function en(e, t) {
    _(e, Element) && (await Rr(e, t), await Ir(e, t), await Er(e, t))
}

function Pr(e, t) {
    const {
        style: s
    } = e;
    t.backgroundColor && (s.backgroundColor = t.backgroundColor), t.width && (s.width = `${t.width}px`), t.height && (s.height = `${t.height}px`);
    const a = t.style;
    return a != null && Object.keys(a).forEach(r => {
        s[r] = a[r]
    }), e
}
const mt = {};
async function ut(e) {
    let t = mt[e];
    if (t != null) return t;
    const a = await (await fetch(e)).text();
    return t = {
        url: e,
        cssText: a
    }, mt[e] = t, t
}
async function ht(e, t) {
    let s = e.cssText;
    const a = /url\(["']?([^"')]+)["']?\)/g,
        i = (s.match(/url\([^)]+\)/g) || []).map(async o => {
            let l = o.replace(a, "$1");
            return l.startsWith("https://") || (l = new URL(l, e.url).href), Yt(l, t.fetchRequestInit, ({
                result: c
            }) => (s = s.replace(o, `url(${c})`), [o, c]))
        });
    return Promise.all(i).then(() => s)
}

function ft(e) {
    if (e == null) return [];
    const t = [],
        s = /(\/\*[\s\S]*?\*\/)/gi;
    let a = e.replace(s, "");
    const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    for (;;) {
        const c = r.exec(a);
        if (c === null) break;
        t.push(c[0])
    }
    a = a.replace(r, "");
    const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
        l = new RegExp(o, "gi");
    for (;;) {
        let c = i.exec(a);
        if (c === null) {
            if (c = l.exec(a), c === null) break;
            i.lastIndex = l.lastIndex
        } else l.lastIndex = i.lastIndex;
        t.push(c[0])
    }
    return t
}
async function zr(e, t) {
    const s = [],
        a = [];
    return e.forEach(r => {
        if ("cssRules" in r) try {
            F(r.cssRules || []).forEach((i, o) => {
                if (i.type === CSSRule.IMPORT_RULE) {
                    let l = o + 1;
                    const c = i.href,
                        f = ut(c).then(h => ht(h, t)).then(h => ft(h).forEach(d => {
                            try {
                                r.insertRule(d, d.startsWith("@import") ? l += 1 : r.cssRules.length)
                            } catch (p) {
                                console.error("Error inserting rule from remote css", {
                                    rule: d,
                                    error: p
                                })
                            }
                        })).catch(h => {
                            console.error("Error loading remote css", h.toString())
                        });
                    a.push(f)
                }
            })
        } catch (i) {
            const o = e.find(l => l.href == null) || document.styleSheets[0];
            r.href != null && a.push(ut(r.href).then(l => ht(l, t)).then(l => ft(l).forEach(c => {
                o.insertRule(c, r.cssRules.length)
            })).catch(l => {
                console.error("Error loading remote stylesheet", l)
            })), console.error("Error inlining remote css file", i)
        }
    }), Promise.all(a).then(() => (e.forEach(r => {
        if ("cssRules" in r) try {
            F(r.cssRules || []).forEach(i => {
                s.push(i)
            })
        } catch (i) {
            console.error(`Error while reading CSS rules from ${r.href}`, i)
        }
    }), s))
}

function Fr(e) {
    return e.filter(t => t.type === CSSRule.FONT_FACE_RULE).filter(t => Qt(t.style.getPropertyValue("src")))
}
async function Br(e, t) {
    if (e.ownerDocument == null) throw new Error("Provided element is not within a Document");
    const s = F(e.ownerDocument.styleSheets),
        a = await zr(s, t);
    return Fr(a)
}
async function Hr(e, t) {
    const s = await Br(e, t);
    return (await Promise.all(s.map(r => {
        const i = r.parentStyleSheet ? r.parentStyleSheet.href : null;
        return Xt(r.cssText, i, t)
    }))).join(`
`)
}
async function Ur(e, t) {
    const s = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await Hr(e, t);
    if (s) {
        const a = document.createElement("style"),
            r = document.createTextNode(s);
        a.appendChild(r), e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a)
    }
}
async function Dr(e, t = {}) {
    const {
        width: s,
        height: a
    } = Kt(e, t), r = await he(e, t, !0);
    return await Ur(r, t), await en(r, t), Pr(r, t), await rr(r, s, a)
}
async function $r(e, t = {}) {
    const {
        width: s,
        height: a
    } = Kt(e, t), r = await Dr(e, t), i = await de(r), o = document.createElement("canvas"), l = o.getContext("2d"), c = t.pixelRatio || nr(), f = t.canvasWidth || s, h = t.canvasHeight || a;
    return o.width = f * c, o.height = h * c, t.skipAutoScale || sr(o), o.style.width = `${f}`, o.style.height = `${h}`, t.backgroundColor && (l.fillStyle = t.backgroundColor, l.fillRect(0, 0, o.width, o.height)), l.drawImage(i, 0, 0, o.width, o.height), o
}
async function Vr(e, t = {}) {
    return (await $r(e, t)).toDataURL()
}
const Or = e => n.jsxs("svg", {
        viewBox: "0 0 64 64",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: [n.jsx("path", {
            fill: "#0c567d",
            d: "M63.68 56.51c0 3.753-3.208 6.859-6.957 6.859H7.333c-3.745 0-7.02-3.106-7.02-6.859V7.13C.314 3.382 3.588.002 7.333.002h49.39c3.749 0 6.957 3.38 6.957 7.128v49.38"
        }), n.jsx("path", {
            fill: "#fff",
            d: "M17.548 40.3c.911.905-1 4.292-4.267 7.556c-3.27 3.267-6.649 5.178-7.562 4.271c-.907-.911 1-4.298 4.27-7.563c3.265-3.266 6.656-5.179 7.559-4.264M57.27 51.26c.915-.907-1-4.292-4.267-7.556c-3.268-3.269-6.648-5.178-7.56-4.269c-.906.909 1 4.296 4.271 7.56c3.267 3.269 6.654 5.18 7.556 4.265",
            opacity: .3
        }), n.jsxs("g", {
            fill: "#f5eb35",
            children: [n.jsx("ellipse", {
                cx: 5.495,
                cy: 30.771,
                rx: 4.01,
                ry: 2.326
            }), n.jsx("ellipse", {
                cx: 58.27,
                cy: 30.771,
                rx: 4.01,
                ry: 2.33
            }), n.jsx("ellipse", {
                cx: 21.23,
                cy: 3.583,
                rx: 2.076,
                ry: 1.207,
                transform: "rotate(65.165 21.231 3.581)"
            })]
        }), n.jsx("path", {
            fill: "#fff",
            d: "M27.301 17.769c-.926.43-3.482-3.125-5.712-7.947c-2.227-4.815-3.284-9.06-2.355-9.495c.926-.427 3.482 3.127 5.71 7.942c2.227 4.82 3.282 9.07 2.357 9.5",
            opacity: .3
        }), n.jsx("ellipse", {
            cx: 42.793,
            cy: 3.584,
            fill: "#f5eb35",
            rx: 2.077,
            ry: 1.205,
            transform: "rotate(-65.172 42.792 3.584)"
        }), n.jsx("path", {
            fill: "#fff",
            d: "M23.66 48.03c-.837-.354-2.086.505-2.793 1.914c-.707 1.413-.605 2.842.231 3.195c.833.354 2.085-.502 2.792-1.911c.708-1.413.605-2.843-.23-3.198",
            opacity: .8
        }), n.jsx("path", {
            fill: "#fff",
            d: "M23.418 48.807c-1.446-.615-3.608.868-4.829 3.309c-1.222 2.44-1.047 4.913.399 5.525c1.442.613 3.607-.866 4.827-3.307c1.225-2.44 1.048-4.916-.397-5.527m16.842-.002c1.446-.613 3.608.87 4.829 3.311c1.222 2.44 1.047 4.913-.399 5.525c-1.442.613-3.606-.866-4.827-3.307c-1.225-2.44-1.048-4.916.397-5.529",
            opacity: .8
        }), n.jsx("path", {
            fill: "#fff",
            d: "M42.684 53.14c-.837.354-2.087-.502-2.795-1.911c-.708-1.413-.605-2.844.229-3.198c.837-.354 2.087.505 2.795 1.914c.707 1.408.604 2.841-.229 3.195",
            opacity: .8
        }), n.jsx("path", {
            fill: "#f5eb35",
            d: "M9.06 54.51c.911.913.377 2.92-1.188 4.483c-1.565 1.564-3.571 2.098-4.48 1.19c-.909-.908-.377-2.915 1.188-4.484c1.567-1.564 3.573-2.093 4.48-1.189m47.649-41.27c-.909-.91-.377-2.914 1.191-4.479c1.563-1.569 3.569-2.099 4.479-1.193c.909.912.378 2.919-1.189 4.483c-1.565 1.567-3.57 2.098-4.481 1.189M53.43 54.51c.911-.906 2.916-.377 4.48 1.189c1.564 1.567 2.099 3.574 1.188 4.482c-.907.907-2.912.374-4.48-1.19c-1.566-1.563-2.098-3.57-1.188-4.481M8.328 13.24c-.909.911-2.914.376-4.479-1.188C2.285 10.484 1.751 8.48 2.66 7.568c.909-.906 2.918-.376 4.481 1.193c1.567 1.566 2.098 3.573 1.187 4.479M32 19.666l7.608-9.135L39.15 22.1l12.11-2.434l-8.308 8.584l10.95 5.413l-12.271 1.587L46.3 45.973l-10.495-6.155L32 63.3l-3.8-23.482l-10.496 6.155l4.667-10.723L10.1 33.663l10.95-5.413l-8.309-8.584l12.11 2.434l-.457-11.569z"
        }), n.jsxs("g", {
            fill: "#fff",
            children: [n.jsx("path", {
                d: "m32 20.08l6.472-7.778l-.392 9.838l10.31-2.06l-7.07 7.303l9.317 4.605L40.19 33.34l3.97 9.12l-8.92-5.24L32 43.25l-3.237-6.03l-8.926 5.24l3.969-9.12l-10.443-1.352l9.32-4.605l-7.07-7.303l10.306 2.06l-.389-9.838z",
                opacity: .8
            }), n.jsx("ellipse", {
                cx: 32.25,
                cy: 30.666,
                opacity: .8,
                rx: 9.149,
                ry: 8.545
            }), n.jsx("path", {
                d: "M39.916 35.528c0 3.957-3.432 7.164-7.665 7.164c-4.235 0-7.667-3.207-7.667-7.164c0-3.953 3.431-7.161 7.667-7.161c4.233 0 7.665 3.208 7.665 7.161",
                opacity: .7
            })]
        }), n.jsx("path", {
            fill: "#fff",
            d: "M44.751.326c-.927-.431-3.484 3.125-5.715 7.948c-2.227 4.813-3.281 9.06-2.355 9.495c.927.426 3.484-3.128 5.711-7.943c2.228-4.821 3.281-9.07 2.359-9.5m-30.57 18.116c-.907.913-4.294-1-7.556-4.268c-3.27-3.269-5.177-6.648-4.27-7.561c.911-.907 4.295 1 7.56 4.271c3.266 3.265 5.181 6.654 4.266 7.558M62.18 6.616c-.907-.913-4.294 1-7.556 4.267c-3.271 3.269-5.178 6.65-4.271 7.561c.911.907 4.296-1 7.56-4.27c3.266-3.266 5.182-6.656 4.267-7.558",
            opacity: .3
        })]
    }),
    Wr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ7SURBVHgB7ZfLa1x1FMc/9zGTO49O0iTNq5ZprE1ptVRR0NqFQpGCUkV3/gUuXLlQEVy7diviHyBSwYJ9WKgVH00UIylt0jxMGvIoeU3mzsx9vzwzrixxRtLBbHqYgXvnd+ae7+/7O+d7zlV6e3sT9tBU9tgeAdhzAHqzRaPD4OP3PsAJYzrzHSiGjmeFBF4MiiLwFZIkIZJvqVRmeu4us7OTLC0v0h4AhsHw4WOoiUKmYEg8hVxnBteXwoliFF3Dc0NiuY3l/rVzZymZAdMzU3z2xadsbq7TypofgTy4VqmiGinCSMF2fLn3SGmy6yggm1fJZjSyWQ09peAFEbblcGzkOB+9/wlDQ4d4KACyccIwIgkFiVw7AiCMEhzZdc202F63seXasgJc28cTZsxKTdZdCvv28e47H8pJNd9j0yMIA9llLoeiwfLkHbp6+nCsNBO/j7O5sdGgvdDVxXDxCP0HBiUfYqIwJPJD1I40HemMsHGKu9N/7A6ApmnCgoLruPRnheKUhrm9zdVrV7h1e+Ifvq+ee50333gbU4Dh2/QMDeEJY8+cOr17AHXeXdtBdU0ynQV8xyPxPGKpigft0tWLHB56nOHu/ehumcA9gJE1GOx/DFVVieN4xwhqi/hUl+Y4kNMIPRffdSTdY4Ig3NF9evY2SUeWUNEpl8uNfIljqaBM9l9DNGUgCnwG9husLS+TSqdR9QyaMBA49o7+WSKyakCuK8NaxcRNVNEIeU4U7Q5ASnLgq0vXmVkrYdsBIweLnD99FD29899GuruJqyYLi+tUxV/JD1CONNw6c7sBUFe7F44UefnceS7+MI+WLvLN99dIJeEDbgpvvXiG+2tb3Jgps7iyRCGn0CNA01I5zaw5AJHYkadPsr2xzUtnz3B8oI/5hV58c5xX7JpIcogS+hwrHqYzt48bsw5POIP09VfoHqhRGr3M5OrM7gGEvk86iejPa/SwiFLd4sn+hHTxpNSoZLYoX9LAGYkcKzwvimike1m4Jz5eie3nTnL5wpfsGkAiZRB5DnlDGpFkfxLbxLohwSI0Ubh8ISvSbMvvcWN9SHOIahucMKr8aVX4/Oq3tLLmzSiXJS26r+k6ST2TlfonaRxNPmdIY8phm6b0paQBQGRQxMfiwugYX4+NSRlGDwcgjiMOnXmWyuyy6HvQCIyq8fPELTZLJdS4nowqssKmKOTc0jIzUrJBGPJfrXkZSu0PHj1BUrFw71cJkr/V7MrNUcanpmiHtZyIYumGXcVhUikaDNQhtHOMbg1AOl6qsJ+DT52gp68gme/VpY12WYuBJJFGApOSA52iAetqHrtSERbax4HeymF8apX5lXUsYeLXOyvkfR3fcmiXNQUQSNArN6dlKOmQOWABc3Wen368jlmt8L8AqNYsfvvlu8aUo1pblKsWq4v3cOOAdpny6N2QPbY9B/AXzOwI2E31w+AAAAAASUVORK5CYII=",
    fl = /Mac/.test(navigator.platform),
    Be = () => navigator.vendor === "Apple Computer, Inc.",
    qr = /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream && Be(),
    ke = /android/i.test(window.navigator.userAgent);

function Gr() {
    const e = ha(),
        {
            t
        } = S("common"),
        [s, a] = u.useState(!1),
        r = u.useRef(!1),
        i = () => {
            r.current = !1
        },
        o = () => {
            r.current = !0
        },
        l = async () => {
            if ("getInstalledRelatedApps" in navigator && typeof navigator.getInstalledRelatedApps == "function") try {
                const f = await navigator.getInstalledRelatedApps();
                Array.isArray(f) && f.length > 0 && a(!0)
            } catch {}
        };
    u.useEffect(() => {
        ke && l()
    }, []), u.useEffect(() => (window.addEventListener("focus", i), window.addEventListener("blur", o), () => {
        window.removeEventListener("focus", i), window.removeEventListener("blur", o)
    }), []);
    const c = ke && !s ? Se.playStoreLink : qr ? Se.iosAppStoreLink : `https://pixai.art${e.pathname}`;
    return n.jsxs("section", {
        className: "box-content px-3 flex items-center gap-2 text-xs bg-background border-b border-neutral-200 dark:border-neutral-700",
        style: {
            height: 50
        },
        children: [n.jsx("img", {
            src: Wr,
            className: "w-7 h-7 rounded"
        }), n.jsxs("div", {
            className: "flex flex-col leading-none overflow-hidden",
            children: [n.jsx("strong", {
                className: "text-sm",
                children: "PixAI"
            }), n.jsx("span", {
                className: "w-full truncate opacity-60",
                children: t("common:use-app-for-the-better-xp")
            })]
        }), n.jsx("a", {
            href: c,
            target: "_blank",
            rel: "noreferrer",
            className: "px-3 py-1.5 text-[15px] font-medium text-white bg-[#017AFE] rounded-full ml-auto",
            onClick: f => {
                w("download_click"), ke && (f.preventDefault(), Nt({
                    hideIos: !0,
                    trackingArgs: {
                        source: "user"
                    }
                }))
            },
            children: t("common:open-in-app")
        })]
    })
}

function Zr() {
    return W() && !Be() ? n.jsx(Gr, {}) : null
}
const Kr = (e, t) => new Promise((s, a) => {
    const r = St({
        children: n.jsx(Yr, {
            onClose: () => {
                var i;
                (i = r.current) == null || i.close(), s(null)
            },
            artwork: e,
            opts: t
        }),
        onClose: () => {
            s(null)
        },
        fullWidth: !1,
        responsive: !0,
        dialogProps: {
            maxWidth: "sm"
        }
    })
});

function Yr(e) {
    const {
        t
    } = S(["common"]);
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("section", {
            className: "flex flex-col items-center pt-6 pb-1",
            children: [n.jsx(Or, {
                width: 48,
                height: 48
            }), n.jsx("h1", {
                className: "mt-1 text-center font-semibold text-lg sm:text-xl",
                children: t("common:ranking.title.share-dialog.top-congrats")
            }), n.jsx("p", {
                className: "whitespace-pre-line text-center font-semibold text-lg sm:text-xl",
                children: t("common:ranking.title.share-dialog.top", {
                    filterType: e.opts.filterType,
                    type: e.opts.type
                })
            })]
        }), n.jsx("section", {
            className: "mt-1",
            children: n.jsx(Jr, {
                ...e
            })
        })]
    })
}

function Jr(e) {
    const {
        artwork: t,
        opts: s
    } = e;
    return t.media ? n.jsxs(n.Fragment, {
        children: [n.jsx(Qr, {
            artwork: t
        }), n.jsx(ti, {
            artwork: t,
            rankingOpts: s
        })]
    }) : null
}

function Qr(e) {
    return n.jsx("div", {
        className: "overflow-x-auto py-[5px] w-full",
        children: n.jsx("div", {
            className: "flex items-center justify-center gap-2 mx-auto w-fit",
            children: n.jsx(Ys, {
                artwork: e.artwork,
                scene: "ranking"
            })
        })
    })
}
const Xr = 32 * 2 + 136 + 4 + 58 + 16 * 2 + 64,
    ei = 278 + 16 * 2 + 64;

function ti(e) {
    const t = W(),
        {
            artwork: s,
            rankingOpts: a
        } = e,
        {
            media: r
        } = s;
    if (!(r != null && r.height)) return null;
    const i = document.documentElement.style.getPropertyValue("--visible-height"),
        o = (Number(i.replace("px", "")) || 0) - (t ? ei : Xr),
        c = r.height / 12 / 75,
        f = o / r.height * c,
        h = o;
    return n.jsx(ni, {
        className: "my-4 px-4",
        imageHeight: h,
        artwork: e.artwork,
        scale: f,
        mode: "preview",
        rankingOpts: a
    })
}

function ni(e) {
    const {
        t
    } = S(["common"]), {
        imageHeight: s,
        artwork: a,
        scale: r,
        mode: i,
        rankingOpts: o
    } = e, {
        media: l
    } = a;
    if (!l) return null;
    const c = Mt(l),
        f = globalThis.devicePixelRatio ?? 1;
    return n.jsx("div", {
        className: j("flex flex-col items-center justify-center", e.className),
        children: n.jsxs("div", {
            className: "relative",
            style: {
                fontSize: `calc(16px * ${r})`,
                paddingBottom: 64,
                minHeight: s,
                minWidth: l.width && l.height && s ? l.width / l.height * s : 0
            },
            children: [n.jsx("img", {
                src: c,
                className: "h-full object-cover rounded-lg",
                style: {
                    maxHeight: s ?? (i === "snapshot" ? (l.height ?? 512) / f : void 0)
                },
                loading: "lazy",
                crossOrigin: "anonymous"
            }), n.jsx("div", {
                className: "absolute select-none top-0 left-0 w-full flex",
                style: {
                    height: "calc(100% - 64px)"
                },
                children: n.jsx(tn, {
                    rankingOpts: o,
                    media: l,
                    imageHeight: s,
                    scale: r,
                    title: t("common:ranking.title.share-dialog.bottom", {
                        filterType: e.rankingOpts.filterType,
                        type: e.rankingOpts.type
                    }),
                    className: "rounded-b-lg"
                })
            }), n.jsx(si, {
                artwork: a,
                rankingOpts: o
            })]
        })
    })
}

function tn(e) {
    return n.jsxs("div", {
        className: j("mt-auto items-center w-full bg-black/50 px-6 gap-4", e.className),
        style: {
            display: "flex",
            height: "6em"
        },
        children: [n.jsx("p", {
            className: "flex items-center justify-center text-white font-semibold rounded bg-purple-700 tabular-nums pointer-events-none",
            style: {
                fontSize: "2em",
                width: "2.25em",
                padding: "0.325em 0"
            },
            children: e.rankingOpts.rankNumber
        }), n.jsx("p", {
            className: j("font-semibold capitalize shrink-0 text-white"),
            style: {
                fontSize: "1.5em"
            },
            children: e.title
        })]
    })
}

function si(e) {
    const {
        t
    } = S(["common"]), s = u.useRef(null), {
        artwork: a,
        rankingOpts: r
    } = e, [i, o] = ae(async () => {
        var p, x;
        w("share_image_dl_click", {
            scene: "ranking"
        });
        const h = `${Qs({artwork:a})}.png`,
            d = await ((x = (p = s.current) == null ? void 0 : p.snapshot) == null ? void 0 : x.call(p));
        if (d) try {
            await Xs(d, h, {
                skipConversion: !1
            }), w("share_image_dl_dialog_show", {
                scene: "ranking"
            }), tt(t, {
                type: "download"
            })
        } catch (g) {
            Z.error(t("artwork:share.watermark-dialog.notice.failed-to-download") + ": ", g.message)
        }
    }, [a]), [l, c] = ae(async () => {
        w("share_copy_image_click", {
            scene: "ranking"
        });
        const f = "image/png";
        try {
            const h = async () => {
                var g, k;
                const d = await ((k = (g = s.current) == null ? void 0 : g.snapshot) == null ? void 0 : k.call(g));
                if (!d) throw new Error("File URL not available");
                let p;
                const x = await fetch(d).then(y => y.blob());
                if (x.type === "image/png" ? p = x : p = await ea(x, "image.png"), !p) throw new Error("image not exists");
                return p
            };
            await navigator.clipboard.write([new ClipboardItem({
                [f]: h()
            })]), w("share_copy_image_dialog_show", {
                scene: "ranking"
            }), tt(t, {
                type: "copy"
            })
        } catch (h) {
            Z.error(t("artwork:share.watermark-dialog.notice.failed-to-copy") + ": " + h.message)
        }
    }, [a]);
    return Be() ? null : n.jsxs("div", {
        className: "flex items-center absolute bottom-0 px-2 py-3 w-full gap-4 min-w-[120px] justify-end",
        style: {
            fontSize: "16px"
        },
        children: [n.jsx(re, {
            className: "min-w-0 w-10 h-10 rounded-full",
            disabled: l,
            onClick: c,
            children: l ? n.jsx(Ke, {
                className: "text-primary",
                size: 20
            }) : n.jsx(Hn, {
                width: 20,
                height: 20
            })
        }), n.jsx(re, {
            disabled: i,
            className: "min-w-0 w-10 h-10 rounded-full",
            onClick: o,
            children: i ? n.jsx(Ke, {
                className: "text-primary",
                size: 20
            }) : n.jsx(Js, {
                fontSize: 20
            })
        }), a.media && n.jsx(ai, {
            ...e,
            media: a.media,
            title: t("common:ranking.title.share-dialog.bottom", {
                filterType: r.filterType,
                type: r.type
            }),
            ref: s
        })]
    })
}
const ai = u.forwardRef(function(t, s) {
        const [a, r] = u.useState(void 0), {
            media: i,
            title: o
        } = t, l = u.useCallback(async () => {
            const p = document.getElementById("snapshot");
            if (!p) return;
            const x = {
                width: p.clientWidth,
                height: p.clientHeight,
                pixelRatio: 1
            };
            try {
                return await Vr(p, x)
            } catch (g) {
                Z.error(`${g==null?void 0:g.message}`)
            }
        }, []);
        if (u.useImperativeHandle(s, () => ({
                snapshot: l
            }), [l]), u.useEffect(() => {
                const p = Mt(i);
                p && ta(p).then(x => x && r(x))
            }, [i.id]), !i.height) return null;
        const c = (i.height ?? 512) / 12,
            f = globalThis.devicePixelRatio ?? 1,
            h = c / 72 / f,
            d = n.jsxs("div", {
                id: "snapshot",
                className: "relative",
                children: [n.jsx("img", {
                    src: a,
                    className: "object-cover",
                    loading: "lazy",
                    crossOrigin: "anonymous",
                    style: {
                        maxHeight: i.height / f
                    }
                }), n.jsx("div", {
                    className: "absolute select-none bottom-0 left-0 w-full",
                    style: {
                        fontSize: `calc(16px * ${h})`
                    },
                    children: n.jsx(tn, {
                        ...t,
                        title: o
                    })
                })]
            });
        return Un.createPortal(n.jsx("div", {
            style: {
                position: "absolute",
                left: -99999,
                top: -99999,
                pointerEvents: "none"
            },
            children: d
        }), document.body)
    }),
    ri = new Ut({}),
    ii = Dt(ri, !1),
    oi = new Ut({}),
    li = Dt(oi, 0),
    ci = ({
        user: e,
        userId: t,
        initialValue: s = (e == null ? void 0 : e.followedByMe) == null ? !1 : e == null ? void 0 : e.followedByMe,
        initialCount: a = (e == null ? void 0 : e.followerCount) || 0,
        className: r,
        followProps: i = {
            className: "bg-theme-primary text-white dark:text-white ring-1 ring-inset ring-black/20 dark:ring-white/30",
            variant: "contained",
            startIcon: n.jsx(Bt, {
                className: "size-5"
            })
        },
        followingProps: o = {
            className: "bg-black text-white",
            variant: "outlined",
            startIcon: n.jsx(aa, {
                className: "size-5"
            })
        },
        disableUnfollow: l,
        scene: c,
        ...f
    }) => {
        const {
            t: h
        } = S(["user"]), [d, p] = ii(t, s), [x, g] = li(t, a), {
            data: k
        } = U(), y = u.useCallback(async C => {
            if (C.preventDefault(), !t) return;
            if (!k) {
                w("follow_btn_click", {
                    notLogin: !0,
                    scene: c
                }), Ee(void 0, {
                    fromPath: "follow"
                });
                return
            }
            const A = !d;
            p(A), g(x + (A ? 1 : -1));
            try {
                w("follow_btn_click", {
                    userId: t,
                    target: A,
                    scene: c
                }), await me.setFollowState({
                    userId: t,
                    target: A
                })
            } catch (D) {
                Z.error(D == null ? void 0 : D.message), p(d), g(x)
            }
        }, [k, t, d, x]);
        return t === (k == null ? void 0 : k.id) ? null : n.jsx(re, {
            onClick: y,
            variant: d ? o.variant : i.variant,
            className: j("rounded-md font-bold shadow-none", r, d ? o.className : i.className),
            startIcon: d ? o.startIcon : i.startIcon,
            disabled: d ? l : !1,
            ...f,
            children: n.jsx("span", {
                className: "capitalize",
                children: d ? (o == null ? void 0 : o.label) ?? h("user:following") : (i == null ? void 0 : i.label) ?? h("user:follow")
            })
        })
    };

function di(e) {
    const {
        type: t
    } = e.item;
    return t === m.Follow ? n.jsx(mi, {
        item: e.item
    }) : null
}

function mi(e) {
    const {
        t
    } = S(["user"]), {
        relatedUserIds: s
    } = e.item, {
        data: a
    } = Dn(s == null ? void 0 : s[0]);
    return a ? n.jsx(ci, {
        userId: a.id,
        initialValue: a.followedByMe,
        className: "font-semibold text-xs text-white py-1 px-3",
        followProps: {
            className: "bg-purple-600",
            label: t("user:follow-back")
        },
        followingProps: {
            className: "bg-gray-400",
            variant: "contained"
        },
        disableUnfollow: !0,
        scene: "notification"
    }) : null
}
const Le = new Set;

function ui(e) {
    Le.add(e), $n(() => hi(), 2e3)()
}
async function hi() {
    const e = Array.from(Le);
    if (e.length !== 0) try {
        await me.markNotificationRead({
            ids: e
        }), e.forEach(t => Le.delete(t)), Vn(void 0, void 0, !0)
    } catch (t) {
        console.log(t)
    }
}
const _e = [m.DailyRanking, m.WeeklyRanking, m.MonthlyRanking, m.NewbiesRanking],
    K = [{
        label: "likes",
        listType: "plain",
        types: [m.Like, m.ItemLike]
    }, {
        label: "comments",
        listType: "plain",
        types: [m.Comment]
    }, {
        label: "followers",
        listType: "plain",
        types: [m.Follow]
    }, {
        label: "system",
        listType: "plain",
        types: [m.ContestReward, m.ModelClaim, m.ModelClaimedByOthers, m.TrainingTaskCompleted, m.Privilege, m.MembershipGifted, m.MembershipExpired, m.MembershipRenewed, m.MembershipRenewalFailed, m.PaymentFailed, m.ModelCoverNsfw, m.UserAvatarNsfw, m.UserCoverNsfw, m.AppealAccepted, m.AppealRejected, ..._e]
    }, {
        label: "news",
        listType: "external",
        types: [m.News]
    }],
    fi = K.map(e => e.types).flat();
var bt;
const He = ((bt = K.find(e => e.label === "system")) == null ? void 0 : bt.types) ?? [],
    pi = [m.PaymentFailed],
    gi = [m.Privilege, m.MembershipGifted, m.MembershipExpired, m.MembershipRenewed, m.MembershipRenewalFailed],
    xi = [m.AppealAccepted, m.AppealRejected],
    wi = e => {
        const t = K.find(s => s.types.includes(e));
        return t ? t.label : void 0
    },
    yi = ({
        item: e
    }) => {
        var Ge;
        const {
            t
        } = S(["common"]), {
            closePanel: s
        } = u.useContext(Ue), a = u.useRef(null), r = vt(a, {
            root: document.getElementById("notifications-container"),
            rootMargin: "0px",
            threshold: 1
        }), {
            data: i
        } = U();
        u.useEffect(() => {
            e.unread && r != null && r.isIntersecting && ui(e.id)
        }, [r, e.id, e.unread]);
        const {
            relatedUsers: o,
            artwork: l,
            createdAt: c,
            refId: f,
            refMedia: h,
            refType: d,
            refTitle: p,
            updatedAt: x,
            type: g,
            unread: k
        } = e, y = u.useMemo(() => {
            if (!o || o.length === 0) return;
            const b = na(o[0]),
                L = n.jsx("div", {
                    className: "inline-block",
                    children: n.jsx(E, {
                        target: "_blank",
                        to: `/@${o[0].username}`,
                        onClick: $ => {
                            $.preventDefault(), $.stopPropagation(), window.open(`/@${o[0].username}`, "_blank")
                        },
                        children: n.jsx("span", {
                            className: "text-primary font-bold",
                            children: b
                        })
                    })
                });
            return o.length > 1 ? n.jsx(On, {
                i18nKey: "common:someone-and-x-others",
                values: {
                    x: o.length - 1,
                    name: b
                },
                children: L
            }) : L
        }, [o]), C = p && n.jsxs("span", {
            className: "text-primary font-medium",
            children: [t("common:punctuations.colon"), " ", p]
        }), A = u.useMemo(() => {
            if (l && !xi.includes(g)) {
                const b = Ye(e),
                    L = P(e).with({
                        type: m.Like
                    }, () => P(e).with({
                        artwork: {
                            type: Je.ComfyFlow
                        }
                    }, () => t("common:notification.liked-your-workflow")).otherwise(() => t("common:notification.liked-your-artwork"))).with({
                        type: m.Comment
                    }, () => P(e).with({
                        artwork: {
                            type: Je.ComfyFlow
                        }
                    }, () => t("common:notification.comment-your-workflow")).otherwise(() => t("common:notification.comment-your-artwork"))).with({
                        type: m.DailyRanking
                    }, xe => t("common:notification.your-artwork-made-ranking", {
                        filterType: t("common:ranking.filter-type.daily"),
                        type: t(`common:ranking.${b}.label`)
                    })).with({
                        type: m.WeeklyRanking
                    }, () => t("common:notification.your-artwork-made-ranking", {
                        filterType: t("common:ranking.filter-type.weekly"),
                        type: t(`common:ranking.${b}.label`)
                    })).with({
                        type: m.MonthlyRanking
                    }, () => t("common:notification.your-artwork-made-ranking", {
                        filterType: t("common:ranking.filter-type.monthly"),
                        type: t(`common:ranking.${b}.label`)
                    })).with({
                        type: m.NewbiesRanking
                    }, () => t("common:notification.your-artwork-made-ranking", {
                        filterType: t("common:ranking.filter-type.new-user"),
                        type: t(`common:ranking.${b}.label`)
                    })).with({
                        type: m.ContestReward
                    }, () => n.jsx("span", {
                        children: t("common:notification.contest-reward")
                    })).otherwise(() => null),
                    $ = e.type === m.Comment ? e.content : l.title;
                return n.jsxs("span", {
                    className: "text-primary-light",
                    children: [y, " ", L, $ ? n.jsxs("span", {
                        className: "text-primary",
                        children: [t("common:punctuations.colon"), " ", $]
                    }) : null]
                })
            }
            return P(e).returnType().with({
                type: m.Follow
            }, () => n.jsxs("span", {
                children: [y, " ", t("common:notification.followed-you")]
            })).with({
                type: m.ModelClaim
            }, () => n.jsxs("span", {
                className: "",
                children: [n.jsx("span", {
                    className: "mr-1",
                    children: "🎊"
                }), t("common:notification.claimed-model"), C]
            })).with({
                type: m.ModelClaimedByOthers
            }, () => n.jsx("span", {
                children: t("common:notification.model-claimed-by-others", {
                    modelName: p ?? "unknown"
                })
            })).with({
                type: m.ItemLike,
                refType: ie.Model
            }, () => n.jsxs("span", {
                className: "text-primary-light",
                children: [y, " ", t("common:notification.liked-your-model"), C]
            })).with({
                type: m.ItemLike
            }, () => n.jsxs("span", {
                className: "text-primary-light",
                children: [y, " ", t("common:notification.liked-your-unknown-item"), C]
            })).with({
                type: m.TrainingTaskCompleted
            }, () => n.jsx("span", {
                children: t("common:notification.your-training-task-is-completed")
            })).with({
                type: m.Privilege,
                content: I.when(b => !!b)
            }, b => n.jsx("span", {
                children: b.content
            })).with({
                type: m.Privilege,
                data: I.when(b => !!(b != null && b.memberGift))
            }, b => n.jsx("span", {
                children: t("common:notification.privilege-relaunch-gift-received", {
                    percentage: b.data.memberGift.percentage ?? 50
                })
            })).with({
                type: m.Privilege
            }, () => n.jsx("span", {
                children: t("common:notification.privilege-received")
            })).with({
                type: m.MembershipGifted
            }, () => n.jsx("span", {
                children: t("common:notification.membership-gifted")
            })).with({
                type: m.MembershipExpired
            }, () => n.jsx("span", {
                children: t("common:notification.membership-expired")
            })).with({
                type: m.MembershipRenewed
            }, () => n.jsx("span", {
                children: t("common:notification.membership-renewed")
            })).with({
                type: m.MembershipRenewalFailed
            }, () => n.jsx("span", {
                children: t("common:notification.membership-renewal-failed")
            })).with({
                type: m.PaymentFailed
            }, () => n.jsx("span", {
                children: t("common:notification.payment-failed")
            })).with({
                type: m.ModelCoverNsfw
            }, () => n.jsx("span", {
                children: t("common:notification.model-cover-nsfw")
            })).with({
                type: m.UserAvatarNsfw
            }, () => n.jsx("span", {
                children: t("common:notification.user-avatar-nsfw")
            })).with({
                type: m.UserCoverNsfw
            }, () => n.jsx("span", {
                children: t("common:notification.user-cover-nsfw")
            })).with({
                type: m.AppealAccepted
            }, () => {
                var b;
                return n.jsx("span", {
                    children: t(`common:notification.appeal-accepted.${((b=e.refType)==null?void 0:b.toLowerCase())??"unknown"}`)
                })
            }).with({
                type: m.AppealRejected
            }, () => {
                var b;
                return n.jsx("span", {
                    children: t(`common:notification.appeal-rejected.${((b=e.refType)==null?void 0:b.toLowerCase())??"unknown"}`)
                })
            }).with({
                type: m.ContestReward
            }, () => n.jsx("span", {
                children: t("common:notification.contest-reward")
            })).otherwise(() => null)
        }, [e, y, l, t]), D = u.useMemo(() => {
            var b;
            return P({
                artworkId: l == null ? void 0 : l.id,
                type: e.type,
                refType: d,
                refId: f,
                firstUsername: (b = o == null ? void 0 : o[0]) == null ? void 0 : b.username
            }).returnType().with({
                type: I.when(L => _e.includes(L))
            }, () => "").with({
                artworkId: I.string
            }, ({
                artworkId: L
            }) => `/artwork/${L}`).with({
                firstUsername: I.string
            }, ({
                firstUsername: L
            }) => `/@${L}`).with({
                refType: ie.Model,
                refId: I.string
            }, ({
                refId: L
            }) => `/model/${L}`).with({
                type: m.Privilege
            }, () => `/@${i==null?void 0:i.username}/credits`).with({
                type: m.PaymentFailed
            }, () => "/me").with({
                type: m.MembershipExpired
            }, () => "/membership/plans").with({
                type: m.MembershipGifted
            }, () => "/me").with(I._, () => "").exhaustive()
        }, [l == null ? void 0 : l.id, f, d, e.type, (Ge = o == null ? void 0 : o[0]) == null ? void 0 : Ge.username]), G = u.useMemo(() => l ? P({
            type: e.type
        }).with({
            type: I.when(b => _e.includes(b))
        }, () => () => {
            var $, xe;
            const b = Ye(),
                L = g === m.DailyRanking ? "today" : g === m.WeeklyRanking ? "weekly" : g === m.MonthlyRanking ? "monthly" : "newbies";
            s(), Kr(l, {
                rankNumber: ((xe = ($ = e.data) == null ? void 0 : $.rank) == null ? void 0 : xe.rankNumber) ?? 1,
                type: b,
                filterType: L
            })
        }).otherwise(() => null) : null, [e.type, l == null ? void 0 : l.id]);
        if (!A) return n.jsx("div", {
            className: "h-px"
        });
        const ge = He.includes(g),
            fn = g === m.MembershipExpired,
            pn = P({
                unread: k,
                type: g
            }).returnType().with({
                type: I.when(b => pi.includes(b))
            }, () => "warning").with({
                type: I.when(b => gi.includes(b))
            }, () => "highlight").with({
                unread: !0
            }, () => "unread").otherwise(() => "normal"),
            gn = Ci[pn];
        return n.jsxs(Lt, {
            className: j("w-full p-2 mb-1 rounded-2xl flex items-center gap-2 text-sm transition duration-100 group", gn),
            ref: a,
            onClick: () => {
                ge ? w("notification_system_content_click", {
                    type: g
                }) : w("notification_content_click", {
                    type: wi(g)
                }), fn && J("member_source", "membership-expired-noti", {
                    persistent: !0
                }), D && window.open(D, "_blank", "noopener"), G == null || G()
            },
            children: [n.jsx(ji, {
                item: e
            }), n.jsxs("div", {
                className: "flex-1 no-underline block text-left self-stretch",
                children: [A, " ", n.jsx("span", {
                    className: "text-primary-light text-xs whitespace-nowrap block mt-1",
                    children: Wn(c)
                })]
            }), n.jsx(ki, {
                item: e
            })]
        })
    },
    bi = u.memo(yi),
    vi = [m.Follow],
    ji = e => {
        const {
            item: t
        } = e, {
            relatedUsers: s,
            type: a
        } = t;
        if (He.includes(a)) {
            const l = Ni(a);
            return l ? n.jsx("div", {
                children: l({
                    className: "w-8 h-8 text-[32px] opacity-40 group-hover:opacity-80 transition"
                })
            }) : null
        }
        const i = s && s.length > 0 ? n.jsx(E, {
            to: `/@${s[0].username}`,
            target: "_blank",
            onClick: () => {
                w("notification_avatar_click")
            },
            className: "shrink-0",
            children: n.jsx(Ht, {
                user: s[0],
                style: {
                    width: 42,
                    height: 42
                }
            })
        }) : n.jsx("div", {
            className: "rounded-full h-[42px] w-[42px] bg-slate-500 shrink-0"
        });
        return vi.includes(a) ? i : n.jsx(nn, {
            item: t
        })
    },
    ki = e => {
        const {
            type: t
        } = e.item;
        return He.includes(t) ? n.jsx(nn, {
            item: e.item
        }) : n.jsx(di, {
            item: e.item
        })
    },
    nn = e => {
        const {
            artwork: t,
            refId: s,
            refMedia: a,
            refType: r
        } = e.item, i = r === ie.Artwork ? `/artwork/${s}` : t != null ? `/artwork/${t.id}` : r === ie.Model ? `/model/${s}` : "", o = qn(a ?? (t == null ? void 0 : t.media));
        return o ? n.jsx(E, {
            to: i,
            target: "_blank",
            className: "w-[62px] h-[62px] rounded-xl bg-cover bg-center",
            style: {
                backgroundImage: `url(${o})`
            },
            title: "related artwork image",
            onClick: c => {
                c.stopPropagation(), w("notification_preview_click")
            }
        }) : null
    };

function Ni(e) {
    return P({
        type: e
    }).returnType().when(({
        type: t
    }) => [m.ModelClaim, m.TrainingTaskCompleted, m.ModelClaimedByOthers].includes(t), () => ot).when(({
        type: t
    }) => [m.ContestReward, m.MembershipExpired, m.MembershipRenewalFailed].includes(t), () => ot).when(({
        type: t
    }) => [m.PaymentFailed, m.ModelCoverNsfw, m.UserAvatarNsfw, m.UserCoverNsfw].includes(t), () => Ya).when(({
        type: t
    }) => [m.Privilege, m.MembershipGifted, m.MembershipRenewed].includes(t), () => Ja).when(({
        type: t
    }) => [m.AppealAccepted].includes(t), () => Za).when(({
        type: t
    }) => [m.AppealRejected].includes(t), () => Ka).otherwise(() => () => null)
}
const Ci = {
    unread: "bg-hover",
    normal: "hover:bg-background-light active:bg-background-light active:brightness-90",
    warning: "bg-amber-100 hover:bg-amber-200 dark:bg-amber-700 dark:hover:bg-amber-600",
    highlight: "bg-violet-100 hover:bg-violet-200 dark:bg-violet-700 dark:hover:bg-violet-600"
};

function Ai(e) {
    const {
        t
    } = S(["common"]), [s, a] = u.useState([]), [r, i] = u.useState(), [o, l] = u.useState(!0), c = u.useRef(), f = 5, [h, d] = ae(async () => {
        var g, k, y;
        try {
            const C = await me.listMyNotifications({
                    last: f,
                    type: e.types,
                    before: c.current
                }),
                A = (g = C == null ? void 0 : C.me) == null ? void 0 : g.notifications,
                D = _t(A).reverse();
            a(G => nt([...G, ...D.filter(ge => !!ge.id)], "id")), i(A == null ? void 0 : A.totalCount), l(!!((k = A == null ? void 0 : A.pageInfo) != null && k.hasPreviousPage)), c.current = (y = A == null ? void 0 : A.pageInfo) == null ? void 0 : y.startCursor
        } catch (C) {
            console.error("notificaiton list", C)
        }
    }, [e.types]);
    u.useEffect(() => {
        e.onMarkRead(e.types), a([]), i(void 0), l(!0), c.current = void 0, d()
    }, [e.types]);
    const p = u.useMemo(() => Gn.pipe(Zn(g => e.types.includes(g.type)), ca((g, k) => [k, ...g], [])), [e.types]),
        x = sa(p, []);
    return u.useEffect(() => {
        a(g => nt([...x.filter(k => !!k.id), ...g], "id"))
    }, [x]), s.length === 0 ? h ? n.jsx(Kn, {}) : n.jsx(Ks, {
        description: t("common:notification.empty")
    }) : n.jsx("div", {
        className: "h-[min(384px,calc(100vh-176px))] md:h-[500px]",
        id: "notifications-container",
        children: n.jsx(Zs, {
            totalCount: r,
            data: s,
            endReached: () => {
                o && d()
            },
            itemContent: (g, k) => k ? n.jsx(bi, {
                item: k
            }, k.id) : n.jsx("div", {
                className: "h-px"
            })
        })
    })
}

function Si(e) {
    const {
        t
    } = S(["action"]), {
        item: s
    } = e;
    return n.jsx("div", {
        className: "p-4 min-w-[320px] max-w-[650px]",
        children: n.jsxs("div", {
            className: "flex flex-col w-full",
            children: [n.jsxs("header", {
                className: "mb-4 flex flex-col gap-3 pb-4 border-b border-card-border",
                children: [n.jsx("h1", {
                    className: "font-bold text-2xl",
                    children: s.title
                }), s.id && n.jsxs("a", {
                    href: `/news/${s.id}`,
                    target: "_blank",
                    className: "inline-flex items-center gap-1 whitespace-nowrap text-sm text-theme-primary",
                    onClick: () => w("news_open_new_window_click"),
                    rel: "noreferrer",
                    children: [n.jsx(Yn, {
                        className: "flex-none size-5"
                    }), t("action:open-in-new-window")]
                })]
            }), n.jsx(Jn, {
                as: "p",
                className: "prose dark:prose-invert p-2",
                children: s.content ?? ""
            })]
        })
    })
}

function Mi(e) {
    return St({
        children: n.jsx(Si, {
            item: e
        }),
        maxWidth: "md",
        responsive: !1
    })
}
const Li = 24 * 3600 * 1e3;

function _i(e) {
    const t = {};
    let s = new Date;
    return e.forEach(a => {
        const r = new Date(a.createdAt);
        Math.abs(s.getTime() - r.getTime()) > Li && (s = r), t[s.toLocaleDateString()] = [...t[s.toLocaleDateString()] ?? [], a]
    }), Object.entries(t).map(([a, r]) => ({
        date: a,
        notis: r
    }))
}

function Ti() {
    const {
        data: e,
        isValidating: t
    } = Qn({
        last: 20,
        type: m.News
    }), {
        t: s
    } = S(["common"]), a = u.useMemo(() => _t(e).reverse(), [e]), r = u.useMemo(() => _i(a ?? []), [a]);
    return n.jsx(n.Fragment, {
        children: r.length < 1 ? t ? n.jsx(ra, {}) : n.jsx("p", {
            className: "w-full text-xl md:text-2xl text-slate-400 dark:text-slate-500 pb-4 text-center",
            children: s("common:news.empty-placeholder")
        }) : n.jsx(Ri, {
            groups: r
        })
    })
}

function Ri(e) {
    const {
        t
    } = S(["common"]), {
        groups: s
    } = e, [a, r] = u.useState(0), i = u.useMemo(() => s[a], [a]);
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("div", {
            className: "w-full flex items-center px-6",
            children: [n.jsx("h3", {
                className: "font-bold text-xs",
                children: i.date
            }), n.jsx("button", {
                disabled: a === 0,
                className: "ml-auto disabled:opacity-20 disabled:cursor-not-allowed",
                onClick: () => r(o => o - 1),
                children: n.jsx(Xn, {})
            }), n.jsx("button", {
                disabled: a >= s.length - 1,
                className: "disabled:opacity-20 disabled:cursor-not-allowed",
                onClick: () => r(o => o + 1),
                children: n.jsx(Qe, {})
            })]
        }), n.jsx("div", {
            className: "h-px mx-6 mt-3 bg-slate-300"
        }), n.jsx(Ii, {
            items: i.notis
        }), n.jsx("div", {
            className: "py-4 flex justify-center",
            children: n.jsxs("a", {
                href: "/news",
                target: "_blank",
                className: "inline-flex items-center gap-1 text-sm text-theme-primary",
                onClick: () => w("see_all_news_click"),
                children: [t("common:news.buttons.see-all-news.label"), n.jsx(Qe, {
                    className: "size-5"
                })]
            })
        })]
    })
}

function Ii(e) {
    return n.jsx("div", {
        className: "max-h-[min(400px,calc(100vh-160px))] md:max-h-[min(800px,calc(100vh-160px))] overflow-y-auto flex flex-col gap-4 bg-[#9333EA]/[0.03] px-6 py-2",
        children: e.items.map(t => n.jsx(Ei, {
            item: t
        }, t.id))
    })
}

function Ei(e) {
    var r;
    const {
        i18n: t
    } = S(), {
        item: s
    } = e, a = u.useMemo(() => {
        var i;
        return (i = s.locales) != null && i[t.language] ? {
            id: s.id,
            ...s.locales[t.language]
        } : s.title && s.content ? s : {
            content: "",
            title: ""
        }
    }, [s.id]);
    return n.jsxs("div", {
        className: "pl-4 relative cursor-pointer hover:dark:bg-gray-700 hover:bg-gray-100 transition rounded-sm max-w-full",
        role: "button",
        onClick: () => {
            w("news_content_click"), Mi(a)
        },
        children: [n.jsx("div", {
            className: "absolute h-[calc(100%-10px)] w-px top-2 left-0 bg-theme-primary"
        }), n.jsx("div", {
            className: "rounded-full w-2 h-2 bg-theme-primary absolute top-2 left-0 -translate-x-1/2"
        }), n.jsx("h3", {
            className: "font-bold mb-2",
            children: a.title
        }), n.jsx("p", {
            className: "text-neutral-500 dark:text-neutral-400 line-clamp-2",
            children: (r = a.content) == null ? void 0 : r.slice(0, 200)
        })]
    })
}
const Pi = e => {
    const {
        t
    } = S(["common"]), [s, a] = u.useState("likes"), [r, i] = u.useState(0), o = u.useRef(null), [l, c] = u.useState(!0), [f, h] = es("notification::dismissed-inbox-permission-prompt", !1), d = os && Notification.permission !== "granted", p = is && d && l && !f, x = y => {
        var C;
        w("notification_tab_click", {
            tab: y
        }), a(y), (C = e.onTabChange) == null || C.call(e)
    }, [g, k] = ae(async y => {
        if (!(y.length < 1)) try {
            await me.markNotificationRead({
                types: y
            })
        } catch (C) {
            Z.error(`${t("common:notification.maar.failed")}: ${C.message}`)
        }
    });
    return u.useEffect(() => {
        var y;
        i(((y = o.current) == null ? void 0 : y.clientWidth) ?? 0)
    }, [s]), n.jsxs("div", {
        className: "max-w-full p-2 w-min min-w-[340px]",
        ref: o,
        style: {
            "--panel-width": `${r}px`
        },
        children: [n.jsxs("div", {
            className: "relative w-full flex items-center justify-center p-3",
            children: [n.jsx("h1", {
                className: "font-bold",
                children: t("common:updates")
            }), n.jsx(V, {
                className: "absolute right-1",
                href: "/profile/edit/notification",
                onClick: () => {
                    w("setting_push_click")
                },
                children: n.jsx(ts, {
                    className: "size-[1em]"
                })
            })]
        }), n.jsxs(Vs, {
            selectedKey: s,
            onSelectionChange: y => x(y),
            orientation: "horizontal",
            children: [n.jsx("div", {
                className: "w-full sm:w-max px-0 md:px-8 border-b border-background-light",
                children: n.jsx(Os, {
                    variant: "underlined",
                    className: "w-full",
                    children: K.map(y => n.jsx(Ws, {
                        variant: "underlined",
                        color: "theme",
                        className: "normal-case text-sm px-2 min-w-0 md:min-w-[90px] md:px-4 md:text-base",
                        id: y.label,
                        children: n.jsxs("p", {
                            className: "flex items-center justify-center",
                            children: [t(`common:notification.type.${y.label}`), n.jsx(Fi, {
                                types: y.types
                            })]
                        })
                    }, y.label))
                })
            }), K.map(y => n.jsxs(qs, {
                id: y.label,
                className: "max-h-[min(400px,calc(100vh-160px))] md:max-h-[800px] overflow-y-auto w-full py-1 px-2",
                children: [p && n.jsx(ns, {
                    className: "flex-wrap",
                    icon: n.jsx(ss, {
                        className: "size-[1em]",
                        style: {
                            fontSize: "inherit"
                        }
                    }),
                    severity: "info",
                    action: n.jsxs(n.Fragment, {
                        children: [n.jsx(re, {
                            className: "font-semibold",
                            color: "inherit",
                            size: "small",
                            onClick: () => {
                                as(!0, "inbox_banner"), c(!1)
                            },
                            children: t("common:notification.permission-banner.action")
                        }), n.jsx(V, {
                            color: "inherit",
                            size: "small",
                            onClick: () => {
                                w("notification_permission_dismiss_click", {
                                    scene: "inbox_banner"
                                }), h(!0), c(!1)
                            },
                            children: n.jsx(rs, {
                                className: "size-[1em] text-lg"
                            })
                        })]
                    }),
                    children: t("common:notification.permission-banner.label")
                }), P(y).with({
                    listType: "plain"
                }, () => n.jsx(Ai, {
                    types: y.types,
                    onMarkRead: k
                })).when(C => C.listType === "external" && C.types[0] === m.News, () => n.jsx(zi, {})).otherwise(() => null)]
            }, y.label))]
        })]
    })
};

function zi() {
    const {
        updateLastRead: e
    } = ue();
    return u.useEffect(() => {
        e()
    }, []), n.jsx("div", {
        className: "w-[calc(var(--panel-width)-1.5rem)] pt-2",
        children: n.jsx(Ti, {})
    })
}
const Fi = e => {
        const {
            types: t
        } = e, {
            unreadCounts: s
        } = u.useContext(Ue), a = s.filter(r => r.type && t.includes(r.type)).reduce((r, i) => r + (i.count ?? 0), 0);
        return t[0] === m.News ? n.jsx(Bi, {}) : a < 1 ? null : n.jsx("span", {
            className: "inline-flex bg-purple-600 text-white h-5 min-w-[20px] py-0.5 px-1.5 items-center justify-center rounded-full ml-[6px] text-xs",
            children: a
        })
    },
    Bi = () => {
        const {
            hasUnread: e
        } = ue();
        return e ? n.jsx("span", {
            className: "bg-purple-600 size-[8px] rounded-full ml-[6px]"
        }) : null
    },
    Hi = () => {
        const {
            data: e = [],
            mutate: t
        } = cs(), s = e.filter(r => r.type && fi.includes(r.type)).reduce((r, i) => r + (i.count ?? 0), 0);
        return {
            hasNewNotifications: s > 0,
            unreadCount: s,
            notis: e,
            mutate: t
        }
    },
    Ui = Re({
        slots: {
            button: "bg-background-secondary border border-solid border-black/50 dark:border-white/50",
            icon: "text-primary"
        },
        variants: {
            size: {
                normal: {
                    button: "size-8",
                    icon: "box-content size-5 p-1.5 -m-px"
                },
                large: {
                    button: "size-10",
                    icon: "box-content size-6 p-2 -m-px"
                }
            }
        },
        defaultVariants: {
            size: "normal"
        }
    }),
    Di = e => {
        const [t, s] = u.useState(), a = u.useId(), {
            hasNewNotifications: r,
            unreadCount: i,
            notis: o,
            mutate: l
        } = Hi(), {
            hasUnread: c
        } = ue(), {
            data: f
        } = U();
        if (!f) return null;
        const h = Ui({
            size: e.size
        });
        return n.jsxs(n.Fragment, {
            children: [n.jsx(V, {
                title: "open notification",
                "aria-describedby": a,
                className: h.button({
                    size: e.size
                }),
                onClick: d => {
                    s(d.currentTarget), w("notification_open")
                },
                children: n.jsx(Pe, {
                    overlap: "circular",
                    color: "error",
                    variant: i < 1 ? "dot" : void 0,
                    invisible: !r && !c,
                    badgeContent: i || "",
                    showZero: !0,
                    children: n.jsx(Ga, {
                        className: h.icon()
                    })
                })
            }), n.jsx(Ue.Provider, {
                value: {
                    open: !!t,
                    unreadCounts: o,
                    closePanel: () => s(void 0)
                },
                children: n.jsx(ls, {
                    id: a,
                    anchorEl: t,
                    open: !!t,
                    onClose: () => {
                        l(), s(void 0)
                    },
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    },
                    slotProps: {
                        paper: {
                            style: {
                                borderRadius: "24px",
                                border: "1px solid var(--card-border)"
                            }
                        }
                    },
                    children: n.jsx(Pi, {
                        onTabChange: () => l()
                    })
                })
            })]
        })
    },
    Ue = u.createContext({
        open: !1,
        unreadCounts: [],
        closePanel: () => {}
    }),
    sn = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
        })
    });

function $i(e) {
    const [{
        q: t
    }] = Rt(), [s, a] = u.useState(t || ""), {
        t: r
    } = S(["common"]), i = Q(), {
        data: o
    } = U(), l = f => {
        var d;
        f.preventDefault(), a(s);
        const h = {
            q: s,
            sort: Et.trending,
            showSignUpModal: o ? void 0 : "1"
        };
        i(`/search?${It(h)}`), (d = f.currentTarget.querySelector("input")) == null || d.blur(), w("search", {
            scene: "home",
            value: s
        })
    }, c = X();
    return u.useEffect(() => {
        c.pathname !== "/search" && a("")
    }, [c.pathname]), n.jsx("form", {
        className: j("flex justify-center items-center self-stretch flex-grow w-[145px] focus-within:w-[412px] transition-all duration-200 ease-in-out border rounded-full border-black/50 dark:border-white/50", s && "w-[412px]", e.className),
        style: e.style,
        noValidate: !0,
        action: "",
        onSubmit: l,
        children: n.jsx(Tt, {
            placeholder: r("common:search"),
            className: "w-full h-9 bg-background-secondary rounded-full",
            classes: {
                notchedOutline: "border-none"
            },
            startAdornment: n.jsx(oe, {
                position: "start",
                children: n.jsx(sn, {
                    className: "text-primary size-6"
                })
            }),
            endAdornment: s.length > 0 && n.jsx(oe, {
                position: "end",
                children: n.jsx(V, {
                    onClick: () => {
                        a(""), i("/")
                    },
                    children: n.jsx($t, {
                        className: "text-primary size-6"
                    })
                })
            }),
            value: s,
            onChange: f => a(f.target.value),
            inputProps: {
                enterKeyHint: "search"
            },
            fullWidth: !0
        })
    })
}
const Vi = ds(Tt).withConfig({
    displayName: "SearchBar__StyledOutlinedInput",
    componentId: "sc-2c923d4c-0"
})(() => ({
    backgroundColor: "var(--secondary)",
    "& .MuiOutlinedInput-input": {
        padding: "0.75rem 0"
    }
}));

function Oi(e) {
    const {
        t
    } = S(["common", "action"]), [{
        q: s
    }, a] = Rt(), [r, i] = u.useState(s || ""), o = Q(), l = c => {
        c.preventDefault(), i(r);
        const f = {
            q: r,
            sort: Et.trending
        };
        o(`/search?${It(f)}`, {
            replace: !0
        })
    };
    return n.jsxs("form", {
        noValidate: !0,
        action: "",
        onSubmit: l,
        className: j("flex w-full justify-center items-center gap-4", e.className),
        children: [n.jsx(Vi, {
            className: "grow rounded-2xl",
            startAdornment: n.jsx(oe, {
                position: "start",
                children: n.jsx(sn, {
                    className: "size-6"
                })
            }),
            endAdornment: n.jsx(oe, {
                position: "end",
                children: n.jsx(V, {
                    onClick: () => {
                        i(""), o("/")
                    },
                    children: n.jsx($t, {
                        className: "size-6"
                    })
                })
            }),
            value: r,
            onChange: c => i(c.target.value),
            inputProps: {
                enterKeyHint: "search"
            },
            placeholder: t("common:home.search-placeholder"),
            autoFocus: !s
        }), n.jsx("input", {
            type: "submit",
            className: "hidden"
        })]
    })
}

function Wi() {
    const {
        data: e
    } = U(), {
        data: {
            membership: t,
            subscription: s
        } = {},
        isLoading: a
    } = ms(), {
        data: r
    } = us();
    return u.useEffect(() => {
        if (!a)
            if ((t == null ? void 0 : t.tier) != null && (s == null ? void 0 : s.interval) != null) {
                const i = `${s.interval.toLowerCase()}-plan-${t.tier}`,
                    o = s.endAt ? be.duration(be(s.endAt).diff(be())).days() : "none";
                O({
                    lastPlan: i,
                    plan: i,
                    membershipLeft: o.toString()
                })
            } else O({
                plan: "free",
                membershipLeft: "none"
            })
    }, [t == null ? void 0 : t.tier, s == null ? void 0 : s.endAt, s == null ? void 0 : s.interval, a]), u.useEffect(() => {
        e && (hs(e.id), O({
            followerCount: e.followerCount,
            followingCount: e.followingCount
        }))
    }, [e == null ? void 0 : e.followerCount, e == null ? void 0 : e.followingCount, e == null ? void 0 : e.id]), u.useEffect(() => {
        e && e.isAdmin && O({
            isAdmin: e.isAdmin
        })
    }, [e == null ? void 0 : e.isAdmin]), u.useEffect(() => {
        r != null && O({
            creditsLeft: r
        })
    }, [r]), null
}

function qi() {
    const {
        data: e,
        isLoading: t
    } = fs();
    return u.useEffect(() => {
        t || O({
            showNsfw: e == null ? void 0 : e.showNsfw,
            blurNsfw: e == null ? void 0 : e.blurNsfw,
            safeSearch: e == null ? void 0 : e.blurNsfw,
            ageVerificationStatus: e == null ? void 0 : e.blurNsfw
        })
    }, [e == null ? void 0 : e.showNsfw, e == null ? void 0 : e.blurNsfw, e == null ? void 0 : e.safeSearch, e == null ? void 0 : e.ageVerificationStatus, t]), null
}

function Gi() {
    return n.jsxs(n.Fragment, {
        children: [n.jsx(Wi, {}), n.jsx(qi, {})]
    })
}

function Zi(e = !0) {
    const [t, s] = u.useState(e), a = u.useRef(!1), r = u.useRef(0), i = u.useCallback(l => {
        l !== null && (r.current = l.getBoundingClientRect().height)
    }, []), o = u.useRef(0);
    return u.useEffect(() => {
        const l = () => {
            const c = o.current;
            if (!e) return;
            if (window.scrollY < r.current) {
                s(!0);
                return
            }
            if (a.current) {
                a.current = !1;
                return
            }
            const f = c,
                h = document.documentElement.scrollHeight - r.current,
                d = window.innerHeight;
            f && window.scrollY >= f ? s(!1) : window.scrollY + d < h && s(!0), o.current = window.scrollY
        };
        return window.addEventListener("scroll", l, {
            passive: !0
        }), () => window.removeEventListener("scroll", l)
    }, [e]), {
        navbarRef: i,
        isNavbarVisible: t
    }
}
const H = e => e,
    De = e => ({
        _tag: "Left",
        value: e
    }),
    fe = e => ({
        _tag: "Right",
        value: e
    }),
    Ki = (e, t, s) => s._tag === "Left" ? e(s.value) : t(s.value),
    an = {
        dimap: (e, t, s) => a => t(s(e(a))),
        first: e => ([t, s]) => [e(t), s],
        right: e => t => t._tag === "Left" ? t : fe(e(t.value)),
        wander: e => t => t.map(e)
    },
    Yi = {
        empty: () => {},
        foldMap: (e, t) => {
            for (let s = 0; s < t.length; s++) {
                const a = e(t[s]);
                if (a != null) return a
            }
        }
    },
    Ji = {
        empty: () => [],
        foldMap: (e, t) => {
            let s = [];
            return t.forEach(a => {
                s = s.concat(e(a))
            }), s
        }
    },
    $e = e => ({
        dimap: (t, s, a) => r => a(t(r)),
        first: t => ([s, a]) => t(s),
        right: t => s => s._tag === "Left" ? e.empty() : t(s.value),
        wander: t => s => e.foldMap(t, s)
    }),
    Ne = {
        Equivalence: {
            Equivalence: "Equivalence",
            Iso: "Iso",
            Lens: "Lens",
            Prism: "Prism",
            Traversal: "Traversal",
            Getter: "Getter",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: "Setter"
        },
        Iso: {
            Equivalence: "Iso",
            Iso: "Iso",
            Lens: "Lens",
            Prism: "Prism",
            Traversal: "Traversal",
            Getter: "Getter",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: "Setter"
        },
        Lens: {
            Equivalence: "Lens",
            Iso: "Lens",
            Lens: "Lens",
            Prism: "Prism",
            Traversal: "Traversal",
            Getter: "Getter",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: "Setter"
        },
        Prism: {
            Equivalence: "Prism",
            Iso: "Prism",
            Lens: "Prism",
            Prism: "Prism",
            Traversal: "Traversal",
            Getter: "AffineFold",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: "Setter"
        },
        Traversal: {
            Equivalence: "Traversal",
            Iso: "Traversal",
            Lens: "Traversal",
            Prism: "Traversal",
            Traversal: "Traversal",
            Getter: "Fold",
            AffineFold: "Fold",
            Fold: "Fold",
            Setter: "Setter"
        },
        Getter: {
            Equivalence: "Getter",
            Iso: "Getter",
            Lens: "Getter",
            Prism: "AffineFold",
            Traversal: "Fold",
            Getter: "Getter",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: void 0
        },
        AffineFold: {
            Equivalence: "AffineFold",
            Iso: "AffineFold",
            Lens: "AffineFold",
            Prism: "AffineFold",
            Traversal: "Fold",
            Getter: "AffineFold",
            AffineFold: "AffineFold",
            Fold: "Fold",
            Setter: void 0
        },
        Fold: {
            Equivalence: "Fold",
            Iso: "Fold",
            Lens: "Fold",
            Prism: "Fold",
            Traversal: "Fold",
            Getter: "Fold",
            AffineFold: "Fold",
            Fold: "Fold",
            Setter: void 0
        },
        Setter: {
            Equivalence: void 0,
            Iso: void 0,
            Lens: void 0,
            Prism: void 0,
            Traversal: void 0,
            Getter: void 0,
            AffineFold: void 0,
            Fold: void 0,
            Setter: void 0
        }
    },
    q = (e, t) => {
        const s = t;
        return s._tag = e, s
    },
    rn = e => (e._removable = !0, e);

function v(e, t, s) {
    switch (arguments.length) {
        case 2: {
            const a = (r, i) => e(r, t(r, i));
            return a._tag = Ne[e._tag][t._tag], a._removable = t._removable || !1, a
        }
        default: {
            const a = Ne[e._tag][t._tag],
                r = (i, o) => e(i, t(i, s(i, o)));
            return r._tag = Ne[a][s._tag], r._removable = s._removable || !1, r
        }
    }
}
const Qi = q("Equivalence", (e, t) => t),
    pe = (e, t) => q("Iso", (s, a) => s.dimap(e, t, a)),
    R = (e, t) => q("Lens", (s, a) => s.dimap(r => [e(r), r], t, s.first(a))),
    Ve = (e, t) => q("Prism", (s, a) => s.dimap(e, r => Ki(H, t, r), s.right(a))),
    Oe = q("Traversal", (e, t) => e.dimap(H, H, e.wander(t))),
    Xi = e => q("Getter", (t, s) => t.dimap(e, H, s)),
    on = (e, t, s) => e(an, t)(s),
    eo = (e, t, s) => e(an, () => t)(s),
    to = (e, t) => e($e({}), H)(t),
    no = (e, t) => e($e(Yi), H)(t),
    ln = (e, t) => e($e(Ji), s => [s])(t),
    so = pe(e => e.map((t, s) => [s, t]), e => {
        const t = [...e].sort((a, r) => a[0] - r[0]),
            s = [];
        for (let a = 0; a < t.length; ++a)(a === t.length - 1 || t[a][0] !== t[a + 1][0]) && s.push(t[a][1]);
        return s
    }),
    pt = e => R(t => t[e], ([t, s]) => Object.assign(Object.assign({}, s), {
        [e]: t
    })),
    ao = e => R(t => {
        const s = {};
        for (const a of e) s[a] = t[a];
        return s
    }, ([t, s]) => {
        const a = Object.assign({}, s);
        for (const r of e) delete a[r];
        return Object.assign(a, t)
    }),
    cn = e => R(t => t[e], ([t, s]) => {
        const a = s.slice();
        return a[e] = t, a
    }),
    We = cn(0),
    qe = e => Ve(t => e(t) ? fe(t) : De(t), H),
    Y = Symbol("__no_match__"),
    dn = qe(e => e !== Y),
    mn = Symbol("__remove_me__"),
    Ce = e => rn(v(R(t => 0 <= e && e < t.length ? t[e] : Y, ([t, s]) => {
        if (t === Y) return s;
        if (t === mn) return typeof s == "string" ? s.substring(0, e) + s.substring(e + 1) : [...s.slice(0, e), ...s.slice(e + 1)];
        if (typeof s == "string") return e === 0 ? t + s.substring(1) : e === s.length ? s.substring(0, e - 1) + t : s.substring(0, e) + t + s.substring(e + 1);
        {
            const a = s.slice();
            return a[e] = t, a
        }
    }), dn)),
    ro = Ve(e => e === void 0 ? De(void 0) : fe(e), H),
    io = e => Ve(t => e(t) ? fe(t) : De(t), H),
    oo = e => rn(v(R(t => {
        const s = t.findIndex(e);
        return s === -1 ? [Y, -1] : [t[s], s]
    }, ([
        [t, s], a
    ]) => {
        if (t === Y) return a;
        if (t === mn) return [...a.slice(0, s), ...a.slice(s + 1)];
        const r = a.slice();
        return r[s] = t, r
    }), We, dn)),
    lo = e => v(R(t => {
        const s = t.map((a, r) => e(a) ? r : null).filter(a => a != null);
        return [s.map(a => t[a]), s]
    }, ([
        [t, s], a
    ]) => {
        const r = a.length,
            i = t.length;
        let o = 0,
            l = 0,
            c = 0;
        const f = [];
        for (; o < r;) s[l] === o ? (++l, c < i && (f.push(t[c]), ++c)) : f.push(a[o]), ++o;
        for (; c < i;) f.push(t[c++]);
        return f
    }), We),
    co = e => R(t => t === void 0 ? e : t, ([t, s]) => t),
    mo = e => v(R(t => {
        const s = ln(e, t);
        return [s, s.length]
    }, ([
        [t, s], a
    ]) => {
        if (t.length !== s) throw new Error("cannot add/remove elements through partsOf");
        let r = 0;
        return on(e, () => t[r++], a)
    }), We),
    uo = e => R(t => e(t), ([t, s]) => t),
    ho = e => R(t => t, ([t, s]) => e(t)),
    fo = R(e => {}, ([e, t]) => e === void 0 ? t : [e, ...t]),
    po = R(e => {}, ([e, t]) => e === void 0 ? t : [...t, e]),
    go = v(pe(e => e.split(""), e => e.join("")), Oe),
    xo = v(pe(e => e.split(/\b/), e => e.join("")), Oe, qe(e => !/\s+/.test(e)));
class N {
    constructor(t) {
        this._ref = t
    }
    get _tag() {
        return this._ref._tag
    }
    get _removable() {
        return this._ref._removable
    }
    compose(t) {
        return new N(v(this._ref, t._ref))
    }
    iso(t, s) {
        return new N(v(this._ref, pe(t, s)))
    }
    lens(t, s) {
        return new N(v(this._ref, R(t, ([a, r]) => s(r, a))))
    }
    indexed() {
        return new N(v(this._ref, so))
    }
    prop(t) {
        return new N(v(this._ref, pt(t)))
    }
    path(...t) {
        return t.length === 1 && (t = t[0].split(".")), new N(t.reduce((s, a) => v(s, pt(a)), this._ref))
    }
    pick(t) {
        return new N(v(this._ref, ao(t)))
    }
    nth(t) {
        return new N(v(this._ref, cn(t)))
    }
    filter(t) {
        return new N(v(this._ref, lo(t)))
    }
    valueOr(t) {
        return new N(v(this._ref, co(t)))
    }
    partsOf(t) {
        const s = typeof t == "function" ? t(un) : t;
        return new N(v(this._ref, mo(s._ref)))
    }
    reread(t) {
        return new N(v(this._ref, uo(t)))
    }
    rewrite(t) {
        return new N(v(this._ref, ho(t)))
    }
    optional() {
        return new N(v(this._ref, ro))
    }
    guard_() {
        return t => this.guard(t)
    }
    guard(t) {
        return new N(v(this._ref, io(t)))
    }
    at(t) {
        return new N(v(this._ref, Ce(t)))
    }
    head() {
        return new N(v(this._ref, Ce(0)))
    }
    index(t) {
        return new N(v(this._ref, Ce(t)))
    }
    find(t) {
        return new N(v(this._ref, oo(t)))
    }
    elems() {
        return new N(v(this._ref, Oe))
    }
    to(t) {
        return new N(v(this._ref, Xi(t)))
    }
    when(t) {
        return new N(v(this._ref, qe(t)))
    }
    chars() {
        return new N(v(this._ref, go))
    }
    words() {
        return new N(v(this._ref, xo))
    }
    prependTo() {
        return new N(v(this._ref, fo))
    }
    appendTo() {
        return new N(v(this._ref, po))
    }
}
const un = new N(Qi);

function wo() {
    return un
}

function yo(e) {
    return t => to(e._ref, t)
}

function bo(e) {
    return t => no(e._ref, t)
}

function vo(e) {
    return t => ln(e._ref, t)
}

function jo(e) {
    return t => s => on(e._ref, t, s)
}

function ko(e) {
    return t => s => eo(e._ref, t, s)
}
const gt = (e, t, s) => (t.has(s) ? t : t.set(s, e())).get(s),
    No = new WeakMap,
    Co = (e, t, s) => {
        const a = gt(() => new WeakMap, No, t);
        return gt(e, a, s)
    },
    Ao = e => typeof e == "function";

function So(e, t) {
    return Co(() => {
        const s = t(wo());
        return ps(r => {
            const i = r(e);
            return i instanceof Promise ? i.then(o => xt(s, o)) : xt(s, i)
        }, (r, i, o) => {
            const l = Ao(o) ? jo(s)(o) : ko(s)(o),
                c = r(e);
            return i(e, c instanceof Promise ? c.then(l) : l(c))
        })
    }, e, t)
}
const xt = (e, t) => e._tag === "Traversal" ? vo(e)(t) : e._tag === "Prism" ? bo(e)(t) : yo(e)(t);

function Mo(e, t) {
    const s = JSON.stringify(t.slice().sort()),
        a = u.useMemo(() => So(e, r => r.pick(t)), [e, s]);
    return le(a)
}
const Lo = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsxs("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [n.jsx("path", {
                d: "M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
            }), n.jsx("path", {
                fill: "currentColor",
                d: "M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0Z"
            })]
        })
    }),
    _o = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsx("path", {
            fill: "currentColor",
            d: "M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
        })
    }),
    To = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsxs("g", {
            fill: "none",
            children: [n.jsx("path", {
                d: "M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
            }), n.jsx("path", {
                fill: "currentColor",
                d: "M11 6a1 1 0 1 1 0 2H5v11h11v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6Zm9-3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 5H15a1 1 0 1 1 0-2Z"
            })]
        })
    }),
    Ro = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsxs("g", {
            fill: "none",
            children: [n.jsx("path", {
                d: "M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"
            }), n.jsx("path", {
                fill: "currentColor",
                d: "M12 2a1 1 0 0 1 .993.883L13 3.01a1 1 0 0 1-1.993.117L11 3a1 1 0 0 1 1-1Zm5.65 15.65a1 1 0 0 1 1.32-.083l.101.09a1 1 0 0 1-1.32 1.497l-.094-.083a1.002 1.002 0 0 1-.007-1.421Zm-12.714 0a1 1 0 0 1 1.497 1.32l-.083.094a1 1 0 0 1-1.504-1.313l.09-.101Zm5.817-12.54a1 1 0 0 1 .99 1.566a4 4 0 0 0 5.58 5.58a1 1 0 0 1 1.566.99A7.002 7.002 0 0 1 5 12c0-3.44 2.482-6.3 5.753-6.889ZM9.095 7.93a5 5 0 1 0 6.975 6.975A6 6 0 0 1 9.096 7.93Zm8.29 1.237a1 1 0 0 1 1.263.636c.049.147.093.297.131.448a1 1 0 1 1-1.936.498a4.936 4.936 0 0 0-.094-.319a1 1 0 0 1 .636-1.263Zm-2.186-2.341a1 1 0 0 1 1.41-.094c.234.205.454.425.659.659a1 1 0 1 1-1.505 1.317a5.024 5.024 0 0 0-.47-.471a1 1 0 0 1-.094-1.411Zm-2.667-.886a1 1 0 0 1 1.217-.72c.152.04.3.084.448.132a1 1 0 1 1-.627 1.9a4.95 4.95 0 0 0-.32-.094a1 1 0 0 1-.718-1.218ZM4.929 4.93a1 1 0 0 1 1.32-.084l.094.083A1 1 0 0 1 5.03 6.433l-.094-.083a1.002 1.002 0 0 1-.007-1.42Zm12.728 0a1 1 0 0 1 1.497 1.32l-.09.1a1 1 0 0 1-1.497-1.32l.09-.1ZM22 12a1 1 0 0 1-.883.993L20.99 13a1 1 0 0 1-.117-1.993L21 11a1 1 0 0 1 1 1Zm-10 7.99a1 1 0 0 1 .993.884L13 21a1 1 0 0 1-1.993.117L11 20.99a1 1 0 0 1 1-1ZM4.01 12a1 1 0 0 1-.883.993L3 13a1 1 0 0 1-.117-1.993L3.01 11a1 1 0 0 1 1 1Z"
            })]
        })
    }),
    wt = e => n.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...e,
        children: n.jsxs("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [n.jsx("path", {
                d: "M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"
            }), n.jsx("path", {
                fill: "currentColor",
                d: "M9 3a1 1 0 0 1 .993.883L10 4v1h4a1 1 0 0 1 .116 1.993L14 7h-1.055c-.223 2.032-1.116 3.99-2.545 5.688c.523.454 1.102.878 1.735 1.266l.386.228l2.067-4.592a1 1 0 0 1 1.763-.115l.06.115l4.5 10a1 1 0 0 1-1.77.924l-.053-.104L18.003 18h-5.007l-1.084 2.41a1 1 0 0 1-1.866-.711l.042-.11l1.61-3.576a15.229 15.229 0 0 1-2.7-1.894c-1.287 1.136-2.848 2.098-4.627 2.81a1 1 0 1 1-.743-1.857c1.557-.623 2.887-1.441 3.972-2.382a11.466 11.466 0 0 1-1.978-3.34a1 1 0 0 1 1.873-.702A9.41 9.41 0 0 0 9 11.244c.989-1.227 1.625-2.576 1.877-3.931L10.928 7H4a1 1 0 0 1-.117-1.993L4 5h4V4a1 1 0 0 1 1-1Zm8.103 13L15.5 12.437L13.898 16h3.205Z"
            })]
        })
    }),
    Io = e => {
        const {
            t
        } = S(["auth"]);
        return n.jsx("div", {
            className: "flex items-center gap-2",
            children: n.jsx(Ie, {
                variant: "outlined",
                onPress: () => {
                    w("signup_login_click", {
                        isLogin: !0
                    }), Ee(null, {
                        fromPath: "login"
                    })
                },
                className: "bg-background !border-theme-primary hover:bg-violet-100 dark:hover:bg-slate-800 !text-theme-primary no-underline whitespace-nowrap rounded-full",
                size: e.size,
                children: t("auth:sign-in")
            })
        })
    },
    Eo = Re({
        slots: {
            button: "cursor-pointer",
            icon: ""
        },
        variants: {
            size: {
                normal: {
                    button: "!size-8",
                    icon: "size-5"
                },
                large: {
                    button: "!size-10",
                    icon: "size-6"
                }
            }
        },
        defaultVariants: {
            size: "normal"
        }
    });

function Po(e) {
    const [t, s] = u.useState(), {
        data: a
    } = U(), {
        t: r
    } = S(["user", "auth", "common"]), {
        data: i
    } = Ct(), o = Q(), [l, c] = Pt("account-btn", a), f = "/@" + (a == null ? void 0 : a.username), h = u.useCallback(() => {
        gs("logout"), xs(""), ws(void 0), w("logout_click"), ys(), bs()
    }, []), d = () => {
        s(void 0)
    }, p = Eo({
        size: e.size
    });
    return n.jsxs(n.Fragment, {
        children: [!a && n.jsx(Io, {
            size: e.size
        }), a ? n.jsx(Ht, {
            user: a,
            className: p.button({
                className: j("shrink-0", e.className)
            }),
            style: e.style,
            onClick: x => {
                s(x.currentTarget), c()
            },
            displayRedDot: l
        }) : n.jsx(V, {
            className: p.button({
                className: j("shrink-0 bg-background-secondary border border-solid border-black/50 dark:border-white/50", e.className)
            }),
            style: e.style,
            onClick: x => s(x.currentTarget),
            children: n.jsx(wt, {
                className: p.icon({
                    className: "flex-none"
                })
            })
        }), n.jsxs(At, {
            anchorEl: t,
            open: !!t,
            onClose: d,
            onClick: () => {
                w("self_avatar_click")
            },
            sx: {
                "& .MuiPaper-root": {
                    borderRadius: "12px",
                    width: 300,
                    "& .MuiMenuItem-root": {
                        padding: "6px 18px"
                    }
                }
            },
            children: [a && [n.jsx(Ho, {
                onClick: () => {
                    o(f), w("menu_profile_click"), d()
                }
            }, "profile"), n.jsxs(M, {
                onClick: () => {
                    o("/membership/plans");
                    const x = "menu";
                    w("enter_member_click", {
                        location: x
                    }), J("member_source", x, {
                        persistent: !0
                    }), d()
                },
                children: [n.jsx(se, {
                    children: n.jsx(vs, {
                        className: "size-5"
                    })
                }), n.jsx(zt, {
                    className: "text-purple-600 dark:text-purple-500",
                    children: r("membership:membership.label", {
                        context: "short"
                    })
                })]
            }, "pixai-membership"), n.jsx(ve, {}, "profile-section-border")], n.jsxs(M, {
                disableRipple: !0,
                children: [n.jsx(se, {
                    children: n.jsx(Ro, {
                        className: "size-6"
                    })
                }), n.jsx(zo, {})]
            }), n.jsxs(M, {
                disableRipple: !0,
                children: [n.jsx(se, {
                    children: n.jsx(wt, {
                        className: "size-6"
                    })
                }), n.jsx(Fo, {})]
            }), n.jsx(ve, {}), n.jsx(M, {
                onClick: () => {
                    w("menu_how_to_use_click"), window.open(r("common:help-center.link.href") || Se.helpCenterUrl, "_blank"), d()
                },
                children: r("common:help-center.link.label")
            }), n.jsx(M, {
                onClick: () => {
                    w("menu_policy_click"), o("/privacy"), d()
                },
                children: r("common:privacy-policy")
            }), n.jsx(M, {
                onClick: () => {
                    w("menu_terms_click"), o("/terms"), d()
                },
                children: r("common:tos")
            }), n.jsx(M, {
                component: "a",
                onClick: () => {
                    w("menu_terms_click"), d()
                },
                href: r("common:content-rules.link.href"),
                target: "_blank",
                rel: "noopener noreferrer",
                children: r("common:content-rules.link.label")
            }), n.jsx(M, {
                onClick: () => {
                    w("menu_feedback_click"), o("/feedback"), d()
                },
                children: r("common:feedback")
            }), n.jsx(M, {
                onClick: () => {
                    w("menu_news_click"), o("/news"), d()
                },
                children: n.jsx(Bo, {})
            }), n.jsxs(M, {
                className: "mmd:hidden",
                onClick: () => {
                    var x, g;
                    w("menu_discord_click"), (x = i == null ? void 0 : i.externalUrls) != null && x.discordJoin && window.open((g = i == null ? void 0 : i.externalUrls) == null ? void 0 : g.discordJoin), d()
                },
                children: [r("common:join-discord"), n.jsx(To, {
                    className: "ml-1 size-5"
                })]
            }), a && [n.jsx(ve, {}, "logout-section-border"), n.jsx(M, {
                onClick: () => {
                    d(), h()
                },
                children: n.jsx("span", {
                    className: "text-red-600",
                    children: r("auth:logout")
                })
            }, "logout")]]
        })]
    })
}

function zo() {
    const {
        t: e
    } = S(["common"]), {
        mode: t,
        changeColorMode: s
    } = js();
    return n.jsxs(Ft, {
        value: t,
        onChange: a => {
            w("color_mode_select", {
                value: a.target.value
            }), s(a.target.value)
        },
        size: "small",
        className: "w-full",
        classes: {
            select: "py-1.5 text-sm"
        },
        MenuProps: {
            MenuListProps: {
                dense: !0
            }
        },
        children: [n.jsx(M, {
            value: "light",
            children: e("common:preferences.color-mode.light")
        }), n.jsx(M, {
            value: "dark",
            children: e("common:preferences.color-mode.dark")
        }), n.jsx(M, {
            value: "auto",
            children: e("common:preferences.color-mode.auto")
        })]
    })
}

function Fo() {
    const [e, t] = kt(ks), {
        t: s
    } = S(["common"]);
    return n.jsx(Ft, {
        value: e,
        onChange: a => {
            const r = a.target.value;
            t(r), Ns(r).catch(() => {}), w("menu_language_click", {
                value: r
            })
        },
        size: "small",
        "aria-label": s("common:langauges.select-language"),
        className: "w-full",
        classes: {
            select: "py-1.5 text-sm"
        },
        MenuProps: {
            MenuListProps: {
                dense: !0
            }
        },
        children: Object.values(Cs).map(a => n.jsx(M, {
            value: a.code,
            children: a.label
        }, a.code))
    })
}

function Bo() {
    const {
        hasUnread: e
    } = ue();
    return n.jsx(Pe, {
        variant: "dot",
        color: "error",
        invisible: !e,
        classes: {
            badge: "top-0.5"
        },
        children: n.jsx(B, {
            i18nKey: "common:news.title",
            context: "long"
        })
    })
}

function Ho(e) {
    const {
        data: t
    } = U(), [s, a] = Pt("account-menu", t);
    return n.jsxs(M, {
        onClick: r => {
            var i;
            a(), (i = e.onClick) == null || i.call(e)
        },
        children: [n.jsx(se, {
            children: n.jsx(_o, {
                className: "w-5 h-5"
            })
        }), n.jsx(Pe, {
            variant: "dot",
            color: "error",
            invisible: !s,
            classes: {
                badge: "top-0.5"
            },
            children: n.jsx(zt, {
                children: n.jsx(B, {
                    i18nKey: "user:your-profile"
                })
            })
        })]
    }, "profile")
}
const yt = {
        "app-layout": "_app-layout_fwolc_1",
        "app-layout-expanded": "_app-layout-expanded_fwolc_22"
    },
    Uo = {
        "/": "top",
        "/market": !0,
        "/search": !0
    },
    hn = u.memo(() => {
        const e = W(),
            t = !e,
            s = e ? 48 : 64,
            [a, {
                height: r
            }] = pa();
        u.useEffect(() => {
            document.documentElement.style.setProperty("--app-header-height", s + r + "px")
        }, [s, r]);
        const i = X(),
            {
                scrolledOut: o
            } = Mo(Wt, ["scrolledOut"]),
            l = Uo[i.pathname],
            c = !!l && (l === "top" ? !o : !0);
        return n.jsxs("div", {
            className: "sticky top-0 z-20",
            children: [n.jsx("div", {
                ref: a,
                children: n.jsx(Vo, {})
            }), n.jsxs("header", {
                className: j("flex items-center bg-background shadow-md", e ? "px-3 gap-2" : "px-4 gap-4"),
                style: {
                    height: s
                },
                children: [n.jsxs(E, {
                    to: "/",
                    className: j("group flex-none inline-flex items-center py-3 no-underline", t && "px-3"),
                    children: [n.jsx(Is, {
                        className: "size-7 mmd:size-9 dark:invert"
                    }), n.jsx(Ps, {
                        title: n.jsx(B, {
                            i18nKey: "common:artwork-list.hero.title"
                        }),
                        size: "small",
                        className: "ml-2 !mt-0 -mb-2 max-mmd:hidden"
                    })]
                }), n.jsx(Bs, {
                    size: "small",
                    className: "mmd:hidden"
                }), n.jsx("span", {
                    className: "ml-auto"
                }), n.jsxs(As, {
                    children: [t && n.jsx(Xe.span, {
                        animate: {
                            opacity: i.pathname !== "/" || o ? 1 : 0,
                            display: i.pathname !== "/" || o ? "" : "none"
                        },
                        transition: {
                            duration: .1
                        },
                        children: n.jsx(Oo, {})
                    }, "desktop-generate"), t ? n.jsx(Xe.span, {
                        animate: {
                            opacity: c ? 1 : 0,
                            display: c ? "" : "none"
                        },
                        transition: {
                            duration: .1
                        },
                        children: n.jsx($i, {})
                    }, "desktop-search") : n.jsx(V, {
                        component: E,
                        to: "/search",
                        className: "size-8 bg-background-secondary border border-solid border-black/50 dark:border-white/50",
                        children: n.jsx(Lo, {
                            className: "flex-none size-5 text-primary"
                        })
                    }, "mobile-search")]
                }), n.jsx(Di, {
                    size: e ? "normal" : "large"
                }), n.jsx(Po, {
                    size: e ? "normal" : "large",
                    className: "-mr-1"
                })]
            })]
        })
    });
hn.displayName = "AppHeader";
const Do = ["/market", "/artwork/", "/model/", "/workflows", "/workflow/", "/contest/"];

function pl({
    children: e
}) {
    const t = X(),
        s = le(Rs),
        a = le(qt),
        r = W(),
        i = t.pathname === "/" || Do.some(h => t.pathname.startsWith(h)),
        o = t.pathname.startsWith("/artwork"),
        l = t.pathname.startsWith("/search"),
        c = r && l,
        f = u.useMemo(() => {
            var d;
            const h = {
                largeMaxWidth: {
                    classes: {
                        root: `max-w-[108rem] ${r?"px-2 md:px-6":"px-0"}`
                    }
                },
                fullWidth: {
                    maxWidth: !1,
                    classes: {
                        root: "!px-0"
                    }
                }
            };
            return o ? {
                classes: {
                    root: `max-w-[108rem] ${r?"px-0 md:px-6":"px-0"}`
                }
            } : ((d = Object.entries({
                "/": h.largeMaxWidth,
                "/ranking": h.largeMaxWidth,
                "/search": h.largeMaxWidth,
                "/market": h.largeMaxWidth,
                "/market/": h.largeMaxWidth,
                "^/workflows": h.fullWidth,
                "/contest": h.fullWidth,
                "/train-lora": h.fullWidth,
                "/user-rank": h.fullWidth,
                "/membership/plans": {
                    maxWidth: !1,
                    classes: {
                        root: "!px-0"
                    }
                },
                "^/my2024": h.fullWidth
            }).find(([p]) => p.startsWith("^") ? t.pathname.startsWith(p.slice(1)) : t.pathname === p)) == null ? void 0 : d[1]) ?? {}
        }, [t, r, o]);
    return c ? n.jsx($o, {
        children: e
    }) : n.jsxs(n.Fragment, {
        children: [n.jsx(Gi, {}), n.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [i && n.jsx(Zr, {}), n.jsx(hn, {}), n.jsxs("div", {
                className: j("flex-1 transition-all duration-300", a ? yt["app-layout-expanded"] : yt["app-layout"]),
                children: [i && n.jsx(Zt, {}), n.jsx(Vt, {
                    className: j("min-w-0 mmd:pl-3 mmd:pr-1", !i && "col-span-full"),
                    style: {
                        gridArea: i ? "main" : void 0
                    },
                    ...f,
                    children: e
                })]
            }), s && n.jsx(Es, {
                className: "mt-auto"
            })]
        })]
    })
}

function $o(e) {
    const {
        navbarRef: t,
        isNavbarVisible: s
    } = Zi(), a = n.jsx("nav", {
        ref: t,
        className: j("w-full bg-background z-20 sticky top-0 transition-transform"),
        style: {
            boxShadow: "0 4px 12px #00000014, 0 0 1px #0100001a",
            transform: s ? "" : "translate3d(0, calc(-100% - 2px), 0)"
        },
        children: n.jsx(Oi, {
            className: "px-4 py-2"
        })
    });
    return n.jsxs(n.Fragment, {
        children: [a, n.jsxs("div", {
            className: "flex",
            children: [n.jsx(Vt, {
                className: "lg:px-36 md:px-20",
                children: e.children
            }), n.jsx(Zt, {})]
        })]
    })
}

function Vo() {
    const e = le(Ss),
        t = Ms();
    return e ? t === "common" ? n.jsx(Ls, {}) : t === "recall" ? n.jsx(_s, {}) : n.jsx(ka, {}) : null
}

function Oo() {
    const {
        data: e
    } = U(), t = u.useMemo(() => Ts("/generator/image", e != null && e.id ? {} : {
        showSignUpModal: 1
    }), [e == null ? void 0 : e.id]);
    return n.jsxs(Lt, {
        component: E,
        className: j("px-3.5 py-2 font-medium no-underline bg-theme-primary hover:bg-violet-500 dark:bg-violet-600 text-white rounded-full transition active:bg-violet-600 dark:active:bg-violet-700 border-none h-10"),
        onClick: () => {
            J("generate_source"), w("new_btn_click")
        },
        to: t,
        children: [n.jsx(Bt, {
            className: "size-6"
        }), n.jsx(B, {
            i18nKey: "common:generate.label"
        })]
    })
}
export {
    pl as A, Vo as L, Di as N, ci as U, Na as W, hl as a, Po as b, li as c, Vr as d, fl as e, _a as f, at as g, Mo as h, sn as i, ca as s, $r as t, ya as u
};
//# sourceMappingURL=AppLayout-Bx68cLmY.js.map