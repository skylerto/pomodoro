![Dependency Status][david-dm] [![npm version](https://badge.fury.io/js/ptimer.svg)](https://badge.fury.io/js/ptimer)

# Pomodoro
A pomodoro adapter for timer.js that binds view elements to timer for direct object manipulation.

## Installation
Available through npm as ptimer.

```javascript
npm install ptimer
```

Also available through bower as a front end resource.

```javascript
bower install pomodoro
```

## Usage

### Creating a General Timer
```javascript
var pomodoro = new Pomodoro(duration, minuteViewComponent, secondViewComponent, pomodoroDisplayViewComponent);
```

### Creating a Task Timer
Creates a new Pomodoro with `duration` set to 25:00 minutes.
```javascript
var pomodoroTask = new Task(minuteViewComponent, secondViewComponent, pomodoroDisplayViewComponent);
```

### Creating a Break Timer
Creates a new Pomodoro with `duration` set to 5:00 minutes.
```javascript
var pomodoroBreak = new Break(minuteViewComponent, secondViewComponent, pomodoroDisplayViewComponent);
```

## API
### `.getTime()`
Executes every tick of the timer, updating the `minuteViewComponent` and `secondViewComponent` to reflect the remaining duration.

### `.start()`
Must be executed to start the timer. Beginning from the `duration` down to 0.

### `.updatePomodoros()`
Executes once the timer reaches 0 updates the `pomodoroDisplayViewComponent` to relect the number of timers the object has completed.

## License

The MIT License (MIT)

Copyright (c) 2015 Skyler Layne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[david-dm]: https://david-dm.org/skylerto/pomodoro.svg
