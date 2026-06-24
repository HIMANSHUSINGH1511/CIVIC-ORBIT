import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-6 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-xl text-white"
    >
      ← Back
    </button>
  );
}

export default BackButton;