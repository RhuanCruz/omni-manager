import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createClient } from "@/lib/supabase";
import { TableProjects } from "@/components/Table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogCloseButton } from "@/components/DialogNewProject";


export default async function Projects() {
  const supabase = createClient();
  const { data: projects } = await (await supabase)
    .from("projects")
    .select("*");


  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen  font-[family-name:var(--font-geist-sans)]  gap-8 p-8"> 
      <div className="flex gap-8 w-full justify-between items-start ">
        <h1 className="font-bold text-3xl">Projects</h1>
        <DialogCloseButton></DialogCloseButton>
      </div>
      <TableProjects projects={projects}></TableProjects>
    </div>
  );
}
