import React, { Component } from 'react';
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import Navbar from '../Components/Navbar/navbar';
import SearchBar from '../Components/Searchbar/Searchbar';

class SearchBooks extends Component {
    state = {
        book: [],
        search: ""
    };

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks();
    };

    handleSaving = savedBook => {
        API.saveBook(savedBook)
            .then(res => console.log(res));
    }

    render() {
        return (
            
            <Navbar></Navbar>

            <Jumbotron></Jumbotron>
            
        )
    }
    
}

export default SearchBooks;