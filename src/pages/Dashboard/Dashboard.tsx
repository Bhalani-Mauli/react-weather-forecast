import { SearchBar } from "@components/index";
import { ContentWrapper, Title, Main } from "./Dashboard.styles";

function Dashboard() {
  return (
    <Main>
      <ContentWrapper>
        <Title>React Weather App</Title>
        <SearchBar />
      </ContentWrapper>
    </Main>
  );
}

export default Dashboard;
