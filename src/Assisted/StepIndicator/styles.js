import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledStepIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.assisted?.step?.color || inube.assisted.step.color};
`;

export { StyledStepIndicator };