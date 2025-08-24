import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty({ message: 'name da tarefa é obrigatório' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'status da tarefa é obrigatório' })
    @IsString()
    status: 'pending' | 'completed';

    @IsNumber()
    projectId: number;
}