import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreaClienteDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    apellido: string;
    
    @IsNotEmpty()
    @ApiProperty()
    fechaNacimiento: Date;


}