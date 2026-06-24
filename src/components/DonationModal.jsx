import { useState } from "react";

function DonationModal({
  onDonate,
}) {
  const [amount, setAmount] =
    useState("");

  return (
    <div className="bg-black/80 fixed inset-0 flex justify-center items-center">

      <div className="bg-[#0F172A] p-8 rounded-2xl">

        <h2 className="text-2xl mb-4">
          Donate
        </h2>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          className="p-3 rounded-xl text-black"
        />

        <button
          onClick={() =>
            onDonate(amount)
          }
          className="bg-green-500 px-5 py-3 rounded-xl ml-3"
        >
          Donate
        </button>

      </div>

    </div>
  );
}

export default DonationModal;