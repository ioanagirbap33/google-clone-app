import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import {
  StyledAvatar,
  StyledSignInButton,
} from "../components/Home.Styled.tsx";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../services/firebase.tsx";
function Authentication() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

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

      setIsSignedIn(false);
    });
  };

  useEffect(() => {
    if (window.localStorage.length !== 0) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <>
      <Tooltip title="Google apps">
        <IconButton>
          <AppsIcon
            sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
          />
        </IconButton>
      </Tooltip>
      {isSignedIn ? (
        <Tooltip title="Google account">
          <StyledAvatar src={localStorage.getItem("profilePic")!} />
        </Tooltip>
      ) : (
        <StyledSignInButton onClick={signInWithGoogle}>
          Sign in
        </StyledSignInButton>
      )}
      <div>
        <div>
          <button onClick={signOutWithGoogle}>Sign out</button>
        </div>
      </div>
    </>
  );
}

export default Authentication;
