webpackJsonp([15178676390636814000],{

/***/ "../../../../Users/gaudi/work/landr/node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ "../../../../Users/gaudi/work/landr/node_modules/mitt/dist/mitt.js":
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(t,o){(n[t]||(n[t]=[])).push(o)},off:function(t,o){n[t]&&n[t].splice(n[t].indexOf(o)>>>0,1)},emit:function(t,o){(n[t]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(t,o)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-docs-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/docs.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(2442039017586507000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/babel-loader/lib/index.js?{\"presets\":[\"/Users/gaudi/work/landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-runtime/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/docs.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-index-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(6628547091953441000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/babel-loader/lib/index.js?{\"presets\":[\"/Users/gaudi/work/landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-runtime/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/index.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-changelog-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/changelog.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(5527529386960343000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/babel-loader/lib/index.js?{\"presets\":[\"/Users/gaudi/work/landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-runtime/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/changelog.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-index-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(16672170583965837000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/babel-loader/lib/index.js?{\"presets\":[\"/Users/gaudi/work/landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-runtime/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/index.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-templates-docs-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/templates/docs.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(17820611853138387000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/babel-loader/lib/index.js?{\"presets\":[\"/Users/gaudi/work/landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/babel-preset-env/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/Users/gaudi/work/landr/packages/gatsby-plugin-landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-runtime/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/templates/docs.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-plugin-catch-links/catch-links.js":
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (root, cb) {
	  root.addEventListener("click", function (ev) {
	    if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
	      return true;
	    }
	
	    var anchor = null;
	    for (var n = ev.target; n.parentNode; n = n.parentNode) {
	      if (n.nodeName === "A") {
	        anchor = n;
	        break;
	      }
	    }
	    if (!anchor) return true;
	
	    // Don't catch links where a target (other than self) is set
	    // e.g. _blank.
	    if (anchor.target && anchor.target.toLowerCase() !== "_self") return true;
	
	    // Don't catch links pointed to the same page but with a hash.
	    if (anchor.pathname === window.location.pathname && anchor.target.hash !== "") {
	      return true;
	    }
	
	    // Don't catch links pointed at what look like file extensions (other than
	    // .htm/html extensions).
	    if (anchor.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1) {
	      return true;
	    }
	
	    // IE clears the host value if the anchor href changed after creation, e.g.
	    // in React. Creating a new anchor element to ensure host value is present
	    var a1 = document.createElement("a");
	    a1.href = anchor.href;
	
	    // In IE, the default port is included in the anchor host but excluded from
	    // the location host.  This affects the ability to directly compare
	    // location host to anchor host.  For example: http://example.com would
	    // have a location.host of 'example.com' and an anchor.host of
	    // 'example.com:80' Creating anchor from the location.href to normalize the
	    // host value.
	    var a2 = document.createElement("a");
	    a2.href = window.location.href;
	
	    if (a1.host !== a2.host) return true;
	
	    ev.preventDefault();
	
	    cb(anchor.getAttribute("href"));
	    return false;
	  });
	};

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-plugin-catch-links/gatsby-browser.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _gatsbyLink = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/gatsby-link/index.js");
	
	var _catchLinks = __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-plugin-catch-links/catch-links.js");
	
	var _catchLinks2 = _interopRequireDefault(_catchLinks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _catchLinks2.default)(window, function (href) {
	  (0, _gatsbyLink.navigateTo)(href);
	});

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-remark-autolink-headers/gatsby-browser.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var scrollToHash = function scrollToHash(offsetY) {
	  // Make sure React has had a change to flush to DOM first.
	  setTimeout(function () {
	    var hash = window.location.hash.replace("#", "");
	    if (hash !== "") {
	      var element = document.getElementById(hash);
	      if (element) {
	        var offset = element.offsetTop;
	        window.scrollTo(0, offset - offsetY);
	      }
	    }
	  }, 10);
	};
	
	exports.onClientEntry = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	  // This code is only so scrolling to header hashes works in development.
	  // For production, the equivalent code is in gatsby-ssr.js.
	  if (false) {
	    scrollToHash(offsetY);
	  }
	};
	
	exports.onRouteUpdate = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	
	  scrollToHash(offsetY);
	};

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	patch();
	
	function patch() {
	  var head = document.querySelector("head");
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    });
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== "SCRIPT") {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("Script is not a script", script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}
	//# sourceMappingURL=patch.js.map

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/api-runner-browser.js":
/***/ (function(module, exports, __webpack_require__) {

	var plugins = [{
	      plugin: __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-remark-autolink-headers/gatsby-browser.js"),
	      options: {"plugins":[]},
	    },{
	      plugin: __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),
	      options: {"plugins":[]},
	    }]
	"use strict";
	
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-browser.js'),
	//   require('/path/to/plugin2/gatsby-browser.js'),
	// ]
	
	module.exports = function (api, args, defaultReturn) {
	  // Run each plugin in series.
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	};
	//# sourceMappingURL=api-runner-browser.js.map

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/async-requires.js":
/***/ (function(module, exports, __webpack_require__) {

	// prefer default export if available
	const preferDefault = m => m && m.default || m
	
	exports.components = {
	  "component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-templates-docs-js": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-templates-docs-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/templates/docs.js"),
	  "component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-changelog-js": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-changelog-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/changelog.js"),
	  "component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-index-js": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-index-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/pages/index.js")
	}
	
	exports.json = {
	  "layout-docs.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-docs.json"),
	  "docs.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs.json"),
	  "layout-docs.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-docs.json"),
	  "docs-how-it-works.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs-how-it-works!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs-how-it-works.json"),
	  "layout-index.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-index.json"),
	  "changelog.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---changelog!../../../../private/tmp/landr/resin-io/landr/.cache/json/changelog.json"),
	  "layout-index.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-index.json"),
	  "index.json": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!../../../../private/tmp/landr/resin-io/landr/.cache/json/index.json")
	}
	
	exports.layouts = {
	  "component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-docs-js": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-docs-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/docs.js"),
	  "component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-index-js": __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-index-js!../../../../Users/gaudi/work/landr/packages/gatsby-plugin-landr/www/layouts/index.js")
	}

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/component-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/core-js/object/get-prototype-of.js");
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/classCallCheck.js");
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/createClass.js");
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/inherits.js");
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loader = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _reactRouterDom = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react-router-dom/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    null,
	    children()
	  );
	};
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	
	var ComponentRenderer = function (_React$Component) {
	  (0, _inherits3.default)(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    (0, _classCallCheck3.default)(this, ComponentRenderer);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ComponentRenderer.__proto__ || (0, _getPrototypeOf2.default)(ComponentRenderer)).call(this, props));
	
	    _this.state = {
	      location: props.location,
	      pageResources: _loader2.default.getResourcesForPathname(props.location.pathname)
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(ComponentRenderer, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      // hmm, would this ever be false?
	
	      if (this.state.pageResources !== nextProps.pageResources) {
	        var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	        if (!pageResources) {
	          // Page resources won't be set in cases where the browser back button
	          // or forward button is pushed as we can't wait as normal for resources
	          // to load before changing the page.
	          _loader2.default.getResourcesForPathname(nextProps.location.pathname, function (pageResources) {
	            _this2.setState({
	              location: nextProps.location,
	              pageResources: pageResources
	            });
	          });
	        } else {
	          this.setState({
	            location: nextProps.location,
	            pageResources: pageResources
	          });
	        }
	      }
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      // Listen to events so when our page gets updated, we can transition.
	      // This is only useful on delayed transitions as the page will get rendered
	      // without the necessary page resources and then re-render once those come in.
	      _emitter2.default.on("onPostLoadPageResources", function (e) {
	        if (e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	          _this3.setState({ pageResources: e.pageResources });
	        }
	      });
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // Check if the component or json have changed.
	      if (this.state.pageResources.component !== nextState.pageResources.component) {
	        return true;
	      }
	      if (this.state.pageResources.layout !== nextState.pageResources.layout) {
	        return true;
	      }
	      if (this.state.pageResources.json !== nextState.pageResources.json) {
	        return true;
	      }
	      // Check if location has changed on a page using internal routing
	      // via matchPath configuration.
	      if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && nextState.pageResources.page.matchPath) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this4 = this;
	
	      if (this.state.pageResources) {
	        return (0, _react.createElement)((0, _reactRouterDom.withRouter)(this.state.pageResources.layout || DefaultLayout), (0, _extends3.default)({}, this.state.pageResources.layoutJson, this.props, {
	          children: function children(layoutProps) {
	            return (0, _react.createElement)(_this4.state.pageResources.component, (0, _extends3.default)({
	              key: _this4.props.location.pathname
	            }, layoutProps, _this4.props, _this4.state.pageResources.json));
	          }
	        }));
	      } else {
	        return null;
	      }
	    }
	  }]);
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	exports.default = ComponentRenderer;
	//# sourceMappingURL=component-renderer.js.map

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/mitt/dist/mitt.js");
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;
	//# sourceMappingURL=emitter.js.map

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/find-page.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react-router-dom/index.js");
	
	var pageCache = {}; // TODO add tests especially for handling prefixed links.
	
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (pathname) {
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = pathname.slice(pathPrefix.length);
	
	    // Remove any hashfragment
	    if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};
	//# sourceMappingURL=find-page.js.map

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---changelog!../../../../private/tmp/landr/resin-io/landr/.cache/json/changelog.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(14563933201992745000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/changelog.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs-how-it-works!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs-how-it-works.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3015978525832329700, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs-how-it-works.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(8589468927338865000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/docs.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!../../../../private/tmp/landr/resin-io/landr/.cache/json/index.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(9347362237655822000, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/index.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-docs.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3954140758598355500, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-docs.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-index.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "../../../../Users/gaudi/work/landr/packages/landr/node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3954140758598355500, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/json-loader/index.js!../../../../private/tmp/landr/resin-io/landr/.cache/json/layout-index.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/loader.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _getIterator2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/core-js/get-iterator.js");
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _react = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findPage = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/find-page.js");
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	var inInitialRender = true;
	
	// Prefetcher logic
	if (true) {
	  prefetcher = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/prefetcher.js")({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = resourceName.slice(0, 9) === "component" ? asyncRequires.components[resourceName] || asyncRequires.layouts[resourceName] : asyncRequires.json[resourceName];
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var _module = preferDefault(executeChunk());
	        resourceCache[resourceName] = _module;
	        cb(err, _module);
	      }
	    });
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    var pathPrefix = "";
	    if (false) {
	      pathPrefix = __PATH_PREFIX__;
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue(path) {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(path) {
	    // Check page exists.
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount);
	
	    // Add resources to queue.
	    var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (true) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
	      // If we're loading from a service worker (it's already activated on
	      // this initial render) and we can't find a page, there's a good chance
	      // we're on a new page that this (now old) service worker doesn't know
	      // about so we'll unregister it and reload.
	      if (!findPage(path)) {
	        navigator.serviceWorker.getRegistrations().then(function (registrations) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(registrations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var registration = _step.value;
	
	              registration.unregister();
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	
	          window.location.reload();
	        });
	      }
	    }
	    inInitialRender = false;
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (false) {
	      var page = findPage(path);
	      if (!page) return;
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName],
	        layout: syncRequires.layouts[page.layoutComponentChunkName],
	        layoutJson: syncRequires.json[page.layoutJsonName],
	        page: page
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      var _page = findPage(path);
	
	      if (!_page) {
	        console.log("A page wasn't found for \"" + path + "\"");
	        return;
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path });
	      // Nope, we need to load resource(s)
	      var component = void 0;
	      var json = void 0;
	      var layout = void 0;
	      var layoutJson = void 0;
	      // Load the component/json/layout and parallel and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json && layout && layoutJson) {
	          pathScriptsCache[path] = { component: component, json: json, layout: layout, layoutJson: layoutJson };
	          var _pageResources = { component: component, json: json, layout: layout, layoutJson: layoutJson };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          console.log("Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          console.log("Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      getResourceModule(_page.layoutComponentChunkName, function (err, l) {
	        if (err) {
	          console.log("Loading the Layout for " + _page.path + " failed");
	        }
	        layout = l;
	        done();
	      });
	
	      getResourceModule(_page.layoutJsonName, function (err, lj) {
	        if (err) {
	          console.log("Loading the Layout JSON for " + _page.path + " failed");
	        }
	        layoutJson = lj;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	module.exports = queue;
	//# sourceMappingURL=loader.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../Users/gaudi/work/landr/packages/landr/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/pages.json":
/***/ (function(module, exports) {

	module.exports = [{"componentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-templates-docs-js","layout":"docs","layoutComponentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-docs-js","layoutJsonName":"layout-docs.json","jsonName":"docs.json","path":"/docs/"},{"componentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-templates-docs-js","layout":"docs","layoutComponentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-docs-js","layoutJsonName":"layout-docs.json","jsonName":"docs-how-it-works.json","path":"/docs/how-it-works"},{"componentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-changelog-js","layout":"index","layoutComponentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-index-js","layoutJsonName":"layout-index.json","jsonName":"changelog.json","path":"/changelog"},{"componentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-pages-index-js","layout":"index","layoutComponentChunkName":"component---users-gaudi-work-landr-packages-gatsby-plugin-landr-www-layouts-index-js","layoutJsonName":"layout-index.json","jsonName":"index.json","path":"/"}]

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/prefetcher.js":
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (_ref) {
	  var getNextQueuedResources = _ref.getNextQueuedResources,
	      createResourceDownload = _ref.createResourceDownload;
	
	  var pagesLoading = [];
	  var resourcesDownloading = [];
	
	  // Do things
	  var startResourceDownloading = function startResourceDownloading() {
	    var nextResource = getNextQueuedResources();
	    if (nextResource) {
	      resourcesDownloading.push(nextResource);
	      createResourceDownload(nextResource);
	    }
	  };
	
	  var reducer = function reducer(action) {
	    switch (action.type) {
	      case "RESOURCE_FINISHED":
	        resourcesDownloading = resourcesDownloading.filter(function (r) {
	          return r !== action.payload;
	        });
	        break;
	      case "ON_PRE_LOAD_PAGE_RESOURCES":
	        pagesLoading.push(action.payload.path);
	        break;
	      case "ON_POST_LOAD_PAGE_RESOURCES":
	        pagesLoading = pagesLoading.filter(function (p) {
	          return p !== action.payload.page.path;
	        });
	        break;
	      case "ON_NEW_RESOURCES_ADDED":
	        break;
	    }
	
	    // Take actions.
	    // Wait for event loop queue to finish.
	    setTimeout(function () {
	      if (resourcesDownloading.length === 0 && pagesLoading.length === 0) {
	        // Start another resource downloading.
	        startResourceDownloading();
	      }
	    }, 0);
	  };
	
	  return {
	    onResourcedFinished: function onResourcedFinished(event) {
	      // Tell prefetcher that the resource finished downloading
	      // so it can grab the next one.
	      reducer({ type: "RESOURCE_FINISHED", payload: event });
	    },
	    onPreLoadPageResources: function onPreLoadPageResources(event) {
	      // Tell prefetcher a page load has started so it should stop
	      // loading anything new
	      reducer({ type: "ON_PRE_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onPostLoadPageResources: function onPostLoadPageResources(event) {
	      // Tell prefetcher a page load has finished so it should start
	      // loading resources again.
	      reducer({ type: "ON_POST_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onNewResourcesAdded: function onNewResourcesAdded() {
	      // Tell prefetcher that more resources to be downloaded have
	      // been added.
	      reducer({ type: "ON_NEW_RESOURCES_ADDED" });
	    },
	    getState: function getState() {
	      return { pagesLoading: pagesLoading, resourcesDownloading: resourcesDownloading };
	    },
	    empty: function empty() {
	      pagesLoading = [];
	      resourcesDownloading = [];
	    }
	  };
	};
	//# sourceMappingURL=prefetcher.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _apiRunnerBrowser = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/api-runner-browser.js");
	
	var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);
	
	var _react = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react-dom/index.js");
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react-router-dom/index.js");
	
	var _reactRouterScroll = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/react-router-scroll/lib/index.js");
	
	var _createBrowserHistory = __webpack_require__("../../../../Users/gaudi/work/landr/node_modules/history/createBrowserHistory.js");
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _emitter = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/pages.json");
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _componentRenderer = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/component-renderer.js");
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/async-requires.js");
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.___emitter = _emitter2.default;
	// emitter.on(`*`, (type, e) => console.log(`emitter`, type, e))
	
	// import invariant from "invariant"
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	
	window.___loader = _loader2.default;
	
	window.matchPath = _reactRouterDom.matchPath;
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser2.default)("onClientEntry");
	
	// Let plugins register a service worker. The plugin just needs
	// to return true.
	if ((0, _apiRunnerBrowser2.default)("registerServiceWorker").length > 0) {
	  __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/register-service-worker.js");
	}
	
	var navigateTo = function navigateTo(pathname) {
	  // If we're already at this path, do nothing.
	  if (window.location.pathname === pathname) {
	    return;
	  }
	
	  // Listen to loading events. If page resources load before
	  // a second, navigate immediately.
	  function eventHandler(e) {
	    if (e.page.path === _loader2.default.getPage(pathname).path) {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      clearTimeout(timeoutId);
	      window.___history.push(pathname);
	    }
	  }
	
	  // Start a timer to wait for a second before transitioning and showing a
	  // loader in case resources aren't around yet.
	  var timeoutId = setTimeout(function () {
	    _emitter2.default.off("onPostLoadPageResources", eventHandler);
	    _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	    window.___history.push(pathname);
	  }, 1000);
	
	  if (_loader2.default.getResourcesForPathname(pathname)) {
	    // The resources are already loaded so off we go.
	    clearTimeout(timeoutId);
	    window.___history.push(pathname);
	  } else {
	    // They're not loaded yet so let's add a listener for when
	    // they finish loading.
	    _emitter2.default.on("onPostLoadPageResources", eventHandler);
	  }
	};
	
	// window.___loadScriptsForPath = loadScriptsForPath
	window.___navigateTo = navigateTo;
	
	var history = (0, _createBrowserHistory2.default)();
	
	// Call onRouteUpdate on the initial page load.
	(0, _apiRunnerBrowser2.default)("onRouteUpdate", {
	  location: history.location,
	  action: history.action
	});
	
	function attachToHistory(history) {
	  if (!window.___history) {
	    window.___history = history;
	
	    history.listen(function (location, action) {
	      (0, _apiRunnerBrowser2.default)("onRouteUpdate", { location: location, action: action });
	    });
	  }
	}
	
	function shouldUpdateScroll(prevRouterProps, _ref) {
	  var pathname = _ref.location.pathname;
	
	  var results = (0, _apiRunnerBrowser2.default)("shouldUpdateScroll", {
	    prevRouterProps: prevRouterProps,
	    pathname: pathname
	  });
	  if (results.length > 0) {
	    return results[0];
	  }
	
	  if (prevRouterProps) {
	    var oldPathname = prevRouterProps.location.pathname;
	
	    if (oldPathname === pathname) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var AltRouter = (0, _apiRunnerBrowser2.default)("replaceRouterComponent", { history: history })[0];
	var DefaultRouter = function DefaultRouter(_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(
	    _reactRouterDom.BrowserRouter,
	    { history: history },
	    children
	  );
	};
	
	_loader2.default.getResourcesForPathname(window.location.pathname, function () {
	  var Root = function Root() {
	    return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_reactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)(_reactRouterDom.Route, {
	      render: function render(props) {
	        attachToHistory(props.history);
	        if (_loader2.default.getPage(props.location.pathname)) {
	          return (0, _react.createElement)(_componentRenderer2.default, (0, _extends3.default)({}, props));
	        } else {
	          return (0, _react.createElement)(_componentRenderer2.default, {
	            location: { pathname: "/404.html" }
	          });
	        }
	      }
	    })));
	  };
	
	  var NewRoot = (0, _apiRunnerBrowser2.default)("wrapRootComponent", { Root: Root }, Root)[0];
	  _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0);
	});
	//# sourceMappingURL=production-app.js.map

/***/ }),

/***/ "../../../../private/tmp/landr/resin-io/landr/.cache/register-service-worker.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emitter = __webpack_require__("../../../../private/tmp/landr/resin-io/landr/.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/";
	if ((undefined)) {
	  pathPrefix = ("/landr") + "/";
	}
	
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker.register(pathPrefix + "sw.js").then(function (reg) {
	    reg.addEventListener("updatefound", function () {
	      // The updatefound event implies that reg.installing is set; see
	      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
	      var installingWorker = reg.installing;
	      console.log("installingWorker", installingWorker);
	      installingWorker.addEventListener("statechange", function () {
	        switch (installingWorker.state) {
	          case "installed":
	            if (navigator.serviceWorker.controller) {
	              // At this point, the old content will have been purged and the fresh content will
	              // have been added to the cache.
	              // We reload immediately so the user sees the new content.
	              // This could/should be made configurable in the future.
	              window.location.reload();
	            } else {
	              // At this point, everything has been precached.
	              // It's the perfect time to display a "Content is cached for offline use." message.
	              console.log("Content is now available offline!");
	              _emitter2.default.emit("sw:installed");
	            }
	            break;
	
	          case "redundant":
	            console.error("The installing service worker became redundant.");
	            break;
	        }
	      });
	    });
	  }).catch(function (e) {
	    console.error("Error during service worker registration:", e);
	  });
	}
	//# sourceMappingURL=register-service-worker.js.map

/***/ })

});
//# sourceMappingURL=app-0fcac3972b61c6662d41.js.map