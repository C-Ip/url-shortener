"use server"

import { POST } from "../api/route";
import { GET } from "../[urlKey]/route";
import md5 from "md5"; 

export async function shortenUrl(formData) {

    const key = md5(formData.get("url")).substring(0, 8);

    const data = {
        "longUrl": formData.get("url"),
        "urlKey": key,
        "shortUrl": "http://localhost:3000/" + key
    }
    POST(data);
}

export async function getUrl(data) {
    const { urlKey } = data;

    const info = {
        "urlKey": urlKey
    }

    const url = GET(info, data);
    return url;
}