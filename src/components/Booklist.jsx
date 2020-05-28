//Booklist.jsx
import React, { useState, useEffect } from 'react';



const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            {/* <p>this is {JSON.stringify(bookData)} list conponent</p> */}
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) => <li key={index}> {x.volumeInfo.title} <img src={x.volumeInfo.imageLinks.thumbnail} alt='画像'></img></li>)
                }
            </ul>
        </div>
    );
}
export default Booklist;