const e = require('express');
const { Producto, Categoria, Imagen, Color} = require('../../database/models');

const controller = {
    async listado(req, res){
        /* URL de api : /api/products */
        const products = await Producto.findAll(
            {
                attributes : ['id', 'nombre', 'descripcion'], include : ['imagenes']
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
    },

    async detalle(req, res){
        try {
            const id = req.params.id
            const productoBuscado = await Producto.findByPk(id, {
                attributes : [
                    'id', 'nombre', 'descripcion', 'stock', 'precio', 'alto', 'ancho', 'garantia', 'modelo', 'origen', 'peso', 'profundidad', 'oferta'
                ], 
                include : [
                    {
                        association: "imagenes",
                        attributes: ['id', 'nombre'] 
                    },
                    {
                        association: "color",
                        attributes: ['nombre'] 
                    }
                ]
            })
            const imagenesProducto = productoBuscado.imagenes.map(imagen=>{
                imagen.setDataValue("URL", "http://localhost:3030" + imagen.nombre)
                delete imagen.dataValues.nombre
                return imagen
            })

            res.status(200).json({
                meta : {
                    status : 'success',
                },
                data : {
                    productoBuscado,
                }
            }) 
        }
        catch(error) {
            res.status(404).json({
                meta : {
                    status : 'error', 
                },
                error : {
                    msg : 'no se encontro el producto'
                }
            }) 
        }
    }
}

module.exports = controller  