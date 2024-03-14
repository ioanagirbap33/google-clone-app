import { styled } from "@mui/system";

export const StyledHomeHeader = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledHeaderWrapper = styled("div")`
  display: flex;
  justify-content: right;
  padding: 6px;
`;

export const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledAvatar = styled("img")`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledSignInButton = styled("button")`
  background-color: #8ab4f8;
  border: 1px solid transparent;
  color: #202124;
  cursor: pointer;
  width: 96px;
  height: 36px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  font-family: Google Sans, Roboto, Helvetica, Arial, sans-serif;
`;

export const StyledLogoContainer = styled("div")`
  display: flex;
  //   flex: 1
  margin-top: 10%;
  flex-direction: column;
  img {
    height: 92px;
    object-fit: contain;
  }
`;
