import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import "./App.css";

export function Appbar({ showsidebar, setshowsidebar }) {
  return (
    <AppBar color="default">
      <Box sx={{ flexGrow: 1, pl: 12 }}>
        <Toolbar>
          <IconButton
            onClick={() => setshowsidebar(!showsidebar)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
