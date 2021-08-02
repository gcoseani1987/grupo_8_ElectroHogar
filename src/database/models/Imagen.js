module.exports = (sequelize, DataTypes) => {
    const alias = 'Images'
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
        underscored:true,
        timestamps:false
    }
    
    const Imagen = sequelize.define(alias, columns, config);

    Imagen.associate = models => {
        Imagen.belongsTo(models.Producto, {
            as: 'product',
            foreignKey: 'imagenes_id'
        })
    }

    return Imagen;
   }