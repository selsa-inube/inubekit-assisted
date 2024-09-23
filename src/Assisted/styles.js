import styled from "styled-components";
import { tokens } from "./Tokens/tokens";

const StyledAssisted = styled.div`
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "large" ? "16px" : "12px")};
  background-color: ${({ theme }) =>
    theme?.assisted?.background?.color || tokens.background.color};
`;

export { StyledAssisted };
