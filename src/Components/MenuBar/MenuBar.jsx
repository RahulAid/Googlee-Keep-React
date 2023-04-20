import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function MenuBar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const showSidebar = () => {
    setSidebar(!sidebar);
    props.showSideBar(sidebar);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          borderBottom: "2px solid #f1f3f4",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={showSidebar}
        >
          <MenuIcon sx={{ color: "grey" }} />
        </IconButton>

        <img
          src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"
          alt="logo"
          style={{
            height: "3em",
            position: "absolute",
            marginLeft: "2.5%",
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "1.5em",
            marginLeft: "2.5%",
            color: "grey",
            width: "7.5%",
            textAlign: "left",
          }}
        >
          Keep
        </Typography>
        <Search
          sx={{
            color: "grey",
            backgroundColor: "#f1f3f4",
            borderRadius: ".5em",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              height: "3em",
              width: "40em",
              border: "2px solid #f1f3f4",
              boxShadow: "1px 1px 7px 2px #f1f3f4",
              
              borderRadius: ".5em",
            }}
          />
        </Search>
        <div
          style={{
            width: "25%",
            height: "4em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "9%",
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              height: "4em",
              marginLeft: "10%",
              width: "12em",
            }}
          >
            <IconButton
              sx={{
                marginTop: "8%",
                height: "2em",
                width: "2em",
                marginLeft: "1.8%",
              }}
            >
              <RefreshIcon />
            </IconButton>
            <IconButton sx={{ marginTop: "8%", height: "2em", width: "2em" }}>
              <DnsOutlinedIcon />
            </IconButton>
            <IconButton
              sx={{ marginTop: "8%", height: "2em", width: "1.95em" }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              textAlign: "left",
              height: "4em",
              marginLeft: "-2em",
              width: "6em",
            }}
          >
            <IconButton
              sx={{
                marginTop: "15%",
                height: "2em",
                width: "2em",
                marginLeft: ".5em",
              }}
            >
              <AppsOutlinedIcon fontSize="medium" />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                marginTop: "8%",
                height: "1.5em",
                width: "1.5em",
                marginLeft: "",
              }}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
