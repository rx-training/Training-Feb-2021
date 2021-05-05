
import React, { Children } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const info = {
  ID: 101,
  fname: "Anuj",
  lname: "Pal",
  DOB: "06/03/1998",
  collegeName: "GEC-DAHOD",
  Address: "DAHOD",
};

const Image = () => {
  return(  <img
    src="https://c1.wallpaperflare.com/preview/475/75/706/suit-sufi-blue-business.jpg"
    alt="Image1"
    height="200px"
    width="390px"
  />)

};
const PersonalComponent = () => {
  return (
    <article className="personal">
     <Image></Image>
      <h3>ID : {info.ID}</h3>
      <h3>Name : {info.fname + " " + info.lname}</h3>
      <h3>DOB : {info.DOB}</h3>
      <hr></hr>
    </article>
  );
};

const CollegeComponent = () => {
  return (
    <article className="college">
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyo7ly10vWaYm2aIJG5rZgTtZGdb6YazeMQm00lOEVrlmyvGF17_1z21aM6Hh-nv1L0&usqp=CAU"
        alt=""
        height="100px"
        width="200px"
      />
      <h3 className="h1">CollegeName : {info.collegeName}</h3>
      <h3 className="h2">Address : {info.Address}</h3>
    </article>
  );
};

  const StudentIdCard = (props) => {
    console.log(props.children)
  return (
    <article className="studentIdCard">
  
    {props.children}
      <PersonalComponent></PersonalComponent>
      <CollegeComponent></CollegeComponent>
    </article>
  );
};
const Assignment = () => {
  return (
    <section class="assignment">
      <StudentIdCard><p> Student Details</p></StudentIdCard>
    </section>
  );
};

ReactDOM.render(<Assignment></Assignment>, document.getElementById("root"));
