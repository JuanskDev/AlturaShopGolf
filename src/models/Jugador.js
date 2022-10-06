//Este modelo basado en el slider del home de cameron smith,puede ser un jugador, o armar una tabla con varios
// para asi como estrategia de ventas se van promocionando determinados productos que utiliza cada jugador
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
