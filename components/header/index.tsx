import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
interface Props {
  children: React.ReactElement;
}
const drawerWidth = 240;
const navItems = [
  { link: "Home", to: "" },
  { link: "About", to: "about" },
  { link: "Pricing", to: "pricing" },
  { link: "Login", to: "#" },
  { link: "Contact", to: "pricing/#contact" },
];
function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Simply Ad
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, key) => (
          <ListItem key={key}>
            <Link
              href={`/${item.to}`}
              style={{
                padding: 3,
                fontWeight: 500,
                fontSize: "1.25em",
              }}
            >
              {item.link}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          sx={{ bgcolor: trigger ? "white" : "lightgrey", color: trigger ? 'black' : 'white' }}
          component="nav"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Simply Ad
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  href={`/${item.to}`}
                  key={item.link}
                  style={{
                    padding: 3,
                    fontWeight: 500,
                    fontSize: "1.25em",
                  }}
                >
                  {item.link}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {<Toolbar />}
    </React.Fragment>
  );
}
