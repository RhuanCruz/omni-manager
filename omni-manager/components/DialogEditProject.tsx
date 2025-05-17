"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { use, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SquarePen } from "lucide-react";
import { Project } from "@/app/types/project";
import { createProject, updateProject } from "@/app/utils/api/project";

export function DialogEditProject({ project }: { project: Project }) {
   const [open, setOpen] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  
  const router = useRouter();
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if(open) {
      setName(project.name)
      setDescription(project.description)
    }
  }, [open, project]);

  const handleEditProject = async () => {
    const Project = {
      id: project.id,
      name: name,
      description: description,
    };
    const data = await updateProject(Project)

    if (data.status != 200) {
      setFeedback('Erro ao editar')
    }
    
    console.log(Project);
    router.refresh();
    setDescription("");
    setName("");
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SquarePen className="h-4"></SquarePen >
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Project</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Project Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="link" className="sr-only">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Project Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        {feedback && <div>{feedback}</div>}
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              onClick={() => {
                handleEditProject();
              }}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
