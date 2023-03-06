import { createContext } from "react";

export const creditCardInfo = {
  cardHolder: "",
  cardNumber: "",
  validDate: "",
  cvc: "",
};

// 初始值放入設定好的物件
export const CardDataContext = createContext(creditCardInfo);
