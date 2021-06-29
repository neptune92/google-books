import React, { Component } from 'react';
import API from "../utils/API";
import Form from '../Components/Form/form';
import Navbar from "../Components/Navbar/navbar";



class SavedBooks extends Component {
    state = {
        book: []
    };

    componentDidMount() {
        this.saveBook();
    }

    saveBook = () => {
        API.saveBook()
            .then((res) => 
            this.setState({
                book: res.data,
            })
            )
            .catch((err) => console.log(err));
    };

    handleDeleteBooks = (id) => {
        API.deleteBook(id).then((res) => this.saveBook());
    };

    render() {
        return (
            <Form>
                <Navbar/>
                
            </Form>
        )
    }
}

export default SavedBooks;