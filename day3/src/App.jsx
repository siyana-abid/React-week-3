
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <button
        className="increment"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment (+)
      </button>

      <button
        className="decrement"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement (-)
      </button>
    </div>
  );
}

export default App;
