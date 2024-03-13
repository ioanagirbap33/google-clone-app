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
// import { auth } from "../services/firebase.tsx";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
const Home = () => {
  // const provider = new GoogleAuthProvider();

  // const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const name = result.user.displayName;
  //       const email = result.user.email;
  //       const profilePic = result.user.photoURL;
  //       localStorage.setItem("name", name!);
  //       localStorage.setItem("email", email!);
  //       localStorage.setItem("profilePic", profilePic!);

  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     console.log("Signed out successfully");
  //   });
  // };
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
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          alt="google-logo"
        ></img>
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
      <div>
        {/* <form onSubmit={handleLogIn}>
          <button>Sign in</button>
          <button onClick={handleLogout}>Sign out</button>
        </form> */}

        {/* <h1>{localStorage.getItem("name")}</h1>
        <img src={localStorage.getItem("profilePic")!} /> */}
      </div>
    </StyledHomeHeader>
  );
};

export default Home;
