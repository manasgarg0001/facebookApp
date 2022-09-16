import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import iconimage from "../assets/Group48.png";
import { Badge, Box, Button, ButtonGroup } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
export default function ThomasBen() {
  const [count, setCount] = React.useState(1);
  return (
    <Card sx={{ width: "100%", maxWidth: "100%", borderRadius: "8px" }}>
      <Box sx={{ display: "flex" }}>
        <CardHeader
        // avatar={

        // }
        />
        <Box mt={2} mr={2}>
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={iconimage}
          />
        </Box>

        <Box sx={{ alignSelf: "center", flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "15px", fontWeight: "bolder", color: "#203758" }}
          >
            Thomas ben
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", color: "#788292" }}
          >
            45 min ago
          </Typography>
        </Box>
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      </Box>

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            color: "#203758",
          }}
        >
          Being a father is sometimes my hardest but always my most rewarding
          job. Happy Father’s Day to all dads out there.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardActions disableSpacing sx={{ gap: "20px" }}>
          {/* <IconButton aria-label="share">
            <ThumbUpIcon />
          </IconButton> */}

          <Badge color="primary" badgeContent={count}>
            <ThumbUpIcon
              sx={{ color: "#788292" }}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </Badge>
          <Badge color="primary" badgeContent={4}>
            <ChatIcon sx={{ color: "#788292" }} />
          </Badge>

          <IconButton aria-label="share">
            <ShareIcon sx={{ color: "#788292" }} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
