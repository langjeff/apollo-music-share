import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongPlayer from "./components/Playlist";
import SongList from "./components/SongList";
import Playlist from "./components/SongPlayer";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item>
          <AddSong />
          <SongList />
        </Grid>
        <Grid item>
          <SongPlayer />
          <Playlist />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
