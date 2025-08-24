import { CreateUserService } from 'src/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from 'src/domain/use-cases/users/get-user-by-id.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersController {
    private readonly getUserByIdUseCase;
    private readonly createUserUseCase;
    constructor(getUserByIdUseCase: GetUserByIdService, createUserUseCase: CreateUserService);
    findOne(id: number): Promise<import("../../../domain/interface/user.interface").IUser>;
    create(createUserDto: CreateUserDto): Promise<import("../../../domain/interface/user.interface").IUser>;
}
