import { NextResponse } from "next/server";

import { Page, Station } from "@/lib/dev-academy-assignment";

export const BASE_URL = process.env.NEXT_BACKEND_URL;

export const GET = async () => {
    const res = await fetch(`${BASE_URL}/stations`);
    const data: Page<Station> = await res.json();

    return NextResponse.json(data);
};
