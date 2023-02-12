import product1 from "../../files/images/product-1.jpg";
import product2 from "../../files/images/product-2.jpg";
import { ReactComponent as MinusIcon } from "../../files/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../files/icons/plus.svg";

function Cart() {
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section class="product-list col col-12" data-total-price="0">
        <div
          class="product-container col col-12"
          data-count="0"
          data-price="3999"
        >
          <img src={product1} alt="product1" className="img-container" />
          <div class="product-info">
            <div class="product-name">破壞補丁修身牛仔褲</div>
            <div class="product-control-container">
              <div class="product-control">
                <MinusIcon
                  title="MinusIcon"
                  width={24}
                  height={24}
                  fill={"white"}
                />
                <span class="product-count"></span>
                <PlusIcon
                  title="PlusIcon"
                  width={24}
                  height={24}
                  fill={"white"}
                />
              </div>
            </div>
            <div class="price"></div>
          </div>
        </div>
        <div
          class="product-container col col-12"
          data-count="0"
          data-price="1299"
        >
          <img src={product2} alt="product2" className="img-container" />
          <div class="product-info">
            <div class="product-name">刷色直筒牛仔褲</div>
            <div class="product-control-container">
              <div class="product-control">
                <MinusIcon
                  title="MinusIcon"
                  width={24}
                  height={24}
                  fill={"white"}
                />
                <span class="product-count"></span>
                <PlusIcon
                  title="PlusIcon"
                  width={24}
                  height={24}
                  fill={"white"}
                />
              </div>
            </div>
            <div class="price"></div>
          </div>
        </div>
      </section>

      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price"></div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price"></div>
      </section>
    </section>
  );
}

export default Cart;
