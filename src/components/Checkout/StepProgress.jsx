import { ReactComponent as CompletedIcon } from "../../files/icons/pg-complete.svg";

function ProgressGroup({ number, steps }) {
  return (
    <span className="progress-group" data-phase="address">
      <span className="progress-icon">
        <span className="text">{number}</span>
        <CompletedIcon
          title="completedIcon"
          width={24}
          height={24}
          fill={"white"}
        />
      </span>
      <span className="progress-label">{steps}</span>
    </span>
  );
}

function ProgressBar() {
  return <span>-</span>;
}

function StepProgress() {
  return (
    <section>
      <ProgressGroup number="1" steps="寄送地址" />
      <ProgressBar />
      <ProgressGroup number="2" steps="運送方式" />
      <ProgressBar />
      <ProgressGroup number="3" steps="付款資訊" />
    </section>
  );
}

export default StepProgress;
