import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import './App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  toggle = () => {
    this.setState({show:!this.state.show});
  }
  menuhead = function() {
    return (
      <div onClick={this.toggle}>
        <h2>MENU</h2>
      </div>
    );
  }
  menubody = function() {
    return (
      <div onMouseLeave={this.hide}>
        <ul>
          <a href="#"><li>item1</li></a>
          <a href="#"><li>item2</li></a>
        </ul>
      </div>
    );
  }
  render = function() {
    if (this.state.show) {
      return (
        <div>
          {this.menuhead()}
          {this.menubody()}
        </div>
      );
    } else {
      return (
        <div>
          {this.menuhead()}
        </div>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
}

export default App;
