import BackButton from "../components/BackButton";
import {
  addNews
} from "../services/newsService";
import {
  addNotification
} from "../services/notificationService";


import {
  subscribeComplaints,
  updateComplaintFirestore,
} from "../services/firestoreComplaintService";

import {
  useState,
  useEffect,
} from "react";

// import { storage } from "../firebase";

// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";

function GovernmentDashboard() {

  const [complaints, setComplaints] =
  useState([]);
useEffect(() => {

  const unsubscribe =
    subscribeComplaints(
      (data) => {

        setComplaints(data);

      }
    );

  return () =>
    unsubscribe();

}, []);

const updateField = async (
  id,
  field,
  value
) => {

  try {

    await updateComplaintFirestore(
      id,
      {
        [field]: value,
      }
    );

  } catch (error) {

    console.error(error);

  }
};

const updateStatus = async (
  id,
  progress,
  status
) => {

  const complaint =
    complaints.find(
      (c) => c.id === id
    );

  try {

  await updateComplaintFirestore(
  id,
  {
    progress,
    status,
    resolved:
      status === "Resolved",

    timeline: [
      ...(complaint.timeline || []),
      {
        status,
        date: new Date().toLocaleString(),
      },
    ],
  }
);

    addNotification(
      `Complaint moved to ${status}`
    );

    if (
      status === "Resolved" &&
      complaint
    ) {

      addNews(
        `${complaint.category} issue resolved at ${complaint.location}`
      );

    }

  } catch (error) {

    console.error(error);

  }
};

// const handleAfterImage = async (
//   id,
//   file
// ) => {

//   if (!file) return;

//   try {

//     const storageRef =
//       ref(
//         storage,
//         `afterImages/${Date.now()}-${file.name}`
//       );

//     await uploadBytes(
//       storageRef,
//       file
//     );

//     const downloadURL =
//       await getDownloadURL(
//         storageRef
//       );

//     await updateComplaintFirestore(
//       id,
//       {
//         afterImage:
//           downloadURL,
//       }
//     );

//   } catch (error) {

//     console.error(error);

//   }
// };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">
<BackButton />
        <h1 className="text-5xl font-bold mb-10">
          🏛 Government Dashboard
        </h1>

        {complaints.some(
          (c) =>
            c.priority === "Critical"
        ) && (
          <div className="bg-red-500/20 border border-red-500 rounded-2xl p-5 mb-8 text-red-300 font-semibold">
            🚨 Critical Civic Issues Require Immediate Attention
          </div>
        )}

        {[...complaints]
          .sort(
            (a, b) =>
              (b.priorityScore || 0) -
              (a.priorityScore || 0)
          )
          .map((item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 mb-8"
            >

              {/* HEADER */}

              <div className="flex justify-between items-center flex-wrap gap-4">

                <div>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    {item.category}
                  </h2>

                  <p className="text-gray-400">
                    📍 {item.location}
                  </p>
                </div>

                <div>

                  {item.verified ? (
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                      Community Verified
                    </span>
                  ) : (
                    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full">
                      Awaiting Verification
                    </span>
                  )}

                </div>

              </div>

              {/* DESCRIPTION */}

              <p className="mt-4 text-gray-300">
                {item.description}
              </p>

              {/* PRIORITY */}

              <div className="mt-4">

                <p
                  className={`font-bold ${
                    item.priority ===
                    "Critical"
                      ? "text-red-500"
                      : item.priority ===
                        "High"
                      ? "text-orange-400"
                      : item.priority ===
                        "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  AI Priority:
                  {" "}
                  {item.priority ||
                    "Low"}
                </p>

                <p className="text-cyan-400">
                  Priority Score:
                  {" "}
                  {item.priorityScore ||
                    50}
                </p>

              </div>

              {/* PROGRESS */}

              <div className="mt-6">

                <div className="flex justify-between mb-2">

                  <span>
                    Progress
                  </span>

                  <span>
                    {item.progress || 0}%
                  </span>

                </div>

                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{
                      width: `${item.progress || 0}%`,
                    }}
                  />

                </div>

              </div>

              <p className="mt-4 text-cyan-400 font-semibold">
                Status: {item.status}
              </p>
              <div className="flex gap-3 flex-wrap mt-6">

  <div className="bg-cyan-500/10 px-4 py-2 rounded-xl">
    📝 Reported
  </div>

  <div className="bg-yellow-500/10 px-4 py-2 rounded-xl">
    📋 Assigned
  </div>

  <div className="bg-blue-500/10 px-4 py-2 rounded-xl">
    🚧 In Progress
  </div>

  <div className="bg-green-500/10 px-4 py-2 rounded-xl">
    ✅ Resolved
  </div>

</div>

 {/* BUDGET TRANSPARENCY */}

<div className="mt-8">

  <h3 className="text-xl font-bold text-cyan-400 mb-4">
    💰 Budget Transparency
  </h3>

  <div className="grid md:grid-cols-2 gap-5">

    <div>

      <label className="block mb-2">
        Allocated Budget (₹)
      </label>

      <input
        type="number"
        value={item.allocatedBudget || 0}
        onChange={(e) =>
          updateField(
            item.id,
            "allocatedBudget",
            Number(e.target.value)
          )
        }
        className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
      />

    </div>

    <div>

      <label className="block mb-2">
        Spent Budget (₹)
      </label>

      <input
        type="number"
        value={item.spentBudget || 0}
        onChange={(e) =>
          updateField(
            item.id,
            "spentBudget",
            Number(e.target.value)
          )
        }
        className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
      />

    </div>

  </div>

  <div className="mt-4 bg-cyan-500/10 p-4 rounded-xl">

    <p>
      Allocated: ₹{item.allocatedBudget || 0}
    </p>

    <p>
      Spent: ₹{item.spentBudget || 0}
    </p>

    <p>
      Remaining:
      ₹
      {(item.allocatedBudget || 0) -
        (item.spentBudget || 0)}
    </p>

  </div>

</div>


{/* COMMUNITY FUND */}

<div className="mt-8">

  <h3 className="text-xl font-bold text-yellow-400 mb-4">
    💰 Community Fund
  </h3>

  <div className="flex gap-3 flex-wrap">

    <button
      onClick={() =>
        updateField(
          item.id,
          "donationEnabled",
          true
        )
      }
      className="bg-yellow-600 px-5 py-3 rounded-xl"
    >
      Enable Donations
    </button>

  </div>

  {item.donationEnabled && (

    <div className="mt-4 bg-yellow-500/10 p-5 rounded-xl">

      <p>
        Total Donations:
        ₹{item.totalDonated || 0}
      </p>

      <p>
        Amount Used:
        ₹{item.amountUsed || 0}
      </p>

      <p>
        Remaining:
        ₹
        {(item.totalDonated || 0) -
          (item.amountUsed || 0)}
      </p>

    </div>

  )}

</div>

<div className="mt-5">

  <input
    type="number"
    placeholder="Amount Used"
    value={item.amountUsed || ""}
    onChange={(e) =>
      updateField(
        item.id,
        "amountUsed",
        Number(e.target.value)
      )
    }
    className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
  />

</div>


              {/* CONTRACTOR */}
<div className="mt-8">

  <h3 className="text-xl font-bold text-cyan-400 mb-4">
    👷 Contractor Details
  </h3>

  <input
    type="text"
    placeholder="Contractor Name"
    value={item.contractor || ""}
    onChange={(e) =>
      updateField(
        item.id,
        "contractor",
        e.target.value
      )
    }
    className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
  />

</div>

<div className="mt-8">

  <h3 className="text-xl font-bold text-cyan-400 mb-4">
    🏢 Department Assignment
  </h3>

  <select
    value={item.department || ""}
    onChange={(e) =>
      updateField(
        item.id,
        "department",
        e.target.value
      )
    }
    className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
  >
    <option value="">
      Select Department
    </option>

    <option>
      Road Department
    </option>

    <option>
      Water Department
    </option>

    <option>
      Sanitation Department
    </option>

    <option>
      Electricity Department
    </option>

  </select>

</div>

              {/* COMPLETION NOTE */}

              <textarea
                value={
                  item.completionNote || ""
                }
                onChange={(e) =>
                  updateField(
                    item.id,
                    "completionNote",
                    e.target.value
                  )
                }
                placeholder="Completion Note"
                className="w-full mt-5 bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
              />
{/* CITIZEN FEEDBACK */}

{item.feedbackSubmitted && (

  <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-5">

    <h3 className="text-xl font-bold text-green-400 mb-4">
      ⭐ Citizen Feedback
    </h3>

    <p className="mb-2">
      Citizen Satisfaction:
      {" "}
      {item.citizenSatisfaction}/5
    </p>

    <p className="mb-2">
      Contractor Rating:
      {" "}
      {item.contractorRating}/5
    </p>

    <p className="text-gray-300 mt-3">
      {item.feedbackText}
    </p>

  </div>

)}



              {/* AFTER IMAGE */}
{/* 
              <div className="mt-5">

                <label>
                  Upload After Repair Image
                </label>

                <input
                  type="file"
                  className="block mt-2"
                  onChange={(e) =>
                    handleAfterImage(
                      item.id,
                      e.target.files[0]
                    )
                  }
                />

              </div> */}

{/* BEFORE AFTER */}

{item.beforeImage &&
 item.afterImage && (

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div>

      <h3 className="text-red-400 mb-3">
        Before Repair
      </h3>

      <img
        src={item.beforeImage}
        alt="Before"
        className="rounded-2xl h-64 w-full object-cover"
      />

    </div>

    <div>

      <h3 className="text-green-400 mb-3">
        After Repair
      </h3>

      <img
        src={item.afterImage}
        alt="After"
        className="rounded-2xl h-64 w-full object-cover"
      />

    </div>

  </div>

)}
             

              {/* ACTIONS */}

              <div className="flex gap-3 flex-wrap mt-8">

                <button
                  onClick={() =>
                    updateStatus(
                      item.id,
                      25,
                      "Assigned"
                    )
                  }
                  className="bg-yellow-600 px-4 py-2 rounded-lg"
                >
                  Assign
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      item.id,
                      60,
                      "In Progress"
                    )
                  }
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Start Work
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      item.id,
                      100,
                      "Resolved"
                    )
                  }
                  className="bg-green-600 px-4 py-2 rounded-lg"
                >
                  Resolve
                </button>

                

              </div>
              

            </div>

          ))}

      </div>

    </div>
  );
}

export default GovernmentDashboard;

