import { FormSection } from "./Step1Address";
import InputField from "./InputField";

function Step3Payment() {
  return (
    <>
      <FormSection formTitle={"付款資訊"} />
      <section>
        <InputField label="持卡人姓名" type="text" placeholder="John Doe" />
        <InputField
          label="卡號"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
        <InputField label="有效期限" type="text" placeholder="MM/YY" />
      </section>
    </>
  );
}

export default Step3Payment;
