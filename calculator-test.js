
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount : 1000,
    years : 1,
    rate : 12
  };
  expect(calculateMonthlyPayment(values)).toEqual('88.85')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 10000,
    years : 10,
    rate : 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07')
});

/// etc
