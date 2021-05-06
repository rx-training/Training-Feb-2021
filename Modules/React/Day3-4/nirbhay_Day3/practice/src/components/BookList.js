import React, { Component } from 'react';
import Book from './Book';
import books from './bookData';

export default class Books extends Component {
    render() {
        return (
            <section className="books">
                { books.map((book,index) => <Book key={index} mybook={book} />) }
            </section>
        )
    }
}
