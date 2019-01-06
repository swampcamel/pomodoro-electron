import React from 'react';
import {ClockModel} from './ClockModel';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clock: new ClockModel(props.id, 1499, "normal", "fadeOut", props.colorList[Math.round(Math.random()*props.colorList.length)]),
      toggle: false
    }
    this.intervalHandle= null;
    this.time = this.state.clock.timeInSeconds;
  }

  componentDidMount() {
    this.initializeTime();
  }

  initializeTime = () => {
    let newState = this.state.clock;
    newState.timeInSeconds = 1499;
    newState.mins = Math.floor(newState.timeInSeconds / 60);
    newState.seconds = newState.timeInSeconds - newState.mins * 60;
    this.setState({clock: newState})
  }

  createInterval() {
    this.intervalHandle = setInterval(this.updateTime, 1000)
  }

  clearInterval() {
    clearInterval(this.intervalHandle);
  }

  updateTime = () => {
    this.time --;
    let newState = this.state.clock;
    newState.timeInSeconds = this.time;
    newState.mins = Math.floor(newState.timeInSeconds / 60);
    newState.seconds = newState.timeInSeconds - newState.mins * 60;
    this.setState({clock: newState})
  }

  playTime = () => {
    if (!this.state.toggle) {
      this.startTime()
    } else {
      this.pauseTime()
    }
  }

  startTime() {
    this.createInterval()
    this.toggle()
  }

  pauseTime = () => {
    this.clearInterval()
    this.toggle()
  }

  resetTime = () => {
    this.initializeTime()
    this.clearInterval()
    this.setState({toggle: false})
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    return(
      <div className="clock">
      <div className="current-state" style={{color: this.state.clock.color}}>{this.state.clock.mode} {this.props.id + 1}</div>
      <div className="timer">
        <span className="bigtime">{this.state.clock.timeInSeconds} : </span>
        <span className="minutes">{this.state.clock.mins}</span>:
        <span className="seconds">{this.state.clock.seconds}</span>
      </div>
      <div className="timer-buttons">
        <button type="text" onClick={() => this.createInterval()}>Start</button>
        <button type="text" onClick={() => this.pauseTime()}>Stop</button>
        <button type="text" onClick={() => this.resetTime()}>Restart</button>
      </div>
</div>
    )
  }
}

export default Clock;
