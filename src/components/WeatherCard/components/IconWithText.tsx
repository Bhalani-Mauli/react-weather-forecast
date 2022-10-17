import styled from "styled-components";
import { FlxCol, FlxRow } from "@components/CommonStyles/commonStyles.styles";

interface PropTypes {
  children: React.ReactNode;
  name?: string;
  text: string;
  unit?: string;
}

export function IconWithText({ children, name, text, unit }: PropTypes) {
  return (
    <Container>
      {children}
      <Name>{name}</Name>
      <Value>
        {text} {unit && <Unit>{unit}</Unit>}
      </Value>
    </Container>
  );
}

const Container = styled(FlxRow)`
  align-items: center;
`;

const Value = styled(FlxRow)`
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  margin-left: 3px;
`;

const Unit = styled(FlxRow)`
  font-size: ${(props) => props.theme.fontSizes.xxSmall};
  align-items: flex-end;
`;

const Name = styled(FlxCol)`
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  margin-left: 3px;
`;
