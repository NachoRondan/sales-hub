import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import AvatarProfile from "./Avatar";

export default function Navbar({ user }) {
  let settings = [
    { option: "Mi Perfil", link: "/mi-perfil" },
    { option: "Mis Publicaciones", link: "/mis-publicaciones" },
    { option: "Dashboard", link: "/dashboard" },
    { option: "Logout", link: "/login" },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              width: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
                <Link to="/" underline="none">
                  <img src="sales-hub-sx.png" alt="logo" />
                </Link>

                <Typography
                  underline="none"
                  variant="h6"
                  sx={{
                    fontStyle: "italic",
                    mr: 2,
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  SalesHub
                </Typography>
            </Stack>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AvatarProfile sx={{width: 32, height: 32}} m={"1em"} />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                style={{ zIndex: 1252 }}
              >
                {settings.map((setting) => (
                  <MenuItem
                    component={Link}
                    to={setting.link}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.option}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
