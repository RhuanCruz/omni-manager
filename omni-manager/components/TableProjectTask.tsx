"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import { ListProjects, Project } from "@/app/types/project";
import { ChevronRight, SquarePen } from "lucide-react";
import { DialogEditProject } from "./DialogEditProject";
import { projectNew } from "next/dist/build/swc/generated-native";
import { ListTasks, Task } from "@/app/types/task";

export function TableProjectTask({ tasks }: ListTasks) {

  function getTagClass(tag: string) {
    switch (tag) {
      case "Feature":
        return "bg-purple-950 flex justify-center items-center rounded-3xl text-purple-500";
      case "Issue":
        return "bg-red-950 flex justify-center items-center rounded-3xl text-red-500";
      case "Bug":
        return "bg-yellow-950 flex justify-center items-center rounded-3xl text-yellow-500";
      default:
        return "";
    }
  }

  function getStatusClass(status: string) {
    switch (status) {
      case "Backlog":
        return "bg-zinc-800 flex justify-center items-center rounded-3xl text-zinc-300";
      case "In Progress":
        return "bg-blue-950 flex justify-center items-center rounded-3xl text-blue-500";
      case "Review":
        return "bg-orange-950 flex justify-center items-center rounded-3xl text-orange-500";
      case "Completed":
        return "bg-green-950 flex justify-center items-center rounded-3xl text-green-500";
      default:
        return "";
    }
  }

  return (
    <div className="min-w-full rounded-lg overflow-hidden shadow-md ">
      <Table>
        <TableCaption>A list of your tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[200px] overflow-ellipsis">
              <Checkbox />
            </TableHead>
            <TableHead className="max-w-[200px] overflow-ellipsis">
              Task
            </TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tag</TableHead>
            <TableHead>Start in</TableHead>
            <TableHead>End in</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task: Task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{task.titulo}</TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                {task.descricao}
              </TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                <p className={getStatusClass(task.status)}>{task.status}</p>
              </TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                <p className={getTagClass(task.tag)}>{task.tag}</p>
              </TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                {task.criado_em
                  ? new Date(task.iniciar_em).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  : "Data inválida"}
              </TableCell>
              <TableCell>
                {task.prazo
                  ? new Date(task.prazo).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  : "Data inválida"}
              </TableCell>

              <TableCell>
                <Link
                  href={`${task.projeto_id}/project-task/${task.id}`}
                  className="text-primary border-b-1 hover:border-primary transition-all delay-75"
                >
                  <ChevronRight />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
