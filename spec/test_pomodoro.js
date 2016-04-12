'use strict';

const expect = require('chai').expect;
const Pomodoro = require('../src/pomodoro.js');
const Timer = require('../src/timer.js');

describe('Pomodoro', function(){
  it('should create 2 timers', function(){
    const pom = new Pomodoro();
    let time = new Timer();
    expect(pom.taskTimer.duration).to.equal(time.duration);

    time = new Timer(5);
    expect(pom.breakTimer.duration).to.equal(time.duration);
  });

  it('should start a task', function(){
    const pom = new Pomodoro(1,1);
    pom.startTask();
    setInterval(() => {
      expect(pom.taskTimer.duration).to.equal(0);
      pom.startBreak();
      expect(pom.taskTimer.duration).to.equal(60);
      setInterval(() => {
        expect(pom.breakTimer.duration).to.equal(10);
      }, 60000);
    }, 60000);
    


  });
  it('', function(){});
});
