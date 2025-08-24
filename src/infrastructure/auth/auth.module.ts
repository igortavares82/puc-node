import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/domain/use-cases/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './contants';

@Module({
    imports: [
        UsersModule, 
        JwtModule.register({
            global: true, 
            secret: jwtConstants.secret, 
            signOptions: { expiresIn: '60m' }
        })
    ],
    providers: [AuthService]
})
export class AuthModule {}
