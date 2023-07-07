import Akira from "../Images/Kiara.jpg";
import { Container, Box } from "@mui/system";
import { Avatar } from "@mui/material";

const Kiara = () => {
  return (
    <Box>
      <Container
        maxWidth="xs"
        className="kiaraSection"
        sx={{ borderRadius: "16px" }}
      >
        <Avatar alt="Kiara" src={Akira} sx={{ width: 100, height: 100 }} />
        <img className="kiaraPicture" src={Akira} alt="Kiara" />

        <Box>a box w a container inside w a box inside</Box>
      </Container>
      <Container>a box w a container inside</Container>
    </Box>
  );
};

export default Kiara;
