import { InstanceLinksHost } from "@nestjs/core/injector/instance-links-host";
import { IProject } from "./project.interface";
import { ITask } from "./task.interface";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    projects: IProject[];
    tasks: ITask[];
}