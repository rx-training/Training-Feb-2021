import React from "react";

export default function formPage1(props) {
  const {
    fname,
    mname,
    lname,
    pob,
    flang,
    dob,
    country,
    state,
    city,
    validate,
    chooseCountry,
    chooseState,
    chooseCity,
  } = props.student;
  const handleChange = props.handleChange;

  return (
    <>
      <div className="mb-4 field">
        <div className="input-group">
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={handleChange}
            className={
              !fname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="First name"
          />
          <input
            type="text"
            name="mname"
            value={mname}
            onChange={handleChange}
            className={
              !mname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Middle name"
          />
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={handleChange}
            className={
              !lname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Last name"
          />
        </div>
        <div
          className={
            (!fname || !mname || !lname) && validate
              ? "feedback d-block"
              : "feedback"
          }
        >
          Please enter your full name
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 field">
          <input
            type="text"
            name="pob"
            value={pob}
            onChange={handleChange}
            placeholder="Place of Birth"
            className={
              !pob && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div className={!pob && validate ? "feedback d-block" : "feedback"}>
            Please enter your place of birth
          </div>
        </div>
        <div className="col-lg-6 field">
          <select
            name="flang"
            value={flang}
            onChange={handleChange}
            className={
              !flang && validate ? "form-select is-invalid" : "form-select"
            }
          >
            <option value="">Select Language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          <div className={!flang && validate ? "feedback d-block" : "feedback"}>
            Please select your first language
          </div>
        </div>
      </div>
      <div className="row mb-4 align-items-center">
        <div className="col field">
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={handleChange}
            className={
              !dob && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Date of birth"
          />
          <div className={!dob && validate ? "feedback d-block" : "feedback"}>
            Please select a valid Date
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-4 mb-3 mb-lg-0 field">
          <select
            name="country"
            className={
              !country && validate ? "form-select is-invalid" : "form-select"
            }
            value={country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {chooseCountry.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <div
            className={!country && validate ? "feedback d-block" : "feedback"}
          >
            Please select country
          </div>
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0 field">
          <select
            name="state"
            className="form-select"
            value={state}
            onChange={handleChange}
            disabled={chooseState.length == 0 ? true : false}
            className={
              !state && validate ? "form-select is-invalid" : "form-select"
            }
          >
            <option value="">Select State</option>
            {chooseState.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <div className={!state && validate ? "feedback d-block" : "feedback"}>
            Please select state
          </div>
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0 field">
          <select
            name="city"
            value={city}
            onChange={handleChange}
            disabled={chooseCity.length === 0 ? true : false}
            className={
              !city && validate ? "form-select is-invalid" : "form-select"
            }
          >
            <option value="">Select City</option>
            {chooseCity.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <div className={!city && validate ? "feedback d-block" : "feedback"}>
            Please select city
          </div>
        </div>
      </div>
    </>
  );
}
