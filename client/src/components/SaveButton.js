import React, {useState} from "react";
import axios from 'axios';

export function SaveButton(props) {
    const [bookEntry, setBookEntry] = useState({
        title: props.book.volumeInfo.title,
        link: props.book.selfLink,
        image: props.book.volumeInfo.imageLinks.thumbnail,
        authors: props.book.volumeInfo.authors,
        description: props.book.volumeInfo.description
    });

    function onClick() {
        console.log(bookEntry)
        axios.post("/api/book-post", bookEntry)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <button onClick={onClick}>Save Book</button>
    )
}