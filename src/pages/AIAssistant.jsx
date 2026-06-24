import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";

import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function AIAssistant() {
  const [complaints, setComplaints] =
    useState([]);

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  useEffect(() => {
    const unsubscribe =
      subscribeComplaints(
        (data) => {
          setComplaints(data);
        }
      );

    return () => unsubscribe();
  }, []);

  const askAI = () => {
    const q =
      question.toLowerCase();

    // TOTAL
    if (
      q.includes("total")
    ) {
      setAnswer(
        `Total Complaints: ${complaints.length}`
      );
      return;
    }

    // CRITICAL
    if (
      q.includes("critical")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.priority ===
            "Critical"
        ).length;

      setAnswer(
        `There are ${count} critical complaints.`
      );
      return;
    }

    // RESOLVED
    if (
      q.includes("resolved")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.resolved
        ).length;

      setAnswer(
        `${count} complaints are resolved.`
      );
      return;
    }

    // PENDING
    if (
      q.includes("pending") ||
      q.includes("unresolved")
    ) {
      const count =
        complaints.filter(
          (c) =>
            !c.resolved
        ).length;

      setAnswer(
        `${count} complaints are pending.`
      );
      return;
    }

    // POTHOLE
    if (
      q.includes("pothole")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.category ===
            "Pothole"
        ).length;

      setAnswer(
        `There are ${count} pothole complaints.`
      );
      return;
    }

    // GARBAGE
    if (
      q.includes("garbage")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.category ===
            "Garbage"
        ).length;

      setAnswer(
        `There are ${count} garbage complaints.`
      );
      return;
    }

    // WATER
    if (
      q.includes("water")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.category ===
            "Water Leakage"
        ).length;

      setAnswer(
        `There are ${count} water leakage complaints.`
      );
      return;
    }

    // VERIFIED
    if (
      q.includes("verified")
    ) {
      const count =
        complaints.filter(
          (c) =>
            c.verified
        ).length;

      setAnswer(
        `${count} complaints are community verified.`
      );
      return;
    }

    // HIGHEST PRIORITY
    if (
      q.includes("highest priority")
    ) {
      const highest =
        [...complaints].sort(
          (a, b) =>
            (b.priorityScore || 0) -
            (a.priorityScore || 0)
        )[0];

      if (!highest) {
        setAnswer(
          "No complaints found."
        );
        return;
      }

      setAnswer(
        `Highest Priority Complaint: ${highest.category} at ${highest.location} (Score: ${highest.priorityScore})`
      );
      return;
    }

    // DEFAULT
    setAnswer(
      "Try asking:\n\n• Total complaints\n• Critical complaints\n• Resolved complaints\n• Pending complaints\n• Pothole complaints\n• Garbage complaints\n• Water complaints\n• Verified complaints\n• Highest priority complaint"
    );
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">
      <div className="max-w-4xl mx-auto">
<BackButton />
        <h1 className="text-5xl font-bold mb-8">
          🤖 Civic AI Assistant
        </h1>

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

          <textarea
            value={question}
            onChange={(e) =>
              setQuestion(
                e.target.value
              )
            }
            placeholder="Ask about complaints..."
            className="w-full bg-[#0F172A] p-4 rounded-xl border border-cyan-500/20"
            rows="4"
          />

          <button
            onClick={askAI}
            className="mt-4 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl"
          >
            Ask AI
          </button>

          <div className="mt-5 text-gray-400">
            <p>
              Example Questions:
            </p>

            <ul className="mt-2 space-y-1">
              <li>• Total complaints</li>
              <li>• Critical complaints</li>
              <li>• Resolved complaints</li>
              <li>• Pending complaints</li>
              <li>• Pothole complaints</li>
              <li>• Verified complaints</li>
              <li>• Highest priority complaint</li>
            </ul>
          </div>

          {answer && (
            <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
              <h3 className="text-cyan-400 font-bold mb-2">
                AI Response
              </h3>

              <p className="whitespace-pre-line">
                {answer}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AIAssistant;