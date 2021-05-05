import React from "react";
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

const Assignment = () => {
  return (
    <section class="assignment">
      <StudentIDCard somProp={students}></StudentIDCard>
    </section>
  );
};

//component for print the hello world
const HelloWorld = () => {
  return (
    <article>
      <h1>Hello World</h1>
      <hr />
    </article>
  );
};
// const PersonalComponent = () => {
//   return (
//     <article className="personal">
//       <h3>ID : {}</h3>
//       <h3>Name : {info.fname + " " + info.lname}</h3>
//       <h3>DOB : {info.DOB}</h3>
//       <hr></hr>
//     </article>
//   );
// };

const PersonalComponent = (props) => {
  return (
    <article className="personal">
      <img src={props.src} alt="Image1" height="200px" width="390px" />
      <h3>ID : {props.ID}</h3>
      <h3>Name : {props.fname + " " + props.lname}</h3>
      <h3>DOB : {props.DOB}</h3>
      <hr></hr>
    </article>
  );
};

// const CollegeComponent = () => {
//   return (
//     <article className="college">
//       <img className="image"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyo7ly10vWaYm2aIJG5rZgTtZGdb6YazeMQm00lOEVrlmyvGF17_1z21aM6Hh-nv1L0&usqp=CAU"
//         alt="GEC"
//         height="100px"
//         width="200px"
//       />
//       <h3 className="h1">CollegeName :{info.collegeName}</h3>
//       <h3 className="h2">Address :{info.Address}</h3>
//     </article>
//   );
// };

const CollegeComponent = (props) => {
  return (
    <article className="college">
      <img
        className="image"
        src={props.src}
        alt="GEC"
        height="100px"
        width="200px"
      />
      <h3 className="h1">CollegeName :{props.collegeName}</h3>
      <h3 className="h2">Address :{props.Address}</h3>
    </article>
  );
};

const students = [
  {
    src:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ID: "102",
    fname: "Mukesh",
    lname: "Pal",
    DOB: "7/10/1954",
    collegeName: "Alpha",
    Address: "Kalol",
    srcc:"https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png"
  },
  {
    src:
    "https://vistapointe.net/images/man-6.jpg",
    ID: "102",
    fname: "Mukesh",
    lname: "Pal",
    DOB: "7/10/1954",
    collegeName: "Alpha",
    Address: "Kalol",
    srcc:
      "https://lh3.googleusercontent.com/proxy/4hgWP0D7ARMGbp6iKoCSc3MxmCTUA3aC4Vyw9bqvDoztBYNnjS8bv22mzJ4bqyANX-qlwYsjN9ACSSZJ0aYZqvvFyZvaEZglzO_l1dBG",
  },
];

// const StudentIDCard = (props) => {
//   return (
//     <article className="studentIdCard">
//       <PersonalComponent
//         src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
//         ID="102"
//         fname="Mukesh"
//         lname="Pal"
//         DOB="7/10/1954"
//       ></PersonalComponent>
//       <CollegeComponent
//         collegeName="Alpha"
//         Address="Kalol"
//         src="https://gtu-info.com/Photos/Logo/College/018_GEC_Dahod_Logo.png"
//       ></CollegeComponent>

//       <PersonalComponent
//         src="data:image/jpeg;base64,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"
//         ID="103"
//         fname="Anuj"
//         lname="Pal"
//         DOB="7/10/1954"
//       ></PersonalComponent>
//       <CollegeComponent
//         collegeName="IITD"
//         Address="Delhi"
//         src="https://lh3.googleusercontent.com/proxy/4hgWP0D7ARMGbp6iKoCSc3MxmCTUA3aC4Vyw9bqvDoztBYNnjS8bv22mzJ4bqyANX-qlwYsjN9ACSSZJ0aYZqvvFyZvaEZglzO_l1dBG"
//       ></CollegeComponent>

//       <PersonalComponent
//         src="https://vistapointe.net/images/man-6.jpg"
//         ID="104"
//         fname="Mishra"
//         lname="Atul"
//         DOB="7/10/1954"
//       ></PersonalComponent>
//       <CollegeComponent
//         collegeName="IITD"
//         Address="Delhi"
//         src="https://lh3.googleusercontent.com/proxy/4hgWP0D7ARMGbp6iKoCSc3MxmCTUA3aC4Vyw9bqvDoztBYNnjS8bv22mzJ4bqyANX-qlwYsjN9ACSSZJ0aYZqvvFyZvaEZglzO_l1dBG"
//       ></CollegeComponent>
//     </article>
//   );
// };

const StudentIDCard = (props) => {
  console.log(props.somProp[0])
  return (
    <article className="studentIdCard">
      <PersonalComponent
        src={props.somProp[0].src}
        ID={props.somProp[0].ID}
        fname={props.somProp[0].fname}
        lname={props.somProp[0].lname}
        DOB={props.somProp[0].DOB}
      ></PersonalComponent>
      <CollegeComponent
        collegeName={props.somProp[0].collegeName}
        Address={props.somProp[0].Address}
        src={props.somProp[0].srcc}
      ></CollegeComponent>

<PersonalComponent
        src={props.somProp[1].src}
        ID={props.somProp[1].ID}
        fname={props.somProp[1].fname}
        lname={props.somProp[1].lname}
        DOB={props.somProp[1].DOB}
      ></PersonalComponent>
      <CollegeComponent
        collegeName={props.somProp[1].collegeName}
        Address={props.somProp[1].Address}
        src={props.somProp[1].srcc}
      ></CollegeComponent>

      <PersonalComponent
        src="https://vistapointe.net/images/man-6.jpg"
        ID="104"
        fname="Mishra"
        lname="Atul"
        DOB="7/10/1954"
      ></PersonalComponent>
      <CollegeComponent
        collegeName="IITD"
        Address="Delhi"
        src="https://lh3.googleusercontent.com/proxy/4hgWP0D7ARMGbp6iKoCSc3MxmCTUA3aC4Vyw9bqvDoztBYNnjS8bv22mzJ4bqyANX-qlwYsjN9ACSSZJ0aYZqvvFyZvaEZglzO_l1dBG"
      ></CollegeComponent>
    </article>
  );
};

ReactDOM.render(<Assignment></Assignment>, document.getElementById("root"));
