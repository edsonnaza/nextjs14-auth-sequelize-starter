'use server';
import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '@/config/sequelize';
import { I_Empleado, I_EmpleadoCreate } from './Empleados.types';
import { empleadoSchemaConstraints } from '../../yup/empleados.schema'; // Asegúrate de importar las restricciones desde el esquema

class Empleados extends Model<I_Empleado, I_EmpleadoCreate> implements I_Empleado {
    public empleado_id!: I_Empleado['empleado_id'];
    public nombres!: I_Empleado['nombres'];
    public apellidos!: I_Empleado['apellidos'];
    public descripcion!: I_Empleado['descripcion'];
    public email!: I_Empleado['email'];
    public phone!: I_Empleado['phone'];
    public imagen_principal!: I_Empleado['imagen_principal'];
    public fechaIngreso!: I_Empleado['fechaIngreso'];
    public genero!: I_Empleado['genero'];
    public fechaNacimiento!: I_Empleado['fechaNacimiento'];
    public activo!: I_Empleado['activo'];
    public fechaDesvinculado!: I_Empleado['fechaDesvinculado'];
    public createdAt!: I_Empleado['createdAt'];
    public updatedAt!: I_Empleado['updatedAt'];
    public deletedAt!: I_Empleado['deletedAt'];
}

Empleados.init({
    empleado_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    nombres: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            min: empleadoSchemaConstraints.nombres.minLength,
            max: empleadoSchemaConstraints.nombres.maxLength,
        },
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            min: empleadoSchemaConstraints.apellidos.minLength,
            max: empleadoSchemaConstraints.apellidos.maxLength,
        },
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            min:empleadoSchemaConstraints.descripcion.minLength,
            max: empleadoSchemaConstraints.descripcion.maxLength,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: empleadoSchemaConstraints.phone.minLength,
            max: empleadoSchemaConstraints.phone.maxLength,
            is: empleadoSchemaConstraints.phone.match,
        },
    },
    imagen_principal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.ENUM("Hombre", "Mujer"),
        allowNull: false,
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    fechaDesvinculado: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'empleados',
    timestamps: true,
    paranoid: true,
});

export default Empleados;
