import { Injectable } from '@nestjs/common';
import { CreaClienteDto } from './dtos/create-cliente.dto';
import { Cliente } from './cliente.model';

@Injectable()
export class ClientesService {

    private clientes: Cliente[] = [
        new Cliente('1', 'Juan', 'Perez', new Date('1989-01-01')),
        new Cliente('2', 'Maria', 'Gomez', new Date('1994-01-01')),
        new Cliente('3', 'Pedro', 'Gonzalez', new Date('1990-01-01')),
        new Cliente('4', 'Jose', 'Gomez', new Date('1992-01-01')),
    ];

    getAll(): Cliente[]
    {
        return this.clientes;
    }

    create(creaClienteDto: CreaClienteDto){

        creaClienteDto.fechaNacimiento = new Date(creaClienteDto.fechaNacimiento);

        const new_cliente = new Cliente(
            this.clientes.length + 1 + '',
            creaClienteDto.nombre,
            creaClienteDto.apellido,
            creaClienteDto.fechaNacimiento
        )

        this.clientes.push(
            new_cliente
        );

        return new_cliente;
    }

    getKpi(): any
    {
        let promedioEdad = 0;
        let desviacionEstandar = 0;
        let sumatoria = 0;
        let sumatoriaDesviacion = 0;
        let cantidad = this.clientes.length;

        this.clientes.forEach(cliente => {
            sumatoria = sumatoria + cliente.getEdad();
        }
        );

        promedioEdad = sumatoria / cantidad;

        this.clientes.forEach(cliente => {
            sumatoriaDesviacion = sumatoriaDesviacion + Math.pow((cliente.getEdad() - promedioEdad), 2);
        }
        );

        desviacionEstandar = Math.sqrt(sumatoriaDesviacion / cantidad);

        return {
            promedioEdad: promedioEdad,
            desviacionEstandar: desviacionEstandar
        };

    }
}
