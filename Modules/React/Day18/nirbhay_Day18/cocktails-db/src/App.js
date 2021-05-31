import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
// Components
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (data) => {
    setSearch(data);
  };

  const handleToggle = (r) => {
    setToggle(r);
  };

  return (
    <Router>
      <Navbar
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <Switch>
        <Route exact path="/">
          <Home search={search} toggle={toggle} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id/">
          <SingleCocktail handleToggle={handleToggle} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
