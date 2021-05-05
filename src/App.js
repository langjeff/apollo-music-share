import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongPlayer from "./components/Playlist";
import SongList from "./components/SongList";
import Playlist from "./components/SongPlayer";

function App() {
  return (
    <>
      <Header />
      <AddSong />
      <SongList />
      <SongPlayer />
      <Playlist />
    </>
  );
}

export default App;
