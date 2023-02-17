import React from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg";

function ButtonGroup({ buttonClassName, stepProgress, children }) {
  return (
    <button className={buttonClassName}>
      {stepProgress}
      {children}
    </button>
  );
}

function ProgressControl() {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        <ButtonGroup buttonClassName="next" stepProgress="下一步">
          <RightArrow width={24} height={24} fill={"white"} />
        </ButtonGroup>
      </section>
      <section class="button-group col col-12" data-phase="shipping">
        <ButtonGroup buttonClassName="prev" stepProgress="上一步">
          <LeftArrow width={24} height={24} fill={"white"} />
        </ButtonGroup>
        <ButtonGroup buttonClassName="next" stepProgress="下一步">
          <RightArrow width={24} height={24} fill={"white"} />
        </ButtonGroup>
      </section>
      <section class="button-group col col-12" data-phase="credit-card">
        <ButtonGroup buttonClassName="prev" stepProgress="上一步">
          <LeftArrow width={24} height={24} fill={"white"} />
        </ButtonGroup>
        <ButtonGroup
          buttonClassName="next"
          stepProgress="確認下單"
        ></ButtonGroup>
      </section>
    </section>
  );
}
export default ProgressControl;
