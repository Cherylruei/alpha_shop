import { useState } from "react";
import { FormSection } from "./Step1Address";

function Shipping({ dataPrice, dataId, option, shippingDays }) {
  return (
    <label className="radio-group col col-12" data-price={dataPrice}>
      <input id={dataId} type="radio" name="shipping" />
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

function Step2Delivery() {
  // 初始設定將 state 的預設checked 的radio button設為 "standard"
  const [selected, setSelected] = useState("standard");
  // 宣告handleChange = 箭頭函式(event)
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <FormSection dataPhase="shipping" formTitle={"運送方式"}>
      <Shipping
        // 要設有 value，可以取出value值，來做比對選取到的selected 是否有等同於 value 值
        // 決定 checked 是 true or false
        value="standard"
        dataPrice="免費"
        dataId="shipping-standard"
        option="標準運送"
        shippingDays="約 3~7 個工作天"
        checked={selected === "standard"}
        onChange={handleChange}
      />
      <Shipping
        value="dhl"
        dataPrice="500"
        dataId="shipping-dhl"
        option="DHL 貨運"
        shippingDays="48 小時內送達"
        checked={selected === "dhl"}
        onChange={handleChange}
      />
    </FormSection>
  );
}

export default Step2Delivery;
