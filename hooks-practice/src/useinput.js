import React, { useState } from "react";
import "./App.css";

//---useInput--------------------------------------
// validator - 유효성 검증 기능
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value: value },
    } = event;
    let willUpdate = true;
    // validator의 type이 function 이라면 willUpdate에 validator 결과를 업로드
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  // value의 길이가 10보다 작으면 true
  // @를 포함하지 않으면 업데이트한다
  const maxLen = (value) => !value.includes("@") <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="app">
      <h1>Hello</h1>
      {/* Same code */}
      {/* unpack */}
      {/* 스프레드 연산자 */}
      <input placeholder="Name" {...name} />
      {/* Same code */}
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
};

export default App;
