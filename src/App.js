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
  action1 = () => {
    alert("Hi!"); 
  }
  menuhead = function() {
    return (
      <div class='menubutton' onMouseEnter={this.show} onMouseLeave={this.hide} onClick={this.hide}>
        <h2>MENU</h2>
      </div>
    );
  }
  menubody = function() {
    return (
      <div class='menu' onMouseEnter={this.show} onMouseLeave={this.hide}>
        <div class='menuitem' onClick={this.action1}><h2>Item1</h2></div>
        <div class='menuitem' onClick={this.action1}><h2>Item2</h2></div>
      </div>
    );
  }
  centraldiv = function() {
    return (
      <div class='center'>
        
      </div>
    );
  }
  render = function() {
    if (this.state.show) {
      return (
        <div>
          {this.menuhead()}
          {this.menubody()}
          {this.centraldiv()}
        </div>
      );
    } else {
      return (
        <div>
          {this.menuhead()}
          {this.centraldiv()}
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
