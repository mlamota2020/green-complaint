const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:LkMU690TSfy@green-complaint.mcj7b.mongodb.net/reports?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('%cfine!', 'color: yellow;'))
.catch(err => console.log(err));