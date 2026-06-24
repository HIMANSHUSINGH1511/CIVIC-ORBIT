export const startPayment =
  (amount) => {

    const options = {
      key: "YOUR_RAZORPAY_KEY",

      amount:
        amount * 100,

      currency: "INR",

      name:
        "Civic Orbit",

      description:
        "Issue Donation",

      handler:
        function (response) {

          alert(
            "Payment Success"
          );

          console.log(
            response
          );
        }
    };

    const payment =
      new window.Razorpay(
        options
      );

    payment.open();
  };