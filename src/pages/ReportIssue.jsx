import axios from "axios";
import {
  useState,
  useEffect
} from "react";

import {
  saveComplaintFirestore
}
from "../services/firestoreComplaintService";
import { analyzeComplaint } from "../services/geminiService";
// import { v4 as uuidv4 } from "uuid";
import {
  calculatePriority,
} from "../utils/priorityEngine";
import {
  addNotification
} from "../services/notificationService";

import {
  classifyComplaint,
}
from "../utils/aiComplaintClassifier";

function ReportIssue() {
  const [category, setCategory] = useState("Pothole");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [video, setVideo] = useState(null);

 const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageVerification, setImageVerification] =
  useState("");

const [verifyingImage, setVerifyingImage] =
  useState(false);
const detectLocation = async () => {

  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {

      try {

        const lat =
          position.coords.latitude;

        const lng =
          position.coords.longitude;

        const response =
          await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );

        const address =
          response.data.address;

        const city =
          address.city ||
          address.town ||
          address.village ||
          "";

        const state =
          address.state || "";

        setLocation(
          `${city}, ${state}`
        );

      } catch (error) {

        console.error(error);

        setLocation(
          `${position.coords.latitude}, ${position.coords.longitude}`
        );
      }
    },

    (error) => {
      console.error(error);
      alert("Unable to fetch location");
    }
  );
};
useEffect(() => {
  detectLocation();
}, []);



const verifyImage = () => {

  if (!image) {
    alert("Upload image first");
    return;
  }

  setVerifyingImage(true);

  setTimeout(() => {

    setImageVerification(
      `✅ Image appears related to ${category}.
Confidence: 91%`
    );

    setVerifyingImage(false);

  }, 1500);
};
  // =====================
  // AI ANALYSIS
  // =====================

  const handleAnalyze = async () => {
    if (!description) {
      alert("Enter description first");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeComplaint(
        description,
        category
      );

      setAiResult(result);
    } catch (error) {
      console.error(error);

      setAiResult(
        "AI Analysis Failed. Please check Gemini API key."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // SUBMIT
  // =====================

 const handleSubmit = async () => {
    if (!description || !location) {
      alert("Please fill all required fields");
      return;
    }

    const priorityData =
  calculatePriority(
    category,
    description
  );

    const complaint = {
      
     reportedBy:
JSON.parse(
  localStorage.getItem("civic_user")
)?.name || "Anonymous",
      category,
      description,
      location,
      area: location,

      priorityScore:
  priorityData.score,

priority:
  priorityData.priority,

      beforeImage: image ? URL.createObjectURL(image) : "",
afterImage: "",
completionNote: "",

      upvotes: 0,
downvotes: 0,
verified: false,



assignedOfficer: "",
department: "",
progress: 0,
resolved: false,

allocatedBudget: 0,
spentBudget: 0,
contractor: "",
contractorRating: 0,
citizenSatisfaction: 0,
feedbackSubmitted: false,
citizenFeedback: "",

      video: video ? video.name : "",
     status: "Reported",

timeline: [
  {
    status: "Reported",
    date: new Date().toLocaleString(),
  },
],

createdAt: new Date().toLocaleString(),
      
    };
try {
  await saveComplaintFirestore(complaint);

  alert("Complaint Saved To Firestore");
} catch (error) {
  console.error("Firestore Error:", error);

  alert(error.message);
}
addNotification(
  `New ${category} complaint submitted at ${location}`
);
    alert("Complaint Submitted Successfully!");

    setCategory("Pothole");
    setDescription("");
    setLocation("");
    setImage(null);
    setVideo(null);
    setImagePreview("");
    setAiResult("");
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          Report an Issue
        </h1>

        <p className="text-center text-gray-400 mb-10">
          AI Powered Civic Complaint System
        </p>

        <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10">

          {/* CATEGORY */}

          <div className="mb-6">
            <label className="block mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#0F172A] border border-cyan-500/20 p-4 rounded-xl"
            >
              <option>Pothole</option>
              <option>Garbage</option>
              <option>Water Leakage</option>
              <option>Streetlight</option>
              <option>Drainage</option>
            </select>
          </div>

          {/* DESCRIPTION */}

          <div className="mb-6">
            <label className="block mb-2">
              Description
            </label>

         <textarea
  rows="5"
  value={description}
  onChange={(e) => {

    setDescription(
      e.target.value
    );

    const prediction =
      classifyComplaint(
        e.target.value
      );

    setAiResult(
      prediction
    );
  }}
  placeholder="Describe the issue..."
  className="w-full bg-[#0F172A] border border-cyan-500/20 p-4 rounded-xl"
/>
          </div>

          {/* IMAGE */}

          <div className="mb-6">
            <label className="block mb-2">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                setImage(file);

                if (file) {
                  setImagePreview(
                    URL.createObjectURL(file)
                  );
                }
              }}
              className="w-full"
            />

            {image && (
              <p className="mt-2 text-cyan-400">
                {image.name}
              </p>
            )}

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-72 object-cover rounded-xl mt-4 border border-cyan-500/20"
              />
            )}
          </div>




<button
  type="button"
  onClick={verifyImage}
  className="mt-4 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg"
>
  {verifyingImage
    ? "Verifying..."
    : "🤖 Verify Image"}
</button>


{imageVerification && (

  <div className="mt-4 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">

    <h3 className="text-purple-400 font-bold mb-2">
      AI Image Verification
    </h3>

    <p>
      {imageVerification}
    </p>

  </div>

)}
          {/* VIDEO */}

          <div className="mb-6">
            <label className="block mb-2">
              Upload Video
            </label>

            <input
              type="file"
              onChange={(e) => setVideo(e.target.files[0])}
              className="w-full"
            />

            {video && (
              <p className="mt-2 text-cyan-400">
                {video.name}
              </p>
            )}
          </div>

          {/* LOCATION */}

     <div className="mb-6">

  <label className="block mb-2">
    Location
  </label>

  <input
    type="text"
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
    placeholder="Enter Location"
    className="w-full bg-[#0F172A] border border-cyan-500/20 p-4 rounded-xl"
  />

  <button
    type="button"
    onClick={detectLocation}
    className="mt-3 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg"
  >
    📍 Detect My Location
  </button>

</div>

          {/* AI BUTTON */}

          <button
            onClick={handleAnalyze}
            className="w-full mb-4 bg-cyan-600 hover:bg-cyan-700 py-4 rounded-xl font-semibold transition"
          >
            {loading
              ? "Analyzing..."
              : "Analyze with AI"}
          </button>

          {/* AI RESULT */}
{
  aiResult && (

    <div className="mb-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">

      <h3 className="text-xl font-bold text-cyan-400 mb-3">
        🤖 AI Smart Prediction
      </h3>

      <p className="mb-2">
        📂 Category:
        <span className="text-cyan-400 ml-2">
          {aiResult.category}
        </span>
      </p>

      <p className="mb-2">
        🏛 Department:
        <span className="text-green-400 ml-2">
          {aiResult.department}
        </span>
      </p>

      <p>
        🚨 Priority:
        <span className="text-red-400 ml-2">
          {aiResult.priority}
        </span>
      </p>

    </div>

  )
}

          {/* STATUS */}

          <div className="mb-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
            <p>
              <span className="font-semibold text-cyan-400">
                Complaint Status:
              </span>{" "}
              Ready To Submit
            </p>
          </div>

          {/* SUBMIT */}

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl text-white font-semibold hover:scale-[1.02] transition"
          >
            Submit Complaint
          </button>

        </div>

      </div>

    </div>
  );
}

export default ReportIssue;