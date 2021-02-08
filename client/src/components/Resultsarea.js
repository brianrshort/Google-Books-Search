import React from "react";
import { Link } from "react-router-dom";
import { SaveButton } from "./SaveButton";

export function Resultsarea(props) {
    const bookArr = props.books;
    return (
        <div>
        {bookArr.map(book => {
            return (
                <div className="m-3 col-12 container card">
                    <div className="card-body">
            <img className="mx-3" style={{ float: "left"}} src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            <a href={book.selfLink}>
            <h4>{book.volumeInfo.title}</h4>
            </a>
            <span>Authors -- </span>
            {book.volumeInfo.authors.map(auth => {
                return (
                <span>
                    <span>{auth}</span><span> // </span>
                    </span>
            )})}
            <p>{book.volumeInfo.description}</p>
            <SaveButton book={book} /> 
            </div>
            </div>
            )}
        )}
        </div>

    )
}

//Title authors image description link