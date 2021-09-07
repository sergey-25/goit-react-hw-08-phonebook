import styled from "@emotion/styled/macro";

export const MenuWrapper = styled.div`
  display:inline-block;
  color: black;
  align-items: center;
  & > p {
    display: none;
  }
  @media screen and (min-width: 768px) {
    & > p {
      display: block;
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content:space-between;
  min-width: 100%;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: 700;
  background-color:#fff;
  color: #651fff;
  border-radius: 5px;
  border: 1px solid  #651fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
  &:hover,
  &:focus & {
      color: red;
    border: 1px solid  red;
    background:#fff;
  };
  > svg{
      width: 20px;
      height:20px; 
  }
  
`;

