import { useState } from "react";
import { Dispatch } from "redux";

import useFirstRender from "@utils/useFirstRender";
import { FlxRow, SearchBar, WeatherCard, Chart } from "@components/index";
import { City, FilteredWeatherType } from "types/api";
import {
  ContentWrapper,
  Title,
  Main,
  StyledArrowLeft,
  StyledArrowRight,
  CardContainer,
  ErrorMessage,
  TempUnitWrapper,
  StyledSwitch,
} from "./Dashboard.styles";
import { ChartType, UnitMap, WeatherReducerType } from "types/app";

export interface DashboardProptypes {
  getWeatherData: (
    city: string
  ) => (
    dispatch: Dispatch,
    getState: () => WeatherReducerType
  ) => Promise<void>;
  weatherData?: FilteredWeatherType[];
  cityData?: City;
  handleNavigateNext: () => void;
  handleNavigatePrev: () => void;
  changeUnit: () => void;
  errorMessage?: string;
  unit: "imperial" | "metric";
  unitMap: UnitMap;
  switchMap: Record<string, boolean>;
  chartData: ChartType[];
}

function Dashboard({
  getWeatherData,
  weatherData,
  cityData,
  handleNavigateNext,
  handleNavigatePrev,
  changeUnit,
  errorMessage,
  unit,
  unitMap,
  switchMap,
  chartData,
}: DashboardProptypes) {
  const [searchInput, setSearchInput] = useState<string>("Tunisia");
  const { tempUnit, windUnit } = unitMap[unit];
  useFirstRender(() => {
    if (cityData) {
      getWeatherData(searchInput);
    }
  }, [unit]);

  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <TempUnitWrapper>
          °C
          <StyledSwitch
            data-testid="unit-switch"
            onChange={changeUnit}
            checked={switchMap?.[unit]}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={40}
          />
          °F
        </TempUnitWrapper>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearchHandler={getWeatherData}
        />
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
                  tempUnit={tempUnit}
                  windUnit={windUnit}
                />
              ))}
            </CardContainer>
            <StyledArrowRight
              data-testid="right-arrow"
              onClick={handleNavigateNext}
            />
          </FlxRow>
        )}
        {chartData && <Chart chartData={chartData} />}
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
