export type Task = {
    id: string,
    titulo : string,
    projeto_id : string, 
    descricao : string,
    status :string, 
    tag : string ,
    prazo  : string,
    iniciar_em :string ,
    criado_em : Date
}

export type ListTasks = { 
    tasks : Task[]
}