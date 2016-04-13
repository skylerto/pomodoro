[![Build
Status](https://travis-ci.org/skylerto/pomodoro.svg?branch=master)](https://travis-ci.org/skylerto/pomodoro)
[![npm version](https://badge.fury.io/js/ptimer.svg)](https://badge.fury.io/js/ptimer)

# Pomodoro
A pomodoro adapter for timer.js that binds view elements to timer for direct object manipulation.

## Installation
Available through npm as ptimer.

```javascript
npm install ptimer
```

add a require to your js
``` javascript
const Pomodoro = require('ptimer');
```

## Usage

### Creating a General Timer
```javascript
const pomodoro = new Pomodoro(taskDuration, breakDuration);
```

## API

### `.startTask()`
Must be executed to start the task timer, condition is that the `breakTimer` is at 0 duration. Beginning from the `duration` down to 0.

### `.startBreak()`
Must be executed to start the break timer, condition is that the `taskTimer` is at 0 duration. Beginning from the `duration` down to 0.

### `.taskDuration()`
Gets the current duration of the task timer.

### `.breakDuration()`
Gets the current duration of the break timer.

## License

The MIT License (MIT)

Copyright (c) 2016 Skyler Layne

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
