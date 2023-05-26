import { FC } from "react";
import StyledNavElement from "./styles.css";

export interface Props {
  name?: string;
  click?: () => void;
  marginLeft?: string;
  marginRight?: string;
}

const NavElement: FC<Props> = ({ name, click, ...styleProps }) => {
  return (
    <StyledNavElement onClick={click} {...styleProps}>
      {name}
    </StyledNavElement>
  );
};

export default NavElement;
