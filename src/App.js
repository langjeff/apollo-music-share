// imported modules.
import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongPlayer from "./components/SongPlayer";
import SongList from "./components/SongList";
import Playlist from "./components/Playlist";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";

// custom "App" function for displaying components
function App() {
  //media queries styling components with ternaries at breakpoints.
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  //built-in return function when App is called. 
  return (
    <>
    {/* "Hidden" component and "Header" component */}
      <Hidden only="xs">
        <Header />
      </Hidden>

      {/* Grid container component and styles */}
      <Grid container spacing={3}>
        {/* Grid item component for AddSong and SongList */}
        <Grid
          style={{ paddingTop: greaterThanSm ? 80 : 10 }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        {/* Grid item component for SongPlayer */}
        <Grid
          style={
            greaterThanMd
              ? { position: "fixed", width: "100%", right: 0, top: 70 }
              : { position: "fixed", width: "100%", left: 0, bottom: 0 }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
