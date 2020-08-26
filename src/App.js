import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/signUp.component'
import Login from './components/user/login.component'

function App() {
  return (
    // <div className="App">
      <div className="container">
        <h1>Hello, World</h1>
        <Register />
        <Login />
      </div>
    // </div>
  );
}

export default App;
