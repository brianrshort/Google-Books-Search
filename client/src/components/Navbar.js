import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/search">BookZone</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/saved">Saved</Link>
                </li>
                </ul>
            </div>
        </nav>
        </React.Fragment>
    )
}