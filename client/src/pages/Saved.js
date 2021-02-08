import React, { useState, useEffect } from "react";
import axios from 'axios';

export function Saved() {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        axios.get("/api/books").then(res => {
            console.log(res.data);
            setDisplay(res.data);
            console.log(display);
            //console.log(res.data.items);
        }).catch(err => {
            console.log(err)
        })
    }, [display]);

    return (
        <div>
        {display.map(volume => {
            return (
                <div className="m-3 col-12 container card">
                    <div className="card-body">
                    <img className="mx-3" style={{ float: "left"}} src={volume.image} alt="Book cover" />
                    <a href={volume.link}>
                    <h4>{volume.title}</h4>
                    </a>
                    <span>Authors -- </span>
                    {volume.authors.map(auth => {
                        return (
                <span>
                    <span>{auth}</span><span> // </span>
                    </span>
            )})}
            <p>{volume.description}</p>
            </div>
            </div>
            )
        })}
        </div>
    )

}


