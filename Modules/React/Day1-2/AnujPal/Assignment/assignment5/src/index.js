import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const students = [
  {
    src:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ID: 101,
    fname: "Mukesh",
    lname: "Pal",
    DOB: "7/10/1954",
    collegeName: "Alpha",
    Address: "Kalol",
    srcc: "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png",
  },
  {
    src: "https://vistapointe.net/images/man-6.jpg",
    ID: "102",
    fname: "Anuj",
    lname: "Pal",
    DOB: "7/10/4343",
    collegeName: "IITM",
    Address: "Madras",
    srcc: "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png",
  },
  {
    src: "https://vistapointe.net/images/man-7.jpg",
    ID: "103",
    fname: "Jyoti",
    lname: "Pal",
    DOB: "06/03/1998",
    collegeName: "IIMA",
    Address: "Ahmedabad",
    srcc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HytWM-qG1txCV434ZbbjMsnnkVFFMgXtObTlbfLZxb-1vLPaUNslNQip5RkMsoKDBxg&usqp=CAU",
  },
];

const PersonalComponent = (props) => {
  return (
    <article className="personal">
      <h3>ID : {props.ID}</h3>
      <h3>Name : {props.fname + " " + props.lname}</h3>
      <h3>DOB : {props.DOB}</h3>
      <hr></hr>
    </article>
  );
};

const CollegeComponent = (props) => {
  return (
    <article className="college">
      <img
        className="image"
        src={props.srcc}
        alt=""
        height="100px"
        width="200px"
      />
      <h3 className="h1">CollegeName : {props.collegeName}</h3>
      <h3 className="h2">Address : {props.Address}</h3>
    </article>
  );
};

const Image = (props) => {
  return <img src={props.src} alt="Image1" height="200px" width="400x" />;
};

const StudentIdCard = (props) => {
  return (
    <article className="studentIdCard">
      <Image src={props.src}></Image>
      <PersonalComponent
        ID={props.ID}
        fname={props.fname}
        lname={props.lname}
        DOB={props.DOB}
      ></PersonalComponent>
      <CollegeComponent
        srcc={props.srcc}
        collegeName={props.collegeName}
        Address={props.Address}
      ></CollegeComponent>
    </article>
  );
};
const Assignment = (props) => {
  let stu = props.data;
  console.log(stu);
  return (
    <section class="assignment">
      <StudentIdCard
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        ID="101"
        fname="Anuj"
        lname="Pal"
        DOB="05/03/1998"
        collegeName="GEC-DAHOD"
        Address="DAHOD"
        srcc= "https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png"
      ></StudentIdCard>
      <StudentIdCard
        src= "https://vistapointe.net/images/man-6.jpg"
        ID="102"
        fname="Mukesh"
        lname="Pal"
        DOB="09/4/1234"
        collegeName="GEC_DAHOD"
        Address="DAHOD"
        srcc="https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png"
      ></StudentIdCard>

      <StudentIdCard
        src= "https://vistapointe.net/images/man-7.jpg"
        ID="103"
        fname="Jyoti"
        lname="Kushwaha"
        DOB="02/05/1998"
        collegeName="B.M Patel"
        Address="NavrangPura"
        srcc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HytWM-qG1txCV434ZbbjMsnnkVFFMgXtObTlbfLZxb-1vLPaUNslNQip5RkMsoKDBxg&usqp=CAU"
      ></StudentIdCard>
    </section>
  );
};

ReactDOM.render(
  <Assignment data={students}></Assignment>,
  document.getElementById("root")
);
