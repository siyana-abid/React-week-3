import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="card">
        <h1>Redux App</h1>

        <h2>Counter</h2>
        <div className="counter">{count}</div>

        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          + Increment
        </button>

        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          - Decrement
        </button>


        <h2>Login / Logout</h2>

        {isLoggedIn ? (
          <>
            <h3 className="status">Welcome! You are logged in.</h3>
            <button
              className="logout"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h3>Please login to continue</h3>
            <button onClick={() => dispatch({ type: "LOGIN" })}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;