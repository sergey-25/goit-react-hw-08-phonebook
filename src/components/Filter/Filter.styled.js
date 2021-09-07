import styled from "@emotion/styled/macro";

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 20px;
  background-color: ;
 color:#651fff;
  
  border-radius: 50%;
  cursor: pointer;
  > svg{
      width: 20px;
      height:20px; };
  &:hover,
  &:focus {
    
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  color: black;
  
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
  &:hover,
  &:focus {
   
  }
`;