/* =========================================================
   Shared site header
   - Week / part pages (<body class="hub">) get the full top header.
   - Exercise pages get a small floating bar, so their own
     layout and styles are never changed.
   To add a new week, add it to WEEKS below.
   ========================================================= */
(function () {
    "use strict";

    var script = document.currentScript;
    if (!script) return;

    // Site root = the folder above /assets/
    var ROOT = new URL("../", script.src).href;
    function url(path) {
        return new URL(path.split("/").map(encodeURIComponent).join("/"), ROOT).href;
    }

    var HOME = "main container/Main.html";

    var WEEKS = [
        { n: 2,  title: "HTML Basics",            path: "main container/Week2.html" },
        { n: 3,  title: "CSS",                    path: "main container/Week-3.html" },
        { n: 4,  title: "JavaScript & the DOM",   path: "main container/Week-4.html" },
        { n: 5,  title: "JavaScript Basics",      path: "main container/Week5.html" },
        { n: 6,  title: "Fetch & APIs",           path: "main container/Week6.html" },
        { n: 7,  title: "Shelf Finder app",       path: "week  7/index.html" },
        { n: 8,  title: "Forms & Validation",     path: "main container/Week8.html" },
        { n: 9,  title: "Accessibility",          path: "main container/Week9.html" },
        { n: 10, title: "Git, GitHub & Pages",    path: "main container/Week10.html" },
        { n: 11, title: "React",                  path: "main container/Week11.html" }
    ];

    // Where the "back" link on an exercise page should go.
    // First matching folder wins.
    var PARENTS = [
        ["week-2/week 2-1/", "main container/Week2-1.html", "Week 2-1"],
        ["week-2/week 2-2/", "main container/Week2-2.html", "Week 2-2"],
        ["week-3/week 3-1/", "main container/Week3-1.html", "Week 3-1"],
        ["week-3/week 3-2/", "main container/Week3-2.html", "Week 3-2"],
        ["week-4/",          "main container/Week-4.html",  "Week 4"],
        ["week-5/",          "main container/Week5.html",   "Week 5"],
        ["week-6/",          "main container/Week6.html",   "Week 6"],
        ["week  7/index.html", HOME,                        "Home"],
        ["week  7/",         "week  7/index.html",          "Week 7"],
        ["week 8/week 8-1/", "week 8/week 8-1/index.html",  "Week 8-1"],
        ["week 8/",          "main container/Week8.html",   "Week 8"],
        ["week 9/week 9-1/", "week 9/week 9-1/index.html",  "Week 9-1"],
        ["week 9/",          "main container/Week9.html",   "Week 9"],
        ["week 10/",         "main container/Week10.html",  "Week 10"],
        ["week 11/week 11-1/", "week 11/week 11-1/index.html", "Week 11-1"],
        ["week 11/",         "main container/Week11.html",  "Week 11"]
    ];

    var here = decodeURIComponent(location.href.split("#")[0].split("?")[0]);
    var rootDecoded = decodeURIComponent(ROOT);
    var rel = here.indexOf(rootDecoded) === 0 ? here.slice(rootDecoded.length) : "";

    function el(tag, attrs, html) {
        var e = document.createElement(tag);
        for (var k in attrs) e.setAttribute(k, attrs[k]);
        if (html != null) e.innerHTML = html;
        return e;
    }

    var chevron = '<svg class="chev" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    function weekLinks() {
        return WEEKS.map(function (w) {
            return '<li><a href="' + url(w.path) + '"><span class="wk">' + w.n + '</span><span class="wk-title">Week ' + w.n + '<br><small>' + w.title + '</small></span></a></li>';
        }).join("");
    }

    /* ---------- Full header for hub pages ---------- */

    function buildHeader() {
        var homeUrl = url(HOME);
        var isHome = rel === HOME;

        var header = el("header", { class: "site-header" });
        header.innerHTML =
            '<div class="container bar">' +
                '<a class="brand" href="' + homeUrl + '">' +
                    '<span class="brand-mark" aria-hidden="true">AB</span>' +
                    '<span class="brand-text"><strong>Abdulazizbek</strong><small>Web Programming</small></span>' +
                '</a>' +
                '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>' +
                '<nav class="main-nav" id="main-nav" aria-label="Main">' +
                    '<ul>' +
                        '<li><a href="' + homeUrl + '"' + (isHome ? ' aria-current="page"' : '') + '>Home</a></li>' +
                        '<li><details class="dropdown"><summary>Weeks ' + chevron + '</summary>' +
                            '<div class="dropdown-panel"><ul>' + weekLinks() + '</ul></div></details></li>' +
                        '<li><a href="' + homeUrl + '#team">Team project</a></li>' +
                        '<li><a href="' + homeUrl + '#projects">Projects</a></li>' +
                        '<li><a href="' + url("week 10/week 10-2/index.html") + '">Portfolio</a></li>' +
                    '</ul>' +
                '</nav>' +
            '</div>';

        var skip = document.querySelector(".skip-link");
        if (skip) skip.after(header); else document.body.prepend(header);

        var toggle = header.querySelector(".menu-toggle");
        var dropdown = header.querySelector(".dropdown");

        toggle.addEventListener("click", function () {
            var open = header.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(open));
            toggle.textContent = open ? "Close" : "Menu";
        });

        // Close the Weeks menu on outside click or Escape
        document.addEventListener("click", function (e) {
            if (dropdown.open && !dropdown.contains(e.target)) dropdown.open = false;
        });
        document.addEventListener("keydown", function (e) {
            if (e.key !== "Escape") return;
            if (dropdown.open) { dropdown.open = false; dropdown.querySelector("summary").focus(); }
            if (header.classList.contains("open")) toggle.click();
        });
    }

    /* ---------- Floating bar for exercise pages ---------- */

    function buildFloatingBar() {
        var parent = null;
        for (var i = 0; i < PARENTS.length; i++) {
            if (rel.indexOf(PARENTS[i][0]) === 0) { parent = PARENTS[i]; break; }
        }

        var host = el("div", { id: "site-nav-bar" });
        var shadow = host.attachShadow({ mode: "open" });

        var collapsed = false;
        try { collapsed = localStorage.getItem("siteNavCollapsed") === "1"; } catch (e) {}

        shadow.innerHTML =
            '<style>' +
                ':host{all:initial;position:fixed;right:16px;bottom:16px;z-index:2147483000;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}' +
                '.bar{display:flex;align-items:center;gap:2px;padding:5px;background:#17161f;color:#fff;border-radius:999px;box-shadow:0 10px 28px -8px rgba(0,0,0,.45);font-size:14px}' +
                'a,button{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border:0;border-radius:999px;background:transparent;color:#fff;font:inherit;font-weight:600;text-decoration:none;cursor:pointer;white-space:nowrap}' +
                'a:hover,button:hover,button[aria-expanded="true"]{background:#2e2c3b}' +
                'a:focus-visible,button:focus-visible{outline:2px solid #a5b4fc;outline-offset:2px}' +
                '.mark{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#7c3aed);font-size:11px;font-weight:800}' +
                '.home{padding:5px 10px 5px 5px}' +
                '.panel{position:absolute;right:0;bottom:calc(100% + 10px);width:260px;max-height:60vh;overflow:auto;padding:8px;background:#fff;color:#17161f;border-radius:14px;box-shadow:0 14px 34px -10px rgba(0,0,0,.4)}' +
                '.panel[hidden]{display:none}' +
                '.panel p{margin:4px 8px 6px;color:#5d5c6b;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}' +
                '.panel a{display:flex;width:100%;box-sizing:border-box;padding:8px 10px;border-radius:9px;color:#17161f;font-weight:500}' +
                '.panel a:hover{background:#f1f1f7}' +
                '.panel b{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:7px;background:#eef0ff;color:#4f46e5;font-size:12px}' +
                '.collapsed .full{display:none}' +
                '@media (max-width:480px){:host{right:10px;bottom:10px}.label{display:none}}' +
                '@media print{:host{display:none}}' +
            '</style>' +
            '<nav class="bar' + (collapsed ? ' collapsed' : '') + '" aria-label="Site">' +
                '<a class="home full" href="' + url(HOME) + '"><span class="mark" aria-hidden="true">AB</span><span class="label">Home</span></a>' +
                (parent && parent[1] !== HOME
                    ? '<a class="full" href="' + url(parent[1]) + '" aria-label="Back to ' + parent[2] + '">&larr; <span class="label">' + parent[2] + '</span></a>'
                    : '') +
                '<button class="full weeks" type="button" aria-expanded="false" aria-controls="weeks-panel">Weeks</button>' +
                '<button class="toggle" type="button" aria-label="' + (collapsed ? 'Show site navigation' : 'Hide site navigation') + '" aria-expanded="' + (!collapsed) + '">' + (collapsed ? '&#9776;' : '&times;') + '</button>' +
                '<div class="panel" id="weeks-panel" hidden><p>All weeks</p>' +
                    WEEKS.map(function (w) { return '<a href="' + url(w.path) + '"><b>' + w.n + '</b>' + w.title + '</a>'; }).join("") +
                '</div>' +
            '</nav>';

        document.body.appendChild(host);

        var bar = shadow.querySelector(".bar");
        var weeksBtn = shadow.querySelector(".weeks");
        var panel = shadow.querySelector(".panel");
        var toggle = shadow.querySelector(".toggle");

        function setPanel(open) {
            panel.hidden = !open;
            weeksBtn.setAttribute("aria-expanded", String(open));
        }

        weeksBtn.addEventListener("click", function () { setPanel(panel.hidden); });

        toggle.addEventListener("click", function () {
            var isCollapsed = bar.classList.toggle("collapsed");
            setPanel(false);
            toggle.innerHTML = isCollapsed ? "&#9776;" : "&times;";
            toggle.setAttribute("aria-label", isCollapsed ? "Show site navigation" : "Hide site navigation");
            toggle.setAttribute("aria-expanded", String(!isCollapsed));
            try { localStorage.setItem("siteNavCollapsed", isCollapsed ? "1" : "0"); } catch (e) {}
        });

        document.addEventListener("click", function (e) {
            if (!panel.hidden && !host.contains(e.target)) setPanel(false);
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !panel.hidden) { setPanel(false); weeksBtn.focus(); }
        });
    }

    function init() {
        if (document.body.classList.contains("hub")) buildHeader();
        else buildFloatingBar();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
