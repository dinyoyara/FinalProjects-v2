import styled from "styled-components";
import { Props } from ".";

const StyledNavElement = styled("div")`
  margin-left: ${(p: Props) => p.marginLeft};
  margin-right: ${(p: Props) => p.marginRight};
  cursor: pointer;
`;

export default StyledNavElement;
