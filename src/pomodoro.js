(function(name, definition) {
  var hasDefine = typeof define === 'function',
    hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    define(name, definition);
  } else if (hasExports) {
    module.exports = definition();
  } else {
    this[name] = definition();
  };

}('Pomodoro', function() {
  'use strict';
  /*
   * Facade pattern for interfacing with the timer.js class.
   */

  /* Bind the elements to view elements off the bat */
  function Pomodoro(duration, minutesView, secondsView, pomodoroCounter) {
    this._pomodoro;

    // class variables
    this.duration = duration;
    this.min_view = minutesView;
    this.sec_view = secondsView;
    this.pomodoroCounter_view = pomodoroCounter;
    this.numberOfPomodoros = 0;
    this.paused = false;
    var that = this;
    this.timer = new Timer({
      tick: 1,
      ontick: function(sec) {
        that.getTime(sec)
      },
      onstart: function() {
        console.log("Timer started")
      },
      onstop: function() {
        console.log('Timer stop')
      },
      onpause: function() {
        that.onPause()
      },
      onend: function() {
        that.updatePomodoros()
      }
    }); // Ensure that the document inherits this
  };

  // Function returns and updates the time on every tick.
  Pomodoro.prototype.getTime = function(sec) {

    // Calulcate the minutes
    var minutes = Math.floor((sec / 1000 / 60) % 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Calculate the seconds
    var seconds = Math.floor((sec / 1000) % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // Update the view elements
    $(this.min_view).html(minutes);
    $(this.sec_view).html(seconds);
    return this;
  };

  // What to run on start of the timer.
  Pomodoro.prototype.start = function() {
    if (this.paused) {
      this.timer.start();
      // Change the view back
      this.paused = false;
    } else {
      console.log("The deed is done", this.duration);
      this.timer.start(this.duration);
    }
    return this;
  };

  // Update the number of pomodoros
  Pomodoro.prototype.updatePomodoros = function() {
    this.numberOfPomodoros++;
    console.log("Poms", this.numberOfPomodoros)
    $(this.pomodoroCounter_view).html(this.numberOfPomodoros);
    this.timer.stop();
    return this;
  }

  // What to do when someone pauses
  Pomodoro.prototype.onPause = function() {
    if (this.paused) {
      console.log('okay something happened?');
    }
    this.paused = true;

    //Change what the view looks like.
    console.log('timer set on paused');
    return this;
  }

  // Facade function for pausing the timer.
  Pomodoro.prototype.pause = function() {
    this.timer.pause();
    return this;
  }

  return Pomodoro;
}));
