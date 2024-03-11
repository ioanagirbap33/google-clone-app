import { Tooltip } from "@mui/material";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./SearchInput.Style";
// import { Button } from "@mui/material";
function SearchInput() {
  return (
    <form>
      <StyledInputWrapper>
        <StyledSearchIcon />
        <input />
        <Tooltip title="Search by voice">
          <StyledMicIcon />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer>
        <button type="submit">Google Search</button>
        <button type="submit">I'm feeling lucky</button>
      </StyledButtonContainer>
    </form>
  );
}

export default SearchInput;
