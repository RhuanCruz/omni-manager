import { createClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params :{id: string}}) {
    const id = await params
    const body = await request.body

    const supabase = createClient();

    
    
}


export async function GET(request: NextRequest, { params }: { params :{id: string}}) {
    const id = await params
    const body = await request.body

    const supabase = createClient();
    const { data, error } = await (await supabase)
        .from("tasks")
        .select("*")
        .eq("projeto_id", id)
        .single();

   if(error) {
        console.error("Error read tasks:", error);
        return NextResponse.json({ error: "Error read taks" }, { status: 500 });
      }
       return NextResponse.json({ tasks : data });
}

