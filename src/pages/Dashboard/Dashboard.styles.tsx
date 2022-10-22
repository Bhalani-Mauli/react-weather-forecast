import Switch from "react-switch";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { devices } from "@utils/index";
import { FlxRow } from "@components/index";

export const Title = styled.h1`
  margin-top: 40px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled(FlxRow)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  @media ${devices.tablet} {
    width: 80%;
  }
  @media ${devices.laptopL} {
    width: 70%;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.darkred};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  margin: 10px 20px;
  display: block;
`;

export const StyledArrowLeft = styled(FaAngleLeft)`
  width: 40px;
  height: 40px;
  float: left;
  margin-top: 250px;
  cursor: pointer;
  display: none;
  @media ${devices.mobileL} {
    display: block;
  }
`;

export const StyledArrowRight = styled(FaAngleRight)`
  width: 40px;
  height: 40px;
  float: right;
  margin-top: 250px;
  cursor: pointer;
  display: none;
  @media ${devices.mobileL} {
    display: block;
  }
`;

export const TempUnitWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledSwitch = styled(Switch)`
  margin: 0 10px;
`;
