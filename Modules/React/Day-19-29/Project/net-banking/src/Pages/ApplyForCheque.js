import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import ProjectService from "../Services/LoginService";
import FireBase from '../Fire-Base/FireBase'

export const ApplyForCheque = (props) => {
  const [customer, setustomer] = useState({});
  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setustomer(res.data[0]);
    });
  }, [props.match.params.id]);
  const Apply=async(e)=>{
      e.preventDefault()
  
    let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
    let number =  '+918128501852';
    await FireBase.auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then((result) => {
            ProjectService.chequeBookRequest(customer).then((res)=>{
                console.log(res.data);
                alert("Your CheckBook Will be Delivered To Your Register Address whitin 7-days")
            })
         
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
      alert('You Successfully Registered')
  }
  return (
    <>
      <Navbar id={props.match.params.id} />
      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Apply For ChequeBook</h3>
          <div className="mt-3">
            {" "}
            <small className="fs-small text-success ">
              Account Number Printed On ChequeBook
            </small>
          </div>
          <input
            type="text"
            placeholder="Accout No"
            className="form-control"
            value={customer.accountNo}
          />
          <div className="mt-3">
            {" "}
            <small className="fs-small text-success ">
              Name Printed On ChequeBook
            </small>
          </div>

          <input
            type="text"
            placeholder="Accout No"
            className="form-control "
            value={`${customer.fname} ${customer.mname} ${customer.lname}`}
          />
             <div className="mt-3">
            {" "}
            <small className="fs-small text-success ">
              Delivery Address
            </small>
          </div>
          <textarea
            type="text"
            placeholder="Address"
            className="form-control  "
            value={customer.address}
          />
             <div className="mt-3">
            {" "}
            <small className="fs-small text-success ">
              CIF
            </small>
            </div>
          <input
            type="text"
            placeholder="CIF"
            className="form-control  "
            value={customer.CIF}
          />
             <div className="mt-3">
            {" "}
            <small className="fs-small text-success ">
              Branch Code
            </small>
            </div>
          <input
            type="text"
            placeholder="Branch Name"
            className="form-control  "
            value={customer.branchName}
          />
            <div
            id="recaptcha-container"
            data-size="compact"
            style={{ width: "400px" }}
          ></div>
          <button className="btn btn-secondary w-100 mt-4" onClick={Apply}>Apply</button>
        </form>
      </div>
    </>
  );
};