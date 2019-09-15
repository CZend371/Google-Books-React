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

function Results(props) {
    return (
        <div className="container">
            <div className="box" style={styles.box}>
                <button className="btn btn-info" style={styles.button} type="submit" onClick={props.save}>Save</button>
                <ul>
                    <ul><img src={props.image} style={styles.img}></img></ul>
                    <ul><a href={props.link}>Click here to buy!</a></ul>
                    <ul><strong>Title: {props.title}</strong></ul>
                    <ul><strong>Author: {props.author}</strong></ul>
                    <ul style={styles.ul}>Description {props.description}</ul>
                </ul>
            </div>
        </div>
    )
}
export default Results;