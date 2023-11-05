import { NextResponse } from "next/server";

import { Station } from "@/lib/dev-academy-assignment";

const BASE_URL = process.env.NEXT_BACKEND_URL;

export const GET = async () => {
    const res = await fetch(`${BASE_URL}/stations`);
    const data: Station = await res.json();

    return NextResponse.json(data);
};
