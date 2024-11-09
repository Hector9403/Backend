const ModelEmpleado = require ("../models/empleado");
const empleadoCtrl = {};

//crear metodo post
empleadoCtrl.createEmpleado = async (req, res)=>{
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta)
} 

// consultar metodo get
empleadoCtrl.getEmpleado = async (req, res)=> {
    const respuesta = await ModelEmpleado.find({})
    res.send(respuesta)
}

//consultar por Id metodo get
empleadoCtrl.getUniqueEmpleado = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById({_id:id})
    res.send(respuesta)
}

//Actualizar metodo put
empleadoCtrl.editEmpleado = async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta);
}


// Eliminar metodo delete
empleadoCtrl.deleteEmpleado = async (req, res)=> {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({_id:id})
    res.send(respuesta)
} 

module.exports = empleadoCtrl;