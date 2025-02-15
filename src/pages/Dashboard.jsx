import { useEffect, useState } from "react";

export default function Dashboard() {
  const [crushList, setCrushList] = useState([]);

  const fetchCrushes = () => {
    const storedCrushes = Object.keys(localStorage)
      .filter((key) => key.startsWith("crush_"))
      .map((key) => {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (e) {
          console.error(`Error parsing JSON for key ${key}:`, e);
          return null;
        }
      })
      .filter((crush) => crush !== null); // Filter out invalid entries
    
    // Keep only the last 6 entries
    if (storedCrushes.length > 6) {
      storedCrushes.splice(0, storedCrushes.length - 6);
    }
    
    setCrushList(storedCrushes);
  };

  useEffect(() => {
    fetchCrushes(); // Fetch initially

    // Set up an interval to check for updates every second
    const interval = setInterval(fetchCrushes, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h2 className="text-3xl font-bold text-blue-600">💀 Secret Crushes Revealed 💀</h2>
      <ul className="mt-4 p-4 bg-white rounded-lg shadow-lg">
        {crushList.length > 0 ? (
          crushList.map((crush, idx) => (
            <li key={idx} className="text-lg text-red-500 font-bold">
              ❤️ {crush.userName} loves {crush.crushName}
            </li>
          ))
        ) : (
          <p>No secrets yet... 😈</p>
        )}
      </ul>
    </div>
  );
}
