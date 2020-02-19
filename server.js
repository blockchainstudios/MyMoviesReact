const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded);

app.get('/', (req, res) => res.json({ msg: 'Welcome to the MyMovies API' }));

// //Define Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/movies', require('./routes/movies'));
// app.use('/api/contracts', require('./routes/contracts'));
// app.use('/api/wallet', require('./routes/wallet'));
// app.use('/api/file-upload, require('./routes/file-upload'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
