'use client'


import { TableProjects } from "@/components/TableProjects";

import { DialogNewProject } from "@/components/DialogNewProject";
import { use, useEffect, useState } from "react";
import { Metadata } from "next";
import { fetchProjects } from "../utils/api/project";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";



export default function Projects() {
  const router = useRouter();
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchAndRefresh = async () => {
      const projects = await fetchProjects();
      setProjects(projects)
    };
    fetchAndRefresh();
    router.refresh();
    
  }, []);


  return (
    <div className="flex flex-col w-full items-center justify-start min-h-screen  font-[family-name:var(--font-geist-sans)]  gap-8 p-8">
      <div className="flex gap-8 w-full justify-between items-start ">
        <h1 className="font-bold text-3xl">Projects</h1>
        <DialogNewProject onProjectCreated={ async () => { 
          const projects = await fetchProjects();
          setProjects(projects)
        }}></DialogNewProject>
      </div>
      <TableProjects projects={projects ?? []}></TableProjects>
    </div>
  );
}
