parcelRequire = (function (e, r, t, n) {
	var i,
		o = 'function' == typeof parcelRequire && parcelRequire,
		u = 'function' == typeof require && require;
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = 'function' == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && 'string' == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw ((c.code = 'MODULE_NOT_FOUND'), c);
			}
			(p.resolve = function (r) {
				return e[t][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[t] = new f.Module(t));
			e[t][0].call(l.exports, p, l, l.exports, this);
		}
		return r[t].exports;
		function p(e) {
			return f(p.resolve(e));
		}
	}
	(f.isParcelRequire = !0),
		(f.Module = function (e) {
			(this.id = e), (this.bundle = f), (this.exports = {});
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function (r, t) {
			e[r] = [
				function (e, r) {
					r.exports = t;
				},
				{},
			];
		});
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c]);
		} catch (e) {
			i || (i = e);
		}
	if (t.length) {
		var l = f(t[t.length - 1]);
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = l)
			: 'function' == typeof define && define.amd
			? define(function () {
					return l;
			  })
			: n && (this[n] = l);
	}
	if (((parcelRequire = f), i)) throw i;
	return f;
})(
	{
		Asjh: [
			function (require, module, exports) {
				'use strict';
				var _ = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
				module.exports = _;
			},
			{},
		],
		wVGV: [
			function (require, module, exports) {
				'use strict';
				var e = require('./lib/ReactPropTypesSecret');
				function r() {}
				function t() {}
				(t.resetWarningCache = r),
					(module.exports = function () {
						function n(r, t, n, o, a, p) {
							if (p !== e) {
								var c = new Error(
									'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
								);
								throw ((c.name = 'Invariant Violation'), c);
							}
						}
						function o() {
							return n;
						}
						n.isRequired = n;
						var a = {
							array: n,
							bool: n,
							func: n,
							number: n,
							object: n,
							string: n,
							symbol: n,
							any: n,
							arrayOf: o,
							element: n,
							elementType: n,
							instanceOf: o,
							node: n,
							objectOf: o,
							oneOf: o,
							oneOfType: o,
							shape: o,
							exact: o,
							checkPropTypes: t,
							resetWarningCache: r,
						};
						return (a.PropTypes = a), a;
					});
			},
			{ './lib/ReactPropTypesSecret': 'Asjh' },
		],
		D9Od: [
			function (require, module, exports) {
				var r, e;
				module.exports = require('./factoryWithThrowingShims')();
			},
			{ './factoryWithThrowingShims': 'wVGV' },
		],
		yNkt: [function (require, module, exports) {}, {}],
		RtZ8: [
			function (require, module, exports) {
				'use strict';
				var e = t(require('prop-types'));
				function t(e) {
					return e && e.__esModule ? e : { default: e };
				}
				require('./sr-only.scss');
				var n = wp.i18n.__,
					r = wp.richText,
					a = r.registerFormatType,
					o = r.toggleFormat,
					i = wp.editor.RichTextToolbarButton,
					c = 'rkv/sr-only',
					l = n('Screen Reader Only'),
					u = function (e) {
						var t = e.isActive,
							n = e.value,
							r = e.onChange,
							a = e.onFocus;
						return React.createElement(
							React.Fragment,
							null,
							React.createElement(i, {
								icon: 'hidden',
								title: l,
								onClick: function () {
									r(o(n, { type: c })), a();
								},
								isActive: t,
							})
						);
					};
				(u.propTypes = {
					isActive: e.default.bool,
					value: e.default.string,
					onChange: e.default.func,
					onFocus: e.default.func,
				}),
					a(c, { title: l, tagName: 'span', className: 'text-format-sr-only', edit: u });
			},
			{ 'prop-types': 'D9Od', './sr-only.scss': 'yNkt' },
		],
		X1ux: [
			function (require, module, exports) {
				'use strict';
				require('./sr-only');
			},
			{ './sr-only': 'RtZ8' },
		],
	},
	{},
	['X1ux'],
	null
);
//# sourceMappingURL=main.js.map
