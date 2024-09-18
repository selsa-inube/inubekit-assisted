import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.assisted?.track?.color || inube.assisted.track.color};

  &::before {
    content: "";
    display: block;
    border-radius: 8px;
    transition: width 0.5s;
    height: 16px;
    width: ${({ $currentStep, $totalSteps }) =>
      `${($currentStep / $totalSteps) * 100}%`};
    background: ${({ theme }) =>
      theme?.assisted?.bar?.color || inube.assisted.bar.color};
  }
`;

const StyledProgressIndicator = styled.div``;

export { StyledProgressBar, StyledProgressIndicator };
