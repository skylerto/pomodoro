'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const describe = require('mocha').describe;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;
const Timer = require('../../build/timer.js');

describe('Timer', () => {

  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    this.clock.restore();
  });

  it('should create a timer with default value 25 minutes', () => {
    const timer = new Timer();
    assert.equal(1500, timer.duration);
  });

  it('should create a timer with a value of 5 minutes', () => {
    const timer = new Timer(5);
    assert.equal(5 * 60, timer.duration);
  });

  it('should count down and stop at 0', () => {
    const timer = new Timer(0.1);
    assert.equal(6, timer.duration);
    timer.start();
    this.clock.tick(6000);
    expect(timer.duration).to.equal(0);
    assert.equal(0, timer.duration);
  });

  it('should be at 30 seconds, at 30 seconds in', () => {
    const timer = new Timer(1);
    assert.equal(60, timer.duration);
    timer.start();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(30);
    this.clock.tick(30000);
    assert.equal(0, timer.duration);
  });

  it('should reset the timer', () => {
    const timer = new Timer(1);
    assert.equal(60, timer.duration);
    timer.start();
    this.clock.tick(60000);
    expect(timer.duration).to.equal(0);
    timer.reset();
    expect(timer.duration).to.equal(60);
  });

  it('should pause the timer', () => {
    const timer = new Timer(1);
    timer.start();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(30);
    timer.pause();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(30);
  });

  it('should pause the timer, then start from the same duration', () => {
    const timer = new Timer(1);
    timer.start();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(30);
    timer.pause();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(30);
    timer.start();
    this.clock.tick(30000);
    expect(timer.duration).to.equal(0);
  });
});
