export interface IProject {
    designTasks: ITask[],
    frontTasks: ITask[],
    developTasks: ITask[],
    boardTasks: ITask[]
}
export interface ITask {
    id: number,
    name: string,
    description: string,
    effectAllowed: string,
    disable: boolean,
    handle: boolean
}