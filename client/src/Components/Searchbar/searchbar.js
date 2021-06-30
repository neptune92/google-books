import React from "react";

function Searchbar(props){
  return (
    <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="search"><h3>Search and Save a Book</h3></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn indigo darken-1">
          Search
          </button>
      </div>
    </form>
    </div>
  );
  }

export default Searchbar;