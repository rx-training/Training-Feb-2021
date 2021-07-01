import React from "react";

export default function StudentCard(props) {
  const { sid, fname, lname, cname, simg, clogo } = props.student;
  return (
    <div className="card mt-4">
      <div className="row">
        <div className="col-4">
          <img src={simg} alt="" className="w-100" />
        </div>
        <div className="col-8" style={{ position: "relative" }}>
          <div className="card-body">
            <h5 className="card-title">{`${fname} ${lname}`}</h5>
            <p className="card-text"> student-id : {sid} </p>
            <p className="card-text">
              <small className="text-muted">{cname}</small>
            </p>
          </div>
          <img
            src={clogo}
            alt=""
            style={{
              width: "50px",
              position: "absolute",
              top: "0.5rem",
              right: "2rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
