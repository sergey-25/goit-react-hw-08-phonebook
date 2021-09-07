import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth";
import { logOut } from "redux/auth";
import { MenuWrapper, Button} from "components/UserMenu/UserMenu.styled";
import { FiLogOut} from "react-icons/fi";


function UserMenu() {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOutOnClick = () => {
    dispatch(logOut());
  };

  return (
    <MenuWrapper>
      
      <Button type="button" onClick={handleLogOutOnClick}>
              Log Out
              <FiLogOut/>
          </Button>
          <img src={''} alt="" width="38" />
      <p> {`Welcome, ${user}`}</p>
    </MenuWrapper>
  );
}

export default UserMenu;