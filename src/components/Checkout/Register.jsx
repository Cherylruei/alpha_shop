import StepProgress from "./StepProgress";
import Step1Address from "./Step1Address";
import Step2Delivery from "./Step2Delivery";
import Step3Payment from "./Step3Payment";

function Register() {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <h2 className="register-title col col-12">結帳</h2>
      <StepProgress />
      <section class="form-container col col-12">
        <Step1Address />
        <Step2Delivery />
        <Step3Payment />
      </section>
    </section>
  );
}

export default Register;
