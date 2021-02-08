import React from "react";
import axios from "axios";

export function Searchbar(props) {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     const newBook = e.target.value;
    //     const newBookTwo = document.getElementById("searchTerm").value;
    //     console.log("Here's newBookTwo: " + newBookTwo);
    //     const URL = `https://www.googleapis.com/books/v1/volumes?q=${newBook};`
    //     console.log(URL);
    //     axios.get(URL).then(res => {
    //         //setBooks(res.items);
    //         console.log(res.items);
    //     }).catch(err => {
    //         console.log(err)
    //     }).then(() => {
    //         //setTerm("");
    //     })
    // }
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