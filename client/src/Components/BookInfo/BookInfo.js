import React, { Component } from "react";
import API from "../../utils/API";

class BookInfo extends Component {

    state = {
        saveBook: [],
    }

    componentDidMount() {
        API.saveBook()
            .then(saveBook => this.setState({ saveBook: saveBook }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.saveBook.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deleteBook => this.setState({ saveBook: this.state.saveBook.filter(book => book._id !== deleteBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(saveBook => this.setState({ saveBook: this.state.saveBook.concat([saveBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center"></h1>
                ) : (
                    <div class="container">
                        <div>
                            <h2>Results</h2>
                        </div>
                    {this.props.books.map(result => (
                        <div className="card mb-3" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                <img alt={result.title} className="img-fluid" src={result.image} />
                                </div>
                                 <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">{result.title} by {result.authors}</h5>
                                    <p className="card-text">{result.description}</p>
                                    <div>
                                    <a href={result.link} className="btn indigo darken-1" target="_blank" >
                                        View
                                        </a>

                                    <button onClick={this.props.handleButtonClick} className="btn indigo darken-4">
                                        {this.state.saveBook.map(book => book.id).includes(result.id) ? "Unsave" : "Save"}
                                        </button>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default BookInfo;