export enum E_genero {
    hombre = 'Hombre',
    mujer = 'Mujer',
}

export interface I_Empleado {
    empleado_id: string;
    nombres: string;
    apellidos: string;
    descripcion: string;
    email: string;
    phone: string;
    imagen_principal: string;
    fechaIngreso: Date;
    genero: E_genero;
    fechaNacimiento: Date;
    activo: boolean;
    fechaDesvinculado: Date; // Campo obligatorio
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface I_EmpleadoCreate
    extends Partial<Omit<I_Empleado, 'empleado_id' | 'nombres' | 'apellidos' | 'descripcion' | 'genero' | 'imagen_principal' | 'fechaIngreso' | 'fechaNacimiento' | 'activo' | 'phone' | 'fechaDesvinculado' | 'createdAt' | 'updatedAt' | 'deletedAt'>> {}
