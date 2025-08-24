import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { ITaskRepository } from 'src/domain/repositories/task-repository.interface';
import { ITask } from 'src/domain/interface/task.interface';
export declare class TasksRepositoryService extends Repository<TaskEntity> implements ITaskRepository {
    constructor(dataSource: DataSource);
    findAll(userId: number): Promise<ITask[]>;
    findById(userId: number, id: number): Promise<ITask>;
    add(payload: DeepPartial<ITask>): Promise<ITask>;
    updateById(id: number, payload: DeepPartial<ITask>): Promise<import("typeorm").UpdateResult>;
}
