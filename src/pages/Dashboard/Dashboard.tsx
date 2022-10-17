import { SearchBar, WeatherCard } from "@components/index";
import { ContentWrapper, Title, Main } from "./Dashboard.styles";

function Dashboard() {
  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <SearchBar />
        <WeatherCard />
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
