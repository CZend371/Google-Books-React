import React from "react";

const styles = {
    box: {
        margin: 20,
        textAlign: "center",
        border: "2px solid black"
    },
    img: {
        margin: 10,
        marginLeft: 100
    },
    ul: {
        margin: 20
    },
    button: {
        margin: 10,
        float: "right"
    }
};

function SavedBooksCont(props) {
    return (
        <div className="saved-books">
            <ul>
                <ul><img src={props.image} style={styles.img} alt=""></img></ul>
                <ul><a href={props.link}>Click here to buy!</a></ul>
                <ul><strong>Title: {props.title}</strong></ul>
                <ul><strong>Author: {props.author}</strong></ul>
                <ul style={styles.ul}>Description {props.description}</ul>
            </ul>
        </div>
    )
}
export default SavedBooksCont;