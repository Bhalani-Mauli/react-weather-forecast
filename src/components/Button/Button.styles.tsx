import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.lightaqua};
  &:hover {
    background-color: ${(props) => props.theme.colors.lightaqua1};
  }
`;
