/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
module.exports = class Timer {

  constructor(duration) {
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
  get duration() {
    return this._duration;
  }

  set duration(duration) {
    this._duration = duration;
  }

  tick() {
    this._duration--;
  }

  /**
   * Start the timer.
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
   *  Pause the timer.
   */
  pause() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  /**
   * Resets the duration to the original duration
   */
  reset() {
    this._duration = this.orgDuration;
  }

};
