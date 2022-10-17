import { SearchBar, WeatherCard } from "@components/index";
import { Dispatch } from "redux";
import { ContentWrapper, Title, Main } from "./Dashboard.styles";

interface Proptypes {
  getWeatherData: (city: string) => (dispatch: Dispatch) => Promise<void>;
}
function Dashboard({ getWeatherData }: Proptypes) {
  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <SearchBar onSearchHandler={getWeatherData} />
        <WeatherCard />
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
