import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./SearchInput.Style";
// import { Button } from "@mui/material";
const SearchInput = ({ showButtons = false, searchedValue = "" }) => {
  const [searchTerm, setSearchTerm] = useState(searchedValue);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm !== "") {
      navigate(`/search?key=${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <StyledSearchIcon />
        <input value={searchTerm} onChange={handleChange} />
        <Tooltip title="Search by voice">
          <StyledMicIcon />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer showButtons={showButtons}>
        <button type="submit">Google Search</button>
        <button>
          <Link to="https://doodles.google/">I'm feeling lucky</Link>
        </button>
      </StyledButtonContainer>
    </form>
  );
};

export default SearchInput;
