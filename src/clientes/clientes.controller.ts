import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreaClienteDto } from './dtos/create-cliente.dto';
import { Cliente } from './cliente.model';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Clientes')
export class ClientesController {

    constructor(private readonly clientesService: ClientesService){}

    @Get('/listclientes')
    async getAll(): Promise<Cliente[]>{
        return this.clientesService.getAll();
    }
    
    @Get('/kpideclientes')
    async getKpi(): Promise<any>{
        return this.clientesService.getKpi();
    }
    
    @Post('/creacliente')
    async create(@Body() creaClienteDto: CreaClienteDto){
        return this.clientesService.create(creaClienteDto);
    }
}
