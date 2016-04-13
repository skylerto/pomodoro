'use strict';

const expect = require('chai').expect;
const Pomodoro = require('../../src/pomodoro.js');
const Timer = require('../../src/timer.js');
const sinon = require('sinon');

describe('Pomodoro', function(){

  beforeEach(function () {
    this.clock = sinon.useFakeTimers(); 
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('should create 2 timers', function(){
    const pom = new Pomodoro();
    let time = new Timer();
    expect(pom.taskTimer.duration).to.equal(time.duration);
    time = new Timer(5);
    expect(pom.breakTimer.duration).to.equal(time.duration);
  });

  it('should start a task', function(){
    const pom = new Pomodoro();
    pom.startTask();
    this.clock.tick(25 * 60 * 1000);
    expect(pom.taskTimer.duration).to.equal(0);
  });

  it('should start a break', function(){
    const pom = new Pomodoro();
    pom.startTask();
    this.clock.tick(25 * 60 * 1000);
    expect(pom.taskTimer.duration).to.equal(0);
    pom.startBreak();
    expect(pom.taskTimer.duration).to.equal(1500);
    this.clock.tick(5 * 60 * 1000);
    expect(pom.breakTimer.duration).to.equal(0);
  });
});
