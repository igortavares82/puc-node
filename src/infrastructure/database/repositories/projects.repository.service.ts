import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IProjectsRepository } from 'src/domain/repositories/projects-repository.interface';
import { IProject } from 'src/domain/interface/project.interface';

@Injectable()
export class ProjectsRepositoryService extends Repository<ProjectEntity> implements IProjectsRepository {

    constructor(dataSource: DataSource) {
        super(ProjectEntity, dataSource.createEntityManager());
    }

    findAll(userId: number): Promise<IProject[]> {
        return this.findBy({ user: {id: userId } });
    }
    findById(userId: number, id: number): Promise<IProject | null> {
        return this.findOneBy({ id, user: { id: userId} });
    }
    add(payload: DeepPartial<IProject>) {
        return this.save(payload);
    }
}
