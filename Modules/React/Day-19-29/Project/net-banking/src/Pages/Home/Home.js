import { React, useState, useEffect } from "react";
import ProjectService from "../../Services/LoginService";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../components/Images/bank.jpg";
import './home.scss'



import { Navbar } from "../../components/Portal/Navbar"

export const Home = (props) => {
  const [state, setstate] = useState(false);
  const [customer, setCustomer] = useState({});
  const [statement, setStatement] = useState([]);
  // const [credit, setCredit] = useState({ accountNo: "", amount: "" });
  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
    ProjectService.MiniStatement().then((res) => {
      setStatement(res.data);
    });
  }, []);
  // const Submit = async (e) => {
  //   e.preventDefault();
  //   let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
  //   let number = "+918128501852";
  //   await FireBase.auth()
  //     .signInWithPhoneNumber(number, recaptcha)
  //     .then((res) => {
  //       let code = prompt("enter otp", "");
  //       if (code == null) return;
  //       res
  //         .confirm(code)
  //         .then((result) => {
  //           ProjectService.credit(credit)
  //             .then((res1) => {
  //               console.log(res1.data);
  //               setstate(true);
  //             })
  //             .catch((err) => {
  //               console.log(err);
  //             });
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
  };
  return (
    <>
      <Navbar id={props.match.params.id} />
      <div className="container">
        <div className="row m-3">
          <div className="col mt-2">
            <h3 className="text-center ">
              Mr {customer.fname} {customer.mname} {customer.lname}
            </h3>
          </div>
          <div className="col   ">
            <span className="h2">
              <MdAccountBalanceWallet />
            </span>{" "}
            <span className="ml-2 h4">{customer.balance}</span>{" "}
            <span className="h4 pull-right">
              <FaRupeeSign />
            </span>
            <div style={{ float: "right" }}>
              <span className="mr-2 h2" onClick={LogOut}>
                {" "}
                <FiLogOut />
              </span>
              <br></br>
              <span className="h6 ">Logout</span>
            </div>
          </div>
        </div>
        <div className="row mt-5" >
          <div className="col-md-10 m-4 col-lg-5" id="statement">
          <h3 className="text-center mb-5">Recent 10 Tranjactions</h3>
            <table className="table bg-ligt">
              <tr>
                <td className="h6" style={{color:"#064420"}}>Debit Account</td>
                <td className="h6" style={{color:"#064420"}}>Credit Account</td>
                <td className="h6" style={{color:"#064420"}}>Date</td>
                <td className="h6" style={{color:"#064420"}}>Amount</td>
                <td className="h6" style={{color:"#064420"}}>Type</td>
              </tr>

              <tbody>
                {statement.map((item) => {
                  return (
                    <tr>
                      <td>{item.debitAccountNo}</td>
                      <td>{item.creditAccountNo}</td>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                      <td>{item.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <form class="p-4 p-md-5 border rounded-3 bg-light">
              <h3 className="text-center mb-5">Deposit</h3>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Account Number"
                  onChange={(e) => {
                    setCredit({ ...credit, [e.target.name]: e.target.value });
                  }}
                  name="accountNo"
                  value={credit.accountNo}
                />
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                  name="amount"
                  value={credit.amount}
                  onChange={(e) => {
                    setCredit({ ...credit, [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div id="recaptcha-container"></div>

              <button
                class="w-100 btn btn-lg btn-primary mt-3 "
                type="submit"
                onClick={Submit}
              >
                Submit
              </button>
              <hr class="my-4" />
            </form> */}
          </div>
          <div class=" col m-4 card card border-0" style={{ width: "18rem" }}>
            <img class="card-img-top" src={Logo} alt="Card  cap" />
            <div class="card-body">
              <h5 class="card-title text-center">About Our Bank</h5>
              <p class="card-text mt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
