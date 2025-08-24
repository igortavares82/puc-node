import { BaseUseCase } from '../base-use-case';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { ITask } from 'src/domain/interface/task.interface';
import { UpdateTaskDto } from 'src/gateways/controllers/tasks/dtos/update-task.dto';
export declare class UpdateTaskService implements BaseUseCase {
    private readonly usersRepository;
    private readonly tasksRepository;
    constructor(usersRepository: UsersRepositoryService, tasksRepository: TasksRepositoryService);
    execute(payload: {
        task: UpdateTaskDto;
        userId: number;
    }): Promise<ITask>;
}
