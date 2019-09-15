import React, { Component } from "react";
import API from "../utils/API";
// import Search from "../pages/Search";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooksCont from "../components/SavedBooksCont";

class Saved extends Component {
    state = {
        savedBooks: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    };
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ savedBooks: res.data.items }),
                console.log(this.state.savedBooks)
            )
            .catch(err => console.log(err));
        console.log(this.state.savedBooks);
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>

                <SavedBooksCont
                    savedBooks={this.state.savedBooks}
                    handleDeleteButton={this.deleteBook}
                // key={book.id}
                // id={book.id}
                // image={book.volumeInfo.imageLink.thumbnail}
                // link={book.volumeInfo.infoLink}
                // title={book.volumeInfo.title}
                // author={book.volumeInfo.author}
                // description={book.volumeInfo.description}
                />

                }
            </div>
        )
    }


}

export default Saved;
