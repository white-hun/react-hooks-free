import React, { useState } from "react";
import styles from "./App.css";

//---useInput--------------------------------------

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
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
