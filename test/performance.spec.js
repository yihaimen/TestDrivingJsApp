const statement = require('../src/tdd/performance');
const expect = require('chai').expect;

const plays = {
  "hamlet": {
    "name": "aHamlet",
    "type": "tragedy"
  },
  "as-like": {
    "name": "As You Like It",
    "type": "comedy"
  },
  "othello": {
    "name": "Othello",
    "type": "tragedy"
  }
};

const invoices = [
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
];

describe('Test performance', () => {
  it('should return String when pass into invoice and plays', () => {
    const result = statement(invoices[0], plays);
    expect(result).to.eql(47);
  });
});