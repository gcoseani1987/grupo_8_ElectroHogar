module.exports = (sequelize, DataTypes) => {
    const alias = 'Categories'
    const columns = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        nombre: {
            type: DataType.STRING
        },
    }
    
    const config = {
        underscored:true,
        timestamps:false
    }
    
    const Categorie = sequelize.define(alias, columns, config);
    return Categorie;
   }