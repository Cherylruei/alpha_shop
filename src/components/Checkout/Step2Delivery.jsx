import { FormSection } from "./Step1Address";

function Shipping({ dataPrice, dataId, option, shippingDays, onManageRadio }) {
  console.log(dataPrice);
  return (
    <label className="radio-group col col-12" data-price={dataPrice}>
      <input
        id={dataId}
        type="radio"
        name="shipping"
        defaultChecked={dataId === "shipping-standard" && true}
        onChange={() => onManageRadio(dataPrice)}
      />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{option}</div>
          <div className="price">{dataPrice}</div>
        </div>
        <div className="period col col-12">{shippingDays}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
}

function Step2Delivery({ onManageRadio }) {
  return (
    <FormSection dataPhase="shipping" formTitle={"運送方式"}>
      <Shipping
        value="standard"
        dataPrice="免費"
        dataId="shipping-standard"
        option="標準運送"
        shippingDays="約 3~7 個工作天"
        onManageRadio={onManageRadio}
      />
      <Shipping
        value="dhl"
        dataPrice={500}
        dataId="shipping-dhl"
        option="DHL 貨運"
        shippingDays="48 小時內送達"
        onManageRadio={onManageRadio}
      />
    </FormSection>
  );
}

export default Step2Delivery;
