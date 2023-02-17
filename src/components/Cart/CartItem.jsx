import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

// import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

function CartItem({ quantity, price, img, name }) {
  //按 data的原始資料作命名
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img src={img} alt="product1" className="img-container" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon title="MinusIcon" fill={"white"} />
            <span class="product-count">{quantity}</span>
            <PlusIcon title="PlusIcon" fill={"white"} />
          </div>
        </div>
        <div class="price">${price}</div>
      </div>
    </div>
  );
}

export default CartItem;
