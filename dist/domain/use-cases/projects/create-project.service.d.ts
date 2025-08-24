import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { CreateProjectDto } from 'src/gateways/controllers/projects/dtos/create-project.dto';
import { IProject } from 'src/domain/interface/project.interface';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
export declare class CreateProjectService implements BaseUseCase {
    private readonly projectsRepository;
    private readonly usersRepository;
    constructor(projectsRepository: ProjectsRepositoryService, usersRepository: UsersRepositoryService);
    execute(payload: {
        project: CreateProjectDto;
        userId: number;
    }): Promise<IProject>;
}
