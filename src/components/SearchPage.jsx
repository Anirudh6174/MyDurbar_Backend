import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "./ArtistCard";
import Spinner from "react-bootstrap/Spinner";
import { Bounce } from "react-reveal";
import Header from "./Header";
import { useHistory, useLocation} from "react-router-dom";
import SearchBar from "./SearchBar";

import ReactBootstrap, {
  Card,
} from "react-bootstrap";

export default function SearchPage( ) {
  const [screen, setScreen] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const [artists, setArtists] = useState([]);
  const location = useLocation();
  const [filteredArtist, setFilteredArtist] = useState(
    location.state?.filteredArtist || []
  );


  useEffect(() => {
    // No need to set filteredArtist here, it's already set in the initial state
    fetchArtists();
  }, [location.state?.filteredArtist]);

  console.log("filteredArtist1",filteredArtist);
  const history = useHistory();

  const onArtistClick = (e) => {
    setSelectedArtist(e);
    setScreen(3);
  };
  const fetchArtists = async () => {
    try {
      const response = await axios.get("http://localhost:5000/artists");
      setArtists(response.data);
      if (!filteredArtist.length) {
        setFilteredArtist(response.data);
      }
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };
  console.log("filteredArtist2",filteredArtist);

  // Function to filter artists based on the search input


  //artisProfilePage
  const updateArtistURL = (artist) => {
    const newUrl = `/artist/${artist.Name}`;
    history.push(newUrl);
  };

  console.log("filteredArtist3",filteredArtist);

  return (
    <>
      <Header />
      <div className="sp-wrapper">
        <div style={{ padding: 25 }}>
          <hr />
          <div
            className="sp-selected-filters d-flex flex-wrap m-1 px-3 py-2 no-highlight"
            bg="dark"
            text="light"
          >
            <SearchBar setFilteredArtist={setFilteredArtist} />
          </div>
          <hr />
          <Bounce bottom>
            <br />
            <div className="CustomCardRow">
              {filteredArtist.length > 0 ? (
                filteredArtist.map((artist, index) => {
                  return (
                    <ArtistCard
                      key={index}
                      artist={artist}
                      onArtistClick={onArtistClick}
                    />
                  );
                })
              ) : (
                <>
                  <Card.Img
                    style={{
                      padding: "20px",
                      width: "20vw",
                      height: "50vh",
                    }}
                    variant="top"
                    src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=400x300"
                  />
                </>
              )}
            </div>
          </Bounce>
        </div>

        {screen === 3 && <>{updateArtistURL(selectedArtist)}</>}
        {screen === 4 && (
          <>
            <div className="sp-blockUi-wrapper">
              <h1 style={{ padding: 2, color: "white" }}>
                Processing Info.. Please wait.
              </h1>
              <div className="sp-spinner-wrapper">
                <Spinner
                  className="sp-spinner"
                  variant="success"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="warning"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="primary"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="danger"
                  animation="grow"
                  size="xl"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}