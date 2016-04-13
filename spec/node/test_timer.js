const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const Timer = require('../../src/timer.js');

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
});
