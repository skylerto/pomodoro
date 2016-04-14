"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
var Timer = function () {

  /**
   * Constructor to create a new Timer.
   * Involked with the new keyword.
   *
   * @method constructor
   * @param {Number} [duration] The time to create the timer with.
   * @return {Timer} a new Timer object.
   */

  function Timer(duration) {
    _classCallCheck(this, Timer);

    if (!duration) {
      this._duration = 25 * 60;
    } else {
      this._duration = duration * 60;
    }
    this.orgDuration = this._duration;
  }

  /**
   * Get the current duration on the timer.
   *
   * @property duration
   * @type {Number}
   */


  _createClass(Timer, [{
    key: "tick",


    /**
     * Decrease the duration by 1, simulating a single clock tick.
     *
     * @method tick
     */
    value: function tick() {
      this._duration--;
    }

    /**
     * Start the timer, call a callback every tick.
     *
     * @param {Function} [callback] a function to call everytime the clock ticks.
     * @method start
     */

  }, {
    key: "start",
    value: function start(callback) {
      var _this = this;

      if (callback) {
        this.callback = callback;
      }
      this.timer = setInterval(function () {
        if (_this._duration === 1) {
          clearInterval(_this.timer);
        }
        if (_this.callback) {
          _this.callback(_this._duration);
        }

        _this.tick();
      }, 1000);
    }

    /**
     * Pause the timer.
     *
     * @method pause
     */

  }, {
    key: "pause",
    value: function pause() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }

    /**
     * Resets the duration to the original duration.
     *
     * @method reset
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
    }

    /**
     * Get the number of minutes left on the timer.
     *
     * @property minutes
     * @type {Number}
     */

  }, {
    key: "minutes",
    get: function get() {
      if (this._duration > 0) {
        return Math.floor(this._duration / 60);
      } else {
        return 0;
      }
    }

    /**
     * Get the number of seconds left on the timer.
     *
     * @property seconds
     * @type {Number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this._duration % 60;
    }
  }]);

  return Timer;
}();

module.exports = Timer;