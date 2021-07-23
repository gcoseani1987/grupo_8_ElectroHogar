module.exports = (sequelize, DataTypes) => {
    const alias = 'Colors'
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
    
    const Color = sequelize.define(alias, columns, config);
    return Color;
   }