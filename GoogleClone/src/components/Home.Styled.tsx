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
