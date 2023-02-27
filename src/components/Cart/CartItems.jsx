import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

function CartItems({ cartProducts, onManageQty }) {
  function handleQuantityClick(e) {
    const targetId = e.target.closest(".product-container").id;
    const isMinus = e.target.parentElement.classList.contains("minus");
    const nextProduct = cartProducts.map((item) => {
      if (item.id === targetId) {
        // 如果 item.id 等同於targetId,回傳複製物件
        return {
          ...item,
          // quantity 如果是 Minus，產品的數量 -1 ,不然就+1
          quantity: isMinus ? item.quantity - 1 : item.quantity + 1,
        };
      }
      return item;
    });
    // console.log("nextProduct", nextProduct);
    // console.log("isMinus", isMinus);
    // console.log("e.target.parentElement", e.target.parentElement);
    const updateItems = nextProduct.filter((item) => item.quantity > 0);
    onManageQty(updateItems);
  }

  const listedItems = cartProducts.map((item) => {
    return (
      <div
        className="product-container col col-12"
        data-count={item.quantity}
        data-price={item.price}
        id={item.id}
        key={item.id}
      >
        <img src={item.img} alt="product1" className="img-container" />
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <MinusIcon
                title="MinusIcon"
                fill={"white"}
                className="product-action minus"
                onClick={handleQuantityClick}
              />
              <span class="product-count">{item.quantity}</span>
              <PlusIcon
                title="PlusIcon"
                fill={"white"}
                className="product-action plus"
                onClick={handleQuantityClick}
              />
            </div>
          </div>
          <div class="price">${item.price}</div>
        </div>
      </div>
    );
  });

  return (
    <section class="product-list col col-12" data-total-price="0">
      {listedItems}
    </section>
  );
}

export default CartItems;
