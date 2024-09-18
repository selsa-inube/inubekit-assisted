import { StyledProgressBar } from "./styles";

interface IProgressBar {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = (props: IProgressBar) => {
  const { currentStep, totalSteps } = props;
  return (
    <StyledProgressBar $currentStep={currentStep} $totalSteps={totalSteps} />
  );
};

export { ProgressBar };
export type { IProgressBar };
