const ModelUser = require ("../models/model");
const usuarioCtrl = {};

//crear metodo post
usuarioCtrl.createUser = async (req, res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
} 

// consultar metodo get
usuarioCtrl.getUser = async (req, res)=> {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
}

//consultar por Id metodo get
usuarioCtrl.getUniqueUser = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
}

//Actualizar metodo put
usuarioCtrl.editUser = async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
}


// Eliminar metodo delete
usuarioCtrl.deleteUser = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
} 

module.exports = usuarioCtrl;