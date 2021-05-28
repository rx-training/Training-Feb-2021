import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import StudentService from "../services/StudentService";

const validateDate = (dt) => {
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

const validatePhone = (no) => {
  var patt = /^[0-9]{10}$/;
  if (patt.test(no)) {
    return no;
  } else {
    return "";
  }
};

const chooseCountry = ["India", "Australia", "UnitedStates"];

const states = {
  UnitedStates: ["California", "Alaska", "Indiana", "SouthDakota"],
  India: ["Gujarat", "Rajasthan", "Maharashtra", "Tamilnadu"],
  Australia: ["Queensland", "Victoria", "Tasmania"],
};

const cities = {
  California: ["Los Angeles", "San Francisco", "Oakland", "Malibu", "Fontana"],
  Alaska: ["Anchorage", "Juneau", "Fairbanks", "Homer", "Sitka"],
  Indiana: ["Indianapolis", "Fort Wayne", "South Bend", "Gary"],
  SouthDakota: ["Rapid City", "Pierre", "Deadwood", "Brookings", "Watertown"],
  Gujarat: ["Ahmedabad", "Gandhinagar", "Bhavnagar", "Veraval", "Mehsana"],
  Rajasthan: ["Ajmer", "Udaipur", "Jaipur", "Jaisalmer"],
  Maharashtra: ["Andheri", "Bandra", "Borivali", "Dahisar", "Goregaon", "Juhu"],
  Tamilnadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli", "Tiruppur"],
  Queensland: ["Gold Coast", "Toowoomba", "Nambour", "Mackay", "Townsville"],
  Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
  Tasmania: ["Abbotsham", "Aberdeen", "Hobart", "Devonport"],
};

export default function Form(props) {
  // console.log(props.location.state);

  const [formPage, setFormPage] = useState(1);
  const [validate, setValidate] = useState(false);
  const [chooseState, setChooseState] = useState([]);
  const [chooseCity, setChooseCity] = useState([]);
  const [confirmBox, setConfirmBox] = useState({
    show: false,
    msg: "",
    edit: false,
  });
  const [student, handleChange] = useForm(
    props.location.state || {
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
    }
  );

  useEffect(() => {
    if (!props.location.state) {
      props.history.push("/");
    } else {
      handleCountryChange({ target: { value: student.country } });
      handleStateChange({ target: { value: student.state } });
      setConfirmBox({ edit: true });
    }
    return () => {
      props.location.state = "";
      console.log("change");
    };
  }, []);

  const handleCountryChange = (e) => {
    if (e.target.value) {
      setChooseState(states[e.target.value]);
      setChooseCity([]);
    } else {
      setChooseState([]);
    }
    handleChange(e);
  };

  const handleStateChange = (e) => {
    if (e.target.value) {
      setChooseCity(cities[e.target.value]);
    } else {
      setChooseCity([]);
    }
    handleChange(e);
  };

  const getForm = () => {
    switch (formPage) {
      case 1:
        return (
          <FormPage1
            handleChange={handleChange}
            student={student}
            validate={validate}
            chooseCountry={chooseCountry}
            chooseState={chooseState}
            chooseCity={chooseCity}
            handleCountryChange={handleCountryChange}
            handleStateChange={handleStateChange}
          />
        );
      case 2:
        return (
          <FormPage2
            handleChange={handleChange}
            validate={validate}
            student={student}
          />
        );
      case 3:
        return (
          <FormPage3
            handleChange={handleChange}
            validate={validate}
            student={student}
          />
        );
      default:
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      if (formPage === 3) {
        handleSubmit(e);
      } else {
        setFormPage((e) => (e += 1));
        setValidate(false);
      }
    } else {
      setValidate(true);
    }
  };

  const handleValidate = () => {
    switch (formPage) {
      case 1:
        if (
          student.fname &&
          student.mname &&
          student.lname &&
          student.pob &&
          student.flang &&
          student.dob &&
          student.country &&
          student.state &&
          student.city
        ) {
          const dob = validateDate(student.dob);
          if (dob) {
            return true;
          } else {
            handleChange({ targt: { name: "dob", value: "" } });
            return false;
          }
        }
        return false;
      case 2:
        if (
          student.ffname &&
          student.fmname &&
          student.flname &&
          student.fprofession &&
          student.fdesig &&
          student.fqualify &&
          student.fphone &&
          student.mfname &&
          student.mmname &&
          student.mlname &&
          student.mprofession &&
          student.mqualify &&
          student.mphone
        ) {
          const fphone = validatePhone(student.fphone);
          const mphone = validatePhone(student.mphone);
          if (fphone) {
            if (mphone) {
              return true;
            } else {
              handleChange({ target: { name: "mphone", value: "" } });
              return false;
            }
          } else {
            handleChange({ target: { name: "fphone", value: "" } });
            return false;
          }
        }
        return false;
      case 3:
        if (student.address && student.simg && student.cimg && student.cname) {
          return true;
        }
        return false;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", student.fname);
    formData.append("mname", student.mname);
    formData.append("lname", student.lname);
    formData.append("pob", student.pob);
    formData.append("flang", student.flang);
    formData.append("dob", student.dob);
    formData.append("country", student.country);
    formData.append("state", student.state);
    formData.append("city", student.city);
    formData.append("ffname", student.ffname);
    formData.append("fmname", student.fmname);
    formData.append("flname", student.flname);
    formData.append("fprofession", student.fprofession);
    formData.append("fdesig", student.fdesig);
    formData.append("fqualify", student.fqualify);
    formData.append("fphone", student.fphone);
    formData.append("mfname", student.mfname);
    formData.append("mmname", student.mmname);
    formData.append("mlname", student.mlname);
    formData.append("mprofession", student.mprofession);
    formData.append("mdesig", student.mdesig);
    formData.append("mqualify", student.mqualify);
    formData.append("mphone", student.mphone);
    formData.append("refname", student.refname);
    formData.append("telno", student.telno);
    formData.append("address", student.address);
    formData.append("cname", student.cname);
    formData.append("simg", student.simg);
    formData.append("cimg", student.cimg);

    if (confirmBox.edit) {
      StudentService.updateStudent(student._id, formData)
        .then((res) => {
          setConfirmBox({ show: true, msg: res.data.msg });
        })
        .catch((ex) => console.log(ex));
    } else {
      StudentService.createStudent(formData)
        .then((res) => {
          setConfirmBox({ show: true, msg: res.data.msg });
        })
        .catch((ex) => console.log(ex));
    }
  };

  const switchToStudentList = () => {
    props.history.push("/view-students");
    setValidate(false);
    setFormPage(1);
  };

  return (
    <div className="form-back">
      <div className="form-header">
        <p className="h1 pt-3 text-center text-white fw-bold">
          {confirmBox.edit ? "Update account" : "Create account"}
        </p>
        <div className="form-load mt-3">
          <div className="line"></div>
          <div className="steps">
            <div className={formPage === 1 ? "step active" : "step"}>
              <div className="circle">1</div>
              <p>About</p>
            </div>
            <div className={formPage === 2 ? "step active" : "step"}>
              <div className="circle">2</div>
              <p>Family Details</p>
            </div>
            <div className={formPage === 3 ? "step active" : "step"}>
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
            {getForm()}
            <div className="row pt-3">
              <button
                type="submit"
                onClick={handleNext}
                className="btn text-capitalize btnsubmit px-3"
              >
                {formPage === 3
                  ? confirmBox.edit
                    ? "Update"
                    : "Register"
                  : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Confirm BOX */}
      {confirmBox.show && (
        <div className="confirm-box" id="confirmboxstu">
          <div className="box">
            <div className="modal-body">
              <p className="h6 py-2 px-2">{confirmBox.msg}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-confirm"
                onClick={switchToStudentList}
              >
                Go to Student List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
