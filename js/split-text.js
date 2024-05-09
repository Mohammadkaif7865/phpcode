/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e() }(this, function() { return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports } var n = {}; return e.m = t, e.c = n, e.p = "", e(0) }([function(t, e, n) { "use strict";

        function r(t) { return t && t.__esModule ? t : { "default": t } } var i = n(2),
            o = r(i);
        t.exports = o["default"] }, function(t, e) {
        function n(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }
        t.exports = n }, function(t, e, n) { "use strict";

        function r(t) { return t && t.__esModule ? t : { "default": t } }
        Object.defineProperty(e, "__esModule", { value: !0 }); var i = n(9),
            o = r(i),
            u = n(3),
            f = r(u),
            s = n(4),
            c = function() { if ("undefined" != typeof window) { var t = 100,
                        e = ["scroll", "resize", "load"],
                        n = { history: [] },
                        r = { offset: {}, threshold: 0, test: s.inViewport },
                        i = (0, o["default"])(function() { n.history.forEach(function(t) { n[t].check() }) }, t);
                    e.forEach(function(t) { return addEventListener(t, i) }), window.MutationObserver && addEventListener("DOMContentLoaded", function() { new MutationObserver(i).observe(document.body, { attributes: !0, childList: !0, subtree: !0 }) }); var u = function(t) { if ("string" == typeof t) { var e = [].slice.call(document.querySelectorAll(t)); return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t] } }; return u.offset = function(t) { if (void 0 === t) return r.offset; var e = function(t) { return "number" == typeof t }; return ["top", "right", "bottom", "left"].forEach(e(t) ? function(e) { return r.offset[e] = t } : function(n) { return e(t[n]) ? r.offset[n] = t[n] : null }), r.offset }, u.threshold = function(t) { return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold }, u.test = function(t) { return "function" == typeof t ? r.test = t : r.test }, u.is = function(t) { return r.test(t, r) }, u.offset(0), u } };
        e["default"] = c() }, function(t, e) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
            i = function() {
                function t(e, r) { n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = { enter: [], exit: [] }, this.singles = { enter: [], exit: [] } } return r(t, [{ key: "check", value: function() { var t = this; return this.elements.forEach(function(e) { var n = t.options.test(e, t.options),
                                r = t.current.indexOf(e),
                                i = r > -1,
                                o = n && !i,
                                u = !n && i;
                            o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e)) }), this } }, { key: "on", value: function(t, e) { return this.handlers[t].push(e), this } }, { key: "once", value: function(t, e) { return this.singles[t].unshift(e), this } }, { key: "emit", value: function(t, e) { for (; this.singles[t].length;) this.singles[t].pop()(e); for (var n = this.handlers[t].length; --n > -1;) this.handlers[t][n](e); return this } }]), t }();
        e["default"] = function(t, e) { return new i(t, e) } }, function(t, e) { "use strict";

        function n(t, e) { var n = t.getBoundingClientRect(),
                r = n.top,
                i = n.right,
                o = n.bottom,
                u = n.left,
                f = n.width,
                s = n.height,
                c = { t: o, r: window.innerWidth - u, b: window.innerHeight - r, l: i },
                a = { x: e.threshold * f, y: e.threshold * s }; return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.inViewport = n }, function(t, e) {
        (function(e) { var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n }).call(e, function() { return this }()) }, function(t, e, n) { var r = n(5),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o }, function(t, e, n) {
        function r(t, e, n) {
            function r(e) { var n = x,
                    r = m; return x = m = void 0, E = e, w = t.apply(r, n) }

            function a(t) { return E = t, j = setTimeout(h, e), M ? r(t) : w }

            function l(t) { var n = t - O,
                    r = t - E,
                    i = e - n; return _ ? c(i, g - r) : i }

            function d(t) { var n = t - O,
                    r = t - E; return void 0 === O || n >= e || n < 0 || _ && r >= g }

            function h() { var t = o(); return d(t) ? p(t) : void(j = setTimeout(h, l(t))) }

            function p(t) { return j = void 0, T && x ? r(t) : (x = m = void 0, w) }

            function v() { void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0 }

            function y() { return void 0 === j ? w : p(o()) }

            function b() { var t = o(),
                    n = d(t); if (x = arguments, m = this, O = t, n) { if (void 0 === j) return a(O); if (_) return j = setTimeout(h, e), r(O) } return void 0 === j && (j = setTimeout(h, e)), w } var x, m, g, w, j, O, E = 0,
                M = !1,
                _ = !1,
                T = !0; if ("function" != typeof t) throw new TypeError(f); return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b } var i = n(1),
            o = n(8),
            u = n(10),
            f = "Expected a function",
            s = Math.max,
            c = Math.min;
        t.exports = r }, function(t, e, n) { var r = n(6),
            i = function() { return r.Date.now() };
        t.exports = i }, function(t, e, n) {
        function r(t, e, n) { var r = !0,
                f = !0; if ("function" != typeof t) throw new TypeError(u); return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, { leading: r, maxWait: e, trailing: f }) } var i = n(7),
            o = n(1),
            u = "Expected a function";
        t.exports = r }, function(t, e) {
        function n(t) { return t }
        t.exports = n }]) });

