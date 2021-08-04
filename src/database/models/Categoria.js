module.exports = (sequelize, DataTypes) => {
    const alias = 'Categoria'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
    }
    
    const config = {
        tableName : "categorias",
        underscored:true,
        timestamps:false
    }
    
    const Categorias = sequelize.define(alias, columns, config);

    Categorias.associate = models => {
        Categorias.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoria_id'
        })
    }

    return Categorias;
   }