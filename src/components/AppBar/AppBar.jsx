import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "redux/auth";
import Container from "components/Container/Container";
import MainNav from "components/MainNav/MainNav";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import { Nav, Нeader } from "components/AppBar/AppBar.styled";

function AppBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <Нeader>
      <Container>
        <Nav>
          <MainNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Container>
    </Нeader>
  );
}

export default AppBar;