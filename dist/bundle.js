webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Router = __webpack_require__(1);
	var Route = Router.Route;
	var App = __webpack_require__(196);
	var React = __webpack_require__(5);

	var MainTable = __webpack_require__(354);
	var LinksTable = __webpack_require__(359);
	var DetailChart = __webpack_require__(360);
	var injectTapEventPlugin = __webpack_require__(545);
	injectTapEventPlugin();

	// declare our routes and their hierarchy
	var routes = React.createElement(
	  Route,
	  { handler: App },
	  React.createElement(Route, { name: 'main', path: '/', handler: MainTable }),
	  React.createElement(Route, { name: 'links', path: '/links/:name', handler: LinksTable }),
	  React.createElement(Route, { name: 'detail', path: '/detail/:id', handler: DetailChart })
	);

	Router.run(routes, Router.HashLocation, function (Root) {
	  React.render(React.createElement(Root, null), document.getElementById('main'));
	});

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(350);
	var React = __webpack_require__(5);
	var Router = __webpack_require__(1);
	var mui = __webpack_require__(197);
	var ThemeManager = new mui.Styles.ThemeManager();
	var AppBar = mui.AppBar;
	var IconButton = mui.IconButton;
	var RouteHandler = Router.RouteHandler;
	var Link = __webpack_require__(1).Link;

	var ReactAdd = __webpack_require__(203);
	var PureRenderMixin = ReactAdd.addons.PureRenderMixin;
	var NavigationClose = React.createClass({
	  displayName: 'NavigationClose',

	  mixins: [PureRenderMixin],

	  goIndex: function goIndex() {
	    window.location.hash = '';
	  },

	  render: function render() {
	    var contentStyle = {
	      backgroundImage: 'url(./images/logo@2x.png)',
	      height: '35px',
	      width: '30px',
	      backgroundSize: 'cover',
	      position: 'relative',
	      top: '-5px'
	    };

	    return React.createElement('div', { style: contentStyle, onClick: this.goIndex });
	  }

	});

	var App = React.createClass({
	  displayName: 'App',

	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
	  },
	  render: function render() {
	    var contentStyle = {
	      'fontFamily': "PingHei, STHeitiSC-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif"
	    };

	    var toMainPage = function toMainPage() {
	      location.hash = '#';
	    };

	    var mainStyle = {
	      width: '1200px',
	      margin: '40px auto'
	    };
	    return React.createElement(
	      'div',
	      { style: contentStyle },
	      React.createElement(AppBar, {
	        title: '核心链路数据监控',
	        iconElementLeft: React.createElement(
	          IconButton,
	          null,
	          React.createElement(NavigationClose, null)
	        ),
	        onLeftIconButtonTouchTap: toMainPage }),
	      React.createElement(
	        'div',
	        { style: mainStyle },
	        React.createElement(RouteHandler, null)
	      )
	    );
	  }

	});

	module.exports = App;

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(351);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(353)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(352)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 352:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var mui = __webpack_require__(197);
	var Table = mui.Table;
	var hack = __webpack_require__(355);
	var Link = __webpack_require__(1).Link;
	var ArrowSpan = __webpack_require__(356);
	var TableMixin = __webpack_require__(357);

	var tableConfig = {
	  fixedHeader: true,
	  stripedRows: false,
	  showRowHover: true,
	  selectable: true,
	  multiSelectable: false,
	  deselectOnClickaway: true,
	  displayRowCheckbox: false,
	  displaySelectAll: false,
	  height: '600px'
	};
	var headerCols = {
	  core: {
	    content: '核心链路'
	  },
	  QPS: {
	    content: 'QPS'
	  },
	  QPStrend: {
	    content: '趋势'
	  },
	  RT: {
	    content: 'RT'
	  },
	  RTtrend: {
	    content: '趋势'
	  },
	  URT: {
	    content: 'URT'
	  },
	  URTtrend: {
	    content: '趋势'
	  }
	};
	var colOrder = ['core', 'RT', 'RTtrend', 'URT', 'URTtrend', 'QPS', 'QPStrend'];

	var groups = [{
	  name: '下单（微信）',
	  group: [1, 2, 3, 6, 12, 13, 14, 15]
	}, {
	  name: '下单（储蓄卡）',
	  group: [1, 2, 3, 6, 10, 11, 12, 13, 14, 15]
	}, {
	  name: '下单（信用卡）',
	  group: [1, 2, 3, 6, 7, 8, 9, 12, 13, 14, 15]
	}, {
	  name: '登录（卖家）',
	  group: [16, 17]
	}, {
	  name: '登录（买家）',
	  group: [18, 19]
	}];

	module.exports = React.createClass({
	  displayName: 'exports',

	  mixins: [TableMixin],

	  render: function render() {
	    var rowData = JSON.parse(JSON.stringify(this.state.rowData));

	    var rowData1 = rowData.filter(function (item) {
	      return item.core == '下单';
	    });

	    var rowData2 = rowData.filter(function (item) {
	      return item.core == '登录';
	    });

	    rowData = groups.map(function (item) {
	      return rowData.filter(function (it) {
	        return item.group.some(function (i) {
	          return i == it.id;
	        });
	      });
	    });

	    rowData = JSON.parse(JSON.stringify(rowData));

	    rowData.forEach(function (item, i) {
	      item.forEach(function (it) {
	        it.core = groups[i].name;
	      });
	    });

	    rowData = rowData.map(function (item) {
	      return item.reduce(function (a, b) {
	        a.QPS += b.QPS;
	        a.RT += b.RT;
	        a.URT += b.URT;
	        a.QPScontrast += b.QPScontrast;
	        a.RTcontrast += b.RTcontrast;
	        a.URTcontrast += b.URTcontrast;
	        return a;
	      });
	    });

	    rowData.forEach(function (item) {
	      item.QPStrend = ~ ~((1 - item.QPScontrast / item.QPS) * 100);
	      item.RTtrend = ~ ~((1 - item.RTcontrast / item.RT) * 100);
	      item.URTtrend = ~ ~((1 - item.RTcontrast / item.RT) * 100);

	      Object.keys(item).forEach(function (k) {
	        if (k == 'core') {
	          item[k] = {
	            content: React.createElement(
	              Link,
	              { to: 'links', params: { name: 'all' } },
	              item[k]
	            )
	          };
	        } else if (k == 'QPS' || k == 'RT' || k == 'URT') {
	          item[k] = {
	            content: item[k] == null ? React.createElement(
	              'span',
	              null,
	              'null'
	            ) : item[k]
	          };
	        } else if (k == 'QPStrend' || k == 'RTtrend' || k == 'URTtrend') {
	          item[k] = {
	            content: React.createElement(ArrowSpan, { data: item[k], reverse: k == 'QPStrend' })
	          };
	        } else {
	          item[k] = {
	            content: item[k]
	          };
	        };
	      });
	    });

	    //转换数字  
	    hack.wrapNum(rowData);

	    return React.createElement(Table, _extends({
	      headerColumns: headerCols,
	      columnOrder: colOrder,
	      rowData: rowData
	    }, tableConfig));
	  }
	});

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(5);

	function wrapNum(data) {
	  data.forEach(function (item) {
	    for (var key in item) {
	      var value = item[key].content;
	      if (React.Children.count(value) === 1) {
	        if (!isNaN(value)) {
	          value = React.createElement(
	            'span',
	            null,
	            value
	          );
	        }
	      }
	      item[key].content = value;
	    }
	  });

	  return data;
	};

	module.exports = {
	  wrapNum: wrapNum
	};

/***/ },

