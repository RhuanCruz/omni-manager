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
import { use } from "react";

interface Project {
  id: string | number;
  name: string;
  description: string;
  created_at: Date;
  // Add other fields if needed
}

export function TableProjects({ projects }: any) {
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
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {projects?.map((project: Project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="max-w-2xl overflow-clip">
                {project.description}
              </TableCell>
              <TableCell>
                {project.created_at
                  ? new Date(project.created_at).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })
                  : "Data inválida"}
              </TableCell>
              <TableCell>
                <Link
                  href={`projects/${project.id}`}
                  className="text-primary border-b-1 hover:border-primary transition-all delay-75"
                >
                  See Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
