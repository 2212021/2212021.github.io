import React, {Component} from 'react';
import './App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  show = () => {
    this.setState({show:true});
  }
  hide = () => {
    this.setState({show:false});
  }
  menuhead = function() {
    return (
      <div class='menubutton' onMouseEnter={this.show} onMouseLeave={this.hide}>
        <h2>MENU</h2>
      </div>
    );
  }
  menubody = function() {
    return (
      <div class='menu' onMouseEnter={this.show} onMouseLeave={this.hide}>
        <div><form action="#"><input class='menuitem' type='submit' value="Item1"/></form></div>
        <div><form action="#"><input class='menuitem' type='submit' value="Item1"/></form></div>
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
