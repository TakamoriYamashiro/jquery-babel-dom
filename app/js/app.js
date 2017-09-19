(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = exports.Dom = function () {
  function Dom() {
    _classCallCheck(this, Dom);
  }

  _createClass(Dom, null, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.win = $(window);
      this.doc = $(document);
      this.body = $('html,body');
      this.width = this.win.width();
      this.height = this.win.height();
      this.type = this.getType();
      this.observer = $({});

      this.win.resize(function (e) {
        _this.width = _this.win.width();
        var type = Dom.getType();
        if (type !== _this.type) {
          _this.type = type;
          _this.observer.trigger(_this.EVENT_CHANGE_DEVICE_TYPE, _this.type);
        }
        _this.observer.trigger(_this.EVENT_RESIZE_WINDOW, _this.width);
      }).trigger('resize');
    }
  }, {
    key: 'getType',
    value: function getType() {
      if (this.width > this.TYPE_PC_MIN) {
        return Dom.TYPE_PC;
      } else if (this.width > this.TYPE_TABLET_MIN) {
        return Dom.TYPE_TABLET;
      } else {
        return Dom.TYPE_SP;
      }
    }
  }, {
    key: 'on',
    value: function on(eventtype) {
      this.observer.on.apply(this.observer, arguments);
    }
  }, {
    key: 'off',
    value: function off(eventtype) {
      this.observer.off.apply(eventtype, arguments);
    }
  }, {
    key: 'trigger',
    value: function trigger(eventtype) {
      this.observer.trigger(eventtype, arguments);
    }
  }]);

  return Dom;
}();

Dom.TYPE_PC = 'type_pc';
Dom.TYPE_TABLET = 'type_tablet';
Dom.TYPE_SP = 'type_sp';
Dom.TYPE_PC_MIN = 1280;
Dom.TYPE_TABLET_MIN = 765;
Dom.EVENT_CHANGE_DEVICE_TYPE = 'change_device_type';
Dom.EVENT_RESIZE_WINDOW = 'resize_window';

Dom.init();

},{}],2:[function(require,module,exports){
'use strict';

var _Dom = require('./Dom.js');

console.log(_Dom.Dom);

_Dom.Dom.on(_Dom.Dom.EVENT_CHANGE_DEVICE_TYPE, function (e, device_type) {
	console.log(e);
	console.log(device_type);
});

_Dom.Dom.on(_Dom.Dom.EVENT_RESIZE_WINDOW, function (e, width) {
	// console.log(e);
	// console.log(width);
});

//custom event
_Dom.Dom.on("tick", function (e) {
	console.log(e);
});

setInterval(function () {
	_Dom.Dom.trigger('tick');
}, 3000);

},{"./Dom.js":1}]},{},[2]);
