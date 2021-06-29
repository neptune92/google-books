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

    render() {
        return (
            
            <div>
                <Navbar/>
                <Jumbotron/>
                
                <Card>
                <BookInfo books={this.state.saveBook} />
                </Card>
            </div>
        )
    }
}

export default SavedBooks;