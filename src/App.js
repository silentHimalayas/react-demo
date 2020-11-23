import React from 'react';
import {HashRouter} from 'react-router-dom';
import { createStore } from 'redux';
import {SideBar, MainContent} from './layoutComponents'
import { Provider } from 'react-redux'

import './App.css';

import {Theme} from '@/context';

const store = createStore((state = {count: 1}, action) => {
  let {type} = action
  switch (type) {
    case 'add':
      return {count: state.count + 1}
    default:
      return state
  }
})

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
              <Provider store={store}>
                <MainContent  />
              </Provider>
              
            </div>
          </HashRouter>
        </div>
      </Theme.Provider>
    );
  }
}

export default App;
