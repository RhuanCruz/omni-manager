import { createClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";
import { Project} from '@/app/types/project'


export async function PUT(request: NextRequest, { params }: { params :{id: string}}) {
    const { id } = await params;
    
    const supabase = createClient();

    const body = await request.json();
    const Project: Project = {
        name: body.name,
        description: body.description
    };

    const { data, error } = await(await supabase)
          .from('projects')
          .update([
                {
                 name: Project.name,
                 description: Project.description,
                },
          ]).eq('id', id);
    if (error) {
        console.error("Error update project:", error);
        return NextResponse.json({ error: "Error update project" }, { status: 500 });
    }

    console.log("Request to update a project", Project);
    return NextResponse.json({ message: "Request to update a project" , status: 200});

}

export async function DELETE(request : NextRequest, {params}: { params : { id : string}}) {
   const { id } = await params;
    const supabase = createClient();

    const {data , error} = await (await supabase).from('projects').delete().eq('id', id)

    if(error) {
        return NextResponse.json({ error: "Error delete project" }, { status: 500 });
    }

    return NextResponse.json({ message: "Request to delete a project" , status: 200});
}