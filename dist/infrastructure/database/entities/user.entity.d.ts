import { IProject } from "src/domain/interface/project.interface";
import { ITask } from "src/domain/interface/task.interface";
import { IUser } from "src/domain/interface/user.interface";
export declare class UserEntity implements IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    projects: IProject[];
    tasks: ITask[];
}
