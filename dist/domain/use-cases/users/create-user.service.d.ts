import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../base-use-case';
import { CreateUserDto } from 'src/gateways/controllers/users/dtos/create-user.dto';
import { IUser } from 'src/domain/interface/user.interface';
export declare class CreateUserService implements BaseUseCase {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryService);
    execute(user: CreateUserDto): Promise<IUser>;
}
