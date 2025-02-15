import { useState } from "react";
import { useParams } from "react-router-dom";

export default function LoveForm() {
  const { id } = useParams();
  const [crush, setCrush] = useState("");

  const handleSubmit = () => {
    localStorage.setItem(`crush_${id}`, crush);
    window.location.href = "/result";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h2 className="text-3xl font-bold text-red-600">💕 Love Calculator 💕</h2>
      <input
        type="text"
        value={crush}
        onChange={(e) => setCrush(e.target.value)}
        placeholder="Enter Crush's Name"
        className="mt-4 p-2 border-2 border-red-500 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600"
      >
        Calculate Love %
      </button>
    </div>
  );
}
