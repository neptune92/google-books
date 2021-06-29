import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from '../Components/Navbar/navbar';
import Form from '../Components/Form/form';
import Jumbotron from '../Components/Jumbotron/jumbotron';

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
           <Form>
               <Navbar/>
               <Jumbotron>
                   <h1>Google Book Search</h1>
               </Jumbotron>
           </Form>
            
        )
    }
    
}

export default SearchBooks;