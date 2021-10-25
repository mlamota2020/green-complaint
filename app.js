const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log(`Server on port: %c${app.get('port')}. \n\nDatabase connection status:`, `color: yellow;`);
});
