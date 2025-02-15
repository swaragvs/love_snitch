import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function LoveForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [crush, setCrush] = useState("");
  const [isValidLink, setIsValidLink] = useState(true);

  useEffect(() => {
    // Check if the id is valid (you can add your own validation logic here)
    if (!id) {
      setIsValidLink(false);
    }
  }, [id]);

  const handleSubmit = () => {
    if (userName && crush) {
      const existingData = JSON.parse(localStorage.getItem(`crush_${id}`));
      localStorage.setItem(`crush_${id}`, JSON.stringify({ ...existingData, userName, crush }));
      navigate("/result");
    } else {
      alert("Please enter both names.");
    }
  };

  if (!isValidLink) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-100">
        <h2 className="text-3xl font-bold text-red-600">Invalid Link</h2>
        <p className="text-red-500">The link you used is not valid. Please generate a new link.</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-400 to-pink-200 p-6">
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      <h2 className="text-4xl font-bold text-white mb-8">💕 Love Calculator 💕</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Your Name"
        className="mt-4 p-2 border-2 border-red-500 rounded-lg"
      />
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
        Submit
      </button>
    </div>
  );
}