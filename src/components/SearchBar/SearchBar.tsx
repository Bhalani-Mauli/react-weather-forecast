import styled from "styled-components";

import { FlxRow } from "..";
import Button from "@components/Button/Button";
import { Container, Input, StyledSearchIcon } from "./SearchBar.styles";

export interface PropTypes {
  onSearchHandler: (city: string) => void;
  searchInput: string;
  setSearchInput: (val: string) => void;
}

function SearchBar({
  onSearchHandler,
  searchInput,
  setSearchInput,
}: PropTypes) {
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
      <StyledButton onClick={() => onSearchHandler(searchInput)}>
        Search
      </StyledButton>
    </FlxRow>
  );
}

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

export default SearchBar;
