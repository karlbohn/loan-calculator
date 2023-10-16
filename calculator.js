window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: (document.getElementById("loan-amount").value),
    years: (document.getElementById("loan-years").value),
    rate: (document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 300000, years: 30, rate: 3.5 };
  const amountInitial = document.getElementById("loan-amount");
  amountInitial.value = values.amount;
  const yearsInitial = document.getElementById("loan-years");
  yearsInitial.value = values.years;
  const rateInitial = document.getElementById("loan-rate");
  rateInitial.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const months = Math.floor((values.years  * 12));
  return (
    ((values.amount * monthlyRate) /
    (1 - Math.pow((1 + monthlyRate), -months))).toFixed(2)    
  )
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
