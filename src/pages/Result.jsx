import { useEffect, useState } from "react";

export default function Result() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300">
      <h2 className="text-3xl font-bold text-white">💘 Your Love Score 💘</h2>
      <div className="mt-4 text-6xl font-bold text-yellow-300">{percentage}%</div>
      <p className="mt-4 text-lg text-white">Wow! This must be destiny! 💖</p>
    </div>
  );
}