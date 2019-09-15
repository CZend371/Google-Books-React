import React from "react";

const styles = {
    box: {
        margin: 20,
        marginLeft: 200,
        textAlign: "center",
        border: "2px solid black"
    },
    img: {
        margin: 10
    }
};

function Results(props) {
    return (
        <div className="container">
            <div className="box" style={styles.container}>
                <ul>
                    <ul><img src={props.image} style={styles.img}></img></ul>
                    <ul><a href={props.link}>Click here to buy!</a></ul>
                    <ul>Title: {props.title}</ul>
                    <ul>Author: {props.author}</ul>
                    <ul>Description {props.description}</ul>
                </ul>
            </div>
        </div>
    )
}
export default Results;