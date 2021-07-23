module.exports = (sequelize, DataTypes) => {
    const alias = 'Users'
    const columns = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataType.STRING
        },
        apellido: {
            type: DataType.INTEGER,
        },
        administrador: {
            type: DataType.BOOLEAN
        },
        password: {
            type: DataType.STRING,
        },
        email: {
            type: DataType.STRING,
        },
        imagen: {
            type: DataType.STRING,
        },
    }
    
    const config = {
        underscored:true,
        timestamps:false
    }
    
    const User = sequelize.define(alias, columns, config);
    return User;
   }