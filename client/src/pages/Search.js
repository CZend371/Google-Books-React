import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import API from "../utils/API";
// import Saved from "../pages/Saved";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Search extends Component {
    state = {
        books: [],
        search: ""
    };
    componentDidMount() {
        this.renderBooks("Harry Potter");
    }

    renderBooks = (query) => {
        API.searchBooks(query)
            .then(res =>
                this.setState({ books: res.data.items }),
                console.log(this.books)
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.renderBooks(this.state.search);
    };

    save = event => {
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(console.log("book saved!"))
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.books.map(book => (
                    <Results
                        key={book.id}
                        id={book.id}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.infoLink}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        onClick={this.save}
                    />
                ))}
            </div>
        )
    }
}

export default Search;