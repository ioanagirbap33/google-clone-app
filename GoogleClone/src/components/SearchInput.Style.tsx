import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

export const StyledInputWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 20px;
  padding: 16px 24px;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 560px;
  min-width: 300px;

  border: 0.1px solid rgb(95, 99, 104);
  border-radius: 999px;
  input {
    flex: 1;
    background-color: rgba(32, 33, 36, 1);
    border: none;
    padding: 16px 20px;
    font-size: medium;
    &:focus {
      outline-width: 0;
    }
  }
`;
export const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  color: #9aa0a6;
  font-size: 1.5rem;
`;
export const StyledMicIcon = styled(MicIcon)`
  cursor: pointer;
  color: #9aa0a6;
  font-size: 1.5rem;
`;

interface StyledButtonContainerProps {
  showButtons: boolean;
}
export const StyledButtonContainer = styled("div")<StyledButtonContainerProps>`
  display: ${(props) => (props.showButtons ? "flex" : "none")};
  justify-content: center;
  padding-top: 18px;
  button {
    min-height: 32px;
    background-color: #303134;
    color: #e8eaed;
    border: 1px solid #303134;
    border-radius: 4px;
    padding: 0 16px;
    margin: 11px 4px;
    cursor: pointer;
    &:hover {
      border: 1px solid lightgray;
      border-radius: 4px;
    }
  }
`;
