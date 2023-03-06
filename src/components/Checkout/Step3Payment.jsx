import { FormSection } from "./Register";
import InputField from "./InputField";
import { useContext } from "react";
import { CardDataContext } from "../../context/DataContext";

function Step3Payment() {
  const { cardData, setCardData } = useContext(CardDataContext);
  function handleInputValue(e) {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  }

  console.log("cardData", cardData);
  return (
    <FormSection dataPhase="credit-card" formTitle={"付款資訊"}>
      <div className="col col-12">
        <div className="input-group input-w-lg-4 input-w-sm-full">
          <InputField
            name="cardHolder"
            label="持卡人姓名"
            type="text"
            value={cardData.cardHolder}
            placeholder="John Doe"
            onChange={handleInputValue}
          />
        </div>
      </div>
      <div className="col col-12">
        <div className="input-group input-w-lg-4 input-w-sm-full">
          <InputField
            name="cardNumber"
            label="卡號"
            type="text"
            value={cardData.cardNumber}
            placeholder="1111 2222 3333 4444"
            onChange={handleInputValue}
          />
        </div>
      </div>
      <div className="col col-12">
        <div className="input-group input-w-lg-3 input-w-sm-s3">
          <InputField
            name="validDate"
            label="有效期限"
            type="text"
            value={cardData.validDate}
            placeholder="MM/YY"
            onChange={handleInputValue}
          />
        </div>
        <div className="input-group input-w-lg-3 input-w-sm-s3">
          <InputField
            name="CVC"
            label="CVC / CCV"
            type="text"
            value={cardData.CVC}
            placeholder="123"
            onChange={handleInputValue}
          />
        </div>
      </div>
    </FormSection>
  );
}

export default Step3Payment;
