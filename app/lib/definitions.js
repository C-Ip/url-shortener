// This file contains type definitions for your data.
// MongoDB Schemas will reside in this file.

import mongoose from "mongoose";

const shortenUrlSchema = new mongoose.Schema ({
    urlKey: String,
    longUrl: String,
    shortUrl: String
});

const ShortenUrl = mongoose.models.ShortenUrl || mongoose.model("ShortenUrl", shortenUrlSchema);

export default ShortenUrl;