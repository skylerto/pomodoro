const Timer = require('./timer.js');

/**
 * This class manages 2 timers, a break timer and a task timer.
 *
 * @class Pomodoro
 * @constructor
 */
module.exports = class Pomodoro {

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
   * Start the taskTimer.
   *
   * @method startTask
   */
  startTask() {
    this._taskTimer.start();
    this._breakTimer.reset();
  }

  /**
   * Start the breakTimer, on the condition that the taskTimer has completed.
   *
   * @method startBreak
   */
  startBreak() {
    if (this.taskTimer.duration === 0) {
      this._breakTimer.start();
      this._taskTimer.reset();
    }
  }
};
