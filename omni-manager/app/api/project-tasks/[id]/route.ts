import { NextRequest } from "next/server";

export async function POST(request: NextRequest, { params }: { params :{id: string}}) {
    const id = await params
    const body = await request.body

    
}