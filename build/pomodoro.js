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