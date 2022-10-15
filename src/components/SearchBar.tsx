import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>();
  return (
    <input
      value={searchInput}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchInput(e.target.value)
      }
      data-testid="search-bar"
      placeholder="search"
    />
  );
}

export default SearchBar;
