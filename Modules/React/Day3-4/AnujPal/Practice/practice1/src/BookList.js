import React, { Component } from 'react'
import Book from "./Book"



export default class BookList extends Component {
    books=[
        {
            Book:"Book Number One",
            Author:"Anuj Pal"
        },
        {
            Book:"Book Number Two ",
            Author:"Mukesh Pal"
        }
    ]
    render() {
        return (
            <section>
                <h3>This is our BookList</h3>
                <Book book={this.books[0]}></Book>
            </section>
        )
    }
}
