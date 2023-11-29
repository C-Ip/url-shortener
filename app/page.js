"use client";

import { useState } from 'react';
import { shortenUrl } from './lib/actions';
import ShortenForm from "./ui/shorten-form";

export default function Home() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function handleChange(event) {
    const { value } = event.target;
      setUrl(() => {
        return value;
      });
  }

  function createShortUrl(event) {
    const shortUrl = shortenUrl(event);
      setShortUrl(() => {
        return shortUrl;
      })
  }

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center place-content-center">
      <p className=" text-3xl p-5">URL Shortener</p>
      <p className="p-5">Shorten any website url to make it easier to share!</p>
      <ShortenForm 
        handleSubmit={ createShortUrl }
        handleChange={ handleChange }
        url = { url }
        shortUrl={ shortUrl }/>
    </main>
  )
}
