(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CanvasTools", [], factory);
	else if(typeof exports === 'object')
		exports["CanvasTools"] = factory();
	else
		root["CanvasTools"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas-tools.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animators/background-animator.ts":
/*!**********************************************!*\
  !*** ./src/animators/background-animator.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_animator_1 = __webpack_require__(/*! ./canvas-animator */ "./src/animators/canvas-animator.ts");
var BackgroundAnimator = /** @class */ (function (_super) {
    __extends(BackgroundAnimator, _super);
    function BackgroundAnimator(canvas, fillStyle) {
        if (fillStyle === void 0) { fillStyle = '#232323'; }
        var _this = _super.call(this, canvas) || this;
        _this.fillStyle = fillStyle;
        _this.draw = function (fillStyle, ctx) {
            if (fillStyle === void 0) { fillStyle = _this.fillStyle; }
            if (ctx === void 0) { ctx = _this.ctx; }
            ctx.save();
            ctx.fillStyle = fillStyle;
            ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
            ctx.restore();
        };
        return _this;
    }
    return BackgroundAnimator;
}(canvas_animator_1.CanvasAnimator));
exports.BackgroundAnimator = BackgroundAnimator;


/***/ }),

/***/ "./src/animators/canvas-animator.ts":
/*!******************************************!*\
  !*** ./src/animators/canvas-animator.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CanvasAnimator = /** @class */ (function () {
    function CanvasAnimator(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    CanvasAnimator.prototype.clear = function (ctx) {
        if (ctx === void 0) { ctx = this.ctx; }
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return CanvasAnimator;
}());
exports.CanvasAnimator = CanvasAnimator;


/***/ }),

/***/ "./src/animators/canvas-grid-animator.ts":
/*!***********************************************!*\
  !*** ./src/animators/canvas-grid-animator.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_animator_1 = __webpack_require__(/*! ./canvas-animator */ "./src/animators/canvas-animator.ts");
var CanvasGridAnimator = /** @class */ (function (_super) {
    __extends(CanvasGridAnimator, _super);
    function CanvasGridAnimator(canvas, grid) {
        var _this = _super.call(this, canvas) || this;
        _this.canvas = canvas;
        _this.grid = grid;
        return _this;
    }
    CanvasGridAnimator.prototype.x = function (x) {
        return Math.round((x * this.canvas.width) / this.grid.cols);
    };
    CanvasGridAnimator.prototype.y = function (y) {
        return Math.round((y * this.canvas.height) / this.grid.rows);
    };
    return CanvasGridAnimator;
}(canvas_animator_1.CanvasAnimator));
exports.CanvasGridAnimator = CanvasGridAnimator;


/***/ }),

/***/ "./src/animators/index.ts":
/*!********************************!*\
  !*** ./src/animators/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./background-animator */ "./src/animators/background-animator.ts"));
__export(__webpack_require__(/*! ./canvas-animator */ "./src/animators/canvas-animator.ts"));
__export(__webpack_require__(/*! ./canvas-grid-animator */ "./src/animators/canvas-grid-animator.ts"));


/***/ }),

/***/ "./src/canvas-tools.ts":
/*!*****************************!*\
  !*** ./src/canvas-tools.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Animators = __webpack_require__(/*! ./animators/index */ "./src/animators/index.ts");
exports.Animators = Animators;
var image_loader_1 = __webpack_require__(/*! ./lib/image-loader */ "./src/lib/image-loader.ts");
exports.ImageLoader = image_loader_1.ImageLoader;
__export(__webpack_require__(/*! ./tools/index */ "./src/tools/index.ts"));


/***/ }),

