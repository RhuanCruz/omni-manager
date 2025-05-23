export type Project = {
    id?: string;
    name?: string;
    description?: string;
    created_at?: Date;
}

export type ListProjects = {
    projects?: Project[];
}