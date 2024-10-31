const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'page1.html')));

app.get('/cool-sound', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public', 'page2.html')),
);

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
