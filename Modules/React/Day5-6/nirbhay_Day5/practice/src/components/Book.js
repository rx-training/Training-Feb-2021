import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle:true,
            addtocart:false
        }
    }
    handleToggle = () => {
        this.setState({
            toggle:!this.state.toggle
        });
    }
    handleAddToCart = () =>{
        this.setState({
            addtocart:!this.state.addtocart
        });
    }
    render() {
        const {id,img,name,author,desc}=this.props.mybook;
        const handleDelete=this.props.handleDelete;
        return (
            <div className="card">
                <div className="row">
                    <div className="col-md-2">
                        <img src={img} className="col-md-12" width="100" alt=""/>
                    </div>
                    <div className="col-md-10">
                        <h3 className="h3">{name}</h3>
                        <h6 className="h6">{author}</h6>
                        <div className="row">
                            <div className="col-lg-1">Details</div>
                            <div className="col-lg-11"> 
                                {
                                    (this.state.toggle)?
                                        <i className="bi bi-toggle-on" onClick={this.handleToggle}></i>
                                        :<i className="bi bi-toggle-off" onClick={this.handleToggle}></i>
                                }
                            </div>
                        </div>
                        { (this.state.toggle)?<p className="text-muted">{desc}</p>:null }
                        <div>
                            {
                                (!this.state.addtocart)?
                                    <button type="button" className="btn btn-warning" onClick={this.handleAddToCart}>Add to Cart</button>
                                    :<button type="button" className="btn btn-secondary" onClick={this.handleAddToCart}>remove</button>
                            }
                            <button type="button" className="btn btn-outline-danger" style={{marginLeft:"1rem"}} onClick={() => handleDelete(id)}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
