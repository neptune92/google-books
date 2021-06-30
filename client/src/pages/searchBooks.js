import React, { Component } from 'react';
import API from "../utils/API";
import Navbar from '../Components/Navbar/navbar';
import Searchbar from "../Components/Searchbar/searchbar";
import Jumbotron from '../Components/Jumbotron/jumbotron';
import Card from '../Components/Card/card';
import BookInfo from '../Components/BookInfo/BookInfo';

class SearchBooks extends Component {
    state = {
        value:"",
        books: []
    };

    componentDidMount() {
        this.searchBook("Junji Ito");
    }

    bookStuff = bookData => {
        return {
            id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.bookStuff(bookData))}))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Navbar/>
                <div class="container">
                <br/>
                <Jumbotron/>
                <Searchbar/>
                <Card>
                    <BookInfo books={this.state.books}/>
                </Card>
                </div>
            </div>
        )
    }
}

    


export default SearchBooks;