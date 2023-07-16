import { Container, Box, Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Skills = () => {
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  return (
    <div>
      <Grid container></Grid>
      <Box className="skillsBox">
        <Container
          className="skillsContainer"
          maxWidth="sm"
          sx={{
            borderRadius: "16px",
          }}
        >
          <h3>My Skills!</h3>
          <Stack direction={"row"}>
            <Grid>
              <Box sx={{ textAlign: "start" }}>
                <p>
                  <Divider>Languages</Divider>
                  <li>JavaScript</li>
                  <li>ES6</li>
                </p>
                <p>
                  <Divider>Databases</Divider>
                  <li>SQL</li>
                  <li>MySql</li>
                  <li>Heroku</li>
                  <li>Postman</li>
                </p>
                <p>
                  <Divider>Front End</Divider>
                  <li>HTML/HTML5</li>
                  <li>ReactJS</li>
                  <li>Redux</li>
                  <li>React Native</li>
                  <li>Typescript</li>
                  <li>ESS/ES6</li>
                  <li>JSON</li>
                  <li>AJAX</li>
                  <li>MaterialUI</li>
                  <li>Bootstrap</li>
                  <li>CSS/CSS3</li>
                  <li>LESS</li>
                  <li>SASS</li>
                </p>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem></Divider>
            <Grid>
              <Box sx={{ textAlign: "start" }}>
                <p>
                  <Divider>Back End</Divider>
                  <li>Node.js</li>
                </p>
                <p>
                  <Divider>Testing</Divider>
                  <li>Jest</li>
                  <li>Cypress</li>
                </p>
                <p>
                  <Divider>Package Control</Divider>
                  <li>Git</li>
                  <li>Github</li>
                </p>
                <p>
                  <Divider>Methodologies</Divider>
                  <li>Agile</li>
                  <li>Waterfall</li>
                  <li>SDLC</li>
                </p>
                <p>
                  <Divider>Other</Divider>
                  <li>AI/Chat GPT</li>
                  <li>Google</li>
                  <li>Adobe Photoshop</li>
                  <li>Wireframing</li>
                  <li>Fast Learner/Adaptive</li>
                  <li>Team Player</li>
                  <li>Great Humor ( ˙▿˙ )b</li>
                </p>
              </Box>
            </Grid>
          </Stack>
          <br />
        </Container>
      </Box>
    </div>
  );
};
// what if we had skills as a slider tho
export default Skills;
