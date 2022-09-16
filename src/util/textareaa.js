import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Typography,
} from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Form, Formik } from "formik";
export default function FullWidthTextField(props) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <>
      <Formik
        initialValues={{
          id: Math.floor(Math.random() * 100),
          text: "",
          url: "",
        }}
        onSubmit={(data) => {
          {
            props.getData(data);
          }
          console.log(data, "dataa");
          alert(JSON.stringify(data, null, 2));
          //console.log(values, "valuess");
        }}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Box sx={{ display: "flex", backgroundColor: "white" }}>
                <TextField
                  fullWidth
                  onChange={props.handleChange}
                  name="text"
                  id="fullWidth"
                  placeholder="whats on your mind paul?"
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="End">
                  //       <Button>
                  //         <ArrowUpwardIcon />
                  //       </Button>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
                <Box>
                  <TextField
                    onChange={props.handleChange}
                    name="url"
                    fullWidth
                    sx={{
                      display: "flex",
                      color: "#788292",
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                    }}
                    id="fullWidth"
                    placeholder="add Image/Status"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="End">
                          <IconButton component="label">
                            <input type="file" hidden />
                            <CollectionsIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Button type="submit">add Item</Button>
              </Box>
              {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          

          <TextField
            id="filled-basic"
            label="Activity/Status"
            variant="filled"
            size="smalls"
          />
          <input type={"file"} />
        </Box>
      </Modal> */}
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
