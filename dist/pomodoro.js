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
     * Start the timer.
     *
     * @method start
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.timer = setInterval(function () {
        if (_this._duration === 1) {
          clearInterval(_this.timer);
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
  }]);

  return Timer;
}();

module.exports = Timer;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (typeof require !== 'undefined') {
  var Timer = require('./timer.js'); // eslint-disable-line no-var
}

/**
 * This class manages 2 timers, a break timer and a task timer.
 *
 * @class Pomodoro
 * @constructor
 */
var Pomodoro = function () {

  /**
   * Contructor to create a new Pomodoro.
   * Involked with new.
   *
   * @method constructor
   * @param {Number} [taskTime] The time in minutes to instantiate the taskTimer with.
   * @param {Number} [breakTime] The time in minutes to instantiate the breakTimer
   * with.
   * @return {Pomodoro} a new Pomodoro object.
   */

  function Pomodoro(taskTime, breakTime) {
    _classCallCheck(this, Pomodoro);

    if (!taskTime) {
      this._taskTimer = new Timer(); // eslint-disable-line block-scoped-var
    } else {
        this._taskTimer = new Timer(taskTime); // eslint-disable-line block-scoped-var
      }
    if (!breakTime) {
      this._breakTimer = new Timer(5); // eslint-disable-line block-scoped-var
    } else {
        this._breakTimer = new Timer(breakTime); // eslint-disable-line block-scoped-var
      }
  }

  /**
   *  Get the taskTimer.
   *  Involked by instance.taskTimer.
   *
   * @property taskTimer
   * @type {Timer}
   */


  _createClass(Pomodoro, [{
    key: 'startTask',


    /**
     * Start the taskTimer.
     *
     * @method startTask
     */
    value: function startTask() {
      this._taskTimer.start();
      this._breakTimer.reset();
    }

    /**
     * Start the breakTimer, on the condition that the taskTimer has completed.
     *
     * @method startBreak
     */

  }, {
    key: 'startBreak',
    value: function startBreak() {
      if (this.taskTimer.duration === 0) {
        this._breakTimer.start();
        this._taskTimer.reset();
      }
    }
  }, {
    key: 'taskTimer',
    get: function get() {
      return this._taskTimer;
    }

    /**
     * Get the breakTimer.
     * Involked by instance.breakTimer.
     *
     * @property breakTimer
     * @type {Timer}
     */

  }, {
    key: 'breakTimer',
    get: function get() {
      return this._breakTimer;
    }
  }]);

  return Pomodoro;
}();

module.exports = Pomodoro;