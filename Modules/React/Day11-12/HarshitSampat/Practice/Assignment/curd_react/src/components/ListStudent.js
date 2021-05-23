import React, { Component } from 'react'
import StudentService from '../services/Studentservice';

export default class ListStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }

  editStudent = (id) => {
    this.props.history.push(`/add-student/${id}`);
  };  

  deleteStudent=(id)=>{
     StudentService.deleteStudent(id).then((res) => {
       this.setState({
         students: this.state.students.filter((student) => student.studentId !== id),
       });
     });
  };

  viewStudent=(id)=>{
    this.props.history.push(`/view-student/${id}`);
  };

  render() {
    console.log(this.state.students);
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> StudentID</th>
              <th> FirstName</th>
              <th> Last Name</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.studentId}>
                <td> {student.studentId} </td>
                <td> {student.firstName} </td>
                <td> {student.lastName}</td>
                <td>
                  <button
                    onClick={() => this.editStudent(student.studentId)}
                    className="btn btn-info"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteStudent(student.studentId)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewStudent(student.studentId)}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
