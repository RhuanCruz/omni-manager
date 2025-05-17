import { createClient } from "@/lib/supabase";

import { TableProjects } from "@/components/TableProjects";

import { DialogNewProject } from "@/components/DialogNewProject";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Manager yout Projects simplely",
};

export default async function Projects() {
  const supabase = createClient();

  const { data: projects } = await (await supabase)
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen  font-[family-name:var(--font-geist-sans)]  gap-8 p-8">
      <div className="flex gap-8 w-full justify-between items-start ">
        <h1 className="font-bold text-3xl">Projects</h1>
        <DialogNewProject></DialogNewProject>
      </div>
      <TableProjects projects={projects ?? []}></TableProjects>
    </div>
  );
}
