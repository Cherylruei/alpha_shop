import StepProgress from "./StepProgress";
import Step1Address from "./Step1Address";
import Step2Delivery from "./Step2Delivery";
import Step3Payment from "./Step3Payment";

// 使用named export 給 step1/step2/step3 共用
export function FormSection({ dataPhase, formTitle, children }) {
  return (
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className="form-title">{formTitle}</h3>
      <section className="form-body col col-12">{children}</section>
    </form>
  );
}

function Register({ phase, number, onManageRadio }) {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={number}
      data-total-price="0"
    >
      <h2 className="register-title col col-12">結帳</h2>
      <StepProgress phase={phase} number={number} />
      <section class="form-container col col-12">
        <Step1Address />
        <Step2Delivery onManageRadio={onManageRadio} />
        <Step3Payment />
      </section>
    </section>
  );
}

export default Register;
