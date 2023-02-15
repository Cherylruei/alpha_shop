import { ReactComponent as CompletedIcon } from "../../files/icons/pg-complete.svg";

function ProgressGroup({ number, steps, dataPhase }) {
  return (
    <span className="progress-group" data-phase={dataPhase}>
      <span className="progress-icon">
        <span className="text">{number}</span>
        <div className="icon cursor-point">
          {/* 刪掉這裡的 icon 就會出現 V 的原因? 找不到 .icon在 SCSS 的檔案用法 */}
          <CompletedIcon
            title="completedIcon"
            width={24}
            height={24}
            fill={"white"}
          />
        </div>
      </span>
      <span className="progress-label">{steps}</span>
    </span>
  );
}

function ProgressBar({ dataOrder }) {
  return <span className="progress-bar" data-order={dataOrder}></span>;
}

function StepProgress() {
  return (
    <section className="progress-container col col-12">
      <ProgressGroup number="1" steps="寄送地址" dataPhase="address" />
      <ProgressBar dataOrder="1" />
      <ProgressGroup number="2" steps="運送方式" dataPhase="shipping" />
      <ProgressBar dataOrder="2" />
      <ProgressGroup number="3" steps="付款資訊" dataPhase="credit-card" />
    </section>
  );
}

export default StepProgress;
