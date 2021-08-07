module.exports = (sequelize, DataTypes) => {
    const alias = 'Color'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataTypes.STRING
        },
    }
    
    const config = {
        tableName : "colores",
        underscored:true,
        timestamps:false
    }
    
    const Color = sequelize.define(alias, columns, config);

    Color.hasMany = models => {
        Color.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'color_id'
        })
    }
    
    return Color;
   }