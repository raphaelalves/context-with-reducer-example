"use client";

import React from "react";
import { CounterContextProvider } from "./context";
import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";

// Componente que vai agregar todos os 3 sob um mesmo pai pra demonstrar o exemplo
const Happyge = () => {
  return (
    <CounterContextProvider>
      <Component1>
        <Component2>
          <Component3>Some random feature goes here</Component3>
        </Component2>
      </Component1>
    </CounterContextProvider>
  );
};

export default Happyge;
