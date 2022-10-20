import { FlxRow, SearchBar, WeatherCard } from "@components/index";
import { Dispatch } from "redux";
import { City, FilteredWeatherType } from "types/api";
import {
  ContentWrapper,
  Title,
  Main,
  StyledArrowLeft,
  StyledArrowRight,
  CardContainer,
} from "./Dashboard.styles";

export interface DashboardProptypes {
  getWeatherData: (city: string) => (dispatch: Dispatch) => Promise<void>;
  weatherData?: FilteredWeatherType[];
  cityData?: City;
}

function Dashboard({
  getWeatherData,
  weatherData,
  cityData,
}: DashboardProptypes) {
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
        {weatherData && cityData && (
          <FlxRow>
            <StyledArrowLeft
              data-testid="left-arrow"
              onClick={onClickHandlerLeft}
            />
            <CardContainer>
              {weatherData.map((weather, index) => (
                <WeatherCard
                  key={`weather-${index}-${weather?.date}`}
                  weatherData={weather}
                  cityData={cityData}
                />
              ))}
            </CardContainer>
            <StyledArrowRight
              data-testid="right-arrow"
              onClick={onClickHandlerRight}
            />
          </FlxRow>
        )}
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
