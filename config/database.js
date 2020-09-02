const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
});
// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

