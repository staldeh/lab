var fs = require('fs');
var midiConverter = require('midi-converter');

var fileName = 'Bossa Nova (85 BPM)';

var midiSong = fs.readFileSync(fileName + '.mid', 'binary');
var jsonSong = midiConverter.midiToJson(midiSong);

fs.writeFileSync(fileName + '.json', JSON.stringify(jsonSong));