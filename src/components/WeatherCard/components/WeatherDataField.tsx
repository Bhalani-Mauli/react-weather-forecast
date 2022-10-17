import React from "react";
import styled from "styled-components";
import { FlxRow } from "@components/CommonStyles/commonStyles.styles";
import { IconWithText } from "./IconWithText";

interface PropTypes {
  children: React.ReactNode;
  name: string;
  value: string;
  unit?: string;
}

export function WeatherDataField({ children, name, unit, value }: PropTypes) {
  return (
    <Container>
      <Property>
        <IconWithText text={name}>{children}</IconWithText>
      </Property>
      <Value>
        {value} <Unit>{unit}</Unit>
      </Value>
    </Container>
  );
}

const Container = styled(FlxRow)`
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 5px;
  align-items: center;
  border-bottom: 1px solid;
  padding-bottom: 5px;
`;

const Property = styled(FlxRow)`
  margin-left: 3px;
  align-items: center;
  flex: 1;
`;
const Value = styled(FlxRow)`
  margin-left: 3px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Unit = styled(FlxRow)`
  font-size: ${(props) => props.theme.fontSizes.xxSmall};
  align-items: flex-end;
`;
