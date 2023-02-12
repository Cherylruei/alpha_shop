import { FormSection } from "./Step1Address";
import InputField from "./InputField";

function Step3Payment() {
  return (
    <>
      <FormSection dataPhase="credit-card" formTitle={"付款資訊"} />
      <section>
        <div class="col col-12">
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <InputField label="持卡人姓名" type="text" placeholder="John Doe" />
          </div>
        </div>
        <div class="col col-12">
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <InputField
              label="卡號"
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div class="col col-12">
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <InputField label="有效期限" type="text" placeholder="MM/YY" />
          </div>
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <InputField label="CVC / CCV" type="text" placeholder="123" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Step3Payment;
