import React from "react";


function Searchbar(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h3>Search Books</h3></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Searchbar;