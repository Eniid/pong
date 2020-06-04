/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Bal.js":
/*!********************!*\
  !*** ./src/Bal.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bal; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bal = /*#__PURE__*/function () {
  function Bal(animation) {
    _classCallCheck(this, Bal);

    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.color = "#fff";
    this.widht = 10;
    this.height = 10;
    this.speed = 5;
    this.acceleration = 0.2;
    this.angleDeg = Math.random() * 45 + 345;
    this.angle = this.angleDeg * (Math.PI / 180);
    var x = this.canvas.width / 2 - this.widht / 2;
    var y = this.canvas.height / 2 - this.height / 2;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
  }

  _createClass(Bal, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      //* Déplacement
      var x = this.speed * Math.cos(this.angle);
      var y = this.speed * Math.sin(this.angle);
      var newCoo = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
      this.location.add(newCoo);

      if (this.location.y > this.canvas.height) {
        this.angle = -this.angle;
      }

      if (this.location.y < 0) {
        this.angle = -this.angle;
      }

      this.draw();
    }
  }]);

  return Bal;
}();



/***/ }),

/***/ "./src/Blocl.js":
/*!**********************!*\
  !*** ./src/Blocl.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blocl; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Blocl = /*#__PURE__*/function () {
  function Blocl(animation) {
    _classCallCheck(this, Blocl);

    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.bal = this.animation.bal;
    this.color = "#fff";
    this.widht = 10;
    this.height = 100;
    this.speed = 3;
    this.point = 0;
    var x = this.canvas.width - (20 + this.widht);
    var y = this.canvas.height / 2 - this.height / 2;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
  }

  _createClass(Blocl, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
      this.ctx.fill();
      this.ctx.font = '48px serif';
      this.ctx.textAlign = "center";
      this.ctx.fillText(this.point, 20, this.canvas.height - 20);
    }
  }, {
    key: "boum",
    value: function boum() {
      console.log(this.bal.angleDeg);

      if (this.bal.location.x + this.bal.widht > this.location.x - this.widht) {
        if (this.bal.location.y < this.location.y || this.bal.location.y > this.location.y + this.height) {
          var x = this.canvas.width / 2;
          var y = this.canvas.height / 2;
          this.bal.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
          this.point = this.point + 1;
        } else {
          if (this.bal.location.y < this.location.y + this.height / 3) {
            console.log("up");
            this.bal.speed = this.bal.speed - 1;
          } else if (this.bal.location.y > this.location.y + 2 * this.height / 3) {
            //console.log("down");
            this.bal.speed = this.bal.speed - 1;
          } else {
            //console.log("middle");
            this.bal.speed = this.bal.speed - 1;
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.animation.controleur.isKeyDown("ArrowUp")) {
        if (this.location.y > 0) {
          this.location.y = this.location.y - this.speed;
        }
      }

      if (this.animation.controleur.isKeyDown("ArrowDown")) {
        if (this.location.y < this.canvas.height - this.height) this.location.y = this.location.y + this.speed;
      }

      this.boum();
      this.draw();
    }
  }]);

  return Blocl;
}();



/***/ }),

/***/ "./src/Blocr.js":
/*!**********************!*\
  !*** ./src/Blocr.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blocr; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Blocr = /*#__PURE__*/function () {
  function Blocr(animation) {
    _classCallCheck(this, Blocr);

    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.bal = this.animation.bal;
    this.color = "#fff";
    this.widht = 10;
    this.height = 100;
    this.speed = 3;
    this.point = 0;
    var x = 20;
    var y = this.canvas.height / 2 - this.height / 2;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
  }

  _createClass(Blocr, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
      this.ctx.fill();
      this.ctx.font = '48px serif';
      this.ctx.textAlign = "center";
      this.ctx.fillText(this.point, this.canvas.width - 20, this.canvas.height - 20);
    }
  }, {
    key: "boum",
    value: function boum() {
      if (this.bal.location.x - this.bal.widht < this.location.x + this.widht) {
        if (this.bal.location.y < this.location.y || this.bal.location.y > this.location.y + this.height) {
          var x = this.canvas.width / 2;
          var y = this.canvas.height / 2;
          this.bal.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
          this.point = this.point + 1;
        } else {
          //console.log("gagné");
          this.bal.speed = this.bal.speed + 1;
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.animation.controleur.isKeyDown("z")) {
        if (this.location.y > 0) {
          this.location.y = this.location.y - this.speed;
        }
      }

      if (this.animation.controleur.isKeyDown("s")) {
        if (this.location.y < this.canvas.height - this.height) this.location.y = this.location.y + this.speed;
      }

      this.boum();
      this.draw();
    }
  }]);

  return Blocr;
}();



