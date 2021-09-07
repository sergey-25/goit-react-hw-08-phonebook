import styled from "@emotion/styled/macro";

export const Нeader = styled.header`
  background-color: ;
 border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 425px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
