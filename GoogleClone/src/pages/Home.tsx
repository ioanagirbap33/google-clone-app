import {
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderWrapper,
  StyledHomeHeader,
  StyledLogoContainer,
} from "../components/StyledHomeHeader.tsx";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
const Home = () => {
  return (
    <StyledHomeHeader>
      <StyledHeaderWrapper>
        {/* <StyledHeaderLeft>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </StyledHeaderLeft> */}

        <StyledHeaderRight>
          <Link to="/gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <Tooltip title="Google apps">
            <IconButton>
              <AppsIcon
                sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Google account">
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

        <StyledLogoContainer>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google-logo"
          ></img>
        </StyledLogoContainer>
      </StyledHeaderWrapper>
    </StyledHomeHeader>
  );
};

export default Home;
