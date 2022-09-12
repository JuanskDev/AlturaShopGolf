const fs = require('fs');
const path = require('path');
const logPath = path.join(__dirname, '../userLogs.txt');
const log = fs.readFileSync(logPath, 'utf-8')
function userLogs(req, res, next){
    fs.appendFileSync(logPath, 'El usuario ' + req.session.email + ' cerró su sesión ' +'\n');
    next()
}
module.exports = userLogs