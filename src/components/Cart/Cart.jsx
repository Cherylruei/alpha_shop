// import data from "./cart.json";
import CartItem from "./CartItem";

function CartInfo({ title, price }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart({ cartProducts, shipping, onManageMinus, onManagePlus }) {
  console.log("cartProducts", cartProducts);
  const listItems = cartProducts.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      // 修改傳入整個item 物件至 CartItem, 看起來比較簡潔
      onManageMinus={onManageMinus}
      onManagePlus={onManagePlus}
    />
  ));
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        {listItems}
      </section>
      <CartInfo title="運費" price={shipping} />
      <CartInfo title="小計" price={"$" + 400} />
    </section>
  );
}

export default Cart;
