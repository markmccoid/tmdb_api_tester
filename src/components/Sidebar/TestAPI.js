import React from "react";
import { tvGetShowDetails, tvSearchByTitle } from "@markmccoid/tmdb_api";

const TestAPI = () => {
  const [showId, setShowId] = React.useState("");
  const [result, setResult] = React.useState("");

  const onGetDets = async () => {
    // const results = await tvGetShowDetails(showId);
    // const data = results.data;
    // setResult(data.posterURL);
    const title = await tvSearchByTitle(showId);
    const data = title.data.results;
    setResult(data.map((el) => el.name));
  };
  return (
    <div>
      <input
        type="text"
        value={showId}
        onChange={(e) => setShowId(e.target.value)}
      />

      <div
        style={{ padding: 5, border: "1px solid black" }}
        onClick={onGetDets}
      >
        Get Dets
      </div>
      <div>{result}</div>
    </div>
  );
};

export default TestAPI;
