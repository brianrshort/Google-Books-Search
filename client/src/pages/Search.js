import React, { useState } from 'react';
import axios from 'axios';
import { Searchbar } from "../components/Searchbar";
import { Resultsarea } from "../components/Resultsarea";

export function Search() {
    const [books, setBooks] = useState([]);
    const [term, setTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e);
        //console.log(e.target.value);
        const newBook = e.target[0].value;
        const newBookTwo = document.getElementById("searchTerm");
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${newBook};`
        console.log(URL);
        axios.get(URL).then(res => {
            setBooks(res.data.items);
            //console.log(res.data.items);
            console.log(books);
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