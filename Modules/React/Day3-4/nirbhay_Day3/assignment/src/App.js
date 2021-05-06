import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import StudentList from './components/StudentList';

export default class App extends Component{
  render(){
    return(
      <section>
        <StudentList />
      </section>
    );
  }
}
