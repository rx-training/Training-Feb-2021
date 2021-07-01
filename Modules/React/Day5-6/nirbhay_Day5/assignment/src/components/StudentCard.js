import React, { Component } from 'react'

export default class StudentCard extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle:true
        };
    }
    handleToggle = () => {
        this.setState({
            toggle:!this.state.toggle
        });
    }
    render() {
        const {sid,name,simg,cimg,dob,clg,clgadd}=this.props.student;
        const handleDelete=this.props.handleDelete;
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={simg} alt="" width="120" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{dob}</h6>
                            <p className="card-text">{clg}</p>
                            { 
                                (this.state.toggle)
                                ?   <div className="row">
                                        <p className="col-md-5"><b>Student-Id </b><br/> {sid}</p>
                                        <p className="col-md-7"><b>Address </b><br/>{clgadd}</p>
                                    </div>
                                :null
                            }
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <button type="button" id="btntoggle" onClick={this.handleToggle}> {(this.state.toggle)?<i className="bi bi-toggle-on"></i>:<i className="bi bi-toggle-off"></i>} </button>
                            <button type="button" id="btndelete" onClick={() => handleDelete(sid)}><i className="bi bi-x"></i></button>
                        </div>
                        <img src={cimg} alt="" width="80" />
                    </div>
                </div>
            </div>
        )
    }
}
