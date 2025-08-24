import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { IProject } from 'src/domain/interface/project.interface';
export declare class GetProjectsByIdService implements BaseUseCase {
    private readonly projectsRepository;
    private readonly usersRepository;
    constructor(projectsRepository: ProjectsRepositoryService, usersRepository: UsersRepositoryService);
    execute(payload: {
        userId: number;
        projectId: number;
    }): Promise<IProject>;
}
