import React from "react";

const styles = {
    form: {
        textAlign: "center",
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
            <button onClick={props.handleFormSubmit} type="submit">Submit</button>
        </form>
    )
}
export default SearchBar;
