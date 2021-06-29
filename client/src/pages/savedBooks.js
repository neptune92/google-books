import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from "../Components/Navbar/navbar";
import Jumbotron from '../Components/Jumbotron/jumbotron';


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
            <div>
                <Navbar/>
                <Jumbotron/>
                </div>
            
        )
    }
}

export default SavedBooks;