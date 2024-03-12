import {
  StyledHeaderLeft,
  StyledSearchContainer,
  StyledSearchHeaderContainer,
} from "../components/SearchPage.Styled";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <StyledSearchHeaderContainer>
      <StyledSearchContainer>
        <StyledHeaderLeft></StyledHeaderLeft>
      </StyledSearchContainer>
    </StyledSearchHeaderContainer>
  );
};

export default SearchPage;
