import { useState } from "react";
import Register from "./Register";
import Cart from "../Cart/Cart.jsx";
import ProgressControl from "./ProgressControl";
import cartInitData from "../Cart/cart.json";
import { ShoppingCartContext } from "../../context/CartContext";
import { CardDataContext, creditCardInfo } from "../../context/DataContext";

function Main() {
  const [shipping, setShipping] = useState("免費");
  const [cartProducts, setCartProducts] = useState(cartInitData);
  const [phase, setPhase] = useState("address");
  const [number, setNumber] = useState(1);
  const [cardData, setCardData] = useState(creditCardInfo);

  const handleRadioChange = (price) => {
    setShipping(price);
  };

  const handleQuantityChange = (item) => {
    setCartProducts(item);
  };

  const productsPrice = cartProducts.reduce((p, c) => {
    // console.log("previous", p);
    // console.log("current", c);
    return p + c.price * c.quantity;
  }, 0);
  // 上面將購物車的產品金額加總
  const totalPrice = shipping === 500 ? 500 + productsPrice : 0 + productsPrice;
  // 宣告totalPrice 加上 shipping 運費，放在小計

  const cartContextValue = { cartProducts, totalPrice };
  // 等同於 {cartProducts: cartProducts, totalPrice: totalPrice}

  function handlePhaseClick(e) {
    const btnControl = e.target.parentElement.dataset.phase;
    // console.log("btnControl", e.target.parentElement);
    // 若是 className = next, 來判斷phase在哪一個步驟，應該改成什麼phase, number 也要跟著加
    if (e.target.className === "next") {
      if (btnControl === "address") {
        setPhase("shipping");
      }
      if (btnControl === "shipping") {
        setPhase("credit-card");
      }
      // phase 往下一步，number + 1
      setNumber((n) => n + 1);
      console.log("number", number);
      return;
    }
    //若是 className = prev, 來判斷phase在哪一個步驟，應該改成什麼phase, number 也要跟著減少
    if (e.target.className === "prev") {
      if (btnControl === "shipping") {
        setPhase("address");
      } else if (btnControl === "credit-card") {
        setPhase("shipping");
      }
      // phase 往前退上一步, number - 1
      setNumber((n) => n - 1);
      console.log("number", number);
      return;
    }
  }

  return (
    <main className="site-main">
      <div className="main-container">
        <CardDataContext.Provider value={{ cardData, setCardData }}>
          <ShoppingCartContext.Provider value={cartContextValue}>
            <Register
              onManageRadio={handleRadioChange}
              // phase={phase}
              number={number}
            />
            {/* Register 裡有 Step 2 Delivery 需要確認是否要計算運費, radio (onClick) */}
            <Cart
              shipping={shipping}
              onManageQty={handleQuantityChange}
              totalPrice={totalPrice}
            />
            {/* Cart 的購物車金額加上運費 button(onClick)*/}
            <ProgressControl
              phase={phase}
              number={number}
              onClick={handlePhaseClick}
            />
            {/* 會記錄不同階段 step 1/2/3 將相對應的prop傳到 register */}
          </ShoppingCartContext.Provider>
        </CardDataContext.Provider>
      </div>
    </main>
  );
}

export default Main;
