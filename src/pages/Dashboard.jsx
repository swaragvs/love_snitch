import { useEffect, useState } from "react";

export default function Dashboard() {
  const [crushList, setCrushList] = useState([]);

  useEffect(() => {
    const storedCrushes = Object.keys(localStorage)
      .filter((key) => key.startsWith("crush_"))
      .map((key) => localStorage.getItem(key));
    setCrushList(storedCrushes);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h2 className="text-3xl font-bold text-blue-600">💀 Secret Crushes Revealed 💀</h2>
      <ul className="mt-4 p-4 bg-white rounded-lg shadow-lg">
        {crushList.length > 0 ? (
          crushList.map((name, idx) => (
            <li key={idx} className="text-lg text-red-500 font-bold">❤️ {name}</li>
          ))
        ) : (
          <p>No secrets yet... 😈</p>
        )}
      </ul>
    </div>
  );
}
