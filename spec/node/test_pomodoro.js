/* eslint strict: ["error", "global"] */
'use strict';

// Module imports
const expect = require('chai').expect;
const sinon = require('sinon');
const describe = require('mocha').describe;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;

// Class imports
const Pomodoro = require('../../build/pomodoro.js');
const Timer = require('../../build/timer.js');

describe('Pomodoro', () => {

  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    this.clock.restore();
  });

  it('should create 2 timers', () => {
    const pom = new Pomodoro();
    let time = new Timer();
    expect(pom.taskTimer.duration).to.equal(time.duration);
    time = new Timer(5);
    expect(pom.breakTimer.duration).to.equal(time.duration);
  });

  it('should start a task', () => {
    const pom = new Pomodoro();
    pom.startTask();
    this.clock.tick(25 * 60 * 1000);
    expect(pom.taskTimer.duration).to.equal(0);
  });

  it('should start a break', () => {
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
