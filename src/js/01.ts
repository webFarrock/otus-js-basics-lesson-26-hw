// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

const orderStates = ["initial", "inWork", "buyingSupplies", "producing", "fullfilled"] as const;

type OrderState = typeof orderStates[number];
type FIXME = Exclude<OrderState, "buyingSupplies" | "producing">;

export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] => {
  const filteredStates: FIXME[] = [];

  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
