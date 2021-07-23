module.exports = (sequelize, DataTypes) => {
    const alias = 'Products'
    const columns = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataType.STRING
        },
        stock: {
            type: DataType.INTEGER,
        },
        oferta: {
            type: DataType.BOOLEAN
        },
        alto: {
            type: DataType.INTEGER,
        },
        ancho: {
            type: DataType.INTEGER,
        },
        precio: {
            type: DataType.DECIMAL,
        },
        descripcion: {
            type: DataType.STRING
        },
        garantia: {
            type: DataType.INTEGER,
        },
        modelo: {
            type: DataType.STRING
        },
        origen: {
            type: DataType.STRING
        },
        peso: {
            type: DataType.INTEGER,
        },
        profundidad: {
            type: DataType.INTEGER,
        },

    }
    
    const config = {
        underscored:true,
        timestamps:false
    }
    
    const Product = sequelize.define(alias, columns, config);
    return Product;
   }