import React from "react";
import ReactDom from "react-dom";
import './index.css';

function Greeting() {
  return (
    <h1>Hello World</h1>
  );
}
function Books(){
  return(
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book(){
  return(
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
}
const Title = () => <h1>This is a Book </h1>;
const CoverImage= () => <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" width="100" alt=""/>
const Author= () => <p>by Author Conon Doyle </p>

ReactDom.render(<Books/>,document.getElementById('root'));