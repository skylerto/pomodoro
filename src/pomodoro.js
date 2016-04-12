'use strict';

const Timer = require('./timer.js');

module.exports = class Pomodoro {
  constructor(taskTime, breakTime){
    if (taskTime == null){
      this._taskTimer = new Timer();
    } else {
      this._taskTimer = new Timer(taskTime);
    }
    if (breakTime == null){
      this._breakTimer = new Timer(5);
    } else {
      this._breakTimer = new Timer(breakTime);
    }
  }

  get taskTimer(){
    return this._taskTimer;
  }

  get breakTimer(){
    return this._breakTimer;
  }

  startTask(){
    if(this._breakTimer.duration === 0){
      this._taskTimer.start();
      this._breakTimer.reset();
    }
  }

  startBreak(){
    if(this._taskTimer.duration === 0){
      this._breakTimer.start();
      this._taskTimer.reset();
    }
  }
};
