import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Saved extends Components {
    // Need componentsdid mount function to immediately display saved books in database when page loads.
    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        //  Write function in API folder to make request for saved books in DB.
        API.
 }

    render() {
        return (

    );
    }


}

export default Saved;
