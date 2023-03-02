import React, { useRef } from "react";
import "./App.css";

//---useRef-----------------------------------------
// reference - component의 어떤 부분을 선택할 수 있는 방법
// document.getElementByID()를 사용한 것과 동일하다

const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 3000);
  return (
    <div className="app">
      <h1>useRef Practice</h1>
      <hr />
      {/* input을 참조해라 */}
      <input ref={input} placeholder="Write here" />
    </div>
  );
};

export default App;
