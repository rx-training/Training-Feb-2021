
// import './App.css';
import StudentForm from './components/StudentForm';
import StudentIdCard from './components/StudentIdCard';
import StudentList from './components/StudentList'
import {React,useState} from 'react';
//  import {uuid as v4} from 'uuid'


function App() {
  //set form
  const [form, setForm] = useState("");
  const[{firstName},setValue] = useState("")

  return (
    <div>
      <StudentForm />
      <StudentList 
      firstName={firstName}
      />
    </div>
  );
}

export default App;
