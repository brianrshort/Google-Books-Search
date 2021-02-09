import React from "react";
//import { Link } from "react-router-dom";
import { SaveButton } from "./SaveButton";
import { AuthorMap } from "./AuthorMap";

export function Resultsarea(props) {
    const bookArr = props.books;

    return (
        <div>
        {bookArr.map(book => {
            return (
                <div key={book.volumeInfo.title} className="m-3 col-12 container card">
                    <div className="card-body">
            <img className="mx-3" style={{ float: "left"}} src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            <a href={book.selfLink}>
            <h4>{book.volumeInfo.title}</h4>
            </a>         
                <span>
                    <AuthorMap book={book} />
                </span>
            <p>{book.volumeInfo.description}</p>
            <SaveButton book={book} /> 
            </div>
            </div>
            )}
        )}
        </div>

    )
}

