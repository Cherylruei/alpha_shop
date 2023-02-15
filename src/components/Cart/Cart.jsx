import data from "./cart.json";
import { ReactComponent as MinusIcon } from "../../files/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../files/icons/plus.svg";

function CartItem({ dataCount, dataPrice, productImg, productName }) {
  return (
    <div
      class="product-container col col-12"
      data-count={dataCount}
      data-price={dataPrice}
    >
      <img src={productImg} alt="product1" className="img-container" />
      <div class="product-info">
        <div class="product-name">{productName}</div>
        <div class="product-control-container">
          <div class="product-control">
            <MinusIcon
              title="MinusIcon"
              width={24}
              height={24}
              fill={"white"}
            />
            <span class="product-count">{dataCount}</span>
            <PlusIcon title="PlusIcon" width={24} height={24} fill={"white"} />
          </div>
        </div>
        <div class="price">${dataPrice}</div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        {data.map((item) => (
          <CartItem
            {...item}
            key={item.id}
            dataCount={item.quantity}
            dataPrice={item.price}
            productImg={item.img}
            productName={item.name}
          />
        ))}
      </section>
      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price">免費</div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price">$400</div>
      </section>
    </section>
  );
}

export default Cart;
