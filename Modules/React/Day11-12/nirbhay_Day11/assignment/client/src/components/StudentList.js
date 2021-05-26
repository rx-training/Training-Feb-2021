import React, { Component } from "react";
import StudentService from "../services/StudentService";
import StudentCard from "./StudentCard";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    StudentService.getStudents()
      .then((res) => {
        this.setState({
          students: [...res.data],
        });
      })
      .catch((ex) => console.log(ex));
  }

  handleDelete = () => {
    const confirmbox = document.getElementById("confirmbox");
    const id = confirmbox.children[0].innerHTML;
    StudentService.deleteStudent(id)
      .then((res) => {
        if (res.data.msg) {
          confirmbox.style.display = "none";
          window.location.reload(false);
        }
      })
      .catch((ex) => console.log(ex));
  };

  showConfirm = (id) => {
    const confirmbox = document.getElementById("confirmbox");
    confirmbox.style.display = "block";
    confirmbox.children[0].innerHTML = id;
  };

  hideConfirm = () => {
    const confirmbox = document.getElementById("confirmbox");
    confirmbox.style.display = "none";
  };

  render() {
    return (
      <div className="container d-block">
        {this.state.students.map((item, index) => {
          return (
            <div className="row" key={index}>
              <StudentCard student={item} showConfirm={this.showConfirm} />
            </div>
          );
        })}

        {/* Confirm BOX */}
        <div className="confirm-box" id="confirmbox">
          <p className="d-none"></p>
          <div className="box">
            <div className="modal-body">
              <p className="h6 py-2 px-2">
                Do you really want to delete this student record ?
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.hideConfirm}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-confirm"
                onClick={() => this.handleDelete()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
