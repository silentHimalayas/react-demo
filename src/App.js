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
      <div className="app-main" >
        <HashRouter>
          <SideBar/>
          <div className="app-content">
            <MainContent  />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
