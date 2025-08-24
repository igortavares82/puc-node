import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { ITask } from 'src/domain/interface/task.interface';

@Injectable()
export class GetAllTasksService implements BaseUseCase {
       constructor(
            private readonly usersRepository: UsersRepositoryService,
            private readonly tasksRepository: TasksRepositoryService
        ) {}
    
        async execute(payload: { userId: number}): Promise<ITask[]> {
            const task = await this.tasksRepository.findAll(payload.userId);

            return task;
        }
}
