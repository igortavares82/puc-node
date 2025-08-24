import { ProjectEntity } from '../entities/project.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IProjectsRepository } from 'src/domain/repositories/projects-repository.interface';
import { IProject } from 'src/domain/interface/project.interface';
export declare class ProjectsRepositoryService extends Repository<ProjectEntity> implements IProjectsRepository {
    constructor(dataSource: DataSource);
    findAll(userId: number): Promise<IProject[]>;
    findById(userId: number, id: number): Promise<IProject | null>;
    add(payload: DeepPartial<IProject>): Promise<DeepPartial<IProject> & ProjectEntity>;
}
