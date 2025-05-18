import ButtonNavigateBack from "@/components/ButtonNavigateBack";
import { DialogNewProjectTask } from "@/components/DialogNewProjectTask";
import { createClient } from "@/lib/supabase";
import { Project } from "@/app/types/project";
import { TableProjectTask } from "@/components/TableProjectTask";
import { DialogDeleteProject } from "@/components/DialogDeleteProject";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const projectId = await params.projectId;

  const supabase = createClient();
  const { data: project } = await (await supabase)
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  const { data: tasks } = await (await supabase)
    .from("tasks")
    .select("*")
    .eq("projeto_id", projectId)
    .order("criado_em", { ascending: true });

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen  font-[family-name:var(--font-geist-sans)]  gap-8 p-8">
      {
        // TODO: Add a loading state
      }
      <div className="w-full flex justify-between items-start">
        <ButtonNavigateBack></ButtonNavigateBack>
      </div>

      <div className="w-full min-w-md  min-h-24 flex justify-between items-start ">
        <div className="flex flex-col h-fit max-w-3xl">
          <h1 className="text-2xl font-bold text-white"> {project.name}</h1>
          <p className="text-md font-medium text-zinc-500">
            {project.description}
          </p>
        </div>
        <DialogNewProjectTask></DialogNewProjectTask>
      </div>
      <TableProjectTask tasks={tasks || []}></TableProjectTask>
      <div className="w-full flex justify-end items-center"><DialogDeleteProject project={project}></DialogDeleteProject></div>
    </div>
  );
}
