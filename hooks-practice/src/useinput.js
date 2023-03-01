import React, { useState } from "react";
import styles from "./App.css";

//---useInput--------------------------------------
// validator - 유효성 검증 기능
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
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
  const maxLen = (value) => !value.includes("@") <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      {/* Same code */}
      {/* unpack */}
      <input placeholder="Name" {...name} />
      {/* Same code */}
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
};

export default App;
