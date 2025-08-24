import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { TasksRepositoryService } from 'src/infrastructure/database/repositories/tasks.repository.service';
import { CreateTaskDto } from 'src/gateways/controllers/tasks/dtos/create-task.dto';
import { ITask } from 'src/domain/interface/task.interface';
export declare class CreateTaskService implements BaseUseCase {
    private readonly usersRepository;
    private readonly projectsRepository;
    private readonly tasksRepository;
    constructor(usersRepository: UsersRepositoryService, projectsRepository: ProjectsRepositoryService, tasksRepository: TasksRepositoryService);
    execute(payload: {
        task: CreateTaskDto;
        userId: number;
    }): Promise<ITask>;
}
