import React, { Component } from 'react'
import StudentCard from './StudentCard';

const studentList=[
  {sid:"1001", name:"David Bryan", simg:"https://randomuser.me/api/portraits/men/15.jpg", dob:"12-04-1994", clg:"Ashford University", cimg:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Ashford_University_Full_Color_Logo.png", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1002", name:"Brad Gibson", simg:"https://randomuser.me/api/portraits/men/22.jpg", dob:"25-08-1991", clg:"Oxford University", cimg:"https://i.pinimg.com/originals/92/ee/93/92ee936ffdec0749407abe674677b257.png", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1003", name:"Oliver Nielsen", simg:"https://randomuser.me/api/portraits/men/96.jpg", dob:"06-01-1991", clg:"Saint Louis University", cimg:"https://i.pinimg.com/236x/b6/32/84/b632847479b43820b05cd12d53c2978a--identity-branding-identity-design.jpg", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1004", name:"Michael Collins", simg:"https://randomuser.me/api/portraits/men/29.jpg", dob:"10-11-1990", clg:"Pennsylvania University", cimg:"https://i.pinimg.com/474x/e7/c7/87/e7c78715c36d34fbb86503b26f91d961.jpg", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1005", name:"Guido Schäffler", simg:"https://randomuser.me/api/portraits/men/8.jpg", dob:"22-12-1994", clg:"Cornell University", cimg:"https://i.pinimg.com/236x/22/9a/56/229a56d7ac6e6244de5b83500145bafd--cornell-university-logo-inspiration.jpg", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
  {sid:"1006", name:"John Doe", simg:"https://randomuser.me/api/portraits/men/75.jpg", dob:"14-10-1995", clg:"Northeastern University", cimg:"https://i.pinimg.com/originals/f3/c9/da/f3c9dae4e9912a52de8d27d55ba01e32.jpg", clgadd:"Nigam nagar, Chandkheda, Ahmedabad, Gujarat 382424"},
];

export default class StudentList extends Component {
    constructor(props){
        super(props);
        this.state={
            students:studentList,
        };
    }
    handleDelete= sid =>{
        const sortedIds=this.state.students.filter(item => item.sid !== sid);
        this.setState({
            students:sortedIds
        });
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:'center'}}> Students Card List </h3>
                {this.state.students.map((st,index) => <StudentCard key={index} student={st} handleDelete={this.handleDelete} />)}
            </div>
        )
    }
}
