/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
module.exports = class Timer {

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
   * Decrease the duration by 1, simulating a single clock tick.
   *
   * @method tick
   */
  tick() {
    this._duration--;
  }

  /**
   * Start the timer.
   *
   * @method start
   */
  start() {
    this.timer = setInterval(() => {
      if (this._duration === 1) {
        clearInterval(this.timer);
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
