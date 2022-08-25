module.exports = (sequelize, dataTypes) => {
    let alias = 'Jugador';
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
        tableName: 'jugadores',
        timestamps: false
    };
    const Jugador = sequelize.define(alias, cols, config)
    return Jugador
}
