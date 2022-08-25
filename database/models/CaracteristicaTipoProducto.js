//Este model va a contener las diferentes características
//para los diferentes tipo de productos, por ejemplo:
//id: 1
//tipoProductoId: 1 (GORRA)
//caracteristicaId: 1 (COLOR)
//Valor: 'NEGRO'
//id: 2
//tipoProductoId: 1 (GORRA)
//caracteristicaId: 1 (COLOR)
//Valor: 'ROJO'
//id: 3
//tipoProductoId: 2 (PALO)
//caracteristicaId: 2 (AGARRE)
//Valor: 'MANO DERECHA'
//id: 4
//tipoProductoId: 2 (PALO)
//caracteristicaId: 2 (AGARRE)
//Valor: 'MANO IZQUIERDA'
//ETC
module.exports = (sequelize, dataTypes) => {
    let alias = 'CaracteristicaTipoProducto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoProductoId: {
            type: dataTypes.INTEGER
        },
        caracteristicaId: {
            type: dataTypes.INTEGER
        },
        valor: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'caracteristica_tipo_productos',
        timestamps: false
    };
    const CaracteristicaTipoProducto = sequelize.define(alias, cols, config)
    // CaracteristicaTipoProducto.hasOne(Caracteristica, {
    //     foreignKey: 'caracteristicatipoproducto_caracteristica_fk',
    //     sourceKey: 'id'
    // });
    // Caracteristica.belongsTo(CaracteristicaTipoProducto, {
    //     foreignKey: 'caracteristicatipoproducto_caracteristica_fk',
    //     targetKey: 'caracteristicaId'
    // });
    return CaracteristicaTipoProducto
}
