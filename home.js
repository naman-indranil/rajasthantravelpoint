import {
    A as y,
    B as p,
    C as o,
    D as R,
    F,
    H as E,
    J as v,
    M as b,
    O as I,
    R as P,
    W as k,
    e as r,
    g as _
} from "https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/chunk-227GRK43.mjs";
import {
    c as a
} from "https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/chunk-ELYU6EKT.mjs";
var C = "default" in p ? y : p,
    m = {},
    D = C;
m.createRoot = D.createRoot;
m.hydrateRoot = D.hydrateRoot;
var f = m.createRoot,
    z = m.hydrateRoot;
a.__framer_importFromPackage = (e, n) => () => r(E, {
    error: 'Package component not supported: "' + n + '" in "' + e + '"'
});
a.process = {
    ...a.process,
    env: {
        ...a.process ? a.process.env : void 0,
        NODE_ENV: "production"
    }
};
v();
a.__framer_events = a.__framer_events || [];

function x() {
    a.__framer_events.push(arguments)
}(async () => {
    let e = {
            augiA20Il: {
                elements: {},
                page: o(() => import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/p9eR-m28Wj_3MYNHb7IbuF2gATQlakE1iFL0GdyUsDw.366ANHJK.mjs")),
                path: "/"
            },
            qLgKwCSJo: {
                elements: {},
                page: o(() => import("./homePageSupport.js")),
                path: "/page"
            },
            kaiKLiBWD: {
                elements: {},
                page: o(() => import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/X1VoTLP1-fHVZwA4mDTc6_LTRcnfL6c_MtOY0oQLhLQ.UFAP6WFU.mjs")),
                path: "/detail-page"
            },
            duPgW11Qg: {
                elements: {},
                page: o(() => import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/LA9g6V9R72884swohCuQukOYBvDBSF7lqfWJxwjeTrg.7GPALRPC.mjs")),
                path: "/10-day-rajasthan"
            },
            Qy6Vwb5zp: {
                elements: {},
                page: o(() => import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/z8dsW20JEbPOG3uB8poSuBKeQ1FCIg-QnrSVStu-bDI.EIUIXOFK.mjs")),
                path: "/5-dayjodhpurandjaisalmer"
            }
        },
        n = {},
        u = [{
            code: "en-US",
            id: "default",
            name: "English",
            slug: ""
        }],
        O = o(() => import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/__framer-not-found-page.4Z5PQKUS.mjs")),
        c = document.getElementById("main"),
        s, i, d, l = !1;
    if ("framerHydrateV2" in c.dataset) {
        let t = JSON.parse(c.dataset.framerHydrateV2);
        s = t.routeId, i = t.localeId, d = t.pathVariables, l = !0
    } else {
        let t = F(e, decodeURIComponent(location.pathname), !0, u);
        s = t.routeId, i = t.localeId, d = t.pathVariables
    }
    let g = await e[s].page.preload();
    e[s].page = g;
    let S = r(k, {
            RootComponent: g,
            isWebsite: !0,
            routeId: s,
            pathVariables: d,
            routes: e,
            collectionUtils: n,
            notFoundPage: O,
            isReducedMotion: void 0,
            localeId: i,
            locales: u,
            preserveQueryParams: void 0,
            enableSuspenseThatPreservesDom: !0,
            shouldMarkHydrationEnd: l
        }),
        V = r(b, {
            children: S,
            value: {
                imgSizesWorkaroundEnabled: !1
            }
        }),
        h = r(R, {
            children: V,
            value: {
                routes: {}
            }
        });
    l ? _(() => {
        performance.mark("framer-hydration-start"), z(c, h)
    }) : f(c).render(h)
})().catch(e => {
    throw x("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }), e
});
(async () => {
    let {
        default: e
    } = await import("https://framerusercontent.com/sites/1pEP18U857dT9hkmJ7vVMy/__framer-badge.46N7EOVK.mjs"), n = I(P);
    _(() => {
        f(document.getElementById("__framer-badge-container")).render(r(n, {
            className: "__framer-badge",
            __framer__threshold: .5,
            __framer__animateOnce: !0,
            __framer__opacity: 0,
            __framer__targetOpacity: 1,
            __framer__rotate: 0,
            __framer__x: 0,
            __framer__y: 10,
            __framer__scale: 1,
            __framer__transition: {
                type: "spring",
                ease: [.44, 0, .56, 1],
                duration: .3,
                delay: 1,
                stiffness: 350,
                damping: 40,
                mass: 1.5
            },
            __framer__rotateX: 0,
            __framer__rotateY: 0,
            __framer__perspective: 1200
        }, r(e)))
    })
})();
//# sourceMappingURL=default_script0.6CIVB5YF.mjs.map