/***/ "./src/lib/image-loader.ts":
/*!*********************************!*\
  !*** ./src/lib/image-loader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageLoader = /** @class */ (function () {
    function ImageLoader(sources, callback) {
        if (callback === void 0) { callback = function () { }; }
        this.loaded = 0;
        this.images = {};
        var t = 0;
        for (var src in sources) {
            if (sources.hasOwnProperty(src)) {
                t++;
            }
        }
        this.total = t;
        for (var src in sources) {
            if (sources.hasOwnProperty(src)) {
                this.images[src] = new Image();
                this.images[src].src = sources[src];
            }
        }
        this.onLoad(callback);
    }
    ImageLoader.prototype.hasImage = function (img) {
        return this.images[img] != null;
    };
    ImageLoader.prototype.onLoad = function (callback) {
        var _this = this;
        for (var img in this.images) {
            if (this.images.hasOwnProperty(img)) {
                if (this.loaded < this.total) {
                    this.images[img].addEventListener('load', function () {
                        if (++_this.loaded >= _this.total) {
                            callback(_this.images);
                        }
                    }, false);
                }
                else {
                    callback(this.images);
                }
            }
        }
    };
    return ImageLoader;
}());
exports.ImageLoader = ImageLoader;


/***/ }),

/***/ "./src/tools/button.ts":
/*!*****************************!*\
  !*** ./src/tools/button.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rounded_rect_1 = __webpack_require__(/*! ./rounded-rect */ "./src/tools/rounded-rect.ts");
var text_1 = __webpack_require__(/*! ./text */ "./src/tools/text.ts");
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.draw = function (ctx) { return function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, fillStyle = _a.fillStyle, _b = _a.strokeStyle, strokeStyle = _b === void 0 ? 'rgba(255,255,255,0)' : _b, _c = _a.borderWidth, borderWidth = _c === void 0 ? Math.min(4, (width / 36) * 4) : _c, hoverStyle = _a.hoverStyle, text = _a.text, font = _a.font, textStyle = _a.textStyle, state = _a.state;
        ctx.save();
        if (state === 'hover' && hoverStyle) {
            ctx.fillStyle = hoverStyle;
        }
        else if (fillStyle) {
            ctx.fillStyle = fillStyle;
        }
        ctx.lineWidth = borderWidth;
        if (state === 'hover' && hoverStyle) {
            ctx.strokeStyle = hoverStyle;
        }
        else if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
        }
        rounded_rect_1.RoundedRect.draw(ctx, x, y, width, height, radius, true, strokeStyle != null);
        text_1.Text.draw(ctx, text, x + width / 2, y + height / 2, width * 0.9, font, typeof textStyle === 'string' ? textStyle : textStyle());
        ctx.restore();
    }; };
    return Button;
}());
exports.Button = Button;


/***/ }),

/***/ "./src/tools/circle.ts":
/*!*****************************!*\
  !*** ./src/tools/circle.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.create = function (x, y, radius) {
        var center = { x: x, y: y };
        return { center: center, radius: radius };
    };
    /**
     * Draws a circle
     * @param ctx - the canvas rendering context
     * @param circle - the circle to draw
     * @param fillStyle - the style to fill the circle
     * @param strokeStyle - the style to stroke the circle
     */
    Circle.draw = function (ctx, circle, fillStyle, strokeStyle) {
        if (fillStyle === void 0) { fillStyle = 'white'; }
        var _a = circle.center, x = _a.x, y = _a.y;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, circle.radius, 0, Math.PI * 2);
        ctx.closePath();
        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
        }
        ctx.restore();
    };
    return Circle;
}());
exports.Circle = Circle;


/***/ }),

/***/ "./src/tools/index.ts":
/*!****************************!*\
  !*** ./src/tools/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./button */ "./src/tools/button.ts"));
__export(__webpack_require__(/*! ./circle */ "./src/tools/circle.ts"));
__export(__webpack_require__(/*! ./line */ "./src/tools/line.ts"));
__export(__webpack_require__(/*! ./mouse */ "./src/tools/mouse.ts"));
__export(__webpack_require__(/*! ./point */ "./src/tools/point.ts"));
__export(__webpack_require__(/*! ./rect */ "./src/tools/rect.ts"));
__export(__webpack_require__(/*! ./rounded-rect */ "./src/tools/rounded-rect.ts"));
__export(__webpack_require__(/*! ./text */ "./src/tools/text.ts"));


