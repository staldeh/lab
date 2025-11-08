const fs = require('fs');

fs.readFile('textfile.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // `data` is a Buffer containing the file's binary data
  console.log('File data:', data);
});