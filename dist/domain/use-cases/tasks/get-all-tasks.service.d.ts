import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { ITask } from 'src/domain/interface/task.interface';
export declare class GetAllTasksService implements BaseUseCase {
    private readonly usersRepository;
    private readonly tasksRepository;
    constructor(usersRepository: UsersRepositoryService, tasksRepository: TasksRepositoryService);
    execute(payload: {
        userId: number;
    }): Promise<ITask[]>;
}
