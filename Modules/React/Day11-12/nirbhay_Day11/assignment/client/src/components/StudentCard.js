import React, { Component } from "react";
import { FaToggleOn, FaToggleOff, FaTimes } from "react-icons/fa";

export default class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const {
      cimg,
      simg,
      fname,
      lname,
      cname,
      mname,
      dob,
      _id,
      address,
      ffname,
      fmname,
      flname,
      fprofession,
      fdesig,
      fqualify,
      fphone,
      mfname,
      mmname,
      mlname,
      mprofession,
      mdesig,
      mqualify,
      mphone,
    } = this.props.student;
    const handleDelete = this.props.handleDelete;
    const showConfirm = this.props.showConfirm;

    return (
      <div className="card mb-3 w-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={simg} alt=" " />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {fname + " " + mname + " " + lname}
              </h5>
              <h6 className="card-subtitle mb-2 py-1 text-muted">{dob}</h6>
              <p className="card-text">{cname}</p>
              <div className="row">
                <p className="col-md-5">
                  <b>Student-Id </b>
                  <br /> {_id}
                </p>
                <p className="col-md-7">
                  <b>Address </b>
                  <br />
                  {address}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <img src={cimg} alt=" " width="60" className="mt-lg-5 pt-lg-5" />
          </div>
        </div>
        {this.state.toggle ? (
          <div className="row g-0">
            <h5 className="text-center py-2"> Family Details </h5>
            <table className="table-sm" style={{ fontSize: "0.8rem" }}>
              <thead>
                <tr>
                  <td colSpan="2">
                    <h6 className="text-center">Father's details</h6>
                  </td>
                  <td colSpan="2">
                    <h6 className="text-center">Mother's details</h6>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">Full name :</td>
                  <td>{`${ffname} ${fmname} ${flname}`}</td>
                  <td className="fw-bold">Full name</td>
                  <td>{`${mfname} ${mmname} ${mlname}`}</td>
                </tr>
                <tr>
                  <td className="fw-bold"> Qualification :</td>
                  <td>{fqualify}</td>
                  <td className="fw-bold"> Qualification</td>
                  <td>{mqualify}</td>
                </tr>
                <tr>
                  <td className="fw-bold"> Profession :</td>
                  <td>{fprofession}</td>
                  <td className="fw-bold"> Profession</td>
                  <td>{mprofession}</td>
                </tr>
                <tr>
                  <td className="fw-bold"> designation :</td>
                  <td>{fdesig}</td>
                  <td className="fw-bold"> designation</td>
                  <td>{mdesig}</td>
                </tr>
                <tr>
                  <td className="fw-bold"> phone :</td>
                  <td>{fphone}</td>
                  <td className="fw-bold"> phone</td>
                  <td>{mphone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        <div className="buttonDiv">
          <button type="button" id="btntoggle" onClick={this.handleToggle}>
            {this.state.toggle ? <FaToggleOn /> : <FaToggleOff />}
          </button>
          <button type="button" id="btndelete" onClick={() => showConfirm(_id)}>
            <FaTimes />
          </button>
        </div>
      </div>
    );
  }
}
