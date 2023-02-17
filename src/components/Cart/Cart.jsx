import data from "./cart.json";
import CartItem from "./CartItem";

function CartInfo({ title, price }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{price}</div>
    </section>
  );
}

function Cart() {
  const listItems = data.map((item) => <CartItem {...item} key={item.id} />);
  //{...item} 使用此語法將 item object 當作 props 將所有的屬性傳到CartItem 這個component
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        {listItems}
      </section>
      <CartInfo title="運費" price={"免費"} />
      <CartInfo title="小計" price={"$" + 400} />
    </section>
  );
}

export default Cart;
