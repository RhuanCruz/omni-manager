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
import Link from "next/link";
import { ListProjects, Project } from "@/app/types/project";
import { ChevronRight, SquarePen  } from "lucide-react";
import { DialogEditProject } from "./DialogEditProject";
import { projectNew } from "next/dist/build/swc/generated-native";
import { ListTasks, Task } from "@/app/types/task";

export function TableProjectTask({ tasks }: ListTasks) {
  return (
    <div className="min-w-full rounded-lg overflow-hidden shadow-md ">
      <Table>
        <TableCaption>A list of your projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[200px] overflow-ellipsis">
              Project
            </TableHead>
            <TableHead className="max-w-[200px]">Description</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task: Task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.titulo}</TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                {task.descricao}
              </TableCell>
              <TableCell>
                {task.criado_em
                  ? new Date(task.criado_em).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  : "Data inválida"}
              </TableCell>
              <TableCell>
                <DialogEditProject project={task}></DialogEditProject>
              </TableCell>
              <TableCell>
                <Link
                  href={`projects/${task.id}`}
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
