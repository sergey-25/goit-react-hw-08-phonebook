import { NavWrap, NavLinkStyled } from "styles/common.styled";

function AuthNav() {
  return (
    <NavWrap>
      <NavLinkStyled activeStyle={{ color: "#651fff" }} to="/register" exact>
        Join
      </NavLinkStyled>
      <NavLinkStyled activeStyle={{ color: "#651fff" }} to="/login" exact>
        Login
      </NavLinkStyled>
    </NavWrap>
  );
}

export default AuthNav;