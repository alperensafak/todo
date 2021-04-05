import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext(); // a new context

export const TodoLayer = ({ initialState, reducer, children }) => (
  //olusturdugumuz contexti bana sağlayan, o contexti kullanmak isteyen componentlere todolayerın icerisinde tutmamılıyız

  <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
   { children } 
  </TodoLayerContext.Provider>
);

//provider consume icin bir yöntem:

export const useTodoLayerValue = () => useContext(TodoLayerContext);
//her componente tek tek yazmayacagız useTodoLayerValue şeklinde çağğıracagız
