import { AssistedUI } from "./interface";
import { IAssistedStep, IAssistedSize, IAssistedControls } from "./props";

interface IAssisted {
  size?: IAssistedSize;
  step: IAssistedStep;
  totalSteps: number;
  disableNext?: boolean;
  disableBack?: boolean;
  disableSubmit?: boolean;
  onBackClick: (step: IAssistedStep) => void;
  onNextClick: (step: IAssistedStep) => void;
  onSubmitClick: (step: IAssistedStep) => void;
  controls?: IAssistedControls;
}

const Assisted = (props: IAssisted) => {
  const {
    size = "large",
    step,
    totalSteps,
    disableNext = false,
    disableBack = false,
    disableSubmit = false,
    onBackClick,
    onNextClick,
    onSubmitClick,
    controls = {
      goBackText: "Prev",
      goNextText: "Next",
      submitText: "Send",
    },
  } = props;

  function interceptOnBackClick() {
    try {
      onBackClick && onBackClick(step);
    } catch (error) {
      console.error(error);
    }
  }

  function interceptOnNextClick() {
    try {
      onNextClick && onNextClick(step);
    } catch (error) {
      console.error(error);
    }
  }

  function interceptOnSendClick() {
    try {
      onSubmitClick && onSubmitClick(step);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AssistedUI
      size={size}
      step={step}
      totalSteps={totalSteps}
      disableNext={disableNext}
      disableBack={disableBack}
      disableSubmit={disableSubmit}
      onBackClick={interceptOnBackClick}
      onNextClick={interceptOnNextClick}
      onSubmitClick={interceptOnSendClick}
      controls={controls}
    />
  );
};

export { Assisted };
export type { IAssisted };
