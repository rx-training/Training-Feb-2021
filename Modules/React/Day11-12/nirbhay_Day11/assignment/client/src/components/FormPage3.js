import React from "react";

export default function formPage3(props) {
  const { refname, telno, address, simg, cimg, cname, validate } =
    props.student;
  const handleChange = props.handleChange;
  const handleChangeSimg = props.handleChangeSimg;
  const handleChangeCimg = props.handleChangeCimg;

  return (
    <>
      <div className="row mb-4">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <input
            type="text"
            name="refname"
            value={refname}
            onChange={handleChange}
            placeholder="Reference through"
            className="form-control"
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            name="telno"
            value={telno}
            onChange={handleChange}
            placeholder="Telephone no."
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col field">
          <textarea
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Address"
            className={
              !address && validate ? "form-control is-invalid" : "form-control"
            }
          />
          <div
            className={!address && validate ? "feedback d-block" : "feedback"}
          >
            Please enter your full address
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-9 field">
          <input
            type="file"
            id="simg"
            onChange={handleChangeSimg}
            className="form-control d-none"
          />
          <label
            htmlFor="simg"
            className={
              !simg && validate
                ? "form-control p-0 is-invalid"
                : "form-control p-0"
            }
          >
            <span
              className="btn btn-light"
              style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "#09443c",
              }}
            >
              Choose Profile Image
            </span>
          </label>
          <div className={!simg && validate ? "feedback d-block" : "feedback"}>
            Please provide your profile image
          </div>
          <div
            className={
              simg
                ? "alert alert-success py-2 mt-2 visible"
                : "alert alert-success py-2 mt-2 invisible"
            }
          >
            Image Uploaded
          </div>
        </div>
        {
          <div className="col-3 ps-0">
            <img
              src={
                simg
                  ? URL.createObjectURL(simg.files[0])
                  : "https://www.brav.com/public/images/image-default.png?scale=canvas&width=250&quality=80"
              }
              alt=""
              height="80"
              width="100%"
            />
          </div>
        }
      </div>
      <div className="row mb-4">
        <div className="col field">
          <input
            type="text"
            name="cname"
            value={cname}
            onChange={handleChange}
            className={
              !cname && validate ? "form-control is-invalid" : "form-control"
            }
            placeholder="College Name"
          />
          <div className={!cname && validate ? "feedback d-block" : "feedback"}>
            Please enter your college name
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-9 field">
          <input
            type="file"
            id="clogo"
            onChange={handleChangeCimg}
            className="form-control d-none"
          />
          <label
            htmlFor="clogo"
            className={
              !cimg && validate
                ? "form-control p-0 is-invalid"
                : "form-control p-0"
            }
          >
            <span
              className="btn btn-light"
              style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                color: "#09443c",
              }}
            >
              Choose College logo
            </span>
          </label>
          <div className={!cimg && validate ? "feedback d-block" : "feedback"}>
            Please provide your college logo
          </div>
          <div
            className={
              cimg
                ? "alert alert-success py-2 mt-2 visible"
                : "alert alert-success py-2 mt-2 invisible"
            }
          >
            Logo Uploaded
          </div>
        </div>
        {
          <div className="col-3 ps-0">
            <img
              src={
                cimg
                  ? URL.createObjectURL(cimg.files[0])
                  : "https://www.brav.com/public/images/image-default.png?scale=canvas&width=250&quality=80"
              }
              alt=""
              height="80"
              width="100%"
            />
          </div>
        }
      </div>
    </>
  );
}
