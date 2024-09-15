import { useContext } from "react";
import { ACTION_TYPES, CounterContext } from "../context";

export const Component2 = ({ children }) => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      {" "}
      2 - The counter is: <b>{state.counter}</b> I can DECREASE the counter{" "}
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.DECREASE_COUNTER,
          })
        }
      >
        Hit me!
      </button>{" "}
      <br />
      <br /> {children}{" "}
    </div>
  );
};
