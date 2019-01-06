import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.colorList = ["pink", "skyblue", "lightgreen", "yellow", "orange", "magenta", "white", "peachpuff"];
    this.state = {
      numberOfClocks: [0]

    }
    this.setNumberOfClocks = this.setNumberOfClocks.bind(this);
  }


  setNumberOfClocks(e) {
    let selectValue = parseInt(e.target.value);
    this.setState({numberOfClocks: Array(selectValue).fill("ImAcLoCk")});
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
          {this.state.numberOfClocks.map((clock, index) => <Clock id={index} key={index} colorList={this.colorList}/>)}
        </header>
      </div>
    );
  }
}

export default App;
