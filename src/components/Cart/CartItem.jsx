import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

function CartItem({ item, onManageMinus, onManagePlus }) {
  console.log(item);
  console.log("onManageMinus", onManageMinus);
  console.log("onManagePlus", onManagePlus);
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
              onClick={onManageMinus}
            />
            <span class="product-count">{item.quantity}</span>
            <PlusIcon
              title="PlusIcon"
              fill={"white"}
              className="product-action plus"
              onClick={onManagePlus}
            />
          </div>
        </div>
        <div class="price">${item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
