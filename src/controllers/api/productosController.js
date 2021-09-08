const e = require('express');
const { Producto, Categoria} = require('../../database/models');

const controller = {
    async listado(req, res){
        /* URL de api : /api/products */
        const products = await Producto.findAll(
            {
                attributes : ['id', 'nombre', 'descripcion']
            }
        )
        const count = products.length;
        const categorias = await Categoria.findAll({
            include : [{ association: "productos"}]
        })
        const productos = products.map(producto=>{
            producto.setDataValue("detail", "http://localhost:3030/api/products/" + producto.id)
            return producto
        })

        const countByCategory = categorias.reduce((acum, categoria) => {
            acum[categoria.nombre] = categoria.productos.length
            return acum
        }, {})

        res.json({
            count,
            countByCategory,
            products
        })
    }

}

module.exports = controller  