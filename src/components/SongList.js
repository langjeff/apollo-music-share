import { CircularProgress } from "@material-ui/core";
import React from "react";

function SongList() {
  let loading = false;

  const song = {
    title: "song",
    artist: "artist",
    thumbnail: "url",
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
}

function Song() {
  return <div>song</div>;
}

export default SongList;
