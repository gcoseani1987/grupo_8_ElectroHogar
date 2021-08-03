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

    Color.associate = models => {
        Color.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'color_id'
        })
    }
    
    return Color;
   }