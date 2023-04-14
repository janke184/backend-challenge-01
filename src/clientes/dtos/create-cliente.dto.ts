import { ApiProperty } from "@nestjs/swagger";

export class CreaClienteDto {

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellido: string;
    
    @ApiProperty()
    fechaNacimiento: Date;


}