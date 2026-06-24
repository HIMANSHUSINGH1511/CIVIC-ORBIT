import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

import {
  subscribeComplaints,
  updateComplaintFirestore,
} from "../services/firestoreComplaintService";

function CitizenDashboard() {

  const [complaints, setComplaints] =
    useState([]);

  const [feedback, setFeedback] =
    useState({});

  useEffect(() => {

    const unsubscribe =
      subscribeComplaints(
        setComplaints
      );

    return () =>
      unsubscribe();

  }, []);

  const submitFeedback =
    async (item) => {

      const data =
        feedback[item.id];

      if (
        !data ||
        !data.citizenSatisfaction ||
        !data.contractorRating
      ) {
        alert(
          "Please provide ratings"
        );
        return;
      }

      await updateComplaintFirestore(
        item.id,
        {
          citizenSatisfaction:
            data.citizenSatisfaction,

          contractorRating:
            data.contractorRating,

          feedbackText:
            data.feedbackText || "",

          feedbackSubmitted:
            true,
        }
      );

      alert(
        "Feedback Submitted Successfully"
      );
    };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-6xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          👤 Citizen Dashboard
        </h1>

        {complaints.map((item) => (

          <div
            key={item.id}
            className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 mb-6"
          >

            <h2 className="text-2xl font-bold text-cyan-400">
              {item.category}
            </h2>

            <p className="mt-2">
              {item.description}
            </p>

            <p className="mt-3">
              📍 {item.location}
            </p>

            <p className="mt-2 text-cyan-400">
              Status: {item.status}
            </p>

            <p className="mt-2">
              Progress:
              {" "}
              {item.progress || 0}%
            </p>

            {/* DONATION SECTION */}

            {item.donationEnabled && (

              <div className="mt-5 bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-2xl">

                <h3 className="text-yellow-400 text-xl font-bold">
                  💰 Community Fund
                </h3>

                <p className="mt-2">
                  Raised:
                  ₹{item.totalDonated || 0}
                </p>

                <p>
                  Used:
                  ₹{item.amountUsed || 0}
                </p>

                <p>
                  Remaining:
                  ₹
                  {(item.totalDonated || 0) -
                    (item.amountUsed || 0)}
                </p>

             <Link
  to={`/donate/${item.id}`}
>
  <button className="mt-4 bg-green-600 px-5 py-3 rounded-xl">
    Donate
  </button>
</Link>

              </div>

            )}

            {/* FEEDBACK SECTION */}

            {item.status ===
              "Resolved" &&
              !item.feedbackSubmitted && (

              <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-5">

                <h3 className="text-xl font-bold text-green-400 mb-4">
                  ⭐ Rate Completed Work
                </h3>

                <select
                  className="bg-[#0F172A] p-3 rounded-xl w-full mb-4"
                  onChange={(e) =>
                    setFeedback({
                      ...feedback,
                      [item.id]: {
                        ...feedback[item.id],
                        citizenSatisfaction:
                          Number(
                            e.target.value
                          ),
                      },
                    })
                  }
                >
                  <option value="0">
                    Citizen Satisfaction
                  </option>

                  <option value="1">
                    ⭐
                  </option>

                  <option value="2">
                    ⭐⭐
                  </option>

                  <option value="3">
                    ⭐⭐⭐
                  </option>

                  <option value="4">
                    ⭐⭐⭐⭐
                  </option>

                  <option value="5">
                    ⭐⭐⭐⭐⭐
                  </option>

                </select>

                <h3 className="text-cyan-400 mb-3">
                  👷 Contractor Rating
                </h3>

                <select
                  className="bg-[#0F172A] p-3 rounded-xl w-full"
                  onChange={(e) =>
                    setFeedback({
                      ...feedback,
                      [item.id]: {
                        ...feedback[item.id],
                        contractorRating:
                          Number(
                            e.target.value
                          ),
                      },
                    })
                  }
                >
                  <option value="0">
                    Rate Contractor
                  </option>

                  <option value="1">
                    ⭐
                  </option>

                  <option value="2">
                    ⭐⭐
                  </option>

                  <option value="3">
                    ⭐⭐⭐
                  </option>

                  <option value="4">
                    ⭐⭐⭐⭐
                  </option>

                  <option value="5">
                    ⭐⭐⭐⭐⭐
                  </option>

                </select>

                <textarea
                  placeholder="Write feedback..."
                  className="w-full mt-4 bg-[#0F172A] p-4 rounded-xl"
                  onChange={(e) =>
                    setFeedback({
                      ...feedback,
                      [item.id]: {
                        ...feedback[item.id],
                        feedbackText:
                          e.target.value,
                      },
                    })
                  }
                />

                <button
                  onClick={() =>
                    submitFeedback(
                      item
                    )
                  }
                  className="mt-4 bg-green-600 px-6 py-3 rounded-xl"
                >
                  Submit Feedback
                </button>

              </div>

            )}

            {item.feedbackSubmitted && (

              <div className="mt-5 bg-cyan-500/10 p-5 rounded-xl">

                <h3 className="text-green-400 font-bold">
                  ✅ Feedback Submitted
                </h3>

                <p className="mt-3">
                  Citizen Rating:
                  {" "}
                  {item.citizenSatisfaction}/5
                </p>

                <p>
                  Contractor Rating:
                  {" "}
                  {item.contractorRating}/5
                </p>

                <p className="mt-3">
                  {item.feedbackText}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default CitizenDashboard;