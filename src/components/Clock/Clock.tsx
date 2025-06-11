import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hour = Math.floor(totalSeconds / 3600);
  const fnRef = useRef<number>(0);
  function handleStart() {
    if (fnRef.current) {
      clearInterval(fnRef.current);
    }
    fnRef.current = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(fnRef.current);
  }
  useEffect(() => {
    return () => {
      clearInterval(fnRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    bg-gray-900 text-white font-mono"
    >
      <div className="text-5xl mb-8 p-4 bg-gray-800 rounded-lg shadow-lg">
        <span className="text-blue-400">{String(hour).padStart(2, "0")}</span>:
        <span className="text-green-400">
          {String(minutes).padStart(2, "0")}
        </span>
        :
        <span className="text-red-400">{String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700
          text-white font-bold rounded-full shadow-lg transition
          duration-300 ease-in-out transform hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-6 py-3 bg-red-600 hover:bg-red-700
          text-white font-bold rounded-full shadow-lg transition
          duration-300 ease-in-out transform hover:scale-105"
        >
          Stop
        </button>
      </div>
    </div>
  );
}
