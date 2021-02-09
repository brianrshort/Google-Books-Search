import React, { useState } from 'react';
import axios from 'axios';
import { Searchbar } from "../components/Searchbar";
import { Resultsarea } from "../components/Resultsarea";

export function Search() {
    const [books, setBooks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = e.target[0].value;
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${newBook};`
        axios.get(URL).then(res => {
            setBooks(res.data.items);
        }).catch(err => {
            console.log(err)
        }).then(() => {
            e.target.value = "";
        })
    }

    return (
        <div>
            <Searchbar handleSubmit={handleSubmit} />
            <Resultsarea books={books} /> 
        </div>
    )
}