//Este model va a contener las diferentes características
//para los diferentes tipo de productos, por ejemplo:
//id: 1
//tipoProductoId: 5 (GORRA)
//caracteristicaId: 1 (COLOR)
//Valor: 'NEGRO'
//id: 2
//tipoProductoId: 6 (GUANTE)
//caracteristicaId: 1 (COLOR)
//Valor: 'AZUL'
//id: 3
//CategoriaId: 3 (PALO)
//tipoProductoId 14 (PUTTER)
//caracteristicaId: 2 (AGARRE)
//Valor: 'MANO DERECHA'
//id: 4
//tipoProductoId: 2 (PALO)
//tipoProductoId 10 (HIERROS)
//caracteristicaId: 2 (AGARRE), 1 (HIERROSTIPO DE CONJUNTO)
//Valor: 'MANO IZQUIERDA', '5-PW-AW-SW(CONJUNTO DE 8 PALOS)'
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
