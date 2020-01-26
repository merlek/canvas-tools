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
    /**
     *
     * @param ctx - CanvasRenderingContext2D
     * @param button - Button
     */
    Button.draw = function (ctx, _a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, fillStyle = _a.fillStyle, _b = _a.strokeStyle, strokeStyle = _b === void 0 ? 'rgba(255,255,255,0)' : _b, _c = _a.borderWidth, borderWidth = _c === void 0 ? Math.min(4, (width / 36) * 4) : _c, hoverStyle = _a.hoverStyle, text = _a.text, fontFamily = _a.fontFamily, textStyle = _a.textStyle, state = _a.state;
        ctx.save();
        if (state === 'hover' && hoverStyle) {
            fillStyle = hoverStyle;
        }
        else if (fillStyle) {
            fillStyle = fillStyle;
        }
        ctx.lineWidth = borderWidth;
        if (state === 'hover' && hoverStyle) {
            strokeStyle = hoverStyle;
        }
        else if (strokeStyle) {
            strokeStyle = strokeStyle;
        }
        rounded_rect_1.RoundedRect.draw(ctx, {
            x: x,
            y: y,
            width: width,
            height: height,
            radius: radius,
            fillStyle: fillStyle,
            strokeStyle: strokeStyle
        });
        text_1.Text.draw(ctx, {
            text: text,
            x: x + width / 2,
            y: y + height / 2,
            maxWidth: width * 0.9,
            font: fontFamily,
            fillStyle: typeof textStyle === 'string' ? textStyle : textStyle()
        });
        ctx.restore();
    };
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
    Circle.draw = function (ctx, _a) {
        var center = _a.center, radius = _a.radius, fillStyle = _a.fillStyle, strokeStyle = _a.strokeStyle;
        ctx.save();
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
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
    Line.draw = function (ctx, _a) {
        var start = _a.start, end = _a.end;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
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
    Mouse.addClickEventListener = function (canvas) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
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
    Mouse.addHoverEventListener = function (canvas) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
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
    Rect.isIntersect = function (pos, rect) {
        return pos.x > rect.x &&
            pos.x < rect.x + rect.width &&
            pos.y < rect.y + rect.height &&
            pos.y > rect.y;
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
    RoundedRect.draw = function (ctx, _a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, fillStyle = _a.fillStyle, strokeStyle = _a.strokeStyle;
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
    Text.FONT_FAMILY = 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    Text.draw = function (ctx, _a) {
        var text = _a.text, x = _a.x, y = _a.y, maxWidth = _a.maxWidth, font = _a.font, fillStyle = _a.fillStyle, _b = _a.textAlign, textAlign = _b === void 0 ? 'center' : _b, _c = _a.textBaseline, textBaseline = _c === void 0 ? 'middle' : _c;
        ctx.save();
        ctx.fillStyle = fillStyle;
        if (typeof font === 'number') {
            font = Text.getFont(font);
        }
        ctx.font = font;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillText(text, x, y, maxWidth);
        ctx.restore();
    };
    Text.getFont = function (fontSize) {
        return fontSize + 'px ' + Text.FONT_FAMILY;
    };
    return Text;
}());
exports.Text = Text;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DYW52YXNUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2JhY2tncm91bmQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2NhbnZhcy1hbmltYXRvci50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9hbmltYXRvcnMvY2FudmFzLWdyaWQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL2NhbnZhcy10b29scy50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9saWIvaW1hZ2UtbG9hZGVyLnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvbGluZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9tb3VzZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9wb2ludC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9yZWN0LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL3JvdW5kZWQtcmVjdC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7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QVEsRUFDUixjQUFJLEVBQ0osd0JBQVMsRUFDVCxpQkFBb0IsRUFBcEIseUNBQW9CLEVBQ3BCLG9CQUF1QixFQUF2Qiw0Q0FBdUI7UUFHekIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVgsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7UUFDRCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMxQixHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFDSyxZQUFPLEdBQUcsVUFBQyxRQUFnQjtRQUNoQyxPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFDSixXQUFDO0NBQUE7QUFqQ1ksb0JBQUkiLCJmaWxlIjoiQ2FudmFzVG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkNhbnZhc1Rvb2xzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNhbnZhc1Rvb2xzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNhbnZhc1Rvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYW52YXMtdG9vbHMudHNcIik7XG4iLCJpbXBvcnQgeyBDYW52YXNBbmltYXRvciB9IGZyb20gJy4vY2FudmFzLWFuaW1hdG9yJztcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRBbmltYXRvciBleHRlbmRzIENhbnZhc0FuaW1hdG9yIHtcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcHVibGljIGZpbGxTdHlsZTogc3RyaW5nID0gJyMyMzIzMjMnKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcbiAgfVxuICBwdWJsaWMgZHJhdyA9IChcbiAgICBmaWxsU3R5bGUgPSB0aGlzLmZpbGxTdHlsZSxcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IHRoaXMuY3R4XG4gICkgPT4ge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG59XG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FudmFzQW5pbWF0b3Ige1xuICBwcm90ZWN0ZWQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIH1cbiAgcHVibGljIGFic3RyYWN0IGRyYXc6IChzdGF0ZT86IGFueSwgY3R4PzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkO1xuICBwdWJsaWMgY2xlYXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSB0aGlzLmN0eCk6IHZvaWQge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbnZhc0FuaW1hdG9yIH0gZnJvbSAnLi9jYW52YXMtYW5pbWF0b3InO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FudmFzR3JpZEFuaW1hdG9yIGV4dGVuZHMgQ2FudmFzQW5pbWF0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgZ3JpZDogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlciB9XG4gICkge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cbiAgcHJvdGVjdGVkIHgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoeCAqIHRoaXMuY2FudmFzLndpZHRoKSAvIHRoaXMuZ3JpZC5jb2xzKTtcbiAgfVxuICBwcm90ZWN0ZWQgeSh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCh5ICogdGhpcy5jYW52YXMuaGVpZ2h0KSAvIHRoaXMuZ3JpZC5yb3dzKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9iYWNrZ3JvdW5kLWFuaW1hdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWFuaW1hdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWdyaWQtYW5pbWF0b3InO1xuIiwiaW1wb3J0ICogYXMgQW5pbWF0b3JzIGZyb20gJy4vYW5pbWF0b3JzL2luZGV4JztcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9saWIvaW1hZ2UtbG9hZGVyJztcbi8vIGltcG9ydCAqIGFzIFNoYXBlcyBmcm9tICcuL3Rvb2xzL2luZGV4JztcblxuZXhwb3J0IHsgQW5pbWF0b3JzLCBJbWFnZUxvYWRlciB9O1xuZXhwb3J0ICogZnJvbSAnLi90b29scy9pbmRleCc7XG4iLCJleHBvcnQgaW50ZXJmYWNlIEltYWdlU2V0IHtcbiAgW2tleTogc3RyaW5nXTogSFRNTEltYWdlRWxlbWVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTb3VyY2VTZXQge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xuICBwcml2YXRlIGxvYWRlZCA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgdG90YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZXM6IEltYWdlU2V0ID0ge307XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNvdXJjZXM6IEltYWdlU291cmNlU2V0LFxuICAgIGNhbGxiYWNrOiAoaW1hZ2VzOiBJbWFnZVNldCkgPT4gdm9pZCA9ICgpID0+IHt9XG4gICkge1xuICAgIGxldCB0ID0gMDtcbiAgICBmb3IgKGNvbnN0IHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICBpZiAoc291cmNlcy5oYXNPd25Qcm9wZXJ0eShzcmMpKSB7XG4gICAgICAgIHQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b3RhbCA9IHQ7XG5cbiAgICBmb3IgKGNvbnN0IHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICBpZiAoc291cmNlcy5oYXNPd25Qcm9wZXJ0eShzcmMpKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzW3NyY10gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWFnZXNbc3JjXS5zcmMgPSBzb3VyY2VzW3NyY107XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vbkxvYWQoY2FsbGJhY2spO1xuICB9XG5cbiAgcHVibGljIGhhc0ltYWdlKGltZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzW2ltZ10gIT0gbnVsbDtcbiAgfVxuICBwdWJsaWMgb25Mb2FkKGNhbGxiYWNrOiAoaW1hZ2VzOiBJbWFnZVNldCkgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgaW1nIGluIHRoaXMuaW1hZ2VzKSB7XG4gICAgICBpZiAodGhpcy5pbWFnZXMuaGFzT3duUHJvcGVydHkoaW1nKSkge1xuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPCB0aGlzLnRvdGFsKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNbaW1nXS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2xvYWQnLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoKyt0aGlzLmxvYWRlZCA+PSB0aGlzLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5pbWFnZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKHRoaXMuaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2xpY2tFdmVudE9iamVjdCxcbiAgSG92ZXJFdmVudE9iamVjdCxcbiAgTW91c2VFdmVudExpc3RlbmVyXG59IGZyb20gJy4vbW91c2UnO1xuaW1wb3J0IHsgUm91bmRlZFJlY3QgfSBmcm9tICcuL3JvdW5kZWQtcmVjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi90ZXh0JztcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uIGV4dGVuZHMgUm91bmRlZFJlY3QsIENsaWNrRXZlbnRPYmplY3QsIEhvdmVyRXZlbnRPYmplY3Qge1xuICBib3JkZXJXaWR0aD86IG51bWJlcjtcbiAgaG92ZXJTdHlsZT86IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBmb250RmFtaWx5OiBzdHJpbmc7XG4gIHRleHRTdHlsZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gIHN0YXRlPzogJ2hvdmVyJyB8IHVuZGVmaW5lZDtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogTW91c2VFdmVudExpc3RlbmVyO1xuICBvbk1vdXNlRW50ZXI/OiBNb3VzZUV2ZW50TGlzdGVuZXI7XG4gIG9uTW91c2VMZWF2ZT86IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbn1cbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjdHggLSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICogQHBhcmFtIGJ1dHRvbiAtIEJ1dHRvblxuICAgKi9cbiAgc3RhdGljIGRyYXcoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGZpbGxTdHlsZSxcbiAgICAgIHN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxuICAgICAgYm9yZGVyV2lkdGggPSBNYXRoLm1pbig0LCAod2lkdGggLyAzNikgKiA0KSxcbiAgICAgIGhvdmVyU3R5bGUsXG4gICAgICB0ZXh0LFxuICAgICAgZm9udEZhbWlseSxcbiAgICAgIHRleHRTdHlsZSxcbiAgICAgIHN0YXRlXG4gICAgfTogQnV0dG9uXG4gICkge1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdob3ZlcicgJiYgaG92ZXJTdHlsZSkge1xuICAgICAgZmlsbFN0eWxlID0gaG92ZXJTdHlsZTtcbiAgICB9IGVsc2UgaWYgKGZpbGxTdHlsZSkge1xuICAgICAgZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgIH1cblxuICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgIGlmIChzdGF0ZSA9PT0gJ2hvdmVyJyAmJiBob3ZlclN0eWxlKSB7XG4gICAgICBzdHJva2VTdHlsZSA9IGhvdmVyU3R5bGU7XG4gICAgfSBlbHNlIGlmIChzdHJva2VTdHlsZSkge1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB9XG5cbiAgICBSb3VuZGVkUmVjdC5kcmF3KGN0eCwge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGZpbGxTdHlsZSxcbiAgICAgIHN0cm9rZVN0eWxlXG4gICAgfSk7XG5cbiAgICBUZXh0LmRyYXcoY3R4LCB7XG4gICAgICB0ZXh0LFxuICAgICAgeDogeCArIHdpZHRoIC8gMixcbiAgICAgIHk6IHkgKyBoZWlnaHQgLyAyLFxuICAgICAgbWF4V2lkdGg6IHdpZHRoICogMC45LFxuICAgICAgZm9udDogZm9udEZhbWlseSxcbiAgICAgIGZpbGxTdHlsZTogdHlwZW9mIHRleHRTdHlsZSA9PT0gJ3N0cmluZycgPyB0ZXh0U3R5bGUgOiB0ZXh0U3R5bGUoKVxuICAgIH0pO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUge1xuICBjZW50ZXI6IFBvaW50O1xuICByYWRpdXM6IG51bWJlcjtcbiAgZmlsbFN0eWxlPzogc3RyaW5nO1xuICBzdHJva2VTdHlsZT86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGNyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpOiBDaXJjbGUge1xuICAgIGNvbnN0IGNlbnRlciA9IHsgeCwgeSB9O1xuICAgIHJldHVybiB7IGNlbnRlciwgcmFkaXVzIH07XG4gIH1cbiAgLyoqXG4gICAqIERyYXdzIGEgY2lyY2xlXG4gICAqIEBwYXJhbSBjdHggLSB0aGUgY2FudmFzIHJlbmRlcmluZyBjb250ZXh0XG4gICAqIEBwYXJhbSBjaXJjbGUgLSB0aGUgY2lyY2xlIHRvIGRyYXdcbiAgICogQHBhcmFtIGZpbGxTdHlsZSAtIHRoZSBzdHlsZSB0byBmaWxsIHRoZSBjaXJjbGVcbiAgICogQHBhcmFtIHN0cm9rZVN0eWxlIC0gdGhlIHN0eWxlIHRvIHN0cm9rZSB0aGUgY2lyY2xlXG4gICAqL1xuICBzdGF0aWMgZHJhdyhcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB7IGNlbnRlciwgcmFkaXVzLCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlIH06IENpcmNsZVxuICApIHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZiAoZmlsbFN0eWxlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2lyY2xlJztcbmV4cG9ydCAqIGZyb20gJy4vbGluZSc7XG5leHBvcnQgKiBmcm9tICcuL21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcm91bmRlZC1yZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmUge1xuICBzdGFydDogUG9pbnQ7XG4gIGVuZDogUG9pbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBkcmF3ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB7IHN0YXJ0LCBlbmQgfTogTGluZSkgPT4ge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgIGN0eC5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vcmVjdCc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnRMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCkgPT4gYW55O1xuZXhwb3J0IGludGVyZmFjZSBDbGlja0V2ZW50T2JqZWN0IGV4dGVuZHMgUmVjdCB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSG92ZXJFdmVudE9iamVjdCBleHRlbmRzIFJlY3Qge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBzdGF0ZT86ICdob3Zlcic7XG4gIG9uTW91c2VFbnRlcj86IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbiAgb25Nb3VzZUxlYXZlPzogTW91c2VFdmVudExpc3RlbmVyO1xufVxuZXhwb3J0IGNsYXNzIE1vdXNlIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBhZGRDbGlja0V2ZW50TGlzdGVuZXIgPSAoXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAuLi5idXR0b25zOiBDbGlja0V2ZW50T2JqZWN0W11cbiAgKSA9PiB7XG4gICAgY29uc3QgZ2V0TW91c2VQb3MgPSBNb3VzZS5nZXRNb3VzZVBvcyhjYW52YXMpO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSBnZXRNb3VzZVBvcyhlKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmVuYWJsZWQgJiYgUmVjdC5pc0ludGVyc2VjdChwb3MsIGJ1dHRvbikpIHtcbiAgICAgICAgICAvLyBjbGljayBldmVudFxuICAgICAgICAgIGJ1dHRvbi5vbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4geyB0eXBlOiAnY2xpY2snLCBmdW5jdGlvbjogaGFuZGxlciB9IGFzIHtcbiAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIGZ1bmN0aW9uOiBNb3VzZUV2ZW50TGlzdGVuZXI7XG4gICAgfTtcbiAgfTtcbiAgc3RhdGljIGFkZEhvdmVyRXZlbnRMaXN0ZW5lciA9IChcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIC4uLmJ1dHRvbnM6IEhvdmVyRXZlbnRPYmplY3RbXVxuICApID0+IHtcbiAgICBjb25zdCBnZXRNb3VzZVBvcyA9IE1vdXNlLmdldE1vdXNlUG9zKGNhbnZhcyk7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE1vdXNlUG9zKGUpO1xuICAgICAgbGV0IGludGVyc2VjdCA9IGZhbHNlO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uZW5hYmxlZCAmJiBSZWN0LmlzSW50ZXJzZWN0KHBvcywgYnV0dG9uKSkge1xuICAgICAgICAgIC8vIGhvdmVyIGV2ZW50XG4gICAgICAgICAgaWYgKGJ1dHRvbi5zdGF0ZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgYnV0dG9uLnN0YXRlID0gJ2hvdmVyJztcbiAgICAgICAgICAgIGlmIChidXR0b24ub25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGludGVyc2VjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLnN0YXRlID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgYnV0dG9uLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChidXR0b24ub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgICAgICBidXR0b24ub25Nb3VzZUxlYXZlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gaW50ZXJzZWN0ID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnO1xuICAgIH07XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4geyB0eXBlOiAnbW91c2Vtb3ZlJywgZnVuY3Rpb246IGhhbmRsZXIgfSBhcyB7XG4gICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICBmdW5jdGlvbjogTW91c2VFdmVudExpc3RlbmVyO1xuICAgIH07XG4gIH07XG4gIHN0YXRpYyBnZXRNb3VzZVBvcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6ICgoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSkgKiBjYW52YXMud2lkdGgsXG4gICAgICB5OiAoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkgKiBjYW52YXMuaGVpZ2h0XG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgej86IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgY3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB6PzogbnVtYmVyKTogUG9pbnQge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHo6IHogfTtcbiAgfVxuICBzdGF0aWMgZXF1YWxzID0gKHAxOiBQb2ludCkgPT4gKHAyOiBQb2ludCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBwMSAhPSBudWxsICYmXG4gICAgICBwMiAhPSBudWxsICYmXG4gICAgICBwMS54ID09PSBwMi54ICYmXG4gICAgICBwMS55ID09PSBwMi55ICYmXG4gICAgICBwMS56ID09PSBwMi56XG4gICAgKTtcbiAgfTtcbiAgc3RhdGljIHNxdWFyZWREaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArXG4gICAgICBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikgK1xuICAgICAgKHAxLnogIT09IHVuZGVmaW5lZCAmJiBwMi56ICE9PSB1bmRlZmluZWQgPyBNYXRoLnBvdyhwMi56IC0gcDEueiwgMikgOiAwKVxuICAgICk7XG4gIH1cbiAgc3RhdGljIGRpc3RhbmNlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3F1YXJlZERpc3RhbmNlKHAxLCBwMikpO1xuICB9XG4gIHN0YXRpYyBzY2FsZShmYWN0b3I6IG51bWJlciwgcDogUG9pbnQpOiBQb2ludCB7XG4gICAgcC54ICo9IGZhY3RvcjtcbiAgICBwLnkgKj0gZmFjdG9yO1xuICAgIGlmIChwLnogIT09IHVuZGVmaW5lZCkge1xuICAgICAgcC56ICo9IGZhY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGlzSW50ZXJzZWN0ID0gKHBvczogUG9pbnQsIHJlY3Q6IFJlY3QpID0+XG4gICAgcG9zLnggPiByZWN0LnggJiZcbiAgICBwb3MueCA8IHJlY3QueCArIHJlY3Qud2lkdGggJiZcbiAgICBwb3MueSA8IHJlY3QueSArIHJlY3QuaGVpZ2h0ICYmXG4gICAgcG9zLnkgPiByZWN0Lnk7XG59XG4iLCJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9yZWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSb3VuZGVkUmVjdFJhZGl1cyB7XG4gIHRsOiBudW1iZXI7XG4gIHRyOiBudW1iZXI7XG4gIGJyOiBudW1iZXI7XG4gIGJsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91bmRlZFJlY3QgZXh0ZW5kcyBSZWN0IHtcbiAgcmFkaXVzOiBudW1iZXIgfCBSb3VuZGVkUmVjdFJhZGl1cztcbiAgZmlsbFN0eWxlPzogc3RyaW5nO1xuICBzdHJva2VTdHlsZT86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBSb3VuZGVkUmVjdCB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgZHJhdyhcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSB9OiBSb3VuZGVkUmVjdFxuICApIHtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJhZGl1cyA9IHtcbiAgICAgICAgdGw6IHJhZGl1cyxcbiAgICAgICAgdHI6IHJhZGl1cyxcbiAgICAgICAgYnI6IHJhZGl1cyxcbiAgICAgICAgYmw6IHJhZGl1c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cy50bCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMudHIsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzLnRyKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cy5icik7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oXG4gICAgICB4ICsgd2lkdGgsXG4gICAgICB5ICsgaGVpZ2h0LFxuICAgICAgeCArIHdpZHRoIC0gcmFkaXVzLmJyLFxuICAgICAgeSArIGhlaWdodFxuICAgICk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzLmJsKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMudGwpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMudGwsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChmaWxsU3R5bGUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgVGV4dEJveCB7XG4gIHRleHQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG1heFdpZHRoPzogbnVtYmVyO1xuICBmb250OiBzdHJpbmcgfCBudW1iZXI7XG4gIGZpbGxTdHlsZTogc3RyaW5nO1xuICB0ZXh0QWxpZ24/OiBDYW52YXNUZXh0QWxpZ247XG4gIHRleHRCYXNlbGluZT86IENhbnZhc1RleHRCYXNlbGluZTtcbn1cbmV4cG9ydCBjbGFzcyBUZXh0IHtcbiAgc3RhdGljIEZPTlRfRkFNSUxZID1cbiAgICAnTW9udHNlcnJhdCwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCInO1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGRyYXcgPSAoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAge1xuICAgICAgdGV4dCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgbWF4V2lkdGgsXG4gICAgICBmb250LFxuICAgICAgZmlsbFN0eWxlLFxuICAgICAgdGV4dEFsaWduID0gJ2NlbnRlcicsXG4gICAgICB0ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xuICAgIH06IFRleHRCb3hcbiAgKSA9PiB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgaWYgKHR5cGVvZiBmb250ID09PSAnbnVtYmVyJykge1xuICAgICAgZm9udCA9IFRleHQuZ2V0Rm9udChmb250KTtcbiAgICB9XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QWxpZ24gPSB0ZXh0QWxpZ247XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZTtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSwgbWF4V2lkdGgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcbiAgc3RhdGljIGdldEZvbnQgPSAoZm9udFNpemU6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBmb250U2l6ZSArICdweCAnICsgVGV4dC5GT05UX0ZBTUlMWTtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=