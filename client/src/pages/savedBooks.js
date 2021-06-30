import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from "../Components/Navbar/navbar";
import Jumbotron from '../Components/Jumbotron/jumbotron';
import BookInfo from '../Components/BookInfo/BookInfo';
import Card from '../Components/Card/card';


class SavedBooks extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        this.SavedBook();
    }

    SavedBook = () => {
        API.SavedBook()
            .then((res) =>
            this.setState({
                savedBooks: res.data,
            })
        )
        .catch((err) => console.log(err));
    };

    handleBookDelete = (id) => {
        API.deleteBook(id).then((res) => this.SavedBook)
    }

    render() {
        return (
            <div>
            <Navbar/>
            <div className="container">
                <br/>
                <Jumbotron/>
                <h2>Saved books</h2>
                <Card>
                    <BookInfo books={this.state.savedBooks}/>
                </Card>
                </div>
            </div>
        )
    }
}

export default SavedBooks;