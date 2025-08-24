import { IProject } from "src/domain/interface/project.interface";
import { ITask } from "src/domain/interface/task.interface";
import { IUser } from "src/domain/interface/user.interface";
export declare class ProjectEntity implements IProject {
    id: number;
    name: string;
    description: string;
    user: IUser;
    tasks: ITask[];
}
