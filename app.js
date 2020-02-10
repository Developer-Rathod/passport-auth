const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));

//Routes
app.use('/', require('./routes/index'));
/* app.use('/login',require('./routes/user'))
app.use('/register',require('./routes/user')) */
app.use('/user', require('./routes/users'));
