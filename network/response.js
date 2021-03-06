//archivo de plantilla para que las respuestas tengas la misma estructura , mas facilde usar y entender
const chalk = require ('chalk');

exports.success = (req,res,message,status) => {
    res.status(status || 200).send({
        error:'',
        body: message
    });
}

exports.error = (req,res,message,status, details) => {
    console.log(chalk.redBright('[response errors]: ' +  details))

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}