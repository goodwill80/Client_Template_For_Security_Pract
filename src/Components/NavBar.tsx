import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Spring Security Client
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>

            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>

            <Link to="/contact" style={{ color: "white" }}>
              Contact Us
            </Link>
            <Link to="/notices" style={{ color: "white" }}>
              Notices
            </Link>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
