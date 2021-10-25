// imported modules
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link, AddBoxOutlined } from "@material-ui/icons";
import SoundcloudPlayer from "react-player/lib/players/SoundCloud";
import YoutubePlayer from "react-player/lib/players/YouTube";

// custom useStyles function using built-in makeStyles
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  urlInput: {
    margin: theme.spacing(1),
  },
  addSongButton: {
    margin: theme.spacing(1),
  },
  dialog: {
    textAlign: "center",
  },
  thumbnail: {
    width: "90%",
  },
}));

// custom AddSong component
function AddSong() {
  const classes = useStyles();
  const [url, setUrl] = React.useState("");
  // setDialog state for addSong button
  const [dialog, setDialog] = React.useState(false);

  // handleCloseDialog function for cancel button on dialog element
  function handleCloseDialog() {
    setDialog(false);
  }

  return (
    <div className={classes.container}>
      {/* dialog element for display when add song is clicked */}
      <Dialog
        className={classes.dialog}
        open={dialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            className={classes.thumbnail}
            src="https://images-na.ssl-images-amazon.com/images/I/413ukJfWdJL._AC_SX466_.jpg"
            alt="album thumbnail"
          />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onclick={() => setDialog(false)}>
            Cancel
          </Button>
          <Button variant="outlined" color="secondary">
            Add Song
          </Button>
        </DialogActions>
      </Dialog>

      {/* text field compenent       */}
      <TextField
        className={classes.urlInput}
        onChange={(event) => setUrl(event.target.value)}
        value={url}
        placeholder="Add Youtube or Soundcloud Url"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />
      {/* addSong button */}
      <Button
        className={classes.addSongButton}
        onClick={() => setDialog(true)}
        variant="contained"
        color="secondary"
        endIcon={<AddBoxOutlined />}
      >
        Add
      </Button>
    </div>
  );
}

export default AddSong;