function SplitText(s, e) {
    function t(s) { if ("object" == typeof s && null !== s) { var e = {}; for (var i in s) e[i] = t(s[i]); return e } return s }

    function i(s, e) { return new RegExp("(\\s|^)" + e + "(\\s|$)").test(s.className) }

    function o(s, e) { i(s, e) || (s.className += " " + e) }

    function r(s) {
        var s = s,
            e = 0,
            t = 0,
            i = 0,
            o = 0;
        if (s.offsetParent) { do s.offsetParent && s.offsetParent == document.getElementsByTagName("html")[0], e += s.offsetTop, t += s.offsetParent ? s.offsetParent.scrollTop : 0, i += s.offsetLeft, o += s.offsetParent ? s.offsetParent.scrollLeft : 0; while (s = s.offsetParent); return [i - o, e - t] }
    }

    function n(s, e) {
        var t = "<div style='display:inline-block;'>",
            i = "</div>";
        s.innerHTML = t + s.innerHTML.replaceAll(" ", i + " " + t) + i;
        for (var n = s.querySelectorAll("div"), l = 0; l < n.length; l++) {
            if (void 0 !== e.vars.wordsClass && "undefined" != e.vars.wordsClass && o(n[l], e.vars.wordsClass.replaceAll("++", l + 1)), null !== e.vars.position)
                if ("absolute" == e.vars.position) n[l].toBe = { top: n[l].offsetTop, left: n[l].offsetLeft }, n[l].style.position = "relative";
                else if ("fixed" == e.vars.position) {
                var a = r(n[l]);
                n[l].toBe = { top: a[1], left: a[0] }, n[l].style.position = "relative"
            } else n[l].style.position = e.vars.position;
            y.words.push(n[l])
        }
    }

    function l(s, e) {
        var t = "<div style='display:inline-block;'>",
            i = "</div>",
            n = s.innerHTML.match(/(&\w+;)/g);
        s.innerHTML = t + s.innerHTML.replace(/&\w+;/g, "áˆ…").split("").join(i + t) + i;
        for (var l = s.querySelectorAll("div"), a = 0; a < l.length; a++) {
            if (void 0 !== e.vars.charsClass && "undefined" != e.vars.charsClass) {
                var h = e.vars.charsClass.replaceAll("++", a + 1);
                h = a != l.length - 1 ? h.replaceAll("**", l[a].innerHTML + l[a + 1].innerHTML) : h.replaceAll("**", ""), o(l[a], h)
            }
            if (null !== e.vars.position)
                if ("absolute" == e.vars.position) l[a].toBe = { top: l[a].offsetTop, left: l[a].offsetLeft }, l[a].style.position = "relative";
                else if ("fixed" == e.vars.position) {
                var f = r(l[a]);
                l[a].toBe = { top: f[1], left: f[0] }, l[a].style.position = "relative"
            } else l[a].style.position = e.vars.position;
            "áˆ…" == l[a].innerHTML && (l[a].innerHTML = n[0], n.splice(0, 1)), y.chars.push(l[a])
        }
    }
    String.prototype.replaceAll = function(s, e) { var t = this; return t.split(s).join(e) };
    var s = s || [],
        a = { type: "chars,words,lines", charsClass: void 0, linesClass: void 0, wordsClass: void 0, position: "relative" };
    this.HTMLobjects = [], this.vars = {}, this.originalHTML = [], this.lines = [], this.words = [], this.chars = [], Array.isArray(s) || (s = [s]);
    for (var h = 0; h < s.length; h++) {
        if (1 == s[h].nodeType && this.HTMLobjects.push(s[h]), window.jQuery && s[h] && (s[h] instanceof jQuery || s[h].constructor.prototype.jquery))
            for (var f = 0; f < s[h].length; f++) 1 == s[h][f].nodeType && this.HTMLobjects.push(s[h][f]);
        if ("string" == typeof s[h]) { elements = document.querySelectorAll(s[h]); for (var f = 0; f < elements.length; f++) 1 == elements[f].nodeType && this.HTMLobjects.push(elements[f]) }
    }
    if (e && "object" == typeof e && null !== e) {
        if (e.type && "string" == typeof e.type) {
            e.type = e.type.split(",");
            for (var p = ["chars", "words", "lines"], v = [], h = 0; h < e.type.length; h++) - 1 != p.indexOf(e.type[h].toLowerCase()) && -1 == v.indexOf(e.type[h].toLowerCase()) ? v.push(e.type[h].toLowerCase()) : console.error(e.type[h] + "is not a valid type");
            0 == v.length ? this.vars.type = a.type : this.vars.type = v.join(",")
        } else this.vars.type = a.type;
        this.vars.charsClass = e.charsClass && "string" == typeof e.charsClass ? e.charsClass : a.charsClass, this.vars.wordsClass = e.wordsClass && "string" == typeof e.wordsClass ? e.wordsClass : a.wordsClass, this.vars.linesClass = e.linesClass && "string" == typeof e.linesClass ? e.linesClass : a.linesClass;
        var c = ["absolute", "relative", "static", "fixed", "inherit", "initial", null];
        this.vars.position = e.position && -1 != c.indexOf(e.position) ? e.position : a.position
    } else this.vars = t(a);
    for (var h = 0; h < this.HTMLobjects.length; h++) this.originalHTML[h] = this.HTMLobjects[h].innerHTML;
    this.revert = function() { for (var s = 0; s < this.HTMLobjects.length; s++) this.HTMLobjects[s].innerHTML = this.originalHTML[s] };
    this.vars.type = this.vars.type.split(",");
    for (var h = 0; h < this.HTMLobjects.length; h++) {
        var d = this.HTMLobjects[h];
        d.innerHTML = d.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        var y = { lines: [], words: [], chars: [] };
        if (-1 != this.vars.type.indexOf("lines")) {
            var g = d.innerHTML,
                u = g.split(" "),
                w = [];
            d.innerHTML = u[0];
            for (var T = d.offsetHeight, f = 1; f < u.length; f++) d.innerHTML = d.innerHTML + " " + u[f], d.offsetHeight > T && (T = d.offsetHeight, w.push(d.innerHTML.length - (u[f].length + 1)));
            w.push(d.innerHTML.length), d.innerHTML = "";
            for (var f = 0; f < w.length; f++) {
                var L = 0 == f ? 0 : w[f - 1] + 1,
                    H = f == w.length - 1 ? g.length : w[f],
                    M = document.createElement("div");
                if (M.style.display = "block", void 0 !== this.vars.linesClass && "undefined" != this.vars.linesClass && (this["class"] = this.vars.linesClass.replace("++", f + 1)), M.innerHTML = g.substring(L, H), d.appendChild(M), null !== this.vars.position)
                    if ("absolute" == this.vars.position) M.toBe = { top: M.offsetTop, left: M.offsetLeft }, M.style.position = "relative";
                    else if ("fixed" == this.vars.position) {
                    var C = r(M);
                    M.toBe = { top: C[1], left: C[0] }, M.style.position = "relative"
                } else M.style.position = this.vars.position;
                y.lines.push(M)
            }
        }
        if (-1 != this.vars.type.indexOf("words"))
            if (-1 != this.vars.type.indexOf("lines"))
                for (var f = 0; f < y.lines.length; f++) n(y.lines[f], this);
            else n(d, this);
        if (-1 != this.vars.type.indexOf("chars"))
            if (-1 != this.vars.type.indexOf("words"))
                for (var f = 0; f < y.words.length; f++) l(y.words[f], this);
            else if (-1 != this.vars.type.indexOf("lines"))
            for (var f = 0; f < y.lines.length; f++) l(y.lines[f], this);
        else l(d, this);
        if ("absolute" == this.vars.position || "fixed" == this.vars.position) { for (var f = y.chars.length - 1; f >= 0; f--) y.chars[f].style.width = y.chars[f].offsetWidth + "px", y.chars[f].style.height = y.chars[f].offsetHeight + "px", y.chars[f].style.left = y.chars[f].toBe.left + "px", y.chars[f].style.top = y.chars[f].toBe.top + "px"; for (var f = y.words.length - 1; f >= 0; f--) y.words[f].style.width = y.words[f].offsetWidth + "px", y.words[f].style.height = y.words[f].offsetHeight + "px", y.words[f].style.left = y.words[f].toBe.left + "px", y.words[f].style.top = y.words[f].toBe.top + "px"; for (var f = y.lines.length - 1; f >= 0; f--) y.lines[f].style.width = y.lines[f].offsetWidth + "px", y.lines[f].style.height = y.lines[f].offsetHeight + "px", y.lines[f].style.left = y.lines[f].toBe.left + "px", y.lines[f].style.top = y.lines[f].toBe.top + "px"; for (var f = y.chars.length - 1; f >= 0; f--) y.chars[f].style.position = this.vars.position; for (var f = y.words.length - 1; f >= 0; f--) y.words[f].style.position = this.vars.position; for (var f = y.lines.length - 1; f >= 0; f--) y.lines[f].style.position = this.vars.position }
        this.lines = this.lines.concat(y.lines), this.words = this.words.concat(y.words), this.chars = this.chars.concat(y.chars)
    }
}