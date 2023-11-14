import { NextResponse } from "next/server";
import connectMongoDB from "../lib/mongodb";
import ShortenUrl from "../lib/definitions";

export async function POST(req) {
    console.log(req);
    await connectMongoDB;
    await ShortenUrl.create({longUrl: req.longUrl, urlKey: req.urlKey, shortUrl: req.shortUrl});
    return NextResponse.json({longUrl: req, shortUrl: "https://google.com"}, {status: 201});
}