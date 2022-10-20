import styled from "styled-components";
import { devices } from "@utils/index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
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
