import Akira from "../Images/Kiara.jpg";
import { Container, Box, Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import MuiGrid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Kiara = () => {
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  return (
    <Grid container>
    <Box>
      <Container
        maxWidth="xs"
        className="kiaraSection"
        sx={{ borderRadius: "16px" }}
      >
        This is a test playground!
        <Stack direction={"row"}>
          <Avatar alt="Kiara" src={Akira} sx={{ width: 100, height: 100 }} />
          <Container>container in stack</Container>
          <Container>Another container in the stack</Container>
        </Stack>
        <Stack direction={"row"}>
          <Container>Stack number 2</Container>
          <Container>Another container stack</Container>
          <Container>And the 3rd last stack item</Container>
        </Stack>
        <Box>a box outside of the stack</Box>
      </Container>
      <Container>a box w a container inside</Container>
    </Box></Grid>
  );
};

export default Kiara;
