function statement(invoice, plays) {
  let result = `Statement for ${invoice.customer}\n`;
  for (let perf of invoice.performances) {
    // print line for this order
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(appleSauce())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return totalVolumeCredits();

  function appleSauce() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat(
      "en-US",
      {
        style: 'currency', currency: "USD",
        minimumFractionDigits: 2
      }).format(aNumber)/100;
  }

  function volumeCreditsFor(perf) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
    if ("comedy" === playFor(perf).type) {
      result += Math.floor(perf.audience / 5);
    }
    return result;
  }

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
  
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
}

module.exports = statement;