import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from "../Components/Navbar/navbar";
import Jumbotron from '../Components/Jumbotron/jumbotron';
import BookInfo from '../Components/BookInfo/BookInfo';
import Card from '../Components/Card/card';


class SavedBooks extends Component {
    state = {
        saveBook: [],
    }

    componentDidMount() {
        API.saveBook()
            .then(saveBook => this.setState({ saveBook: saveBook }))
            .catch(err => console.error(err));
    }

    handleSave = book => {
        if (this.state.saveBook.map(book.id).includes(book.id)) {
            API.deleteBook(book.id)
                .then(deleteBook => this.setState({ saveBook: this.state.saveBook.filter(book => book.id !== deleteBook.id)}))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            
            <div>
                <Navbar/>
                <div class="container">
                <br/>
                <Jumbotron/>
                <Card>
                <BookInfo books={this.state.saveBook} />
                </Card>
                </div>
            </div>
        )
    }
}

export default SavedBooks;