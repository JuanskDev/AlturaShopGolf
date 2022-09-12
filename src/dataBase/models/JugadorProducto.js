module.exports = (sequelize, dataTypes) => {
    let alias = 'JugadorProductos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jugadorId: {
            type: dataTypes.INTEGER
        },
        productoId: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'jugador_productos',
        timestamps: false
    };
    const JugadorProductos = sequelize.define(alias, cols, config)
    return JugadorProductos
}
