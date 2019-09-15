import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import API from "../utils/API";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Search extends Component {
    state = {
        books: [],
        search: "",
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    };
    componentDidMount() {
        this.renderBooks("Preston and Child");
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
        if (this.state.volumeInfo.title && this.state.volumeInfo.author) {
            API.saveBook({
              title: this.state.volumeInfo.title,
              author: this.state.volumeInfo.author,
              description: this.state.volumeInfo.description,
              image: this.state.volumeInfo.imageLinks.thumbnail,
              link: this.state.volumeInfo.infoLink
            })
              .catch(err => console.log(err));
          }
      };

    // Save button is created. Need to figure out how to save to database using handleinputchange function
    render() {
        {console.log(this.state.books)}
        return (
            <div>
                <SearchBar 
                 value={this.state.search}
                 handleInputChange={this.handleInputChange}
                 handleFormSubmit={this.handleFormSubmit}
                 />
                {this.state.books.map(book => (
                    <Results
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