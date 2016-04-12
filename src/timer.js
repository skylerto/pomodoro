'use strict';

/**
 *  A class modelling a timer.
 *
 *  @class Timer
 *  @constructor
 */
module.exports = class Timer {

  constructor(duration){
    if(duration == null) {
      this._duration = 25 * 60;
    } else {
      this._duration = duration * 60;
    }
    this.start();
  }

  get duration(){
    return this._duration;
  }

  start(){
    setInterval(() => {
      this._duration--;
    },1000);
  }

};
