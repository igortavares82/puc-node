import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { IUser } from 'src/domain/interface/user.interface';
export declare class GetUserByIdService implements BaseUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryService);
    execute(userId: number): Promise<IUser>;
}
