import React from "react";

const style = {
    jumbotron: {
        textAlign: "center",
        backgroundColor: "#4698f0"
    }
}
function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={style.jumbotron}>
            <h1>Google Books</h1>
        </div>

    );
}

export default Jumbotron;