import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledConstentAssisted = styled.div`
  > div {
    background-color: ${({ theme }) =>
      theme?.assisted?.background?.color || inube.assisted.background.color};
    border-radius: 8px;
    padding: 16px;
    width: ${({ size }) => (size === "small" ? "312px" : "auto")};
    height: 100%;
    max-height: ${({ size }) => (size === "small" ? "84px" : "112px")};
  }
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
  margin-bottom: 8px;
  border-color: ${({ theme }) =>
    theme?.assisted?.step?.color || inube.assisted.step.color};
`;

export { StyledConstentAssisted, StyledStepIndicator };
