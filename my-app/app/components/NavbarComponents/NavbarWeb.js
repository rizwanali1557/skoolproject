"use client";
import React, { useState, useEffect } from "react";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import style from "../../styles/Home.module.css";
import Image from "next/image";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AvatarMenu from "../../components/AvatarComponents/AvatarMenu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const NavbarWeb = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="avatar-menu">
      <div
        className={`${style.navbarConatiner} ${isSticky ? style.sticky : ""}`}
      >
        <div className={style.navbarInnerContain}>
          <div className={style.navMenuiconContain}>
            <div className={style.navLogo}>
              <Image
                src="/assests/images/svgviewer-png-output.png"
                alt="logo"
                width={100}
                height={30}
              />
            </div>
            <IconButton className="MuiIconButton-root" onClick={handleClick}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 0,
                  padding: "0px",
                  gap: 0,
                }}
              >
                <ExpandLess style={{ fontSize: 25, marginBottom: -4 }} />
                <ExpandMore style={{ fontSize: 25, marginTop: -4 }} />
              </div>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <MenuItem>
                <div className={style.searchAllFieldContain}>
                  <svg
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "15px", height: "15px", color: "#909090" }}
                  >
                    <path d="M14.8571 0C18.7975 0 22.5765 1.5653 25.3627 4.35156C28.149 7.13781 29.7143 10.9168 29.7143 14.8571C29.7143 18.5371 28.3657 21.92 26.1486 24.5257L26.7657 25.1429H28.5714L40 36.5714L36.5714 40L25.1429 28.5714V26.7657L24.5257 26.1486C21.92 28.3657 18.5371 29.7143 14.8571 29.7143C10.9168 29.7143 7.13781 28.149 4.35156 25.3627C1.5653 22.5765 0 18.7975 0 14.8571C0 10.9168 1.5653 7.13781 4.35156 4.35156C7.13781 1.5653 10.9168 0 14.8571 0ZM14.8571 4.57143C9.14286 4.57143 4.57143 9.14286 4.57143 14.8571C4.57143 20.5714 9.14286 25.1429 14.8571 25.1429C20.5714 25.1429 25.1429 20.5714 25.1429 14.8571C25.1429 9.14286 20.5714 4.57143 14.8571 4.57143Z" />
                  </svg>
                  <form>
                    <input
                      type="search"
                      placeholder="Search"
                      className="search-Input"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                  <SettingsIcon style={{ color: "#909090", fontSize: 22 }} />
                </div>
              </MenuItem>
              <MenuItem>
                <div className={style.navPluswithTextCont}>
                  <div className={style.plusIcon}>
                    <AddIcon style={{ color: "#919191", fontSize: 24 }} />
                  </div>
                  <p className={style.plusText}>Create a community</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className={style.navPluswithTextCont}>
                  <div className={style.plusIcon}>
                    <ExploreIcon style={{ color: "#909090", fontSize: 22 }} />
                  </div>
                  <p className={style.plusText}>Discover communities</p>
                </div>
              </MenuItem>
            </Menu>
          </div>
          <div>
            {isSticky && (
              <Box sx={{ width: "100%", maxWidth: 400}}>
                <TextField
                  variant="outlined"
                  placeholder="Search for anything"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    style: {
                      backgroundColor: "#eee",
                      borderRadius: 20,
                      paddingLeft: 8,
                      height: 56,
                    },
                  }}
                />
              </Box>
            )}
          </div>
          <div className={style.avatarMenuIcon}>
            <NotificationsOutlinedIcon
              style={{ color: "#909090", fontSize: 30 }}
            />
            <AvatarMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarWeb;
