import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import storyimg from "../assets/Rectangle.png";
import storyimg1 from "../assets/MaskGroup.png";
import storyimg2 from "../assets/Rectangle2.png";
import substory from "../assets/Group.png";
import substory1 from "../assets/Ellipse.png";
import substory2 from "../assets/Group2.png";
import { Box, InputAdornment } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Stories = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 500,
            padding: "10px",
            lineHeight: "21px",
            color: "#203758",
            display: "flex",
            flexGrow: 10,
          }}
        >
          Stories
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <MoreHorizIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginLeft: "10px",
          padding: "5px",
        }}
      >
        <Card
          sx={{
            maxWidth: 150,
            backgroundImage: `url(${storyimg})`,
            height: "210px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              padding: "120px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={substory}
              sx={{ bgcolor: blue[500] }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              Kierra centary
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            maxWidth: 150,
            backgroundImage: `url(${storyimg1})`,
            height: "210px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              padding: "120px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={substory}
              sx={{ bgcolor: blue[500] }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              Brandom cramer
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            maxWidth: 150,
            backgroundImage: `url(${storyimg2})`,
            height: "210px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              padding: "120px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={substory2}
              sx={{ bgcolor: blue[500] }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              Perrie cox
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default Stories;
