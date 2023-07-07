import { Container, Box } from "@mui/system";
import Akira from "../Images/Kiara.jpg";
import { Avatar } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Container
        className="aboutMe"
        maxWidth="sm"
        sx={{
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
              px: 5,
              py: 3,
            }}
        >
            <Avatar
              alt="Kiara"
              src={Akira}
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
              }}
            />
          <p>
            Hi I'm Kiara! I'm an aspiring full stack web developer egar to learn
            and experience what the the programming world has to offer! My goal
            for myself in the developing world is to quench my curiosity by
            becoming better than I was yesterday by learning and doing something
            new everyday. If I'm not learning, I'm not growing!
          </p>
          <p>
            Web development has shown me three things about myself:
            <li>I love to learn!</li>
            <li>I love to build!</li>
            <li>I love frontend!</li>
          </p>
          <p>
            I am a software developer based in the great stormy state of
            Florida, I love to build beautiful Website Applications and to
            challenge myself with new programming languages. I went to school to
            learn full stack web development where I learned that my passion
            lies more in the frontend side than the backend side. Like the moon
            which is always ready to rise in the night, I am always ready to
            learn new skills and pick up a new project so if you have an idea or
            if you just want to have a chat, don't be shy and Hit me up!
          </p>
          <p>☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆</p>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
