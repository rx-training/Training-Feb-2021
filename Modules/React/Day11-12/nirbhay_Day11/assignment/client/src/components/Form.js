import React, { Component } from "react";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import StudentService from "../services/StudentService";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      pob: "",
      flang: "",
      dob: "",
      country: "",
      state: "",
      city: "",
      ffname: "",
      fmname: "",
      flname: "",
      fprofession: "",
      fdesig: "",
      fqualify: "",
      fphone: "",
      mfname: "",
      mmname: "",
      mlname: "",
      mprofession: "",
      mdesig: "",
      mqualify: "",
      mphone: "",
      refname: "",
      telno: "",
      address: "",
      cname: "",
      simg: "",
      cimg: "",

      formPage: 1,
      validate: false,

      chooseCountry: ["India", "Australia", "UnitedStates"],
      chooseState: [],
      chooseCity: [],
    };
  }

  handleChange = (e) => {
    const states = {
      UnitedStates: ["California", "Alaska", "Indiana", "SouthDakota"],
      India: ["Gujarat", "Rajasthan", "Maharashtra", "Tamilnadu"],
      Australia: ["Queensland", "Victoria", "Tasmania"],
    };

    const cities = {
      California: [
        "Los Angeles",
        "San Francisco",
        "Oakland",
        "Malibu",
        "Fontana",
      ],
      Alaska: ["Anchorage", "Juneau", "Fairbanks", "Homer", "Sitka"],
      Indiana: ["Indianapolis", "Fort Wayne", "South Bend", "Gary"],
      SouthDakota: [
        "Rapid City",
        "Pierre",
        "Deadwood",
        "Brookings",
        "Watertown",
      ],
      Gujarat: [
        "Ahmedabad",
        "Gandhinagar",
        "Bhavnagar",
        "Veraval",
        "Mehsana",
        "Anand",
      ],
      Rajasthan: ["Ajmer", "Udaipur", "Jaipur", "Jaisalmer"],
      Maharashtra: [
        "Andheri",
        "Bandra",
        "Borivali",
        "Dahisar",
        "Goregaon",
        "Juhu",
      ],
      Tamilnadu: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Tiruchirapalli",
        "Tiruppur",
      ],
      Queensland: [
        "Gold Coast",
        "Toowoomba",
        "Nambour",
        "Mackay",
        "Townsville",
      ],
      Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
      Tasmania: ["Abbotsham", "Aberdeen", "Hobart", "Devonport"],
    };

    this.setState({
      [e.target.name]: e.target.value,
    });

    // Changing County, State, City in Dropdowns
    if (e.target.type === "select-one" && e.target.name === "country") {
      if (e.target.value) {
        this.setState({
          chooseState: states[e.target.value],
        });
      }
    }
    if (e.target.type === "select-one" && e.target.name === "state") {
      if (e.target.value) {
        this.setState({
          chooseCity: cities[e.target.value],
        });
      }
    }
  };

  handleChangeSimg = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      simg: e.target,
    });
  };

  handleChangeCimg = (e) => {
    this.setState({
      cimg: e.target,
    });
  };

  getForm = () => {
    switch (this.state.formPage) {
      case 1:
        return (
          <FormPage1
            handleChange={this.handleChange}
            student={this.state}
            chooseCountry={this.state.chooseCountry}
            chooseState={this.state.chooseState}
            chooseCity={this.state.chooseCity}
          />
        );
      case 2:
        return (
          <FormPage2 handleChange={this.handleChange} student={this.state} />
        );
      case 3:
        return (
          <FormPage3
            handleChange={this.handleChange}
            student={this.state}
            handleChangeSimg={this.handleChangeSimg}
            handleChangeCimg={this.handleChangeCimg}
          />
        );
      default:
    }
  };

  handleNext = (e) => {
    e.preventDefault();
    if (this.handleValidate()) {
      if (this.state.formPage === 3) {
        this.handleSubmit(e);
      } else {
        this.setState({
          validate: false,
          formPage: this.state.formPage + 1,
        });
      }
    } else {
      this.setState({
        validate: true,
      });
    }
  };

  validateDate = (dt) => {
    var patt =
      /^([1-2][0-9][0-9][0-9])-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1]))$/;
    if (patt.test(dt)) {
      var dtarr = dt.split("-");
      var year = Number(dtarr[0]);
      var month = Number(dtarr[1]);
      var date = Number(dtarr[2]);
      if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          if (!(date >= 1 && date <= 29)) {
            return "";
          }
        } else {
          if (!(date >= 1 && date <= 28)) {
            return "";
          }
        }
        return dt;
      }
      return dt;
    } else {
      return "";
    }
  };

  validatePhone = (no) => {
    var patt = /^[0-9]{10}$/;
    if (patt.test(no)) {
      return no;
    } else {
      return "";
    }
  };

  handleValidate = () => {
    switch (this.state.formPage) {
      case 1:
        if (
          this.state.fname &&
          this.state.mname &&
          this.state.lname &&
          this.state.pob &&
          this.state.flang &&
          this.state.dob &&
          this.state.country &&
          this.state.state &&
          this.state.city
        ) {
          const dob = this.validateDate(this.state.dob);
          if (dob) {
            return true;
          } else {
            this.setState({
              dob: "",
            });
            return false;
          }
        }
        return false;
      case 2:
        if (
          this.state.ffname &&
          this.state.fmname &&
          this.state.flname &&
          this.state.fprofession &&
          this.state.fdesig &&
          this.state.fqualify &&
          this.state.fphone &&
          this.state.mfname &&
          this.state.mmname &&
          this.state.mlname &&
          this.state.mprofession &&
          this.state.mqualify &&
          this.state.mphone
        ) {
          const fphone = this.validatePhone(this.state.fphone);
          const mphone = this.validatePhone(this.state.mphone);
          if (fphone) {
            if (mphone) {
              return true;
            } else {
              this.setState({
                mphone: "",
              });
              return false;
            }
          } else {
            this.setState({
              fphone: "",
            });
            return false;
          }
        }
        return false;
      case 3:
        if (
          this.state.address &&
          this.state.simg &&
          this.state.cimg &&
          this.state.cname
        ) {
          return true;
        }
        return false;
      default:
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", this.state.fname);
    formData.append("mname", this.state.mname);
    formData.append("lname", this.state.lname);
    formData.append("pob", this.state.pob);
    formData.append("flang", this.state.flang);
    formData.append("dob", this.state.dob);
    formData.append("country", this.state.country);
    formData.append("state", this.state.state);
    formData.append("city", this.state.city);
    formData.append("ffname", this.state.ffname);
    formData.append("fmname", this.state.fmname);
    formData.append("flname", this.state.flname);
    formData.append("fprofession", this.state.fprofession);
    formData.append("fdesig", this.state.fdesig);
    formData.append("fqualify", this.state.fqualify);
    formData.append("fphone", this.state.fphone);
    formData.append("mfname", this.state.mfname);
    formData.append("mmname", this.state.mmname);
    formData.append("mlname", this.state.mlname);
    formData.append("mprofession", this.state.mprofession);
    formData.append("mdesig", this.state.mdesig);
    formData.append("mqualify", this.state.mqualify);
    formData.append("mphone", this.state.mphone);
    formData.append("refname", this.state.refname);
    formData.append("telno", this.state.telno);
    formData.append("address", this.state.address);
    formData.append("cname", this.state.cname);
    formData.append("simg", this.state.simg.files[0]);
    formData.append("cimg", this.state.cimg.files[0]);

    StudentService.createStudent(formData)
      .then((res) => {
        const confirmbox = document.getElementById("confirmboxstu");
        confirmbox.style.display = "block";
        confirmbox.children[0].children[0].children[0].innerHTML = res.data.msg;
      })
      .catch((ex) => console.log(ex));
  };

  switchToStudentList = () => {
    this.props.history.push("/view-students");
    this.setState({
      validate: false,
      formPage: 1,
    });
  };

  render() {
    return (
      <div className="form-back">
        <div className="form-header">
          <p className="h1 pt-3 text-center text-white fw-bold">
            Create account
          </p>
          <div className="form-load mt-3">
            <div className="line"></div>
            <div className="steps">
              <div
                className={this.state.formPage === 1 ? "step active" : "step"}
              >
                <div className="circle">1</div>
                <p>About you</p>
              </div>
              <div
                className={this.state.formPage === 2 ? "step active" : "step"}
              >
                <div className="circle">2</div>
                <p>Family Details</p>
              </div>
              <div
                className={this.state.formPage === 3 ? "step active" : "step"}
              >
                <div className="circle">3</div>
                <p>Reference Details</p>
              </div>
            </div>
          </div>
        </div>
        {/* FORM START */}
        <div className="row form-body">
          <form>
            <div className="col-lg-7 mx-auto mt-lg-3 px-3">
              {this.getForm()}
              <div className="row pt-3">
                <button
                  type="submit"
                  onClick={this.handleNext}
                  className="btn text-capitalize btnsubmit px-3"
                >
                  {this.state.formPage === 3 ? "Register" : "Next"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Confirm BOX */}
        <div className="confirm-box" id="confirmboxstu">
          <div className="box">
            <div className="modal-body">
              <p className="h6 py-2 px-2">Hello World</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-confirm"
                onClick={this.switchToStudentList}
              >
                Go to Student List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
