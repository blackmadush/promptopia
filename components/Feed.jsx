// Feed.jsx

"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard"; // We'll rename PromptCard to AdCard later

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((ad) => (
        <PromptCard key={ad._id} post={ad} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allAds, setAllAds] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchAds = async () => {
    try {
      const response = await fetch("/api/ads"); // Updated API endpoint
      if (!response.ok) throw new Error("Failed to fetch ads");
      const data = await response.json();
      setAllAds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const filterAds = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return allAds.filter(
      (ad) =>
        regex.test(ad.creator.username) ||
        regex.test(ad.category) ||
        regex.test(ad.description)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // Debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterAds(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterAds(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a category or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* Display Ads */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allAds} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
