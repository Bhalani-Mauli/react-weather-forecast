import { FlxRow, SearchBar, WeatherCard } from "@components/index";
import { Dispatch } from "redux";
import {
  ContentWrapper,
  Title,
  Main,
  StyledArrowLeft,
  StyledArrowRight,
  CardContainer,
} from "./Dashboard.styles";

interface Proptypes {
  getWeatherData: (city: string) => (dispatch: Dispatch) => Promise<void>;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
}

function Dashboard({ getWeatherData, onClick }: Proptypes) {
  const onClickHandlerLeft = () => {
    return alert("click arrow left");
  };

  const onClickHandlerRight = () => {
    return alert("click arrow Right");
  };
  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <SearchBar onSearchHandler={getWeatherData} />
        <FlxRow>
          <StyledArrowLeft
            data-testid="left-arrow"
            onClick={onClickHandlerLeft}
          />
          <CardContainer>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </CardContainer>
          <StyledArrowRight
            data-testid="right-arrow"
            onClick={onClickHandlerRight}
          />
        </FlxRow>
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
