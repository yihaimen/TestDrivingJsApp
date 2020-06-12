const expect = require('chai').expect;
const isPalindrome = require('../src/tdd/server/rome');
describe('rome test', () => {
    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should return true for argument mom', () => {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('should return true for argument dad', () => {
        expect(isPalindrome('dad')).to.be.true;
    });

    it('should return false for argument dude', () => {
        expect(isPalindrome('dude')).to.be.false;
    });

    it('should return true for argument mom mom', () => {
        expect(isPalindrome('mom mom')).to.be.true;
    });

    it('should return false for argument mom dad', () => {
        expect(isPalindrome('mom dad')).to.be.false;
    });

    it('should return false when argument is an empty string', () => {
        expect(isPalindrome('')).to.be.false;
    });

    it('should return false for argument with only two space', () => {
        expect(isPalindrome('  ')).to.be.false;
    });

    it('should throw an exception if argument is missing', () => {
        const call = () => {
            isPalindrome();
        };

        expect(call).to.throw(Error, 'Invalid argument');
    });
});
