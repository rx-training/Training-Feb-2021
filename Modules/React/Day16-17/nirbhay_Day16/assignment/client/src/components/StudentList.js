import React, { useState, useEffect } from "react";
import StudentService from "../services/StudentService";
import StudentCard from "./StudentCard";

export default function StudentList(props) {
  const [students, setStudents] = useState([]);
  const [confirmBox, setConfirmBox] = useState({
    show: false,
    msg: "",
    edit: false,
  });
  const [did, setDid] = useState("");

  useEffect(() => {
    StudentService.getStudents()
      .then((res) => {
        setStudents((c) => [...res.data]);
      })
      .catch((ex) => console.log(ex));
  }, [confirmBox]);

  const showDeleteConfirm = (id) => {
    setDid(id);
    setConfirmBox({
      show: true,
      msg: "Do you really want to delete this Student card.",
    });
  };

  const showEditConfirm = (id) => {
    setDid(id);
    setConfirmBox({
      show: true,
      msg: "Do you want to edit this Student's data",
      edit: true,
    });
  };

  const handleDelete = () => {
    StudentService.deleteStudent(did)
      .then((res) => {
        if (res.data.msg) {
          setConfirmBox({
            show: false,
            msg: "",
          });
          setDid("");
        }
      })
      .catch((ex) => console.log(ex));
  };

  const handleEdit = () => {
    props.history.push({
      pathname: "/edit-student/",
      state: students.find((item) => item._id === did),
    });
    setConfirmBox({ show: false, edit: false, msg: "" });
  };

  return (
    <div className="container d-block">
      {students.map((item, index) => {
        return (
          <div className="row" key={index}>
            <StudentCard
              student={item}
              showDeleteConfirm={showDeleteConfirm}
              showEditConfirm={showEditConfirm}
            />
          </div>
        );
      })}

      {/* Confirm BOX */}
      {confirmBox.show && (
        <div className="confirm-box" id="confirmbox">
          <div className="box">
            <div className="modal-body">
              <p className="h6 py-2 px-2">{confirmBox.msg}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setConfirmBox((e) => ({ show: false, msg: "", edit: false }));
                  setDid("");
                }}
              >
                Cancel
              </button>
              {confirmBox.edit ? (
                <button
                  type="button"
                  className="btn btn-confirm"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-confirm"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// hideConfirm = () => {
//   const confirmbox = document.getElementById("confirmbox");
//   confirmbox.style.display = "none";
// };
