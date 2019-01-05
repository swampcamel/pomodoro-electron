import React, { Component } from 'react';
import {ClockModel} from './ClockModel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.colorList = ["pink", "skyblue", "lightgreen", "yellow", "orange", "magenta", "white", "peachpuff"];
    this.state = {
      numberOfClocks: 1,
      clocks: []
    }
    this.setNumberOfClocks = this.setNumberOfClocks.bind(this);
    this.generateClocks = this.generateClocks.bind(this);
    this.runClock = this.runClock.bind(this);
  }

  setNumberOfClocks(e) {
    let selectValue = parseInt(e.target.value);
    this.setState({numberOfClocks: selectValue});
    this.generateClocks(selectValue);
  }

  generateClocks(numberOfClocks) {
    let clockArray = [];
    for (let i = 0; i < numberOfClocks; i++) {
      let newClock = new ClockModel(i, 1499, "normal", "fadeOut", this.colorList[Math.round(Math.random()*this.colorList.length)]);
      clockArray.push(newClock);
    }
    this.setState({clocks: clockArray});
  }

  runClock(clockId) {
    let newClockState = this.state.clocks;

      if (newClockState[clockId].timeInSeconds == 0) {
        alert("done");
      } else {
        newClockState[clockId].timeInSeconds -= 1;
        newClockState[clockId].mins = Math.floor(newClockState[clockId].timeInSeconds / 60);
        newClockState[clockId].seconds = newClockState[clockId].timeInSeconds - newClockState[clockId].mins * 60;
      }
    this.setState({clocks: newClockState});
  }

  componentWillMount() {
    this.generateClocks(this.state.numberOfClocks);
  }

  render() {
        console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <div id="amount">Select # of Clocks</div>
          <select name="amountOfClocks" onChange={(e) => this.setNumberOfClocks(e)}>
            <option value="1" default>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div>
            <audio id="audio" src="alarm.mp3" autostart="false"></audio>
          </div>
          <div>
            <h3>You selected {this.state.numberOfClocks} clocks.</h3>
          </div>
          {this.state.clocks.map((clock, index) =>
            <div key={index}>
              <div className="current-state" style={{color: clock.color}}>{clock.mode} {index + 1}</div>
              <div className="timer">
                <span className="minutes">{clock.mins}</span>:
                <span className="seconds">{clock.seconds}</span>
              </div>
              <div className="timer-buttons">
                <button type="text" onClick={() => this.runClock(index)}>Start</button>
                <button type="text">Stop</button>
                <button type="text">Restart</button>
                <button type="text">Short Break</button>
                <button type="text">Long Break</button>
              </div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
