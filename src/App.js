import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './Template';
import Home from './Home';
import Bio from './Bio';
import Messages from './Messages';
import Photos from './Photos';

class App extends Component {

  HOME = 0;
  BIO = 1;
  MESSAGES = 2;
  PHOTOS = 3;

  state = {
    page: this.HOME,
  }

  componentMap = {
    [this.HOME]: <Home />,
    [this.BIO]: <Bio />,
    [this.MESSAGES]: <Messages />,
    [this.PHOTOS]: <Photos />
  }

  render() {
    return (
      <Template onPageChange={
        e => {
          this.setState({
            page: e,
          })
        }
      }>
        {
          this.componentMap[this.state.page]
        }
      </Template>
    );
  }
}

export default App;
