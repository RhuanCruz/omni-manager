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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject, fetchProjects } from "@/app/utils/api/project";


export function DialogNewProject({ onProjectCreated }: { onProjectCreated: () => void}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [feedback, setFeedback] = useState('');

  const handleSaveNewProject = async () => {
    const newProject = {
      name: name,
      description: description,
    };
    await createProject(newProject)
    
    console.log('Refresh')
    if (onProjectCreated) onProjectCreated();

    setDescription("");
    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">New Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
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
                handleSaveNewProject();
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
