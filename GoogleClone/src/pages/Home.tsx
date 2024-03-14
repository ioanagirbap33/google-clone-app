import {
  StyledHeaderRight,
  StyledHeaderWrapper,
  StyledHomeHeader,
  StyledLogoContainer,
} from "../components/Home.Styled.tsx";
import { Link } from "react-router-dom";

import SearchInput from "../components/SearchInput.tsx";

import Authentication from "../components/Authentication.tsx";

const Home = () => {
  return (
    <StyledHomeHeader>
      <StyledHeaderWrapper>
        <StyledHeaderRight>
          <Link to="https://www.google.com/gmail/about/">Gmail</Link>
          <Link to="https://www.google.com/imghp?hl=ro&ogbl">Images</Link>
          <Authentication />
        </StyledHeaderRight>
      </StyledHeaderWrapper>

      <StyledLogoContainer>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          alt="google-logo"
        ></img>
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
    </StyledHomeHeader>
  );
};

export default Home;
