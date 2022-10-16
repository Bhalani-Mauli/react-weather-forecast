import styled from "styled-components";
import { devices } from "@utils/index";

export const Title = styled.h1`
  margin-top: 40px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  @media ${devices.tablet} {
    width: 60%;
  }
`;
