import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from 'src/domain/repositories/users-repository.interface';
import { IUser } from 'src/domain/interface/user.interface';

@Injectable()
export class UsersRepositoryService extends Repository<UserEntity> implements IUserRepository{
    
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    findByEmail(email: string): Promise<IUser> {
        return this.findOneByOrFail({ email });
    }

    findById(id: number): Promise<IUser> {
        return this.findOneByOrFail({ id });
    }

    add(payload: DeepPartial<IUser>): Promise<IUser> {
        return this.save(payload);
    }
    
}
