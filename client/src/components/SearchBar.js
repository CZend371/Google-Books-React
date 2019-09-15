import React from "react";

const styles = {
    form: {
        textAlign: "center",
    },
    button: {
        margin: 10
    }
}
function SearchBar(props) {
    return (
        <form style={styles.form}>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                type="text"
                name="search"
                placeholder="Search for a book!">
            </input>
            <button className="btn btn-primary" onClick={props.handleFormSubmit} style={styles.button} type="submit">Search</button>
        </form>
    )
}
export default SearchBar;
