import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateTaskService } from 'src/domain/use-cases/tasks/create-task.service';
import { GetAllTasksService } from 'src/domain/use-cases/tasks/get-all-tasks.service';
import { GetTaskByIdService } from 'src/domain/use-cases/tasks/get-task-by-id.service';
import { CreateTaskDto } from './dtos/create-task.dto';

var loggedUser: number = 1;

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly getAllTasksUseCase: GetAllTasksService,
        private readonly getTasksByIdUseCase: GetTaskByIdService,
        private readonly createTaskUseCase: CreateTaskService 
    ){}

    @Get()
    findeAll() {
        return this.getAllTasksUseCase.execute({ userId: loggedUser })
    }

    @Get(':id')
    findById(@Req() request, @Param('id') taskId: number) {
        return this.getTasksByIdUseCase.execute({
            taskId: taskId,
            userId: loggedUser
        })
    }

    @Post()
    create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
        return this.createTaskUseCase.execute({
            task: createTaskDto,
            userId: loggedUser
        })
    }
}
