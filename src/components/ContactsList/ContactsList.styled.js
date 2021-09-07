import styled from "@emotion/styled/macro";

export const List = styled.ul`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  padding: 10px 12px;
 
  border: 1px solid black;
  border-radius: 5px;
 
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
   
  }
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media screen and (min-width: 425px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  color: whitesmoke;
  background-color: #651fff;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: red;
  }
  @media screen and (min-width: 425px) {
    min-width: 80px;
    padding: 4px 10px;
  }
  @media screen and (min-width: 768px) {
    min-width: 150px;
    padding: 8px 12px;
  }
`;

export const Div = styled.div`
  color: black  ;
  & > svg {
    color: #651fff;
    width: 20px;
    margin-right: 3px;
  }
  &:not(:last-child) {
    text-transform: capitalize;
    color: black;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 725px) {
    & > svg {
      width: 25px;
      margin-right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    & > svg {
      width: 35px;
    }
  }
`;