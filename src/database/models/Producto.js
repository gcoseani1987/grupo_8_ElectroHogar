module.exports = (sequelize, DataTypes) => {
    const alias = 'Producto'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataTypes.STRING
        }, 
        stock: {
            type: DataTypes.INTEGER,
        },
        oferta: {
            type: DataTypes.BOOLEAN
        },
        alto: {
            type: DataTypes.INTEGER,
        },
        ancho: {
            type: DataTypes.INTEGER,
        },
        precio: {
            type: DataTypes.DECIMAL,
        },
        descripcion: {
            type: DataTypes.STRING
        },
        garantia: {
            type: DataTypes.INTEGER,
        },
        modelo: {
            type: DataTypes.STRING
        },
        origen: {
            type: DataTypes.STRING
        },
        peso: {
            type: DataTypes.INTEGER,
        },
        profundidad: {
            type: DataTypes.INTEGER,
        },

    }
    
    const config = {
        tableName : "productos",
        underscored:true,
        timestamps:false
    }
    
    const Producto = sequelize.define(alias, columns, config);

    Producto.associate = models => {
        Producto.hasMany(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        }),
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'categoria_id'
        }),
        Producto.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'color_id'
        }),
        Producto.hasMany(models.Imagen, {
            as: 'imagenes',
            foreignKey: 'imagen_id'
        })
    }
    return Producto;
   }