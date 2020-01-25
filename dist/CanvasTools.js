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
    Circle.draw = function (ctx, centerX, centerY, radius, fillStyle, strokeStyle) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DYW52YXNUb29scy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2JhY2tncm91bmQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2NhbnZhcy1hbmltYXRvci50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9hbmltYXRvcnMvY2FudmFzLWdyaWQtYW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvYW5pbWF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL2NhbnZhcy10b29scy50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy9saWIvaW1hZ2UtbG9hZGVyLnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQ2FudmFzVG9vbHMvLi9zcmMvdG9vbHMvbGluZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9tb3VzZS50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9wb2ludC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy9yZWN0LnRzIiwid2VicGFjazovL0NhbnZhc1Rvb2xzLy4vc3JjL3Rvb2xzL3JvdW5kZWQtcmVjdC50cyIsIndlYnBhY2s6Ly9DYW52YXNUb29scy8uL3NyYy90b29scy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7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R0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVuQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lBQ0ssWUFBTyxHQUFHLFVBQUMsUUFBZ0I7UUFDaEMsT0FBTyxDQUNMLFFBQVE7WUFDUixxS0FBcUssQ0FDdEssQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNKLFdBQUM7Q0FBQTtBQTdCWSxvQkFBSSIsImZpbGUiOiJDYW52YXNUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQ2FudmFzVG9vbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2FudmFzVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ2FudmFzVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NhbnZhcy10b29scy50c1wiKTtcbiIsImltcG9ydCB7IENhbnZhc0FuaW1hdG9yIH0gZnJvbSAnLi9jYW52YXMtYW5pbWF0b3InO1xuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZEFuaW1hdG9yIGV4dGVuZHMgQ2FudmFzQW5pbWF0b3Ige1xuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwdWJsaWMgZmlsbFN0eWxlOiBzdHJpbmcgPSAnIzIzMjMyMycpIHtcbiAgICBzdXBlcihjYW52YXMpO1xuICB9XG4gIHB1YmxpYyBkcmF3ID0gKFxuICAgIGZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlLFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jdHhcbiAgKSA9PiB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYW52YXNBbmltYXRvciB7XG4gIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgfVxuICBwdWJsaWMgYWJzdHJhY3QgZHJhdzogKHN0YXRlPzogYW55LCBjdHg/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQ7XG4gIHB1YmxpYyBjbGVhcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IHRoaXMuY3R4KTogdm9pZCB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzQW5pbWF0b3IgfSBmcm9tICcuL2NhbnZhcy1hbmltYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYW52YXNHcmlkQW5pbWF0b3IgZXh0ZW5kcyBDYW52YXNBbmltYXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByb3RlY3RlZCBncmlkOiB7IGNvbHM6IG51bWJlcjsgcm93czogbnVtYmVyIH1cbiAgKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcbiAgfVxuICBwcm90ZWN0ZWQgeCh4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCh4ICogdGhpcy5jYW52YXMud2lkdGgpIC8gdGhpcy5ncmlkLmNvbHMpO1xuICB9XG4gIHByb3RlY3RlZCB5KHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHkgKiB0aGlzLmNhbnZhcy5oZWlnaHQpIC8gdGhpcy5ncmlkLnJvd3MpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2JhY2tncm91bmQtYW5pbWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtYW5pbWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtZ3JpZC1hbmltYXRvcic7XG4iLCJpbXBvcnQgKiBhcyBBbmltYXRvcnMgZnJvbSAnLi9hbmltYXRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2xpYi9pbWFnZS1sb2FkZXInO1xuLy8gaW1wb3J0ICogYXMgU2hhcGVzIGZyb20gJy4vdG9vbHMvaW5kZXgnO1xuXG5leHBvcnQgeyBBbmltYXRvcnMsIEltYWdlTG9hZGVyIH07XG5leHBvcnQgKiBmcm9tICcuL3Rvb2xzL2luZGV4JztcbiIsImV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTZXQge1xuICBba2V5OiBzdHJpbmddOiBIVE1MSW1hZ2VFbGVtZW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVNvdXJjZVNldCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XG4gIHByaXZhdGUgbG9hZGVkID0gMDtcbiAgcHJpdmF0ZSByZWFkb25seSB0b3RhbDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlczogSW1hZ2VTZXQgPSB7fTtcbiAgY29uc3RydWN0b3IoXG4gICAgc291cmNlczogSW1hZ2VTb3VyY2VTZXQsXG4gICAgY2FsbGJhY2s6IChpbWFnZXM6IEltYWdlU2V0KSA9PiB2b2lkID0gKCkgPT4ge31cbiAgKSB7XG4gICAgbGV0IHQgPSAwO1xuICAgIGZvciAoY29uc3Qgc3JjIGluIHNvdXJjZXMpIHtcbiAgICAgIGlmIChzb3VyY2VzLmhhc093blByb3BlcnR5KHNyYykpIHtcbiAgICAgICAgdCsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvdGFsID0gdDtcblxuICAgIGZvciAoY29uc3Qgc3JjIGluIHNvdXJjZXMpIHtcbiAgICAgIGlmIChzb3VyY2VzLmhhc093blByb3BlcnR5KHNyYykpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNbc3JjXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlc1tzcmNdLnNyYyA9IHNvdXJjZXNbc3JjXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9uTG9hZChjYWxsYmFjayk7XG4gIH1cblxuICBwdWJsaWMgaGFzSW1hZ2UoaW1nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNbaW1nXSAhPSBudWxsO1xuICB9XG4gIHB1YmxpYyBvbkxvYWQoY2FsbGJhY2s6IChpbWFnZXM6IEltYWdlU2V0KSA9PiB2b2lkKSB7XG4gICAgZm9yIChjb25zdCBpbWcgaW4gdGhpcy5pbWFnZXMpIHtcbiAgICAgIGlmICh0aGlzLmltYWdlcy5oYXNPd25Qcm9wZXJ0eShpbWcpKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCA8IHRoaXMudG90YWwpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc1tpbWddLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnbG9hZCcsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICgrK3RoaXMubG9hZGVkID49IHRoaXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLmltYWdlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcy5pbWFnZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDbGlja0V2ZW50T2JqZWN0LFxuICBIb3ZlckV2ZW50T2JqZWN0LFxuICBNb3VzZUV2ZW50TGlzdGVuZXJcbn0gZnJvbSAnLi9tb3VzZSc7XG5pbXBvcnQgeyBSb3VuZGVkUmVjdCB9IGZyb20gJy4vcm91bmRlZC1yZWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xuZXhwb3J0IGludGVyZmFjZSBCdXR0b24gZXh0ZW5kcyBDbGlja0V2ZW50T2JqZWN0LCBIb3ZlckV2ZW50T2JqZWN0IHtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGZpbGxTdHlsZTogc3RyaW5nO1xuICBzdHJva2VTdHlsZT86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gIGhvdmVyU3R5bGU/OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICB0ZXh0U3R5bGU6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICBzdGF0ZT86ICdob3ZlcicgfCB1bmRlZmluZWQ7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbiAgb25Nb3VzZUVudGVyPzogTW91c2VFdmVudExpc3RlbmVyO1xuICBvbk1vdXNlTGVhdmU/OiBNb3VzZUV2ZW50TGlzdGVuZXI7XG59XG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGN0eCAtIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgKiBAcGFyYW0gYnV0dG9uIC0gQnV0dG9uXG4gICAqL1xuICBzdGF0aWMgZHJhdyhcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcmFkaXVzLFxuICAgICAgZmlsbFN0eWxlLFxuICAgICAgc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwKScsXG4gICAgICBib3JkZXJXaWR0aCA9IE1hdGgubWluKDQsICh3aWR0aCAvIDM2KSAqIDQpLFxuICAgICAgaG92ZXJTdHlsZSxcbiAgICAgIHRleHQsXG4gICAgICBmb250LFxuICAgICAgdGV4dFN0eWxlLFxuICAgICAgc3RhdGVcbiAgICB9OiBCdXR0b25cbiAgKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGlmIChzdGF0ZSA9PT0gJ2hvdmVyJyAmJiBob3ZlclN0eWxlKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gaG92ZXJTdHlsZTtcbiAgICB9IGVsc2UgaWYgKGZpbGxTdHlsZSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICB9XG5cbiAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdob3ZlcicgJiYgaG92ZXJTdHlsZSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gaG92ZXJTdHlsZTtcbiAgICB9IGVsc2UgaWYgKHN0cm9rZVN0eWxlKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICB9XG5cbiAgICBSb3VuZGVkUmVjdC5kcmF3KFxuICAgICAgY3R4LFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIHRydWUsXG4gICAgICBzdHJva2VTdHlsZSAhPSBudWxsXG4gICAgKTtcblxuICAgIFRleHQuZHJhdyhcbiAgICAgIGN0eCxcbiAgICAgIHRleHQsXG4gICAgICB4ICsgd2lkdGggLyAyLFxuICAgICAgeSArIGhlaWdodCAvIDIsXG4gICAgICB3aWR0aCAqIDAuOSxcbiAgICAgIGZvbnQsXG4gICAgICB0eXBlb2YgdGV4dFN0eWxlID09PSAnc3RyaW5nJyA/IHRleHRTdHlsZSA6IHRleHRTdHlsZSgpXG4gICAgKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlIHtcbiAgY2VudGVyOiBQb2ludDtcbiAgcmFkaXVzOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBjcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogQ2lyY2xlIHtcbiAgICBjb25zdCBjZW50ZXIgPSB7IHgsIHkgfTtcbiAgICByZXR1cm4geyBjZW50ZXIsIHJhZGl1cyB9O1xuICB9XG4gIC8qKlxuICAgKiBEcmF3cyBhIGNpcmNsZVxuICAgKiBAcGFyYW0gY3R4IC0gdGhlIGNhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgKiBAcGFyYW0gY2lyY2xlIC0gdGhlIGNpcmNsZSB0byBkcmF3XG4gICAqIEBwYXJhbSBmaWxsU3R5bGUgLSB0aGUgc3R5bGUgdG8gZmlsbCB0aGUgY2lyY2xlXG4gICAqIEBwYXJhbSBzdHJva2VTdHlsZSAtIHRoZSBzdHlsZSB0byBzdHJva2UgdGhlIGNpcmNsZVxuICAgKi9cbiAgc3RhdGljIGRyYXcoXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgY2VudGVyWDogbnVtYmVyLFxuICAgIGNlbnRlclk6IG51bWJlcixcbiAgICByYWRpdXM6IG51bWJlcixcbiAgICBmaWxsU3R5bGU/OiBzdHJpbmcsXG4gICAgc3Ryb2tlU3R5bGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChmaWxsU3R5bGUpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsU3R5bGU7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cblxuICAgIGlmIChzdHJva2VTdHlsZSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9jaXJjbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saW5lJztcbmV4cG9ydCAqIGZyb20gJy4vbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3VuZGVkLXJlY3QnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgc3RhdGljIGRyYXcgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHAxOiBQb2ludCwgcDI6IFBvaW50KSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vcmVjdCc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnRMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCkgPT4gYW55O1xuZXhwb3J0IGludGVyZmFjZSBDbGlja0V2ZW50T2JqZWN0IGV4dGVuZHMgUmVjdCB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSG92ZXJFdmVudE9iamVjdCBleHRlbmRzIFJlY3Qge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBzdGF0ZT86ICdob3Zlcic7XG4gIG9uTW91c2VFbnRlcj86IE1vdXNlRXZlbnRMaXN0ZW5lcjtcbiAgb25Nb3VzZUxlYXZlPzogTW91c2VFdmVudExpc3RlbmVyO1xufVxuZXhwb3J0IGNsYXNzIE1vdXNlIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBhZGRDbGlja0V2ZW50TGlzdGVuZXIgPSAoXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBidXR0b25zOiBDbGlja0V2ZW50T2JqZWN0W11cbiAgKSA9PiB7XG4gICAgY29uc3QgZ2V0TW91c2VQb3MgPSBNb3VzZS5nZXRNb3VzZVBvcyhjYW52YXMpO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSBnZXRNb3VzZVBvcyhlKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmVuYWJsZWQgJiYgUmVjdC5pc0ludGVyc2VjdChwb3MsIGJ1dHRvbikpIHtcbiAgICAgICAgICAvLyBjbGljayBldmVudFxuICAgICAgICAgIGJ1dHRvbi5vbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4geyB0eXBlOiAnY2xpY2snLCBmdW5jdGlvbjogaGFuZGxlciB9IGFzIHtcbiAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIGZ1bmN0aW9uOiBNb3VzZUV2ZW50TGlzdGVuZXI7XG4gICAgfTtcbiAgfTtcbiAgc3RhdGljIGFkZEhvdmVyRXZlbnRMaXN0ZW5lciA9IChcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIGJ1dHRvbnM6IEhvdmVyRXZlbnRPYmplY3RbXVxuICApID0+IHtcbiAgICBjb25zdCBnZXRNb3VzZVBvcyA9IE1vdXNlLmdldE1vdXNlUG9zKGNhbnZhcyk7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IGdldE1vdXNlUG9zKGUpO1xuICAgICAgbGV0IGludGVyc2VjdCA9IGZhbHNlO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uZW5hYmxlZCAmJiBSZWN0LmlzSW50ZXJzZWN0KHBvcywgYnV0dG9uKSkge1xuICAgICAgICAgIC8vIGhvdmVyIGV2ZW50XG4gICAgICAgICAgaWYgKGJ1dHRvbi5zdGF0ZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgYnV0dG9uLnN0YXRlID0gJ2hvdmVyJztcbiAgICAgICAgICAgIGlmIChidXR0b24ub25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGludGVyc2VjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLnN0YXRlID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgYnV0dG9uLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChidXR0b24ub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgICAgICBidXR0b24ub25Nb3VzZUxlYXZlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gaW50ZXJzZWN0ID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnO1xuICAgIH07XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4geyB0eXBlOiAnbW91c2Vtb3ZlJywgZnVuY3Rpb246IGhhbmRsZXIgfSBhcyB7XG4gICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICBmdW5jdGlvbjogTW91c2VFdmVudExpc3RlbmVyO1xuICAgIH07XG4gIH07XG4gIHN0YXRpYyBnZXRNb3VzZVBvcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6ICgoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSkgKiBjYW52YXMud2lkdGgsXG4gICAgICB5OiAoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKSkgKiBjYW52YXMuaGVpZ2h0XG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgej86IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgY3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB6PzogbnVtYmVyKTogUG9pbnQge1xuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHo6IHogfTtcbiAgfVxuICBzdGF0aWMgZXF1YWxzID0gKHAxOiBQb2ludCkgPT4gKHAyOiBQb2ludCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBwMSAhPSBudWxsICYmXG4gICAgICBwMiAhPSBudWxsICYmXG4gICAgICBwMS54ID09PSBwMi54ICYmXG4gICAgICBwMS55ID09PSBwMi55ICYmXG4gICAgICBwMS56ID09PSBwMi56XG4gICAgKTtcbiAgfTtcbiAgc3RhdGljIHNxdWFyZWREaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArXG4gICAgICBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikgK1xuICAgICAgKHAxLnogIT09IHVuZGVmaW5lZCAmJiBwMi56ICE9PSB1bmRlZmluZWQgPyBNYXRoLnBvdyhwMi56IC0gcDEueiwgMikgOiAwKVxuICAgICk7XG4gIH1cbiAgc3RhdGljIGRpc3RhbmNlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3F1YXJlZERpc3RhbmNlKHAxLCBwMikpO1xuICB9XG4gIHN0YXRpYyBzY2FsZShmYWN0b3I6IG51bWJlciwgcDogUG9pbnQpOiBQb2ludCB7XG4gICAgcC54ICo9IGZhY3RvcjtcbiAgICBwLnkgKj0gZmFjdG9yO1xuICAgIGlmIChwLnogIT09IHVuZGVmaW5lZCkge1xuICAgICAgcC56ICo9IGZhY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIGlzSW50ZXJzZWN0ID0gKHBvczogUG9pbnQsIGJ1dHRvbjogUmVjdCkgPT5cbiAgICBwb3MueCA+IGJ1dHRvbi54ICYmXG4gICAgcG9zLnggPCBidXR0b24ueCArIGJ1dHRvbi53aWR0aCAmJlxuICAgIHBvcy55IDwgYnV0dG9uLnkgKyBidXR0b24uaGVpZ2h0ICYmXG4gICAgcG9zLnkgPiBidXR0b24ueTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUm91bmRlZFJlY3RSYWRpdXMge1xuICB0bDogbnVtYmVyO1xuICB0cjogbnVtYmVyO1xuICBicjogbnVtYmVyO1xuICBibDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIFJvdW5kZWRSZWN0IHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBkcmF3KFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICByYWRpdXM6IG51bWJlciB8IFJvdW5kZWRSZWN0UmFkaXVzID0gMTAsXG4gICAgZmlsbCA9IHRydWUsXG4gICAgc3Ryb2tlID0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICByYWRpdXMgPSB7XG4gICAgICAgIHRsOiByYWRpdXMsXG4gICAgICAgIHRyOiByYWRpdXMsXG4gICAgICAgIGJyOiByYWRpdXMsXG4gICAgICAgIGJsOiByYWRpdXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMudGwsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLnRyLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cy50cik7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMuYnIpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKFxuICAgICAgeCArIHdpZHRoLFxuICAgICAgeSArIGhlaWdodCxcbiAgICAgIHggKyB3aWR0aCAtIHJhZGl1cy5icixcbiAgICAgIHkgKyBoZWlnaHRcbiAgICApO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cy5ibCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzLnRsKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLnRsLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZiAoZmlsbCkge1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKHN0cm9rZSkge1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUZXh0IHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG4gIHN0YXRpYyBkcmF3ID0gKFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIG1heFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gICAgZm9udDogc3RyaW5nLFxuICAgIGZpbGxTdHlsZTogc3RyaW5nLFxuICAgIHRleHRBbGlnbjogQ2FudmFzVGV4dEFsaWduID0gJ2NlbnRlcicsXG4gICAgdGV4dEJhc2VsaW5lOiBDYW52YXNUZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xuICApID0+IHtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgY3R4LnRleHRBbGlnbiA9IHRleHRBbGlnbjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gdGV4dEJhc2VsaW5lO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5LCBtYXhXaWR0aCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xuICBzdGF0aWMgZ2V0Rm9udCA9IChmb250U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGZvbnRTaXplICtcbiAgICAgICdweCBNb250c2VycmF0LCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIidcbiAgICApO1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==