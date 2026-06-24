export const loadRazorpay =
  (amount) => {

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount:
        amount * 100,
      currency: "INR",
      name:
        "CIVIC ORBIT",

      description:
        "Community Issue Fund",

      handler: function (
        response
      ) {
        alert(
          "Donation Successful"
        );
      },
    };

    const rzp =
      new window.Razorpay(
        options
      );

    rzp.open();
  };