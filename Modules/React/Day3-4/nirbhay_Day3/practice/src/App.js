import React,{Component} from 'react'
import BookList from './components/BookList'
import './App.css'

export default class App extends Component{

    render(){
        return(
            <section>
                <BookList />
            </section>
        );
    }
}