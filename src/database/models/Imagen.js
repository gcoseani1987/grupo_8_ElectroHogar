module.exports = (sequelize, DataTypes) => {
    const alias = 'Images'
    const columns = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataType.STRING
        },
    }
    
    const config = {
        underscored:true,
        timestamps:false
    }
    
    const Imagen = sequelize.define(alias, columns, config);
    return Imagen;
   }