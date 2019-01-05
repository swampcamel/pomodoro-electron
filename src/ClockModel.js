export class ClockModel {
  constructor(clockNumber, timeInSeconds, mode, animation, color){
    this.clockNumber = clockNumber;
    this.timeInSeconds = timeInSeconds;
    this.mode = mode;
    this.animation = animation;
    this.color = color;
    this.longBreakVal = 600;
    this.shortBreakVal = 300;
    this.isStarted = false;
    this.mins = Math.floor(timeInSeconds / 60);
    this.seconds = timeInSeconds - this.mins * 60;
  }
}
