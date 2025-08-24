import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { CreateProjectDto } from 'src/gateways/controllers/projects/dtos/create-project.dto';
import { IProject } from 'src/domain/interface/project.interface';
import { privateDecrypt } from 'crypto';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class CreateProjectService implements BaseUseCase {
    constructor(
        private readonly projectsRepository: ProjectsRepositoryService,
        private readonly usersRepository: UsersRepositoryService
    ) {}

    async execute(payload: { project: CreateProjectDto; userId: number}): Promise<IProject> {
        const userData = await this.usersRepository.findById(payload.userId);

        const createdProject = await this.projectsRepository.add({
            name: payload.project.name,
            description: payload.project.description,
            user: { id: userData.id }            
        });

        if (!createdProject) {
            throw new Error('Erro ao criar projeto')
        }

        return createdProject;
    }
}
