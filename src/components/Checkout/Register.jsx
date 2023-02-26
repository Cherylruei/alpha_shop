// import { useState } from "react";
import StepProgress from "./StepProgress";
import Step1Address from "./Step1Address";
import Step2Delivery from "./Step2Delivery";
import Step3Payment from "./Step3Payment";

function Register({ phase, number, shipping, onManageRadio }) {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={number}
      data-total-price={shipping}
    >
      <h2 className="register-title col col-12">結帳</h2>
      <StepProgress phase={phase} number={number} />
      <section class="form-container col col-12">
        <Step1Address />
        <Step2Delivery shipping={shipping} onManageRadio={onManageRadio} />
        <Step3Payment />
      </section>
    </section>
  );
}

export default Register;
