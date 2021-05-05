import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const PersonalComponent = () => {
  return (
    <article className="personal">
      <img src="https://c1.wallpaperflare.com/preview/475/75/706/suit-sufi-blue-business.jpg" alt="Image1" height="200px" width="390px" />
      <h3>ID : 101</h3>
      <h3>Name : Anuj Pal</h3>
      <h3>DOB : 7/10/1996</h3>
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
      <h3 className="h1">CollegeName : GEC-DAHOD</h3>
      <h3 className="h2">Address : DAHOD</h3>
    </article>
  );
};

const StudentIdCard = () => {
  return (
    <article className="studentIdCard">
      <PersonalComponent></PersonalComponent>
      <CollegeComponent></CollegeComponent>
    </article>
  );
};
const Assignment=()=>{
  return(
    <section class="assignment">
      <StudentIdCard></StudentIdCard>
    </section>
  )
}

ReactDOM.render(
  <Assignment></Assignment>,
  document.getElementById("root")
);
