import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {
  subscribeComplaints,
  updateComplaintFirestore,
} from "../services/firestoreComplaintService";

function Donate() {
  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {
    const unsubscribe =
      subscribeComplaints(
        setComplaints
      );

    return () => unsubscribe();
  }, []);

  const donateFund = async (
    item,
    amount
  ) => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    await updateComplaintFirestore(
      item.id,
      {
        fundRaised:
          (item.fundRaised || 0) +
          Number(amount),
      }
    );

    alert(
      `₹${amount} donated successfully`
    );
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          ❤️ Community Funding
        </h1>

        {complaints
          .filter(
            (item) =>
              item.donationEnabled
          )
          .map((item) => (

            <DonationCard
              key={item.id}
              item={item}
              donateFund={
                donateFund
              }
            />

          ))}

      </div>
    </div>
  );
}

function DonationCard({
  item,
  donateFund,
}) {
  const [amount, setAmount] =
    useState("");

  const progress =
    (
      ((item.fundRaised || 0) /
        item.fundTarget) *
      100
    ).toFixed(0);

  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 mb-6">

      <h2 className="text-2xl font-bold text-cyan-400">
        {item.category}
      </h2>

      <p className="mt-3">
        {item.description}
      </p>

      <p className="mt-4">
        🎯 Target:
        ₹{item.fundTarget}
      </p>

      <p>
        💰 Raised:
        ₹{item.fundRaised || 0}
      </p>

      <div className="w-full bg-gray-700 rounded-full h-4 mt-4">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-2">
        {progress}% Funded
      </p>

      <div className="flex gap-3 mt-5">

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          className="bg-[#0F172A] p-3 rounded-xl flex-1"
        />

        <button
          onClick={() =>
            donateFund(
              item,
              amount
            )
          }
          className="bg-green-600 px-6 rounded-xl"
        >
          Donate
        </button>

      </div>

    </div>
  );
}

export default Donate;