import { Link, useLocation } from "react-router-dom";
import {
  StyledHeaderLeft,
  StyledLogo,
  StyledOptions,
  StyledSearchHeader,
  StyledSearchContainer,
  StyledSearchHeaderLower,
  StyledSearchHeaderUpper,
  StyledSubOptionsLeft,
  StyledSubOptionsMiddle,
  StyledSubOptionsRight,
  StyledSubOptionsText,
  StyledSearchContent,
} from "../components/SearchPage.Styled";
import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import SearchInput from "../components/SearchInput";
import { StyledHeaderRight } from "../components/Home.Styled";
import SettingsIcon from "@mui/icons-material/Settings";
import { Tooltip, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import Authentication from "../components/Authentication";

interface Result {
  search: string;
  result: string[];
  id: string;
}
const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");

  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "search-results"));
    const resultSaved: Result[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resultSaved.push({
        search: data.search,
        result: data.result,
        id: data.id,
      });
    });
    setResults(resultSaved);
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  return (
    <StyledSearchContainer>
      <StyledSearchHeader>
        <StyledSearchHeaderUpper>
          <StyledHeaderLeft>
            <Link to="/">
              <StyledLogo
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                alt="googlelogo"
              />
            </Link>
            <SearchInput searchedValue={value ?? ""} />
          </StyledHeaderLeft>
          <StyledHeaderRight>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon
                  sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
                />
              </IconButton>
            </Tooltip>
            <Authentication />
            {/*<Tooltip title="Google apps">
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
            </Tooltip> */}
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
      <StyledSearchContent>
        {results.some((r) => r.search.includes(value!)) ? (
          results.map(
            (r) =>
              r.search.includes(value!) && (
                <div>
                  {r.result.map((res: any) => (
                    <div>
                      <Link to={res}>{res}</Link>
                    </div>
                  ))}
                </div>
              )
          )
        ) : (
          <div>There are no results for your search.</div>
        )}
      </StyledSearchContent>
    </StyledSearchContainer>
  );
};

export default SearchPage;
