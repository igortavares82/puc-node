import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from 'src/domain/repositories/users-repository.interface';
import { IUser } from 'src/domain/interface/user.interface';
export declare class UsersRepositoryService extends Repository<UserEntity> implements IUserRepository {
    constructor(dataSource: DataSource);
    findById(id: number): Promise<IUser>;
    add(payload: DeepPartial<IUser>): Promise<IUser>;
}
