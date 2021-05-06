import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, deepPurple, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
    secondary: lightGreen,
  },
});

export default theme;
