// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

import React from "react";

type FIXME<T> = T extends React.ComponentType<infer Prop> ? React.ComponentType<Prop>["defaultProps"] : never;

// Hint: infer
export const getDefaultProps = <T>(component: React.ComponentType<T>): FIXME<React.ComponentType<T>> => {
  return component.defaultProps;
};
