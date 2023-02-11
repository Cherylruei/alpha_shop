import StepProgress from "./StepProgress";
import Step1Address from "./Step1Address";
import Step2Delivery from "./Step2Delivery";
import Step3Payment from "./Step3Payment";

function Register() {
  return (
    <section>
      <h1>結帳</h1>
      <StepProgress />
      {/* 這裡要用form-container包住 step1-step3 */}
      <form>
        <Step1Address />
        <Step2Delivery />
        <Step3Payment />
      </form>
    </section>
  );
}

export default Register;
