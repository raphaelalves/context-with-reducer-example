import { useContext } from "react";
import { ACTION_TYPES, CounterContext } from "../context";

export const Component3 = ({ children }) => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      {" "}
      3 - The counter is: <b>{state.counter}</b> I can CHANGE IT TO '5' RIGHT
      AWAY{" "}
      <button
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.CHANGE_COUNTER,
            payload: 5,
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
