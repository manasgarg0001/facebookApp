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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import iconimage from "../assets/Group48.png";
import cardimg from "../assets/mirandaimg.png";
import { Badge, Box, InputAdornment } from "@mui/material";
export default function Miranda() {
  const [count, setCount] = React.useState(1);
  return (
    <Card sx={{ width: "100%", maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={iconimage} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Miranda Shaffer"
        subheader="june 21,12:45"
      />
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "400",

            lineHeight: "187.4%",
            color: "#203758",
          }}
        >
          Being a father is sometimes my hardest but always my most rewarding
          job. Happy Father’s Day to all dads out there.
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={cardimg}
          alt="Paella dish"
        />
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardActions>
          {/* <IconButton aria-label="share">
            <ThumbUpIcon />
          </IconButton> */}
          <Badge color="primary" badgeContent={count}>
            <ThumbUpIcon
              sx={{ color: "gray" }}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </Badge>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}