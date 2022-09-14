import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import iconimg from "../assets/download.jpg";
import iconimg1 from "../assets/download1.jpg";
import iconimg2 from "../assets/download2.jpg";
import iconimg3 from "../assets/download3.jpg";
import iconimg4 from "../assets/download4.jpeg";
import iconimg5 from "../assets/download5.jpeg";
import iconimg6 from "../assets/download6.jpeg";
import iconimg7 from "../assets/download7.jpeg";
import { Box, Card } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
//list sx sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
export default function AlignItemsList() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "500",
            color: "#203758",
            margin: "0px 0px 0px 0px",
            display: "flex",
            //flexGrow: 1,
          }}
        >
          Online Contacts
        </Typography>
        <Box sx={{ ml: 1, flexGrow: "1" }}>
          <FiberManualRecordIcon color="success" />
        </Box>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <MoreHorizIcon />
        </Box>
      </Box>
      <Card>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={iconimg} />
            </ListItemAvatar>
            <ListItemText primary="Manas" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={iconimg1} />
            </ListItemAvatar>
            <ListItemText primary="Mohit" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg2} />
            </ListItemAvatar>
            <ListItemText primary="Manu" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg3} />
            </ListItemAvatar>
            <ListItemText primary="Dhoni" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg4} />
            </ListItemAvatar>
            <ListItemText primary="Sehwag" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg5} />
            </ListItemAvatar>
            <ListItemText primary="Pandya" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg6} />
            </ListItemAvatar>
            <ListItemText primary="Rahul" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={iconimg7} />
            </ListItemAvatar>
            <ListItemText primary="yuvraj" />
          </ListItem>
        </List>
      </Card>
    </>
  );
}
