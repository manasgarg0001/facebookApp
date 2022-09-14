import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Box } from "@mui/system";
import AlignItemsList from "./contactlist";
import FullWidthTextField from "../util/textareaa";
import ThomasBen from "../util/benthomas";
import Stories from "./stories";
import WatchingPeople from "./watchingpeople";
import WhoToFollow from "./follow";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Miranda from "./miranda";
const Home = () => {
  return (
    <>
      <Box
        sx={{ padding: "10px", backgroundColor: "#E5E5E5", height: "864px" }}
      >
        <Grid container>
          <Grid item xs={3} sx={{ overflow: "hidden" }}>
            <Card>
              <AvatarGroup max={4} sx={{ justifyContent: "center" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "500",

                  color: "#203758",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                Facebook clone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: "400",
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
                  sx={{ boxShadow: "0px 0px 10px" }}
                >
                  group call
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<VideoCallIcon />}
                  sx={{ boxShadow: "0px 0px 10px" }}
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
            }}
          >
            <Box sx={{ marginLeft: "10px" }}>
              <Box>
                <FullWidthTextField />
              </Box>

              <Box
                sx={{
                  marginTop: "7px",

                  padding: "5px",
                }}
              >
                <ThomasBen />
              </Box>
              <Box sx={{ marginTop: "7px", padding: "5px" }}>
                <Miranda />
              </Box>
              <Box sx={{ marginTop: "7px", padding: "5px" }}>
                <ThomasBen />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} sx={{}}>
            <Box>
              <Stories />
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
