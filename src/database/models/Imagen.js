module.exports = (sequelize, DataTypes) => {
    const alias = 'Imagen'
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
        tableName : "imagenes",
        underscored:true,
        timestamps:false
    }
    
    const Imagen = sequelize.define(alias, columns, config);

    Imagen.associate = models => {
        Imagen.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
    }

    return Imagen;
   }