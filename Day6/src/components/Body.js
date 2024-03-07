import React, { useEffect } from "react";
import Foodcard from "./Foodcard";
import fooddata from "../utils/mockdata";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [datas, setDatas] = useState(fooddata);
  const [uiData, setUiData] = useState(fooddata)
  const [searchText, setSearchText] = useState("");

  return datas.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-box"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredDatas = datas.filter((data) =>
              data.restaurant.toLowerCase().includes(searchText.toLowerCase())
            );
            setUiData(filteredDatas);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredDatas = uiData.filter((data) => data.reviews > 4);
          setUiData(filteredDatas);
        }}
      >
        Find top-rated restaurants
      </button>
      <div className="food-container">
        {uiData.map((food) => (
          <Foodcard resdata={food} />
        ))}
      </div>
    </div>
  );
};

export default Body;
