import React, { Component } from 'react';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <StudentList />
      </div>
    )
  }
}
