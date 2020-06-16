const fs = require('fs');

const linesCount = (fileName, callback, onError) => {
    const processFile = (err, data) => {
        if (err) {
            onError('unable to open file ' + fileName);
        } else {
            callback(data.toString().split('\n').length);
        }
    };

    fs.readFile(fileName, processFile);
};

module.exports = linesCount;