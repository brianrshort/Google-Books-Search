import React from 'react';

export function AuthorMap(props) {
    const writers = props.book.volumeInfo.authors ;

    return (
        <div>
            { !writers ? <p>No authors listed</p> :
                <p>Authors --    
                    {props.book.volumeInfo.authors.map(auth => {
                        return (
                            <span key={auth}>
                                <span>{auth}</span><span> // </span>
                            </span>
                        )
                    }
                    )}
                </p>            
            }    
        </div>
    )
}


