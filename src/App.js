import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import AuthRoute from './component/AuthRoute';
import { Navigate } from 'react-router-dom';
import NotFound from './component/NotFound';
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    );
  }
}


