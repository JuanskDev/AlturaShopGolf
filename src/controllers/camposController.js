const path = require('path');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('gas_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const camposController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session

        //Esto ejecuta la consulta Select * from `campos` en la base de datos
        sequelize.query("Select * from `campos`", { nest: true,  type: Sequelize.QueryTypes.SELECT})
        .then(campos => {
            res.render(path.join(__dirname, '../views/campos.ejs'), {campos})
        })
        .catch(err => {
            console.log(err)
        }
        )
    }
};

module.exports = camposController;