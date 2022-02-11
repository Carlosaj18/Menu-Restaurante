
let array = [
    {   
        id: 1,
        nombre: 'Carpaccio fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        precio: 65.50
     }, 
     {  id: 2,
        nombre: 'Risotto de berenjena',
        descripcion: 'Risotto de berenjena y queso de cabra',
        precio: 47.00
     }, 
     {  
        id: 3,
        nombre: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        precio: 27.50
     }, 
     {  
        id: 4,
        nombre: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 37.50
     }, 
     {  id: 5,
        nombre: 'Pasta',
        descripcion: 'La mejor pasta a la carlini',
        precio: 57.50
     }
    ]

let indexControler = {

    menu: function (req, res) {
        /**Render vista */
        res.render('index', {array: array});
    }, 
    plato: function(req, res) {
        /*res.send("Se selecciono el plato ", req.params.id);*/
        let idURL = req.params.id

        let platoEncontrado = array.find(function(plato){
            return plato.id == idURL  
        });

        res.render('detalleMenu', {plato: platoEncontrado});
        console.log(platoEncontrado);
    }, 
}

module.exports = indexControler;