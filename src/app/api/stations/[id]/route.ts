import { NextResponse } from "next/server";

import { Station } from "@/lib/dev-academy-assignment";

const BASE_URL = process.env.NEXT_BACKEND_URL;

export const GET = async (_request: Request, { params }: { params: { id: number } }) => {
    const { id } = params;
    if (!id || isNaN(id)) {
        return NextResponse.json({ error: "Invalid station id", timestamp: new Date() }, { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/stations/${id}`);
    if (!res.ok) {
        return NextResponse.json(res.json(), { status: res.status });
    }
    const data: Station = await res.json();

    return NextResponse.json(data);
};
