// imported modules
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { HeadsetTwoTone } from "@material-ui/icons";

// custom useStyles function for applying styles to components
const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
}));

//custom header component
function Header() {
  const classes = useStyles();
  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <HeadsetTwoTone />
        <Typography className={classes.title} variant="h6" component="h1">
          Apollo Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
