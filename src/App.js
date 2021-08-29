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
    if (this.state.show) {
	    return (
	      <div class='menu' style={{visibility:'visible'}} onMouseEnter={this.show} onMouseLeave={this.hide}>
		<div class='menuitem' onClick={this.action1}><h2>Item1</h2></div>
		<div class='menuitem' onClick={this.action1}><h2>Item2</h2></div>
	      </div>
	    );
    }
    else {
	    return (
	      <div class='menu' style={{visibility:'hidden'}} onMouseEnter={this.show} onMouseLeave={this.hide}>
		<div class='menuitem' onClick={this.action1}><h2>Item1</h2></div>
		<div class='menuitem' onClick={this.action1}><h2>Item2</h2></div>
	      </div>
	    );
    }
  }
  render = function() {
      return (
        <div>
          {this.menuhead()}
          {this.menubody()}
        </div>
      );
   }
}

class CentralDiv extends Component {
  centraldiv = function() {
    return (
      <div class='center'>
        <h1>Welcome!</h1>
      </div>
    );
  }
  render = function() {
    return this.centraldiv();
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
