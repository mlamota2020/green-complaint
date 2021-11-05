const mongoose = require('mongoose');
const chalk = require('chalk');
const uri = /* 'mongodb+srv://root:LkMU690TSfy@green-complaint.mcj7b.mongodb.net/reports?retryWrites=true&w=majority' */'mongodb://localhost/prueba'; 

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log(chalk.yellow.bold('Database connection status: fine!')))
.catch(err => console.log(err))