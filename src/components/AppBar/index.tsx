"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAppBar } from "./useAppBar";
import { Colors } from "@/theme/colors";
import { useCustomerCookie } from "@/context/cookie.context";
import { useCustomer } from "@/context/customer.context";

function AppBarComp() {
  const {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    pages,
    settings,
    routesPage,
    routesSettings,
    handleLogin,
    handleMenuItemClick,
    handleGetMeService,
  } = useAppBar();
  const cookieProvider = useCustomerCookie();
  const { customer } = useCustomer();

  React.useEffect(() => {
    if (cookieProvider.currentCookie) {
      handleGetMeService();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookieProvider.currentCookie]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Mais translúcido
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: Colors.primary,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: Colors.primary,
              textDecoration: "none",
            }}
          >
            PROJECT STREAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={() => handleMenuItemClick(routesPage[index])}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: Colors.primary,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: Colors.primary,
              textDecoration: "none",
            }}
          >
            PROJECT STREAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleMenuItemClick(routesPage[index])}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {cookieProvider.currentCookie && customer ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={customer.name as string}
                    title={customer.name as string}
                  >
                    {customer.name?.charAt(0) || "A"}
                  </Avatar>
                </IconButton>
              </Tooltip>
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
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={setting}
                    onClick={() =>
                      handleMenuItemClick(routesSettings[index], setting)
                    }
                  >
                    <Typography textAlign="center" color="black">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button color="primary" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarComp;
