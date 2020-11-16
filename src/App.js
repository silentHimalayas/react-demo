import React from 'react';
import {HashRouter} from 'react-router-dom';
import {SideBar, MainContent} from './layoutComponents'
import './App.css';

import {Theme} from '@/context';
class App extends React.Component {
  constructor () {
    super();
    this.states = {
      title: 'react-demo'
    }
  }
  render () {
    return (
      <Theme.Provider value={{name: 'a'}}>
        <div className="app-main" >
          <HashRouter>
            <SideBar/>
            <div className="app-content">
              <MainContent  />
            </div>
          </HashRouter>
        </div>
      </Theme.Provider>
    );
  }
}

export default App;
