import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello annous</h1>
      </div>
    </Provider>
  );
}

export default App;
