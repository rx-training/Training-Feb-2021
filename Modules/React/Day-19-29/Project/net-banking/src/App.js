import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import { Navbar } from "./components/Portal/Navbar";
import { Portal } from "./components/Portal/Portal";
import { SignUp } from "./components/SignUp/SignUp";
import { CloseAccount } from "./Pages/CloseAccount";
import { Home } from "./Pages/Home/Home";
import { NEFT } from "./Pages/NEFT";
import { Withdrawl } from "./Pages/Withdrawl";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Navbar" exact component={Navbar}></Route>
          <Route path="/Portal/:id" exact component={Portal}></Route>
          <Route path="/Home/:id" exact component={Home}></Route>
          <Route path="/Portal/:id/Withdrawl" exact component={Withdrawl}></Route>
          <Route path="/Portal/:id/NEFT" exact component={NEFT}></Route>
          <Route path="/Portal/:id/Delete" exact component={CloseAccount}></Route>

          <Route path="/SignUp" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
