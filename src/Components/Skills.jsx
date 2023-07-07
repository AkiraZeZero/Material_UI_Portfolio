import { Container, Box, Stack} from "@mui/system";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Skills = () => {
    const skills = (<div>{`My skills bitch`}</div>)
  return (
    <Stack direction="row">
        <Chip label="Skills"/>
{skills}
    <Divider>LEFT</Divider>
    <Divider>LEFT</Divider>
    <Box className="skillsBox">
      <Container
        className="skillsContainer"
        maxWidth="md"
        sx={{
          borderRadius: "16px",
        }}
      >
          <h3>Skills!</h3>
        <Box>
          <p>
            Languages:
            <li>JavaScript</li>
            <li>ES6</li>
          </p>
          <p>Databases:
            <li>SQL</li>
            <li>MySql</li>
            <li>Heroku</li>
            <li>Postman</li>
          </p>
          <p>Front End:
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
          <p>Back End:
            <li>Node.js</li>
          </p>
        </Box>
        <Box>
            <p>Testing:
                <li>Jest</li>
                <li>Cypress</li>
            </p>
            <p>Package Control:
                <li>Git</li>
                <li>Github</li>
            </p>
            <p>Methodologies:
                <li>Agile</li>
                <li>Waterfall</li>
                <li>SDLC</li>
            </p>
            <p>Other:
                <li>AI/Chat GPT</li>
                <li>Google</li>
                <li>Adobe Photoshop</li>
                <li>Wireframing</li>
                <li>Fast Learner/Adaptive</li>
                <li>Team Player</li>
                <li>Great Humor ( ˙▿˙ )b</li>
            </p>
        </Box>
      </Container>
    </Box>
    </Stack>
  );
};
// what if we had skills as a slider tho
export default Skills;
