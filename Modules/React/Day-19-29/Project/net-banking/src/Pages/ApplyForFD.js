import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import ProjectService from "../Services/LoginService";

export const ApplyForFD = (props) => {
  const [customer, setCustomer] = useState({});
  const [FD, setFD] = useState({ amount: "", duration: "" });
  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
  }, []);
  const Apply = (e) => {
    e.preventDefault();
    alert("You Applied fro the FD");
  };
  const calculateMoney = (e) => {
    e.preventDefault();
    let intrest = 6;
    let money = parseInt(FD.amount);
    let key = FD.duration;
    switch (key) {
      case "1 year":
        for (let index = 0; index < 1; index++) {
          money += parseInt((money * intrest) / 100);
        }
        alert(` After ${FD.duration} You Will be Get ${money} Rs`);
        break;
      case "3 year":
        for (let index = 0; index < 3; index++) {
          money += parseInt((money * intrest) / 100);
        }
        alert(` After ${FD.duration} You Will be Get ${money} Rs`);
        break;
      case "5 year":
        for (let index = 0; index < 5; index++) {
          money += parseInt((money * intrest) / 100);
        }
        alert(` After ${FD.duration} You Will be Get ${money} Rs`);
        break;
      case "10 year":
        for (let index = 0; index < 10; index++) {
          money += parseInt((money * intrest) / 100);
        }
        alert(` After ${FD.duration} You Will be Get ${money} Rs`);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <Navbar />
      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Apply For Fixed Deposit</h3>
          <div className="mt-3 text-success mb-1 p-1 "> CRN</div>
          <input
            type="text"
            placeholder="CRN"
            value={customer.CRN}
            className="form-control"
          />
          <div className="mt-3 text-success mb-1 p-1 "> Account Number</div>
          <input
            type="text"
            placeholder="CRN"
            value={customer.accountNo}
            className="form-control"
          />
          <div className="mt-3 text-success mb-1 p-1 "> Amount</div>
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            value={FD.amount}
            onChange={(e) => {
              setFD({ ...FD, [e.target.name]: e.target.value });
            }}
            className="form-control"
          />
          <div className="mt-3 text-success mb-1 p-1 ">Duration</div>
          <div className="row">
            <div className="col">
              {" "}
              <select
                className="form-control"
                onChange={(e) => {
                  setFD({ ...FD, [e.target.name]: e.target.value });
                }}
                name="duration"
              >
                <option selected>please select</option>
                <option>1 year</option>
                <option>3 year</option>
                <option>5 year</option>
                <option>10 year</option>
              </select>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={calculateMoney}
              >
                Calculate Money
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <button className="btn btn-secondary w-100" onClick={Apply}>
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
