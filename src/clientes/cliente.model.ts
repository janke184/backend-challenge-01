import { Optional } from "@nestjs/common";

export class Cliente {

    _id: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    @Optional()
    fechaMuerteCalculada: Date;

    constructor(id:string = null, nombre: string, apellido: string, fechaNacimiento: Date) {
        this._id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaMuerteCalculada = this.calcularFechaMuerte(fechaNacimiento);
    }

    

    calcularFechaMuerte(fechaNacimiento: Date): Date {
        let fechaMuerteCalculada = new Date(fechaNacimiento);
        fechaMuerteCalculada.setFullYear(fechaMuerteCalculada.getFullYear() + 80);
        return fechaMuerteCalculada;
    }

    getEdad(): number {
        let edad = new Date().getFullYear() - this.fechaNacimiento.getFullYear();
        return edad;
    }



}