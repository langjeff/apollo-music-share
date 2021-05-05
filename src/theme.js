import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
    secondary: deepPurple,
  },
});

export default theme;
