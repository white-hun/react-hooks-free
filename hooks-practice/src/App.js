import React, { useState } from "react";
import styles from "./App.css";

function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className={styles.app}>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}
export default App;

//----------------------------------------------------------------
//class component type
class AppUgly extends React.Component {
  state = {
    item: 0,
  };
  render() {
    const { item } = this.state;
    return (
      <div className={styles.app}>
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

// export default AppUgly;
