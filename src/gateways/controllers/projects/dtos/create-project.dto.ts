import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty({ message: 'nome do projeto é orbrigatório' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'descrição do projeto é obrigatória'})
    @IsString()
    description: string;
}