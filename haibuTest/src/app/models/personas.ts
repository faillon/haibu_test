
export class Persona {
    id: number = 0;
    nombre: string = "";
    apellido: string = "";
    telefono: number = 0;
    rut: string = "";
    fechaNacimiento: Date = new Date();
    direccion: Direccion = new Direccion();
    activo: number = 0;
}

export class Direccion {
    calle: string = "";
    numero: number = 0;
    comuna: string = "";
}