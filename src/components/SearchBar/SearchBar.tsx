import { useState } from "react";
import styled from "styled-components";

import { FlxRow } from "..";
import Button from "../Button/Button";
import { Container, Input, StyledSearchIcon } from "./SearchBar.styles";

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <FlxRow>
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
      <StyledButton>Search</StyledButton>
    </FlxRow>
  );
}

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export default SearchBar;
