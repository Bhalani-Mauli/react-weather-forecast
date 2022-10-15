import styled from "styled-components";
import { FaSearchLocation } from "react-icons/fa";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSearchIcon = styled(FaSearchLocation)`
  position: absolute;
  color: ${(props) => props.theme.colors.dullblue1};
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0 40px;
  color: ${(props) => props.theme.colors.dullblue};
  font-size: ${(props) => props.theme.fontSizes.small};
  &::placeholder {
    color: ${(props) => props.theme.colors.dullblue3};
  }
  &:focus {
    outline: none;
  }
`;
