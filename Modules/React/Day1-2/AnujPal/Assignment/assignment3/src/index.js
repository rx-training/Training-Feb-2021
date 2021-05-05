import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
const info = {
  ID: 101,
  fname: "Anuj",
  lname: "Pal",
  DOB: "06/03/1998",
  collegeName: "GEC-DAHOD",
  Address: "DAHOD",
};

const Image = () => {
  return (
    <img
      src="https://c1.wallpaperflare.com/preview/475/75/706/suit-sufi-blue-business.jpg"
      alt="Image1"
      height="200px"
      width="550px"
    />
  );
};
const PersonalComponent = () => {
  return (
    <article className="personal">
      <Image></Image>
      <div className="container text-center">
        <h4 className="h5">ID : {info.ID}</h4>
        <h4 className="h5">Name : {info.fname + " " + info.lname}</h4>
        <h4 className="h5">DOB : {info.DOB}</h4>
      </div>
      <hr></hr>
    </article>
  );
};

const CollegeComponent = () => {
  return (
    <article className="row">
      <div className="col">
        <img
          className="img-fluid mt-4"
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyo7ly10vWaYm2aIJG5rZgTtZGdb6YazeMQm00lOEVrlmyvGF17_1z21aM6Hh-nv1L0&usqp=CAU"
          alt=""
          height="100px"
          width="200px"
        />
      </div>
      <div className="col mt-3">
        <h3 className="h5">CollegeName : {info.collegeName}</h3>
        <h3 className="h5">Address : {info.Address}</h3>
      </div>
    </article>
  );
};

const StudentIdCard = () => {
  return (
    <article className="border border-secondary w-50">
      <PersonalComponent></PersonalComponent>
      <CollegeComponent></CollegeComponent>
    </article>
  );
};
const Assignment = () => {
  return (
    <section className="container m-auto ">
      <StudentIdCard></StudentIdCard>
    </section>
  );
};

ReactDOM.render(<Assignment></Assignment>, document.getElementById("root"));
