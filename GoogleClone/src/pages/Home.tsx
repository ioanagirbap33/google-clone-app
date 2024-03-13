import {
  StyledAvatar,
  StyledHeaderRight,
  StyledHeaderWrapper,
  StyledHomeHeader,
  StyledLogoContainer,
} from "../components/Home.Styled.tsx";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "../components/SearchInput.tsx";
import { auth } from "../services/firebase.tsx";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name!);
        localStorage.setItem("email", email!);
        localStorage.setItem("profilePic", profilePic!);
        setIsSignedIn(true);

        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      console.log("Signed out successfully");
      setIsSignedIn(false);
    });
  };
  return (
    <StyledHomeHeader>
      <StyledHeaderWrapper>
        <StyledHeaderRight>
          <Link to="https://www.google.com/gmail/about/">Gmail</Link>
          <Link to="https://www.google.com/imghp?hl=ro&ogbl">Images</Link>
          <Tooltip title="Google apps">
            <IconButton>
              <AppsIcon
                sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Google account">
            <StyledAvatar src={localStorage.getItem("profilePic")!} />
          </Tooltip>
        </StyledHeaderRight>
      </StyledHeaderWrapper>

      <StyledLogoContainer>
        {isSignedIn && (
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google-logo"
          ></img>
        )}
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
      <div>
        <button onClick={signInWithGoogle}>Sign in</button>
        <button onClick={signOutWithGoogle}>Sign out</button>
        <h1>{localStorage.getItem("name")}</h1>
      </div>
    </StyledHomeHeader>
  );
};

export default Home;
