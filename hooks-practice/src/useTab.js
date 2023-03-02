import React, { useState } from "react";
import "./App.css";

//---useTab-----------------------------------------

const content = [
  {
    id: 1,
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    id: 2,
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // 훅은 최상위에서만 호출 해야한다
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // 현재 선택한 Item의 content를 보여준다
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="app">
      <h1>useTab Practice</h1>
      {content.map((section, index) => (
        <button key={section.id} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <hr />
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
