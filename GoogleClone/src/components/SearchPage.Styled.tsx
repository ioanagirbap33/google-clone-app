import { styled } from "@mui/system";

export const StyledSearchHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const StyledSearchHeader = styled("div")`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1px solid rgb(95, 99, 104);
  z-index: 1;
  position: sticky;
  top: 0;
`;

export const StyledSearchHeaderUpper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1;
  position: sticky;
  top: 0;
`;

export const StyledHeaderLeft = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    div {
      input {
        width: 500px;
      }
    }
  }
`;
export const StyledLogo = styled("img")`
  height: 30px;
  margin-top: 30px;
  padding-left: 20px;

  // object-fit: contain;
`;

export const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  svg {
    color: #e8eaed;
  }
`;

export const StyledSearchHeaderLower = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 150px;
  margin-right: 20px;
  color: rgb(150, 155, 161);
`;

export const StyledSubOptionsLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 8px;
  gap: 10px;

  a {
    text-decoration: none;
    color: rgb(241, 243, 244);
  }
`;
export const StyledSubOptionsMiddle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledSubOptionsRight = styled("div")``;
export const StyledSubOptionsText = styled("div")``;

export const StyledOptions = styled("div")`
  border: 1px solid #3c4043;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
