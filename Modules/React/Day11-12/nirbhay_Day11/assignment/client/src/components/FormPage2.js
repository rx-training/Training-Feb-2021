import React from "react";

export default function FormPage2(props) {
  const {
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
    validate,
  } = props.student;
  const handleChange = props.handleChange;
  return (
    <>
      {/* FATHER'S Details */}
      <h4 className="pb-3" style={{ color: "#09443c" }}>
        Father's Details
      </h4>
      <div className="mb-4 field">
        <div className="input-group">
          <input
            type="text"
            name="ffname"
            value={ffname}
            onChange={handleChange}
            className={
              !ffname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="First name"
          />
          <input
            type="text"
            name="fmname"
            value={fmname}
            onChange={handleChange}
            className={
              !fmname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Middle name"
          />
          <input
            type="text"
            name="flname"
            value={flname}
            onChange={handleChange}
            className={
              !flname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Last name"
          />
        </div>
        <div
          className={
            (!ffname || !fmname || !flname) && validate
              ? "feedback d-block"
              : "feedback"
          }
        >
          Please enter your father's full name
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 field">
          <input
            type="text"
            name="fqualify"
            value={fqualify}
            onChange={handleChange}
            placeholder="Father's Qualification"
            className={
              !fqualify && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!fqualify && validate ? "feedback d-block" : "feedback"}
          >
            Please provide fathers's qualification
          </div>
        </div>
        <div className="col-lg-6 field">
          <select
            name="fprofession"
            value={fprofession}
            onChange={handleChange}
            className={
              !fprofession && validate
                ? "form-select is-invalid"
                : "form-select"
            }
          >
            <option value="">Select Profession</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
          </select>
          <div
            className={
              !fprofession && validate ? "feedback d-block" : "feedback"
            }
          >
            Please select your father's profession
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 field">
          <input
            type="text"
            name="fdesig"
            value={fdesig}
            onChange={handleChange}
            placeholder="Father's Designation"
            className={
              !fdesig && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!fdesig && validate ? "feedback d-block" : "feedback"}
          >
            Please provide fathers's designation
          </div>
        </div>
        <div className="col-lg-6 field">
          <input
            type="text"
            name="fphone"
            value={fphone}
            onChange={handleChange}
            placeholder="Father's Phone"
            className={
              !fphone && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!fphone && validate ? "feedback d-block" : "feedback"}
          >
            Please enter a valid phone no.
          </div>
        </div>
      </div>
      {/* MOTHER'S Details */}
      <h4 className="pb-3" style={{ color: "#09443c" }}>
        Mother's Details
      </h4>
      <div className="mb-4 field">
        <div className="input-group">
          <input
            type="text"
            name="mfname"
            value={mfname}
            onChange={handleChange}
            className={
              !mfname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="First name"
          />
          <input
            type="text"
            name="mmname"
            value={mmname}
            onChange={handleChange}
            className={
              !mmname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Middle name"
          />
          <input
            type="text"
            name="mlname"
            value={mlname}
            onChange={handleChange}
            className={
              !mlname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="Last name"
          />
        </div>
        <div
          className={
            (!mfname || !mmname || !mlname) && validate
              ? "feedback d-block"
              : "feedback"
          }
        >
          Please enter your mother's full name
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 field">
          <input
            type="text"
            name="mqualify"
            value={mqualify}
            onChange={handleChange}
            placeholder="Mother's Qualification"
            className={
              !mqualify && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!mqualify && validate ? "feedback d-block" : "feedback"}
          >
            Please provide mother's qualification
          </div>
        </div>
        <div className="col-lg-6 field">
          <select
            name="mprofession"
            value={mprofession}
            onChange={handleChange}
            className={
              !mprofession && validate
                ? "form-select is-invalid"
                : "form-select"
            }
          >
            <option value="">Select Profession</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="homemaker">Home maker</option>
          </select>
          <div
            className={
              !mprofession && validate ? "feedback d-block" : "feedback"
            }
          >
            Please select your mother's profession
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <input
            type="text"
            name="mdesig"
            value={mdesig}
            onChange={handleChange}
            placeholder="Mother's Designation"
            className="form-control"
          />
        </div>
        <div className="col-lg-6 field">
          <input
            type="text"
            name="mphone"
            value={mphone}
            onChange={handleChange}
            placeholder="Mother's Phone"
            className={
              !mphone && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!mphone && validate ? "feedback d-block" : "feedback"}
          >
            Please enter a valid phone no.
          </div>
        </div>
      </div>
    </>
  );
}
