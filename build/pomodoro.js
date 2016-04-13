'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = require('./timer.js');

module.exports = function () {
  function Pomodoro(taskTime, breakTime) {
    _classCallCheck(this, Pomodoro);

    if (!taskTime) {
      this._taskTimer = new Timer();
    } else {
      this._taskTimer = new Timer(taskTime);
    }
    if (!breakTime) {
      this._breakTimer = new Timer(5);
    } else {
      this._breakTimer = new Timer(breakTime);
    }
  }

  _createClass(Pomodoro, [{
    key: 'startTask',
    value: function startTask() {
      this._taskTimer.start();
      this._breakTimer.reset();
    }
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
  }, {
    key: 'breakTimer',
    get: function get() {
      return this._breakTimer;
    }
  }]);

  return Pomodoro;
}();