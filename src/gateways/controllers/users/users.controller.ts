import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserService } from 'src/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from 'src/domain/use-cases/users/get-user-by-id.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly getUserByIdUseCase: GetUserByIdService,
        private readonly createUserUseCase: CreateUserService
    ){}

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.getUserByIdUseCase.execute(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.createUserUseCase.execute(createUserDto);
    }

    
}
