import { Task } from "@/app/types/task"


export default async function SubTaskPage({
  params,
}: {
  params: { taskId: string };
}) {
  const taskId= params.taskId;

    return ( 
        <div> Aqui tem as sub task dessa task  : {taskId}</div>
    )
}