import React, { Component } from "react";

import withHandleForm from "./withHandleForm";
import StudentInp from "./StudentInp";
import FatherInp from "./FatherInp";
import MotherInp from "./MotherInp";

class CreateStudent extends Component {
  backToList = () => {
    this.props.history.push("/");
  };
  render() {
    const {
      info,
      handleChange,
      displayMsg,
      handleSubmit,
      editItem,
      info: { msg },
    } = this.props;
    return (
      <>
        <button
          className="btn btn-warning float-left"
          onClick={this.backToList}
        >
          back to list
        </button>
        <div className="p-3 container" id="student-inp">
          <h3 className="text-capitalize display-4">student Registration</h3>
          <div className="card card-body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <StudentInp
                info={info}
                handleChange={handleChange}
                displayMsg={displayMsg}
              />
              <FatherInp
                info={info}
                handleChange={handleChange}
                displayMsg={displayMsg}
              />
              <MotherInp
                info={info}
                handleChange={handleChange}
                displayMsg={displayMsg}
              />
              <button
                type="submit"
                className={
                  editItem
                    ? "btn btn-info btn-block"
                    : "btn btn-primary btn-block"
                }
                disabled={msg.length}
              >
                {editItem ? "edit student" : "add student"}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withHandleForm(CreateStudent);
