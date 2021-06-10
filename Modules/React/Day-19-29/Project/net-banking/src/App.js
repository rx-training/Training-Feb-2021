import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import { Navbar } from "./components/Portal/Navbar";
import { Portal } from "./components/Portal/Portal";
import { SignUp } from "./components/SignUp/SignUp";
import { About } from "./Pages/About/About";
import { addBeneficiary } from "./Pages/addBeneficiary";
import { Admin } from "./Pages/Admin";
import { AdminLogin } from "./Pages/Admin-Login/AdminLogin";
import { AdminRegister } from "./Pages/AdminRegister/AdminRegister";
import { CloseAccount } from "./Pages/CloseAccount";
import { Home } from "./Pages/Home/Home";
import { Loan } from "./Pages/Loan/Loan";
import { NEFT } from "./Pages/NEFT";
import { NEFT1 } from "./Pages/NEFT1";
import { Withdrawl } from "./Pages/Withdrawl";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Admin/Login" exact component={AdminLogin}></Route>
          <Route path="/Admin/Dashboard" exact component={Admin}></Route>
          <Route path="/Admin/Register" exact component={AdminRegister}></Route>
          <Route path="/Navbar" exact component={Navbar}></Route>
          <Route path="/Portal/:id" exact component={Portal}></Route>
          <Route path="/Portal/:id/Loan" exact component={Loan}></Route>
          <Route path="/Home/:id" exact component={Home}></Route>
          <Route path="/Portal/:id/Withdrawl" exact component={Withdrawl}></Route>
          <Route path="/Portal/:id/NEFT1" exact component={NEFT1}></Route>
          <Route path="/Portal/:id/NEFT1/addBeneficiary" exact component={addBeneficiary}></Route>
          <Route path="/Portal/:id/NEFT" exact component={NEFT}></Route>
          <Route path="/Portal/:id/Delete" exact component={CloseAccount}></Route>
          <Route path="/Portal/:id/About" exact component={About}></Route>

          <Route path="/SignUp" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
