import { useState } from "react";
import BackButton from "../components/BackButton";

function Feedback() {
  const [citizenRating, setCitizenRating] =
    useState(0);

  const [contractorRating, setContractorRating] =
    useState(0);

  const [feedback, setFeedback] =
    useState("");

  const handleSubmit = () => {

    const ratingData = {
      citizenSatisfaction:
        citizenRating,

      contractorRating:
        contractorRating,

      feedback,
    };

    console.log(ratingData);

    alert(
      "Thank you for your feedback!"
    );
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-6">

      <div className="max-w-3xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          Rate Completed Work
        </h1>

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

          <h2 className="text-2xl mb-4">
            Citizen Satisfaction
          </h2>

          <select
            value={citizenRating}
            onChange={(e)=>
              setCitizenRating(
                e.target.value
              )
            }
            className="w-full bg-[#0F172A] p-4 rounded-xl mb-6"
          >
            <option value="0">
              Select Rating
            </option>

            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>

          <h2 className="text-2xl mb-4">
            Contractor Rating
          </h2>

          <select
            value={contractorRating}
            onChange={(e)=>
              setContractorRating(
                e.target.value
              )
            }
            className="w-full bg-[#0F172A] p-4 rounded-xl mb-6"
          >
            <option value="0">
              Select Rating
            </option>

            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>

          <textarea
            rows="5"
            value={feedback}
            onChange={(e)=>
              setFeedback(
                e.target.value
              )
            }
            placeholder="Write feedback..."
            className="w-full bg-[#0F172A] p-4 rounded-xl mb-6"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl"
          >
            Submit Feedback
          </button>

        </div>

      </div>

    </div>
  );
}

export default Feedback;