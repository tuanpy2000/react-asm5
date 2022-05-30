import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AuthRoute from './components/AuthRoute';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route exact path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path='/login' element={<AuthRoute><Login /></AuthRoute>} />
          <Route path='/signup' element={<AuthRoute><SignUp /></AuthRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    );
  }
}


