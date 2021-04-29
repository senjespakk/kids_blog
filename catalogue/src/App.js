import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from "./Redux/Store";
import React, { Component } from 'react';
import Main from './Components/Main';

const store = ConfigureStore();

class App extends Component{

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
