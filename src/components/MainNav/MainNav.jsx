import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "redux/auth";
import { NavWrap, NavLinkStyled } from "styles/common.styled";

function MainNav() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <NavWrap>
      <NavLinkStyled activeStyle={{ color: "#651fff" }} to="/" exact>
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled activeStyle={{ color: "#651fff" }} to="/contacts" exact>
          Contacts
        </NavLinkStyled>
      )}
    </NavWrap>
  );
}

export default MainNav;