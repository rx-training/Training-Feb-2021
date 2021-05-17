import React, { Component } from "react";
import './clg-img copy/GECD.png'

export default class Student extends Component {
  render() {
    const { info } = this.props;
    const img1=`./clg-img copy/${info.collegeLogo}`
    const img2=`./stu-img/${info.studentImage}`
    console.log(img1,img2);

    return (
      <div className="container ">
        <div className="row w-50 mx-auto border border-primary">
        <div className="col border  border-danger h-25 w-25">
            <img className="card-img-top h-25 w-25 d-flex item-align-center mx-auto mb-0 "
                src={img1}
                alt="college image"
                
            />
        </div>
        <hr></hr>
          <div className="text-center" >
            <h6>ID : {info.ID}</h6>
            <h6>Fname : {info.fname}</h6>
            <h6>Lname : {info.lname}</h6>
            <h6>College Name : {info.collegeName}</h6>
          </div>

          <div className=" col h-25 w-25" >
              <img className="card-img-top  d-flex item-align-center" style={{height:"200px"}}
                  src={img2}
                  alt="student Image"
              />
          </div>
        </div>
      </div>
    );
  }
}
