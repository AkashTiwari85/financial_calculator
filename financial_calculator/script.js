function showCalculator(calculatorId) {
  const calculators = document.querySelectorAll(".calculator");
  calculators.forEach((calc) => {
    calc.classList.remove("active");
  });
  document.getElementById(calculatorId).classList.add("active");
}

function calculateEMI() {
  const principal = parseFloat(document.getElementById("loanAmount").value);
  const interest =
    parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  const months = parseFloat(document.getElementById("loanTenure").value) * 12;

  const emi =
    (principal * interest * Math.pow(1 + interest, months)) /
    (Math.pow(1 + interest, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  document.getElementById("emiResult").innerText = `Monthly EMI: ₹${emi.toFixed(
    2
  )}`;
  document.getElementById(
    "totalInterest"
  ).innerText = `Total Interest Paid: ₹${totalInterest.toFixed(2)}`;
  document.getElementById(
    "totalPayment"
  ).innerText = `Total Payment: ₹${totalPayment.toFixed(2)}`;
}

function calculateSIP() {
  const sipAmount = parseFloat(document.getElementById("sipAmount").value);
  const rateOfReturn =
    parseFloat(document.getElementById("sipRate").value) / 12 / 100;
  const tenure = parseFloat(document.getElementById("sipTenure").value) * 12;

  const futureValue =
    sipAmount *
    (((Math.pow(1 + rateOfReturn, tenure) - 1) / rateOfReturn) *
      (1 + rateOfReturn));
  const totalInvestment = sipAmount * tenure;

  document.getElementById(
    "sipResult"
  ).innerText = `Total Investment: ₹${totalInvestment.toFixed(2)}`;
  document.getElementById(
    "sipFutureValue"
  ).innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
}

function calculateFD() {
  const amount = parseFloat(document.getElementById("fdAmount").value);
  const rate = parseFloat(document.getElementById("fdRate").value) / 100;
  const tenure = parseFloat(document.getElementById("fdTenure").value);

  const maturityAmount = amount * Math.pow(1 + rate, tenure);
  document.getElementById(
    "fdResult"
  ).innerText = `Total Deposit: ₹${amount.toFixed(2)}`;
  document.getElementById(
    "fdFutureValue"
  ).innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
}

function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = (income - 500000) * 0.1 + 12500;
  } else {
    tax = (income - 1000000) * 0.3 + 12500 + 50000;
  }

  document.getElementById("taxResult").innerText = `Tax Payable: ₹${tax.toFixed(
    2
  )}`;
}
