import React, { useState } from "react";
import StudentCard from "./StudentCard";

export default function Form() {
  const useForms = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    return [
      values,
      (e) => {
        if (e.reset) {
          setValues({
            sid: "",
            fname: "",
            lname: "",
            cname: "",
            simg: "",
            clogo: "",
          });
        } else {
          if (e.target.type === "file") {
            setValues({
              ...values,
              [e.target.name]: URL.createObjectURL(e.target.files[0]),
            });
          } else {
            setValues({ ...values, [e.target.name]: e.target.value });
          }
        }
      },
    ];
  };

  const [student, handleChange] = useForms({
    sid: "",
    fname: "",
    lname: "",
    cname: "",
    simg: "",
    clogo: "",
  });
  const [studentsList, setStudentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentsList((e) => [...e, student]);
    const form = { reset: true };
    handleChange(form);
    document.getElementById("simg").value = "";
    document.getElementById("clogo").value = "";
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5 mx-auto">
        <h2 className="h2 text-center py-2 mt-2">Student Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="sid" className="form-label">
              Student Id
            </label>
            <input
              type="text"
              name="sid"
              id="sid"
              value={student.sid}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={student.fname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={student.lname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="simg" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="simg"
              name="simg"
              onChange={handleChange}
              className="form-control"
            />
            {student.simg ? (
              <div className="alert alert-success py-2 my-3">
                Image Uploaded
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="cname" className="form-label">
              College name
            </label>
            <input
              type="text"
              name="cname"
              id="cname"
              value={student.cname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="clogo" className="form-label">
              College logo
            </label>
            <input
              type="file"
              id="clogo"
              name="clogo"
              onChange={handleChange}
              className="form-control"
            />
            {student.cimg ? (
              <div className="alert alert-success py-2 my-3">Logo Uploaded</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={student.simg && student.clogo ? false : true}
            className="btn btn-primary w-100 my-4 text-capitalize"
          >
            submit
          </button>
        </form>
      </div>
      <div className="col-12 col-md-7 p-4">
        {studentsList.map((student) => (
          <StudentCard key={student.sid} student={student} />
        ))}
      </div>
    </div>
  );
}

// handleSubmit = (e) => {
//   e.preventDefault();
//   const newStudent = {
//     sid: this.state.sid,
//     fname: this.state.fname,
//     lname: this.state.lname,
//     cname: this.state.cname,
//     simg: this.state.sfilepath,
//     cimg: this.state.cfilepath,
//   };
//   this.setState({
//     students: [...this.state.students, newStudent],
//     sid: "",
//     fname: "",
//     lname: "",
//     cname: "",
//     sfilepath: "",
//     cfilepath: "",
//   });
//   this.simg.value = "";
//   this.cimg.value = "";
// };
