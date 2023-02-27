import React from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";

function NextButton({ onClick }) {
  return (
    <button className="next" onClick={onClick} style={{ cursor: "pointer" }}>
      下一步
      <RightArrow width={24} height={24} fill={"white"} />
    </button>
  );
}

function PrevButton({ onClick }) {
  return (
    <button className="prev" onClick={onClick} style={{ cursor: "pointer" }}>
      上一步
      <LeftArrow width={24} height={24} fill={"white"} />
    </button>
  );
}

function ProgressControl({ number, phase, onClick }) {
  console.log("progressControl-phase", phase);
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase={phase}>
        {number > 1 && <PrevButton onClick={onClick} />}
        {number < 3 ? (
          <NextButton onClick={onClick} />
        ) : (
          <button className="next">確認下單</button>
        )}
      </section>
    </section>
  );
}
export default ProgressControl;
