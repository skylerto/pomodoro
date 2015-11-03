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

}('Task', function() {
  'use strict';
  /*
   * Facade pattern for interfacing with the timer.js class.
   */

  /* Bind the elements to view elements off the bat */
  function Task(minutesView, secondsView, pomodoroCounter) {
    var duration = 25 * 60;
    var pomodoro = new Pomodoro(duration, minutesView, secondsView, pomodoroCounter);
  };

  Task.prototype = Object.create(Pomodoro.prototype);

  return Task;
}));
