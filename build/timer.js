"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
module.exports = function () {
  function Timer(duration) {
    _classCallCheck(this, Timer);

    if (duration == null) {
      this._duration = 25 * 60;
    } else {
      this._duration = duration * 60;
    }
    this.orgDuration = this._duration;
  }

  /**
   * Get the current duration on the timer.
   */


  _createClass(Timer, [{
    key: "tick",
    value: function tick() {
      this._duration--;
    }

    /**
     * Start the timer.
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var timer = setInterval(function () {
        if (_this._duration === 1) {
          clearInterval(timer);
        }
        _this.tick();
      }, 1000);
    }

    /**
     * Resets the duration to the original duration
     */

  }, {
    key: "reset",
    value: function reset() {
      this._duration = this.orgDuration;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    },
    set: function set(duration) {
      this._duration = duration;
    }
  }]);

  return Timer;
}();