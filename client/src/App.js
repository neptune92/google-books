import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/searchBooks";
import SavedBooks from "./pages/savedBooks";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={SearchBooks} />
        <Route exact path="/save" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
