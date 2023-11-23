"use client";

import { useState } from 'react';
import { shortenUrl } from '../lib/actions';

export default function ShortenForm() {

    const [url, setUrl] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setUrl(() => {
            return value;
        });
    }

    function createShortUrl(event) {
        shortenUrl(event);
    }
    
    return (
        <div>
            <div className="flex">
                <form action={ createShortUrl }>
                    <input id="url" name="url" value={url.value} onChange={handleChange} placeholder="Enter url here..." className="border-2 p-2 m-2"></input>
                    <button type="submit" disabled={url.length > 0 ? false : true } className={url.length > 0 ? "enabled-btn active:scale-110 active:bg-indigo-500" : "disabled-btn"}>Generate</button>
                </form>
            </div>
            <p></p>
        </div>
    )
}