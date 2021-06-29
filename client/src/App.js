import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Jumbotron from "./Components/Jumbotron/jumbotron";
import SearchBooks from "./pages/searchBooks";
import SavedBooks from "./pages/savedBooks";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Jumbotron/>
        <Switch>
        <Route exact path="/" component={SearchBooks} />
        <Route exact path="/save" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
