import { useEffect, useState } from "react";

function App() {
  const light = [
    { color: "red", time: 5, priority: 1 },
    { color: "yellow", time: 2, priority: 2 },
    { color: "green", time: 4, priority: 3 },
  ];
  const sortedLight = [...light].sort((a, b) => a.priority - b.priority);
 
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % sortedLight.length;
        return nextIndex;
      });
      console.log(sortedLight[index]);
    }, sortedLight[index].time * 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [index, sortedLight]);
  return (
    <>
      {sortedLight.map((value, id) => (
        <div
          key={id}
          style={{
            backgroundColor: value.color === sortedLight[index].color ? value.color : "white",
            width: "100px",
            height: "100px",
            margin: "10px auto",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
      ))}
      
    </>
  );
}

export default App;
