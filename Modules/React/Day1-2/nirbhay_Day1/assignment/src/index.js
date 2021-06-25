import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Greeting from './components/helloWorld';
import StudentIDCard2 from './components/studentIDCard2';
import StudentIDCard3 from './components/studentIDCard3';
import StudentIDCard4 from './components/studentIDCard4';
import StudentIDCard5 from './components/studentIDCard5';
import StudentIDCard6 from './components/studentIDCard6';

const students=[
  {sid:"1001", name:"Vishal Sagar", dob:"14-10-1996", clg:"Gujarat Technological University", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1002", name:"Shubham Bhosle", dob:"01-04-1998", clg:"Gujarat Technological University", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1003", name:"Nirav Patel", dob:"06-04-1998", clg:"Gujarat Technological University", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
];

function StudentDetails(){
  return (
    <section>
      <Greeting />
      <hr/>
      <StudentIDCard2 />
      <StudentIDCard3 />
      <StudentIDCard4 />
      <hr/>
      <StudentIDCard5 students={students} />
      <StudentIDCard6 student={students[1]}>
        <p>Student Details</p>
      </StudentIDCard6>
    </section>
  );
}


ReactDom.render(<Greeting/>,document.getElementById("root"));
ReactDom.render(<StudentDetails />,document.getElementById("root"));