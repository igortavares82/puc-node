import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { IProject } from 'src/domain/interface/project.interface';

@Injectable()
export class GetAllProjectsService implements BaseUseCase{

    constructor(
        private readonly projectsRepository: ProjectsRepositoryService,
        private readonly usersRepository: UsersRepositoryService
    ) {}

    async execute(userId: number): Promise<IProject[]> {
        const userDate = await this.usersRepository.findById(userId);
        const projects = await this.projectsRepository.findAll(userDate.id);

        if (!projects) {
            throw new Error('Erro ao recuperar projetos.');
        }

        return projects;
    }
}
