/*
* Facade pattern for interfacing with the timer.js class.
*/

/* Bind the elements to view elements off the bat */
function Pomodoro(duration, minutesView, secondsView, pomodoroCounter){

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
            ontick  : function(sec) { that.getTime(sec) },
            onstart : function() { console.log("Timer started")},
            onstop  : function() { console.log('Timer stop')},
            onpause : function() { that.onPause()},
            onend   : function() { that.updatePomodoros()}
          }); // Ensure that the document inherits this

  // Function returns and updates the time on every tick.
  this.getTime = function(sec) {

    // Calulcate the minutes
    var minutes = Math.floor( (sec/1000/60) % 60 );
    if(minutes < 10) {
      minutes = "0" + minutes;
    }

    // Calculate the seconds
    var seconds = Math.floor( (sec/1000) % 60 );
    if(seconds < 10){
      seconds = "0" + seconds;
    }

    // Update the view elements
    $(this.min_view).html(minutes);
    $(this.sec_view).html(seconds);

  };

  // What to run on start of the timer.
  this.start = function(){
    if(this.paused){
      this.timer.start();
      // Change the view back
      this.paused = false;
    } else {
      console.log("The deed is done", this.duration);
      this.timer.start(this.duration);
    }
  };

  // Update the number of pomodoros
  this.updatePomodoros = function(){
      this.numberOfPomodoros++;
      console.log("Poms", this.numberOfPomodoros)
      $(this.pomodoroCounter_view).html(this.numberOfPomodoros);
      this.timer.stop();
  }

  // What to do when someone pauses
  this.onPause = function(){
    if(this.paused){
      console.log('okay something happened?');
    }
    this.paused = true;

    //Change what the view looks like.
    console.log('timer set on paused');
  }

  // Facade function for pausing the timer.
  this.pause = function(){
    this.timer.pause();
  }
}
