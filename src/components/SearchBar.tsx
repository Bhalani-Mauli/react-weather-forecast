import { useState } from "react";
import { Container, Input, StyledSearchIcon } from "./SearchBar.styles";

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <Container>
      <StyledSearchIcon />
      <Input
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
        data-testid="search-bar"
        placeholder="search"
      />
    </Container>
  );
}

export default SearchBar;
