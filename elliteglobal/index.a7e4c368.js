// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fE59v":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "aafb8ff4a7e4c368";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cndOY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweezerJs = require("./tweezer.js");
var _tweezerJsDefault = parcelHelpers.interopDefault(_tweezerJs);
var _utilities = require("./utilities");
let INSTANCE_COUNTER = 0;
const TWEEN_MAX_VALUE = 10000;
const defaultOptions = {
    container: document.body,
    panelSelector: '> section',
    directionThreshold: 50,
    delay: 0,
    duration: 300,
    easing: (t)=>t
};
class PanelSnap {
    constructor(options){
        this.options = {
            ...defaultOptions,
            ...options
        };
        if (this.options.container.dataset.panelsnapId) throw new Error('PanelSnap is already initialised on this container, aborting.');
        this.container = this.options.container;
        this.scrollContainer = _utilities.getScrollingElement(this.container);
        this.scrollEventContainer = _utilities.getScrollEventContainer(this.container);
        INSTANCE_COUNTER += 1;
        this.instanceIndex = INSTANCE_COUNTER;
        this.container.dataset.panelsnapId = this.instanceIndex;
        const panelQuery = `[data-panelsnap-id="${this.instanceIndex}"] ${this.options.panelSelector}`;
        this.panelList = Array.from(document.querySelectorAll(panelQuery));
        this.events = [];
        this.isEnabled = true;
        this.isInteracting = false;
        this.scrollTimeout = null;
        this.resetAnimation();
        this.onInteractStart = this.onInteractStart.bind(this);
        this.onInteractStop = this.onInteractStop.bind(this);
        this.onInteractStart = this.onInteractStart.bind(this);
        this.onInteractStop = this.onInteractStop.bind(this);
        this.onInteractStart = this.onInteractStart.bind(this);
        this.onInteractStop = this.onInteractStop.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onInteract = this.onInteract.bind(this);
        this.scrollEventContainer.addEventListener('keydown', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('keyup', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('mousedown', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('mouseup', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('touchstart', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('touchend', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('scroll', this.onScroll, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.addEventListener('wheel', this.onInteract, _utilities.passiveIsSupported && {
            passive: true
        });
        this.findSnapTarget();
    }
    destroy() {
        // Stop current animations
        this.stopAnimation();
        // Prevent future activity
        this.disable();
        // Remove event lisiteners
        this.scrollEventContainer.removeEventListener('keydown', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('keyup', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('mousedown', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('mouseup', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('touchstart', this.onInteractStart, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('touchend', this.onInteractStop, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('scroll', this.onScroll, _utilities.passiveIsSupported && {
            passive: true
        });
        this.scrollEventContainer.removeEventListener('wheel', this.onInteract, _utilities.passiveIsSupported && {
            passive: true
        });
        // Remove instance association
        delete this.options.container.dataset.panelsnapId;
    }
    enable() {
        this.isEnabled = true;
    }
    disable() {
        this.isEnabled = false;
    }
    on(name, handler) {
        const currentHandlers = this.events[name] || [];
        this.events[name] = [
            ...currentHandlers,
            handler
        ];
        if (name === 'activatePanel') handler.call(this, this.activePanel);
    }
    off(name, handler) {
        const currentHandlers = this.events[name] || [];
        this.events[name] = currentHandlers.filter((h)=>h !== handler
        );
    }
    emit(name, value) {
        const currentHandlers = this.events[name] || [];
        currentHandlers.forEach((h)=>h.call(this, value)
        );
    }
    onInteractStart() {
        this.stopAnimation();
        this.isInteracting = true;
    }
    onInteractStop() {
        this.isInteracting = false;
        this.findSnapTarget();
    }
    onInteract() {
        this.stopAnimation();
        this.onScroll();
    }
    onScroll() {
        clearTimeout(this.scrollTimeout);
        if (this.isInteracting || this.animation) return;
        this.scrollTimeout = setTimeout(this.findSnapTarget.bind(this), 50 + this.options.delay);
    }
    findSnapTarget() {
        const deltaY = this.scrollContainer.scrollTop - this.currentScrollOffset.top;
        const deltaX = this.scrollContainer.scrollLeft - this.currentScrollOffset.left;
        this.currentScrollOffset = {
            top: this.scrollContainer.scrollTop,
            left: this.scrollContainer.scrollLeft
        };
        const panelsInViewport = _utilities.getElementsInContainerViewport(this.container, this.panelList);
        if (panelsInViewport.length === 0) throw new Error('PanelSnap could not find a snappable panel, aborting.');
        if (panelsInViewport.length > 1) {
            if (Math.abs(deltaY) < this.options.directionThreshold && Math.abs(deltaX) < this.options.directionThreshold && this.activePanel) {
                this.snapToPanel(this.activePanel, deltaY > 0, deltaX > 0);
                return;
            }
            const targetIndex = deltaY > 0 || deltaX > 0 ? 1 : panelsInViewport.length - 2;
            this.snapToPanel(panelsInViewport[targetIndex], deltaY < 0, deltaX < 0);
            return;
        }
        const visiblePanel = panelsInViewport[0];
        if (_utilities.elementFillsContainer(this.container, visiblePanel)) {
            this.activatePanel(visiblePanel);
            return;
        }
        // TODO: Only one partial panel in viewport, add support for space between panels?
        // eslint-disable-next-line no-console
        console.error('PanelSnap does not support space between panels, snapping back.');
        this.snapToPanel(visiblePanel, deltaY > 0, deltaX > 0);
    }
    snapToPanel(panel, toBottom = false, toRight = false) {
        this.activatePanel(panel);
        if (!this.isEnabled) return;
        if (this.animation) this.animation.stop();
        this.targetScrollOffset = _utilities.getTargetScrollOffset(this.container, panel, toBottom, toRight);
        this.animation = new _tweezerJsDefault.default({
            start: 0,
            end: TWEEN_MAX_VALUE,
            duration: this.options.duration
        });
        this.animation.on('tick', this.animationTick.bind(this));
        this.animation.on('done', ()=>{
            this.emit('snapStop', panel);
            this.resetAnimation();
        });
        this.emit('snapStart', panel);
        this.animation.begin();
    }
    animationTick(value) {
        const scrollTopDelta = this.targetScrollOffset.top - this.currentScrollOffset.top;
        const scrollTop = this.currentScrollOffset.top + scrollTopDelta * value / TWEEN_MAX_VALUE;
        this.scrollContainer.scrollTop = scrollTop;
        const scrollLeftDelta = this.targetScrollOffset.left - this.currentScrollOffset.left;
        const scrollLeft = this.currentScrollOffset.left + scrollLeftDelta * value / TWEEN_MAX_VALUE;
        this.scrollContainer.scrollLeft = scrollLeft;
    }
    stopAnimation() {
        if (!this.animation) return;
        this.animation.stop();
        this.resetAnimation();
    }
    resetAnimation() {
        this.currentScrollOffset = {
            top: this.scrollContainer.scrollTop,
            left: this.scrollContainer.scrollLeft
        };
        this.targetScrollOffset = {
            top: 0,
            left: 0
        };
        this.animation = null;
    }
    activatePanel(panel) {
        if (this.activePanel === panel) return;
        this.emit('activatePanel', panel);
        this.activePanel = panel;
    }
}
exports.default = PanelSnap;

},{"./utilities":"h3TgK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./tweezer.js":"4tEBN"}],"h3TgK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getScrollingElement", ()=>getScrollingElement
);
parcelHelpers.export(exports, "getScrollEventContainer", ()=>getScrollEventContainer
);
parcelHelpers.export(exports, "getTargetScrollOffset", ()=>getTargetScrollOffset
);
parcelHelpers.export(exports, "getElementsInContainerViewport", ()=>getElementsInContainerViewport
);
parcelHelpers.export(exports, "elementFillsContainer", ()=>elementFillsContainer
);
parcelHelpers.export(exports, "passiveIsSupported", ()=>passiveIsSupported
);
function getScrollingElement(container) {
    if (container !== document.body) return container;
    if ('scrollingElement' in document) return document.scrollingElement;
    // Fallback for legacy browsers
    if (navigator.userAgent.indexOf('WebKit') > -1) return document.body;
    return document.documentElement;
}
function getScrollEventContainer(container) {
    return container === document.body ? window : getScrollingElement(container);
}
function getContainerRect(container) {
    if (container === document.body) {
        const htmlElement = document.documentElement;
        return {
            top: 0,
            left: 0,
            bottom: htmlElement.clientHeight,
            right: htmlElement.clientWidth,
            height: htmlElement.clientHeight,
            width: htmlElement.clientWidth
        };
    }
    return container.getBoundingClientRect();
}
function getTargetScrollOffset(container, element, toBottom = false, toRight = false) {
    const containerRect = getContainerRect(container);
    const elementRect = element.getBoundingClientRect();
    const scrollTop = elementRect.top - containerRect.top;
    const scrollLeft = elementRect.left - containerRect.left;
    const topCorrection = toBottom ? elementRect.height - containerRect.height : 0;
    const leftCorrection = toRight ? elementRect.width - containerRect.width : 0;
    const scrollingElement = getScrollingElement(container);
    return {
        top: scrollTop + topCorrection + scrollingElement.scrollTop,
        left: scrollLeft + leftCorrection + scrollingElement.scrollLeft
    };
}
function getElementsInContainerViewport(container, elementList) {
    const containerRect = getContainerRect(container);
    return elementList.filter((element)=>{
        const elementRect = element.getBoundingClientRect();
        return elementRect.top < containerRect.bottom && elementRect.right > containerRect.left && elementRect.bottom > containerRect.top && elementRect.left < containerRect.right;
    });
}
function elementFillsContainer(container, element) {
    const containerRect = getContainerRect(container);
    const elementRect = element.getBoundingClientRect();
    return elementRect.top <= containerRect.top && elementRect.bottom >= containerRect.bottom && elementRect.left <= containerRect.left && elementRect.right >= containerRect.right;
}
const passiveIsSupported = function() {
    let isSupported = false;
    try {
        const options = Object.defineProperty({
        }, 'passive', {
            get () {
                isSupported = true;
            }
        });
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
    } catch (e) {
    // Do nothing
    }
    return isSupported;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tEBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _singleTweener = require("./single-tweener");
class Tweezer {
    constructor(opts = {
    }){
        this.duration = opts.duration || 1000;
        this.ease = opts.easing || this._defaultEase;
        this.tweener = opts.tweener || new _singleTweener.SingleTweener(opts);
        this.start = this.tweener.start;
        this.end = this.tweener.end;
        this.frame = null;
        this.next = null;
        this.isRunning = false;
        this.events = {
        };
        this.direction = this.start < this.end ? 'up' : 'down';
    }
    begin() {
        if (!this.isRunning && this.next !== this.end) this.frame = window.requestAnimationFrame(this._tick.bind(this));
        return this;
    }
    stop() {
        window.cancelAnimationFrame(this.frame);
        this.isRunning = false;
        this.frame = null;
        this.timeStart = null;
        this.next = null;
        return this;
    }
    on(name, handler) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(handler);
        return this;
    }
    _emit(name, val) {
        let e = this.events[name];
        e && e.forEach((handler)=>handler.call(this, val)
        );
    }
    _tick(currentTime) {
        this.isRunning = true;
        let lastTick = this.next || this.start;
        if (!this.timeStart) this.timeStart = currentTime;
        this.timeElapsed = currentTime - this.timeStart;
        this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);
        if (this._shouldTick(lastTick)) {
            this._emit('tick', this.tweener.getIntermediateValue(this.next));
            this.frame = window.requestAnimationFrame(this._tick.bind(this));
        } else {
            this._emit('tick', this.tweener.getFinalValue());
            this._emit('done', null);
        }
    }
    _shouldTick(lastTick) {
        return ({
            up: this.next < this.end && lastTick <= this.next,
            down: this.next > this.end && lastTick >= this.next
        })[this.direction];
    }
    _defaultEase(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
    }
}
exports.default = Tweezer;

},{"./single-tweener":"2q3EW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2q3EW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SingleTweener", ()=>SingleTweener
);
class SingleTweener {
    constructor(opts = {
    }){
        this.start = opts.start;
        this.end = opts.end;
        this.decimal = opts.decimal;
    }
    getIntermediateValue(tick) {
        if (this.decimal) return tick;
        else return Math.round(tick);
    }
    getFinalValue() {
        return this.end;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fE59v","cndOY"], "cndOY", "parcelRequire9466")

//# sourceMappingURL=index.a7e4c368.js.map