/***/ }),

/***/ "./src/tools/line.ts":
/*!***************************!*\
  !*** ./src/tools/line.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Line = /** @class */ (function () {
    function Line() {
    }
    Line.draw = function (ctx, p1, p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
    };
    return Line;
}());
exports.Line = Line;


/***/ }),

/***/ "./src/tools/mouse.ts":
/*!****************************!*\
  !*** ./src/tools/mouse.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(/*! ./rect */ "./src/tools/rect.ts");
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.addClickEventListener = function (canvas, buttons) {
        var getMousePos = Mouse.getMousePos(canvas);
        var handler = function (e) {
            var pos = getMousePos(e);
            buttons.forEach(function (button) {
                if (button.enabled && rect_1.Rect.isIntersect(pos, button)) {
                    // click event
                    button.onClick(e);
                }
            });
        };
        canvas.addEventListener('click', handler);
        return { type: 'click', function: handler };
    };
    Mouse.addHoverEventListener = function (canvas, buttons) {
        var getMousePos = Mouse.getMousePos(canvas);
        var handler = function (e) {
            var pos = getMousePos(e);
            var intersect = false;
            buttons.forEach(function (button) {
                if (button.enabled && rect_1.Rect.isIntersect(pos, button)) {
                    // hover event
                    if (button.state !== 'hover') {
                        button.state = 'hover';
                        if (button.onMouseEnter) {
                            button.onMouseEnter(e);
                        }
                    }
                    intersect = true;
                }
                else if (button.state === 'hover') {
                    button.state = undefined;
                    if (button.onMouseLeave) {
                        button.onMouseLeave(e);
                    }
                }
            });
            canvas.style.cursor = intersect ? 'pointer' : 'default';
        };
        canvas.addEventListener('mousemove', handler);
        return { type: 'mousemove', function: handler };
    };
    Mouse.getMousePos = function (canvas) { return function (e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
            y: ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
        };
    }; };
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),

/***/ "./src/tools/point.ts":
/*!****************************!*\
  !*** ./src/tools/point.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.create = function (x, y, z) {
        return { x: x, y: y, z: z };
    };
    Point.squaredDistance = function (p1, p2) {
        return (Math.pow(p2.x - p1.x, 2) +
            Math.pow(p2.y - p1.y, 2) +
            (p1.z !== undefined && p2.z !== undefined ? Math.pow(p2.z - p1.z, 2) : 0));
    };
    Point.distance = function (p1, p2) {
        return Math.sqrt(this.squaredDistance(p1, p2));
    };
    Point.scale = function (factor, p) {
        p.x *= factor;
        p.y *= factor;
        if (p.z !== undefined) {
            p.z *= factor;
        }
        return p;
    };
    Point.equals = function (p1) { return function (p2) {
        return (p1 != null &&
            p2 != null &&
            p1.x === p2.x &&
            p1.y === p2.y &&
            p1.z === p2.z);
    }; };
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "./src/tools/rect.ts":
/*!***************************!*\
  !*** ./src/tools/rect.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rect = /** @class */ (function () {
    function Rect() {
    }
    Rect.isIntersect = function (pos, button) {
        return pos.x > button.x &&
            pos.x < button.x + button.width &&
            pos.y < button.y + button.height &&
            pos.y > button.y;
    };
    return Rect;
}());
exports.Rect = Rect;


/***/ }),

/***/ "./src/tools/rounded-rect.ts":
/*!***********************************!*\
  !*** ./src/tools/rounded-rect.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoundedRect = /** @class */ (function () {
    function RoundedRect() {
    }
    RoundedRect.draw = function (ctx, x, y, width, height, radius, fill, stroke) {
        if (radius === void 0) { radius = 10; }
        if (fill === void 0) { fill = true; }
        if (stroke === void 0) { stroke = false; }
        if (typeof radius === 'number') {
            radius = {
                tl: radius,
                tr: radius,
                br: radius,
                bl: radius
            };
        }
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
        ctx.restore();
    };
    return RoundedRect;
}());
exports.RoundedRect = RoundedRect;


