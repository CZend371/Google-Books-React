import React, { Component } from "react";
import API from "../utils/API";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooksCont from "../components/SavedBooksCont";

class Saved extends Component {
    state = {
        books: [],
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
                this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <SavedBooksCont>

            </SavedBooksCont>
        );
    }


}

export default Saved;
