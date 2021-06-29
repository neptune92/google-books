import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Jumbotron from "./Components/Jumbotron/jumbotron";
import SearchBooks from "./pages/searchBooks";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Jumbotron/>
        <Route exact path="/" component={SearchBooks} />
      </div>
    </Router>
  )
}
export default App;
