'use strict';

const assert = require('chai').assert;
const Timer = require('../src/timer.js');

describe('Timer', function(){
  it('should create a timer with default value 25 minutes', function(){
    const timer = new Timer();
    assert.equal(1500, timer.duration);
  });

  it('should create a timer with a value of 5 minutes', function(){
    const timer = new Timer(5);
    assert.equal(5 * 60, timer.duration);
  });

  it('should count down and stop at 0', function(){
    const timer = new Timer(1);
    assert.equal(60, timer.duration);
    setInterval(() => {
      assert.equal(0, timer.duration);
    }, 60000);

    setInterval(() => {
      assert.equal(0, timer.duration);
    }, 1000);
  });
});
