//Este model va a contener las diferentes características
//que puede tener un tipo de producto, por ejemplo:
//id: 1, nombre: COLOR
//id: 2,nombre: AGARRE
//TIPO DE VARA
//TIPO DE BOLSA
//TALLE
//HIERROS TIPO DE CONJUNTO
//PESO, ETC
module.exports = (sequelize, dataTypes) => {
    let alias = 'Caracteristica';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING 
        }
    };
    let config = {
        tableName: 'caracteristicas',
        timestamps: false
    };
    const Caracteristica = sequelize.define(alias, cols, config)
    return Caracteristica
}
