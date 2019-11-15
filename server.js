const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
