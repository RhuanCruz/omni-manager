'use client'
import { Copy } from "lucide-react";

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
import { use, useCallback, useState } from "react";

export function DialogNewProjectTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const handleSaveNewProject = async () => {
    const newProject = {
      name: name,
      description: description,
    };
    
    console.log(newProject);
    setDescription('');
    setName('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Title
            </Label>
            <Input
              id="name"
              placeholder="Task title"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="link" className="sr-only">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Task Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size={120
              
              }
            />
          </div>
        </div>
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
              handleSaveNewProject()
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
