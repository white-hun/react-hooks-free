import React, { useEffect, useState } from "react";
import "./App";

//---useTitle-----------------------------------------
// 웹브라우저의 창 제목

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    // html head에 있는 <title> tag의 의미
    const htmlTitle = document.querySelector("title");
    // <title> state title </title>
    htmlTitle.innerText = title;
  };
  // title이 업데이트 될 때 updateTitle 실행
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  // useTitle default - Loading... = setTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="app">
      <h1>useTitle</h1>
    </div>
  );
};

export default App;
