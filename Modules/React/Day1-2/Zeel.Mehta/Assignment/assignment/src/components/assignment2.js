// 2. Create a StudentIDCard Component which will include another component image,Personal Component include
// (ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

import React from 'react';


function assignment2() {
     
    return (
        <section className="d-flex justify-content-center">
            <StudentIDCard />
        </section>
    );
}
const StudentIDCard = () =>
    <article className="border border-3 border-dark rounded ">
        <Collage />
        <div className="container ">
            <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 ">

            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 ">
                <Person />
            </div>
            </div>
        </div>   
    </article>

const Image = () => 
  <img 
    width = "150" height="150"
    src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" 
    alt="wonkey donkey" />

const Person = () =>
    <div className="pt-4">
        <b>ID : </b> 1 <br />
        <b>FirstName : </b>Jaymin <br />
        <b>LastName : </b>Prajapati <br />
        <b>DOB : </b>05/02/1999 <br />
    </div>

const Collage = () =>
    <div className ="container p-3">
        <div className="col-lg-12">
            <div className = "row">
                <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
                    <h2>College University</h2>
                    <h5 class="text-secondary">Ahmedabad</h5>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 bg-danger" >
                    <img  width = "90" src ="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg"  alt = "book" />        
                </div>                       
            </div>
        </div>
    </div>
    

export default assignment2;
