import { useState } from "react";
import { Assisted, IAssisted } from "..";
import { IAssistedStep } from "../props";

interface IAssistedController {
  steps: IAssistedStep[];
  size: IAssisted["size"];
  disableBack: IAssisted["disableBack"];
  disableNext: IAssisted["disableNext"];
  disableSubmit: IAssisted["disableSubmit"];
  controls: IAssisted["controls"];
}

const AssistedController = (props: IAssistedController) => {
  const { steps, size, controls, disableBack, disableNext, disableSubmit } =
    props;
  const [currentStepNumber, setCurrentStepNumber] = useState(1);
  const stepsList = Object.values(steps);
  const step = stepsList.find((step) => step.number === currentStepNumber);

  function handleBackClick(step: IAssistedStep) {
    console.log(step);
    if (currentStepNumber >= 1) {
      setCurrentStepNumber(currentStepNumber - 1);
    }
  }

  function handleNextClick(step: IAssistedStep) {
    console.log(step);
    setCurrentStepNumber(currentStepNumber + 1);
  }

  function handleSubmitClick(step: IAssistedStep) {
    console.log(step);
    console.log("Send");
  }

  return (
    <Assisted
      size={size}
      controls={controls}
      step={step!}
      disableNext={disableNext}
      disableBack={disableBack}
      disableSubmit={disableSubmit}
      totalSteps={stepsList.length}
      onBackClick={handleBackClick}
      onNextClick={handleNextClick}
      onSubmitClick={handleSubmitClick}
    />
  );
};

export { AssistedController };
export type { IAssistedController };
