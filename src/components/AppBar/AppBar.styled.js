import styled from "@emotion/styled/macro";

export const Нeader = styled.header`
  background-color: lightsteelblue;
  box-shadow: rgba(188, 188, 235, 0.3) 0px 2px 8px,
    rgba(188, 188, 235, 0.3) 0px 4px 12px, rgba(188, 188, 235, 0.3) 0px 8px 28px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (min-width: 425px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
© 2021 GitHub, Inc.