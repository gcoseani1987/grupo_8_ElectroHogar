module.exports = (sequelize, DataTypes) => {
    const alias = 'Products'
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
        underscored:true,
        timestamps:false
    }
    
    const Producto = sequelize.define(alias, columns, config);

    Producto.associate = models => {
        Producto.hasMany(models.Usuario, {
            as: 'user',
            foreignKey: 'usuario_id'
        }),
        Producto.belongsTo(models.Categoria, {
            as: 'category',
            foreignKey: 'categoria_id'
        }),
        Producto.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'color_id'
        }),
        Producto.hasMany(models.Imagen, {
            as: 'imagen',
            foreignKey: 'imagen_id'
        })
    }
    return Producto;
   }