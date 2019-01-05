import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="amount">Select # of Clocks</div>
          <form>
          <select name="amountOfClocks" id="clocks">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit" id="submitAmount" onClick={(event)=> {event.preventDefault(); console.log("Clicked")}}>Add Clocks</button>
          </form>

        </header>
      </div>
    );
  }
}

export default App;
