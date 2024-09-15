import { createContext, useReducer } from "react";

// Pode passar um valor default do contexto pra caso não seja passado um posteriormente
export const CounterContext = createContext();

// Só pra facilitar o uso do Provider
export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// tipo um enum pra não ficar hardcoded as ações
export const ACTION_TYPES = {
  INCREASE_COUNTER: "INCREASE_COUNTER",
  DECREASE_COUNTER: "DECREASE_COUNTER",
  CHANGE_COUNTER: "CHANGE_COUNTER",
};

function reducer(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case ACTION_TYPES.DECREASE_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case ACTION_TYPES.CHANGE_COUNTER: {
      return {
        ...state,
        counter: action.payload,
      };
    }
  }
}
