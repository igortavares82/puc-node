import { DeepPartial } from "typeorm";
import { ITask } from "../interface/task.interface";

export interface ITaskRepository {
    findAll(userId: number): Promise<ITask[]>;
    findById(userId: number, id: number): Promise<ITask>;
    add(payload: DeepPartial<ITask>): Promise<ITask>;
    updateById(id: number, payload: DeepPartial<ITask>);
}