/***/ 356:
/***/ function(module, exports) {

	'use strict';

	var ArrowSpan = React.createClass({
	    displayName: 'ArrowSpan',

	    render: function render() {
	        var value = this.props.data,
	            addClass = null,
	            arrow = null,
	            reverse = this.props.reverse;

	        if (!isNaN(value)) {

	            if (value < 0) {
	                addClass = {
	                    color: reverse ? '#c10000' : null
	                };
	                arrow = '% ↓';
	                value += arrow;
	            } else if (value > 0) {
	                addClass = {
	                    color: reverse ? null : '#c10000'
	                };
	                arrow = '% ↑';
	                value += arrow;
	            }
	        }
	        return React.createElement(
	            'span',
	            { style: addClass },
	            value
	        );
	    }
	});

	module.exports = ArrowSpan;

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pagesData = __webpack_require__(358).pages;
	var apiAddress = __webpack_require__(358).apiAddress;

	var TableMixin = {
	  getInitialState: function getInitialState() {
	    return {
	      rowData: pagesData.map(function (item) {
	        return {
	          id: item.id,
	          core: item.core,
	          feature: item.name,
	          service: item.service,
	          method: item.method,
	          URL: item.url,
	          QPS: null,
	          QPScontrast: null,
	          RT: null,
	          RTcontrast: null
	        };
	      })
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.interval = setInterval((function () {
	      this.updateAllRow();
	    }).bind(this), 1000 * 30);

	    this.updateAllRow();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	  },

	  updateAllRow: function updateAllRow() {
	    this.state.rowData.forEach((function (item, index) {
	      this.fetchItemData(item.service, item.method, index);
	    }).bind(this));
	  },

	  fetchItemData: function fetchItemData(service, method, index) {
	    var time = parseInt(new Date() / 1000);

	    var requestOption = {
	      business: 'youzan_core_service',
	      stime: time - 120,
	      etime: time - 60,
	      aggregator: 'sum',
	      metrics: ['qpm', 'rt', 'urt'],
	      tags: { service: service, method: method }
	    };

	    var p1 = $.get(apiAddress + '/monitor/pull', {
	      query: JSON.stringify(requestOption)
	    });

	    requestOption.stime -= 60;
	    requestOption.etime -= 60;
	    var p2 = $.get(apiAddress + '/monitor/pull', {
	      query: JSON.stringify(requestOption)
	    });

	    function caculAverage(dps) {
	      var sum = 0;
	      var ks = Object.keys(dps);
	      ks.forEach(function (k) {
	        sum += dps[k];
	      });
	      return sum / ks.length;
	    }

	    $.when(p1, p2).then((function (res1, res2) {
	      var result1 = res1[0].result;
	      var result2 = res2[0].result;
	      var rowData = this.state.rowData;
	      var rowItemData = rowData[index];

	      try {
	        rowData[index].QPS = parseInt(caculAverage(result1[0].dps) / 60);
	        rowData[index].RT = parseInt(caculAverage(result1[1].dps));
	        rowData[index].URT = parseInt(caculAverage(result1[2].dps));
	        rowData[index].QPScontrast = parseInt(caculAverage(result2[0].dps) / 60);
	        rowData[index].RTcontrast = parseInt(caculAverage(result2[1].dps));
	        rowData[index].URTcontrast = parseInt(caculAverage(result2[2].dps));

	        this.setState({
	          rowData: rowData
	        });
	      } catch (e) {
	        console.error(e);
	      }
	    }).bind(this));
	  }
	};

	module.exports = TableMixin;

/***/ },

/***/ 358:
/***/ function(module, exports) {

	module.exports = {
	  apiAddress: 'http://api.hawk.qima-inc.com',
	  pages: [ { id: '1',
	    serviceName: '商品',
	    service: 'goods',
	    core: '下单',
	    method: 'show_goods',
	    url: 'detail.koudaitong.com/show/goods',
	    name: '商品详情页' },
	  { id: '2',
	    serviceName: '下单',
	    service: 'order',
	    core: '下单',
	    method: 'wxpay_confirm',
	    url: 'trade.koudaitong.com/wxpay/confirm',
	    name: '支付页(收银台)' },
	  { id: '3',
	    serviceName: '物流',
	    service: 'expreess',
	    core: '下单',
	    method: 'save_address',
	    url: 'trade.koudaitong.com/trade/order/address.json',
	    name: '保存地址' },
	  { id: '4',
	    serviceName: '物流',
	    service: 'expreess',
	    core: '下单',
	    method: 'selffetch_list',
	    url: 'trade.koudaitong.com/v2/trade/selffetch/list.json',
	    name: '到店自提list' },
	  { id: '5',
	    serviceName: '物流',
	    service: 'expreess',
	    core: '下单',
	    method: 'selffetch_book',
	    url: 'trade.koudaitong.com/v2/trade/selffetch/book.json',
	    name: '到店自提book' },
	  { id: '6',
	    serviceName: '支付',
	    service: 'pay',
	    core: '下单',
	    method: 'order_pay',
	    url: 'trade.koudaitong.com/trade/order/pay.json',
	    name: '支付操作' },
	  { id: '7',
	    serviceName: '支付',
	    service: 'pay',
	    core: '下单',
	    method: 'umpay_card',
	    url: 'trade.koudaitong.com/pay/umpay/cards',
	    name: '信用卡绑定' },
	  { id: '8',
	    serviceName: '支付',
	    service: 'pay',
	    core: '下单',
	    method: 'umpay_pay',
	    url: 'trade.koudaitong.com/pay/umpay/confirm',
	    name: '信用卡支付' },
	  { id: '9',
	    serviceName: '支付',
	    service: 'pay',
	    core: '下单',
	    method: 'umpay_agreeconfirm',
	    url: 'trade.koudaitong.com/pay/umpay/agreeConfirm.json',
	    name: '信用卡支付确认' },
	  { id: '10',
	    serviceName: '支付',
	    service: 'pay',
	    core: '下单',
	    method: 'pay_baiduwap',
	    url: 'trade.koudaitong.com/pay/baiduwap/redirect',
	    name: '储蓄卡支付' },
	  { id: '11',
	    serviceName: '交易结果页',
	    service: 'order_result',
	    core: '下单',
	    method: 'baiduwap_return',
	    url: 'trade.koudaitong.com/pay/baiduwap/return',
	    name: '储蓄卡支付完成' },
	  { id: '12',
	    serviceName: '交易结果页',
	    service: 'order_result',
	    core: '下单',
	    method: 'order_complete',
	    url: 'trade.koudaitong.com/trade/order/paid',
	    name: '支付成功/失败中间页' },
	  { id: '13',
	    serviceName: '交易结果页',
	    service: 'order_result',
	    core: '下单',
	    method: 'confirm',
	    url: 'trade.koudaitong.com/confirm',
	    name: '结果页' },
	  { id: '14',
	    serviceName: '交易结果页',
	    service: 'order_result',
	    core: '下单',
	    method: 'order_result',
	    url: 'trade.koudaitong.com/trade/order/result',
	    name: '订单详情页' },
	  { id: '15',
	    serviceName: '交易结果页',
	    service: 'order_result',
	    core: '下单',
	    method: 'order_express',
	    url: 'trade.koudaitong.com/v2/trade/order/orderExpress.json',
	    name: '获取物流信息' },
	  { id: '16',
	    serviceName: '登录',
	    service: 'login',
	    core: '登录',
	    method: 'user_login',
	    url: 'koudaitong.com/account/user/login',
	    name: '登录（卖家）' },
	  { id: '17',
	    serviceName: '登录',
	    service: 'login',
	    core: '登录',
	    method: 'sso_login',
	    url: 'login.youzan.com/sso/index/login.json',
	    name: '登录' },
	  { id: '18',
	    serviceName: 'wap登录',
	    service: 'wap_login',
	    core: '登录',
	    method: 'auth_confirm',
	    url: 'trade.koudaitong.com/v2/buyer/auth/authConfirm.json',
	    name: '判断注册（买家）' },
	  { id: '19',
	    serviceName: 'wap登录',
	    service: 'wap_login',
	    core: '登录',
	    method: 'auth_login',
	    url: 'wap.koudaitong.com/v2/buyer/auth/authlogin.json',
	    name: '进行登录（买家）' } ]
	};

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var mui = __webpack_require__(197);
	var Table = mui.Table;
	var hack = __webpack_require__(355);
	var Link = __webpack_require__(1).Link;
	var ArrowSpan = __webpack_require__(356);
	var TableMixin = __webpack_require__(357);

	// Column configuration
	var headerCols = {
	  core: {
	    content: '核心链路',
	    style: {
	      width: '40px'
	    }
	  },
	  feature: {
	    content: '功能点',
	    style: {
	      width: '100px'
	    }
	  },
	  URL: {
	    content: 'URL',
	    style: {
	      width: '200px'
	    }
	  },
	  QPS: {
	    content: 'QPS'
	  },
	  QPStrend: {
	    content: '趋势'
	  },
	  RT: {
	    content: 'RT'
	  },
	  RTtrend: {
	    content: '趋势'
	  },
	  URT: {
	    content: 'URT'
	  },
	  URTtrend: {
	    content: '趋势'
	  }
	};
	var colOrder = ['core', 'feature', 'URL', 'RT', 'RTtrend', 'URT', 'URTtrend', 'QPS', 'QPStrend'];
	var tableConfig = {
	  fixedHeader: true,
	  stripedRows: false,
	  showRowHover: true,
	  selectable: true,
	  multiSelectable: false,
	  deselectOnClickaway: true,
	  displayRowCheckbox: false,
	  displaySelectAll: false,
	  height: '600px'
	};

	module.exports = React.createClass({
	  displayName: 'exports',

	  mixins: [TableMixin],

	  render: function render() {
	    var rowData = JSON.parse(JSON.stringify(this.state.rowData));

	    rowData.forEach(function (item) {
	      var id = item.id;
	      item.QPStrend = ~ ~((1 - item.QPScontrast / item.QPS) * 100);
	      item.RTtrend = ~ ~((1 - item.RTcontrast / item.RT) * 100);
	      item.URTtrend = ~ ~((1 - item.URTcontrast / item.RT) * 100);

	      Object.keys(item).forEach(function (k) {
	        if (k == 'feature') {
	          item[k] = {
	            content: React.createElement(
	              Link,
	              { to: 'detail', params: { id: id } },
	              item[k]
	            ),
	            style: {
	              width: '100px'
	            }
	          };
	        } else if (k == 'QPS' || k == 'RT' || k == 'URT') {
	          item[k] = {
	            content: item[k] == null ? React.createElement(
	              'span',
	              null,
	              'null'
	            ) : item[k]
	          };
	        } else if (k == 'URL') {
	          item[k] = {
	            content: item[k],
	            style: {
	              width: '200px'
	            }
	          };
	        } else if (k == 'QPStrend' || k == 'RTtrend' || k == 'URTtrend') {
	          item[k] = {
	            content: React.createElement(ArrowSpan, { data: item[k], reverse: k == 'QPStrend' })
	          };
	        } else if (k == 'core') {
	          item[k] = {
	            content: item[k],
	            style: {
	              width: '40px'
	            }
	          };
	        } else {
	          item[k] = {
	            content: item[k]
	          };
	        };
	      });
	    });

	    hack.wrapNum(rowData);

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Table, _extends({
	        headerColumns: headerCols,
	        columnOrder: colOrder,
	        rowData: rowData
	      }, tableConfig))
	    );
	  }
	});

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var mui = __webpack_require__(197);
	var DropDownMenu = mui.DropDownMenu;
	var TextField = mui.TextField;
	var ButtonSelects = __webpack_require__(361);
	var Chart = __webpack_require__(362);
	var pagesData = __webpack_require__(358).pages;

	var DetailChart = React.createClass({
	  displayName: 'DetailChart',

	  getInitialState: function getInitialState() {
	    return {
	      dateRangeSelectIndex: 0,
	      contrastSelectIndex: null,
	      pageIndex: this.props.params.id - 1
	    };
	  },

	  render: function render() {
	    var rowStyle = { margin: '40px auto' };

	    var dateRangeItems = [{ label: '一天' }, { label: '一周' }, { label: '一月' }, { label: '三月' }];
	    var contrastItems = [{ label: '一天前' }, { label: '一周前' }, { label: '一月前' }, { label: '三月前' }];
	    var pages = pagesData.map(function (item) {
	      return {
	        payload: item.id,
	        text: item.name
	      };
	    });

	    contrastItems.forEach((function (item, i) {
	      item.disabled = this.state.dateRangeSelectIndex != 0;
	    }).bind(this));

	    var dateRange = dateRangeItems[this.state.dateRangeSelectIndex];
	    var contrastItem = contrastItems[this.state.contrastSelectIndex];

	    dateRange && (dateRange.isChecked = true);
	    contrastItem && (contrastItem.isChecked = true);

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { style: rowStyle },
	        React.createElement(
	          'label',
	          null,
	          '监控页面选择：'
	        ),
	        React.createElement(DropDownMenu, { menuItems: pages, onChange: this.handlePageChange, selectedIndex: this.state.pageIndex }),
	        React.createElement(
	          'div',
	          { style: { display: 'inline-block' } },
	          React.createElement(ButtonSelects, { items: dateRangeItems, onChange: this.handleDateRangeChange })
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: rowStyle },
	        React.createElement(
	          'label',
	          null,
	          '对比数据选择：'
	        ),
	        React.createElement(
	          'div',
	          { style: { display: 'inline-block' } },
	          React.createElement(ButtonSelects, { items: contrastItems, onChange: this.handleContrastItemChange })
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: rowStyle },
	        React.createElement(
	          'label',
	          null,
	          'RT趋势图'
	        ),
	        React.createElement(Chart, _extends({}, this.state, { metrics: 'RT', YUnit: 'ms' }))
	      ),
	      React.createElement(
	        'div',
	        { style: rowStyle },
	        React.createElement(
	          'label',
	          null,
	          'URT趋势图'
	        ),
	        React.createElement(Chart, _extends({}, this.state, { metrics: 'URT', YUnit: 'ms' }))
	      ),
	      React.createElement(
	        'div',
	        { style: rowStyle },
	        React.createElement(
	          'label',
	          null,
	          'QPS趋势图：'
	        ),
	        React.createElement(Chart, _extends({}, this.state, { metrics: 'qpm', metricsName: 'QPS',
	          valueMap: function (value) {
	            return (value / 60).toFixed(2);
	          }, aggregator: 'sum' }))
	      )
	    );
	  },

	  handleDateRangeChange: function handleDateRangeChange(item, index) {
	    this.setState({
	      dateRangeSelectIndex: index,
	      contrastSelectIndex: index == 0 ? this.state.contrastSelectIndex : null
	    });
	  },

	  handleContrastItemChange: function handleContrastItemChange(item, index) {
	    this.setState({
	      contrastSelectIndex: index
	    });
	  },

	  handlePageChange: function handlePageChange(elem, index, item) {
	    this.setState({
	      pageIndex: index
	    });
	  }
	});

	module.exports = DetailChart;

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var mui = __webpack_require__(197);
	var RaisedButton = mui.RaisedButton;
	var FlatButton = mui.FlatButton;

	var ButtonToggle = React.createClass({
	  displayName: 'ButtonToggle',

	  render: function render() {
	    var Button = this.props.isChecked ? RaisedButton : FlatButton;
	    return React.createElement(Button, _extends({ secondary: true }, this.props));
	  }
	});

	var ButtonSelects = React.createClass({
	  displayName: 'ButtonSelects',

	  getInitialState: function getInitialState() {
	    return {
	      chosenIndex: null
	    };
	  },

	  render: function render() {
	    var buttonStyle = { margin: '0 10px' };
	    var wrapStyle = { margin: '20px 0' };
	    return React.createElement(
	      'div',
	      { style: wrapStyle },
	      this.props.items.map((function (item, index) {
	        var isChecked = index == this.state.chosenIndex;
	        return React.createElement(ButtonToggle, _extends({ isChecked: isChecked, label: item.label }, item, {
	          style: buttonStyle, key: index, onClick: this.handleItemClick.bind(this, index) }));
	      }).bind(this))
	    );
	  },

	  handleItemClick: function handleItemClick(index) {
	    this.setState({
	      chosenIndex: index
	    });

	    this.props.onChange && this.props.onChange(this.props.items[index], index);
	  }
	});

	module.exports = ButtonSelects;

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(5);
	var Echarts = __webpack_require__(363);
	var apiAddress = __webpack_require__(358).apiAddress;
	var pagesData = __webpack_require__(358).pages;
	var moment = __webpack_require__(446);
	__webpack_require__(534);
	__webpack_require__(544);

	module.exports = React.createClass({
	  displayName: 'exports',

	  getInitialState: function getInitialState() {
	    return {
	      chartData: [{
	        keys: [],
	        values: []
	      }]
	    };
	  },
	  render: function render() {
	    var chartData = this.state.chartData;
	    var YUnit = this.props.YUnit ? ' ' + this.props.YUnit : '';

	    var config = {
	      showLoading: false,
	      tooltip: {
	        show: true
	      },
	      toolbox: {
	        show: true,
	        feature: {
	          dataZoom: { show: true },
	          dataView: { show: true },
	          magicType: { show: true, type: ['line', 'bar'] },
	          restore: { show: true }
	        }
	      },
	      legend: {
	        data: chartData.map(function (item) {
	          return item.name;
	        })
	      },
	      xAxis: [chartData[0] && {
	        data: chartData[0].keys
	      }],
	      yAxis: [{
	        position: 'left',
	        name: this.props.metricsName || this.props.metrics,
	        axisLabel: {
	          formatter: function formatter(value) {
	            return value + YUnit;
	          }
	        }
	      }],
	      series: chartData.map(function (item) {
	        return {
	          name: item.name,
	          type: 'line',
	          data: item.values
	        };
	      }),
	      noDataLoadingOption: {
	        effect: 'ring'
	      }
	    };

	    var seriesData = config.series[0].data.map(function (item) {
	      return +item;
	    });
	    var max = Math.max.apply(Math, seriesData);
	    var min = Math.min.apply(Math, seriesData);
	    var avg = seriesData.length > 0 ? seriesData.reduce(function (a, b) {
	      return a + b;
	    }) / seriesData.length : 0;
	    avg = parseInt(avg);
	    max = parseInt(max);
	    min = parseInt(min);
	    var spanStyle = { margin: '0 20px' };
	    var pStyle = { textAlign: 'center', width: '800px', fontSize: '12px', marginBottom: '20px' };

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Echarts, { config: config }),
	      React.createElement(
	        'p',
	        { style: pStyle },
	        React.createElement(
	          'span',
	          { style: spanStyle },
	          'max: ',
	          max,
	          YUnit
	        ),
	        ' ',
	        React.createElement(
	          'span',
	          { style: spanStyle },
	          'min: ',
	          min,
	          YUnit
	        ),
	        React.createElement(
	          'span',
	          { style: spanStyle },
	          'avg: ',
	          avg,
	          YUnit
	        )
	      )
	    );
	  },

	  updateChart: function updateChart(config) {
	    var pageData = pagesData[config.pageIndex];
	    var service = pageData.service;
	    var method = pageData.method;
	    var valueMap = this.props.valueMap || function (value) {
	      return value;
	    };

	    var day = 1000 * 24 * 60 * 60;
	    var t = [day, day * 7, day * 30, day * 30 * 3][config.dateRangeSelectIndex];
	    var tName = ['一天', '一周', '一月', '三月'][config.dateRangeSelectIndex];
	    if (t == undefined) {
	      return;
	    }

	    var requestOption = {
	      business: 'youzan_core_service',
	      stime: parseInt((new Date() - t) / 1000),
	      etime: parseInt(new Date() / 1000),
	      aggregator: this.props.aggregator || 'avg',
	      metrics: [this.props.metrics],
	      ignoreCache: false,
	      tags: { service: service, method: method }
	    };

	    var p = $.get(apiAddress + '/monitor/pull', {
	      query: JSON.stringify(requestOption)
	    });

	    var p2 = undefined;

	    if (config.contrastSelectIndex != undefined) {
	      requestOption.stime -= [day, day * 7, day * 30, day * 30 * 3][config.contrastSelectIndex] / 1000;
	      p2 = $.get(apiAddress + '/monitor/pull', {
	        query: JSON.stringify(requestOption)
	      });
	    }

	    p = $.when(p, p2);

	    p.then((function (res1, res2) {
	      var data = res1[0].result[0].dps;
	      var kv = this.separateKV(data);
	      var chartData = [{
	        name: tName,
	        keys: kv.keys.map(function (item) {
	          return moment(item * 1000).format('MM-DD HH:mm');
	        }),
	        values: kv.values.map(function (item) {
	          return valueMap(item);
	        })
	      }];

	      if (res2) {
	        var kv2 = this.separateKV(res2[0].result[0].dps);

	        chartData.push({
	          name: ['一天', '一周', '一月', '三月'][config.contrastSelectIndex] + '前',
	          keys: kv2.keys.map(function (item) {
	            return moment(item * 1000).format('MM-DD HH:mm');
	          }),
	          values: kv2.values.map(function (item) {
	            return valueMap(item);
	          })
	        });
	      }

	      this.setState({
	        chartData: chartData
	      });
	      this.forceUpdate();
	    }).bind(this));
	  },

	  separateKV: function separateKV(obj) {
	    var keys = Object.keys(obj).map(function (key) {
	      return key;
	    });
	    var values = Object.keys(obj).map(function (v) {
	      return obj[v];
	    });

	    return {
	      keys: keys,
	      values: values
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.updateChart(this.props);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.updateChart(nextProps);
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() {
	    return false;
	  }
	});

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(5);
	var echarts = __webpack_require__(364);

	var Echarts = React.createClass({
	    displayName: 'Echarts',

	    renderChart: function renderChart() {
	        if (!this.props.config) {
	            throw new Error('Config has to be specified, for the Highchart component');
	        }

	        var config = this.props.config;
	        var node = this.refs.chart.getDOMNode();

	        if (!config.chart) {
	            config = React.addons.update(config, { chart: { $set: {} } });
	        }

	        config = React.addons.update(config, { chart: { renderTo: { $set: node } } });

	        // 基于准备好的dom，初始化echarts图表

	        var myChart = echarts.init(node);
	        // 为echarts对象加载数据

	        myChart.setOption(config);
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        this.renderChart();
	    },

	    componentDidMount: function componentDidMount() {
	        this.renderChart();
	    },

	    render: function render() {
	        var style = { height: '400px', width: '800px' };
	        return React.createElement('div', { ref: 'chart', style: style });
	    }
	});
	module.exports = Echarts;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts图表类：折线图
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var ChartBase = __webpack_require__(396);
	    
	    // 图形依赖
	    var PolylineShape = __webpack_require__(412);
	    var IconShape = __webpack_require__(397);
	    var HalfSmoothPolygonShape = __webpack_require__(537);
	    // 组件依赖
	    __webpack_require__(538);
	    __webpack_require__(543);
	    __webpack_require__(535);
	    
	    var ecConfig = __webpack_require__(366);
	    // 折线图默认参数
	    ecConfig.line = {
	        zlevel: 0,                  // 一级层叠
	        z: 2,                       // 二级层叠
	        clickable: true,
	        legendHoverLink: true,
	        // stack: null
	        xAxisIndex: 0,
	        yAxisIndex: 0,
	        // 'nearest', 'min', 'max', 'average'
	        dataFilter: 'nearest',
	        itemStyle: {
	            normal: {
	                // color: 各异,
	                label: {
	                    show: false
	                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
	                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
	                    //           'inside'|'left'|'right'|'top'|'bottom'
	                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                },
	                lineStyle: {
	                    width: 2,
	                    type: 'solid',
	                    shadowColor: 'rgba(0,0,0,0)', //默认透明
	                    shadowBlur: 0,
	                    shadowOffsetX: 0,
	                    shadowOffsetY: 0
	                }
	            },
	            emphasis: {
	                // color: 各异,
	                label: {
	                    show: false
	                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
	                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
	                    //           'inside'|'left'|'right'|'top'|'bottom'
	                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                }
	            }
	        },
	        // smooth: false,
	        // symbol: null,         // 拐点图形类型
	        symbolSize: 2,           // 拐点图形大小
	        // symbolRotate: null,   // 拐点图形旋转控制
	        showAllSymbol: false     // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）
	    };

	    var ecData = __webpack_require__(414);
	    var zrUtil = __webpack_require__(367);
	    var zrColor = __webpack_require__(386);
	    
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} series 数据
	     * @param {Object} component 组件
	     */
	    function Line(ecTheme, messageCenter, zr, option, myChart){
	        // 图表基类
	        ChartBase.call(this, ecTheme, messageCenter, zr, option, myChart);

	        this.refresh(option);
	    }
	    
	    Line.prototype = {
	        type: ecConfig.CHART_TYPE_LINE,
	        /**
	         * 绘制图形
	         */
	        _buildShape: function () {
	            this.finalPLMap = {}; // 完成的point list(PL)
	            this._buildPosition();
	        },

	        /**
	         * 构建类目轴为水平方向的折线图系列
	         */
	        _buildHorizontal: function (seriesArray, maxDataLength, locationMap, xMarkMap) {
	            var series = this.series;
	            // 确定类目轴和数值轴，同一方向随便找一个即可
	            var seriesIndex = locationMap[0][0];
	            var serie = series[seriesIndex];
	            var categoryAxis = this.component.xAxis.getAxis(serie.xAxisIndex || 0);
	            var valueAxis;  // 数值轴各异

	            var x;
	            var y;
	            var lastYP; // 正向堆积处理
	            var baseYP;
	            var lastYN; // 负向堆积处理
	            var baseYN;
	            //var this.finalPLMap = {}; // 完成的point list(PL)
	            var curPLMap = {};   // 正在记录的point list(PL)
	            var data;
	            var value;
	            for (var i = 0, l = maxDataLength; i < l; i++) {
	                if (categoryAxis.getNameByIndex(i) == null) {
	                    // 系列数据超出类目轴长度
	                    break;
	                }
	                x = categoryAxis.getCoordByIndex(i);
	                for (var j = 0, k = locationMap.length; j < k; j++) {
	                    // 堆积数据用第一条valueAxis
	                    valueAxis = this.component.yAxis.getAxis(
	                        series[locationMap[j][0]].yAxisIndex || 0
	                    );
	                    baseYP = lastYP = baseYN = lastYN = valueAxis.getCoord(0);
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        curPLMap[seriesIndex] = curPLMap[seriesIndex] || [];
	                        xMarkMap[seriesIndex] = xMarkMap[seriesIndex] 
	                                                || {
	                                                    min: Number.POSITIVE_INFINITY,
	                                                    max: Number.NEGATIVE_INFINITY,
	                                                    sum: 0,
	                                                    counter: 0,
	                                                    average: 0
	                                                };
	                        if (value === '-') {
	                            // 空数据则把正在记录的curPLMap添加到finalPLMap中
	                            if (curPLMap[seriesIndex].length > 0) {
	                                this.finalPLMap[seriesIndex] =
	                                    this.finalPLMap[seriesIndex] || [];

	                                this.finalPLMap[seriesIndex].push(
	                                    curPLMap[seriesIndex]
	                                );

	                                curPLMap[seriesIndex] = [];
	                            }
	                            continue;
	                        }
	                        //y = valueAxis.getCoord(value);
	                        if (value >= 0) {
	                            // 正向堆积
	                            lastYP -= m > 0
	                                      ? valueAxis.getCoordSize(value)
	                                      : (baseYP - valueAxis.getCoord(value));
	                            y = lastYP;
	                        }
	                        else if (value < 0){
	                            // 负向堆积
	                            lastYN += m > 0 
	                                      ? valueAxis.getCoordSize(value)
	                                      : (valueAxis.getCoord(value) - baseYN);
	                            y = lastYN;
	                        }
	                        curPLMap[seriesIndex].push(
	                            [x, y, i, categoryAxis.getNameByIndex(i), x, baseYP]
	                        );
	                        
	                        if (xMarkMap[seriesIndex].min > value) {
	                            xMarkMap[seriesIndex].min = value;
	                            xMarkMap[seriesIndex].minY = y;
	                            xMarkMap[seriesIndex].minX = x;
	                        }
	                        if (xMarkMap[seriesIndex].max < value) {
	                            xMarkMap[seriesIndex].max = value;
	                            xMarkMap[seriesIndex].maxY = y;
	                            xMarkMap[seriesIndex].maxX = x;
	                        }
	                        xMarkMap[seriesIndex].sum += value;
	                        xMarkMap[seriesIndex].counter++;
	                    }
	                }
	                // 补充空数据的拖拽提示
	                lastYP = this.component.grid.getY();
	                var symbolSize;
	                for (var j = 0, k = locationMap.length; j < k; j++) {
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        if (value != '-') {
	                            // 只关心空数据
	                            continue;
	                        }
	                        if (this.deepQuery([data, serie, this.option], 'calculable')) {
	                            symbolSize = this.deepQuery(
	                                [data, serie],
	                                'symbolSize'
	                            );
	                            lastYP += symbolSize * 2 + 5;
	                            y = lastYP;
	                            this.shapeList.push(this._getCalculableItem(
	                                seriesIndex, i, categoryAxis.getNameByIndex(i),
	                                x, y, 'horizontal'
	                            ));
	                        }
	                    }
	                }
	            }
	            
	            // 把剩余未完成的curPLMap全部添加到finalPLMap中
	            for (var sId in curPLMap) {
	                if (curPLMap[sId].length > 0) {
	                    this.finalPLMap[sId] = this.finalPLMap[sId] || [];
	                    this.finalPLMap[sId].push(curPLMap[sId]);
	                    curPLMap[sId] = [];
	                }
	            }
	            
	            this._calculMarkMapXY(xMarkMap, locationMap, 'y');
	            
	            this._buildBorkenLine(seriesArray, this.finalPLMap, categoryAxis, 'horizontal');
	        },

	        /**
	         * 构建类目轴为垂直方向的折线图系列
	         */
	        _buildVertical: function (seriesArray, maxDataLength, locationMap, xMarkMap) {
	            var series = this.series;
	            // 确定类目轴和数值轴，同一方向随便找一个即可
	            var seriesIndex = locationMap[0][0];
	            var serie = series[seriesIndex];
	            var categoryAxis = this.component.yAxis.getAxis(serie.yAxisIndex || 0);
	            var valueAxis;  // 数值轴各异

	            var x;
	            var y;
	            var lastXP; // 正向堆积处理
	            var baseXP;
	            var lastXN; // 负向堆积处理
	            var baseXN;
	            //var this.finalPLMap = {}; // 完成的point list(PL)
	            var curPLMap = {};   // 正在记录的point list(PL)
	            var data;
	            var value;
	            for (var i = 0, l = maxDataLength; i < l; i++) {
	                if (categoryAxis.getNameByIndex(i) == null) {
	                    // 系列数据超出类目轴长度
	                    break;
	                }
	                y = categoryAxis.getCoordByIndex(i);
	                for (var j = 0, k = locationMap.length; j < k; j++) {
	                    // 堆积数据用第一条valueAxis
	                    valueAxis = this.component.xAxis.getAxis(
	                        series[locationMap[j][0]].xAxisIndex || 0
	                    );
	                    baseXP = lastXP = baseXN = lastXN = valueAxis.getCoord(0);
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        curPLMap[seriesIndex] = curPLMap[seriesIndex] || [];
	                        xMarkMap[seriesIndex] = xMarkMap[seriesIndex] 
	                                                || {
	                                                    min: Number.POSITIVE_INFINITY,
	                                                    max: Number.NEGATIVE_INFINITY,
	                                                    sum: 0,
	                                                    counter: 0,
	                                                    average: 0
	                                                };
	                        if (value === '-') {
	                            // 空数据则把正在记录的curPLMap添加到finalPLMap中
	                            if (curPLMap[seriesIndex].length > 0) {
	                                this.finalPLMap[seriesIndex] =
	                                    this.finalPLMap[seriesIndex] || [];

	                                this.finalPLMap[seriesIndex].push(
	                                    curPLMap[seriesIndex]
	                                );

	                                curPLMap[seriesIndex] = [];
	                            }
	                            continue;
	                        }
	                        //x = valueAxis.getCoord(value);
	                        if (value >= 0) {
	                            // 正向堆积
	                            lastXP += m > 0
	                                      ? valueAxis.getCoordSize(value)
	                                      : (valueAxis.getCoord(value) - baseXP);
	                            x = lastXP;
	                        }
	                        else if (value < 0){
	                            // 负向堆积
	                            lastXN -= m > 0
	                                      ? valueAxis.getCoordSize(value)
	                                      : (baseXN - valueAxis.getCoord(value));
	                            x = lastXN;
	                        }
	                        curPLMap[seriesIndex].push(
	                            [x, y, i, categoryAxis.getNameByIndex(i), baseXP, y]
	                        );
	                        
	                        if (xMarkMap[seriesIndex].min > value) {
	                            xMarkMap[seriesIndex].min = value;
	                            xMarkMap[seriesIndex].minX = x;
	                            xMarkMap[seriesIndex].minY = y;
	                        }
	                        if (xMarkMap[seriesIndex].max < value) {
	                            xMarkMap[seriesIndex].max = value;
	                            xMarkMap[seriesIndex].maxX = x;
	                            xMarkMap[seriesIndex].maxY = y;
	                        }
	                        xMarkMap[seriesIndex].sum += value;
	                        xMarkMap[seriesIndex].counter++;
	                    }
	                }
	                // 补充空数据的拖拽提示
	                lastXP = this.component.grid.getXend();
	                var symbolSize;
	                for (var j = 0, k = locationMap.length; j < k; j++) {
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        if (value != '-') {
	                            // 只关心空数据
	                            continue;
	                        }
	                        if (this.deepQuery([data, serie, this.option], 'calculable')) {
	                            symbolSize = this.deepQuery(
	                                [data, serie],
	                                'symbolSize'
	                            );
	                            lastXP -= symbolSize * 2 + 5;
	                            x = lastXP;
	                            this.shapeList.push(this._getCalculableItem(
	                                seriesIndex, i, categoryAxis.getNameByIndex(i),
	                                x, y, 'vertical'
	                            ));
	                        }
	                    }
	                }
	            }

	            // 把剩余未完成的curPLMap全部添加到finalPLMap中
	            for (var sId in curPLMap) {
	                if (curPLMap[sId].length > 0) {
	                    this.finalPLMap[sId] = this.finalPLMap[sId] || [];
	                    this.finalPLMap[sId].push(curPLMap[sId]);
	                    curPLMap[sId] = [];
	                }
	            }
	            
	            this._calculMarkMapXY(xMarkMap, locationMap, 'x');
	            
	            this._buildBorkenLine(seriesArray, this.finalPLMap, categoryAxis, 'vertical');
	        },

	        /**
	         * 构建双数值轴折线图 
	         */
	        _buildOther: function(seriesArray, maxDataLength, locationMap, xMarkMap) {
	            var series = this.series;
	            var curPLMap = {};   // 正在记录的point list(PL)
	            var xAxis;
	            
	            for (var j = 0, k = locationMap.length; j < k; j++) {
	                for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                    var seriesIndex = locationMap[j][m];
	                    var serie = series[seriesIndex];
	                    xAxis = this.component.xAxis.getAxis(serie.xAxisIndex || 0);
	                    var yAxis = this.component.yAxis.getAxis(serie.yAxisIndex || 0);
	                    var baseY = yAxis.getCoord(0);
	                    
	                    curPLMap[seriesIndex] = curPLMap[seriesIndex] || [];
	                    xMarkMap[seriesIndex] = xMarkMap[seriesIndex] 
	                                            || {
	                                                min0: Number.POSITIVE_INFINITY,
	                                                min1: Number.POSITIVE_INFINITY,
	                                                max0: Number.NEGATIVE_INFINITY,
	                                                max1: Number.NEGATIVE_INFINITY,
	                                                sum0: 0,
	                                                sum1: 0,
	                                                counter0: 0,
	                                                counter1: 0,
	                                                average0: 0,
	                                                average1: 0
	                                            };
	                    
	                    for (var i = 0, l = serie.data.length; i < l; i++) {
	                        var data = serie.data[i];
	                        var value = this.getDataFromOption(data, '-');
	                        if (!(value instanceof Array)) {
	                            continue;
	                        }
	                        
	                        var x = xAxis.getCoord(value[0]);
	                        var y = yAxis.getCoord(value[1]);
	                        curPLMap[seriesIndex].push(
	                            // x, y, dataIndex, name, 填充用
	                            [x, y, i, value[0], x, baseY]
	                        );
	                        
	                        if (xMarkMap[seriesIndex].min0 > value[0]) {
	                            xMarkMap[seriesIndex].min0 = value[0];
	                            xMarkMap[seriesIndex].minY0 = y;
	                            xMarkMap[seriesIndex].minX0 = x;
	                        }
	                        if (xMarkMap[seriesIndex].max0 < value[0]) {
	                            xMarkMap[seriesIndex].max0 = value[0];
	                            xMarkMap[seriesIndex].maxY0 = y;
	                            xMarkMap[seriesIndex].maxX0 = x;
	                        }
	                        xMarkMap[seriesIndex].sum0 += value[0];
	                        xMarkMap[seriesIndex].counter0++;
	                        
	                        if (xMarkMap[seriesIndex].min1 > value[1]) {
	                            xMarkMap[seriesIndex].min1 = value[1];
	                            xMarkMap[seriesIndex].minY1 = y;
	                            xMarkMap[seriesIndex].minX1 = x;
	                        }
	                        if (xMarkMap[seriesIndex].max1 < value[1]) {
	                            xMarkMap[seriesIndex].max1 = value[1];
	                            xMarkMap[seriesIndex].maxY1 = y;
	                            xMarkMap[seriesIndex].maxX1 = x;
	                        }
	                        xMarkMap[seriesIndex].sum1 += value[1];
	                        xMarkMap[seriesIndex].counter1++;
	                    }
	                }
	            }
	            
	            // 把剩余未完成的curPLMap全部添加到finalPLMap中
	            for (var sId in curPLMap) {
	                if (curPLMap[sId].length > 0) {
	                    this.finalPLMap[sId] = this.finalPLMap[sId] || [];
	                    this.finalPLMap[sId].push(curPLMap[sId]);
	                    curPLMap[sId] = [];
	                }
	            }
	            
	            this._calculMarkMapXY(xMarkMap, locationMap, 'xy');
	            
	            this._buildBorkenLine(seriesArray, this.finalPLMap, xAxis, 'other');
	        },
	        
	        /**
	         * 生成折线和折线上的拐点
	         */
	        _buildBorkenLine: function (seriesArray, pointList, categoryAxis, curOrient) {
	            var orient = curOrient == 'other' ? 'horizontal' : curOrient;
	            var series = this.series;
	            var data;
	            
	            // 堆积层叠需求，反顺序构建
	            for (var sIdx = seriesArray.length - 1; sIdx >= 0; sIdx--) {
	                var seriesIndex = seriesArray[sIdx];
	                var serie = series[seriesIndex];
	                var seriesPL = pointList[seriesIndex];
	                if (serie.type === this.type && seriesPL != null) {
	                    var bbox = this._getBbox(seriesIndex, orient);
	                    var defaultColor = this._sIndex2ColorMap[seriesIndex];
	                    // 折线相关，多级控制
	                    var lineWidth = this.query(
	                        serie, 'itemStyle.normal.lineStyle.width'
	                    );
	                    var lineType = this.query(
	                        serie, 'itemStyle.normal.lineStyle.type'
	                    );
	                    var lineColor = this.query(
	                        serie, 'itemStyle.normal.lineStyle.color'
	                    );
	                    var normalColor = this.getItemStyleColor(
	                        this.query(serie, 'itemStyle.normal.color'), seriesIndex, -1
	                    );

	                    // 填充相关
	                    var isFill = this.query(serie, 'itemStyle.normal.areaStyle') != null;
	                    var fillNormalColor = this.query(
	                        serie, 'itemStyle.normal.areaStyle.color'
	                    );

	                    for (var i = 0, l = seriesPL.length; i < l; i++) {
	                        var singlePL = seriesPL[i];
	                        var isLarge = curOrient != 'other' && this._isLarge(orient, singlePL);
	                        if (!isLarge) { // 非大数据模式才显示拐点symbol
	                            for (var j = 0, k = singlePL.length; j < k; j++) {
	                                data = serie.data[singlePL[j][2]];
	                                if (this.deepQuery([data, serie, this.option], 'calculable') // 可计算
	                                    || this.deepQuery([data, serie], 'showAllSymbol')        // 全显示
	                                    || (categoryAxis.type === 'categoryAxis'                 // 主轴非空
	                                        && categoryAxis.isMainAxis(singlePL[j][2])
	                                        && this.deepQuery([data, serie], 'symbol') != 'none'
	                                       )
	                                ) {
	                                    this.shapeList.push(this._getSymbol(
	                                        seriesIndex,
	                                        singlePL[j][2], // dataIndex
	                                        singlePL[j][3], // name
	                                        singlePL[j][0], // x
	                                        singlePL[j][1], // y
	                                        orient
	                                    ));
	                                }
	                            }
	                        }
	                        else {
	                            // 大数据模式截取pointList
	                            singlePL = this._getLargePointList(
	                                orient, singlePL, serie.dataFilter
	                            );
	                        }

	                        // 折线图
	                        var polylineShape = new PolylineShape({
	                            zlevel: serie.zlevel,
	                            z: serie.z,
	                            style: {
	                                miterLimit: lineWidth,
	                                pointList: singlePL,
	                                strokeColor: lineColor
	                                             || normalColor 
	                                             || defaultColor,
	                                lineWidth: lineWidth,
	                                lineType: lineType,
	                                smooth: this._getSmooth(serie.smooth),
	                                smoothConstraint: bbox,
	                                shadowColor: this.query(
	                                  serie,
	                                  'itemStyle.normal.lineStyle.shadowColor'
	                                ),
	                                shadowBlur: this.query(
	                                  serie,
	                                  'itemStyle.normal.lineStyle.shadowBlur'
	                                ),
	                                shadowOffsetX: this.query(
	                                  serie,
	                                  'itemStyle.normal.lineStyle.shadowOffsetX'
	                                ),
	                                shadowOffsetY: this.query(
	                                  serie,
	                                  'itemStyle.normal.lineStyle.shadowOffsetY'
	                                )
	                            },
	                            hoverable: false,
	                            _main: true,
	                            _seriesIndex: seriesIndex,
	                            _orient: orient
	                        });
	                        
	                        ecData.pack(
	                            polylineShape,
	                            series[seriesIndex], seriesIndex,
	                            0, i, series[seriesIndex].name
	                        );
	                        
	                        this.shapeList.push(polylineShape);
	                        
	                        if (isFill) {
	                            var halfSmoothPolygonShape = new HalfSmoothPolygonShape({
	                                zlevel: serie.zlevel,
	                                z: serie.z,
	                                style: {
	                                    miterLimit: lineWidth,
	                                    pointList: zrUtil.clone(singlePL).concat([
	                                        [
	                                            singlePL[singlePL.length - 1][4],
	                                            singlePL[singlePL.length - 1][5]
	                                        ],
	                                        [
	                                            singlePL[0][4],
	                                            singlePL[0][5]
	                                        ]
	                                    ]),
	                                    brushType: 'fill',
	                                    smooth: this._getSmooth(serie.smooth),
	                                    smoothConstraint: bbox,
	                                    color: fillNormalColor
	                                           ? fillNormalColor
	                                           : zrColor.alpha(defaultColor,0.5)
	                                },
	                                highlightStyle: {
	                                    brushType: 'fill'
	                                },
	                                hoverable: false,
	                                _main: true,
	                                _seriesIndex: seriesIndex,
	                                _orient: orient
	                            });
	                            ecData.pack(
	                                halfSmoothPolygonShape,
	                                series[seriesIndex], seriesIndex,
	                                0, i, series[seriesIndex].name
	                            );
	                            this.shapeList.push(halfSmoothPolygonShape);
	                        }
	                    }
	                }
	            }
	        },
	        
	        _getBbox: function(seriesIndex, orient) {
	            var bbox = this.component.grid.getBbox();
	            var xMarkMap = this.xMarkMap[seriesIndex];
	            if (xMarkMap.minX0 != null) {
	                return [
	                    [
	                        Math.min(xMarkMap.minX0, xMarkMap.maxX0, xMarkMap.minX1, xMarkMap.maxX1),
	                        Math.min(xMarkMap.minY0, xMarkMap.maxY0, xMarkMap.minY1, xMarkMap.maxY1)
	                    ],
	                    [
	                        Math.max(xMarkMap.minX0, xMarkMap.maxX0, xMarkMap.minX1, xMarkMap.maxX1),
	                        Math.max(xMarkMap.minY0, xMarkMap.maxY0, xMarkMap.minY1, xMarkMap.maxY1)
	                    ]
	                ];
	            }
	            else if (orient === 'horizontal') {
	                bbox[0][1] = Math.min(xMarkMap.minY, xMarkMap.maxY);
	                bbox[1][1] = Math.max(xMarkMap.minY, xMarkMap.maxY);
	            }
	            else {
	                bbox[0][0] = Math.min(xMarkMap.minX, xMarkMap.maxX);
	                bbox[1][0] = Math.max(xMarkMap.minX, xMarkMap.maxX);
	            }
	            return bbox;
	        },
	        
	        _isLarge: function(orient, singlePL) {
	            if (singlePL.length < 2) {
	                return false;
	            }
	            else {
	                return orient === 'horizontal'
	                       ? (Math.abs(singlePL[0][0] - singlePL[1][0]) < 0.5)
	                       : (Math.abs(singlePL[0][1] - singlePL[1][1]) < 0.5);
	            }
	        },
	        
	        /**
	         * 大规模pointList优化 
	         */
	        _getLargePointList: function(orient, singlePL, filter) {
	            var total;
	            if (orient === 'horizontal') {
	                total = this.component.grid.getWidth();
	            }
	            else {
	                total = this.component.grid.getHeight();
	            }
	            
	            var len = singlePL.length;
	            var newList = [];

	            if (typeof(filter) != 'function') {
	                switch (filter) {
	                    case 'min':
	                        filter = function (arr) {
	                            return Math.max.apply(null, arr);
	                        };
	                        break;
	                    case 'max':
	                        filter = function (arr) {
	                            return Math.min.apply(null, arr);
	                        };
	                        break;
	                    case 'average':
	                        filter = function (arr) {
	                            var total = 0;
	                            for (var i = 0; i < arr.length; i++) {
	                                total += arr[i];
	                            }
	                            return total / arr.length;
	                        };
	                        break;
	                    default:
	                        filter = function (arr) {
	                            return arr[0];
	                        }
	                }
	            }

	            var windowData = [];
	            for (var i = 0; i < total; i++) {
	                var idx0 = Math.floor(len / total * i);
	                var idx1 = Math.min(Math.floor(len / total * (i + 1)), len);
	                if (idx1 <= idx0) {
	                    continue;
	                }

	                for (var j = idx0; j < idx1; j++) {
	                    windowData[j - idx0] = orient === 'horizontal'
	                        ? singlePL[j][1] : singlePL[j][0];
	                }

	                windowData.length = idx1 - idx0;
	                var filteredVal = filter(windowData);
	                var nearestIdx = -1;
	                var minDist = Infinity;
	                // 寻找值最相似的点，使用其其它属性
	                for (var j = idx0; j < idx1; j++) {
	                    var val = orient === 'horizontal'
	                        ? singlePL[j][1] : singlePL[j][0];
	                    var dist = Math.abs(val - filteredVal);
	                    if (dist < minDist) {
	                        nearestIdx = j;
	                        minDist = dist;
	                    }
	                }

	                var newItem = singlePL[nearestIdx].slice();
	                if (orient === 'horizontal') {
	                    newItem[1] = filteredVal;
	                }
	                else {
	                    newItem[0] = filteredVal;
	                }
	                newList.push(newItem);
	            }
	            return newList;
	        },

	        _getSmooth: function (isSmooth/*, pointList, orient*/) {
	            if (isSmooth) {
	                /* 不科学啊，发现0.3通用了
	                var delta;
	                if (orient === 'horizontal') {
	                    delta = Math.abs(pointList[0][0] - pointList[1][0]);
	                }
	                else {
	                    delta = Math.abs(pointList[0][1] - pointList[1][1]);
	                }
	                */
	                return 0.3;
	            }
	            else {
	                return 0;
	            }
	        },

	        /**
	         * 生成空数据所需的可计算提示图形
	         */
	        _getCalculableItem: function (seriesIndex, dataIndex, name, x, y, orient) {
	            var series = this.series;
	            var color = series[seriesIndex].calculableHolderColor
	                        || this.ecTheme.calculableHolderColor
	                        || ecConfig.calculableHolderColor;

	            var itemShape = this._getSymbol(
	                seriesIndex, dataIndex, name,
	                x, y, orient
	            );
	            itemShape.style.color = color;
	            itemShape.style.strokeColor = color;
	            itemShape.rotation = [0,0];
	            itemShape.hoverable = false;
	            itemShape.draggable = false;
	            itemShape.style.text = undefined;

	            return itemShape;
	        },

	        /**
	         * 生成折线图上的拐点图形
	         */
	        _getSymbol: function (seriesIndex, dataIndex, name, x, y, orient) {
	            var series = this.series;
	            var serie = series[seriesIndex];
	            var data = serie.data[dataIndex];
	            
	            var itemShape = this.getSymbolShape(
	                serie, seriesIndex, data, dataIndex, name, 
	                x, y,
	                this._sIndex2ShapeMap[seriesIndex], 
	                this._sIndex2ColorMap[seriesIndex],
	                '#fff',
	                orient === 'vertical' ? 'horizontal' : 'vertical' // 翻转
	            );
	            itemShape.zlevel = serie.zlevel;
	            itemShape.z = serie.z + 1;
	            
	            if (this.deepQuery([data, serie, this.option], 'calculable')) {
	                this.setCalculable(itemShape);
	                itemShape.draggable = true;
	            }
	            
	            return itemShape;
	        },

	        // 位置转换
	        getMarkCoord: function (seriesIndex, mpData) {
	            var serie = this.series[seriesIndex];
	            var xMarkMap = this.xMarkMap[seriesIndex];
	            var xAxis = this.component.xAxis.getAxis(serie.xAxisIndex);
	            var yAxis = this.component.yAxis.getAxis(serie.yAxisIndex);
	            
	            if (mpData.type
	                && (mpData.type === 'max' || mpData.type === 'min' || mpData.type === 'average')
	            ) {
	                // 特殊值内置支持
	                var valueIndex = mpData.valueIndex != null 
	                                 ? mpData.valueIndex 
	                                 : xMarkMap.maxX0 != null 
	                                   ? '1' : '';
	                return [
	                    xMarkMap[mpData.type + 'X' + valueIndex],
	                    xMarkMap[mpData.type + 'Y' + valueIndex],
	                    xMarkMap[mpData.type + 'Line' + valueIndex],
	                    xMarkMap[mpData.type + valueIndex]
	                ];
	            }
	            
	            return [
	                typeof mpData.xAxis != 'string' && xAxis.getCoordByIndex
	                    ? xAxis.getCoordByIndex(mpData.xAxis || 0)
	                    : xAxis.getCoord(mpData.xAxis || 0),
	                
	                typeof mpData.yAxis != 'string' && yAxis.getCoordByIndex
	                    ? yAxis.getCoordByIndex(mpData.yAxis || 0)
	                    : yAxis.getCoord(mpData.yAxis || 0)
	            ];
	        },
	        
	        /**
	         * 刷新
	         */
	        refresh: function (newOption) {
	            if (newOption) {
	                this.option = newOption;
	                this.series = newOption.series;
	            }
	            
	            this.backupShapeList();
	            this._buildShape();
	        },
	        
	        ontooltipHover: function (param, tipShape) {
	            var seriesIndex = param.seriesIndex;
	            var dataIndex = param.dataIndex;
	            var seriesPL;
	            var singlePL;
	            var len = seriesIndex.length;
	            while (len--) {
	                seriesPL = this.finalPLMap[seriesIndex[len]];
	                if (seriesPL) {
	                    for (var i = 0, l = seriesPL.length; i < l; i++) {
	                        singlePL = seriesPL[i];
	                        for (var j = 0, k = singlePL.length; j < k; j++) {
	                            if (dataIndex === singlePL[j][2]) {
	                                tipShape.push(this._getSymbol(
	                                    seriesIndex[len],   // seriesIndex
	                                    singlePL[j][2],     // dataIndex
	                                    singlePL[j][3],     // name
	                                    singlePL[j][0],     // x
	                                    singlePL[j][1],     // y
	                                    'horizontal'
	                                ));
	                            }
	                        }
	                    }
	                }
	            }
	        },

	        /**
	         * 动态数据增加动画 
	         */
	        addDataAnimation: function (params, done) {
	            var series = this.series;
	            var aniMap = {}; // seriesIndex索引参数
	            for (var i = 0, l = params.length; i < l; i++) {
	                aniMap[params[i][0]] = params[i];
	            }
	            var x;
	            var dx;
	            var y;
	            var dy;
	            var seriesIndex;
	            var pointList;
	            var isHorizontal; // 是否横向布局， isHorizontal;

	            var aniCount = 0;
	            function animationDone() {
	                aniCount--;
	                if (aniCount === 0) {
	                    done && done();
	                }
	            }
	            function animationDuring(target) {
	                // 强制更新曲线控制点
	                target.style.controlPointList = null;
	            }

	            for (var i = this.shapeList.length - 1; i >= 0; i--) {
	                seriesIndex = this.shapeList[i]._seriesIndex;
	                if (aniMap[seriesIndex] && !aniMap[seriesIndex][3]) {
	                    // 有数据删除才有移动的动画
	                    if (this.shapeList[i]._main && this.shapeList[i].style.pointList.length > 1) {
	                        pointList = this.shapeList[i].style.pointList;
	                        // 主线动画
	                        dx = Math.abs(pointList[0][0] - pointList[1][0]);
	                        dy = Math.abs(pointList[0][1] - pointList[1][1]);
	                        isHorizontal = this.shapeList[i]._orient === 'horizontal';
	                            
	                        if (aniMap[seriesIndex][2]) {
	                            // 队头加入删除末尾
	                            if (this.shapeList[i].type === 'half-smooth-polygon') {
	                                //区域图
	                                var len = pointList.length;
	                                this.shapeList[i].style.pointList[len - 3] = pointList[len - 2];
	                                this.shapeList[i].style.pointList[len - 3][isHorizontal ? 0 : 1]
	                                    = pointList[len - 4][isHorizontal ? 0 : 1];
	                                this.shapeList[i].style.pointList[len - 2] = pointList[len - 1];
	                            }
	                            this.shapeList[i].style.pointList.pop();
	                            isHorizontal ? (x = dx, y = 0) : (x = 0, y = -dy);
	                        }
	                        else {
	                            // 队尾加入删除头部
	                            this.shapeList[i].style.pointList.shift();
	                            if (this.shapeList[i].type === 'half-smooth-polygon') {
	                                //区域图
	                                var targetPoint =this.shapeList[i].style.pointList.pop();
	                                isHorizontal
	                                ? (targetPoint[0] = pointList[0][0])
	                                : (targetPoint[1] = pointList[0][1]);
	                                this.shapeList[i].style.pointList.push(targetPoint);
	                            }
	                            isHorizontal ? (x = -dx, y = 0) : (x = 0, y = dy);
	                        }
	                        this.shapeList[i].style.controlPointList = null;
	                        
	                        this.zr.modShape(this.shapeList[i]);
	                    }
	                    else {
	                        // 拐点动画
	                        if (aniMap[seriesIndex][2] 
	                            && this.shapeList[i]._dataIndex 
	                                === series[seriesIndex].data.length - 1
	                        ) {
	                            // 队头加入删除末尾
	                            this.zr.delShape(this.shapeList[i].id);
	                            continue;
	                        }
	                        else if (!aniMap[seriesIndex][2] 
	                                 && this.shapeList[i]._dataIndex === 0
	                        ) {
	                            // 队尾加入删除头部
	                            this.zr.delShape(this.shapeList[i].id);
	                            continue;
	                        }
	                    }
	                    this.shapeList[i].position = [0, 0];

	                    aniCount++;
	                    this.zr.animate(this.shapeList[i].id, '')
	                        .when(
	                            this.query(this.option, 'animationDurationUpdate'),
	                            { position: [ x, y ] }
	                        )
	                        .during(animationDuring)
	                        .done(animationDone)
	                        .start();
	                }
	            }

	            // 没有动画
	            if (!aniCount) {
	                done && done();
	            }
	        }
	    };

	    function legendLineIcon(ctx, style, refreshNextFrame) {
	        var x = style.x;
	        var y = style.y;
	        var width = style.width;
	        var height = style.height;
	        
	        var dy = height / 2;
	        
	        if (style.symbol.match('empty')) {
	            ctx.fillStyle = '#fff';
	        }
	        style.brushType = 'both';
	        
	        var symbol = style.symbol.replace('empty', '').toLowerCase();
	        if (symbol.match('star')) {
	            dy = (symbol.replace('star','') - 0) || 5;
	            y -= 1;
	            symbol = 'star';
	        } 
	        else if (symbol === 'rectangle' || symbol === 'arrow') {
	            x += (width - height) / 2;
	            width = height;
	        }
	        
	        var imageLocation = '';
	        if (symbol.match('image')) {
	            imageLocation = symbol.replace(
	                    new RegExp('^image:\\/\\/'), ''
	                );
	            symbol = 'image';
	            x += Math.round((width - height) / 2) - 1;
	            width = height = height + 2;
	        }
	        symbol = IconShape.prototype.iconLibrary[symbol];
	        
	        if (symbol) {
	            var x2 = style.x;
	            var y2 = style.y;
	            ctx.moveTo(x2, y2 + dy);
	            ctx.lineTo(x2 + 5, y2 + dy);
	            ctx.moveTo(x2 + style.width - 5, y2 + dy);
	            ctx.lineTo(x2 + style.width, y2 + dy);
	            var self = this;
	            symbol(
	                ctx,
	                {
	                    x: x + 4,
	                    y: y + 4,
	                    width: width - 8,
	                    height: height - 8,
	                    n: dy,
	                    image: imageLocation
	                },
	                function () {
	                    self.modSelf();
	                    refreshNextFrame();
	                }
	            );
	        }
	        else {
	            ctx.moveTo(x, y + dy);
	            ctx.lineTo(x + width, y + dy);
	        }
	    }
	    IconShape.prototype.iconLibrary['legendLineIcon'] = legendLineIcon;
	    
	    zrUtil.inherits(Line, ChartBase);
	    
	    // 图表注册
	    __webpack_require__(365).define('line', Line);
	    
	    return Line;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件：数据区域缩放
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(419);

	    // 图形依赖
	    var RectangleShape = __webpack_require__(387);
	    var PolygonShape = __webpack_require__(408);
	    var IconShape = __webpack_require__(397);

	    var ecConfig = __webpack_require__(366);
	    // 区域缩放控制器
	    ecConfig.dataZoom = {
	        zlevel: 0,                  // 一级层叠
	        z: 4,                       // 二级层叠
	        show: false,
	        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
	                                   // 'horizontal' ¦ 'vertical'
	        // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
	                                   // {number}（x坐标，单位px）
	        // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
	                                   // {number}（y坐标，单位px）
	        // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
	        // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
	        backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
	        dataBackgroundColor: '#eee',            // 数据背景颜色
	        fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
	        handleColor: 'rgba(70,130,180,0.8)',    // 手柄颜色
	        handleSize: 8,
	        showDetail: true,
	        // xAxisIndex: [],         // 默认控制所有横向类目
	        // yAxisIndex: [],         // 默认控制所有横向类目
	        // start: 0,               // 默认为0
	        // end: 100,               // 默认为全部 100%
	        realtime: true
	        // zoomLock: false         // 是否锁定选择区域大小
	    };

	    var ecDate = __webpack_require__(536);
	    var zrUtil = __webpack_require__(367);

	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 图表参数
	     * @param {Object} component 组件
	     */
	    function DataZoom(ecTheme, messageCenter, zr, option, myChart) {
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);

	        var self = this;
	        self._ondrift = function (dx, dy) {
	            return self.__ondrift(this, dx, dy);
	        };
	        self._ondragend = function () {
	            return self.__ondragend();
	        };

	        this._fillerSize = 30;       // 控件大小，水平布局为高，纵向布局为宽
	        // this._fillerShae;            // 填充
	        // this._startShape;            // 起始手柄
	        // this._endShape;              // 结束手柄
	        // this._startFrameShape;       // 起始特效边框
	        // this._endFrameShape;         // 结束特效边框
	        // this._syncTicket;
	        this._isSilence = false;
	        this._zoom = {};
	        // this._originalData;

	        this.option.dataZoom = this.reformOption(this.option.dataZoom);
	        this.zoomOption = this.option.dataZoom;
	        this._handleSize = this.zoomOption.handleSize;
	        if (!this.myChart.canvasSupported) {
	            // 不支持Canvas的强制关闭实时动画
	            this.zoomOption.realtime = false;
	        }

	        // 位置参数，通过计算所得x, y, width, height
	        this._location = this._getLocation();
	        // 缩放参数
	        this._zoom =  this._getZoom();
	        this._backupData();

	        if (this.option.dataZoom.show) {
	            this._buildShape();
	        }
	        this._syncData();
	    }

	    DataZoom.prototype = {
	        type : ecConfig.COMPONENT_TYPE_DATAZOOM,
	        _buildShape : function () {
	            this._buildBackground();
	            this._buildFiller();
	            this._buildHandle();
	            this._buildFrame();

	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                this.zr.addShape(this.shapeList[i]);
	            }
	            this._syncFrameShape();
	        },

	        /**
	         * 根据选项计算实体的位置坐标
	         */
	        _getLocation : function () {
	            var x;
	            var y;
	            var width;
	            var height;
	            var grid = this.component.grid;

	            // 不指定则根据grid适配
	            if (this.zoomOption.orient == 'horizontal') {
	                // 水平布局
	                width = this.zoomOption.width || grid.getWidth();
	                height = this.zoomOption.height || this._fillerSize;
	                x = this.zoomOption.x != null ? this.zoomOption.x : grid.getX();
	                y = this.zoomOption.y != null ? this.zoomOption.y : (this.zr.getHeight() - height - 2);
	            }
	            else {
	                // 垂直布局
	                width = this.zoomOption.width || this._fillerSize;
	                height = this.zoomOption.height || grid.getHeight();
	                x = this.zoomOption.x != null ? this.zoomOption.x : 2;
	                y = this.zoomOption.y != null ? this.zoomOption.y : grid.getY();
	            }

	            return {
	                x : x,
	                y : y,
	                width : width,
	                height : height
	            };
	        },

	        /**
	         * 计算缩放参数
	         * 修正单坐标轴只传对象为数组。
	         */
	        _getZoom : function () {
	            var series = this.option.series;
	            var xAxis = this.option.xAxis;
	            if (xAxis && !(xAxis instanceof Array)) {
	                xAxis = [xAxis];
	                this.option.xAxis = xAxis;
	            }
	            var yAxis = this.option.yAxis;
	            if (yAxis && !(yAxis instanceof Array)) {
	                yAxis = [yAxis];
	                this.option.yAxis = yAxis;
	            }

	            var zoomSeriesIndex = [];
	            var xAxisIndex;
	            var yAxisIndex;

	            var zOptIdx = this.zoomOption.xAxisIndex;
	            if (xAxis && zOptIdx == null) {
	                xAxisIndex = [];
	                for (var i = 0, l = xAxis.length; i < l; i++) {
	                    // 横纵默认为类目轴
	                    if (xAxis[i].type == 'category' || xAxis[i].type == null) {
	                        xAxisIndex.push(i);
	                    }
	                }
	            }
	            else {
	                if (zOptIdx instanceof Array) {
	                    xAxisIndex = zOptIdx;
	                }
	                else if (zOptIdx != null) {
	                    xAxisIndex = [zOptIdx];
	                }
	                else {
	                    xAxisIndex = [];
	                }
	            }

	            zOptIdx = this.zoomOption.yAxisIndex;
	            if (yAxis && zOptIdx == null) {
	                yAxisIndex = [];
	                for (var i = 0, l = yAxis.length; i < l; i++) {
	                    if (yAxis[i].type == 'category') {
	                        yAxisIndex.push(i);
	                    }
	                }
	            }
	            else {
	                if (zOptIdx instanceof Array) {
	                    yAxisIndex = zOptIdx;
	                }
	                else if (zOptIdx != null) {
	                    yAxisIndex = [zOptIdx];
	                }
	                else {
	                    yAxisIndex = [];
	                }
	            }

	            // 找到缩放控制的所有series
	            var serie;
	            for (var i = 0, l = series.length; i < l; i++) {
	                serie = series[i];
	                if (serie.type != ecConfig.CHART_TYPE_LINE
	                    && serie.type != ecConfig.CHART_TYPE_BAR
	                    && serie.type != ecConfig.CHART_TYPE_SCATTER
	                    && serie.type != ecConfig.CHART_TYPE_K
	                ) {
	                    continue;
	                }
	                for (var j = 0, k = xAxisIndex.length; j < k; j++) {
	                    if (xAxisIndex[j] == (serie.xAxisIndex || 0)) {
	                        zoomSeriesIndex.push(i);
	                        break;
	                    }
	                }
	                for (var j = 0, k = yAxisIndex.length; j < k; j++) {
	                    if (yAxisIndex[j] == (serie.yAxisIndex || 0)) {
	                        zoomSeriesIndex.push(i);
	                        break;
	                    }
	                }
	                // 不指定接管坐标轴，则散点图、双数值轴折线图柱形图都被纳入接管范围
	                if (this.zoomOption.xAxisIndex == null
	                    && this.zoomOption.yAxisIndex == null
	                    && serie.data
	                    && this.getDataFromOption(serie.data[0]) instanceof Array
	                    && (serie.type == ecConfig.CHART_TYPE_SCATTER
	                        || serie.type == ecConfig.CHART_TYPE_LINE
	                        || serie.type == ecConfig.CHART_TYPE_BAR)
	                ) {
	                    zoomSeriesIndex.push(i);
	                }
	            }

	            var start = this._zoom.start != null
	                        ? this._zoom.start
	                        : (this.zoomOption.start != null ? this.zoomOption.start : 0);
	            var end = this._zoom.end != null
	                      ? this._zoom.end
	                      : (this.zoomOption.end != null ? this.zoomOption.end : 100);

	            if (start > end) {
	                // 大小颠倒自动翻转
	                start = start + end;
	                end = start - end;
	                start = start - end;
	            }
	            var size = Math.round(
	                (end - start) / 100
	                * (
	                    this.zoomOption.orient == 'horizontal'
	                    ? this._location.width : this._location.height
	                )
	            );
	            return {
	                start : start,
	                end : end,
	                start2 : 0,
	                end2 : 100,
	                size : size,
	                xAxisIndex : xAxisIndex,
	                yAxisIndex : yAxisIndex,
	                seriesIndex : zoomSeriesIndex,
	                scatterMap : this._zoom.scatterMap || {}
	            };
	        },

	        _backupData : function () {
	            this._originalData = {
	                xAxis : {},
	                yAxis : {},
	                series : {}
	            };
	            var xAxis = this.option.xAxis;
	            var xAxisIndex = this._zoom.xAxisIndex;
	            for (var i = 0, l = xAxisIndex.length; i < l; i++) {
	                this._originalData.xAxis[xAxisIndex[i]] = xAxis[xAxisIndex[i]].data;
	            }

	            var yAxis = this.option.yAxis;
	            var yAxisIndex = this._zoom.yAxisIndex;
	            for (var i = 0, l = yAxisIndex.length; i < l; i++) {
	                this._originalData.yAxis[yAxisIndex[i]] = yAxis[yAxisIndex[i]].data;
	            }

	            var series = this.option.series;
	            var seriesIndex = this._zoom.seriesIndex;
	            var serie;
	            for (var i = 0, l = seriesIndex.length; i < l; i++) {
	                serie = series[seriesIndex[i]];
	                this._originalData.series[seriesIndex[i]] = serie.data;
	                if (serie.data
	                    && this.getDataFromOption(serie.data[0]) instanceof Array
	                    && (serie.type == ecConfig.CHART_TYPE_SCATTER
	                        || serie.type == ecConfig.CHART_TYPE_LINE
	                        || serie.type == ecConfig.CHART_TYPE_BAR)
	                ) {
	                    this._backupScale();
	                    this._calculScatterMap(seriesIndex[i]);
	                }
	            }
	        },

	        // 不止是scatter，双数值轴也使用此方法
	        _calculScatterMap : function (seriesIndex) {
	            this._zoom.scatterMap = this._zoom.scatterMap || {};
	            this._zoom.scatterMap[seriesIndex] = this._zoom.scatterMap[seriesIndex] || {};
	            var componentLibrary = __webpack_require__(427);
	            // x轴极值
	            var Axis = componentLibrary.get('axis');
	            var axisOption = zrUtil.clone(this.option.xAxis);
	            if (axisOption[0].type == 'category') {
	                axisOption[0].type = 'value';
	            }
	            // axisOption[0].scale = true;
	            // axisOption[0].boundary = [0, 0];
	            if (axisOption[1] && axisOption[1].type == 'category') {
	                axisOption[1].type = 'value';
	            }

	            var vAxis = new Axis(
	                this.ecTheme,
	                null,   // messageCenter
	                false,  // this.zr
	                {
	                    xAxis: axisOption,
	                    series : this.option.series
	                },
	                this,
	                'xAxis'
	            );
	            var axisIndex = this.option.series[seriesIndex].xAxisIndex || 0;
	            this._zoom.scatterMap[seriesIndex].x = vAxis.getAxis(axisIndex).getExtremum();
	            vAxis.dispose();

	            // y轴极值
	            axisOption = zrUtil.clone(this.option.yAxis);
	            if (axisOption[0].type == 'category') {
	                axisOption[0].type = 'value';
	            }
	            // axisOption[0].scale = true;
	            // axisOption[1].boundary = [0, 0];
	            if (axisOption[1] && axisOption[1].type == 'category') {
	                axisOption[1].type = 'value';
	            }
	            vAxis = new Axis(
	                this.ecTheme,
	                null,   // messageCenter
	                false,  // this.zr
	                {
	                    yAxis: axisOption,
	                    series : this.option.series
	                },
	                this,
	                'yAxis'
	            );
	            axisIndex = this.option.series[seriesIndex].yAxisIndex || 0;
	            this._zoom.scatterMap[seriesIndex].y = vAxis.getAxis(axisIndex).getExtremum();
	            vAxis.dispose();
	            // console.log(this._zoom.scatterMap);
	        },

	        _buildBackground : function () {
	            var width = this._location.width;
	            var height = this._location.height;

	            // 背景
	            this.shapeList.push(new RectangleShape({
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                hoverable :false,
	                style : {
	                    x : this._location.x,
	                    y : this._location.y,
	                    width : width,
	                    height : height,
	                    color : this.zoomOption.backgroundColor
	                }
	            }));

	            // 数据阴影
	            var maxLength = 0;
	            var xAxis = this._originalData.xAxis;
	            var xAxisIndex = this._zoom.xAxisIndex;
	            for (var i = 0, l = xAxisIndex.length; i < l; i++) {
	                maxLength = Math.max(
	                    maxLength, xAxis[xAxisIndex[i]].length
	                );
	            }
	            var yAxis = this._originalData.yAxis;
	            var yAxisIndex = this._zoom.yAxisIndex;
	            for (var i = 0, l = yAxisIndex.length; i < l; i++) {
	                maxLength = Math.max(
	                    maxLength, yAxis[yAxisIndex[i]].length
	                );
	            }

	            var seriesIndex = this._zoom.seriesIndex[0];
	            var data = this._originalData.series[seriesIndex];
	            var maxValue = Number.MIN_VALUE;
	            var minValue = Number.MAX_VALUE;
	            var value;
	            for (var i = 0, l = data.length; i < l; i++) {
	                value = this.getDataFromOption(data[i], 0);
	                if (this.option.series[seriesIndex].type == ecConfig.CHART_TYPE_K) {
	                    value = value[1];   // 收盘价
	                }
	                if (isNaN(value)) {
	                    value = 0;
	                }
	                maxValue = Math.max(maxValue, value);
	                minValue = Math.min(minValue, value);
	            }
	            var valueRange = maxValue - minValue;

	            var pointList = [];
	            var x = width / (maxLength - (maxLength > 1 ? 1 : 0));
	            var y = height / (maxLength - (maxLength > 1 ? 1 : 0));
	            var step = 1;
	            if (this.zoomOption.orient == 'horizontal' && x < 1) {
	                step = Math.floor(maxLength * 3 / width);
	            }
	            else if (this.zoomOption.orient == 'vertical' && y < 1){
	                step = Math.floor(maxLength * 3 / height);
	            }

	            for (var i = 0, l = maxLength; i < l; i += step) {
	                value = this.getDataFromOption(data[i], 0);
	                if (this.option.series[seriesIndex].type == ecConfig.CHART_TYPE_K) {
	                    value = value[1];   // 收盘价
	                }
	                if (isNaN(value)) {
	                    value = 0;
	                }
	                if (this.zoomOption.orient == 'horizontal') {
	                    pointList.push([
	                        this._location.x + x * i,
	                        this._location.y + height - 1 - Math.round(
	                            (value - minValue) / valueRange * (height - 10)
	                        )
	                    ]);
	                }
	                else {
	                    pointList.push([
	                        this._location.x + 1 + Math.round(
	                            (value - minValue) / valueRange * (width - 10)
	                        ),
	                        this._location.y + y * (l - i - 1)
	                    ]);
	                }
	            }
	            if (this.zoomOption.orient == 'horizontal') {
	                pointList.push([
	                    this._location.x + width,
	                    this._location.y + height
	                ]);
	                pointList.push([
	                    this._location.x, this._location.y + height
	                ]);
	            }
	            else {
	                pointList.push([
	                    this._location.x, this._location.y
	                ]);
	                pointList.push([
	                    this._location.x, this._location.y + height
	                ]);
	            }

	            this.shapeList.push(new PolygonShape({
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                style : {
	                    pointList : pointList,
	                    color : this.zoomOption.dataBackgroundColor
	                },
	                hoverable : false
	            }));
	        },

	        /**
	         * 构建填充物
	         */
	        _buildFiller : function () {
	            this._fillerShae = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                draggable : true,
	                ondrift : this._ondrift,
	                ondragend : this._ondragend,
	                _type : 'filler'
	            };

	            if (this.zoomOption.orient == 'horizontal') {
	                // 横向
	                this._fillerShae.style = {
	                    x : this._location.x
	                        + Math.round(this._zoom.start / 100 * this._location.width)
	                        + this._handleSize,
	                    y : this._location.y,
	                    width : this._zoom.size - this._handleSize * 2,
	                    height : this._location.height,
	                    color : this.zoomOption.fillerColor,
	                    // strokeColor : '#fff', // this.zoomOption.handleColor,
	                    // lineWidth: 2,
	                    text : ':::',
	                    textPosition : 'inside'
	                };
	            }
	            else {
	                // 纵向
	                this._fillerShae.style ={
	                    x : this._location.x,
	                    y : this._location.y
	                        + Math.round(this._zoom.start / 100 * this._location.height)
	                        + this._handleSize,
	                    width :  this._location.width,
	                    height : this._zoom.size - this._handleSize * 2,
	                    color : this.zoomOption.fillerColor,
	                    // strokeColor : '#fff', // this.zoomOption.handleColor,
	                    // lineWidth: 2,
	                    text : '::',
	                    textPosition : 'inside'
	                };
	            }

	            this._fillerShae.highlightStyle = {
	                brushType: 'fill',
	                color : 'rgba(0,0,0,0)'
	                /*
	                color : require('zrender/tool/color').alpha(
	                            this._fillerShae.style.color, 0
	                        )
	                */
	            };
	            this._fillerShae = new RectangleShape(this._fillerShae);
	            this.shapeList.push(this._fillerShae);
	        },

	        /**
	         * 构建拖拽手柄
	         */
	        _buildHandle : function () {
	            var detail = this.zoomOption.showDetail ? this._getDetail() : {start: '',end: ''};
	            this._startShape = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                draggable : true,
	                style : {
	                    iconType: 'rectangle',
	                    x: this._location.x,
	                    y: this._location.y,
	                    width: this._handleSize,
	                    height: this._handleSize,
	                    color: this.zoomOption.handleColor,
	                    text: '=',
	                    textPosition: 'inside'
	                },
	                highlightStyle: {
	                    text: detail.start,
	                    brushType: 'fill',
	                    textPosition: 'left'
	                },
	                ondrift: this._ondrift,
	                ondragend: this._ondragend
	            };

	            if (this.zoomOption.orient == 'horizontal') {
	                this._startShape.style.height = this._location.height;
	                this._endShape = zrUtil.clone(this._startShape);

	                this._startShape.style.x = this._fillerShae.style.x - this._handleSize,
	                this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width;
	                this._endShape.highlightStyle.text = detail.end;
	                this._endShape.highlightStyle.textPosition = 'right';
	            }
	            else {
	                this._startShape.style.width = this._location.width;
	                this._endShape = zrUtil.clone(this._startShape);

	                this._startShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height;
	                this._startShape.highlightStyle.textPosition = 'bottom';

	                this._endShape.style.y = this._fillerShae.style.y - this._handleSize;
	                this._endShape.highlightStyle.text = detail.end;
	                this._endShape.highlightStyle.textPosition = 'top';
	            }
	            this._startShape = new IconShape(this._startShape);
	            this._endShape = new IconShape(this._endShape);
	            this.shapeList.push(this._startShape);
	            this.shapeList.push(this._endShape);
	        },

	        /**
	         * 构建特效边框
	         */
	        _buildFrame : function () {
	            // 特效框线，亚像素优化
	            var x = this.subPixelOptimize(this._location.x, 1);
	            var y = this.subPixelOptimize(this._location.y, 1);
	            this._startFrameShape = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                hoverable :false,
	                style : {
	                    x : x,
	                    y : y,
	                    width : this._location.width - (x > this._location.x ? 1 : 0),
	                    height : this._location.height - (y > this._location.y ? 1 : 0),
	                    lineWidth: 1,
	                    brushType: 'stroke',
	                    strokeColor : this.zoomOption.handleColor
	                }
	            };
	            this._endFrameShape = zrUtil.clone(this._startFrameShape);

	            this._startFrameShape = new RectangleShape(this._startFrameShape);
	            this._endFrameShape = new RectangleShape(this._endFrameShape);
	            this.shapeList.push(this._startFrameShape);
	            this.shapeList.push(this._endFrameShape);
	            return;
	        },

	        _syncHandleShape : function () {
	            if (this.zoomOption.orient == 'horizontal') {
	                this._startShape.style.x = this._fillerShae.style.x - this._handleSize;
	                this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width;

	                this._zoom.start = (
	                    this._startShape.style.x - this._location.x
	                ) / this._location.width * 100;
	                this._zoom.end = (
	                    this._endShape.style.x + this._handleSize - this._location.x
	                ) / this._location.width * 100;
	            }
	            else {
	                this._startShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height;
	                this._endShape.style.y = this._fillerShae.style.y - this._handleSize;

	                this._zoom.start = (
	                    this._location.y + this._location.height
	                    - this._startShape.style.y
	                ) / this._location.height * 100;
	                this._zoom.end = (
	                    this._location.y + this._location.height
	                    - this._endShape.style.y - this._handleSize
	                ) / this._location.height * 100;
	            }
	            this.zr.modShape(this._startShape.id);
	            this.zr.modShape(this._endShape.id);

	            // 同步边框
	            this._syncFrameShape();

	            this.zr.refreshNextFrame();
	        },

	        _syncFillerShape : function () {
	            var a;
	            var b;
	            if (this.zoomOption.orient == 'horizontal') {
	                a = this._startShape.style.x;
	                b = this._endShape.style.x;
	                this._fillerShae.style.x = Math.min(a, b) + this._handleSize;
	                this._fillerShae.style.width = Math.abs(a - b) - this._handleSize;
	                this._zoom.start = (
	                    Math.min(a, b) - this._location.x
	                ) / this._location.width * 100;
	                this._zoom.end = (
	                    Math.max(a, b) + this._handleSize - this._location.x
	                ) / this._location.width * 100;
	            }
	            else {
	                a = this._startShape.style.y;
	                b = this._endShape.style.y;
	                this._fillerShae.style.y = Math.min(a, b) + this._handleSize;
	                this._fillerShae.style.height = Math.abs(a - b) - this._handleSize;
	                this._zoom.start = (
	                    this._location.y + this._location.height - Math.max(a, b)
	                ) / this._location.height * 100;
	                this._zoom.end = (
	                    this._location.y + this._location.height - Math.min(a, b) - this._handleSize
	                ) / this._location.height * 100;
	            }

	            this.zr.modShape(this._fillerShae.id);

	            // 同步边框
	            this._syncFrameShape();

	            this.zr.refreshNextFrame();
	        },

	        _syncFrameShape : function () {
	            if (this.zoomOption.orient == 'horizontal') {
	                this._startFrameShape.style.width =
	                    this._fillerShae.style.x - this._location.x;
	                this._endFrameShape.style.x =
	                    this._fillerShae.style.x + this._fillerShae.style.width;
	                this._endFrameShape.style.width =
	                    this._location.x + this._location.width - this._endFrameShape.style.x;
	            }
	            else {
	                this._startFrameShape.style.y =
	                    this._fillerShae.style.y + this._fillerShae.style.height;
	                this._startFrameShape.style.height =
	                    this._location.y + this._location.height - this._startFrameShape.style.y;
	                this._endFrameShape.style.height =
	                    this._fillerShae.style.y - this._location.y;
	            }

	            this.zr.modShape(this._startFrameShape.id);
	            this.zr.modShape(this._endFrameShape.id);
	        },

	        _syncShape : function () {
	            if (!this.zoomOption.show) {
	                // 没有伸缩控件
	                return;
	            }
	            if (this.zoomOption.orient == 'horizontal') {
	                this._startShape.style.x = this._location.x
	                                           + this._zoom.start / 100 * this._location.width;
	                this._endShape.style.x   = this._location.x
	                                           + this._zoom.end / 100 * this._location.width
	                                           - this._handleSize;

	                this._fillerShae.style.x     = this._startShape.style.x + this._handleSize;
	                this._fillerShae.style.width = this._endShape.style.x
	                                               - this._startShape.style.x
	                                               - this._handleSize;
	            }
	            else {
	                this._startShape.style.y = this._location.y + this._location.height
	                                           - this._zoom.start / 100 * this._location.height;
	                this._endShape.style.y   = this._location.y + this._location.height
	                                           - this._zoom.end / 100 * this._location.height
	                                           - this._handleSize;

	                this._fillerShae.style.y      = this._endShape.style.y + this._handleSize;
	                this._fillerShae.style.height = this._startShape.style.y
	                                                - this._endShape.style.y
	                                                - this._handleSize;
	            }

	            this.zr.modShape(this._startShape.id);
	            this.zr.modShape(this._endShape.id);
	            this.zr.modShape(this._fillerShae.id);
	            // 同步边框
	            this._syncFrameShape();
	            this.zr.refresh();
	        },

	         _syncData : function (dispatchNow) {
	            var target;
	            var start;
	            var end;
	            var length;
	            var data;

	            for (var key in this._originalData) {
	                target = this._originalData[key];
	                for (var idx in target) {
	                    data = target[idx];
	                    if (data == null) {
	                        continue;
	                    }
	                    length = data.length;
	                    start = Math.floor(this._zoom.start / 100 * length);
	                    end = Math.ceil(this._zoom.end / 100 * length);

	                    if (!(this.getDataFromOption(data[0]) instanceof Array)
	                        || this.option[key][idx].type == ecConfig.CHART_TYPE_K
	                    ) {
	                        this.option[key][idx].data = data.slice(start, end);
	                    }
	                    else {
	                        // 散点图，双数值轴折线图柱形图特殊处理
	                        // axis.data[0]不会是Array，所以axis的情况不会走进这个分支
	                        this._setScale();
	                        this.option[key][idx].data = this._synScatterData(idx, data);
	                    }
	                }
	            }

	            if (!this._isSilence && (this.zoomOption.realtime || dispatchNow)) {
	                this.messageCenter.dispatch(
	                    ecConfig.EVENT.DATA_ZOOM,
	                    null,
	                    {zoom: this._zoom},
	                    this.myChart
	                );
	            }

	            //this.zoomOption.start = this._zoom.start;
	            //this.zoomOption.end = this._zoom.end;
	        },

	        _synScatterData : function (seriesIndex, data) {
	            if (this._zoom.start === 0
	                && this._zoom.end == 100
	                && this._zoom.start2 === 0
	                && this._zoom.end2 == 100
	            ) {
	                return data;
	            }
	            var newData = [];
	            var scale = this._zoom.scatterMap[seriesIndex];
	            var total;
	            var xStart;
	            var xEnd;
	            var yStart;
	            var yEnd;

	            if (this.zoomOption.orient == 'horizontal') {
	                total = scale.x.max - scale.x.min;
	                xStart = this._zoom.start / 100 * total + scale.x.min;
	                xEnd = this._zoom.end / 100 * total + scale.x.min;

	                total = scale.y.max - scale.y.min;
	                yStart = this._zoom.start2 / 100 * total + scale.y.min;
	                yEnd = this._zoom.end2 / 100 * total + scale.y.min;
	            }
	            else {
	                total = scale.x.max - scale.x.min;
	                xStart = this._zoom.start2 / 100 * total + scale.x.min;
	                xEnd = this._zoom.end2 / 100 * total + scale.x.min;

	                total = scale.y.max - scale.y.min;
	                yStart = this._zoom.start / 100 * total + scale.y.min;
	                yEnd = this._zoom.end / 100 * total + scale.y.min;
	            }

	            var dataMappingMethods;
	            if (dataMappingMethods = scale.x.dataMappingMethods) {
	                xStart = dataMappingMethods.coord2Value(xStart);
	                xEnd = dataMappingMethods.coord2Value(xEnd);
	            }
	            if (dataMappingMethods = scale.y.dataMappingMethods) {
	                yStart = dataMappingMethods.coord2Value(yStart);
	                yEnd = dataMappingMethods.coord2Value(yEnd);
	            }

	            // console.log(xStart,xEnd,yStart,yEnd);

	            var value;
	            for (var i = 0, l = data.length; i < l; i++) {
	                value = data[i].value || data[i];
	                if (value[0] >= xStart
	                    && value[0] <= xEnd
	                    && value[1] >= yStart
	                    && value[1] <= yEnd
	                ) {
	                    newData.push(data[i]);
	                }
	            }

	            return newData;
	        },

	        /**
	         * 发生缩放后修改axis的scale
	         */
	        _setScale: function() {
	            var needScale = this._zoom.start !== 0
	                            || this._zoom.end !== 100
	                            || this._zoom.start2 !== 0
	                            || this._zoom.end2 !== 100;
	            var axis = {
	                xAxis : this.option.xAxis,
	                yAxis : this.option.yAxis
	            };
	            for (var key in axis) {
	                for (var i = 0, l = axis[key].length; i < l; i++) {
	                    axis[key][i].scale = needScale || axis[key][i]._scale;
	                }
	            }
	        },

	        /**
	         * 备份可能存在的scale设置
	         */
	        _backupScale: function() {
	            var axis = {
	                xAxis : this.option.xAxis,
	                yAxis : this.option.yAxis
	            };
	            for (var key in axis) {
	                for (var i = 0, l = axis[key].length; i < l; i++) {
	                    axis[key][i]._scale = axis[key][i].scale;
	                }
	            }
	        },

	        /**
	         * 获取当前定位
	         */
	        _getDetail : function () {
	            var key = ['xAxis', 'yAxis'];
	            for (var i = 0, l = key.length; i < l; i++) {
	                var target = this._originalData[key[i]];
	                for (var idx in target) {
	                    var data = target[idx];
	                    if (data == null) {
	                        continue;
	                    }
	                    var length = data.length;
	                    var start = Math.floor(this._zoom.start / 100 * length);
	                    var end = Math.ceil(this._zoom.end / 100 * length);
	                    end -= end > 0 ? 1 : 0;
	                    return {
	                        start : this.getDataFromOption(data[start]),
	                        end : this.getDataFromOption(data[end])
	                    };
	                }
	            }

	            key = this.zoomOption.orient == 'horizontal' ? 'xAxis' : 'yAxis';
	            var seriesIndex = this._zoom.seriesIndex[0];
	            var axisIndex = this.option.series[seriesIndex][key + 'Index'] || 0;
	            var axisType = this.option[key][axisIndex].type;
	            var min = this._zoom.scatterMap[seriesIndex][key.charAt(0)].min;
	            var max = this._zoom.scatterMap[seriesIndex][key.charAt(0)].max;
	            var gap = max - min;

	            if (axisType == 'value') {
	                return {
	                    start : min + gap * this._zoom.start / 100,
	                    end : min + gap * this._zoom.end / 100
	                };
	            }
	            else if (axisType == 'time') {
	                // 最优解
	                max = min + gap * this._zoom.end / 100;
	                min = min + gap * this._zoom.start / 100;
	                var formatter = ecDate.getAutoFormatter(min, max).formatter;
	                return {
	                    start : ecDate.format(formatter, min),
	                    end : ecDate.format(formatter, max)
	                };
	            }

	            return {
	                start : '',
	                end : ''
	            };
	        },

	        /**
	         * 拖拽范围控制
	         */
	        __ondrift : function (shape, dx, dy) {
	            if (this.zoomOption.zoomLock) {
	                // zoomLock时把handle转成filler的拖拽
	                shape = this._fillerShae;
	            }

	            var detailSize = shape._type == 'filler' ? this._handleSize : 0;
	            if (this.zoomOption.orient == 'horizontal') {
	                if (shape.style.x + dx - detailSize <= this._location.x) {
	                    shape.style.x = this._location.x + detailSize;
	                }
	                else if (shape.style.x + dx + shape.style.width + detailSize
	                         >= this._location.x + this._location.width
	                ) {
	                    shape.style.x = this._location.x + this._location.width
	                                - shape.style.width - detailSize;
	                }
	                else {
	                    shape.style.x += dx;
	                }
	            }
	            else {
	                if (shape.style.y + dy - detailSize <= this._location.y) {
	                    shape.style.y = this._location.y + detailSize;
	                }
	                else if (shape.style.y + dy + shape.style.height + detailSize
	                         >= this._location.y + this._location.height
	                ) {
	                    shape.style.y = this._location.y + this._location.height
	                                - shape.style.height - detailSize;
	                }
	                else {
	                    shape.style.y += dy;
	                }
	            }

	            if (shape._type == 'filler') {
	                this._syncHandleShape();
	            }
	            else {
	                this._syncFillerShape();
	            }

	            if (this.zoomOption.realtime) {
	                this._syncData();
	            }

	            if (this.zoomOption.showDetail) {
	                var detail = this._getDetail();
	                this._startShape.style.text = this._startShape.highlightStyle.text = detail.start;
	                this._endShape.style.text = this._endShape.highlightStyle.text = detail.end;
	                this._startShape.style.textPosition = this._startShape.highlightStyle.textPosition;
	                this._endShape.style.textPosition = this._endShape.highlightStyle.textPosition;
	            }
	            return true;
	        },

	        __ondragend : function () {
	            if (this.zoomOption.showDetail) {
	                this._startShape.style.text = this._endShape.style.text = '=';
	                this._startShape.style.textPosition = this._endShape.style.textPosition = 'inside';
	                this.zr.modShape(this._startShape.id);
	                this.zr.modShape(this._endShape.id);
	                this.zr.refreshNextFrame();
	            }
	            this.isDragend = true;
	        },

	        /**
	         * 数据项被拖拽出去
	         */
	        ondragend : function (param, status) {
	            if (!this.isDragend || !param.target) {
	                // 没有在当前实例上发生拖拽行为则直接返回
	                return;
	            }

	            !this.zoomOption.realtime && this._syncData();

	            // 别status = {}赋值啊！！
	            status.dragOut = true;
	            status.dragIn = true;
	            if (!this._isSilence && !this.zoomOption.realtime) {
	                this.messageCenter.dispatch(
	                    ecConfig.EVENT.DATA_ZOOM,
	                    null,
	                    {zoom: this._zoom},
	                    this.myChart
	                );
	            }
	            status.needRefresh = false; // 会有消息触发fresh，不用再刷一遍
	            // 处理完拖拽事件后复位
	            this.isDragend = false;

	            return;
	        },

	        ondataZoom : function (param, status) {
	            status.needRefresh = true;
	            return;
	        },

	        absoluteZoom : function (param) {
	            this._zoom.start = param.start;
	            this._zoom.end = param.end;
	            this._zoom.start2 = param.start2;
	            this._zoom.end2 = param.end2;
	            this._syncShape();
	            this._syncData(true);
	            return;
	        },

	        rectZoom : function (param) {
	            if (!param) {
	                // 重置拖拽
	                //this.zoomOption.start =
	                //this.zoomOption.start2 =
	                this._zoom.start = this._zoom.start2 = 0;

	                //this.zoomOption.end =
	                //this.zoomOption.end2 =
	                this._zoom.end = this._zoom.end2 = 100;

	                this._syncShape();
	                this._syncData(true);
	                return this._zoom;
	            }
	            var gridArea = this.component.grid.getArea();
	            var rect = {
	                x : param.x,
	                y : param.y,
	                width : param.width,
	                height : param.height
	            };
	            // 修正方向框选
	            if (rect.width < 0) {
	                rect.x += rect.width;
	                rect.width = -rect.width;
	            }
	            if (rect.height < 0) {
	                rect.y += rect.height;
	                rect.height = -rect.height;
	            }
	            // console.log(rect,this._zoom);

	            // 剔除无效缩放
	            if (rect.x > gridArea.x + gridArea.width || rect.y > gridArea.y + gridArea.height) {
	                return false; // 无效缩放
	            }

	            // 修正框选超出
	            if (rect.x < gridArea.x) {
	                rect.x = gridArea.x;
	            }
	            if (rect.x + rect.width > gridArea.x + gridArea.width) {
	                rect.width = gridArea.x + gridArea.width - rect.x;
	            }
	            if (rect.y + rect.height > gridArea.y + gridArea.height) {
	                rect.height = gridArea.y + gridArea.height - rect.y;
	            }

	            var total;
	            var sdx = (rect.x - gridArea.x) / gridArea.width;
	            var edx = 1 - (rect.x + rect.width - gridArea.x) / gridArea.width;
	            var sdy = 1 - (rect.y + rect.height - gridArea.y) / gridArea.height;
	            var edy = (rect.y - gridArea.y) / gridArea.height;
	            // console.log('this',sdy,edy,this._zoom.start,this._zoom.end)
	            if (this.zoomOption.orient == 'horizontal') {
	                total = this._zoom.end - this._zoom.start;
	                this._zoom.start += total * sdx;
	                this._zoom.end -= total * edx;

	                total = this._zoom.end2 - this._zoom.start2;
	                this._zoom.start2 += total * sdy;
	                this._zoom.end2 -= total * edy;
	            }
	            else {
	                total = this._zoom.end - this._zoom.start;
	                this._zoom.start += total * sdy;
	                this._zoom.end -= total * edy;

	                total = this._zoom.end2 - this._zoom.start2;
	                this._zoom.start2 += total * sdx;
	                this._zoom.end2 -= total * edx;
	            }
	            //console.log(this._zoom.start,this._zoom.end,this._zoom.start2,this._zoom.end2)
	            //this.zoomOption.start = this._zoom.start;
	            //this.zoomOption.end = this._zoom.end;
	            //this.zoomOption.start2 = this._zoom.start2;
	            //this.zoomOption.end2 = this._zoom.end2;
	            //console.log(rect,gridArea,this._zoom,total)
	            this._syncShape();
	            this._syncData(true);
	            return this._zoom;
	        },

	        syncBackupData : function (curOption) {
	            var start;
	            var target = this._originalData['series'];
	            var curSeries = curOption.series;
	            var curData;
	            for (var i = 0, l = curSeries.length; i < l; i++) {
	                curData = curSeries[i].data || curSeries[i].eventList;
	                if (target[i]) {
	                    // dataZoom接管的
	                    start = Math.floor(this._zoom.start / 100 * target[i].length);
	                }
	                else {
	                    // 非dataZoom接管
	                    start = 0;
	                }
	                for (var j = 0, k = curData.length; j < k; j++) {
	                    //optionBackup.series[i].data[j + start] = curData[j];
	                    if (target[i]) {
	                        // 同步内部备份
	                        target[i][j + start] = curData[j];
	                    }
	                }
	            }
	        },

	        syncOption : function(magicOption) {
	            this.silence(true);
	            this.option = magicOption;
	            this.option.dataZoom = this.reformOption(this.option.dataZoom);
	            this.zoomOption = this.option.dataZoom;
	            if (!this.myChart.canvasSupported) {
	                // 不支持Canvas的强制关闭实时动画
	                this.zoomOption.realtime = false;
	            }

	            this.clear();
	            // 位置参数，通过计算所得x, y, width, height
	            this._location = this._getLocation();
	            // 缩放参数
	            this._zoom =  this._getZoom();

	            this._backupData();
	            if (this.option.dataZoom && this.option.dataZoom.show) {
	                this._buildShape();
	            }
	            this._syncData();

	            this.silence(false);
	        },

	        silence : function (s) {
	            this._isSilence = s;
	        },

	        getRealDataIndex : function (sIdx, dIdx) {
	            if (!this._originalData || (this._zoom.start === 0 && this._zoom.end == 100)) {
	                return dIdx;
	            }
	            var sreies = this._originalData.series;
	            if (sreies[sIdx]) {
	                return Math.floor(this._zoom.start / 100 * sreies[sIdx].length) + dIdx;
	            }
	            return -1;
	        },

	        /**
	         * 避免dataZoom带来两次refresh，不设refresh接口，resize重复一下buildshape逻辑
	         */
	        resize : function () {
	            this.clear();

	            // 位置参数，通过计算所得x, y, width, height
	            this._location = this._getLocation();
	            // 缩放参数
	            this._zoom =  this._getZoom();

	            if (this.option.dataZoom.show) {
	                this._buildShape();
	            }
	        }
	    };

	    zrUtil.inherits(DataZoom, Base);

	    __webpack_require__(427).define('dataZoom', DataZoom);

	    return DataZoom;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts日期运算格式化相关
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    var _timeGap = [
	        {formatter: 'hh : mm : ss', value: 1000},               // 1s
	        {formatter: 'hh : mm : ss', value: 1000 * 5},           // 5s
	        {formatter: 'hh : mm : ss', value: 1000 * 10},          // 10s
	        {formatter: 'hh : mm : ss', value: 1000 * 15},          // 15s
	        {formatter: 'hh : mm : ss', value: 1000 * 30},          // 30s
	        {formatter: 'hh : mm\nMM - dd', value: 60000},          // 1m
	        {formatter: 'hh : mm\nMM - dd', value: 60000 * 5},      // 5m
	        {formatter: 'hh : mm\nMM - dd', value: 60000 * 10},     // 10m
	        {formatter: 'hh : mm\nMM - dd', value: 60000 * 15},     // 15m
	        {formatter: 'hh : mm\nMM - dd', value: 60000 * 30},     // 30m
	        {formatter: 'hh : mm\nMM - dd', value: 3600000},        // 1h
	        {formatter: 'hh : mm\nMM - dd', value: 3600000 * 2},    // 2h
	        {formatter: 'hh : mm\nMM - dd', value: 3600000 * 6},    // 6h
	        {formatter: 'hh : mm\nMM - dd', value: 3600000 * 12},   // 12h
	        {formatter: 'MM - dd\nyyyy', value: 3600000 * 24},      // 1d
	        {formatter: 'week', value: 3600000 * 24 * 7},           // 7d
	        {formatter: 'month', value: 3600000 * 24 * 31},         // 1M
	        {formatter: 'quarter', value: 3600000 * 24 * 380 / 4},  // 3M
	        {formatter: 'half-year', value: 3600000 * 24 * 380 / 2},// 6M
	        {formatter: 'year', value: 3600000 * 24 * 380}          // 1Y
	    ];
	    
	    /**
	     * 获取最佳formatter
	     * @params {number} min 最小值
	     * @params {number} max 最大值
	     * @params {=number} splitNumber 分隔段数
	     */
	    function getAutoFormatter(min, max, splitNumber) {
	        splitNumber = splitNumber > 1 ? splitNumber : 2;
	        // 最优解
	        var curValue;
	        var totalGap;
	        // 目标
	        var formatter;
	        var gapValue;
	        for (var i = 0, l = _timeGap.length; i < l; i++) {
	            curValue = _timeGap[i].value;
	            totalGap = Math.ceil(max / curValue) * curValue 
	                       - Math.floor(min / curValue) * curValue;
	            if (Math.round(totalGap / curValue) <= splitNumber * 1.2) {
	                formatter =  _timeGap[i].formatter;
	                gapValue = _timeGap[i].value;
	                // console.log(formatter, gapValue,i);
	                break;
	            }
	        }
	        
	        if (formatter == null) {
	            formatter = 'year';
	            curValue = 3600000 * 24 * 367;
	            totalGap = Math.ceil(max / curValue) * curValue 
	                       - Math.floor(min / curValue) * curValue;
	            gapValue = Math.round(totalGap / (splitNumber - 1) / curValue) * curValue;
	        }
	        
	        return {
	            formatter: formatter,
	            gapValue: gapValue
	        };
	    }
	    
	    /**
	     * 一位数字补0 
	     */
	    function s2d (v) {
	        return v < 10 ? ('0' + v) : v;
	    }
	    
	    /**
	     * 百分比计算
	     */
	    function format(formatter, value) {
	        if (formatter == 'week' 
	            || formatter == 'month' 
	            || formatter == 'quarter' 
	            || formatter == 'half-year'
	            || formatter == 'year'
	        ) {
	            formatter = 'MM - dd\nyyyy';
	        }
	            
	        var date = getNewDate(value);
	        var y = date.getFullYear();
	        var M = date.getMonth() + 1;
	        var d = date.getDate();
	        var h = date.getHours();
	        var m = date.getMinutes();
	        var s = date.getSeconds();
	        
	        formatter = formatter.replace('MM', s2d(M));
	        formatter = formatter.toLowerCase();
	        formatter = formatter.replace('yyyy', y);
	        formatter = formatter.replace('yy', y % 100);
	        formatter = formatter.replace('dd', s2d(d));
	        formatter = formatter.replace('d', d);
	        formatter = formatter.replace('hh', s2d(h));
	        formatter = formatter.replace('h', h);
	        formatter = formatter.replace('mm', s2d(m));
	        formatter = formatter.replace('m', m);
	        formatter = formatter.replace('ss', s2d(s));
	        formatter = formatter.replace('s', s);

	        return formatter;
	    }
	    
	    function nextMonday(value) {
	        value = getNewDate(value);
	        value.setDate(value.getDate() + 8 - value.getDay());
	        return value;
	    }
	    
	    function nextNthPerNmonth(value, nth, nmon) {
	        value = getNewDate(value);
	        value.setMonth(Math.ceil((value.getMonth() + 1) / nmon) * nmon);
	        value.setDate(nth);
	        return value;
	    }
	    
	    function nextNthOnMonth(value, nth) {
	        return nextNthPerNmonth(value, nth, 1);
	    }
	    
	    function nextNthOnQuarterYear(value, nth) {
	        return nextNthPerNmonth(value, nth, 3);
	    }
	    
	    function nextNthOnHalfYear(value, nth) {
	        return nextNthPerNmonth(value, nth, 6);
	    }
	    
	    function nextNthOnYear(value, nth) {
	        return nextNthPerNmonth(value, nth, 12);
	    }
	    
	    function getNewDate(value) {
	        return value instanceof Date
	               ? value
	               : new Date(typeof value == 'string' ? value.replace(/-/g, '/') : value);
	    }
	    
	    return {
	        getAutoFormatter: getAutoFormatter,
	        getNewDate: getNewDate,
	        format: format,
	        nextMonday: nextMonday,
	        nextNthPerNmonth: nextNthPerNmonth,
	        nextNthOnMonth: nextNthOnMonth,
	        nextNthOnQuarterYear: nextNthOnQuarterYear,
	        nextNthOnHalfYear: nextNthOnHalfYear,
	        nextNthOnYear : nextNthOnYear
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * zrender
	 *
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 * shape类：支持半平滑的polygon，折线面积图使用
	 * 可配图形属性：
	   {
	       // 基础属性
	       shape  : 'halfSmoothPolygon',      // 必须，shape类标识，需要显式指定
	       id     : {string},       // 必须，图形唯一标识，可通过'zrender/tool/guid'方法生成
	       zlevel : {number},       // 默认为0，z层level，决定绘画在哪层canvas中
	       invisible : {boolean},   // 默认为false，是否可见

	       // 样式属性，默认状态样式样式属性
	       style  : {
	           pointList     : {Array},   // 必须，多边形各个顶角坐标
	       },

	       // 样式属性，高亮样式属性，当不存在highlightStyle时使用基于默认样式扩展显示
	       highlightStyle : {
	           // 同style
	       }

	       // 交互属性，详见shape.Base

	       // 事件属性，详见shape.Base
	   }
	         例子：
	   {
	       shape  : 'halfSmoothPolygon',
	       id     : '123456',
	       zlevel : 1,
	       style  : {
	           pointList : [[10, 10], [300, 20], [298, 400], [50, 450]]
	           color : '#eee',
	           text : 'Baidu'
	       },
	       myName : 'kener',  // 可自带任何有效自定义属性

	       clickable : true,
	       onClick : function (eventPacket) {
	           alert(eventPacket.target.myName);
	       }
	   }
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(384);
	    var smoothBezier = __webpack_require__(410);
	    var zrUtil = __webpack_require__(367);
	    
	    function HalfSmoothPolygon(options) {
	        Base.call(this, options);
	    }

	    HalfSmoothPolygon.prototype = {
	        type : 'half-smooth-polygon',
	        /**
	         * 创建多边形路径
	         * @param {Context2D} ctx Canvas 2D上下文
	         * @param {Object} style 样式
	         */
	        buildPath : function (ctx, style) {
	            var pointList = style.pointList;
	            if (pointList.length < 2) {
	                // 少于2个点就不画了~
	                return;
	            }
	            if (style.smooth) {
	                var controlPoints = smoothBezier(
	                    pointList.slice(0, -2), style.smooth, false, style.smoothConstraint
	                );

	                ctx.moveTo(pointList[0][0], pointList[0][1]);
	                var cp1;
	                var cp2;
	                var p;
	                var l = pointList.length;
	                for (var i = 0; i < l - 3; i++) {
	                    cp1 = controlPoints[i * 2];
	                    cp2 = controlPoints[i * 2 + 1];
	                    p = pointList[i + 1];
	                    ctx.bezierCurveTo(
	                        cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]
	                    );
	                }
	                ctx.lineTo(pointList[l - 2][0], pointList[l - 2][1]);
	                ctx.lineTo(pointList[l - 1][0], pointList[l - 1][1]);
	                ctx.lineTo(pointList[0][0], pointList[0][1]);
	            } 
	            else {
	                __webpack_require__(408).prototype.buildPath(
	                    ctx, style
	                );
	            }
	            return;
	        }
	    };

	    zrUtil.inherits(HalfSmoothPolygon, Base);
	    
	    return HalfSmoothPolygon;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件类： 坐标轴
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 * 直角坐标系中坐标轴数组，数组中每一项代表一条横轴（纵轴）坐标轴。
	 * 标准（1.0）中规定最多同时存在2条横轴和2条纵轴
	 *    单条横轴时可指定安放于grid的底部（默认）或顶部，2条同时存在时则默认第一条安放于底部，第二天安放于顶部
	 *    单条纵轴时可指定安放于grid的左侧（默认）或右侧，2条同时存在时则默认第一条安放于左侧，第二天安放于右侧。
	 * 坐标轴有两种类型，类目型和数值型（区别详见axis）：
	 *    横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
	 *    纵轴通常为数值型，但条形图时则纵轴为类目型。
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(419);

	    var LineShape = __webpack_require__(404);

	    var ecConfig = __webpack_require__(366);
	    var ecData = __webpack_require__(414);
	    var zrUtil = __webpack_require__(367);
	    var zrColor = __webpack_require__(386);

	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 图表选项
	     *     @param {string=} option.xAxis.type 坐标轴类型，横轴默认为类目型'category'
	     *     @param {string=} option.yAxis.type 坐标轴类型，纵轴默认为类目型'value'
	     * @param {Object} component 组件
	     * @param {string} axisType 横走or纵轴
	     */
	    function Axis(ecTheme, messageCenter, zr, option, myChart, axisType) {
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);

	        this.axisType = axisType;
	        this._axisList = [];

	        this.refresh(option);
	    }

	    Axis.prototype = {
	        type: ecConfig.COMPONENT_TYPE_AXIS,
	        axisBase: {
	            // 轴线
	            _buildAxisLine: function () {
	                var lineWidth = this.option.axisLine.lineStyle.width;
	                var halfLineWidth = lineWidth / 2;
	                var axShape = {
	                    _axisShape: 'axisLine',
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase() + 3,
	                    hoverable: false
	                };
	                var grid = this.grid;
	                switch (this.option.position) {
	                    case 'left' :
	                        axShape.style = {
	                            xStart: grid.getX() - halfLineWidth,
	                            yStart: grid.getYend(),
	                            xEnd: grid.getX() - halfLineWidth,
	                            yEnd: grid.getY(),
	                            lineCap: 'round'
	                        };
	                        break;
	                    case 'right' :
	                        axShape.style = {
	                            xStart: grid.getXend() + halfLineWidth,
	                            yStart: grid.getYend(),
	                            xEnd: grid.getXend() + halfLineWidth,
	                            yEnd: grid.getY(),
	                            lineCap: 'round'
	                        };
	                        break;
	                    case 'bottom' :
	                        axShape.style = {
	                            xStart: grid.getX(),
	                            yStart: grid.getYend() + halfLineWidth,
	                            xEnd: grid.getXend(),
	                            yEnd: grid.getYend() + halfLineWidth,
	                            lineCap: 'round'
	                        };
	                        break;
	                    case 'top' :
	                        axShape.style = {
	                            xStart: grid.getX(),
	                            yStart: grid.getY() - halfLineWidth,
	                            xEnd: grid.getXend(),
	                            yEnd: grid.getY() - halfLineWidth,
	                            lineCap: 'round'
	                        };
	                        break;
	                }
	                var style = axShape.style;
	                if (this.option.name !== '') { // 别帮我代码规范
	                    style.text = this.option.name;
	                    style.textPosition = this.option.nameLocation;
	                    style.textFont = this.getFont(this.option.nameTextStyle);
	                    if (this.option.nameTextStyle.align) {
	                        style.textAlign = this.option.nameTextStyle.align;
	                    }
	                    if (this.option.nameTextStyle.baseline) {
	                        style.textBaseline = this.option.nameTextStyle.baseline;
	                    }
	                    if (this.option.nameTextStyle.color) {
	                        style.textColor = this.option.nameTextStyle.color;
	                    }
	                }
	                style.strokeColor = this.option.axisLine.lineStyle.color;

	                style.lineWidth = lineWidth;
	                // 亚像素优化
	                if (this.isHorizontal()) {
	                    // 横向布局，优化y
	                    style.yStart
	                        = style.yEnd
	                        = this.subPixelOptimize(style.yEnd, lineWidth);
	                }
	                else {
	                    // 纵向布局，优化x
	                    style.xStart
	                        = style.xEnd
	                        = this.subPixelOptimize(style.xEnd, lineWidth);
	                }

	                style.lineType = this.option.axisLine.lineStyle.type;

	                axShape = new LineShape(axShape);
	                this.shapeList.push(axShape);
	            },

	            _axisLabelClickable: function(clickable, axShape) {
	                if (clickable) {
	                    ecData.pack(
	                        axShape, undefined, -1, undefined, -1, axShape.style.text
	                    );
	                    axShape.hoverable = true;
	                    axShape.clickable = true;
	                    axShape.highlightStyle = {
	                        color: zrColor.lift(axShape.style.color, 1),
	                        brushType: 'fill'
	                    };
	                    return axShape;
	                }
	                else {
	                    return axShape;
	                }
	            },

	            refixAxisShape: function(zeroX, zeroY) {
	                if (!this.option.axisLine.onZero) {
	                    return;
	                }
	                var tickLength;
	                if (this.isHorizontal() && zeroY != null) {
	                    // 横向布局调整纵向y
	                    for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                        if (this.shapeList[i]._axisShape === 'axisLine') {
	                            this.shapeList[i].style.yStart
	                                = this.shapeList[i].style.yEnd
	                                = this.subPixelOptimize(
	                                    zeroY, this.shapeList[i].stylelineWidth
	                                );
	                            this.zr.modShape(this.shapeList[i].id);
	                        }
	                        else if (this.shapeList[i]._axisShape === 'axisTick') {
	                            tickLength = this.shapeList[i].style.yEnd
	                                         - this.shapeList[i].style.yStart;
	                            this.shapeList[i].style.yStart = zeroY - tickLength;
	                            this.shapeList[i].style.yEnd = zeroY;
	                            this.zr.modShape(this.shapeList[i].id);
	                        }
	                    }
	                }
	                if (!this.isHorizontal() && zeroX != null) {
	                    // 纵向布局调整横向x
	                    for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                        if (this.shapeList[i]._axisShape === 'axisLine') {
	                            this.shapeList[i].style.xStart
	                                = this.shapeList[i].style.xEnd
	                                = this.subPixelOptimize(
	                                    zeroX, this.shapeList[i].stylelineWidth
	                                );
	                            this.zr.modShape(this.shapeList[i].id);
	                        }
	                        else if (this.shapeList[i]._axisShape === 'axisTick') {
	                            tickLength = this.shapeList[i].style.xEnd
	                                         - this.shapeList[i].style.xStart;
	                            this.shapeList[i].style.xStart = zeroX;
	                            this.shapeList[i].style.xEnd = zeroX + tickLength;
	                            this.zr.modShape(this.shapeList[i].id);
	                        }
	                    }
	                }
	            },

	            getPosition: function () {
	                return this.option.position;
	            },

	            isHorizontal: function() {
	                return this.option.position === 'bottom' || this.option.position === 'top';
	            }
	        },
	        /**
	         * 参数修正&默认值赋值，重载基类方法
	         * @param {Object} opt 参数
	         */
	        reformOption: function (opt) {
	            // 不写或传了个空数值默认为数值轴
	            if (!opt || (opt instanceof Array && opt.length === 0)) {
	                opt = [ { type: ecConfig.COMPONENT_TYPE_AXIS_VALUE } ];
	            }
	            else if (!(opt instanceof Array)){
	                opt = [opt];
	            }

	            // 最多两条，其他参数忽略
	            if (opt.length > 2) {
	                opt = [opt[0], opt[1]];
	            }

	            if (this.axisType === 'xAxis') {
	                // 横轴位置默认配置
	                if (!opt[0].position            // 没配置或配置错
	                    || (opt[0].position != 'bottom' && opt[0].position != 'top')
	                ) {
	                    opt[0].position = 'bottom';
	                }
	                if (opt.length > 1) {
	                    opt[1].position = opt[0].position === 'bottom' ? 'top' : 'bottom';
	                }

	                for (var i = 0, l = opt.length; i < l; i++) {
	                    // 坐标轴类型，横轴默认为类目型'category'
	                    opt[i].type = opt[i].type || 'category';
	                    // 标识轴类型&索引
	                    opt[i].xAxisIndex = i;
	                    opt[i].yAxisIndex = -1;
	                }
	            }
	            else {
	                // 纵轴位置默认配置
	                if (!opt[0].position            // 没配置或配置错
	                    || (opt[0].position != 'left'  && opt[0].position != 'right')
	                ) {
	                    opt[0].position = 'left';
	                }

	                if (opt.length > 1) {
	                    opt[1].position = opt[0].position === 'left' ? 'right' : 'left';
	                }

	                for (var i = 0, l = opt.length; i < l; i++) {
	                    // 坐标轴类型，纵轴默认为数值型'value'
	                    opt[i].type = opt[i].type || 'value';
	                    // 标识轴类型&索引
	                    opt[i].xAxisIndex = -1;
	                    opt[i].yAxisIndex = i;
	                }
	            }

	            return opt;
	        },

	        /**
	         * 刷新
	         */
	        refresh: function (newOption) {
	            var axisOption;
	            if (newOption) {
	                this.option = newOption;
	                if (this.axisType === 'xAxis') {
	                    this.option.xAxis = this.reformOption(newOption.xAxis);
	                    axisOption = this.option.xAxis;
	                }
	                else {
	                    this.option.yAxis = this.reformOption(newOption.yAxis);
	                    axisOption = this.option.yAxis;
	                }
	                this.series = newOption.series;
	            }

	            var CategoryAxis = __webpack_require__(539);
	            var ValueAxis = __webpack_require__(540);
	            var len = Math.max((axisOption && axisOption.length || 0), this._axisList.length);
	            for (var i = 0; i < len; i++) {
	                if (this._axisList[i]   // 已有实例
	                    && newOption        // 非空刷新
	                    && (!axisOption[i] || this._axisList[i].type != axisOption[i].type) // 类型不匹配
	                ) {
	                    this._axisList[i].dispose && this._axisList[i].dispose();
	                    this._axisList[i] = false;
	                }

	                if (this._axisList[i]) {
	                    this._axisList[i].refresh && this._axisList[i].refresh(
	                        axisOption ? axisOption[i] : false,
	                        this.series
	                    );
	                }
	                else if (axisOption && axisOption[i]) {
	                    this._axisList[i] = axisOption[i].type === 'category'
	                        ? new CategoryAxis(
	                               this.ecTheme, this.messageCenter, this.zr,
	                               axisOption[i], this.myChart, this.axisBase
	                           )
	                        : new ValueAxis(
	                               this.ecTheme, this.messageCenter, this.zr,
	                               axisOption[i], this.myChart, this.axisBase,
	                               this.series
	                        );
	                }
	            }
	        },

	        /**
	         * 根据值换算位置
	         * @param {number} idx 坐标轴索引0~1
	         */
	        getAxis: function (idx) {
	            return this._axisList[idx];
	        },

	        getAxisCount: function () {
	            return this._axisList.length;
	        },

	        clear: function () {
	            for (var i = 0, l = this._axisList.length; i < l; i++) {
	                this._axisList[i].dispose && this._axisList[i].dispose();
	            }
	            this._axisList = [];
	        }
	    };

	    zrUtil.inherits(Axis, Base);

	    __webpack_require__(427).define('axis', Axis);

	    return Axis;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件： 类目轴
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(419);
	    
	    // 图形依赖
	    var TextShape = __webpack_require__(381);
	    var LineShape = __webpack_require__(404);
	    var RectangleShape = __webpack_require__(387);
	    
	    var ecConfig = __webpack_require__(366);
	    // 类目轴
	    ecConfig.categoryAxis =  {
	        zlevel: 0,                  // 一级层叠
	        z: 0,                       // 二级层叠
	        show: true,
	        position: 'bottom',    // 位置
	        name: '',              // 坐标轴名字，默认为空
	        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
	        nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式
	        boundaryGap: true,     // 类目起始和结束两端空白策略
	        axisLine: {            // 坐标轴线
	            show: true,        // 默认显示，属性show控制显示与否
	            onZero: true,
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#48b',
	                width: 2,
	                type: 'solid'
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            show: true,        // 属性show控制显示与否，默认不显示
	            interval: 'auto',
	            inside: false,    // 控制小标记是否在grid里 
	            // onGap: null,
	            length :5,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#333',
	                width: 1
	            }
	        },
	        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	            show: true,
	            interval: 'auto',
	            rotate: 0,
	            margin: 8,
	            // clickable: false,
	            // formatter: null,
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: '#333'
	            }
	        },
	        splitLine: {           // 分隔线
	            show: true,        // 默认显示，属性show控制显示与否
	            // onGap: null,
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#ccc'],
	                width: 1,
	                type: 'solid'
	            }
	        },
	        splitArea: {           // 分隔区域
	            show: false,       // 默认不显示，属性show控制显示与否
	            // onGap: null,
	            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
	                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
	            }
	        }
	    };

	    var zrUtil = __webpack_require__(367);
	    var zrArea = __webpack_require__(382);
	    
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 类目轴参数
	     * @param {Grid} component 组件
	     */
	    function CategoryAxis(ecTheme, messageCenter, zr, option, myChart, axisBase) {
	        if (option.data.length < 1) {
	            console.error('option.data.length < 1.');
	            return;
	        }
	        
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);
	        
	        this.grid = this.component.grid;
	        
	        for (var method in axisBase) {
	            this[method] = axisBase[method];
	        }
	        
	        this.refresh(option);
	    }
	    
	    CategoryAxis.prototype = {
	        type : ecConfig.COMPONENT_TYPE_AXIS_CATEGORY,
	        _getReformedLabel : function (idx) {
	            var data = this.getDataFromOption(this.option.data[idx]);
	            var formatter = this.option.data[idx].formatter 
	                            || this.option.axisLabel.formatter;
	            if (formatter) {
	                if (typeof formatter == 'function') {
	                    data = formatter.call(this.myChart, data);
	                }
	                else if (typeof formatter == 'string') {
	                    data = formatter.replace('{value}', data);
	                }
	            }
	            return data;
	        },
	        
	        /**
	         * 计算标签显示挑选间隔
	         */
	        _getInterval : function () {
	            var interval   = this.option.axisLabel.interval;
	            if (interval == 'auto') {
	                // 麻烦的自适应计算
	                var fontSize = this.option.axisLabel.textStyle.fontSize;
	                var data = this.option.data;
	                var dataLength = this.option.data.length;

	                if (this.isHorizontal()) {
	                    // 横向
	                    if (dataLength > 3) {
	                        var gap = this.getGap();
	                        var isEnough = false;
	                        var labelSpace;
	                        var labelSize;
	                        var step = Math.floor(0.5 / gap);
	                        step = step < 1 ? 1 : step;
	                        interval = Math.floor(15 / gap);
	                        while (!isEnough && interval < dataLength) {
	                            interval += step;
	                            isEnough = true;
	                            labelSpace = Math.floor(gap * interval); // 标签左右至少间隔为3px
	                            for (var i = Math.floor((dataLength - 1)/ interval) * interval; 
	                                 i >= 0; i -= interval
	                             ) {
	                                if (this.option.axisLabel.rotate !== 0) {
	                                    // 有旋转
	                                    labelSize = fontSize;
	                                }
	                                else if (data[i].textStyle) {
	                                    labelSize = zrArea.getTextWidth(
	                                        this._getReformedLabel(i),
	                                        this.getFont(
	                                            zrUtil.merge(
	                                                data[i].textStyle,
	                                                this.option.axisLabel.textStyle
	                                           )
	                                        )
	                                    );
	                                }
	                                else {
	                                    /*
	                                    labelSize = zrArea.getTextWidth(
	                                        this._getReformedLabel(i),
	                                        font
	                                    );
	                                    */
	                                    // 不定义data级特殊文本样式，用fontSize优化getTextWidth
	                                    var label = this._getReformedLabel(i) + '';
	                                    var wLen = (label.match(/\w/g) || '').length;
	                                    var oLen = label.length - wLen;
	                                    labelSize = wLen * fontSize * 2 / 3 + oLen * fontSize;
	                                }

	                                if (labelSpace < labelSize) {
	                                    // 放不下，中断循环让interval++
	                                    isEnough = false;
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    else {
	                        // 少于3个则全部显示
	                        interval = 1;
	                    }
	                }
	                else {
	                    // 纵向
	                    if (dataLength > 3) {
	                        var gap = this.getGap();
	                        interval = Math.floor(11 / gap);
	                        // 标签上下至少间隔为3px
	                        while ((gap * interval - 6) < fontSize
	                                && interval < dataLength
	                        ) {
	                            interval++;
	                        }
	                    }
	                    else {
	                        // 少于3个则全部显示
	                        interval = 1;
	                    }
	                }
	            }
	            else {
	                // 用户自定义间隔，支持funtion
	                interval = typeof interval == 'function' ? 1 : (interval - 0 + 1);
	            }

	            return interval;
	        },
	        
	        /**
	         * 绘制图形
	         */
	        _buildShape : function () {
	            // 标签显示的挑选间隔
	            this._interval = this._getInterval();
	            if (!this.option.show) {
	                return;
	            }
	            this.option.splitArea.show && this._buildSplitArea();
	            this.option.splitLine.show && this._buildSplitLine();
	            this.option.axisLine.show && this._buildAxisLine();
	            this.option.axisTick.show && this._buildAxisTick();
	            this.option.axisLabel.show && this._buildAxisLabel();

	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                this.zr.addShape(this.shapeList[i]);
	            }
	        },

	        // 小标记
	        _buildAxisTick : function () {
	            var axShape;
	            var data       = this.option.data;
	            var dataLength = this.option.data.length;
	            var tickOption = this.option.axisTick;
	            var length     = tickOption.length;
	            var color      = tickOption.lineStyle.color;
	            var lineWidth  = tickOption.lineStyle.width;
	            var intervalFunction = typeof tickOption.interval == 'function'
	                                   ? tickOption.interval 
	                                   : tickOption.interval == 'auto'
	                                     ? typeof this.option.axisLabel.interval == 'function'
	                                       ? this.option.axisLabel.interval : false
	                                     : false;
	            var interval   = intervalFunction
	                             ? 1
	                             : tickOption.interval == 'auto' 
	                               ? this._interval
	                               : (tickOption.interval - 0 + 1);
	            var onGap      = tickOption.onGap;
	            var optGap     = onGap 
	                             ? (this.getGap() / 2) 
	                             : typeof onGap == 'undefined'
	                                   ? (this.option.boundaryGap ? (this.getGap() / 2) : 0)
	                                   : 0;
	            var startIndex = optGap > 0 ? -interval : 0;                       
	            if (this.isHorizontal()) {
	                // 横向
	                var yPosition = this.option.position == 'bottom'
	                        ? (tickOption.inside 
	                           ? (this.grid.getYend() - length - 1) : (this.grid.getYend() + 1))
	                        : (tickOption.inside 
	                           ? (this.grid.getY() + 1) : (this.grid.getY() - length - 1));
	                var x;
	                for (var i = startIndex; i < dataLength; i += interval) {
	                    if (intervalFunction && !intervalFunction(i, data[i])) {
	                        // 回调并且回调返回false则跳过渲染
	                        continue;
	                    }
	                    // 亚像素优化
	                    x = this.subPixelOptimize(
	                        this.getCoordByIndex(i) + (i >= 0 ? optGap : 0), lineWidth
	                    );
	                    axShape = {
	                        _axisShape : 'axisTick',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable : false,
	                        style : {
	                            xStart : x,
	                            yStart : yPosition,
	                            xEnd : x,
	                            yEnd : yPosition + length,
	                            strokeColor : color,
	                            lineWidth : lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	            else {
	                // 纵向
	                var xPosition = this.option.position == 'left'
	                    ? (tickOption.inside 
	                       ? (this.grid.getX() + 1) : (this.grid.getX() - length - 1))
	                    : (tickOption.inside 
	                       ? (this.grid.getXend() - length - 1) : (this.grid.getXend() + 1));
	                        
	                var y;
	                for (var i = startIndex; i < dataLength; i += interval) {
	                    if (intervalFunction && !intervalFunction(i, data[i])) {
	                        // 回调并且回调返回false则中断渲染
	                        continue;
	                    }
	                    // 亚像素优化
	                    y = this.subPixelOptimize(
	                        this.getCoordByIndex(i) - (i >= 0 ? optGap : 0), lineWidth
	                    );
	                    axShape = {
	                        _axisShape : 'axisTick',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable : false,
	                        style : {
	                            xStart : xPosition,
	                            yStart : y,
	                            xEnd : xPosition + length,
	                            yEnd : y,
	                            strokeColor : color,
	                            lineWidth : lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	        },

	        // 坐标轴文本
	        _buildAxisLabel : function () {
	            var axShape;
	            var data       = this.option.data;
	            var dataLength = this.option.data.length;
	            var labelOption = this.option.axisLabel;
	            var rotate     = labelOption.rotate;
	            var margin     = labelOption.margin;
	            var clickable  = labelOption.clickable;
	            var textStyle  = labelOption.textStyle;
	            var intervalFunction = typeof labelOption.interval == 'function'
	                                   ? labelOption.interval : false;
	            var dataTextStyle;

	            if (this.isHorizontal()) {
	                // 横向
	                var yPosition;
	                var baseLine;
	                if (this.option.position == 'bottom') {
	                    yPosition = this.grid.getYend() + margin;
	                    baseLine = 'top';
	                }
	                else {
	                    yPosition = this.grid.getY() - margin;
	                    baseLine = 'bottom';
	                }

	                for (var i = 0; i < dataLength; i += this._interval) {
	                    if ((intervalFunction && !intervalFunction(i, data[i])) 
	                        // 回调并且回调返回false则中断渲染
	                        || this._getReformedLabel(i) === '' // 空文本优化
	                    ) {
	                        continue;
	                    }
	                    dataTextStyle = zrUtil.merge(
	                        data[i].textStyle || {},
	                        textStyle
	                    );
	                    axShape = {
	                        // shape : 'text',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase() + 3,
	                        hoverable : false,
	                        style : {
	                            x : this.getCoordByIndex(i),
	                            y : yPosition,
	                            color : dataTextStyle.color,
	                            text : this._getReformedLabel(i),
	                            textFont : this.getFont(dataTextStyle),
	                            textAlign : dataTextStyle.align || 'center',
	                            textBaseline : dataTextStyle.baseline || baseLine
	                        }
	                    };
	                    if (rotate) {
	                        axShape.style.textAlign = rotate > 0
	                                                  ? (this.option.position == 'bottom'
	                                                    ? 'right' : 'left')
	                                                  : (this.option.position == 'bottom'
	                                                    ? 'left' : 'right');
	                        axShape.rotation = [
	                            rotate * Math.PI / 180,
	                            axShape.style.x,
	                            axShape.style.y
	                        ];
	                    }
	                    this.shapeList.push(new TextShape(
	                        this._axisLabelClickable(clickable, axShape)
	                    ));
	                }
	            }
	            else {
	                // 纵向
	                var xPosition;
	                var align;
	                if (this.option.position == 'left') {
	                    xPosition = this.grid.getX() - margin;
	                    align = 'right';
	                }
	                else {
	                    xPosition = this.grid.getXend() + margin;
	                    align = 'left';
	                }

	                for (var i = 0; i < dataLength; i += this._interval) {
	                    if ((intervalFunction && !intervalFunction(i, data[i])) 
	                        // 回调并且回调返回false则中断渲染
	                        || this._getReformedLabel(i) === '' // 空文本优化
	                    ) {
	                        continue;
	                    }
	                    dataTextStyle = zrUtil.merge(
	                        data[i].textStyle || {},
	                        textStyle
	                    );
	                    axShape = {
	                        // shape : 'text',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase() + 3,
	                        hoverable : false,
	                        style : {
	                            x : xPosition,
	                            y : this.getCoordByIndex(i),
	                            color : dataTextStyle.color,
	                            text : this._getReformedLabel(i),
	                            textFont : this.getFont(dataTextStyle),
	                            textAlign : dataTextStyle.align || align,
	                            textBaseline : dataTextStyle.baseline 
	                                           || (i === 0 && this.option.name !== '')
	                                               ? 'bottom'
	                                               : (i == (dataLength - 1) 
	                                                  && this.option.name !== '')
	                                                 ? 'top'
	                                                 : 'middle'
	                        }
	                    };
	                    
	                    if (rotate) {
	                        axShape.rotation = [
	                            rotate * Math.PI / 180,
	                            axShape.style.x,
	                            axShape.style.y
	                        ];
	                    }
	                    this.shapeList.push(new TextShape(
	                        this._axisLabelClickable(clickable, axShape)
	                    ));
	                }
	            }
	        },
	        
	        _buildSplitLine : function () {
	            var axShape;
	            var data        = this.option.data;
	            var dataLength  = this.option.data.length;
	            var sLineOption = this.option.splitLine;
	            var lineType    = sLineOption.lineStyle.type;
	            var lineWidth   = sLineOption.lineStyle.width;
	            var color       = sLineOption.lineStyle.color;
	            color = color instanceof Array ? color : [color];
	            var colorLength = color.length;
	            
	            // splitLine随axisLable
	            var intervalFunction = typeof this.option.axisLabel.interval == 'function'
	                                   ? this.option.axisLabel.interval : false;

	            var onGap      = sLineOption.onGap;
	            var optGap     = onGap 
	                             ? (this.getGap() / 2) 
	                             : typeof onGap == 'undefined'
	                                   ? (this.option.boundaryGap ? (this.getGap() / 2) : 0)
	                                   : 0;
	            dataLength -= (onGap || (typeof onGap == 'undefined' && this.option.boundaryGap)) 
	                          ? 1 : 0;
	            if (this.isHorizontal()) {
	                // 横向
	                var sy = this.grid.getY();
	                var ey = this.grid.getYend();
	                var x;

	                for (var i = 0; i < dataLength; i += this._interval) {
	                    if (intervalFunction && !intervalFunction(i, data[i])) {
	                        // 回调并且回调返回false则跳过渲染
	                        continue;
	                    }
	                    // 亚像素优化
	                    x = this.subPixelOptimize(
	                        this.getCoordByIndex(i) + optGap, lineWidth
	                    );
	                    axShape = {
	                        // shape : 'line',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable : false,
	                        style : {
	                            xStart : x,
	                            yStart : sy,
	                            xEnd : x,
	                            yEnd : ey,
	                            strokeColor : color[(i / this._interval) % colorLength],
	                            lineType : lineType,
	                            lineWidth : lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }

	            }
	            else {
	                // 纵向
	                var sx = this.grid.getX();
	                var ex = this.grid.getXend();
	                var y;

	                for (var i = 0; i < dataLength; i += this._interval) {
	                    if (intervalFunction && !intervalFunction(i, data[i])) {
	                        // 回调并且回调返回false则跳过渲染
	                        continue;
	                    }
	                    // 亚像素优化
	                    y = this.subPixelOptimize(
	                        this.getCoordByIndex(i) - optGap, lineWidth
	                    );
	                    axShape = {
	                        // shape : 'line',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable : false,
	                        style : {
	                            xStart : sx,
	                            yStart : y,
	                            xEnd : ex,
	                            yEnd : y,
	                            strokeColor : color[(i / this._interval) % colorLength],
	                            lineType : lineType,
	                            lineWidth : lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	        },

	        _buildSplitArea : function () {
	            var axShape;
	            var data        = this.option.data;
	            var sAreaOption = this.option.splitArea;
	            var color = sAreaOption.areaStyle.color;
	            if (!(color instanceof Array)) {
	                // 非数组一律认为是单一颜色的字符串，单一颜色则用一个背景，颜色错误不负责啊！！！
	                axShape = {
	                    // shape : 'rectangle',
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    hoverable : false,
	                    style : {
	                        x : this.grid.getX(),
	                        y : this.grid.getY(),
	                        width : this.grid.getWidth(),
	                        height : this.grid.getHeight(),
	                        color : color
	                        // type : this.option.splitArea.areaStyle.type,
	                    }
	                };
	                this.shapeList.push(new RectangleShape(axShape));
	            }
	            else {
	                // 多颜色
	                var colorLength = color.length;
	                var dataLength  = this.option.data.length;

	                // splitArea随axisLable
	                var intervalFunction = typeof this.option.axisLabel.interval == 'function'
	                                       ? this.option.axisLabel.interval : false;
	        
	                var onGap      = sAreaOption.onGap;
	                var optGap     = onGap 
	                                 ? (this.getGap() / 2) 
	                                 : typeof onGap == 'undefined'
	                                       ? (this.option.boundaryGap ? (this.getGap() / 2) : 0)
	                                       : 0;
	                if (this.isHorizontal()) {
	                    // 横向
	                    var y = this.grid.getY();
	                    var height = this.grid.getHeight();
	                    var lastX = this.grid.getX();
	                    var curX;
	    
	                    for (var i = 0; i <= dataLength; i += this._interval) {
	                        if (intervalFunction && !intervalFunction(i, data[i]) && i < dataLength) {
	                            // 回调并且回调返回false则跳过渲染
	                            continue;
	                        }
	                        curX = i < dataLength
	                               ? (this.getCoordByIndex(i) + optGap)
	                               : this.grid.getXend();
	                        axShape = {
	                            // shape : 'rectangle',
	                            zlevel: this.getZlevelBase(),
	                            z: this.getZBase(),
	                            hoverable : false,
	                            style : {
	                                x : lastX,
	                                y : y,
	                                width : curX - lastX,
	                                height : height,
	                                color : color[(i / this._interval) % colorLength]
	                                // type : this.option.splitArea.areaStyle.type,
	                            }
	                        };
	                        this.shapeList.push(new RectangleShape(axShape));
	                        lastX = curX;
	                    }
	                }
	                else {
	                    // 纵向
	                    var x = this.grid.getX();
	                    var width = this.grid.getWidth();
	                    var lastYend = this.grid.getYend();
	                    var curY;
	    
	                    for (var i = 0; i <= dataLength; i += this._interval) {
	                        if (intervalFunction && !intervalFunction(i, data[i]) && i < dataLength) {
	                            // 回调并且回调返回false则跳过渲染
	                            continue;
	                        }
	                        curY = i < dataLength
	                               ? (this.getCoordByIndex(i) - optGap)
	                               : this.grid.getY();
	                        axShape = {
	                            // shape : 'rectangle',
	                            zlevel: this.getZlevelBase(),
	                            z: this.getZBase(),
	                            hoverable : false,
	                            style : {
	                                x : x,
	                                y : curY,
	                                width : width,
	                                height : lastYend - curY,
	                                color : color[(i / this._interval) % colorLength]
	                                // type : this.option.splitArea.areaStyle.type
	                            }
	                        };
	                        this.shapeList.push(new RectangleShape(axShape));
	                        lastYend = curY;
	                    }
	                }
	            }
	        },

	        /**
	         * 刷新
	         */
	        refresh : function (newOption) {
	            if (newOption) {
	                this.option = this.reformOption(newOption);
	                // 通用字体设置
	                this.option.axisLabel.textStyle = this.getTextStyle(
	                    this.option.axisLabel.textStyle
	                );
	            }
	            this.clear();
	            this._buildShape();
	        },

	        /**
	         * 返回间隔
	         */
	        getGap : function () {
	            var dataLength = this.option.data.length;
	            var total = this.isHorizontal()
	                        ? this.grid.getWidth()
	                        : this.grid.getHeight();
	            if (this.option.boundaryGap) {              // 留空
	                return total / dataLength;
	            }
	            else {                                      // 顶头
	                return total / (dataLength > 1 ? (dataLength - 1) : 1);
	            }
	        },

	        // 根据值换算位置
	        getCoord : function (value) {
	            var data = this.option.data;
	            var dataLength = data.length;
	            var gap = this.getGap();
	            var position = this.option.boundaryGap ? (gap / 2) : 0;

	            for (var i = 0; i < dataLength; i++) {
	                if (this.getDataFromOption(data[i]) == value) {
	                    if (this.isHorizontal()) {
	                        // 横向
	                        position = this.grid.getX() + position;
	                    }
	                    else {
	                        // 纵向
	                        position = this.grid.getYend() - position;
	                    }
	                    
	                    return position;
	                    // Math.floor可能引起一些偏差，但性能会更好
	                    /* 准确更重要
	                    return (i === 0 || i == dataLength - 1)
	                           ? position
	                           : Math.floor(position);
	                    */
	                }
	                position += gap;
	            }
	        },

	        // 根据类目轴数据索引换算位置
	        getCoordByIndex : function (dataIndex) {
	            if (dataIndex < 0) {
	                if (this.isHorizontal()) {
	                    return this.grid.getX();
	                }
	                else {
	                    return this.grid.getYend();
	                }
	            }
	            else if (dataIndex > this.option.data.length - 1) {
	                if (this.isHorizontal()) {
	                    return this.grid.getXend();
	                }
	                else {
	                    return this.grid.getY();
	                }
	            }
	            else {
	                var gap = this.getGap();
	                var position = this.option.boundaryGap ? (gap / 2) : 0;
	                position += dataIndex * gap;
	                
	                if (this.isHorizontal()) {
	                    // 横向
	                    position = this.grid.getX() + position;
	                }
	                else {
	                    // 纵向
	                    position = this.grid.getYend() - position;
	                }
	                
	                return position;
	                /* 准确更重要
	                return (dataIndex === 0 || dataIndex == this.option.data.length - 1)
	                       ? position
	                       : Math.floor(position);
	                */
	            }
	        },

	        // 根据类目轴数据索引换算类目轴名称
	        getNameByIndex : function (dataIndex) {
	            return this.getDataFromOption(this.option.data[dataIndex]);
	        },
	        
	        // 根据类目轴名称换算类目轴数据索引
	        getIndexByName : function (name) {
	            var data = this.option.data;
	            var dataLength = data.length;

	            for (var i = 0; i < dataLength; i++) {
	                if (this.getDataFromOption(data[i]) == name) {
	                    return i;
	                }
	            }
	            
	            return -1;
	        },
	        
	        // 根据位置换算值
	        getValueFromCoord : function() {
	            return '';
	        },

	        /**
	         * 根据类目轴数据索引返回是否为主轴线
	         * @param {number} dataIndex 类目轴数据索引
	         * @return {boolean} 是否为主轴
	         */
	        isMainAxis : function (dataIndex) {
	            return dataIndex % this._interval === 0;
	        }
	    };
	    
	    zrUtil.inherits(CategoryAxis, Base);
	    
	    __webpack_require__(427).define('categoryAxis', CategoryAxis);
	    
	    return CategoryAxis;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件： 数值轴
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(419);

	    // 图形依赖
	    var TextShape = __webpack_require__(381);
	    var LineShape = __webpack_require__(404);
	    var RectangleShape = __webpack_require__(387);

	    var ecConfig = __webpack_require__(366);
	    // 数值型坐标轴默认参数
	    ecConfig.valueAxis = {
	        zlevel: 0,                  // 一级层叠
	        z: 0,                       // 二级层叠
	        show: true,
	        position: 'left',      // 位置
	        name: '',              // 坐标轴名字，默认为空
	        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
	        nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式
	        boundaryGap: [0, 0],   // 数值起始和结束两端空白策略
	        // min: null,          // 最小值
	        // max: null,          // 最大值
	        // scale: false,       // 脱离0值比例，放大聚焦到最终_min，_max区间
	        // splitNumber: 5,        // 分割段数，默认为5
	        axisLine: {            // 坐标轴线
	            show: true,        // 默认显示，属性show控制显示与否
	            onZero: true,
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#48b',
	                width: 2,
	                type: 'solid'
	            }
	        },
	        axisTick: {            // 坐标轴小标记
	            show: false,       // 属性show控制显示与否，默认不显示
	            inside: false,     // 控制小标记是否在grid里
	            length :5,         // 属性length控制线长
	            lineStyle: {       // 属性lineStyle控制线条样式
	                color: '#333',
	                width: 1
	            }
	        },
	        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	            show: true,
	            rotate: 0,
	            margin: 8,
	            // clickable: false,
	            // formatter: null,
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: '#333'
	            }
	        },
	        splitLine: {           // 分隔线
	            show: true,        // 默认显示，属性show控制显示与否
	            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                color: ['#ccc'],
	                width: 1,
	                type: 'solid'
	            }
	        },
	        splitArea: {           // 分隔区域
	            show: false,       // 默认不显示，属性show控制显示与否
	            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
	                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
	            }
	        }
	    };

	    var ecDate = __webpack_require__(536);
	    var zrUtil = __webpack_require__(367);

	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 类目轴参数
	     * @param {Object} component 组件
	     * @param {Array} series 数据对象
	     */
	    function ValueAxis(ecTheme, messageCenter, zr, option, myChart, axisBase, series) {
	        if (!series || series.length === 0) {
	            console.err('option.series.length == 0.');
	            return;
	        }

	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);

	        this.series = series;
	        this.grid = this.component.grid;

	        for (var method in axisBase) {
	            this[method] = axisBase[method];
	        }

	        this.refresh(option, series);
	    }

	    ValueAxis.prototype = {
	        type: ecConfig.COMPONENT_TYPE_AXIS_VALUE,

	        _buildShape: function () {
	            this._hasData = false;
	            this._calculateValue();
	            if (!this._hasData || !this.option.show) {
	                return;
	            }

	            this.option.splitArea.show && this._buildSplitArea();
	            this.option.splitLine.show && this._buildSplitLine();
	            this.option.axisLine.show && this._buildAxisLine();
	            this.option.axisTick.show && this._buildAxisTick();
	            this.option.axisLabel.show && this._buildAxisLabel();

	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                this.zr.addShape(this.shapeList[i]);
	            }
	        },

	        // 小标记
	        _buildAxisTick: function () {
	            var axShape;
	            var data       = this._valueList;
	            var dataLength = this._valueList.length;
	            var tickOption = this.option.axisTick;
	            var length     = tickOption.length;
	            var color      = tickOption.lineStyle.color;
	            var lineWidth  = tickOption.lineStyle.width;

	            if (this.isHorizontal()) {
	                // 横向
	                var yPosition = this.option.position === 'bottom'
	                        ? (tickOption.inside
	                           ? (this.grid.getYend() - length - 1) : (this.grid.getYend()) + 1)
	                        : (tickOption.inside
	                           ? (this.grid.getY() + 1) : (this.grid.getY() - length - 1));
	                var x;
	                for (var i = 0; i < dataLength; i++) {
	                    // 亚像素优化
	                    x = this.subPixelOptimize(this.getCoord(data[i]), lineWidth);
	                    axShape = {
	                        _axisShape: 'axisTick',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable: false,
	                        style: {
	                            xStart: x,
	                            yStart: yPosition,
	                            xEnd: x,
	                            yEnd: yPosition + length,
	                            strokeColor: color,
	                            lineWidth: lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	            else {
	                // 纵向
	                var xPosition = this.option.position === 'left'
	                    ? (tickOption.inside
	                       ? (this.grid.getX() + 1) : (this.grid.getX() - length - 1))
	                    : (tickOption.inside
	                       ? (this.grid.getXend() - length - 1) : (this.grid.getXend() + 1));

	                var y;
	                for (var i = 0; i < dataLength; i++) {
	                    // 亚像素优化
	                    y = this.subPixelOptimize(this.getCoord(data[i]), lineWidth);
	                    axShape = {
	                        _axisShape: 'axisTick',
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable: false,
	                        style: {
	                            xStart: xPosition,
	                            yStart: y,
	                            xEnd: xPosition + length,
	                            yEnd: y,
	                            strokeColor: color,
	                            lineWidth: lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	        },

	        // 坐标轴文本
	        _buildAxisLabel: function () {
	            var axShape;
	            var data       = this._valueList;
	            var dataLength = this._valueList.length;
	            var rotate     = this.option.axisLabel.rotate;
	            var margin     = this.option.axisLabel.margin;
	            var clickable  = this.option.axisLabel.clickable;
	            var textStyle  = this.option.axisLabel.textStyle;

	            if (this.isHorizontal()) {
	                // 横向
	                var yPosition;
	                var baseLine;
	                if (this.option.position === 'bottom') {
	                    yPosition = this.grid.getYend() + margin;
	                    baseLine = 'top';
	                }
	                else {
	                    yPosition = this.grid.getY() - margin;
	                    baseLine = 'bottom';
	                }

	                for (var i = 0; i < dataLength; i++) {
	                    axShape = {
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase() +3,
	                        hoverable: false,
	                        style: {
	                            x: this.getCoord(data[i]),
	                            y: yPosition,
	                            color: typeof textStyle.color === 'function'
	                                   ? textStyle.color(data[i]) : textStyle.color,
	                            text: this._valueLabel[i],
	                            textFont: this.getFont(textStyle),
	                            textAlign: textStyle.align || 'center',
	                            textBaseline: textStyle.baseline || baseLine
	                        }
	                    };
	                    if (rotate) {
	                        axShape.style.textAlign = rotate > 0
	                                                  ? (this.option.position === 'bottom'
	                                                    ? 'right' : 'left')
	                                                  : (this.option.position === 'bottom'
	                                                    ? 'left' : 'right');
	                        axShape.rotation = [
	                            rotate * Math.PI / 180,
	                            axShape.style.x,
	                            axShape.style.y
	                        ];
	                    }
	                    this.shapeList.push(new TextShape(
	                        this._axisLabelClickable(clickable, axShape)
	                    ));
	                }
	            }
	            else {
	                // 纵向
	                var xPosition;
	                var align;
	                if (this.option.position === 'left') {
	                    xPosition = this.grid.getX() - margin;
	                    align = 'right';
	                }
	                else {
	                    xPosition = this.grid.getXend() + margin;
	                    align = 'left';
	                }

	                for (var i = 0; i < dataLength; i++) {
	                    axShape = {
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase() + 3,
	                        hoverable: false,
	                        style: {
	                            x: xPosition,
	                            y: this.getCoord(data[i]),
	                            color: typeof textStyle.color === 'function'
	                                   ? textStyle.color(data[i]) : textStyle.color,
	                            text: this._valueLabel[i],
	                            textFont: this.getFont(textStyle),
	                            textAlign: textStyle.align || align,
	                            textBaseline: textStyle.baseline
	                                          || (
	                                              (i === 0 && this.option.name !== '')
	                                              ? 'bottom'
	                                                : (i === dataLength - 1 && this.option.name !== '') ? 'top' : 'middle'
	                                          )
	                        }
	                    };

	                    if (rotate) {
	                        axShape.rotation = [
	                            rotate * Math.PI / 180,
	                            axShape.style.x,
	                            axShape.style.y
	                        ];
	                    }
	                    this.shapeList.push(new TextShape(
	                        this._axisLabelClickable(clickable, axShape)
	                    ));
	                }
	            }
	        },

	        _buildSplitLine: function () {
	            var axShape;
	            var data        = this._valueList;
	            var dataLength  = this._valueList.length;
	            var sLineOption = this.option.splitLine;
	            var lineType    = sLineOption.lineStyle.type;
	            var lineWidth   = sLineOption.lineStyle.width;
	            var color       = sLineOption.lineStyle.color;
	            color = color instanceof Array ? color : [color];
	            var colorLength = color.length;

	            if (this.isHorizontal()) {
	                // 横向
	                var sy = this.grid.getY();
	                var ey = this.grid.getYend();
	                var x;

	                for (var i = 0; i < dataLength; i++) {
	                    // 亚像素优化
	                    x = this.subPixelOptimize(this.getCoord(data[i]), lineWidth);
	                    axShape = {
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable: false,
	                        style: {
	                            xStart: x,
	                            yStart: sy,
	                            xEnd: x,
	                            yEnd: ey,
	                            strokeColor: color[i % colorLength],
	                            lineType: lineType,
	                            lineWidth: lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }

	            }
	            else {
	                // 纵向
	                var sx = this.grid.getX();
	                var ex = this.grid.getXend();
	                var y;

	                for (var i = 0; i < dataLength; i++) {
	                    // 亚像素优化
	                    y = this.subPixelOptimize(this.getCoord(data[i]), lineWidth);
	                    axShape = {
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        hoverable: false,
	                        style: {
	                            xStart: sx,
	                            yStart: y,
	                            xEnd: ex,
	                            yEnd: y,
	                            strokeColor: color[i % colorLength],
	                            lineType: lineType,
	                            lineWidth: lineWidth
	                        }
	                    };
	                    this.shapeList.push(new LineShape(axShape));
	                }
	            }
	        },

	        _buildSplitArea: function () {
	            var axShape;
	            var color = this.option.splitArea.areaStyle.color;

	            if (!(color instanceof Array)) {
	                // 非数组一律认为是单一颜色的字符串，单一颜色则用一个背景，颜色错误不负责啊！！！
	                axShape = {
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    hoverable: false,
	                    style: {
	                        x: this.grid.getX(),
	                        y: this.grid.getY(),
	                        width: this.grid.getWidth(),
	                        height: this.grid.getHeight(),
	                        color: color
	                        // type: this.option.splitArea.areaStyle.type,
	                    }
	                };
	                this.shapeList.push(new RectangleShape(axShape));
	            }
	            else {
	                // 多颜色
	                var colorLength = color.length;
	                var data        = this._valueList;
	                var dataLength  = this._valueList.length;

	                if (this.isHorizontal()) {
	                    // 横向
	                    var y = this.grid.getY();
	                    var height = this.grid.getHeight();
	                    var lastX = this.grid.getX();
	                    var curX;

	                    for (var i = 0; i <= dataLength; i++) {
	                        curX = i < dataLength
	                               ? this.getCoord(data[i])
	                               : this.grid.getXend();
	                        axShape = {
	                            zlevel: this.getZlevelBase(),
	                            z: this.getZBase(),
	                            hoverable: false,
	                            style: {
	                                x: lastX,
	                                y: y,
	                                width: curX - lastX,
	                                height: height,
	                                color: color[i % colorLength]
	                                // type: this.option.splitArea.areaStyle.type,
	                            }
	                        };
	                        this.shapeList.push(new RectangleShape(axShape));
	                        lastX = curX;
	                    }
	                }
	                else {
	                    // 纵向
	                    var x = this.grid.getX();
	                    var width = this.grid.getWidth();
	                    var lastYend = this.grid.getYend();
	                    var curY;

	                    for (var i = 0; i <= dataLength; i++) {
	                        curY = i < dataLength
	                               ? this.getCoord(data[i])
	                               : this.grid.getY();
	                        axShape = {
	                            zlevel: this.getZlevelBase(),
	                            z: this.getZBase(),
	                            hoverable: false,
	                            style: {
	                                x: x,
	                                y: curY,
	                                width: width,
	                                height: lastYend - curY,
	                                color: color[i % colorLength]
	                                // type: this.option.splitArea.areaStyle.type
	                            }
	                        };
	                        this.shapeList.push(new RectangleShape(axShape));
	                        lastYend = curY;
	                    }
	                }
	            }
	        },

	        /**
	         * 极值计算
	         */
	        _calculateValue: function () {
	            if (isNaN(this.option.min - 0) || isNaN(this.option.max - 0)) {
	                // 有一个没指定都得算
	                // 数据整形
	                var data = {};          // 整形后数据抽取
	                var xIdx;
	                var yIdx;
	                var legend = this.component.legend;
	                for (var i = 0, l = this.series.length; i < l; i++) {
	                    if (this.series[i].type != ecConfig.CHART_TYPE_LINE
	                        && this.series[i].type != ecConfig.CHART_TYPE_BAR
	                        && this.series[i].type != ecConfig.CHART_TYPE_SCATTER
	                        && this.series[i].type != ecConfig.CHART_TYPE_K
	                        && this.series[i].type != ecConfig.CHART_TYPE_EVENTRIVER
	                    ) {
	                        // 非坐标轴支持的不算极值
	                        continue;
	                    }
	                    // 请允许我写开，跟上面一个不是一样东西
	                    if (legend && !legend.isSelected(this.series[i].name)){
	                        continue;
	                    }

	                    // 不指定默认为第一轴线
	                    xIdx = this.series[i].xAxisIndex || 0;
	                    yIdx = this.series[i].yAxisIndex || 0;
	                    if ((this.option.xAxisIndex != xIdx)
	                        && (this.option.yAxisIndex != yIdx)
	                    ) {
	                        // 不是自己的数据不计算极值
	                        continue;
	                    }

	                    this._calculSum(data, i);
	                }

	                // 找极值
	                var oriData;            // 原始数据
	                for (var i in data){
	                    oriData = data[i];
	                    for (var j = 0, k = oriData.length; j < k; j++) {
	                        if (!isNaN(oriData[j])){
	                            this._hasData = true;
	                            this._min = oriData[j];
	                            this._max = oriData[j];
	                            break;
	                        }
	                    }
	                    if (this._hasData) {
	                        break;
	                    }
	                }
	                for (var i in data){
	                    oriData = data[i];
	                    for (var j = 0, k = oriData.length; j < k; j++) {
	                        if (!isNaN(oriData[j])){
	                            this._min = Math.min(this._min, oriData[j]);
	                            this._max = Math.max(this._max, oriData[j]);
	                        }
	                    }
	                }

	                // console.log(this._min,this._max,'vvvvv111111',this.option.type)
	                // log情况暂时禁用boundaryGap。
	                var boundaryGap = this.option.type !== 'log' ? this.option.boundaryGap : [0, 0];
	                var gap = Math.abs(this._max - this._min);
	                this._min = isNaN(this.option.min - 0)
	                       ? (this._min - Math.abs(gap * boundaryGap[0]))
	                       : (this.option.min - 0);    // 指定min忽略boundaryGay[0]

	                this._max = isNaN(this.option.max - 0)
	                       ? (this._max + Math.abs(gap * boundaryGap[1]))
	                       : (this.option.max - 0);    // 指定max忽略boundaryGay[1]
	                if (this._min === this._max) {
	                    if (this._max === 0) {
	                        // 修复全0数据
	                        this._max = 1;
	                    }
	                    // 修复最大值==最小值时数据整形
	                    else if (this._max > 0) {
	                        this._min = this._max / this.option.splitNumber != null ? this.option.splitNumber : 5;
	                    }
	                    else { // this._max < 0
	                        this._max = this._max / this.option.splitNumber != null ? this.option.splitNumber : 5;
	                    }
	                }

	                if (this.option.type === 'time') {
	                    this._reformTimeValue();
	                }
	                else if (this.option.type === 'log') {
	                    this._reformLogValue();
	                }
	                else {
	                    this._reformValue(this.option.scale);
	                }
	            }
	            else {
	                this._hasData = true;
	                // 用户指定min max就不多管闲事了
	                this._min = this.option.min - 0;    // 指定min忽略boundaryGay[0]
	                this._max = this.option.max - 0;    // 指定max忽略boundaryGay[1]

	                if (this.option.type === 'time') {
	                    this._reformTimeValue();
	                }
	                else if (this.option.type === 'log') {
	                    this._reformLogValue();
	                }
	                else {
	                    this._customerValue();
	                }
	            }
	        },

	        /**
	         * 内部使用，计算某系列下的堆叠和
	         */
	        _calculSum: function (data, i) {
	            var key = this.series[i].name || 'kener';
	            var value;
	            var oriData;
	            if (!this.series[i].stack) {
	                data[key] = data[key] || [];
	                if (this.series[i].type != ecConfig.CHART_TYPE_EVENTRIVER) {
	                    oriData = this.series[i].data;
	                    for (var j = 0, k = oriData.length; j < k; j++) {
	                        value = this.getDataFromOption(oriData[j]);
	                        if (this.series[i].type === ecConfig.CHART_TYPE_K) {
	                            data[key].push(value[0]);
	                            data[key].push(value[1]);
	                            data[key].push(value[2]);
	                            data[key].push(value[3]);
	                        }
	                        else if (value instanceof Array) {
	                            // scatter 、 不等距 line bar
	                            if (this.option.xAxisIndex != -1) {
	                                data[key].push(
	                                    this.option.type != 'time'
	                                    ? value[0] : ecDate.getNewDate(value[0])
	                                );
	                            }
	                            if (this.option.yAxisIndex != -1) {
	                                data[key].push(
	                                    this.option.type != 'time'
	                                    ? value[1] : ecDate.getNewDate(value[1])
	                                );
	                            }
	                        }
	                        else {
	                            data[key].push(value);
	                        }
	                    }
	                }
	                else {
	                    // eventRiver
	                    oriData = this.series[i].data;
	                    for (var j = 0, k = oriData.length; j < k; j++) {
	                        var evolution = oriData[j].evolution;
	                        for (var m = 0, n = evolution.length; m < n; m++) {
	                            data[key].push(ecDate.getNewDate(evolution[m].time));
	                        }
	                    }
	                }
	            }
	            else {
	                // 堆积数据，需要区分正负向堆积
	                var keyP = '__Magic_Key_Positive__' + this.series[i].stack;
	                var keyN = '__Magic_Key_Negative__' + this.series[i].stack;
	                data[keyP] = data[keyP] || [];
	                data[keyN] = data[keyN] || [];
	                data[key] = data[key] || [];  // scale下还需要记录每一个量
	                oriData = this.series[i].data;
	                for (var j = 0, k = oriData.length; j < k; j++) {
	                    value = this.getDataFromOption(oriData[j]);
	                    if (value === '-') {
	                        continue;
	                    }
	                    value = value - 0;
	                    if (value >= 0) {
	                        if (data[keyP][j] != null) {
	                            data[keyP][j] += value;
	                        }
	                        else {
	                            data[keyP][j] = value;
	                        }
	                    }
	                    else {
	                        if (data[keyN][j] != null) {
	                            data[keyN][j] += value;
	                        }
	                        else {
	                            data[keyN][j] = value;
	                        }
	                    }
	                    if (this.option.scale) {
	                        data[key].push(value);
	                    }
	                }
	            }
	        },

	        /**
	         * 找到原始数据的极值后根据选项整形最终 this._min / this._max / this._valueList
	         * 如果你不知道这个“整形”的用义，请不要试图去理解和修改这个方法！找我也没用，我相信我已经记不起来！
	         * 如果你有更简洁的数学推导欢迎重写，后果自负~
	         *
	         * by kener.linfeng@gmail.com 2013-1-8
	         * --------
	         * 感谢谢世威(https://github.com/i6ma)，终于有人改这个方法了
	         * by Kener 2014-11-6
	         */
	        _reformValue: function (scale) {
	            var smartSteps = __webpack_require__(541);
	            var splitNumber = this.option.splitNumber;

	            // 非scale下双正，修正最小值为0
	            if (!scale && this._min >= 0 && this._max >= 0) {
	                this._min = 0;
	            }
	            // 非scale下双负，修正最大值为0
	            if (!scale && this._min <= 0 && this._max <= 0) {
	                this._max = 0;
	            }

	            var stepOpt = smartSteps(this._min, this._max, splitNumber);
	            splitNumber = splitNumber != null ? splitNumber : stepOpt.secs;
	            //this.option.splitNumber = splitNumber;
	            this._min = stepOpt.min;
	            this._max = stepOpt.max;
	            this._valueList = stepOpt.pnts;
	            this._reformLabelData();
	        },

	        /**
	         * 格式化时间值
	         */
	        _reformTimeValue : function() {
	            var splitNumber = this.option.splitNumber != null ? this.option.splitNumber : 5;

	            // 最优解
	            var curValue = ecDate.getAutoFormatter(this._min, this._max, splitNumber);
	            // 目标
	            var formatter = curValue.formatter;
	            var gapValue = curValue.gapValue;

	            this._valueList = [ecDate.getNewDate(this._min)];
	            var startGap;
	            switch (formatter) {
	                case 'week' :
	                    startGap = ecDate.nextMonday(this._min);
	                    break;
	                case 'month' :
	                    startGap = ecDate.nextNthOnMonth(this._min, 1);
	                    break;
	                case 'quarter' :
	                    startGap = ecDate.nextNthOnQuarterYear(this._min, 1);
	                    break;
	                case 'half-year' :
	                    startGap = ecDate.nextNthOnHalfYear(this._min, 1);
	                    break;
	                case 'year' :
	                    startGap = ecDate.nextNthOnYear(this._min, 1);
	                    break;
	                default :
	                    // 大于2小时需要考虑时区不能直接取整
	                    if (gapValue <= 3600000 * 2) {
	                        startGap = (Math.floor(this._min / gapValue) + 1) * gapValue;
	                    }
	                    else {
	                        startGap = ecDate.getNewDate(this._min - (-gapValue));
	                        startGap.setHours(Math.round(startGap.getHours() / 6) * 6);
	                        startGap.setMinutes(0);
	                        startGap.setSeconds(0);
	                    }
	                    break;
	            }

	            if (startGap - this._min < gapValue / 2) {
	                startGap -= -gapValue;
	            }

	            // console.log(startGap,gapValue,this._min, this._max,formatter)
	            curValue = ecDate.getNewDate(startGap);
	            splitNumber *= 1.5;
	            while (splitNumber-- >= 0) {
	                if (formatter == 'month'
	                    || formatter == 'quarter'
	                    || formatter == 'half-year'
	                    || formatter == 'year'
	                ) {
	                    curValue.setDate(1);
	                }
	                if (this._max - curValue < gapValue / 2) {
	                    break;
	                }
	                this._valueList.push(curValue);
	                curValue = ecDate.getNewDate(curValue - (-gapValue));
	            }
	            this._valueList.push(ecDate.getNewDate(this._max));

	            this._reformLabelData((function (formatterStr) {
	                return function (value) {
	                    return ecDate.format(formatterStr, value);
	                };
	            })(formatter));
	        },

	        _customerValue: function () {
	            var accMath = __webpack_require__(418);
	            var splitNumber = this.option.splitNumber != null ? this.option.splitNumber : 5;
	            var splitGap = (this._max - this._min) / splitNumber;

	            this._valueList = [];
	            for (var i = 0; i <= splitNumber; i++) {
	                this._valueList.push(accMath.accAdd(this._min, accMath.accMul(splitGap, i)));
	            }
	            this._reformLabelData();
	        },

	        _reformLogValue: function() {
	            // log数轴本质就是缩放，相当于默认this.option.scale === true，所以不修正_min和_max到0。
	            var thisOption = this.option;
	            var result = __webpack_require__(542)({
	                dataMin: this._min,
	                dataMax: this._max,
	                logPositive: thisOption.logPositive,
	                logLabelBase: thisOption.logLabelBase,
	                splitNumber: thisOption.splitNumber
	            });

	            this._min = result.dataMin;
	            this._max = result.dataMax;
	            this._valueList = result.tickList;
	            // {value2Coord: {Function}, coord2Value: {Function}}
	            this._dataMappingMethods = result.dataMappingMethods;

	            this._reformLabelData(result.labelFormatter);
	        },

	        _reformLabelData: function (innerFormatter) {
	            this._valueLabel = [];
	            var formatter = this.option.axisLabel.formatter;
	            if (formatter) {
	                for (var i = 0, l = this._valueList.length; i < l; i++) {
	                    if (typeof formatter === 'function') {
	                        this._valueLabel.push(
	                            innerFormatter
	                                ? formatter.call(this.myChart, this._valueList[i], innerFormatter)
	                                : formatter.call(this.myChart, this._valueList[i])
	                        );
	                    }
	                    else if (typeof formatter === 'string') {
	                        this._valueLabel.push(
	                            innerFormatter
	                                ? ecDate.format(formatter, this._valueList[i])
	                                : formatter.replace('{value}',this._valueList[i])
	                        );
	                    }
	                }
	            }
	            else {
	                for (var i = 0, l = this._valueList.length; i < l; i++) {
	                    this._valueLabel.push(
	                        innerFormatter
	                            ? innerFormatter(this._valueList[i])
	                            : this.numAddCommas(this._valueList[i]) // 每三位默认加,格式化
	                    );
	                }
	            }
	        },

	        getExtremum: function () {
	            this._calculateValue();
	            var dataMappingMethods = this._dataMappingMethods;
	            return {
	                min: this._min,
	                max: this._max,
	                dataMappingMethods: dataMappingMethods
	                    ? zrUtil.merge({}, dataMappingMethods) : null
	            };
	        },

	        /**
	         * 刷新
	         */
	        refresh: function (newOption, newSeries) {
	            if (newOption) {
	                this.option = this.reformOption(newOption);
	                // 通用字体设置
	                this.option.axisLabel.textStyle = zrUtil.merge(
	                    this.option.axisLabel.textStyle || {},
	                    this.ecTheme.textStyle
	                );
	                this.series = newSeries;
	            }
	            if (this.zr) {   // 数值轴的另外一个功能只是用来计算极值
	                this.clear();
	                this._buildShape();
	            }
	        },

	        // 根据值换算位置
	        getCoord: function (value) {
	            if (this._dataMappingMethods) {
	                value = this._dataMappingMethods.value2Coord(value);
	            }

	            value = value < this._min ? this._min : value;
	            value = value > this._max ? this._max : value;

	            var result;
	            if (!this.isHorizontal()) {
	                // 纵向
	                result = this.grid.getYend()
	                         - (value - this._min)
	                           / (this._max - this._min)
	                           * this.grid.getHeight();
	            }
	            else {
	                // 横向
	                result = this.grid.getX()
	                         + (value - this._min)
	                           / (this._max - this._min)
	                           * this.grid.getWidth();
	            }

	            return result;
	            // Math.floor可能引起一些偏差，但性能会更好
	            /* 准确更重要
	            return (value === this._min || value === this._max)
	                   ? result
	                   : Math.floor(result);
	            */
	        },

	        // 根据值换算绝对大小
	        getCoordSize: function (value) {
	            if (!this.isHorizontal()) {
	                // 纵向
	                return Math.abs(value / (this._max - this._min) * this.grid.getHeight());
	            }
	            else {
	                // 横向
	                return Math.abs(value / (this._max - this._min) * this.grid.getWidth());
	            }
	        },

	        // 根据位置换算值
	        getValueFromCoord: function(coord) {
	            var result;

	            if (!this.isHorizontal()) {
	                // 纵向
	                coord = coord < this.grid.getY() ? this.grid.getY() : coord;
	                coord = coord > this.grid.getYend() ? this.grid.getYend() : coord;
	                result = this._max
	                         - (coord - this.grid.getY())
	                           / this.grid.getHeight()
	                           * (this._max - this._min);
	            }
	            else {
	                // 横向
	                coord = coord < this.grid.getX() ? this.grid.getX() : coord;
	                coord = coord > this.grid.getXend() ? this.grid.getXend() : coord;
	                result = this._min
	                         + (coord - this.grid.getX())
	                           / this.grid.getWidth()
	                           * (this._max - this._min);
	            }

	            if (this._dataMappingMethods) {
	                result = this._dataMappingMethods.coord2Value(result);
	            }

	            return result.toFixed(2) - 0;
	        },

	        isMaindAxis : function (value) {
	            for (var i = 0, l = this._valueList.length; i < l; i++) {
	                if (this._valueList[i] === value) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    };

	    zrUtil.inherits(ValueAxis, Base);

	    __webpack_require__(427).define('valueAxis', ValueAxis);

	    return ValueAxis;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	/**
	 * echarts 值轴分段刻度计算方法
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 * @author xieshiwei (谢世威, i6ma@i6ma.com)
	 *
	 */


	/**
	 * 最值、跨度、步长取近似值
	 * 注意：不适用于高精度需求，或者很多位有效数字的情况！！！
	 * @function    smartSteps
	 * @param       {Number}    min             最小值
	 * @param       {Number}    max             最大值
	 * @param       {Number}    [section]       段数只能是 [0, 99] 的整数，段数为 0 或者不指定段数时，将自动调整段数
	 * @param       {Object}    [opts]          其它扩展参数
	 * @param       {Array}     opts.steps      自定义步长备选值，如 [10, 12, 15, 20, 25, 30, 40, 50, 60, 80] ，但必须 => [10, 99]
	 * @return      {Object}    {min: 新最小值, max: 新最大值, secs: 分段数, step: 每段长, fix: 小数保留位数, pnts: [分段结果]}
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {



	var mySteps     = [10, 20, 25, 50];
	var mySections  = [4, 5, 6];

	var custOpts;
	var custSteps;
	var custSecs;
	var minLocked;
	var maxLocked;

	var MT          = Math;
	var MATH_ROUND  = MT.round;
	var MATH_FLOOR  = MT.floor;
	var MATH_CEIL   = MT.ceil;
	var MATH_ABS    = MT.abs;


	function MATH_LOG(n) {return MT.log(MATH_ABS(n)) / MT.LN10;}
	function MATH_POW(n) {return MT.pow(10, n);}
	function MATH_ISINT(n) {return n === MATH_FLOOR(n);}


	function smartSteps(min, max, section, opts) {
	    // 拿公共变量来接收 opts.steps 这个参数，就不用带着参数层层传递了，注意在函数的最终出口处释放这个值
	    custOpts    = opts || {};
	    custSteps   = custOpts.steps || mySteps;
	    custSecs    = custOpts.secs || mySections;
	    section     = MATH_ROUND(+section || 0) % 99;           // 段数限定在 [0, 99] ，0 则自适应
	    min         = +min || 0;
	    max         = +max || 0;
	    minLocked   = maxLocked = 0;
	    if ('min' in custOpts) {
	        min     = +custOpts.min || 0;
	        minLocked = 1;
	    }
	    if ('max' in custOpts) {
	        max     = +custOpts.max || 0;
	        maxLocked = 1;
	    }
	    if (min > max) {max = [min, min = max][0];}             // 最值交换
	    var span    = max - min;
	    if (minLocked && maxLocked) {
	        return bothLocked(min, max, section);               // 两个最值同时被锁定，注意差值为 0 的情况
	    }
	    if (span < (section || 5)) {                            // 跨度值小于要分的段数，步长将会小于 1
	        if (MATH_ISINT(min) && MATH_ISINT(max)) {           // 步长小于 1 同时两个最值都是整数，特别处理
	            return forInteger(min, max, section);           // 也要考虑差值为 0 的情况
	        }
	        else if (span === 0) {                              // 非整数且跨度为 0 的情况
	            return forSpan0(min, max, section);
	        }
	    }
	    return coreCalc(min, max, section);                     // 非特殊情况的计算，须确保 min < max
	}



	/**
	 * 构造返回值，处理小数精度等问题
	 * @param   {Number}    newMin      最小值
	 * @param   {Number}    newMax      最大值
	 * @param   {Number}    section     分段数
	 * @param   {Number}    [expon]     计算量级
	 * @return  {Object}                同 smartSteps
	 */
	function makeResult(newMin, newMax, section, expon) {
	    expon       = expon || 0;                               // 这是中间计算量级，受步长增长、特别是最值锁定的影响，可能会小于基准量级，因为整数部分被过度放大
	    var expStep = expNum((newMax - newMin) / section, -1);
	    var expMin  = expNum(newMin, -1, 1);                    // 锁定的最值有效数位可能很多，需要全精度保留
	    var expMax  = expNum(newMax, -1);
	    var minExp  = MT.min(expStep.e, expMin.e, expMax.e);    // 这个值实际上就是各值整数部分尾部多余的 0 的个数
	    if (expMin.c === 0) {                                   // 0 可以有任意多个尾0
	        minExp  = MT.min(expStep.e, expMax.e);
	    } else if (expMax.c === 0) {
	        minExp  = MT.min(expStep.e, expMin.e);
	    }
	    expFixTo(expStep, {c: 0, e: minExp});
	    expFixTo(expMin, expStep, 1);
	    expFixTo(expMax, expStep);
	    expon      += minExp;                                   // 最终的基准量级，在这个量级下，各值刚好能表示成整数
	    newMin      = expMin.c;
	    newMax      = expMax.c;
	    var step    = (newMax - newMin) / section;
	    var zoom    = MATH_POW(expon);
	    var fixTo   = 0;
	    var points  = [];
	    for (var i  = section + 1; i--;) {                      // 因为点数比段数多 1
	        points[i] = (newMin + step * i) * zoom;             // 如果不涉及小数问题，这里就直接使用数值型
	    }
	    if (expon   < 0) {
	        fixTo   = decimals(zoom);                           // 前面已经去掉了各值尾部多余的 0 ，所以 zoom 的小数位就是最终的 fix 位数
	        step    = +(step * zoom).toFixed(fixTo);            // toFixed 处理长尾小数问题，如：0.2 * 0.1 = 0.020000000000000004
	        newMin  = +(newMin * zoom).toFixed(fixTo);
	        newMax  = +(newMax * zoom).toFixed(fixTo);
	        for (var i = points.length; i--;) {
	            points[i] = points[i].toFixed(fixTo);           // 为保证小数点对齐，统一转为字符型
	            +points[i] === 0 && (points[i] = '0');          // 0.000 不好看
	        }
	    }
	    else {
	        newMin *= zoom;
	        newMax *= zoom;
	        step   *= zoom;
	    }
	    custSecs    = 0;
	    custSteps   = 0;
	    custOpts    = 0;
	    // 这些公共变量可能持用了对用户参数的引用，这里是函数的最终出口，释放引用

	    return {
	        min:    newMin,                 // 新最小值
	        max:    newMax,                 // 新最大值
	        secs:   section,                // 分段数
	        step:   step,                   // 每段长
	        fix:    fixTo,                  // 小数保留位数，0 则为整数
	        exp:    expon,                  // 基准量级，并非原值所在的量级，而是说在这个量级下，各值能表示成整数
	        pnts:   points                  // 分段结果，整数都是数值型，小数时为了对齐小数点，都是字符型，但其中 0 不带小数点，即没有 "0.000"
	    };
	}



	/**
	 * 量级计数法 表示数值，不适用于很大或者很小的数，0 更不行
	 * @param       {Number}    num             原数
	 * @param       {Number}    [digit = 2]     精度位数，必须 => [1, 9]
	 * @param       {Boolean}   [byFloor = 0]   默认为 0 表示近似值不小于原值，置 1 表示近似值不大于原值
	 * @return      {Object}    {c: c, e: e}    c e 都是整数，c * 10 ^ e 即为原值的近似数
	 * @description             返回值应该更详细一点：{c: c, e: e, d: d, n: n} ，其中 d 是 c 的位数，n = c * 10 ^ e ，不过目前好像不太有用
	 */
	function expNum(num, digit, byFloor) {
	    digit       = MATH_ROUND(digit % 10) || 2;
	    if (digit   < 0) {                                      // 全精度位数
	        if (MATH_ISINT(num)) {                              // 整数的全精度位数，要去掉尾 0 ，但 0 也是整数，要专门留一位精度
	            digit = ('' + MATH_ABS(num)).replace(/0+$/, '').length || 1;
	        }
	        else {                                              // 小数的全精度位数，要去掉首 0
	            num = num.toFixed(15).replace(/0+$/, '');       // toFixed 处理长尾小数
	            digit = num.replace('.', '').replace(/^[-0]+/, '').length;
	            num = +num;                                     // '' + 0.0000001 会得到 '1e-7'
	        }
	    }
	    var expon   = MATH_FLOOR(MATH_LOG(num)) - digit + 1;
	    var cNum    = +(num * MATH_POW(-expon)).toFixed(15) || 0;   // toFixed 处理长尾小数问题
	    cNum        = byFloor ? MATH_FLOOR(cNum) : MATH_CEIL(cNum); // 向上取整可能发生进位，使精度位数增加 1
	    !cNum && (expon = 0);
	    if (('' + MATH_ABS(cNum)).length > digit) {                 // 整数位数判断，字符串法比对数法快近一倍
	        expon  += 1;
	        cNum   /= 10;
	    }
	    return {
	        c: cNum,
	        e: expon
	    };
	}


	/**
	 * 将前者的指数对齐到后者，如果前者量级较小，就是强制加大指数，值误差可能严重放大，甚至值变为 0
	 */
	function expFixTo(expnum1, expnum2, byFloor) {
	    var deltaExp    = expnum2.e - expnum1.e;
	    if (deltaExp) {
	        expnum1.e  += deltaExp;                             // 指数减小时，只需将整数部分相应放大
	        expnum1.c  *= MATH_POW(-deltaExp);                  // 指数增加时，整数部分将缩小，就涉及 floor ceil 取整和变 0 问题
	        expnum1.c   = byFloor ? MATH_FLOOR(expnum1.c) : MATH_CEIL(expnum1.c);
	    }
	}


	/**
	 * 将两个量级数的指数对齐到较小者
	 */
	function expFixMin(expnum1, expnum2, byFloor) {
	    if (expnum1.e < expnum2.e) {
	        expFixTo(expnum2, expnum1, byFloor);
	    }
	    else {
	        expFixTo(expnum1, expnum2, byFloor);
	    }
	}


	/**
	 * 基于量级计数法，对原值的整数部分取近似，不适用于负数和 0
	 * @param       {Number}    num             原值
	 * @param       {Array}     [rounds]        在取近似时，提供预置选项，近似到 rounds 中的某项
	 * @return      {Object}    expNum          2 位精度的量级计数法对象，不小于原值
	 */
	function getCeil(num, rounds) {
	    rounds      = rounds || mySteps;
	    num         = expNum(num);                              // 2 位精度量级计数法
	    var cNum    = num.c;
	    var i       = 0;
	    while (cNum > rounds[i]) {                              // 在预置的近似数中，找到不小于目标 cNum 的项
	        i++;
	    }
	    if (!rounds[i]) {                                       // 如果没找到合适的预置项，一定是目标值大于全部的预置项
	        cNum   /= 10;                                       // 将目标值缩小 10 倍，重找一次定能命中
	        num.e  += 1;
	        i       = 0;
	        while (cNum > rounds[i]) {
	            i++;
	        }
	    }
	    num.c       = rounds[i];
	    return num;
	}




	/**
	 * 基于量级计数法的计算，必须 min < max
	 */
	function coreCalc(min, max, section) {
	    var step;
	    var secs    = section || +custSecs.slice(-1);
	    var expStep = getCeil((max - min) / secs, custSteps);   // 这是可能的最小步长，以它的量级作为后续计算的基准量级，以保证整数计算特性
	    var expSpan = expNum(max - min);                        // 2 位精度的最值跨度，过高的精度意味着有效数位更多
	    var expMin  = expNum(min, -1, 1);                       // 最小值向下近似，以涵盖原最小值
	    var expMax  = expNum(max, -1);     // 最大值向上近似，参数 -1 表示保留全精度，因为要注意 min = 10000001, max = 10000002 等情况
	    expFixTo(expSpan, expStep);                             // 指数对齐
	    expFixTo(expMin, expStep, 1);                           // 经过指数对齐，原最大值、最小值都有可能变为 0
	    expFixTo(expMax, expStep);
	    if (!section) {
	        secs    = look4sections(expMin, expMax);
	    }
	    else {
	        step    = look4step(expMin, expMax, secs);
	    }

	    // 如果原最值都是整数，尽量让输出值也保持整数，但原最值跨 0 的则不调整
	    if (MATH_ISINT(min) && MATH_ISINT(max) && min * max >= 0) {
	        if (max - min < secs) {                             // 再次出现跨度小于段数
	            return forInteger(min, max, secs);
	        }
	        secs = tryForInt(min, max, section, expMin, expMax, secs);
	    }
	    var arrMM   = cross0(min, max, expMin.c, expMax.c);
	    expMin.c    = arrMM[0];
	    expMax.c    = arrMM[1];
	    if (minLocked || maxLocked) {
	        singleLocked(min, max, expMin, expMax);
	    }
	    return makeResult(expMin.c, expMax.c, secs, expMax.e);
	}



	/**
	 * 在预置的可选段数中，找出一个合适的值，让跨度误差尽量小
	 */
	function look4sections(expMin, expMax) {
	    var section;
	    var tmpStep, tmpMin, tmpMax;
	    var reference   = [];
	    for (var i      = custSecs.length; i--;) {              // 逐步减小段数，步长就会渐大
	        section     = custSecs[i];
	        tmpStep     = getCeil((expMax.c - expMin.c) / section, custSteps);
	        tmpStep     = tmpStep.c * MATH_POW(tmpStep.e);      // 步长都用常规整数参与计算
	        tmpMin      = MATH_FLOOR(expMin.c / tmpStep) * tmpStep;
	        tmpMax      = MATH_CEIL(expMax.c / tmpStep) * tmpStep;
	        reference[i] = {
	            min:    tmpMin,
	            max:    tmpMax,
	            step:   tmpStep,
	            span:   tmpMax - tmpMin                         // 步长的误差被 段数 成倍放大，可能会给跨度造成更大的误差，使最后的段数大于预置的最大值
	        };
	    }
	    reference.sort(function (a, b) {
	        var delta = a.span - b.span;                        // 分段调整之后的跨度，一定不小于原跨度，所以越小越好
	        if (delta === 0) {
	            delta = a.step - b.step;                        // 跨度相同时，步长小者胜出
	        }
	        return delta;
	    });
	    reference   = reference[0];
	    section     = reference.span / reference.step;
	    expMin.c    = reference.min;
	    expMax.c    = reference.max;
	    return section < 3 ? section * 2 : section;             // 如果最终步长比最小步长大得多，段数就可能变得很小
	}


	/**
	 * 指定段数，在预置的可选步长中，找出一个合适的值，让 步长 * 段数 积刚好涵盖原最大值与最小值
	 */
	function look4step(expMin, expMax, secs) {
	    var span;
	    var tmpMax;
	    var tmpMin      = expMax.c;
	    var tmpStep     = (expMax.c - expMin.c) / secs - 1;
	    while (tmpMin   > expMin.c) {
	        tmpStep     = getCeil(tmpStep + 1, custSteps);
	        tmpStep     = tmpStep.c * MATH_POW(tmpStep.e);
	        span        = tmpStep * secs;
	        tmpMax      = MATH_CEIL(expMax.c / tmpStep) * tmpStep;
	        tmpMin      = tmpMax - span;                        // 优先保证 max 端的误差最小，试看原 min 值能否被覆盖到
	    }
	    var deltaMin    = expMin.c - tmpMin;                    // 上面的计算可能会让 min 端的误差更大，下面尝试均衡误差
	    var deltaMax    = tmpMax - expMax.c;
	    var deltaDelta  = deltaMin - deltaMax;
	    if (deltaDelta  > tmpStep * 1.1) {                      // 当 min 端的误差比 max 端大很多时，考虑将 tmpMin tmpMax 同时上移
	        deltaDelta  = MATH_ROUND(deltaDelta / tmpStep / 2) * tmpStep;
	        tmpMin     += deltaDelta;
	        tmpMax     += deltaDelta;
	    }
	    expMin.c   = tmpMin;
	    expMax.c   = tmpMax;
	    return tmpStep;
	}


	/**
	 * 原最值都是整数时，尝试让输出也保持整数
	 */
	function tryForInt(min, max, section, expMin, expMax, secs) {
	    var span = expMax.c - expMin.c;
	    var step = span / secs * MATH_POW(expMax.e);
	    if (!MATH_ISINT(step)) {                                // 原最值都是整数，但计算步长可能出现小数，如 2.5
	        step = MATH_FLOOR(step);                            // 步长总是要尽量小，以减小跨度误差，所以 2.5 可能被调整为 2 或者 3
	        span = step * secs;
	        if (span < max - min) {
	            step += 1;
	            span = step * secs;
	            if (!section && (step * (secs - 1) >= (max - min))) {
	                secs -= 1;
	                span = step * secs;
	            }
	        }
	        if (span >= max - min) {
	            var delta   = span - (max - min);               // 误差均衡
	            expMin.c    = MATH_ROUND(min - delta / 2);
	            expMax.c    = MATH_ROUND(max + delta / 2);
	            expMin.e    = 0;
	            expMax.e    = 0;
	        }
	    }
	    return secs;
	}




	/**
	 * 整数情况下，跨度小于段数的处理
	 */
	function forInteger(min, max, section) {
	    section     = section || 5;
	    if (minLocked) {
	        max     = min + section;                            // min max 没有写错，因为 min locked 所以 max 在 min 上浮动
	    }
	    else if (maxLocked) {
	        min     = max - section;
	    }
	    else {
	        var delta   = section - (max - min);                // 没有端点锁定时，向上下延展跨度
	        var newMin  = MATH_ROUND(min - delta / 2);
	        var newMax  = MATH_ROUND(max + delta / 2);
	        var arrMM   = cross0(min, max, newMin, newMax);     // 避免跨 0
	        min         = arrMM[0];
	        max         = arrMM[1];
	    }
	    return makeResult(min, max, section);
	}


	/**
	 * 非整数情况下，跨度为 0 的处理
	 */
	function forSpan0(min, max, section) {
	    section     = section || 5;
	    // delta 一定不为 0 ，因为 min === max === 0 的情况会进入 forInteger 分支
	    var delta   = MT.min(MATH_ABS(max / section), section) / 2.1;
	    if (minLocked) {
	        max     = min + delta;                              // min max 没有写错，因为 min locked 所以 max 在 min 上浮动
	    }
	    else if (maxLocked) {
	        min     = max - delta;
	    }
	    else {                                                  // 以最值为中心，上下各延展一小段
	        min     = min - delta;
	        max     = max + delta;
	    }
	    return coreCalc(min, max, section);
	}


	/**
	 * 当原始最值都在 0 的同侧时，让输出也保持在 0 的同侧
	 */
	function cross0(min, max, newMin, newMax) {
	    if (min >= 0 && newMin < 0) {
	        newMax -= newMin;
	        newMin  = 0;
	    }
	    else if (max <= 0 && newMax > 0) {
	        newMin -= newMax;
	        newMax  = 0;
	    }
	    return [newMin, newMax];
	}


	/**
	 * 取一个数的小数位数
	 * @param   {Number}    num         原数值
	 * @return  {Number}    decimals    整数则返回 0 ，小数则返回小数点后的位数
	 */
	function decimals(num) {
	    num = (+num).toFixed(15).split('.');                    // String(0.0000001) 会得到 '1e-7'
	    return num.pop().replace(/0+$/, '').length;
	}






	/**
	 * 单个最值锁定处理，只是在原计算的基础上，锁定一个，平移另一个
	 */
	function singleLocked(min, max, emin, emax) {
	    if (minLocked) {
	        var expMin  = expNum(min, 4, 1);                    // 4 位精度向下近似
	        if (emin.e  - expMin.e > 6) {                       // 如果锁定值的量级远小于基准量级，认为锁定失败，强置为 0
	            expMin  = {c: 0, e: emin.e};
	        }
	        expFixMin(emin, expMin);                            // 将指数与量级较小者对齐
	        expFixMin(emax, expMin);
	        emax.c     += expMin.c - emin.c;                    // 最大值平移
	        emin.c      = expMin.c;                             // 最小值锁定
	    }
	    else if (maxLocked) {
	        var expMax  = expNum(max, 4);                       // 4 位精度向上近似
	        if (emax.e  - expMax.e > 6) {                       // 如果锁定值的量级远小于基准量级，认为锁定失败，强置为 0
	            expMax  = {c: 0, e: emax.e};
	        }
	        expFixMin(emin, expMax);                            // 将指数与量级较小者对齐
	        expFixMin(emax, expMax);
	        emin.c     += expMax.c - emax.c;                    // 最小值平移
	        emax.c      = expMax.c;                             // 最大值锁定
	    }
	}


	/**
	 * 最小值和最大值同时被锁定的情况在这里，其它地方只考虑单边最值锁定
	 * @param   {Number}    min         锁定的最小值
	 * @param   {Number}    max         锁定的最大值
	 * @param   {Number}    [section]   段数
	 * @return  {Object}                同 smartSteps
	 */
	function bothLocked(min, max, section) {
	    var trySecs     = section ? [section] : custSecs;
	    var span        = max - min;
	    if (span       === 0) {                                 // 最大最小值都锁定到同一个值上，认为锁定失败
	        max         = expNum(max, 3);                       // 3 位精度向上近似
	        section     = trySecs[0];
	        max.c       = MATH_ROUND(max.c + section / 2);
	        return makeResult(max.c - section, max.c, section, max.e);
	    }
	    if (MATH_ABS(max / span) < 1e-6) {                      // 如果锁定值远小于跨度，也认为锁定失败，强置为 0
	        max         = 0;
	    }
	    if (MATH_ABS(min / span) < 1e-6) {
	        min         = 0;
	    }
	    var step, deltaSpan, score;
	    var scoreS      = [[5, 10], [10, 2], [50, 10], [100, 2]];
	    var reference   = [];
	    var debugLog    = [];
	    var expSpan     = expNum((max - min), 3);               // 3 位精度向上近似
	    var expMin      = expNum(min, -1, 1);
	    var expMax      = expNum(max, -1);
	    expFixTo(expMin, expSpan, 1);
	    expFixTo(expMax, expSpan);
	    span            = expMax.c - expMin.c;
	    expSpan.c       = span;
	    
	    for (var i      = trySecs.length; i--;) {
	        section     = trySecs[i];
	        step        = MATH_CEIL(span / section);
	        deltaSpan   = step * section - span;
	        score       = (deltaSpan + 3) * 3;                  // 误差越大得分越高
	        score      += (section - trySecs[0] + 2) * 2;       // 分段越多得分越高
	        if (section % 5 === 0) {                            // 段数为 5 可以减分
	            score  -= 10;
	        }
	        for (var j  = scoreS.length; j--;) {                // 好的步长是最重要的减分项
	            if (step % scoreS[j][0] === 0) {
	                score /= scoreS[j][1];
	            }
	        }
	        debugLog[i] = [section, step, deltaSpan, score].join();
	        reference[i] = {
	            secs:   section,
	            step:   step,
	            delta:  deltaSpan,
	            score:  score
	        };
	    }
	    //console.log(debugLog);
	    reference.sort(function (a, b) {return a.score - b.score;});
	    reference   = reference[0];
	    expMin.c    = MATH_ROUND(expMin.c - reference.delta / 2);
	    expMax.c    = MATH_ROUND(expMax.c + reference.delta / 2);
	    return makeResult(expMin.c, expMax.c, reference.secs, expSpan.e);
	}




	return smartSteps;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));





/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Echarts, logarithmic axis reform
	 *
	 * @author sushuang (sushuang@baidu.com),
	 *         Ievgenii (@Ievgeny, ievgeny@zoomdata.com)
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	    // Reference
	    var number = __webpack_require__(420);
	    var Mt = Math;
	    var mathLog = Mt.log;
	    var mathPow = Mt.pow;
	    var mathAbs = Mt.abs;
	    var mathCeil = Mt.ceil;
	    var mathFloor = Mt.floor;

	    // Constant
	    var LOG_BASE = Mt.E; // It is not necessary to specify log base,
	                         // because log(logBase, x) = ln(x) / ln(logBase),
	                         // thus final result (axis tick location) is only determined by ln(x).
	    var LN10 = Mt.LN10;
	    var LN2 = Mt.LN2;
	    var LN2D10 = LN2 / LN10;
	    var EPSILON = 1e-9;
	    var DEFAULT_SPLIT_NUMBER = 5;
	    var MIN_BASE_10_SPLIT_NUMBER = 2;
	    var SUPERSCRIPTS = {
	        '0': '⁰',
	        '1': '¹',
	        '2': '²',
	        '3': '³',
	        '4': '⁴',
	        '5': '⁵',
	        '6': '⁶',
	        '7': '⁷',
	        '8': '⁸',
	        '9': '⁹',
	        '-': '⁻'
	    };

	    // Static variable
	    var logPositive;
	    var logLabelBase;
	    var logLabelMode; // enumeration:
	                      // 'plain' (i.e. axis labels are shown like 10000)
	                      // 'exponent' (i.e. axis labels are shown like 10²)
	    var lnBase;
	    var custOpts;
	    var splitNumber;
	    var logMappingOffset;
	    var absMin;
	    var absMax;
	    var tickList;

	    /**
	     * Test cases:
	     * [2, 4, 8, 16, 32, 64, 128]
	     * [0.01, 0.1, 10, 100, 1000] logLabelBase: 3
	     * [0.01, 0.1, 10, 100, 1000] logLabelBase: -12
	     * [-2, -4, -8, -16, -32, -64, -128] logLabelBase: 3
	     * [2, 4, 8, 16, '-', 64, 128]
	     * [2, 4, 8, 16, 32, 64]
	     * [2, 4, 8, 16, 32]
	     * [0.00000256, 0.0016, 0.04, 0.2]
	     * [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000] splitNumber: 3
	     * [1331, 3434, 500, 1, 1212, 4]
	     * [0.14, 2, 45, 1001, 200, 0.33, 10001]
	     * [0.00001, 0.00005]
	     * [0.00001, 0.00005] boundaryGap: [0.2, 0.4]
	     * [0.001, 2, -45, 1001, 200, 0.33, 10000]
	     * [0.00000001, 0.00000012]
	     * [0.000000000000001]
	     * [0.00000001, 0.00000001]
	     * [3, 3]
	     * [12, -3, 47, 19]
	     * [12, -3, 47, 19] logPositive: false
	     * [-2, -4, -8, -16, -32, -64, -128]
	     * [-2, -4, -8, -16, -32, -64]
	     * [2, 4, 8, 16, 32] boundaryGap: [0.2, 0.4]
	     * []
	     * [0]
	     * [10, 10, 10]
	     * [0.00003, 0.00003, 0.00003]
	     * [0.00001, 0.00001, 0.00001]
	     * [-0.00001, -0.00001, -0.00001]
	     * ['-', '-']
	     * ['-', 10]
	     * logarithmic axis in scatter (try dataZoom)
	     * logarithmic axis width dataZoom component (try xAxis and yAxis)
	     */

	    /**
	     * Main function. Return data object with values for axis building.
	     *
	     * @public
	     * @param {Object} [opts] Configurable options
	     * @param {number} opts.dataMin data Minimum
	     * @param {number} opts.dataMax data Maximum
	     * @param {number=} opts.logPositive Logarithmic sign. If not specified, it will be auto-detected.
	     * @param {number=} opts.logLabelBase Logaithmic base in axis label.
	     *                                    If not specified, it will be set to 10 (and use 2 for detail)
	     * @param {number=} opts.splitNumber Number of sections perfered.
	     * @return {Object} {
	     *                      dataMin: New min,
	     *                      dataMax: New max,
	     *                      tickList: [Array of tick data]
	     *                      logPositive: Type of data sign
	     *                      dataMappingMethods: [Set of logarithmic methods]
	     *                  }
	     */
	    function smartLogSteps(opts) {
	        clearStaticVariables();
	        custOpts = opts || {};

	        reformSetting();
	        makeTicksList();

	        return [
	            makeResult(),
	            clearStaticVariables()
	        ][0];
	    }

	    /**
	     * All of static variables must be clear here.
	     */
	    function clearStaticVariables() {
	        logPositive = custOpts = logMappingOffset = lnBase =
	        absMin = absMax = splitNumber = tickList = logLabelBase = logLabelMode = null;
	    }

	    /**
	     * Determine sign (logPositive, negative) of data set, if not specified.
	     * Reform min and max of data.
	     */
	    function reformSetting() {
	        // Settings of log label base
	        logLabelBase = custOpts.logLabelBase;
	        if (logLabelBase == null) {
	            logLabelMode = 'plain';
	            logLabelBase = 10;
	            lnBase = LN10;
	        }
	        else {
	            logLabelBase = +logLabelBase;
	            if (logLabelBase < 1) { // log base less than 1 is not supported.
	                logLabelBase = 10;
	            }
	            logLabelMode = 'exponent';
	            lnBase = mathLog(logLabelBase);
	        }

	        // Settings of split number
	        splitNumber = custOpts.splitNumber;
	        splitNumber == null && (splitNumber = DEFAULT_SPLIT_NUMBER);

	        // Setting of data min and max
	        var dataMin = parseFloat(custOpts.dataMin);
	        var dataMax = parseFloat(custOpts.dataMax);

	        if (!isFinite(dataMin) && !isFinite(dataMax)) {
	            dataMin = dataMax = 1;
	        }
	        else if (!isFinite(dataMin)) {
	            dataMin = dataMax;
	        }
	        else if (!isFinite(dataMax)) {
	            dataMax = dataMin;
	        }
	        else if (dataMin > dataMax) {
	            dataMax = [dataMin, dataMin = dataMax][0]; // Exchange min, max.
	        }

	        // Settings of log positive
	        logPositive = custOpts.logPositive;
	        // If not specified, determine sign by data.
	        if (logPositive == null) {
	            // LogPositive is false when dataMax <= 0 && dataMin < 0.
	            // LogPositive is true when dataMin >= 0.
	            // LogPositive is true when dataMax >= 0 && dataMin < 0 (singular points may exists)
	            logPositive = dataMax > 0 || dataMin === 0;
	        }

	        // Settings of absMin and absMax, which must be greater than 0.
	        absMin = logPositive ? dataMin : -dataMax;
	        absMax = logPositive ? dataMax : -dataMin;
	        // FIXME
	        // If there is any data item less then zero, it is suppose to be igonred and min should be re-calculated.
	        // But it is difficult to do that in current code stucture.
	        // So refactor of xxAxis.js is desired.
	        absMin < EPSILON && (absMin = EPSILON);
	        absMax < EPSILON && (absMax = EPSILON);
	    }

	    /**
	     * Make tick list.
	     */
	    function makeTicksList() {
	        tickList = [];

	        // Estimate max exponent and min exponent
	        var maxDataLog = fixAccurate(mathLog(absMax) / lnBase);
	        var minDataLog = fixAccurate(mathLog(absMin) / lnBase);
	        var maxExpon = mathCeil(maxDataLog);
	        var minExpon = mathFloor(minDataLog);
	        var spanExpon = maxExpon - minExpon;
	        var spanDataLog = maxDataLog - minDataLog;

	        if (logLabelMode === 'exponent') {
	            baseAnalysis();
	        }
	        else { // logLabelMode === 'plain', we will self-adapter
	            !(
	                spanExpon <= MIN_BASE_10_SPLIT_NUMBER
	                && splitNumber > MIN_BASE_10_SPLIT_NUMBER
	            )
	                ? baseAnalysis() : detailAnalysis();
	        }

	        // In this situation, only draw base-10 ticks.
	        // Base-10 ticks: 10^h (i.e. 0.01, 0.1, 1, 10, 100, ...)
	        function baseAnalysis() {
	            if (spanExpon < splitNumber) {
	                splitNumber = spanExpon;
	            }
	            // Suppose:
	            //      spanExpon > splitNumber
	            //      stepExpon := floor(spanExpon / splitNumber)
	            //      splitNumberFloat := spanExpon / stepExpon
	            // There are tow expressions which are identically-true:
	            //      splitNumberFloat - splitNumber <= 1
	            //      stepExpon * ceil(splitNumberFloat) - spanExpon <= stepExpon
	            // So we can calculate as follows:
	            var stepExpon = mathFloor(fixAccurate(spanExpon / splitNumber));

	            // Put the plot in the middle of the min, max.
	            var splitNumberAdjust = mathCeil(fixAccurate(spanExpon / stepExpon));
	            var spanExponAdjust = stepExpon * splitNumberAdjust;
	            var halfDiff = (spanExponAdjust - spanDataLog) / 2;
	            var minExponAdjust = mathFloor(fixAccurate(minDataLog - halfDiff));

	            if (aroundZero(minExponAdjust - minDataLog)) {
	                minExponAdjust -= 1;
	            }

	            // Build logMapping offset
	            logMappingOffset = -minExponAdjust * lnBase;

	            // Build tickList
	            for (var n = minExponAdjust; n - stepExpon <= maxDataLog; n += stepExpon) {
	                tickList.push(mathPow(logLabelBase, n));
	            }
	        }

	        // In this situation, base-2|10 ticks are used to make detailed split.
	        // Base-2|10 ticks: 10^h * 2^k (i.e. 0.1, 0.2, 0.4, 1, 2, 4, 10, 20, 40),
	        // where k in [0, 1, 2].
	        // Because LN2 * 3 < LN10 and LN2 * 4 > LN10, k should be less than 3.
	        // And when k === 3, the tick is too close to that of k === 0, which looks weird.
	        // So we do not use 3.
	        function detailAnalysis() {
	            // Find max exponent and min exponent.
	            // Calculate base on 3-hexadecimal (0, 1, 2, 10, 11, 12, 20).
	            var minDecimal = toDecimalFrom4Hex(minExpon, 0);
	            var endDecimal = minDecimal + 2;
	            while (
	                minDecimal < endDecimal
	                && toH(minDecimal + 1) + toK(minDecimal + 1) * LN2D10 < minDataLog
	            ) {
	                minDecimal++;
	            }
	            var maxDecimal = toDecimalFrom4Hex(maxExpon, 0);
	            var endDecimal = maxDecimal - 2; // maxDecimal is greater than 4
	            while (
	                maxDecimal > endDecimal
	                && toH(maxDecimal - 1) + toK(maxDecimal - 1) * LN2D10 > maxDataLog
	            ) {
	                maxDecimal--;
	            }

	            // Build logMapping offset
	            logMappingOffset = -(toH(minDecimal) * LN10 + toK(minDecimal) * LN2);

	            // Build logMapping tickList
	            for (var i = minDecimal; i <= maxDecimal; i++) {
	                var h = toH(i);
	                var k = toK(i);
	                tickList.push(mathPow(10, h) * mathPow(2, k));
	            }
	        }

	        // Convert to decimal number from 4-hexadecimal number,
	        // where h, k means: if there is a 4-hexadecimal numer 23, then h is 2, k is 3.
	        // h can be any integer (notice: h can be greater than 10 or less than 0),
	        // and k belongs to [0, 1, 2, 3].
	        function toDecimalFrom4Hex(h, k) {
	            return h * 3 + k;
	        }

	        function toK(decimal) {
	            return decimal - toH(decimal) * 3; // Can not calculate by '%'
	        }

	        function toH(decimal) {
	            return mathFloor(fixAccurate(decimal / 3));
	        }
	    }

	    /**
	     * Make result
	     */
	    function makeResult() {
	        var resultTickList = [];
	        for (var i = 0, len = tickList.length; i < len; i++) {
	            resultTickList[i] = (logPositive ? 1 : -1) * tickList[i];
	        }
	        !logPositive && resultTickList.reverse();

	        var dataMappingMethods = makeDataMappingMethods();
	        var value2Coord = dataMappingMethods.value2Coord;

	        var newDataMin = value2Coord(resultTickList[0]);
	        var newDataMax = value2Coord(resultTickList[resultTickList.length - 1]);

	        if (newDataMin === newDataMax) {
	            newDataMin -= 1;
	            newDataMax += 1;
	        }

	        return {
	            dataMin: newDataMin,
	            dataMax: newDataMax,
	            tickList: resultTickList,
	            logPositive: logPositive,
	            labelFormatter: makeLabelFormatter(),
	            dataMappingMethods: dataMappingMethods
	        };
	    }

	    /**
	     * Make axis label formatter.
	     */
	    function makeLabelFormatter() {
	        if (logLabelMode === 'exponent') { // For label style like 3⁴.
	            // Static variables should be fixed in the scope of the methods.
	            var myLogLabelBase = logLabelBase;
	            var myLnBase = lnBase;

	            return function (value) {
	                if (!isFinite(parseFloat(value))) {
	                    return '';
	                }
	                var sign = '';
	                if (value < 0) {
	                    value = -value;
	                    sign = '-';
	                }
	                return sign + myLogLabelBase + makeSuperscriptExponent(mathLog(value) / myLnBase);
	            };
	        }
	        else {
	            return function (value) { // Normal style like 0.001, 10,000,0
	                if (!isFinite(parseFloat(value))) {
	                    return '';
	                }
	                return number.addCommas(formatNumber(value));
	            };
	        }
	    }

	    /**
	     * Make calculate methods.
	     */
	    function makeDataMappingMethods() {
	        // Static variables should be fixed in the scope of the methods.
	        var myLogPositive = logPositive;
	        var myLogMappingOffset = logMappingOffset;

	        return {
	            value2Coord: function (x) {
	                if (x == null || isNaN(x) || !isFinite(x)) {
	                    return x;
	                }
	                x = parseFloat(x); // to number
	                if (!isFinite(x)) {
	                    x = EPSILON;
	                }
	                else if (myLogPositive && x < EPSILON) {
	                    // FIXME
	                    // It is suppose to be ignore, but not be set to EPSILON. See comments above.
	                    x = EPSILON;
	                }
	                else if (!myLogPositive && x > -EPSILON) {
	                    x = -EPSILON;
	                }
	                x = mathAbs(x);
	                return (myLogPositive ? 1 : -1) * (mathLog(x) + myLogMappingOffset);
	            },
	            coord2Value: function (x) {
	                if (x == null || isNaN(x) || !isFinite(x)) {
	                    return x;
	                }
	                x = parseFloat(x); // to number
	                if (!isFinite(x)) {
	                    x = EPSILON;
	                }
	                return myLogPositive
	                    ? mathPow(LOG_BASE, x - myLogMappingOffset)
	                    : -mathPow(LOG_BASE, -x + myLogMappingOffset);
	            }
	        };
	    }

	    /**
	     * For example, Math.log(1000) / Math.LN10 get the result of 2.9999999999999996, rather than 3.
	     * This method trys to fix it.
	     * (accMath.div can not fix this problem yet.)
	     */
	    function fixAccurate(result) {
	        return +Number(+result).toFixed(14);
	    }

	    /**
	     * Avoid show float number like '1e-9', '-1e-10', ...
	     * @return {string}
	     */
	    function formatNumber(num) {
	        return Number(num).toFixed(15).replace(/\.?0*$/, '');
	    }

	    /**
	     * Make superscript exponent
	     */
	    function makeSuperscriptExponent(exponent) {
	        exponent = formatNumber(Math.round(exponent)); // Do not support float superscript.
	                                                       // (because I can not find superscript style of '.')
	        var result = [];
	        for (var i = 0, len = exponent.length; i < len; i++) {
	            var cha = exponent.charAt(i);
	            result.push(SUPERSCRIPTS[cha] || '');
	        }
	        return result.join('');
	    }

	    /**
	     * Decide whether near zero
	     */
	    function aroundZero(val) {
	        return val > -EPSILON && val < EPSILON;
	    }

	    return smartLogSteps;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件： 网格
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(419);
	    
	    // 图形依赖
	    var RectangleShape = __webpack_require__(387);
	    
	    var ecConfig = __webpack_require__(366);
	    // 网格
	    ecConfig.grid = {
	        zlevel: 0,                  // 一级层叠
	        z: 0,                       // 二级层叠
	        x: 80,
	        y: 60,
	        x2: 80,
	        y2: 60,
	        // width: {totalWidth} - x - x2,
	        // height: {totalHeight} - y - y2,
	        backgroundColor: 'rgba(0,0,0,0)',
	        borderWidth: 1,
	        borderColor: '#ccc'
	    };

	    var zrUtil = __webpack_require__(367);

	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 图表选项
	     *      @param {number=} option.grid.x 直角坐标系内绘图网格起始横坐标，数值单位px
	     *      @param {number=} option.grid.y 直角坐标系内绘图网格起始纵坐标，数值单位px
	     *      @param {number=} option.grid.width 直角坐标系内绘图网格宽度，数值单位px
	     *      @param {number=} option.grid.height 直角坐标系内绘图网格高度，数值单位px
	     */
	    function Grid(ecTheme, messageCenter, zr, option, myChart) {
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);

	        this.refresh(option);
	    }
	    
	    Grid.prototype = {
	        type: ecConfig.COMPONENT_TYPE_GRID,

	        getX: function () {
	            return this._x;
	        },

	        getY: function () {
	            return this._y;
	        },

	        getWidth: function () {
	            return this._width;
	        },

	        getHeight: function () {
	            return this._height;
	        },

	        getXend: function () {
	            return this._x + this._width;
	        },

	        getYend: function () {
	            return this._y + this._height;
	        },

	        getArea: function () {
	            return {
	                x: this._x,
	                y: this._y,
	                width: this._width,
	                height: this._height
	            };
	        },
	        
	        getBbox: function() {
	            return [
	                [ this._x, this._y ],
	                [ this.getXend(), this.getYend() ]
	            ];
	        },
	        
	        /**
	         * 实在找不到合适的地方做了，各种粗暴的写法~ -_-
	         */
	        refixAxisShape: function(component) {
	            var zeroX;
	            var zeroY;
	            var axisList = component.xAxis._axisList.concat(
	                component.yAxis ? component.yAxis._axisList : []
	            );
	            var len = axisList.length;
	            var axis;
	            while (len--) {
	                axis = axisList[len];
	                if (axis.type == ecConfig.COMPONENT_TYPE_AXIS_VALUE 
	                    && axis._min < 0  
	                    && axis._max >= 0
	                ) {
	                    axis.isHorizontal()
	                    ? (zeroX = axis.getCoord(0))
	                    : (zeroY = axis.getCoord(0));
	                }
	            }
	            if (typeof zeroX != 'undefined' || typeof zeroY != 'undefined') {
	                len = axisList.length;
	                while (len--) {
	                    axisList[len].refixAxisShape(zeroX, zeroY);
	                }
	            }
	        },
	        
	        refresh: function (newOption) {
	            if (newOption
	                || this._zrWidth != this.zr.getWidth() 
	                || this._zrHeight != this.zr.getHeight()
	            ) {
	                this.clear();
	                this.option = newOption || this.option;
	                this.option.grid = this.reformOption(this.option.grid);
	    
	                var gridOption = this.option.grid;
	                this._zrWidth = this.zr.getWidth();
	                this._zrHeight = this.zr.getHeight();
	                this._x = this.parsePercent(gridOption.x, this._zrWidth);
	                this._y = this.parsePercent(gridOption.y, this._zrHeight);
	                var x2 = this.parsePercent(gridOption.x2, this._zrWidth);
	                var y2 = this.parsePercent(gridOption.y2, this._zrHeight);
	                
	    
	                if (typeof gridOption.width == 'undefined') {
	                    this._width = this._zrWidth - this._x - x2;
	                }
	                else {
	                    this._width = this.parsePercent(gridOption.width, this._zrWidth);
	                }
	                this._width = this._width <= 0 ? 10 : this._width;
	    
	                if (typeof gridOption.height == 'undefined') {
	                    this._height = this._zrHeight - this._y - y2;
	                }
	                else {
	                    this._height = this.parsePercent(gridOption.height, this._zrHeight);
	                }
	                this._height = this._height <= 0 ? 10 : this._height;
	                
	                this._x = this.subPixelOptimize(this._x, gridOption.borderWidth);
	                this._y = this.subPixelOptimize(this._y, gridOption.borderWidth);
	    
	                this.shapeList.push(new RectangleShape({
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    hoverable: false,
	                    style: {
	                        x: this._x,
	                        y: this._y,
	                        width: this._width,
	                        height: this._height,
	                        brushType: gridOption.borderWidth > 0 ? 'both' : 'fill',
	                        color: gridOption.backgroundColor,
	                        strokeColor: gridOption.borderColor,
	                        lineWidth: gridOption.borderWidth
	                        // type: this.option.splitArea.areaStyle.type,
	                    }
	                }));
	                this.zr.addShape(this.shapeList[0]);
	            }
	        }
	    };
	    
	    zrUtil.inherits(Grid, Base);
	    
	    __webpack_require__(427).define('grid', Grid);
	    
	    return Grid;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts图表类：柱形图
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var ChartBase = __webpack_require__(396);
	    
	    // 图形依赖
	    var RectangleShape = __webpack_require__(387);
	    // 组件依赖
	    __webpack_require__(538);
	    __webpack_require__(543);
	    __webpack_require__(535);
	    
	    var ecConfig = __webpack_require__(366);
	    // 柱形图默认参数
	    ecConfig.bar = {
	        zlevel: 0,                  // 一级层叠
	        z: 2,                       // 二级层叠
	        clickable: true,
	        legendHoverLink: true,
	        // stack: null
	        xAxisIndex: 0,
	        yAxisIndex: 0,
	        barMinHeight: 0,          // 最小高度改为0
	        // barWidth: null,        // 默认自适应
	        barGap: '30%',            // 柱间距离，默认为柱形宽度的30%，可设固定值
	        barCategoryGap: '20%',    // 类目间柱形距离，默认为类目间距的20%，可设固定值
	        itemStyle: {
	            normal: {
	                // color: '各异',
	                barBorderColor: '#fff',       // 柱条边线
	                barBorderRadius: 0,           // 柱条边线圆角，单位px，默认为0
	                barBorderWidth: 0,            // 柱条边线线宽，单位px，默认为1
	                label: {
	                    show: false
	                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
	                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
	                    //           'inside'|'left'|'right'|'top'|'bottom'
	                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                }
	            },
	            emphasis: {
	                // color: '各异',
	                barBorderColor: '#fff',            // 柱条边线
	                barBorderRadius: 0,                // 柱条边线圆角，单位px，默认为0
	                barBorderWidth: 0,                 // 柱条边线线宽，单位px，默认为1
	                label: {
	                    show: false
	                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
	                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
	                    //           'inside'|'left'|'right'|'top'|'bottom'
	                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                }
	            }
	        }
	    };

	    var ecData = __webpack_require__(414);
	    var zrUtil = __webpack_require__(367);
	    var zrColor = __webpack_require__(386);
	    
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} series 数据
	     * @param {Object} component 组件
	     */
	    function Bar(ecTheme, messageCenter, zr, option, myChart){
	        // 图表基类
	        ChartBase.call(this, ecTheme, messageCenter, zr, option, myChart);
	        
	        this.refresh(option);
	    }
	    
	    Bar.prototype = {
	        type: ecConfig.CHART_TYPE_BAR,
	        /**
	         * 绘制图形
	         */
	        _buildShape: function () {
	            this._buildPosition();
	        },
	        
	        _buildNormal: function(seriesArray, maxDataLength, locationMap, xMarkMap, orient) {
	            var series = this.series;
	            // 确定类目轴和数值轴，同一方向随便找一个即可
	            var seriesIndex = locationMap[0][0];
	            var serie = series[seriesIndex];
	            var isHorizontal = orient == 'horizontal';
	            var xAxis = this.component.xAxis;
	            var yAxis = this.component.yAxis;
	            var categoryAxis = isHorizontal 
	                               ? xAxis.getAxis(serie.xAxisIndex)
	                               : yAxis.getAxis(serie.yAxisIndex);
	            var valueAxis;  // 数值轴各异

	            var size = this._mapSize(categoryAxis, locationMap);
	            var gap = size.gap;
	            var barGap = size.barGap;
	            var barWidthMap = size.barWidthMap;
	            var barMaxWidthMap = size.barMaxWidthMap;
	            var barWidth = size.barWidth;                   // 自适应宽度
	            var barMinHeightMap = size.barMinHeightMap;
	            var barHeight;
	            var curBarWidth;
	            var interval = size.interval;

	            var x;
	            var y;
	            var lastP; // 正向堆积处理
	            var baseP;
	            var lastN; // 负向堆积处理
	            var baseN;
	            var barShape;
	            var data;
	            var value;
	            var islandR = this.deepQuery([this.ecTheme, ecConfig], 'island.r');
	            for (var i = 0, l = maxDataLength; i < l; i++) {
	                if (categoryAxis.getNameByIndex(i) == null) {
	                    // 系列数据超出类目轴长度
	                    break;
	                }
	                isHorizontal
	                    ? (x = categoryAxis.getCoordByIndex(i) - gap / 2)
	                    : (y = categoryAxis.getCoordByIndex(i) + gap / 2);

	                for (var j = 0, k = locationMap.length; j < k; j++) {
	                    // 堆积数据用第一条valueAxis
	                    var yAxisIndex = series[locationMap[j][0]].yAxisIndex || 0;
	                    var xAxisIndex = series[locationMap[j][0]].xAxisIndex || 0;
	                    valueAxis = isHorizontal 
	                                ? yAxis.getAxis(yAxisIndex)
	                                : xAxis.getAxis(xAxisIndex);
	                    baseP = lastP = baseN = lastN = valueAxis.getCoord(0);
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        xMarkMap[seriesIndex] = xMarkMap[seriesIndex] 
	                                                || {
	                                                    min: Number.POSITIVE_INFINITY,
	                                                    max: Number.NEGATIVE_INFINITY,
	                                                    sum: 0,
	                                                    counter: 0,
	                                                    average: 0
	                                                };
	                        curBarWidth = Math.min(
	                            barMaxWidthMap[seriesIndex] || Number.MAX_VALUE,
	                            barWidthMap[seriesIndex] || barWidth
	                        );
	                        if (value === '-') {
	                            // 空数据在做完后补充拖拽提示框
	                            continue;
	                        }
	                        if (value > 0) {
	                            // 正向堆积
	                            barHeight = m > 0 
	                                        ? valueAxis.getCoordSize(value)
	                                        : (
	                                            isHorizontal
	                                            ? (baseP - valueAxis.getCoord(value))
	                                            : (valueAxis.getCoord(value) - baseP)
	                                        );
	                            // 非堆积数据最小高度有效
	                            if (n === 1 && barMinHeightMap[seriesIndex] > barHeight) {
	                                barHeight = barMinHeightMap[seriesIndex];
	                            }
	                            if (isHorizontal) {
	                                lastP -= barHeight;
	                                y = lastP;
	                            }
	                            else {
	                                x = lastP;
	                                lastP += barHeight;
	                            }
	                        }
	                        else if (value < 0){
	                            // 负向堆积
	                            barHeight = m > 0 
	                                        ? valueAxis.getCoordSize(value)
	                                        : (
	                                            isHorizontal
	                                            ? (valueAxis.getCoord(value) - baseN)
	                                            : (baseN - valueAxis.getCoord(value))
	                                        );
	                            // 非堆积数据最小高度有效
	                            if (n === 1 && barMinHeightMap[seriesIndex] > barHeight) {
	                                barHeight = barMinHeightMap[seriesIndex];
	                            }
	                            if (isHorizontal) {
	                                y = lastN;
	                                lastN += barHeight;
	                            }
	                            else {
	                                lastN -= barHeight;
	                                x = lastN;
	                            }
	                        }
	                        else {
	                            // 0值
	                            barHeight = 0;
	                            // 最小高度无效
	                            if (isHorizontal) {
	                                lastP -= barHeight;
	                                y = lastP;
	                            }
	                            else {
	                                x = lastP;
	                                lastP += barHeight;
	                            }
	                        }
	                        xMarkMap[seriesIndex][i] = isHorizontal
	                                                   ? (x + curBarWidth / 2) 
	                                                   : (y - curBarWidth / 2);
	                        if (xMarkMap[seriesIndex].min > value) {
	                            xMarkMap[seriesIndex].min = value;
	                            if (isHorizontal) {
	                                xMarkMap[seriesIndex].minY = y;
	                                xMarkMap[seriesIndex].minX = xMarkMap[seriesIndex][i];
	                            }
	                            else {
	                                xMarkMap[seriesIndex].minX = x + barHeight;
	                                xMarkMap[seriesIndex].minY = xMarkMap[seriesIndex][i];
	                            }
	                        }
	                        if (xMarkMap[seriesIndex].max < value) {
	                            xMarkMap[seriesIndex].max = value;
	                            if (isHorizontal) {
	                                xMarkMap[seriesIndex].maxY = y;
	                                xMarkMap[seriesIndex].maxX = xMarkMap[seriesIndex][i];
	                            }
	                            else {
	                                xMarkMap[seriesIndex].maxX = x + barHeight;
	                                xMarkMap[seriesIndex].maxY = xMarkMap[seriesIndex][i];
	                            }
	                            
	                        }
	                        xMarkMap[seriesIndex].sum += value;
	                        xMarkMap[seriesIndex].counter++;
	                        
	                        if (i % interval === 0) {
	                            barShape = this._getBarItem(
	                                seriesIndex, i,
	                                categoryAxis.getNameByIndex(i),
	                                x,
	                                y - (isHorizontal ? 0 : curBarWidth),
	                                isHorizontal ? curBarWidth : barHeight,
	                                isHorizontal ? barHeight : curBarWidth,
	                                isHorizontal ? 'vertical' : 'horizontal'
	                            );
	                            this.shapeList.push(new RectangleShape(barShape));
	                        }
	                    }

	                    // 补充空数据的拖拽提示框
	                    for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                        seriesIndex = locationMap[j][m];
	                        serie = series[seriesIndex];
	                        data = serie.data[i];
	                        value = this.getDataFromOption(data, '-');
	                        curBarWidth = Math.min(
	                            barMaxWidthMap[seriesIndex] || Number.MAX_VALUE,
	                            barWidthMap[seriesIndex] || barWidth
	                        );
	                        if (value != '-') {
	                            // 只关心空数据
	                            continue;
	                        }

	                        if (this.deepQuery([data, serie, this.option], 'calculable')) {
	                            if (isHorizontal) {
	                                lastP -= islandR;
	                                y = lastP;
	                            }
	                            else {
	                                x = lastP;
	                                lastP += islandR;
	                            }
	                            
	                            barShape = this._getBarItem(
	                                seriesIndex, i,
	                                categoryAxis.getNameByIndex(i),
	                                x,
	                                y - (isHorizontal ? 0 : curBarWidth),
	                                isHorizontal ? curBarWidth : islandR,
	                                isHorizontal ? islandR : curBarWidth,
	                                isHorizontal ? 'vertical' : 'horizontal'
	                            );
	                            barShape.hoverable = false;
	                            barShape.draggable = false;
	                            barShape.style.lineWidth = 1;
	                            barShape.style.brushType = 'stroke';
	                            barShape.style.strokeColor = serie.calculableHolderColor
	                                                         || this.ecTheme.calculableHolderColor
	                                                         || ecConfig.calculableHolderColor;

	                            this.shapeList.push(new RectangleShape(barShape));
	                        }
	                    }
	                    isHorizontal
	                        ? (x += (curBarWidth + barGap))
	                        : (y -= (curBarWidth + barGap));
	                }
	            }
	            
	            this._calculMarkMapXY(xMarkMap, locationMap, isHorizontal ? 'y' : 'x');
	        },
	        /**
	         * 构建类目轴为水平方向的柱形图系列
	         */
	        _buildHorizontal: function (seriesArray, maxDataLength, locationMap, xMarkMap) {
	            return this._buildNormal(
	                seriesArray, maxDataLength, locationMap, xMarkMap, 'horizontal'
	            );
	        },

	        /**
	         * 构建类目轴为垂直方向的柱形图系列
	         */
	        _buildVertical: function (seriesArray, maxDataLength, locationMap, xMarkMap) {
	            return this._buildNormal(
	                seriesArray, maxDataLength, locationMap, xMarkMap, 'vertical'
	            );
	        },
	        
	        /**
	         * 构建双数值轴柱形图
	         */
	        _buildOther: function (seriesArray, maxDataLength, locationMap, xMarkMap) {
	            var series = this.series;
	            
	            for (var j = 0, k = locationMap.length; j < k; j++) {
	                for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                    var seriesIndex = locationMap[j][m];
	                    var serie = series[seriesIndex];
	                    var xAxisIndex = serie.xAxisIndex || 0;
	                    var xAxis = this.component.xAxis.getAxis(xAxisIndex);
	                    var baseX = xAxis.getCoord(0);
	                    var yAxisIndex = serie.yAxisIndex || 0;
	                    var yAxis = this.component.yAxis.getAxis(yAxisIndex);
	                    var baseY = yAxis.getCoord(0);
	                    
	                    xMarkMap[seriesIndex] = xMarkMap[seriesIndex] 
	                                            || {
	                                                min0: Number.POSITIVE_INFINITY,
	                                                min1: Number.POSITIVE_INFINITY,
	                                                max0: Number.NEGATIVE_INFINITY,
	                                                max1: Number.NEGATIVE_INFINITY,
	                                                sum0: 0,
	                                                sum1: 0,
	                                                counter0: 0,
	                                                counter1: 0,
	                                                average0: 0,
	                                                average1: 0
	                                            };

	                    for (var i = 0, l = serie.data.length; i < l; i++) {
	                        var data = serie.data[i];
	                        var value = this.getDataFromOption(data, '-');
	                        if (!(value instanceof Array)) {
	                            continue;
	                        }
	                        
	                        var x = xAxis.getCoord(value[0]);
	                        var y = yAxis.getCoord(value[1]);
	                        
	                        var queryTarget = [data, serie];
	                        var barWidth = this.deepQuery(queryTarget, 'barWidth') || 10; // 默认柱形
	                        var barHeight = this.deepQuery(queryTarget, 'barHeight');
	                        var orient;
	                        var barShape;
	                        
	                        if (barHeight != null) {
	                            // 条形图
	                            orient = 'horizontal';
	                            
	                            if (value[0] > 0) {
	                                // 正向
	                                barWidth = x - baseX;
	                                x -= barWidth;
	                            }
	                            else if (value[0] < 0){
	                                // 负向
	                                barWidth = baseX - x;
	                            }
	                            else {
	                                // 0值
	                                barWidth = 0;
	                            }
	                            
	                            barShape = this._getBarItem(
	                                seriesIndex, i,
	                                value[0],
	                                x, 
	                                y - barHeight / 2,
	                                barWidth,
	                                barHeight,
	                                orient
	                            );
	                        }
	                        else {
	                            // 柱形
	                            orient = 'vertical';
	                            
	                            if (value[1] > 0) {
	                            // 正向
	                                barHeight = baseY - y;
	                            }
	                            else if (value[1] < 0){
	                                // 负向
	                                barHeight = y - baseY;
	                                y -= barHeight;
	                            }
	                            else {
	                                // 0值
	                                barHeight = 0;
	                            }
	                            barShape = this._getBarItem(
	                                seriesIndex, i,
	                                value[0],
	                                x - barWidth / 2, 
	                                y,
	                                barWidth,
	                                barHeight,
	                                orient
	                            );
	                        }
	                        this.shapeList.push(new RectangleShape(barShape));
	                        
	                        
	                        x = xAxis.getCoord(value[0]);
	                        y = yAxis.getCoord(value[1]);
	                        if (xMarkMap[seriesIndex].min0 > value[0]) {
	                            xMarkMap[seriesIndex].min0 = value[0];
	                            xMarkMap[seriesIndex].minY0 = y;
	                            xMarkMap[seriesIndex].minX0 = x;
	                        }
	                        if (xMarkMap[seriesIndex].max0 < value[0]) {
	                            xMarkMap[seriesIndex].max0 = value[0];
	                            xMarkMap[seriesIndex].maxY0 = y;
	                            xMarkMap[seriesIndex].maxX0 = x;
	                        }
	                        xMarkMap[seriesIndex].sum0 += value[0];
	                        xMarkMap[seriesIndex].counter0++;
	                        
	                        if (xMarkMap[seriesIndex].min1 > value[1]) {
	                            xMarkMap[seriesIndex].min1 = value[1];
	                            xMarkMap[seriesIndex].minY1 = y;
	                            xMarkMap[seriesIndex].minX1 = x;
	                        }
	                        if (xMarkMap[seriesIndex].max1 < value[1]) {
	                            xMarkMap[seriesIndex].max1 = value[1];
	                            xMarkMap[seriesIndex].maxY1 = y;
	                            xMarkMap[seriesIndex].maxX1 = x;
	                        }
	                        xMarkMap[seriesIndex].sum1 += value[1];
	                        xMarkMap[seriesIndex].counter1++;
	                    }
	                }
	            }
	            
	            this._calculMarkMapXY(xMarkMap, locationMap, 'xy');
	        },
	        
	        /**
	         * 我真是自找麻烦啊，为啥要允许系列级个性化最小宽度和高度啊！！！
	         * @param {CategoryAxis} categoryAxis 类目坐标轴，需要知道类目间隔大小
	         * @param {Array} locationMap 整形数据的系列索引
	         */
	        _mapSize: function (categoryAxis, locationMap, ignoreUserDefined) {
	            var res = this._findSpecialBarSzie(locationMap, ignoreUserDefined);
	            var barWidthMap = res.barWidthMap;
	            var barMaxWidthMap = res.barMaxWidthMap;
	            var barMinHeightMap = res.barMinHeightMap;
	            var sBarWidthCounter = res.sBarWidthCounter;    // 用户指定
	            var sBarWidthTotal = res.sBarWidthTotal;        // 用户指定
	            var barGap = res.barGap;
	            var barCategoryGap = res.barCategoryGap;
	            
	            var gap;
	            var barWidth;
	            var interval = 1;
	            if (locationMap.length != sBarWidthCounter) {
	                // 至少存在一个自适应宽度的柱形图
	                if (!ignoreUserDefined) {
	                    gap = typeof barCategoryGap === 'string' && barCategoryGap.match(/%$/)
	                          // 百分比
	                          ? ((categoryAxis.getGap() * (100 - parseFloat(barCategoryGap)) / 100).toFixed(2) - 0)
	                          // 数值
	                          : (categoryAxis.getGap() - barCategoryGap);
	                    if (typeof barGap === 'string' && barGap.match(/%$/)) {
	                        barGap = parseFloat(barGap) / 100;
	                        barWidth = +(
	                            (gap - sBarWidthTotal) / (
	                                (locationMap.length - 1) * barGap + locationMap.length - sBarWidthCounter
	                            )
	                        ).toFixed(2);
	                        barGap = barWidth * barGap;
	                    }
	                    else {
	                        barGap = parseFloat(barGap);
	                        barWidth = +(
	                            (gap - sBarWidthTotal - barGap * (locationMap.length - 1)) / (
	                                locationMap.length - sBarWidthCounter
	                            )
	                        ).toFixed(2);
	                    }
	                    // 无法满足用户定义的宽度设计，忽略用户宽度，打回重做
	                    if (barWidth <= 0) {
	                        return this._mapSize(categoryAxis, locationMap, true);
	                    }
	                }
	                else {
	                    // 忽略用户定义的宽度设定
	                    gap = categoryAxis.getGap();
	                    barGap = 0;
	                    barWidth = +(gap / locationMap.length).toFixed(2);
	                    // 已经忽略用户定义的宽度设定依然还无法满足显示，只能硬来了;
	                    if (barWidth <= 0) {
	                        interval = Math.floor(locationMap.length / gap);
	                        barWidth = 1;
	                    }
	                }
	            }
	            else {
	                // 全是自定义宽度，barGap无效，系列间隔决定barGap
	                gap = sBarWidthCounter > 1
	                      ? (typeof barCategoryGap === 'string' && barCategoryGap.match(/%$/))
	                          // 百分比
	                          ? +(categoryAxis.getGap() * (100 - parseFloat(barCategoryGap)) / 100).toFixed(2)
	                          // 数值
	                          : (categoryAxis.getGap() - barCategoryGap)
	                      // 只有一个
	                      : sBarWidthTotal;
	                barWidth = 0;
	                barGap = sBarWidthCounter > 1 
	                         ? +((gap - sBarWidthTotal) / (sBarWidthCounter - 1)).toFixed(2)
	                         : 0;
	                if (barGap < 0) {
	                    // 无法满足用户定义的宽度设计，忽略用户宽度，打回重做
	                    return this._mapSize(categoryAxis, locationMap, true);
	                }
	            }
	            
	            // 检查是否满足barMaxWidthMap
	            
	            return this._recheckBarMaxWidth(
	                locationMap,
	                barWidthMap, barMaxWidthMap, barMinHeightMap,
	                gap,   // 总宽度
	                barWidth, barGap, interval
	            );
	        },
	        
	        /**
	         * 计算堆积下用户特殊指定的各种size 
	         */
	        _findSpecialBarSzie: function(locationMap, ignoreUserDefined) {
	            var series = this.series;
	            var barWidthMap = {};
	            var barMaxWidthMap = {};
	            var barMinHeightMap = {};
	            var sBarWidth;              // 用户指定
	            var sBarMaxWidth;           // 用户指定
	            var sBarWidthCounter = 0;   // 用户指定
	            var sBarWidthTotal = 0;     // 用户指定
	            var barGap;
	            var barCategoryGap;
	            for (var j = 0, k = locationMap.length; j < k; j++) {
	                var hasFound = {
	                    barWidth: false,
	                    barMaxWidth: false
	                };
	                for (var m = 0, n = locationMap[j].length; m < n; m++) {
	                    var seriesIndex = locationMap[j][m];
	                    var queryTarget = series[seriesIndex];
	                    if (!ignoreUserDefined) {
	                        if (!hasFound.barWidth) {
	                            sBarWidth = this.query(queryTarget, 'barWidth');
	                            if (sBarWidth != null) {
	                                // 同一堆积第一个生效barWidth
	                                barWidthMap[seriesIndex] = sBarWidth;
	                                sBarWidthTotal += sBarWidth;
	                                sBarWidthCounter++;
	                                hasFound.barWidth = true;
	                                // 复位前面同一堆积但没被定义的
	                                for (var ii = 0, ll = m; ii < ll; ii++) {
	                                    var pSeriesIndex = locationMap[j][ii];
	                                    barWidthMap[pSeriesIndex] = sBarWidth;
	                                }
	                            }
	                        }
	                        else {
	                            barWidthMap[seriesIndex] = sBarWidth;   // 用找到的一个
	                        }
	                        
	                        if (!hasFound.barMaxWidth) {
	                            sBarMaxWidth = this.query(queryTarget, 'barMaxWidth');
	                            if (sBarMaxWidth != null) {
	                                // 同一堆积第一个生效barMaxWidth
	                                barMaxWidthMap[seriesIndex] = sBarMaxWidth;
	                                hasFound.barMaxWidth = true;
	                                // 复位前面同一堆积但没被定义的
	                                for (var ii = 0, ll = m; ii < ll; ii++) {
	                                    var pSeriesIndex = locationMap[j][ii];
	                                    barMaxWidthMap[pSeriesIndex] = sBarMaxWidth;
	                                }
	                            }
	                        }
	                        else {
	                            barMaxWidthMap[seriesIndex] = sBarMaxWidth;   // 用找到的一个
	                        }
	                    }

	                    barMinHeightMap[seriesIndex] = this.query(queryTarget, 'barMinHeight');
	                    barGap = barGap != null ? barGap : this.query(queryTarget, 'barGap');
	                    barCategoryGap = barCategoryGap != null 
	                                     ? barCategoryGap : this.query(queryTarget, 'barCategoryGap');
	                }
	            }
	            
	            return {
	                barWidthMap: barWidthMap,
	                barMaxWidthMap: barMaxWidthMap,
	                barMinHeightMap: barMinHeightMap,
	                sBarWidth: sBarWidth,
	                sBarMaxWidth: sBarMaxWidth,
	                sBarWidthCounter: sBarWidthCounter,
	                sBarWidthTotal: sBarWidthTotal,
	                barGap: barGap,
	                barCategoryGap: barCategoryGap
	            };
	        },
	        
	        /**
	         * 检查是否满足barMaxWidthMap 
	         */
	        _recheckBarMaxWidth: function(
	                locationMap,
	                barWidthMap, barMaxWidthMap, barMinHeightMap,
	                gap,   // 总宽度
	                barWidth, barGap, interval
	        ) {
	            for (var j = 0, k = locationMap.length; j < k; j++) {
	                var seriesIndex = locationMap[j][0];
	                if (barMaxWidthMap[seriesIndex] && barMaxWidthMap[seriesIndex] < barWidth) {
	                    // 不满足最大宽度
	                    gap -= barWidth - barMaxWidthMap[seriesIndex]; // 总宽度减少
	                }
	            }
	            
	            return {
	                barWidthMap: barWidthMap,
	                barMaxWidthMap: barMaxWidthMap,
	                barMinHeightMap: barMinHeightMap ,
	                gap: gap,   // 总宽度
	                barWidth: barWidth,
	                barGap: barGap,
	                interval: interval
	            };
	        },
	        
	        /**
	         * 生成最终图形数据
	         */
	        _getBarItem: function (seriesIndex, dataIndex, name, x, y, width, height, orient) {
	            var series = this.series;
	            var barShape;
	            var serie = series[seriesIndex];
	            var data = serie.data[dataIndex];
	            // 多级控制
	            var defaultColor = this._sIndex2ColorMap[seriesIndex];
	            var queryTarget = [data, serie];
	            
	            var normal = this.deepMerge(queryTarget, 'itemStyle.normal');
	            var emphasis = this.deepMerge(queryTarget, 'itemStyle.emphasis');
	            var normalBorderWidth = normal.barBorderWidth;
	            
	            barShape = {
	                zlevel: serie.zlevel,
	                z: serie.z,
	                clickable: this.deepQuery(queryTarget, 'clickable'),
	                style: {
	                    x: x,
	                    y: y,
	                    width: width,
	                    height: height,
	                    brushType: 'both',
	                    color: this.getItemStyleColor(
	                        this.deepQuery(queryTarget, 'itemStyle.normal.color') || defaultColor,
	                        seriesIndex, dataIndex, data
	                    ),
	                    radius: normal.barBorderRadius,
	                    lineWidth: normalBorderWidth,
	                    strokeColor: normal.barBorderColor
	                },
	                highlightStyle: {
	                    color: this.getItemStyleColor(
	                        this.deepQuery(queryTarget, 'itemStyle.emphasis.color'),
	                        seriesIndex, dataIndex, data
	                    ),
	                    radius: emphasis.barBorderRadius,
	                    lineWidth: emphasis.barBorderWidth,
	                    strokeColor: emphasis.barBorderColor
	                },
	                _orient: orient
	            };
	            var barShapeStyle = barShape.style;
	            barShape.highlightStyle.color = barShape.highlightStyle.color
	                            || (typeof barShapeStyle.color === 'string'
	                                ? zrColor.lift(barShapeStyle.color, -0.3)
	                                : barShapeStyle.color
	                               );
	            //亚像素优化
	            barShapeStyle.x = Math.floor(barShapeStyle.x);
	            barShapeStyle.y = Math.floor(barShapeStyle.y);
	            barShapeStyle.height = Math.ceil(barShapeStyle.height);
	            barShapeStyle.width = Math.ceil(barShapeStyle.width);
	            // 考虑线宽的显示优化
	            if (normalBorderWidth > 0
	                && barShapeStyle.height > normalBorderWidth
	                && barShapeStyle.width > normalBorderWidth
	            ) {
	                barShapeStyle.y += normalBorderWidth / 2;
	                barShapeStyle.height -= normalBorderWidth;
	                barShapeStyle.x += normalBorderWidth / 2;
	                barShapeStyle.width -= normalBorderWidth;
	            }
	            else {
	                // 太小了或者线宽小于0，废了边线
	                barShapeStyle.brushType = 'fill';
	            }
	            
	            barShape.highlightStyle.textColor = barShape.highlightStyle.color;
	            
	            barShape = this.addLabel(barShape, serie, data, name, orient);
	            var barShapeStyleList = [                    // normal emphasis都需要检查
	                barShapeStyle,
	                barShape.highlightStyle
	            ];
	            for (var i = 0, l = barShapeStyleList.length; i < l; i++) {
	                var textPosition = barShapeStyleList[i].textPosition;
	                if (textPosition === 'insideLeft'
	                    || textPosition === 'insideRight'
	                    || textPosition === 'insideTop'
	                    || textPosition === 'insideBottom'
	                ) {
	                    var gap = 5;
	                    switch (textPosition) {
	                        case 'insideLeft':
	                            barShapeStyleList[i].textX = barShapeStyle.x + gap;
	                            barShapeStyleList[i].textY = barShapeStyle.y + barShapeStyle.height / 2;
	                            barShapeStyleList[i].textAlign = 'left';
	                            barShapeStyleList[i].textBaseline = 'middle';
	                            break;
	                        case 'insideRight':
	                            barShapeStyleList[i].textX = barShapeStyle.x + barShapeStyle.width - gap;
	                            barShapeStyleList[i].textY = barShapeStyle.y + barShapeStyle.height / 2;
	                            barShapeStyleList[i].textAlign = 'right';
	                            barShapeStyleList[i].textBaseline = 'middle';
	                            break;
	                        case 'insideTop':
	                            barShapeStyleList[i].textX = barShapeStyle.x + barShapeStyle.width / 2;
	                            barShapeStyleList[i].textY = barShapeStyle.y + gap / 2;
	                            barShapeStyleList[i].textAlign = 'center';
	                            barShapeStyleList[i].textBaseline = 'top';
	                            break;
	                        case 'insideBottom':
	                            barShapeStyleList[i].textX = barShapeStyle.x + barShapeStyle.width / 2;
	                            barShapeStyleList[i].textY = barShapeStyle.y + barShapeStyle.height - gap / 2;
	                            barShapeStyleList[i].textAlign = 'center';
	                            barShapeStyleList[i].textBaseline = 'bottom';
	                            break;
	                    }
	                    barShapeStyleList[i].textPosition = 'specific';
	                    barShapeStyleList[i].textColor = barShapeStyleList[i].textColor || '#fff';
	                }
	            }
	            

	            if (this.deepQuery([data, serie, this.option],'calculable')) {
	                this.setCalculable(barShape);
	                barShape.draggable = true;
	            }

	            ecData.pack(
	                barShape,
	                series[seriesIndex], seriesIndex,
	                series[seriesIndex].data[dataIndex], dataIndex,
	                name
	            );

	            return barShape;
	        },

	        // 位置转换
	        getMarkCoord: function (seriesIndex, mpData) {
	            var serie = this.series[seriesIndex];
	            var xMarkMap = this.xMarkMap[seriesIndex];
	            var xAxis = this.component.xAxis.getAxis(serie.xAxisIndex);
	            var yAxis = this.component.yAxis.getAxis(serie.yAxisIndex);
	            var dataIndex;
	            var pos;
	            if (mpData.type
	                && (mpData.type === 'max' || mpData.type === 'min' || mpData.type === 'average')
	            ) {
	                // 特殊值内置支持
	                var valueIndex = mpData.valueIndex != null 
	                                 ? mpData.valueIndex 
	                                 : xMarkMap.maxX0 != null 
	                                   ? '1' : '';
	                pos = [
	                    xMarkMap[mpData.type + 'X' + valueIndex],
	                    xMarkMap[mpData.type + 'Y' + valueIndex],
	                    xMarkMap[mpData.type + 'Line' + valueIndex],
	                    xMarkMap[mpData.type + valueIndex]
	                ];
	            }
	            else if (xMarkMap.isHorizontal) {
	                // 横向
	                dataIndex = typeof mpData.xAxis === 'string' && xAxis.getIndexByName
	                            ? xAxis.getIndexByName(mpData.xAxis)
	                            : (mpData.xAxis || 0);
	                
	                var x = xMarkMap[dataIndex];
	                x = x != null
	                    ? x 
	                    : typeof mpData.xAxis != 'string' && xAxis.getCoordByIndex
	                      ? xAxis.getCoordByIndex(mpData.xAxis || 0)
	                      : xAxis.getCoord(mpData.xAxis || 0);
	                
	                pos = [x, yAxis.getCoord(mpData.yAxis || 0)];
	            }
	            else {
	                // 纵向
	                dataIndex = typeof mpData.yAxis === 'string' && yAxis.getIndexByName
	                            ? yAxis.getIndexByName(mpData.yAxis)
	                            : (mpData.yAxis || 0);
	                
	                var y = xMarkMap[dataIndex];
	                y = y != null
	                    ? y
	                    : typeof mpData.yAxis != 'string' && yAxis.getCoordByIndex
	                      ? yAxis.getCoordByIndex(mpData.yAxis || 0)
	                      : yAxis.getCoord(mpData.yAxis || 0);
	                
	                pos = [xAxis.getCoord(mpData.xAxis || 0), y];
	            }
	            
	            return pos;
	        },
	        
	        /**
	         * 刷新
	         */
	        refresh: function (newOption) {
	            if (newOption) {
	                this.option = newOption;
	                this.series = newOption.series;
	            }
	            
	            this.backupShapeList();
	            this._buildShape();
	        },
	        
	        /**
	         * 动态数据增加动画 
	         */
	        addDataAnimation: function (params, done) {
	            var series = this.series;
	            var aniMap = {}; // seriesIndex索引参数
	            for (var i = 0, l = params.length; i < l; i++) {
	                aniMap[params[i][0]] = params[i];
	            }
	            var x;
	            var dx;
	            var y;
	            var dy;
	            var serie;
	            var seriesIndex;
	            var dataIndex;

	            var aniCount = 0;
	            function animationDone() {
	                aniCount--;
	                if (aniCount === 0) {
	                    done && done();
	                }
	            }
	            for (var i = this.shapeList.length - 1; i >= 0; i--) {
	                seriesIndex = ecData.get(this.shapeList[i], 'seriesIndex');
	                if (aniMap[seriesIndex] && !aniMap[seriesIndex][3]) {
	                    // 有数据删除才有移动的动画
	                    if (this.shapeList[i].type === 'rectangle') {
	                        // 主动画
	                        dataIndex = ecData.get(this.shapeList[i], 'dataIndex');
	                        serie = series[seriesIndex];
	                        if (aniMap[seriesIndex][2] && dataIndex === serie.data.length - 1) {
	                            // 队头加入删除末尾
	                            this.zr.delShape(this.shapeList[i].id);
	                            continue;
	                        }
	                        else if (!aniMap[seriesIndex][2] && dataIndex === 0) {
	                            // 队尾加入删除头部
	                            this.zr.delShape(this.shapeList[i].id);
	                            continue;
	                        }
	                        if (this.shapeList[i]._orient === 'horizontal') {
	                            // 条形图
	                            dy = this.component.yAxis.getAxis(serie.yAxisIndex || 0).getGap();
	                            y = aniMap[seriesIndex][2] ? -dy : dy;
	                            x = 0;
	                        }
	                        else {
	                            // 柱形图
	                            dx = this.component.xAxis.getAxis(serie.xAxisIndex || 0).getGap();
	                            x = aniMap[seriesIndex][2] ? dx : -dx;
	                            y = 0;
	                        }
	                        this.shapeList[i].position = [0, 0];

	                        aniCount++;
	                        this.zr.animate(this.shapeList[i].id, '')
	                            .when(
	                                this.query(this.option, 'animationDurationUpdate'),
	                                { position: [x, y] }
	                            )
	                            .done(animationDone)
	                            .start();
	                    }
	                }
	            }
	            
	            // 没有动画
	            if (!aniCount) {
	                done && done();
	            }
	        }
	    };
	    
	    zrUtil.inherits(Bar, ChartBase);
	    
	    // 图表注册
	    __webpack_require__(365).define('bar', Bar);
	    
	    return Bar;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});