import React from 'react';
import {HashRouter} from 'react-router-dom';
import {SideBar, MainContent} from './layoutComponents'
import './App.css';
// asdas
class App extends React.Component {
  constructor () {
    super();
    this.states = {
      title: 'react-demo'
    }
  }
  render () {
    return (
      <HashRouter className="app-main" >
        <SideBar className="side-bar" />
        <MainContent />
      </HashRouter>
    );
  }
}

export default App;
