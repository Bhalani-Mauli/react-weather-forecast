import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FlxRow, FlxCol } from "../CommonStyles/commonStyles.styles";

export const Container = styled.div`
  margin-top: 15px;
  max-width: 250px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.calmgreen};
  color: ${(props) => props.theme.colors.darkblue};
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardHeader = styled(FlxRow)`
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
  margin: 4px;
  font-size: 17px;
`;

export const CardDate = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxSmall};
`;

export const RowResultDataWrapper = styled(FlxRow)`
  margin-top: 10px;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  padding: 5px 0;
  background-color: #03c8a2;
`;

export const MainTemprature = styled(FlxCol)`
  align-items: center;
  margin-top: 20px;
`;

export const Unit = styled.sup`
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.xxSmall};
`;

export const Temprature = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const ImgLogo = styled.img`
  max-width: 40px;
`;
