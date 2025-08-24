import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { ITaskRepository } from 'src/domain/repositories/task-repository.interface';
import { ITask } from 'src/domain/interface/task.interface';

@Injectable()
export class TasksRepositoryService extends Repository<TaskEntity> implements ITaskRepository {

    constructor(dataSource: DataSource) {
        super(TaskEntity, dataSource.createEntityManager());
    }

    findAll(userId: number): Promise<ITask[]> {
        return this.findBy({ user: { id: userId } });
    }

    findById(userId: number, id: number): Promise<ITask> {
        return this.findOneBy({ id, user: { id: userId } });
    }

    add(payload: DeepPartial<ITask>): Promise<ITask> {
        return this. save(payload);
    }

    updateById(id: number, payload: DeepPartial<ITask>) {
        return this.update(id, payload);
    }
}
