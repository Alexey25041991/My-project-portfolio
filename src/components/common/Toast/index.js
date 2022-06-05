import React, { useState, useEffect } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ openToastValue, severity, text, timer }) => {
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    setOpenToast(openToastValue);
  }, [openToastValue]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  return (
    <Snackbar
      open={openToast}
      autoHideDuration={timer}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%", fontSize: "14px" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
