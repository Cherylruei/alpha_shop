import React from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/CartContext";
import { CardDataContext } from "../../context/DataContext";

function NextButton({ onClick }) {
  return (
    <button className="next" onClick={onClick} pointerEvents="auto">
      {/* 在期望被點擊的元素上加上 pointer-events: auto */}
      下一步
      {/* 在想要可以被穿越的上層元素加上 pointer-events: none (這邊是在下層)*/}
      <RightArrow width={24} height={24} fill={"white"} pointerEvents="none" />
    </button>
  );
}

function PrevButton({ onClick }) {
  return (
    <button className="prev" onClick={onClick} pointerEvents="auto">
      上一步
      <LeftArrow width={24} height={24} fill={"white"} pointerEvents="none" />
    </button>
  );
}

function ProgressControl({ number, phase, onClick }) {
  // console.log("progressControl-phase", phase);
  const { cardData } = useContext(CardDataContext);
  // cardData 是 物件
  const totalPrice = useContext(ShoppingCartContext).totalPrice;
  // shoppingList 是 陣列包著商品購物車物件

  const handleOrderDetails = (e) => {
    console.log("paymentInformation", cardData);
    console.log(`總共金額為 ${totalPrice} 元`);
  };

  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase={phase}>
        {number > 1 && <PrevButton onClick={onClick} />}
        {number < 3 ? (
          <NextButton onClick={onClick} />
        ) : (
          <button className="next" onClick={handleOrderDetails}>
            確認下單
          </button>
        )}
      </section>
    </section>
  );
}
export default ProgressControl;
