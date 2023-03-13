import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

function CopyRight() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          dcs-rdm.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
function Footer() {
    return (
        <div>
            <CopyRight />
        </div>
    );
}
export default Footer;