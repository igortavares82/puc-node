import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { ITask } from 'src/domain/interface/task.interface';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {

    constructor(
        private readonly usersRepository: UsersRepositoryService,
        private readonly tasksRepository: TasksRepositoryService
    ) {}
    
    async execute(payload: { userId: number, taskId: number }): Promise<ITask> {
        const userData = await this.usersRepository.findById(payload.userId);
        const tasks = await this.tasksRepository.findById(userData.id, payload.taskId);

        if (!tasks) {
            throw new Error('Erro ao listar tarefas');
        }

        return tasks;
    }
}
