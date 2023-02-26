import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

function CartItem({ item, onManageQty }) {
  // console.log(item);
  function handleQuantityClick() {
    console.log("item", item);
    onManageQty({
      ...item,
      item: item.quantity - 1,
    });
    console.log("item2", item);
  }

  return (
    <div
      className="product-container col col-12"
      data-count={item.quantity}
      data-price={item.price}
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
}

export default CartItem;
