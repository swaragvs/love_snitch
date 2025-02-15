import { useState } from "react";

export default function Landing() {
  const [link, setLink] = useState("");

  const generateLink = () => {
    const uniqueId = Math.random().toString(36).substring(7);
    setLink(`${window.location.origin}/love/${uniqueId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <h1 className="text-4xl font-bold text-red-600">💖 Love Snitch 💖</h1>
      <button
        onClick={generateLink}
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600"
      >
        Generate Link
      </button>
      {link && (
        <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
          <p>🔗 Share this link:</p>
          <input type="text" value={link} readOnly className="w-full text-blue-600 font-bold" />
        </div>
      )}
    </div>
  );
}