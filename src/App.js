import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import "antd/dist/antd.css";
import Content from './screens/Content'

const screenWidth = window.screen.width
const maxBoxWidth = window.screen.width * 20 / 100
const min = -10
// const left = Math.floor(Math.random() * (max - min + 1)) + min;

function setInitialPosition() {
  var theThings = document.querySelectorAll(".logo-move");
  for (let i = 0; i < theThings.length; i++) {
    var theThing = theThings[i];
    let size = `${Math.floor(Math.random() * (maxBoxWidth - 20 + 1)) + 20}px`;
    theThing.style.left = `${Math.floor(Math.random() * (screenWidth - min + 1)) + min}px`;
    theThing.style.width = size;
    theThing.style.height = size;
    // theThing.style.animationDuration = `${Math.floor(Math.random() * (20 - 10 + 1)) + 10}s`;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      setInitialPosition()
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container" >
        <div>
          <div className="logo-move" />
          <div className="logo-move" />
          <div className="logo-move" />
          <div className="logo-move" />
          <div className="logo-move" />
        </div>
        <div className='content'>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
