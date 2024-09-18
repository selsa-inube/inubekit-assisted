import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledAssisted = styled.div`
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "large" ? "16px" : "12px")};
  background-color: ${({ theme }) =>
    theme?.assisted?.background?.color || inube.assisted.background.color};
`;

export { StyledAssisted };
