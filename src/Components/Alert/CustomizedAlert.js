import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedAlert(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.openAlert}
        autoHideDuration={5000}
        onClose={() => props.setOpenAlert(false)}
      >
        <Alert
          onClose={() => props.setOpenAlert(false)}
          severity={props.severity}
          sx={{ width: "100%" }}
        >
          {props.alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
