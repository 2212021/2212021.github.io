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
  render = function() {
    if (this.state.show) {
      return (
        <div style={{visibility:visible}}>
          {this.menuhead()}
          {this.menubody()}
        </div>
      );
    } else {
      return (
        <div style={{visibility:hidden}}>
          {this.menuhead()}
          {this.menubody()}
        </div>
      );
    }
  }
}

class CentralDiv extends Component {
  centraldiv = function() {
    return (
      <div class='center'>
        
      </div>
    );
  }
  render = function() {
    
  }
}

function App() {
  return (
    <div className="App">
      <Menu/>
      <CentralDiv/>
    </div>
  );
}

export default App;
