import { NextResponse } from "next/server";
import connectMongoDB from "../lib/mongodb";
import ShortenUrl from "../lib/definitions";

export async function GET(req, context: { params }) {
    await connectMongoDB();
    const { urlKey } = context.params;

    try {
        const query = await ShortenUrl.findOne({urlKey: urlKey}).exec();
        return NextResponse.redirect(query.longUrl, {status: 308, statusText: "Successfully redirected."});
    } catch (error) {
        return NextResponse.json({message: "Failed to redirect."}, {status: 400, statusText: "Missing or incorrect field: url"});
    }
}
