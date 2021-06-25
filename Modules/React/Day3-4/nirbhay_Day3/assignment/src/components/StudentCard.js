import React, { Component } from 'react'

export default class StudentCard extends Component {
    
    render() {
        const {sid,name,simg,cimg,dob,clg,clgadd}=this.props.student;
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={simg} alt="" width="120" />
                    </div>
                    <div className="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{dob}</h6>
                            <p class="card-text">{clg}</p>
                            <div className="idadd">
                                <p><b>Student-Id : </b><br/> {sid}</p>
                                <p><b>Address : </b><br/>{clgadd}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src={cimg} alt="" width="80" />
                    </div>
                </div>
            </div>
        )
    }
}
