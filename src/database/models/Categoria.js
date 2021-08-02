module.exports = (sequelize, DataTypes) => {
    const alias = 'Categories'
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
    
    const Categorias = sequelize.define(alias, columns, config);

    Categorias.associate = models => {
        Categorias.hasMany(models.Producto, {
            as: 'product',
            foreignKey: 'categoria_id'
        })
    }

    return Categorias;
   }