import { NextResponse } from "next/server";
import connectMongoDB from "../lib/mongodb";
import ShortenUrl from "../lib/definitions";

export async function POST(req) {
    await connectMongoDB();
    try {
        ShortenUrl.create({longUrl: req.longUrl, urlKey: req.urlKey, shortUrl: req.shortUrl});
        return NextResponse.json({longUrl: req.longUrl, shortUrl: req.shortUrl, key: req.urlKey}, {status: 201, statusText: "Record created."});
    } catch (error) {
        return NextResponse.json({message: "Record creation failed."}, {status: 400, statusText: "No record created."});

    }    
}

export async function GET(req) {
    await connectMongoDB();
    const query = await ShortenUrl.findOne({urlKey: urlKey}).exec();
}