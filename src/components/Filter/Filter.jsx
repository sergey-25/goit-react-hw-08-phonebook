import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { RiUserAddFill } from "react-icons/ri";
import { getFilterValue } from "redux/contacts";
import { setFilterValue } from "redux/contacts/contacts-slices";
import Modal from "components/Modal/Modal";
import ContactsForm from "../Form/ContactsForm";
import {
  InputStyled,
  SearchWrapper,
  Button,
} from "components/Filter/Filter.styled";

function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleToggleOnClick = () => setToggle(!toggle);

  return (
    <>
      <SearchWrapper>
        <Button onClick={   handleToggleOnClick}>
          <RiUserAddFill />
        </Button>
        <InputStyled
          id={`id-${nanoid(3)}`}
          type="text"
          name="name"
          value={filter}
          onChange={(event) => dispatch(setFilterValue(event.target.value))}
          placeholder="Search"
          autoComplete="off"
        />
      </SearchWrapper>
      {toggle && (
        <Modal closeModal={handleToggleOnClick}>
          <ContactsForm/>
        </Modal>
      )}
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;