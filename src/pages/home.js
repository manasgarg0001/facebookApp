import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Box } from "@mui/system";
import AlignItemsList from "./contactlist";
import FullWidthTextField from "../util/textareaa";
import ThomasBen from "../util/benthomas";
import Stories from "./stories";
import WatchingPeople from "./watchingpeople";
import WhoToFollow from "./follow";
import img from "../assets/headimg.png";
import img2 from "../assets/headimg2.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import storyimg from "../assets/Rectangle.png";
import substory from "../assets/Group.png";
import iconimage from "../assets/Group48.png";
import cardimg from "../assets/mirandaimg.png";
import Posts from "../components/posts/posts";
import Avatar2 from "../assets/miranda.png";
import storyimg1 from "../assets/MaskGroup.png";
import storyimg2 from "../assets/Rectangle2.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Home = () => {
  const dummyPosts = [
    {
      avatar:
        "https://i.pinimg.com/474x/bf/d3/20/bfd3202d81bf94f1d06bcb286cc6226d--th-century-trendy.jpg",
      name: "Thomas Ben",
      time: "45 mins ago",
      text: "Being a father is sometimes my hardest but always my most rewarding",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNOOlK1npnK7bA4GzDgkQuBRVeqwDwia20Q&usqp=CAU",
      name: "Miranda Shaffer",
      time: "June 21, 12:45 pm",
      component: "img",
      url: "https://eatdrinkflash.co.uk/wp-content/uploads/2021/06/DSC00807-scaled.jpg",

      text: "Having fun while cooking and eating variety of foods with @Sarah",
    },
  ];
  const [data, setData] = useState(dummyPosts);
  const postData = (data) => {
    console.log(JSON.stringify(data, null, 2));

    setData(data);
  };
  return (
    <>
      <Box sx={{ padding: "10px", backgroundColor: "#E5E5E5" }}>
        <Grid container>
          <Grid item xs={3} sx={{ overflow: "hidden" }}>
            <Card sx={{ borderRadius: "8px" }}>
              <AvatarGroup
                max={4}
                sx={{ justifyContent: "center", marginTop: "35px" }}
              >
                <Avatar alt="Remy Sharp" src={img} />
                <Avatar alt="Travis Howard" src={img2} />
              </AvatarGroup>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: "#203758",
                  textAlign: "center",
                  marginTop: "14px",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                }}
              >
                Facebook clone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  marginTop: "8px",
                  textAlign: "center",
                  color: "#788292",
                }}
              >
                Active Now
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "15px",
                  gap: "15px",
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<CallIcon />}
                  sx={{
                    backgroundColor: "#F0F7FF",
                    fontFamily: "Montserrat",
                    fontWeight: "bolder",
                    borderRadius: "6px",
                  }}
                >
                  group call
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<VideoCallIcon />}
                  sx={{
                    backgroundColor: "#F0F7FF",
                    fontFamily: "Montserrat",
                    fontWeight: "bolder",
                    borderRadius: "6px",
                  }}
                >
                  Video call
                </Button>
              </Box>
            </Card>

            <Box
              sx={{
                marginTop: "30px",
              }}
            >
              <AlignItemsList />
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              background: "#E5E5E5",
              overflowY: "scroll",
              height: "864px",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box sx={{ marginLeft: "10px" }}>
              <Box>
                <FullWidthTextField getData={postData} />
                {dummyPosts.map((item, index) => (
                  <Box
                    sx={{
                      marginTop: "7px",
                      padding: "5px",
                    }}
                  >
                    <Posts
                      key={index}
                      url={item.url}
                      text={item.text}
                      avatar={item.avatar}
                      name={item.name}
                      time={item.time}
                    />{" "}
                  </Box>
                ))}
              </Box>

              {/* <Box
                sx={{
                  marginTop: "7px",
                  padding: "5px",
                }}
              >
                <Posts
                  addData={data}
                  name="Ben Thomas"
                  time="45 min ago"
                  //img={cardimg}
                  avatar={iconimage}
                  //status="Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there. "
                />
              </Box>
              <Box sx={{ marginTop: "7px", padding: "5px" }}>
                <Posts
                  name="Miranda Shaffer"
                  time="june 21,12:45pm"
                  img={cardimg}
                  avatar={Avatar2}
                  status="Having fun while cooking and eating variety of foods with @Sarah"
                />
              </Box>
              <Box sx={{ marginTop: "7px", padding: "5px" }}>
                <Posts name="David Cox" time="june 11,11:30pm" img={cardimg} />
              </Box> */}
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  padding: "10px",
                  lineHeight: "21px",
                  color: "#203758",
                  display: "flex",
                  //flexGrow: 10,
                }}
              >
                Stories
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MoreHorizIcon sx={{ color: "#788292" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Stories
                  name="kierra centrary"
                  backgroundImg={storyimg}
                  avatar={substory}
                />
              </Box>
              <Box>
                <Stories
                  name="Bradyn Cramer"
                  backgroundImg={storyimg1}
                  avatar={substory}
                />
              </Box>
              <Box>
                <Stories
                  name="Pierre Cox"
                  backgroundImg={storyimg2}
                  avatar={substory}
                />
              </Box>
            </Box>
            <Box>
              <WatchingPeople />
            </Box>
            <Box>
              <WhoToFollow />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
