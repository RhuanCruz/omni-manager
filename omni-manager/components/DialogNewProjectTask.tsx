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
import { use, useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePicker } from "./DatePicker";

export function DialogNewProjectTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [tag , setTag] = useState("Feature");
  const [startDate, setStartDate] = useState<Date>();
  
  const [endDate, setEndDate] = useState<Date>();


  const handleSaveNewProjectTask = async () => {
    const newProject = {
      name: name,
      description: description,
    };

    console.log(newProject);
    setDescription("");
    setName("");
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
              size={120}
            />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Backlog">Backlog</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Review">Review</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={tag} onValueChange={setTag}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Feature">Feature</SelectItem>
                <SelectItem value="Bug">Bug</SelectItem>
                <SelectItem value="Issue">Issue</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-row  justify-between items-center gap-1">
              <div className="flex w-1/2">
                <DatePicker  placeholder='Start in' date={startDate} setDate={setStartDate}></DatePicker>
              </div>
              <div className="flex w-1/2">
                <DatePicker placeholder='End in' date={endDate} setDate={setEndDate}></DatePicker>
              </div>
            </div>
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
                handleSaveNewProjectTask();
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
