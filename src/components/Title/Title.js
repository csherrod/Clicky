import React from "react";
import "./Title.css";

const Title = props => (
    <div className="jumbotron">
        <h1 className="display-4">Clicky Game
        <br />
        with React
        {/* <img src={props.image} /> */}
            </h1>
        <button type="button" className="btn btn-outline-success">Start</button>
        <hr />
        <button type="button" className="btn btn-outline-primary">Curent Score: </button>
        <button type="button" className="btn btn-outline-danger">High Score: </button>
    </div>
)

export default Title;