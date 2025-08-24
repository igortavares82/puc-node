import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { IProject } from 'src/domain/interface/project.interface';
export declare class GetAllProjectsService implements BaseUseCase {
    private readonly projectsRepository;
    private readonly usersRepository;
    constructor(projectsRepository: ProjectsRepositoryService, usersRepository: UsersRepositoryService);
    execute(userId: number): Promise<IProject[]>;
}
