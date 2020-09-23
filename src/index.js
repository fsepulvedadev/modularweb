const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index.js'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});