/***/ }),

/***/ "./src/tools/text.ts":
/*!***************************!*\
  !*** ./src/tools/text.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.draw = function (ctx, text, x, y, maxWidth, font, fillStyle, textAlign, textBaseline) {
        if (textAlign === void 0) { textAlign = 'center'; }
        if (textBaseline === void 0) { textBaseline = 'middle'; }
        ctx.save();
        ctx.fillStyle = fillStyle;
        ctx.font = font;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillText(text, x, y, maxWidth);
        ctx.restore();
    };
    Text.getFont = function (fontSize) {
        return (fontSize +
            'px Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
    };
    return Text;
}());
exports.Text = Text;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DYW52YXNUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2JhY2tncm91bmQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2NhbnZhcy1hbmltYXRvci50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9hbmltYXRvcnMvY2FudmFzLWdyaWQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL2NhbnZhcy10b29scy50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9saWIvaW1hZ2UtbG9hZGVyLnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvbGluZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9tb3VzZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9wb2ludC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9yZWN0LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL3JvdW5kZWQtcmVjdC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7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QVMsQ0FBQztRQUMxQixHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFDSyxZQUFPLEdBQUcsVUFBQyxRQUFnQjtRQUNoQyxPQUFPLENBQ0wsUUFBUTtZQUNSLHFLQUFxSyxDQUN0SyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0osV0FBQztDQUFBO0FBN0JZLG9CQUFJIiwiZmlsZSI6IkNhbnZhc1Rvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJDYW52YXNUb29sc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDYW52YXNUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDYW52YXNUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2FudmFzLXRvb2xzLnRzXCIpO1xuIiwiaW1wb3J0IHsgQ2FudmFzQW5pbWF0b3IgfSBmcm9tICcuL2NhbnZhcy1hbmltYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kQW5pbWF0b3IgZXh0ZW5kcyBDYW52YXNBbmltYXRvciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHB1YmxpYyBmaWxsU3R5bGU6IHN0cmluZyA9ICcjMjMyMzIzJykge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cbiAgcHVibGljIGRyYXcgPSAoXG4gICAgZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGUsXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSB0aGlzLmN0eFxuICApID0+IHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xufVxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbnZhc0FuaW1hdG9yIHtcbiAgcHJvdGVjdGVkIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICB9XG4gIHB1YmxpYyBhYnN0cmFjdCBkcmF3OiAoc3RhdGU/OiBhbnksIGN0eD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcbiAgcHVibGljIGNsZWFyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jdHgpOiB2b2lkIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNBbmltYXRvciB9IGZyb20gJy4vY2FudmFzLWFuaW1hdG9yJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbnZhc0dyaWRBbmltYXRvciBleHRlbmRzIENhbnZhc0FuaW1hdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgcHJvdGVjdGVkIGdyaWQ6IHsgY29sczogbnVtYmVyOyByb3dzOiBudW1iZXIgfVxuICApIHtcbiAgICBzdXBlcihjYW52YXMpO1xuICB9XG4gIHByb3RlY3RlZCB4KHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHggKiB0aGlzLmNhbnZhcy53aWR0aCkgLyB0aGlzLmdyaWQuY29scyk7XG4gIH1cbiAgcHJvdGVjdGVkIHkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoeSAqIHRoaXMuY2FudmFzLmhlaWdodCkgLyB0aGlzLmdyaWQucm93cyk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYmFja2dyb3VuZC1hbmltYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1hbmltYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1ncmlkLWFuaW1hdG9yJztcbiIsImltcG9ydCAqIGFzIEFuaW1hdG9ycyBmcm9tICcuL2FuaW1hdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vbGliL2ltYWdlLWxvYWRlcic7XG4vLyBpbXBvcnQgKiBhcyBTaGFwZXMgZnJvbSAnLi90b29scy9pbmRleCc7XG5cbmV4cG9ydCB7IEFuaW1hdG9ycywgSW1hZ2VMb2FkZXIgfTtcbmV4cG9ydCAqIGZyb20gJy4vdG9vbHMvaW5kZXgnO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJbWFnZVNldCB7XG4gIFtrZXk6IHN0cmluZ106IEhUTUxJbWFnZUVsZW1lbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU291cmNlU2V0IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgcHJpdmF0ZSBsb2FkZWQgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VzOiBJbWFnZVNldCA9IHt9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBzb3VyY2VzOiBJbWFnZVNvdXJjZVNldCxcbiAgICBjYWxsYmFjazogKGltYWdlczogSW1hZ2VTZXQpID0+IHZvaWQgPSAoKSA9PiB7fVxuICApIHtcbiAgICBsZXQgdCA9IDA7XG4gICAgZm9yIChjb25zdCBzcmMgaW4gc291cmNlcykge1xuICAgICAgaWYgKHNvdXJjZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgICB0Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG90YWwgPSB0O1xuXG4gICAgZm9yIChjb25zdCBzcmMgaW4gc291cmNlcykge1xuICAgICAgaWYgKHNvdXJjZXMuaGFzT3duUHJvcGVydHkoc3JjKSkge1xuICAgICAgICB0aGlzLmltYWdlc1tzcmNdID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10uc3JjID0gc291cmNlc1tzcmNdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25Mb2FkKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNJbWFnZShpbWc6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmltYWdlc1tpbWddICE9IG51bGw7XG4gIH1cbiAgcHVibGljIG9uTG9hZChjYWxsYmFjazogKGltYWdlczogSW1hZ2VTZXQpID0+IHZvaWQpIHtcbiAgICBmb3IgKGNvbnN0IGltZyBpbiB0aGlzLmltYWdlcykge1xuICAgICAgaWYgKHRoaXMuaW1hZ2VzLmhhc093blByb3BlcnR5KGltZykpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkIDwgdGhpcy50b3RhbCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzW2ltZ10uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdsb2FkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCsrdGhpcy5sb2FkZWQgPj0gdGhpcy50b3RhbCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuaW1hZ2VzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLmltYWdlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENsaWNrRXZlbnRPYmplY3QsXG4gIEhvdmVyRXZlbnRPYmplY3QsXG4gIE1vdXNlRXZlbnRMaXN0ZW5lclxufSBmcm9tICcuL21vdXNlJztcbmltcG9ydCB7IFJvdW5kZWRSZWN0IH0gZnJvbSAnLi9yb3VuZGVkLXJlY3QnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbiBleHRlbmRzIENsaWNrRXZlbnRPYmplY3QsIEhvdmVyRXZlbnRPYmplY3Qge1xuICByYWRpdXM6IG51bWJlcjtcbiAgZmlsbFN0eWxlOiBzdHJpbmc7XG4gIHN0cm9rZVN0eWxlPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IG51bWJlcjtcbiAgaG92ZXJTdHlsZT86IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBmb250OiBzdHJpbmc7XG4gIHRleHRTdHlsZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gIHN0YXRlPzogJ2hvdmVyJyB8IHVuZGVmaW5lZDtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogTW91c2VFdmVudExpc3RlbmVyO1xuICBvbk1vdXNlRW50ZXI/OiBNb3VzZUV2ZW50TGlzdGVuZXI7XG4gIG9uTW91c2VMZWF2ZT86IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbn1cbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGRyYXcgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+ICh7XG4gICAgeCxcbiAgICB5LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICByYWRpdXMsXG4gICAgZmlsbFN0eWxlLFxuICAgIHN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxuICAgIGJvcmRlcldpZHRoID0gTWF0aC5taW4oNCwgKHdpZHRoIC8gMzYpICogNCksXG4gICAgaG92ZXJTdHlsZSxcbiAgICB0ZXh0LFxuICAgIGZvbnQsXG4gICAgdGV4dFN0eWxlLFxuICAgIHN0YXRlXG4gIH06IEJ1dHRvbikgPT4ge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdob3ZlcicgJiYgaG92ZXJTdHlsZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGhvdmVyU3R5bGU7XG4gICAgfSBlbHNlIGlmIChmaWxsU3R5bGUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgfVxuXG4gICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgaWYgKHN0YXRlID09PSAnaG92ZXInICYmIGhvdmVyU3R5bGUpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGhvdmVyU3R5bGU7XG4gICAgfSBlbHNlIGlmIChzdHJva2VTdHlsZSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgfVxuXG4gICAgUm91bmRlZFJlY3QuZHJhdyhcbiAgICAgIGN0eCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICB0cnVlLFxuICAgICAgc3Ryb2tlU3R5bGUgIT0gbnVsbFxuICAgICk7XG5cbiAgICBUZXh0LmRyYXcoXG4gICAgICBjdHgsXG4gICAgICB0ZXh0LFxuICAgICAgeCArIHdpZHRoIC8gMixcbiAgICAgIHkgKyBoZWlnaHQgLyAyLFxuICAgICAgd2lkdGggKiAwLjksXG4gICAgICBmb250LFxuICAgICAgdHlwZW9mIHRleHRTdHlsZSA9PT0gJ3N0cmluZycgPyB0ZXh0U3R5bGUgOiB0ZXh0U3R5bGUoKVxuICAgICk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUge1xuICBjZW50ZXI6IFBvaW50O1xuICByYWRpdXM6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpOiBDaXJjbGUge1xuICAgIGNvbnN0IGNlbnRlciA9IHsgeCwgeSB9O1xuICAgIHJldHVybiB7IGNlbnRlciwgcmFkaXVzIH07XG4gIH1cbiAgLyoqXG4gICAqIERyYXdzIGEgY2lyY2xlXG4gICAqIEBwYXJhbSBjdHggLSB0aGUgY2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAqIEBwYXJhbSBjaXJjbGUgLSB0aGUgY2lyY2xlIHRvIGRyYXdcbiAgICogQHBhcmFtIGZpbGxTdHlsZSAtIHRoZSBzdHlsZSB0byBmaWxsIHRoZSBjaXJjbGVcbiAgICogQHBhcmFtIHN0cm9rZVN0eWxlIC0gdGhlIHN0eWxlIHRvIHN0cm9rZSB0aGUgY2lyY2xlXG4gICAqL1xuICBzdGF0aWMgZHJhdyhcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjaXJjbGU6IENpcmNsZSxcbiAgICBmaWxsU3R5bGU6IHN0cmluZyA9ICd3aGl0ZScsXG4gICAgc3Ryb2tlU3R5bGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjaXJjbGUuY2VudGVyO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCBjaXJjbGUucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYgKGZpbGxTdHlsZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgaWYgKHN0cm9rZVN0eWxlKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2NpcmNsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3JvdW5kZWQtcmVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3RleHQnO1xuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGNsYXNzIExpbmUge1xuICBzdGF0aWMgZHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcDE6IFBvaW50LCBwMjogUG9pbnQpID0+IHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICBjdHgubGluZVRvKHAyLngsIHAyLnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9yZWN0JztcblxuZXhwb3J0IHR5cGUgTW91c2VFdmVudExpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiBhbnk7XG5leHBvcnQgaW50ZXJmYWNlIENsaWNrRXZlbnRPYmplY3QgZXh0ZW5kcyBSZWN0IHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogTW91c2VFdmVudExpc3RlbmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBIb3ZlckV2ZW50T2JqZWN0IGV4dGVuZHMgUmVjdCB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIHN0YXRlPzogJ2hvdmVyJztcbiAgb25Nb3VzZUVudGVyPzogTW91c2VFdmVudExpc3RlbmVyO1xuICBvbk1vdXNlTGVhdmU/OiBNb3VzZUV2ZW50TGlzdGVuZXI7XG59XG5leHBvcnQgY2xhc3MgTW91c2Uge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGFkZENsaWNrRXZlbnRMaXN0ZW5lciA9IChcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIGJ1dHRvbnM6IENsaWNrRXZlbnRPYmplY3RbXVxuICApID0+IHtcbiAgICBjb25zdCBnZXRNb3VzZVBvcyA9IE1vdXNlLmdldE1vdXNlUG9zKGNhbnZhcyk7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE1vdXNlUG9zKGUpO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uZW5hYmxlZCAmJiBSZWN0LmlzSW50ZXJzZWN0KHBvcywgYnV0dG9uKSkge1xuICAgICAgICAgIC8vIGNsaWNrIGV2ZW50XG4gICAgICAgICAgYnV0dG9uLm9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcblxuICAgIHJldHVybiB7IHR5cGU6ICdjbGljaycsIGZ1bmN0aW9uOiBoYW5kbGVyIH0gYXMge1xuICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgZnVuY3Rpb246IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbiAgICB9O1xuICB9O1xuICBzdGF0aWMgYWRkSG92ZXJFdmVudExpc3RlbmVyID0gKFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgYnV0dG9uczogSG92ZXJFdmVudE9iamVjdFtdXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldE1vdXNlUG9zID0gTW91c2UuZ2V0TW91c2VQb3MoY2FudmFzKTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcG9zID0gZ2V0TW91c2VQb3MoZSk7XG4gICAgICBsZXQgaW50ZXJzZWN0ID0gZmFsc2U7XG4gICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5lbmFibGVkICYmIFJlY3QuaXNJbnRlcnNlY3QocG9zLCBidXR0b24pKSB7XG4gICAgICAgICAgLy8gaG92ZXIgZXZlbnRcbiAgICAgICAgICBpZiAoYnV0dG9uLnN0YXRlICE9PSAnaG92ZXInKSB7XG4gICAgICAgICAgICBidXR0b24uc3RhdGUgPSAnaG92ZXInO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgICAgICAgYnV0dG9uLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW50ZXJzZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uc3RhdGUgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICBidXR0b24uc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKGJ1dHRvbi5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5vbk1vdXNlTGVhdmUoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBpbnRlcnNlY3QgPyAncG9pbnRlcicgOiAnZGVmYXVsdCc7XG4gICAgfTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVyKTtcblxuICAgIHJldHVybiB7IHR5cGU6ICdtb3VzZW1vdmUnLCBmdW5jdGlvbjogaGFuZGxlciB9IGFzIHtcbiAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIGZ1bmN0aW9uOiBNb3VzZUV2ZW50TGlzdGVuZXI7XG4gICAgfTtcbiAgfTtcbiAgc3RhdGljIGdldE1vdXNlUG9zID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gKHJlY3QucmlnaHQgLSByZWN0LmxlZnQpKSAqIGNhbnZhcy53aWR0aCxcbiAgICAgIHk6ICgoZS5jbGllbnRZIC0gcmVjdC50b3ApIC8gKHJlY3QuYm90dG9tIC0gcmVjdC50b3ApKSAqIGNhbnZhcy5oZWlnaHRcbiAgICB9O1xuICB9O1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBjcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo/OiBudW1iZXIpOiBQb2ludCB7XG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgejogeiB9O1xuICB9XG4gIHN0YXRpYyBlcXVhbHMgPSAocDE6IFBvaW50KSA9PiAocDI6IFBvaW50KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHAxICE9IG51bGwgJiZcbiAgICAgIHAyICE9IG51bGwgJiZcbiAgICAgIHAxLnggPT09IHAyLnggJiZcbiAgICAgIHAxLnkgPT09IHAyLnkgJiZcbiAgICAgIHAxLnogPT09IHAyLnpcbiAgICApO1xuICB9O1xuICBzdGF0aWMgc3F1YXJlZERpc3RhbmNlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICtcbiAgICAgIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSArXG4gICAgICAocDEueiAhPT0gdW5kZWZpbmVkICYmIHAyLnogIT09IHVuZGVmaW5lZCA/IE1hdGgucG93KHAyLnogLSBwMS56LCAyKSA6IDApXG4gICAgKTtcbiAgfVxuICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXVhcmVkRGlzdGFuY2UocDEsIHAyKSk7XG4gIH1cbiAgc3RhdGljIHNjYWxlKGZhY3RvcjogbnVtYmVyLCBwOiBQb2ludCk6IFBvaW50IHtcbiAgICBwLnggKj0gZmFjdG9yO1xuICAgIHAueSAqPSBmYWN0b3I7XG4gICAgaWYgKHAueiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwLnogKj0gZmFjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgaXNJbnRlcnNlY3QgPSAocG9zOiBQb2ludCwgYnV0dG9uOiBSZWN0KSA9PlxuICAgIHBvcy54ID4gYnV0dG9uLnggJiZcbiAgICBwb3MueCA8IGJ1dHRvbi54ICsgYnV0dG9uLndpZHRoICYmXG4gICAgcG9zLnkgPCBidXR0b24ueSArIGJ1dHRvbi5oZWlnaHQgJiZcbiAgICBwb3MueSA+IGJ1dHRvbi55O1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBSb3VuZGVkUmVjdFJhZGl1cyB7XG4gIHRsOiBudW1iZXI7XG4gIHRyOiBudW1iZXI7XG4gIGJyOiBudW1iZXI7XG4gIGJsOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgUm91bmRlZFJlY3Qge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGRyYXcoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyIHwgUm91bmRlZFJlY3RSYWRpdXMgPSAxMCxcbiAgICBmaWxsID0gdHJ1ZSxcbiAgICBzdHJva2UgPSBmYWxzZVxuICApIHtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJhZGl1cyA9IHtcbiAgICAgICAgdGw6IHJhZGl1cyxcbiAgICAgICAgdHI6IHJhZGl1cyxcbiAgICAgICAgYnI6IHJhZGl1cyxcbiAgICAgICAgYmw6IHJhZGl1c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cy50bCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMudHIsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzLnRyKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cy5icik7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oXG4gICAgICB4ICsgd2lkdGgsXG4gICAgICB5ICsgaGVpZ2h0LFxuICAgICAgeCArIHdpZHRoIC0gcmFkaXVzLmJyLFxuICAgICAgeSArIGhlaWdodFxuICAgICk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzLmJsKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMudGwpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMudGwsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChmaWxsKSB7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoc3Ryb2tlKSB7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRleHQge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGRyYXcgPSAoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgbWF4V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgICBmb250OiBzdHJpbmcsXG4gICAgZmlsbFN0eWxlOiBzdHJpbmcsXG4gICAgdGV4dEFsaWduOiBDYW52YXNUZXh0QWxpZ24gPSAnY2VudGVyJyxcbiAgICB0ZXh0QmFzZWxpbmU6IENhbnZhc1RleHRCYXNlbGluZSA9ICdtaWRkbGUnXG4gICkgPT4ge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgIGN0eC5mb250ID0gZm9udDtcbiAgICBjdHgudGV4dEFsaWduID0gdGV4dEFsaWduO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSB0ZXh0QmFzZWxpbmU7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHksIG1heFdpZHRoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG4gIHN0YXRpYyBnZXRGb250ID0gKGZvbnRTaXplOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgZm9udFNpemUgK1xuICAgICAgJ3B4IE1vbnRzZXJyYXQsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiJ1xuICAgICk7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9