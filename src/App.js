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
        <h2 id='menubutton'>MENU</h2>
      </div>
    );
  }
  menubody = function() {
    return (
      <div>
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
          <h3>Text</h3>
        </div>
      );
    } else {
      return (
        <div>
          {this.menuhead()}
          <h3>Text</h3>
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
