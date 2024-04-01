import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledConstentAssisted = styled.div`
  background-color: ${({ theme }) =>
    theme?.assisted?.background?.color || inube.assisted.background.color};
  border-radius: 8px;
  padding: 16px;
`;

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.assisted?.track?.color || inube.assisted.track.color};
`;

const StyledProgressIndicator = styled.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ $arrayLength, $currentStep }) =>
    `${($currentStep / $arrayLength) * 100}%`};
  background: ${({ theme }) =>
    theme?.assisted?.bar?.color || inube.assisted.bar.color};
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
  margin-bottom: 8px;
  border-color: ${({ theme }) =>
    theme?.assisted?.step?.color || inube.assisted.step.color};
`;

export {
  StyledConstentAssisted,
  StyledProgressBar,
  StyledProgressIndicator,
  StyledStepIndicator,
};
