import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};
`;

const StyledProgressIndicator = styled.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ $arrayLength, $currentStep }) =>
    `${($currentStep / $arrayLength) * 100}%`};
  background: ${({ theme }) =>
    theme?.color?.surface?.primary?.regular ||
    inube.color.surface.primary?.regular};
`;

const StyledStepIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  margin-bottom: ${inube.spacing.s100};
  border-color: ${({ theme }) =>
    theme?.color?.stroke?.primary?.regular ||
    inube.color.stroke.primary?.regular};
`;

export { StyledProgressBar, StyledProgressIndicator, StyledStepIndicator };
