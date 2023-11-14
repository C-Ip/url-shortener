"use server"

import { POST } from "../api/route";
import md5 = require("md5");

export async function shortenUrl(formData) {

    const key = md5(formData.get("longUrl"));
    const data = {
        "longUrl": formData.get("longUrl"),
        "urlKey": key,
        "shortUrl": "http://localhost/" + key.substring(0, 8)
    }
    POST(data);
}