import { useState } from "react";
import { Assisted, IAssisted } from "..";
import { IAssistedStep } from "../props";

interface IAssistedController {
  steps: IAssistedStep[];
  size: IAssisted["size"];
  controls: IAssisted["controls"];
}

const AssistedController = (props: IAssistedController) => {
  const { steps, size, controls } = props;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function handleBackClick() {
    if (currentStepIndex >= 1) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  }

  function handleNextClick() {
    setCurrentStepIndex(currentStepIndex + 1);
  }

  function handleSubmitClick() {
    console.log("Send");
  }

  return (
    <Assisted
      size={size}
      controls={controls}
      step={steps[currentStepIndex]}
      totalSteps={steps.length}
      onBackClick={handleBackClick}
      onNextClick={handleNextClick}
      onSubmitClick={handleSubmitClick}
    />
  );
};

export { AssistedController };
export type { IAssistedController };
