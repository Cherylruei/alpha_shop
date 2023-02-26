import { ReactComponent as CompletedIcon } from "../../assets/icons/pg-complete.svg";

function ProgressGroup({ number, steps, phase }) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{number}</span>
          <CompletedIcon
            title="completedIcon"
            width={24}
            height={24}
            fill={"white"}
            className="icon cursor-point"
          />
        </span>
        <span className="progress-label">{steps}</span>
      </span>
      {number !== 3 && (
        <span className="progress-bar" data-order={number}></span>
      )}
      {/* 這邊將ProgressBar 改寫，因為 number 會跟 Progress Group 一樣，只要不等於 3 最後一步，都要有這個Progress-bar */}
    </>
  );
}

// function ProgressBar({ dataOrder }) {
//   return <span className="progress-bar" data-order={dataOrder}></span>;
// }

function StepProgress() {
  return (
    <section className="progress-container col col-12">
      <ProgressGroup number={1} steps="寄送地址" phase="address" />
      {/* <ProgressBar dataOrder="1" /> */}
      <ProgressGroup number={2} steps="運送方式" phase="shipping" />
      {/* <ProgressBar dataOrder="2" /> */}
      <ProgressGroup number={3} steps="付款資訊" phase="credit-card" />
    </section>
  );
}

export default StepProgress;
