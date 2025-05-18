import { Project } from "@/app/types/project";

export async function fetchProjects() {
    const response = await fetch("/api/projects", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    
    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }
    
    const data = await response.json();
    return data.projects;
}

export async function createProject(project: Project) {

    console.log("Creating project", project);
    const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if (!response.ok) {
        throw new Error("Failed to create project");
    }

    const data = await response.json();
    return data;
}

export async function updateProject(project: Project) {

    console.log("Update a project", project);
    const response = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if (!response.ok) {
        throw new Error("Failed to update a project");
    }

    const data = await response.json();
    return data;
}

export async function deleteProject(project :Project){ 
     const response = await fetch(`/api/projects/${project.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if (!response.ok) {
        throw new Error("Failed to delete a project");
    }

    const data = await response.json();
    return data;
}