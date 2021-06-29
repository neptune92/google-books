import React, { Component } from 'react';
import API from "../utils/API";
import Form from '../Components/Form/form';

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
           <div>
               <Form>
                   
               </Form>
           </div>
            
        )
    }
    
}

export default SearchBooks;