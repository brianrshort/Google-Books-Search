import React from "react";

export function Searchbar(props) {
    return (
        <form className="mx-3 p-3" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label for="searchTerm">Search for Books</label>
                <input type="text" className="form-control" id="searchTerm" placeholder="Title or Keyword" />
                <button className="mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}