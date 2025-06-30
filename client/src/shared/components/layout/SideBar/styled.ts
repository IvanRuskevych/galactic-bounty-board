import { styled } from "@mui/material";

export const drawerWidth = 320;

export const HeaderContainer = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}))