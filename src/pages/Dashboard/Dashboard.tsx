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
  ErrorMessage,
} from "./Dashboard.styles";

export interface DashboardProptypes {
  getWeatherData: (city: string) => (dispatch: Dispatch) => Promise<void>;
  weatherData?: FilteredWeatherType[];
  cityData?: City;
  handleNavigateNext: () => void;
  handleNavigatePrev: () => void;
  errorMessage?: string;
}

function Dashboard({
  getWeatherData,
  weatherData,
  cityData,
  handleNavigateNext,
  handleNavigatePrev,
  errorMessage,
}: DashboardProptypes) {
  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <SearchBar onSearchHandler={getWeatherData} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {weatherData && cityData && (
          <FlxRow>
            <StyledArrowLeft
              data-testid="left-arrow"
              onClick={handleNavigatePrev}
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
              onClick={handleNavigateNext}
            />
          </FlxRow>
        )}
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
