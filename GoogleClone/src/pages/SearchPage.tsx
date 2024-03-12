import { Link } from "react-router-dom";
import {
  StyledHeaderLeft,
  StyledLogo,
  StyledOptions,
  StyledSearchHeader,
  StyledSearchHeaderContainer,
  StyledSearchHeaderLower,
  StyledSearchHeaderUpper,
  StyledSubOptionsLeft,
  StyledSubOptionsMiddle,
  StyledSubOptionsRight,
  StyledSubOptionsText,
} from "../components/SearchPage.Styled";
import SearchInput from "../components/SearchInput";
import { StyledHeaderRight } from "../components/Home.Styled";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Tooltip, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const SearchPage = () => {
  return (
    <StyledSearchHeaderContainer>
      <StyledSearchHeader>
        <StyledSearchHeaderUpper>
          <StyledHeaderLeft>
            <Link to="/">
              <StyledLogo
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                alt="googlelogo"
              />
            </Link>
            <SearchInput />
          </StyledHeaderLeft>
          <StyledHeaderRight>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon
                  sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Google apps">
              <IconButton>
                <AppsIcon
                  sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Google Account">
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                IG
              </Avatar>
            </Tooltip>
          </StyledHeaderRight>
        </StyledSearchHeaderUpper>
        <StyledSearchHeaderLower>
          <StyledSubOptionsLeft>
            <StyledOptions>
              <Link to="/images">Images</Link>
            </StyledOptions>
            <StyledOptions>
              <Link to="/videos">Videos</Link>
            </StyledOptions>
            <StyledOptions>
              <Link to="/news">News</Link>
            </StyledOptions>
            <StyledOptions>
              <Link to="/maps">Maps</Link>
            </StyledOptions>
            <StyledOptions>
              <Link to="/shopping">Shopping</Link>
            </StyledOptions>
            <StyledOptions>
              <Link to="/more">More</Link>
            </StyledOptions>
          </StyledSubOptionsLeft>
          <StyledSubOptionsMiddle>
            <StyledSubOptionsText>
              All filters | Instruments
            </StyledSubOptionsText>
            {/* <StyledSubOptionsText> Instruments</StyledSubOptionsText> */}
          </StyledSubOptionsMiddle>
          <StyledSubOptionsRight>
            <StyledSubOptionsText>Safe search</StyledSubOptionsText>
          </StyledSubOptionsRight>
        </StyledSearchHeaderLower>
      </StyledSearchHeader>
    </StyledSearchHeaderContainer>
  );
};

export default SearchPage;
