module.exports = (sequelize, DataTypes) => {
    const alias = 'Users'
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.INTEGER,
        },
        administrador: {
            type: DataTypes.BOOLEAN
        },
        password: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        imagen: {
            type: DataTypes.STRING,
        },
    }
    
    const config = {
        underscored:true,
        timestamps:false
    }
    
    const Usuario = sequelize.define(alias, columns, config);

    Usuario.associate = models => {
        Usuario.belongsTo(models.Producto, {
            as:'product',
            foreignKey: 'usuario_id'
    })
    }
    
    return Usuario;
   }