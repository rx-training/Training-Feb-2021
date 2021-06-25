import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        const {img,name,author}=this.props.mybook;
        return (
            <article className="book">
                <img src={img} width="100" alt=""/>
                <div>
                    <h3>{name}</h3>
                    <p>{author}</p>
                </div>
            </article>
        )
    }
}
