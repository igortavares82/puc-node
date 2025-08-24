import { DeepPartial } from "typeorm";
import { IProject } from "../interface/project.interface";

export interface IProjectsRepository {
    findAll(userId: number): Promise<IProject[]>;
    findById(userId: number, id: number): Promise<IProject | null>;
    add(payload: DeepPartial<IProject>);
}