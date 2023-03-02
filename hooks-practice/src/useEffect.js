import React, { useEffect, useState } from "react";
import "./App.css";

//---useEffect-----------------------------------------

function App() {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // deps(dependency: [])가 비어있으면 Mount 시에만 실행된다
  useEffect(() => {
    sayHello();
  }, [number, aNumber]);
  return (
    <div className="app">
      <h1>useEffect Practice</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
export default App;
