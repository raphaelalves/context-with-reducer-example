import { useContext } from "react";
import { ACTION_TYPES, CounterContext } from "../context";

export const Component1 = ({ children }) => {
  const { state, dispatch } = useContext(CounterContext);
  console.log();
  return (
    <div>
      {" "}
      1 - The counter is: <b>{state.counter}</b> I can INCREASE the counter{" "}
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.INCREASE_COUNTER,
          })
        }
      >
        Hit me!
      </button>
      <br />
      <br />
      {children}
    </div>
  );
};
