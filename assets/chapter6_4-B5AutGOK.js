import {
    r as o,
    j as t
} from "./index-DBUceO6m.js";
const w = "/assets/loading-B-XM9xwR.png",
    S = "/assets/loadingTitle-p3idyV0l.png",
    D = "/assets/loadingTitleMobile-CW-vFtRB.png",
    O = "_progressBar_1x28c_17",
    A = "_background_1x28c_24",
    C = "_loadingBg_1x28c_33",
    F = "_marqueeVertical_1x28c_1",
    M = "_title_1x28c_49",
    N = "_loadingTitle_1x28c_64",
    R = "_revealFromTop_1x28c_1",
    V = "_commands_1x28c_141",
    H = "_enter_1x28c_179",
    W = "_showEnter_1x28c_190",
    $ = "_visible_1x28c_222",
    q = "_blink_1x28c_1",
    r = {
        progressBar: O,
        background: A,
        loadingBg: C,
        marqueeVertical: F,
        title: M,
        loadingTitle: N,
        revealFromTop: R,
        commands: V,
        enter: H,
        showEnter: W,
        visible: $,
        blink: q
    },
    U = ({
        children: g,
        onLoadingComplete: n,
        type: p
    }) => {
        const [i, b] = o.useState(!0), [k, v] = o.useState(!0), [f, B] = o.useState(!1), [x, E] = o.useState(0), [u, L] = o.useState(!1), l = o.useRef(null), P = p === "web" ? S : D, T = ["Initializing HIPPO AI PROTOCOL [v1.0.0]...", "Booting Hippo AI node..."], j = [`
`, "Neural link established.", "Bypassing firewalls...", "ICE detected... Injecting memory spike...", `
`, "> Accessing logs...", "> Found: hippo_protocol_core.sys | Status: SEALED"], y = e => {
            const c = Math.floor(e / 100 * 24),
                h = 24 - c;
            return "█".repeat(c) + "░".repeat(h) + ` ${e}%`
        };
        return o.useEffect(() => {
            if (k || !u) return;
            const e = () => {
                    b(!1), i && (n == null || n())
                },
                a = c => {
                    c.key === "Enter" && (b(!1), i && (n == null || n()))
                };
            return document.addEventListener("keypress", a), document.addEventListener("click", e), () => {
                document.removeEventListener("keypress", a), document.removeEventListener("click", e)
            }
        }, [k, n, u, i]), o.useEffect(() => {
            if (!f) return;
            const e = 1e3,
                a = [];
            a.push(setTimeout(() => {
                let s = 0;
                const m = 3500,
                    d = 50,
                    I = 100 / (m / d);
                l.current = setInterval(() => {
                    s += I, s >= 100 && (s = 100, L(!0), l.current && (clearInterval(l.current), l.current = null)), E(Math.round(s))
                }, d)
            }, e + 500));
            const c = [document.getElementById("loading-title"), document.getElementById("loading-commands"), document.getElementById("loading-enter")].map(s => (s == null ? void 0 : s.children) ?? []).map(s => Array.from(s)).flat(),
                h = c.length;
            return c.forEach((s, m) => {
                a.push(setTimeout(() => {
                    var _;
                    const d = s;
                    d.style.opacity = "1", ((_ = d.parentElement) == null ? void 0 : _.id) === "loading-enter" && d.classList.add(r.visible), m === h - 1 && v(!1)
                }, e + m * 50))
            }), () => {
                a.forEach(s => clearTimeout(s)), l.current && clearInterval(l.current)
            }
        }, [f, p]), t.jsxs(t.Fragment, {
            children: [i && t.jsxs("div", {
                className: r.background,
                children: [t.jsx("img", {
                    src: w,
                    alt: "loading",
                    className: r.loadingBg,
                    onLoad: () => B(!0)
                }), t.jsx("div", {
                    className: r.title,
                    id: "loading-title",
                    children: t.jsx("img", {
                        src: P,
                        className: r.loadingTitle
                    })
                }), t.jsxs("div", {
                    className: r.commands,
                    id: "loading-commands",
                    children: [T.map((e, a) => t.jsx("pre", {
                        style: {},
                        children: e
                    }, `before-${a}`)), t.jsx("pre", {
                        className: r.progressBar,
                        children: y(x)
                    }), j.map((e, a) => t.jsx("pre", {
                        style: {},
                        children: e
                    }, `after-${a}`))]
                }), t.jsx("div", {
                    className: `${r.enter} ${u?r.showEnter:""}`,
                    id: "loading-enter",
                    children: t.jsx("pre", {
                        style: {},
                        children: "► Click or Press Enter to unlock HIPPO AI PROTOCOL"
                    })
                })]
            }), g]
        })
    },
    Z = "/assets/chapter03Logo-CGBpSkJO.svg",
    X = "/assets/chapter03Logo_2-a1ew3nbO.svg",
    K = "/assets/chapter04Logo-BjCouMph.svg",
    z = () => {
        const g = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            n = /Android/.test(navigator.userAgent),
            p = /Mac/.test(navigator.platform),
            i = /Win/.test(navigator.platform);
        return g || p ? "https://apps.apple.com/kr/app/data-hippo/id6738997275" : n || i ? "https://play.google.com/store/apps/details?id=com.dataWallet" : "https://apps.apple.com/kr/app/data-hippo/id6738997275"
    },
    Y = () => {
        const g = z();
        window.open(g, "_blank")
    },
    G = "/assets/circle-D-e5e94b.png",
    Q = "/assets/discord-DNVSbB6W.png",
    ss = "/assets/github-D2j1ljCc.png",
    es = "/assets/linkedin-CXgOMjzc.png",
    ts = "/assets/medium-BIuuCXH1.png",
    as = "/assets/telegram-Cq6dJOHU.png",
    ns = "/assets/x-BYRmaVTH.png",
    rs = "/assets/chapter1_1-BYZ5t4ku.mp4",
    os = "/assets/chapter1_2-CNb9UEBZ.mp4",
    cs = "/assets/chapter1_3-Bjz1BDkF.mp4",
    is = "/assets/chapter1_4-7RLMJcds.mp4",
    ls = "/assets/chapter1_5-CN6FCDb2.mp4",
    ds = "/assets/chapter2_1-DIu_c-L7.mp4",
    gs = "/assets/chapter2_2-D0mWFUwf.mp4",
    ps = "/assets/chapter2_3-DUD3qAaE.mp4",
    ms = "/assets/chapter2_4-1H27dPi0.mp4",
    us = "/assets/chapter3_1-BR83A_hW.mp4",
    hs = "/assets/chapter3_2-CvAFwpTg.mp4",
    _s = "/assets/chapter4_1-BEDvJ-5e.mp4",
    bs = "/assets/chapter5_2-DPPrihVf.mp4",
    ks = "/assets/chapter5_3-CA1bIr-t.mp4",
    fs = "/assets/chapter5_4-Ctv5BR_o.mp4",
    vs = "/assets/chapter6_1-jCoy2oBv.mp4",
    Bs = "/assets/chapter6_2-BFLZvmZ4.mp4",
    xs = "/assets/chapter6_3-BV1SEPs-.mp4",
    Es = "/assets/chapter6_4-DOT3-K6K.mp4";
export {
    vs as A, Bs as B, xs as C, Es as D, U as L, X as a, K as b, Z as c, Q as d, as as e, G as f, ss as g, rs as h, os as i, cs as j, is as k, es as l, ts as m, ls as n, ds as o, gs as p, ps as q, Y as r, ms as s, ns as t, us as u, hs as v, _s as w, bs as x, ks as y, fs as z
};