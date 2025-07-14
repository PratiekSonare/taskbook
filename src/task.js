'use strict';
const Item = require('./item');

class Task extends Item {
  constructor(options = {}) {
    super(options);
    this._isTask = true;
    this.isComplete = options.isComplete || false;
    this.inProgress = options.inProgress || false;
    this.isStarred = options.isStarred || false;
    this.priority = options.priority || 1;
    this.pomodoroPlanned = options.pomodoroPlanned || 0;
    this.pomodoroCompleted = options.pomodoroCompleted || 0;
  }
}

module.exports = Task;
