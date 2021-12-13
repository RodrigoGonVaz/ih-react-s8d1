//Import
const Store = require("./../models/Store")



exports.create = async (req,res) =>{
    
    //Del form - creamos variables y asignamos valores.
    const { 
        domicilio,
        telefono
     } = req.body

     //Crear Stor en BD
     try{
        const newStore = await Store.create({
            domicilio,
            telefono
        })

        //Devolver una respuesta en un formato json
        res.json({
            msg: "Tienda creada con exito",
            data: newStore
        })

     }catch (error){
        res.status(500).json({
            msg: "Hubo un error creando la tienda",
            error
        })
     }

}


exports.readAll = async (req, res) => {

	try {
		
		const tiendas = await Store.find({})

		res.json({
			msg: "Tienda obtenidas con éxito.",
			data: tiendas
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obteniendo los datos",
			error: error
		})

	}

}


exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const tienda = await Store.findById(id)

		res.json({
			msg: "Tienda obtenida con éxito.",
			data: tienda
		})

	} catch (error) {
		res.status(500).json({
			msg: "hubo un error obteniendo los datos. 🥪 ",
			error: error
		})
	}

}