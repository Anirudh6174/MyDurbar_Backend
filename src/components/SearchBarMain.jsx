
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import { useLocation, useHistory } from "react-router-dom";

function SearchBarMain() {
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [artists, setArtists] = useState([]); // Lifted state
  const [filteredArtist, setFilteredArtist] = useState([]); // Lifted state

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const response = await axios.get("http://localhost:5000/artists");
      setArtists(response.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };
  console.log("artists", artists);

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  
    let filteredSuggestions = [];
    if (input.trim() !== "") {
      filteredSuggestions = artists.filter((artist) => {
        const artistName = artist.Name && artist.Name.toLowerCase();
        const artistCategory = artist.Category && artist.Category.toLowerCase();
        const artistLocation = artist.Location && artist.Location.toLowerCase();
  
        return (
          (artistName && artistName.includes(input.toLowerCase())) ||
          (artistCategory && artistCategory.includes(input.toLowerCase())) ||
          (artistLocation && artistLocation.includes(input.toLowerCase()))
        );
      });
    }
  
    const uniqueArtistNames = Array.from(
      new Set(filteredSuggestions.map((artist) => artist.Name))
    );
  
    setSearchSuggestions(uniqueArtistNames);
  };
  
  const filterArtists = (searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const filtered = artists.filter((artist) => {
      const artistName = artist.Name && artist.Name.toLowerCase();
      const artistCategory = artist.Category && artist.Category.toLowerCase();
      const artistLocation = artist.Location && artist.Location.toLowerCase();
  
      return (
        (artistName && artistName.includes(lowercaseSearchTerm)) ||
        (artistCategory && artistCategory.includes(lowercaseSearchTerm)) ||
        (artistLocation && artistLocation.includes(lowercaseSearchTerm))
      );
    });
    setFilteredArtist(filtered);
    history.push("/bookArtist", { filteredArtist: filtered });
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchInput(suggestion);
    setSearchSuggestions([]);
    filterArtists(suggestion); // Call the filterArtists function with the selected suggestion
  };


 
  return (
    <>
      <div className="col-md-6 col-lg-4 mx-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search artists..." 
            value={searchInput}
            onChange={handleSearchInput}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() => filterArtists(searchInput)} // Call filterArtists with the current search input
          >
            Search
          </button>
        </div>
        {searchSuggestions.length > 0 && (
          <ul className="suggestion-list">
            {searchSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBarMain;
