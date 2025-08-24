import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { ITask } from 'src/domain/interface/task.interface';
import { UpdateTaskDto } from 'src/gateways/controllers/tasks/dtos/update-task.dto';

@Injectable()
export class UpdateTaskService implements BaseUseCase {

    constructor(
        private readonly usersRepository: UsersRepositoryService,
        private readonly tasksRepository: TasksRepositoryService
    ) {}

    async execute(payload: { task: UpdateTaskDto, userId: number }): Promise<ITask> {
        const userData = await this.usersRepository.findById(payload.userId);
        
        await this.tasksRepository.updateById(userData.id, payload.task);
        return this.tasksRepository.findById(userData.id, payload.task.id);
    }
}
