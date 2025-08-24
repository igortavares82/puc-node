import { CreateTaskService } from 'src/domain/use-cases/tasks/create-task.service';
import { GetAllTasksService } from 'src/domain/use-cases/tasks/get-all-tasks.service';
import { GetTaskByIdService } from 'src/domain/use-cases/tasks/get-task-by-id.service';
import { CreateTaskDto } from './dtos/create-task.dto';
export declare class TasksController {
    private readonly getAllTasksUseCase;
    private readonly getTasksByIdUseCase;
    private readonly createTaskUseCase;
    constructor(getAllTasksUseCase: GetAllTasksService, getTasksByIdUseCase: GetTaskByIdService, createTaskUseCase: CreateTaskService);
    findeAll(): Promise<import("../../../domain/interface/task.interface").ITask[]>;
    findById(request: any, taskId: number): Promise<import("../../../domain/interface/task.interface").ITask>;
    create(request: any, createTaskDto: CreateTaskDto): Promise<import("../../../domain/interface/task.interface").ITask>;
}
