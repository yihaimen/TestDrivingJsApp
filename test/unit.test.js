const expect = require('chai').expect;
const Util = require('../src/tddNode/utils');

describe('util tests', () => {
    let util;

    beforeEach(() => {
        util = new Util();
    });

    it('should pass this canary test', () => {
        expect(true).to.eql(true);
    });

    it('should pass if f2c returns 0C for 32F', () => {
        const fahrenheit = 32;

        const celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(0);
    });

    it('should pass if f2c returns 10C for 50F', () => {
        const fahrenheit = 50;

        const celsius = util.f2c(fahrenheit);

        expect(celsius).to.eql(10);
    });
})
