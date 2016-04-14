/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
const Timer = class Timer {

  /**
   * Constructor to create a new Timer.
   * Involked with the new keyword.
   *
   * @method constructor
   * @param {Number} [duration] The time to create the timer with.
   * @return {Timer} a new Timer object.
   */
  constructor(duration) {
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
  get duration() {
    return this._duration;
  }

  /**
   * Get the number of minutes left on the timer.
   *
   * @property minutes
   * @type {Number}
   */
  get minutes() {
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
  get seconds() {
    return this._duration % 60;
  }

  /**
   * Decrease the duration by 1, simulating a single clock tick.
   *
   * @method tick
   */
  tick() {
    this._duration--;
  }

  /**
   * Start the timer, call a callback with `this` timer every tick.
   *
   * @param {Function} [callback] a function to call everytime the clock ticks.
   * @method start
   */
  start(callback) {
    if (callback) {
      this.callback = callback;
    }
    this.timer = setInterval(() => {
      if (this._duration === 1) {
        clearInterval(this.timer);
      }
      if (this.callback) {
        this.callback(this);
      }

      this.tick();
    }, 1000);
  }

  /**
   * Pause the timer.
   *
   * @method pause
   */
  pause() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  /**
   * Resets the duration to the original duration.
   *
   * @method reset
   */
  reset() {
    this._duration = this.orgDuration;
  }

};

module.exports = Timer;
