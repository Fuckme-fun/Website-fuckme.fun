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
})({"eFhvG":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0d71b678ef342721";
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

},{}],"iSuo3":[function(require,module,exports) {
var _icebreakers2Json = require("./icebreakers2.json");
const name = _icebreakers2Json.icebreakers;
var quotefield = document.getElementById('quotefield');
var typefield = document.getElementById('quotetype');
var button = document.getElementById('newquotebutton');
button.addEventListener('click', (e)=>{
    newquoteonpage();
    console.log(e);
});
newquoteonpage();
function newquoteonpage() {
    var newquote = getrandomobjectfromarray(name);
    quotefield.innerHTML = newquote.spruch;
    typefield.innerHTML = newquote.Kategorie;
}
function getrandomobjectfromarray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

},{"./icebreakers2.json":"gO3PX"}],"gO3PX":[function(require,module,exports) {
module.exports = JSON.parse("{\"icebreakers\":[{\"spruch\":\"Ist es so heiß hier drin oder bist du das?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Na, du auch hier?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hey, ich mag dich.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hey Praline, darf ich dich vernaschen?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Wenn du eine Kartoffel wärst, dann wärst du eine Süßkartoffel.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hey Schnitte, schon belegt?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hast du Zucker gefrühstückt oder warum bist du so süß?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hey Praline, brauchst du noch ne cremige Füllung?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Du bist so süß! Wenn ich dich anschaue, bekomme ich sofort Diabetes.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Sorry, ich habe meine Telefonnummer verloren, kannst du mir deine borgen?\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Sind deine Eltern Terroristen? Denn du bist scharf wie eine Bombe.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Kannst du essen? Kannst du gehen? Lass uns essen gehen!\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Ich finde, mein Nachname passt gut zu deinem Vornamen.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hast du mal einen Stift? Ich möchte mir deine Nummer aufschreiben.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Du siehst so aus, als hättest du das dringende Bedürfnis, mir deinen Namen zu nennen.\",\"language\":\"de\",\"Kategorie\":\"Klassiker\"},{\"spruch\":\"Hey du, was willst du morgen zum Frühstück ans Bett?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Hab mein Bett heute frisch bezogen, leider mit zwei Bettdecken. Willst du eine abhaben?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Auf welchen Anmachspruch würdest du denn am positivsten reagieren?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Endlich die passende Frau zu meiner Bettwäsche.\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Du bist so schön, dass es weh tut, dich anzusehen.\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Eigentlich wollte ich dich ja anbaggern, aber ich hab meinen Bagger leider vergessen. Dafür habe ich meinen Löffel dabei. Darf ich dich auch anlöffeln?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Du musst der wahre Grund für die globale Erderwärmung sein. \",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Du bist der süßeste Snack, der mir je über den Weg gelaufen ist. Darf ich dich ohne Reue vernaschen?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Dein Bild hab ich irgendwo schon einmal gesehen… Stimmt, im Lexikon! Direkt neben Boah ey.\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Darf ich dir heute Nacht Honig um den Bauchnabel streichen?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Behältst du mich, wenn ich dir bis nach Hause nachlaufe?\",\"language\":\"de\",\"Kategorie\":\"Dumm\"},{\"spruch\":\"Du bist so heiß! Ich würde deinen Bruder heiraten, um dich näher kennenzulernen!\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Wenn du nicht weißt, wo du mit deinen Händen hin sollst – gib sie mir und ich halt sie für dich fest.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Sorry, ich möchte dich nicht dumm anmachen, aber ich hätte nichts dagegen, wenn du es tust.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Weißt du, dass ganz viele Männer mit einem dummen Spruch versuchen, eine Frau anzumachen? Also ich bin da ganz anders.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Was gibst es sonst für Sehenswürdigkeiten in der Stadt – abgesehen von dir?\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Verrätst du mir deinen Namen? Oder darf ich dich gleich „meins“ nennen?\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Ich hoffe, du kennst dich mit Wiederbelebungsmaßnahmen aus, denn mir bleibt deinetwegen gleich die Luft weg.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Eigentlich bin ich ja kein Typ für eine Nacht, aber für dich würde ich gerne eine Ausnahme machen.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Ich bin neu in der Stadt – kannst du mir den Weg zu dir nach Hause zeigen?\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Hey, wollte mich nur kurz für deinen Schluckauf entschuldigen – musste den ganzen Tag an dich denken.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Wie du aussiehst, hast du nur auf mich gewartet.\",\"language\":\"de\",\"Kategorie\":\"Noch dümmer\"},{\"spruch\":\"Ich steh im Telefonbuch unter „H“ wie „Hengst“\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Hey, ich bin Ken. Willst du meine Barbie sein?\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Sag mal, ist dein Pullover aus Kamelhaar, oder warum hast du so wohlgeformte Höcker?\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Ich habe gelesen, dass Küssen das Leben verlängert. Komm mit zu mir nach Hause und lass uns unsterblich werden!\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Ich bin so schlecht im Bett, das musst du unbedingt mal erlebt haben.\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Wow, siehst du zerknittert aus – soll ich mal über dich drüberbügeln?\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Sind deine Brüste echt? Darf ich mal anfassen?\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Was machst du denn hier? Du müsstest schon längst in meinem Bett sein.\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Ich bin Umzugshelfer, soll ich dir beim Ausziehen helfen?\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Ich bin vom ADAC, ich bin hier um dich abzuschleppen.\",\"language\":\"de\",\"Kategorie\":\"Billig\"},{\"spruch\":\"Spielst du mit mir Gummibärchen? Ich spiele den Gummi, du das Bärchen?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Sag mal, schmeckt deine Zunge genauso süß, wie du aussiehst?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich bin gut drauf, bist du gut drunter?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Willst du deinen Körper mit mir teilen?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich hoffe du kannst lesen, denn es steht etwas in meiner Hose.\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich bin Filmemacher, willst du mal auf meine Besetzungscouch?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich hab mein Pferd verloren. Darf ich auf dir weiterreiten?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Meine Zunge ist ganz verspannt, wie wäre es mit einer Massage?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Lass uns etwas machen, dass sich auf Stricken reimt!\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich bin Meister Propper, darf ich mal dein Becken schrubben?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Hast du auch eine gute Haftpflichtversicherung? Denn du hast mir gerade eine Beule in die Hose gemacht!\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Darf ich meinen USB-Stick in deinen USB-Port stecken?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich hab so einen trockenen Mund – du hast nicht zufällig eine nasse Zunge für mich?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Baby kannst du schwimmen? Ich würde dich gerne ins Becken stoßen.\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Wärst du eine Tür, würde ich dich die ganze Nacht knallen.\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich steh auf Katzen… Denn ich bring jede Muschi zum schnurren.\",\"language\":\"de\",\"Kategorie\":\"Eklig\"},{\"spruch\":\"Ich bin vom TÜV, darf ich mal deine Hupen testen?\",\"language\":\"de\",\"Kategorie\":\"Eklig\"}]}");

},{}]},["eFhvG","iSuo3"], "iSuo3", "parcelRequire9ac7")

//# sourceMappingURL=icebreaker.ef342721.js.map
