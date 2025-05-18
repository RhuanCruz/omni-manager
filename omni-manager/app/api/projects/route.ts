import { NextRequest, NextResponse } from 'next/server';
import { Project } from '@/app/types/project';
import { createClient } from '@/lib/supabase';



export async function GET(request: NextRequest) {
   const supabase = createClient()
   const {data, error} = await (await supabase).from('projects').select('*')
   
   if(error) {
        console.error("Error read project:", error);
        return NextResponse.json({ error: "Error read projects" }, { status: 500 });
   }
    return NextResponse.json({ projects : data });
}


export async function POST(request: NextRequest) {
    
    const supabase = createClient();
   const body = await request.json();
    const Project: Project = {
        name: body.name,
        description: body.description
    };

    const { data, error } = await(await supabase)
          .from('projects')
          .insert([
                {
                 name: Project.name,
                 description: Project.description,
                },
          ]);
    if (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ error: "Error creating project" }, { status: 500 });
    }

    console.log("Request to create a new project", Project);
    return NextResponse.json({ message: "Request to create a new project" });
}

