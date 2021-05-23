import React from 'react'



const StudentIdCard = ({ url, children,addr,Id,firstname,lastName,DOB,collegeName,logo,handleDelete }) => {
  return (
    <div className="container">
      <div className="row ">
        <div calss="col-sm-18">
          <div className="card-body text-dark ">
            <div className="card-body card-border-primary">
              {children}
              <img
                src={url}
                width="80"
                alt="StudentImg"
                className="car-img-top "
              />
              <h4 className="card-text color-primary">Id: {Id}</h4>
              <h6>Name: {firstname + " " + lastName}</h6>
              <h6>DOB:{DOB}</h6>
              <h6>CollegeName:{collegeName}</h6>
              <h6>Addr:{addr}</h6>
              <img src={logo} width="50" alt="StudentImg" /> <br />
              <br />
              <button
                type="button"
                className="btn-primary border-dark"
                onClick={() => handleDelete(Id)}
              >
                Edit this Card
              </button>
              <button
                type="button"
                className="btn-primary border-dark ml-2"
                onClick={() => handleDelete(Id)}
              >
                Delete this card
              </button>
              <hr />
              {/* <img src={img}>logo:{logo}</img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentIdCard