import { useState } from "react";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [userName, setUserName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [lovePercentage, setLovePercentage] = useState(null);
  const [link, setLink] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const navigate = useNavigate();

  const calculateLove = () => {
    if (!userName || !crushName) {
      alert("Please enter both your name and your crush's name.");
      return;
    }
    const percentage = Math.floor(Math.random() * 100) + 1;
    setLovePercentage(percentage);
  };

  const generateLink = () => {
    if (!userName || !crushName) {
      alert("Please enter both your name and your crush's name.");
      return;
    }
    const uniqueId = Math.random().toString(36).substring(7);
    localStorage.setItem(`crush_${uniqueId}`, JSON.stringify({ userName, crushName, lovePercentage }));
    const newLink = `${window.location.origin}/?id=${uniqueId}`;
    setLink(newLink);
    window.open(newLink, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check this out! ${link}`)}`;
    window.open(whatsappUrl, "_blank");
  };

  const revealCrush = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-400 to-pink-200 p-6">
      <h1 className="text-6xl font-extrabold text-white shadow-md drop-shadow-lg">💖 Love Snitch 💖</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Your Name"
        className="mt-4 p-2 border-2 border-red-500 rounded-lg"
      />
      <input
        type="text"
        value={crushName}
        onChange={(e) => setCrushName(e.target.value)}
        placeholder="Enter Crush's Name"
        className="mt-4 p-2 border-2 border-red-500 rounded-lg"
      />
      <button
        onClick={calculateLove}
        className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600"
      >
        Calculate Love %
      </button>
      {lovePercentage !== null && (
        <>
          <p className="mt-4 text-lg font-bold text-pink-600">Love Percentage: {lovePercentage}%</p>
          <button
            onClick={generateLink}
            className="mt-4 bg-red-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-600 transition text-lg font-semibold"
          >
            Generate Love Link
          </button>
        </>
      )}
      {link && (
        <div className="mt-6 p-6 bg-white shadow-2xl rounded-3xl w-96 text-center border-2 border-red-400">
          <p className="text-gray-700 font-medium text-lg">🔗 Your Secret Link:</p>
          <input
            type="text"
            value={link}
            readOnly
            className="w-full text-blue-600 font-bold mt-3 p-3 border rounded-lg text-lg bg-gray-100"
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition text-lg font-semibold flex items-center gap-2"
            >
              <Copy size={20} /> {copySuccess ? "Copied!" : "Copy Link"}
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold"
            >
              Share on WhatsApp 📲
            </button>
          </div>
        </div>
      )}
      {lovePercentage !== null && (
        <button
          onClick={revealCrush}
          className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition text-lg font-semibold animate-pulse"
        >
          Dashboard
        </button>
      )}
    </div>
  );
}