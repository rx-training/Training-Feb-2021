import React, { Component } from 'react'
import '../../clg-img copy/GECD.png'

export default class summary extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    // console.log(this.props.info.collegeFile);
    // const src=`../../clg-img copy/${this.props.info.collegeFile}`
    return (
      <div>
        {/* {this.props.info.stude.map((item,index)=>{
          return(<div>
          <img src="" alt="image"/>
            <h6>{item.ID}</h6>
            <h6>{item.fname}</h6>
            <h6>{item.lname}</h6>
            <h6>{item.collegeName}</h6>
          </div>)
        })} */}
      </div>
    )
  }
}

