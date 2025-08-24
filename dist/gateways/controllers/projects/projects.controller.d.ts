import { IProject } from 'src/domain/interface/project.interface';
import { CreateProjectService } from 'src/domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from 'src/domain/use-cases/projects/get-all-projects.service';
import { GetProjectsByIdService } from 'src/domain/use-cases/projects/get-projects-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';
export declare class ProjectsController {
    private readonly createProjectUserCase;
    private readonly getAllProjectUseCase;
    private readonly getProjectByIdUseCase;
    constructor(createProjectUserCase: CreateProjectService, getAllProjectUseCase: GetAllProjectsService, getProjectByIdUseCase: GetProjectsByIdService);
    findAll(): Promise<IProject[]>;
    findById(request: any, id: number): Promise<IProject>;
    create(request: any, createProjectDto: CreateProjectDto): Promise<IProject>;
}
