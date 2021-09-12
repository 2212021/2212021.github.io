import React, {Component} from 'react';
import './App.css';


function help() {
  alert("Please click on the color hex code in the middle of the screen to choose a color and your desired color's hex code will appear in the box.");
}

function about() {
  alert("https://github.com/2212021/Color-Hex-Codes\n\nColor chooser by jcolor.com\n");
}

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
      <div class='menubutton' onMouseEnter={this.show} onMouseLeave={this.hide} onClick={this.hide}>
        <h2>?</h2>
      </div>
    );
  }
  menubody = function() {
    if (this.state.show) {
	    return (
	      <div class='menu' style={{visibility:'visible'}} onMouseEnter={this.show} onMouseLeave={this.hide}>
		<div class='menuitem' onClick={help}><h2>Help</h2></div>
		<div class='menuitem' onClick={about}><h2>About</h2></div>
	      </div>
	    );
    }
    else {
	    return (
	      <div class='menu' style={{visibility:'hidden'}} onMouseEnter={this.show} onMouseLeave={this.hide}>
		<div class='menuitem'><h2>none</h2></div>
		<div class='menuitem'><h2>none</h2></div>
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
        <h1>Color Hex Viewer</h1>
        <input value='#FFFFFF' data-jscolor='{}'/>
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
