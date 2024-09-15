"use client";

import React, { createContext, useContext } from "react";

/* context.tsx */
// Pode passar um valor default do contexto pra caso não seja passado um posteriormente nesse caso `sad pepe`
const SomethingContext = createContext({ mood: "sad pepe" });

// Só pra facilitar o uso do Provider, mas nada impede de você esse SomethingContext.Provider direto (sem ele ficar intermediando)
const SomethingContextProvider = ({ value, children }) => {
  return (
    <SomethingContext.Provider value={value}>
      {children}
    </SomethingContext.Provider>
  );
};

/* Component1.tsx */
const Component1 = ({ children }) => {
  const context = useContext(SomethingContext);
  return (
    <div>
      {" "}
      1 - the mood is {context.mood} <br /> {children}{" "}
    </div>
  );
};

/* Component2.tsx */
const Component2 = ({ children }) => {
  const context = useContext(SomethingContext);
  return (
    <div>
      {" "}
      2 - the mood is {context.mood} <br /> {children}{" "}
    </div>
  );
};

/* Component3.tsx */
const Component3 = ({ children }) => {
  const context = useContext(SomethingContext);
  return (
    <div>
      3 - the mood is {context.mood} <br /> {children}
    </div>
  );
};

const Something = async () => {
  // Simulando uma requisição assincrona que devolve o valor do 'mood' como 'sadge' após 2 segundos
  const someAsyncRequestMock = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          mood: "sadge",
        });
      }, 2000); // 2 seconds
    });

  const initialContextValue = await someAsyncRequestMock();

  return (
    <SomethingContextProvider value={initialContextValue}>
      <Component1>
        <Component2>
          <Component3>Some random feature goes here</Component3>
        </Component2>
      </Component1>
    </SomethingContextProvider>
  );
};

export default Something;
