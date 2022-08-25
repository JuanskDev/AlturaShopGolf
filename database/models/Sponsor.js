module.exports = (sequelize, dataTypes) => {
    let alias = 'Sponsor';
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
        tableName: 'sponsors',
        timestamps: false
    };
    const Sponsor = sequelize.define(alias, cols, config)
    return Sponsor
}
