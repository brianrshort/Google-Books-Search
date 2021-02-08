import React from "react";

export function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">BookZone</h1>
            <p className="lead">Welcome to the BookZone!</p>
            <hr className="my-4" />
            <p>Here, you can search Google Books API for new books to read and save them
            to a community repository.</p>
        </div>
    )
}