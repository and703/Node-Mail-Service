const express = require('express');
const mailRoutes = require('./routes/mailRoutes');
const config = require('./config');

const app = express();
const PORT = config.port;

app.use(express.json());

app.use('/api', mailRoutes);

app.listen(PORT, () => {
  console.log(`Mail service listening on port ${PORT}`);
});
