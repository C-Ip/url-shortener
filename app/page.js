"use client";

import { useState } from 'react';
import { shortenUrl, deleteRecord } from './lib/actions';
import Form from "./ui/form";

export default function Home() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [deleteUrl, setDeleteUrl] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setUrl(() => {
      return value;
    });
  }

  function handleDeleteUrl(event) {
    setDeleteUrl(() => {
      return event.target.value;
    });
  }

  function createShortUrl(event) {
    const shortUrl = shortenUrl(event);
    setShortUrl(() => {
      return shortUrl;
    });
  }

  function handleDelete(event) {
    deleteRecord(event);
  }

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center">
      <p className=" text-3xl p-5">URL Shortener</p>
      <div className="flex min-h-screen max-h-screen flex-col items-center">
        <div className="grid grid-cols-5 grid-rows-4 gap-4">
          <div className="form shadow-xl col-start-1 col-end-3">
            <p className="px-2">Shorten any website url to make it easier to share!</p>
            <Form
              handleSubmit={createShortUrl}
              handleChange={handleChange}
              btnName="Generate"
              placeholder="Enter url here ..."
              url={url}
            />
            {shortUrl === "" ? <></> : <p className="px-2 w-auto">Short URL: {shortUrl}</p>}
          </div>
          <div className="form shadow-xl col-end-6 col-span-2">
            <p className="px-2">Delete an existing short url.</p>
            <Form
              handleSubmit={handleDelete}
              handleChange={handleDeleteUrl}
              btnName="Delete"
              placeholder="Enter url to delete ..."
              url={deleteUrl}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
