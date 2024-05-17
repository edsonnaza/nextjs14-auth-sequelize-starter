import * as yup from 'yup';
import { E_genero } from '@/models/empleados/Empleados.types';

export const EMPLEADO_GENEROS = Object.keys(E_genero);

interface EmpleadoSchemaConstraints {
    nombres: {
        required: string;
        minLength: number;
        maxLength: number;
    };
    apellidos: {
        required: string;
        minLength: number;
        maxLength: number;
    };
    descripcion :{
        required:string;
        maxLength:number;
        minLength:number;
    }
    email: {
        required: string;
        minLength: number;
        maxLength: number;
    };
    phone: {
        required: string;
        minLength: number;
        maxLength: number;
        match: RegExp;
    };
    genero: {
        required: string;
        isIn: string[];
    };
    fechaIngreso: {
        required: string;
    };
    fechaNacimiento: {
        required: string;
    };
    imagen_principal: {
        required: string;
    };
}

export const empleadoSchemaConstraints: EmpleadoSchemaConstraints = {
    nombres: {
        required: 'Nombres is required',
        minLength: 1,
        maxLength: 50,
    },
    apellidos: {
        required: 'Apellidos is required',
        minLength: 1,
        maxLength: 50,
    },
    email: {
        required: 'Email is required',
        minLength: 1,
        maxLength: 255,
    },
    descripcion: {
        required: 'Descripcion is required',
        minLength: 20,
        maxLength: 255,
    },
    phone: {
        required: 'Phone is required',
        minLength: 10,
        maxLength: 16,
        match: /^\(\d{3}\)\s\d{3}-\d{4}$/,
    },
    genero: {
        required: 'Genero is required',
        isIn: EMPLEADO_GENEROS,
    },
    fechaIngreso: {
        required: 'Fecha Ingreso is required',
    },
    fechaNacimiento: {
        required: 'Fecha Nacimiento is required',
    },
    imagen_principal: {
        required: 'Imagen Principal is required',
    },
};

export const empleadoSchema = yup.object().shape({
    nombres: yup
        .string()
        .label('Nombres')
        .required(empleadoSchemaConstraints.nombres.required)
        .min(empleadoSchemaConstraints.nombres.minLength)
        .max(empleadoSchemaConstraints.nombres.maxLength),
    apellidos: yup
        .string()
        .label('Apellidos')
        .required(empleadoSchemaConstraints.apellidos.required)
        .min(empleadoSchemaConstraints.apellidos.minLength)
        .max(empleadoSchemaConstraints.apellidos.maxLength),
    email: yup.string().label('Email').required(empleadoSchemaConstraints.email.required).email(),
    descripcion: yup
    .string()
    .label('Descripcion')
    .max(empleadoSchemaConstraints.descripcion.maxLength),
    phone: yup
        .string()
        .label('Phone')
        .required(empleadoSchemaConstraints.phone.required)
        .matches(empleadoSchemaConstraints.phone.match, 'Phone number is not valid'),
    genero: yup
        .string()
        .label('Genero')
        .required(empleadoSchemaConstraints.genero.required)
        .oneOf(empleadoSchemaConstraints.genero.isIn, 'Genero is not valid'),
    fechaIngreso: yup.date().label('Fecha Ingreso').required(empleadoSchemaConstraints.fechaIngreso.required),
    fechaNacimiento: yup.date().label('Fecha Nacimiento').required(empleadoSchemaConstraints.fechaNacimiento.required),
    imagen_principal: yup.string().label('Imagen Principal').required(empleadoSchemaConstraints.imagen_principal.required),
});
