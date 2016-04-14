if (typeof require !== 'undefined') {
  var Timer = require('./timer.js'); // eslint-disable-line no-var
}

/**
 * This class manages 2 timers, a break timer and a task timer.
 *
 * @class Pomodoro
 * @constructor
 */
const Pomodoro = class Pomodoro {


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
  constructor(taskTime, breakTime) {
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
  get taskTimer() {
    return this._taskTimer;
  }

  /**
   * Get the breakTimer.
   * Involked by instance.breakTimer.
   *
   * @property breakTimer
   * @type {Timer}
   */
  get breakTimer() {
    return this._breakTimer;
  }

  /**
   * Start the taskTimer, with a callback on every tick. See
   * `Timer.start(callback)`.
   *
   * @method startTask
   */
  startTask(callback) {
    this._taskTimer.start(callback);
    this._breakTimer.reset();
  }

  /**
   * Start the breakTimer, with a callback on every tick. See
   * `Timer.start(callback)`.
   * Will only start on the condition that the taskTimer has completed.
   *
   * @method startBreak
   */
  startBreak(callback) {
    if (this.taskTimer.duration === 0) {
      this._breakTimer.start(callback);
      this._taskTimer.reset();
    }
  }
};

module.exports = Pomodoro;
