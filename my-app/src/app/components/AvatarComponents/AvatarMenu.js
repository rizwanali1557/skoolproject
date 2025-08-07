import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
const AvatarMenu = () => {
  const [avatarSrc, setAvatarSrc] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        component="label"
        onClick={handleClick}
        sx={{
          borderRadius: "40px",
          "&:has(:focus-visible)": {
            outline: "2px solid",
            outlineOffset: "2px",
          },
        }}
      >
        <Avatar alt="Upload Avatar" src={avatarSrc} />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          disabled={!!avatarSrc}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            border: 0,
            whiteSpace: "nowrap",
          }}
        />
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          style: {
            maxHeight: 700,
            overflowY: "auto",
            padding: 0,
            paddingRight: 20,
            paddingLeft: 8,
          },
        }}
      >
        <MenuItem>ra972522@gmail.com</MenuItem>
        <hr />
        <MenuItem >Profile</MenuItem>
        <MenuItem>
        <Link href="/settingpage" className="multiitem-linkroot">
        Settings
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Affiliates</MenuItem>
        <hr className="MuiDivider-root" />
        <MenuItem className="MuiItem-root" onClick={handleClose}>Help center</MenuItem>
        <MenuItem className="MuiItem-root" onClick={handleClose}>Create a Community</MenuItem>
        <MenuItem className="MuiItem-root" onClick={handleClose}>Discover communities</MenuItem>
        <MenuItem className="MuiItem-root" onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </>
  );
};
export default AvatarMenu;
