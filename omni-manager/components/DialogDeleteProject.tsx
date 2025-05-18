'use client'
import { Trash } from "lucide-react";

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
import { deleteProject } from "@/app/utils/api/project";
import { Project } from "@/app/types/project";
import { useRouter } from "next/navigation";

export function DialogDeleteProject( { project } :{ project: Project}) {
  const router = useRouter();
  const handleConfirmDeleteProject = async () => {
    
    const data = await deleteProject(project)

    //   return data;
    console.log(project);
    router.back()
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <Button variant="outline" className="text-red-600 hover:text-red-600"><Trash></Trash>Delete Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          
          <DialogClose asChild>
            <Button
            type="button"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => {
              handleConfirmDeleteProject()
            }}
          >
            Yes
          </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
