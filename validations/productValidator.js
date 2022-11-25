const {check} = require('express-validator')

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),

    check('descripcion')
    .notEmpty()
    .withMessage('Se requiere una descripción'),

    check('precio')
    .notEmpty()
    .withMessage('Debe indicar precio'),

    check('categoria')
    .notEmpty()
    .withMessage('Indica categoria')
]


























