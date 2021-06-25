import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Person = ({children,img,name,job}) =>{
  const imgurl=`https://randomuser.me/api/portraits/med/men/${img}.jpg`;
  return(
    <article className="person">
      <img src={imgurl} alt="user"/>
      <h3>{name}</h3>
      <h4>{job}</h4>
      {children}
    </article>
  );
}

const PersonList = () =>{
  return (
    <section>
      <section className="person-list">
        <Person img="72" name="John Doe" job="Developer" />
        <Person img="15" name="Bob" job="Designer" >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nam?</p>
        </Person>
        <Person img="36" name="David" job="Artist" />
      </section>
      <br/>
       <App />
    </section>
  );
}

ReactDOM.render(<PersonList />,document.getElementById("root"));