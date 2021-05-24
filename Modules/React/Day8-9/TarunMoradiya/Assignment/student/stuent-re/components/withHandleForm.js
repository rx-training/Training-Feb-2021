import React, { Component } from "react";
import csc from "country-state-city";
import validator from "validator";
import studentServices from "../services/StudentServices";

const withHandleForm = (WrappedComponent) => {
  class WithHandleForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        countries: csc.getAllCountries(),
        states: [],
        cities: [],
        countryCode: "",
        students: [],
        id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        birthPlace: "",
        lang: "",
        city: "",
        state: "",
        country: "",
        email: "",
        pin: "",
        img: "",
        collegeName: "",
        collegeLogo: "",
        editItem: false,
        referenceDetail: "",
        referenceThrough: "",
        addr: "",
        phone: "",
        msg: [],
        mFirstName: "",
        mMiddleName: "",
        mLastName: "",
        mEmail: "",
        mQualification: "",
        mProfession: "",
        mDesignation: "",
        mPhone: "",
        fFirstName: "",
        fMiddleName: "",
        fLastName: "",
        fEmail: "",
        fQualification: "",
        fProfession: "",
        fDesignation: "",
        fPhone: "",
      };
    }

    handleAge(val) {
      var today = new Date();
      var birthDate = new Date(val);
      var age_now = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--;
      }
      console.log(age_now);
      if (age_now < 5 || age_now > 20) {
        console.log("invalid");
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: "dob", value: "age should be between 5 to 20" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== "dob"),
        });
      }
    }

    handleChange = (e) => {
      const nam = e.target.name;
      let val = e.target.value;
      if (e.target.type === "file") {
        val = { path: val, file: e.target.files[0] };
        console.log(val);
      }

      if (nam.search(/name/gi) !== -1) {
        if (!validator.isAlpha(val)) {
          this.setState({
            msg: [
              ...new Set([
                ...this.state.msg,
                { name: nam, value: "this field shoud only contain alphabets" },
              ]),
            ],
          });
        } else {
          this.setState({
            msg: this.state.msg.filter((m) => m.name !== nam),
          });
        }
      } else if (nam.search(/email/gi) !== -1) {
        if (!validator.isEmail(val)) {
          this.setState({
            msg: [
              ...new Set([
                ...this.state.msg,
                { name: nam, value: "enter valid email" },
              ]),
            ],
          });
        } else {
          this.setState({
            msg: this.state.msg.filter((m) => m.name !== nam),
          });
        }
      } else if (nam.search(/phone/gi) !== -1) {
        if (val.length !== 10) {
          this.setState({
            msg: [
              ...new Set([
                ...this.state.msg,
                { name: nam, value: "enter 10 digit number" },
              ]),
            ],
          });
        } else {
          this.setState({
            msg: this.state.msg.filter((m) => m.name !== nam),
          });
        }
      } else if (nam === "dob") {
        this.handleAge(val);
      } else if (nam === "pin") {
        if (val.length !== 6) {
          console.log("invalid");
          this.setState({
            msg: [
              ...new Set([
                ...this.state.msg,
                { name: "pin", value: "enter 6 digiy pin" },
              ]),
            ],
          });
        } else {
          this.setState({
            msg: this.state.msg.filter((m) => m.name !== "pin"),
          });
        }
      } else if (nam === "country") {
        this.setState({
          states: csc.getStatesOfCountry(val),
          countryCode: val,
        });
      } else if (nam === "state") {
        this.setState({
          cities: csc.getCitiesOfState(this.state.countryCode, val),
        });
      }
      this.setState(
        {
          [nam]: val,
        },
        () => console.log(this.state)
      );
    };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log("submited");
      // let myImg = this.state.img.split("\\");
      // myImg = `img/${myImg[myImg.length - 1]}`;
      // let myLogo = this.state.collegeLogo.split("\\");
      // myLogo = `img/${myLogo[myLogo.length - 1]}`;
      const newStudent = {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        img: this.state.img.file,
        collegeName: this.state.collegeName,
        collegeLogo: this.state.collegeLogo.file,
        middleName: this.state.middleName,
        dob: this.state.dob,
        email: this.state.email,
        birthPlace: this.state.birthPlace,
        lang: this.state.lang,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pin: this.state.pin,
        referenceDetail: this.state.referenceDetail,
        referenceThrough: this.state.referenceThrough,
        addr: this.state.addr,
        phone: this.state.phone,
        mFirstName: this.state.mFirstName,
        mMiddleName: this.state.mMiddleName,
        mLastName: this.state.mLastName,
        mEmail: this.state.mEmail,
        mQualification: this.state.mQualification,
        mProfession: this.state.mProfession,
        mDesignation: this.state.mDesignation,
        mPhone: this.state.mPhone,
        fFirstName: this.state.fFirstName,
        fMiddleName: this.state.fMiddleName,
        fLastName: this.state.fLastName,
        fEmail: this.state.fEmail,
        fQualification: this.state.fQualification,
        fProfession: this.state.fProfession,
        fDesignation: this.state.fDesignation,
        fPhone: this.state.fPhone,
      };
      const updatedStudents = [...this.state.students, newStudent];
      this.setState({
        students: updatedStudents,
        id: "",
        firstName: "",
        lastName: "",
        img: "",
        collegeName: "",
        collegeLogo: "",
        editItem: false,
      });
      console.log(newStudent);

      const formData = new FormData();
      formData.append("firstName", this.state.firstName);
      formData.append("middleName", this.state.middleName);
      formData.append("lastName", this.state.lastName);
      formData.append("email", this.state.email);
      formData.append("img", this.state.img.file);
      formData.append("collegeLogo", this.state.collegeLogo.file);
      formData.append("collegeName", this.state.collegeName.file);
      formData.append("dob", this.state.dob);
      formData.append("birthPlace", this.state.birthPlace);
      formData.append("lang", this.state.lang);
      formData.append("city", this.state.city);
      formData.append("state", this.state.state);
      formData.append("country", this.state.country);
      formData.append("pin", this.state.pin);
      formData.append("referenceDetail", this.state.referenceDetail);
      formData.append("referenceThrough", this.state.referenceThrough);
      formData.append("addr", this.state.addr);
      formData.append("phone", this.state.phone);
      formData.append("mFirstName", this.state.mFirstName);
      formData.append("mMiddleName", this.state.mMiddleName);
      formData.append("mLastName", this.state.mLastName);
      formData.append("mEmail", this.state.mEmail);
      formData.append("mQualification", this.state.mQualification);
      formData.append("mProfession", this.state.mProfession);
      formData.append("mDesignation", this.state.mDesignation);
      formData.append("mPhone", this.state.mPhone);
      formData.append("fFirstName", this.state.fFirstName);
      formData.append("fMiddleName", this.state.fMiddleName);
      formData.append("fLastName", this.state.fLastName);
      formData.append("fEmail", this.state.fEmail);
      formData.append("fQualification", this.state.fQualification);
      formData.append("fProfession", this.state.fProfession);
      formData.append("fDesignation", this.state.fDesignation);
      formData.append("fPhone", this.state.fPhone);

      console.log(formData);
      studentServices.createStudent(formData).then((res) => {
        // then print response status
        console.log(res);
      });
    };

    displayMsg = (msg, name) => {
      let myMsg = msg.find((m) => m.name === name);
      return (
        <p className="text-danger pt-1 float-right"> {myMsg && myMsg.value}</p>
      );
    };

    render() {
      return (
        <WrappedComponent
          info={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          displayMsg={this.displayMsg}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return WithHandleForm;
};

export default withHandleForm;
