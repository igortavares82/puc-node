import { IProject } from "src/domain/interface/project.interface";
import { ITask } from "src/domain/interface/task.interface";
import { IUser } from "src/domain/interface/user.interface";
export declare class TaskEntity implements ITask {
    id: number;
    name: string;
    status: "pending" | "completed";
    project: IProject;
    user: IUser;
}
