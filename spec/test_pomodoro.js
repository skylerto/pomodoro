'use strict';

const assert = require('chai').assert;
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

  it('', function(){});
  it('', function(){});
});
