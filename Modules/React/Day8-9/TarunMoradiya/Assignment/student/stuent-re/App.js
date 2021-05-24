import "./App.css";
import ListStudent from "./components/ListStudent";
import { Route, Switch } from "react-router-dom";
import ViewStudent from "./components/ViewStudent";
import CreateStudent from "./components/CreateStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ListStudent} />
      <Route exact path="/details/:id" component={ViewStudent} />
      <Route exact path="/create" component={CreateStudent} />
      <Route exact path="/update/:id" component={UpdateStudent} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
