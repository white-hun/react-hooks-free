import React, { useEffect, useRef } from "react";
import "./App.css";
//---useClick-----------------------------------------

const useClick = (onClick) => {
  // element reference
  const element = useRef();
  // useEffect는 componentDidmount 상태에서 동작
  useEffect(() => {
    // onClick의 type이 function이 아닐 때 아무것도 return 하지않는다
    if (typeof onClick !== "function") {
      return;
    }
    // element가 존재할 때
    // click event 추가
    // componentDidMount일 때만 호출
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnMount될 때 eventListener를 지워야한다
    // event를 제거하는 함수를 return한다
    // componentWillUnMount 일 때 return
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // dependency가 존재하지 않는한 componentDidMount, componentDidUpdate 때 호출
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};
const App = () => {
  const onClick = () => console.log("Test Hello");
  const title = useClick(onClick);
  return (
    <div className="app">
      <h1 ref={title}>useClick Practice</h1>
    </div>
  );
};

export default App;

// componentWillUnMount 될 때 eventListener를 지워야한다
// onClick를 가진 useClick이 mount 되었을 때 click event 추가
