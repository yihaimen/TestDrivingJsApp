const expect = require('chai').expect;
const linesCount = require('../src/tdd/async/files');

describe('test server side callback', () => {
    it('should return correct lines count for a valid file', (done) => {
        const callback = (count) => {
            expect(count).to.be.eql(15);
            done();
        };
        
        linesCount('src/tdd/async/files.js', callback);
    });

    it('should report error for an invalid file name', (done) => {
        const onError = (error) => {
            expect(error).to.be.eql('unable to open file src/tdd/files.js');
            done();
        };
        linesCount('src/tdd/files.js', undefined, onError);
    });
});