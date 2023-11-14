"use client";

import { useState } from 'react';
import { shortenUrl } from '../lib/actions';

export default function ShortenForm() {
    const saltRounds = 10;

    const [longUrl, setLongUrl] = useState("");

    function handleChange(event) {
        const { value } = event.target;
        setLongUrl(() => {
            return value;
        });
    }

    function createShortUrl(event) {
        shortenUrl(event);
    }
    

    return (
        <div className="flex">
            <form action={ createShortUrl }>
                <input id="longUrl" name="longUrl" value={longUrl.value} onChange={handleChange} placeholder="Enter url here..." className="border-2 p-2 m-2"></input>
                <button type="submit" className=" text-slate-50 p-2 border-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-200">Generate</button>
            </form>
        </div>
    )
}