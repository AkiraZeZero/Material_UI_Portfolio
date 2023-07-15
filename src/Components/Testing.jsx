import * as React from "react";
// import PropTypes from 'prop-types';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
// import Container from '@mui/material/Container';
import Slide from "@mui/material/Slide";
import { Avatar } from "@mui/material";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default function HideAppBar(props) {
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(2, 2),
    },
  }));
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              <Box>
                <Grid container direction={"row"}>
                  <Avatar
                    maxWidth="sm"
                    alt="Kiara"
                    src="KO"
                    sx={{
                      width: 50,
                      height: 50,
                      mx: "auto",
                      m: 2,
                    }}
                  />
                  <h2>✨ Kiara The Web Dev ✨</h2>
                  <Stack direction="row" sx={{ ml: 25 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 100 }}
                    >
                      <BrushOutlinedIcon fontSize="small" />
                    </Button>

                    <Divider />
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      startIcon={<PetsOutlinedIcon/>}
                      sx={{ borderRadius: 25 }}
                    >

                    </Button>
                    <Divider />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 100 }}
                    >
                      <AccessTimeOutlinedIcon fontSize="small" />
                    </Button>
                    <Divider />
                  </Stack>
                </Grid>
              </Box>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
