import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { IProject } from 'src/domain/interface/project.interface';
import { CreateProjectService } from 'src/domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from 'src/domain/use-cases/projects/get-all-projects.service';
import { GetProjectsByIdService } from 'src/domain/use-cases/projects/get-projects-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';

var loggedUser: number = 1;

@Controller('projects')
export class ProjectsController {
    constructor(
        private readonly createProjectUserCase: CreateProjectService,
        private readonly getAllProjectUseCase: GetAllProjectsService,
        private readonly getProjectByIdUseCase: GetProjectsByIdService
    ){}

    @Get()
    findAll(): Promise<IProject[]> {
        return this.getAllProjectUseCase.execute(loggedUser);
    }

    @Get(':id')
    findById(@Req() request, @Param('id') id: number) {
        return this.getProjectByIdUseCase.execute({
            projectId: id,
            userId: loggedUser
        });
    }

    @Post()
    create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
        return this.createProjectUserCase.execute({
            project: createProjectDto,
            userId: loggedUser
        });
    }

    
}
