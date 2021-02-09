import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return(
        <React.Fragment>
        <div className="container mb-5">
            <div className="col-6">
                <Link to="/search">
                <button className="btn-lg">Search</button>
                </Link>
                <Link to="/saved">
                <button className="btn-lg m-5">Saved</button>
                </Link>
            </div>
        </div>
        </React.Fragment>
    )
}