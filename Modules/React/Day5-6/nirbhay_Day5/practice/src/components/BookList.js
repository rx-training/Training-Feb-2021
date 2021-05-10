import React, { Component } from 'react';
import Book from './Book';
import books from './bookData';

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state={
            books:books
        }
    }
    handleDelete = id => {
        const sortedBooks = this.state.books.filter(item => item.id !== id);
        this.setState({
            books:sortedBooks
        });
    }
    render() {
        return (
            <section className="container">
                { this.state.books.map((book,index) => <Book key={index} mybook={book} handleDelete={this.handleDelete} />) }
            </section>
        )
    }
}
