import CartItems from "./CartItems";

function CartInfo({ title, price }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart({ cartProducts, shipping, onManageQty }) {
  if (shipping === "免費") {
    shipping = 0;
  }
  // 免費轉成數字可以加總總額
  const productsPrice = cartProducts.reduce((p, c) => {
    // console.log("previous", p);
    // console.log("current", c);
    return p + c.price * c.quantity;
  }, 0);
  // 上面將購物車的產品金額加總
  const totalPrice = productsPrice + shipping;
  // 宣告totalPrice 加上 shipping 運費，放在小計
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <CartItems cartProducts={cartProducts} onManageQty={onManageQty} />
      <CartInfo title="運費" price={shipping} />
      <CartInfo title="小計" price={`$${totalPrice}`} />
    </section>
  );
}

export default Cart;
