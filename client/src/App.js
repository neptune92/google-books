import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import SearchBooks from "./pages/searchBooks";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={SearchBooks} />
      </div>
    </Router>
  )
}
export default App;