/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }]);

  return Vector;
}();



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controleur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controleur */ "./src/controleur.js");
/* harmony import */ var _Blocr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocr */ "./src/Blocr.js");
/* harmony import */ var _Blocl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blocl */ "./src/Blocl.js");
/* harmony import */ var _Bal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bal */ "./src/Bal.js");




var animation = {
  canvasElt: undefined,
  ctx: undefined,
  controleur: _controleur__WEBPACK_IMPORTED_MODULE_0__["controleur"],
  init: function init() {
    this.canvasElt = document.createElement("canvas");
    document.body.insertAdjacentElement("beforeend", this.canvasElt);
    this.canvasElt.height = 600;
    this.canvasElt.width = 800;
    this.ctx = this.canvasElt.getContext('2d'); //* Ajoute les blocs

    this.bal = new _Bal__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.blocr = new _Blocr__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.blocl = new _Blocl__WEBPACK_IMPORTED_MODULE_2__["default"](this); //* initialiser mon controleur 

    this.controleur.init(this);
    this.animate();
  },
  draw: function draw() {
    this.bal.update();
    this.blocr.update();
    this.blocl.update();
  },
  animate: function animate() {
    var _this = this;

    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
    this.draw();
    window.requestAnimationFrame(function () {
      _this.animate();
    });
  }
};
animation.init();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/controleur.js":
/*!***************************!*\
  !*** ./src/controleur.js ***!
  \***************************/
/*! exports provided: controleur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controleur", function() { return controleur; });
var controleur = {
  pressedKeys: [],
  allowedKeys: ["z", "s", "ArrowUp", "ArrowDown"],
  init: function init(animation) {
    var _this = this;

    window.addEventListener("keydown", function (e) {
      var key = e.key; // Recupére le nom de la touche appuiller

      if (_this.allowedKeys.indexOf(key) != -1) {
        // index of renvoi -1 si l'élément n'est pas dans le tableau. Si la touche qu'on vient de presse est dans le tableau des touches autorisées/ 
        if (_this.pressedKeys.indexOf(key) == -1) {
          // vétifie si la touche n'est pas déjà appuiller (pour que ça se fasse qu'une fois)
          e.preventDefault(); // Ajout du prof pour éviter d'éventuelles problémes 

          e.stopPropagation(); // Ajout du prof pour éviter d'éventuelles problémes 

          _this.pressedKeys.push(key); // Alors on rajoute la touche dans touche appuillée 


          console.log(_this.pressedKeys);
        }
      }
    }, false);
    window.addEventListener("keyup", function (e) {
      var key = e.key; // voir plus haut

      if (_this.pressedKeys.indexOf(key) != -1) {
        // On vérifie sur la touche est bien enfoncé, par sécuritée. 
        e.preventDefault(); // Ajout du prof pour éviter d'éventuelles problémes 

        e.stopPropagation(); // Ajout du prof pour éviter d'éventuelles problémes 

        _this.pressedKeys.splice(_this.pressedKeys.indexOf(key), 1); // Splice à besoin d'un indice de départ (qu'on récup avec indexOf) et d'un nombre de truc à suprimer, ici un seul. 

      }
    }, false);
  },
  isKeyDown: function isKeyDown(key) {
    if (this.pressedKeys.indexOf(key) != -1) {
      return true; // si la touche est appuiller, on envoie true, on s'en servira plus tard =) 
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/pong/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/pong/src/app.scss */"./src/app.scss");


/***/ })

/******/ });