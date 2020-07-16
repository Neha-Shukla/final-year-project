import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;