import { Container, Box } from "@mui/system";

const Skills = () => {
  return (
    <Box className="skillsBox">

    
    <Container>
      <div>
        <Box sx={{
        width: 500,
        height: 500,
        bgcolor: 'background.paper',
        gap: 4
      }}>
            
          <div>
            <ul>Languages:</ul>
            <li>JavaScript</li>
            <li>ES6</li>
          </div>
          <div>
            <ul>Databases:</ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Heroku</li>
          </div>
          <div>
            <ul>Front End:</ul>
            <li>HTML/HTML5</li>
            <li>CSS/CSS3</li>
            <li>Bootstrap</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>ESS/ES6</li>
            <li>AJAX</li>
            <li>JSON</li>
            <li>React Native</li>
            <li>LESS</li>
            <li>SASS</li>
            <li>Typescript</li>
            <li>Ui/Ux design</li>
          </div>
          <div>
            <ul>Back End:</ul>
            <li>Node.js</li>
          </div>
        </Box>
        <Box>
          <div>
            <ul>Testing:</ul>
            <li>Jest</li>
            <li>Cypress</li>
          </div>
          <div>
            <ul>Package Control:</ul>
            <li>Git</li>
            <li>Github</li>
          </div>
          <div>
            <ul>Methodologies:</ul>
            <li>Agile</li>
            <li>Waterfall</li>
            <li>SDLC</li>
          </div>
          <div>
            <ul>Other:</ul>
            <li>Google</li>
            <li>Adobe Photoshop</li>
            <li>Wireframing</li>
            <li>Fast Learner</li>
            <li>Team Player</li>
            <li>Great Humor ( ˙▿˙ )b</li>
          </div>
        </Box>
      </div>
    </Container>
    </Box>
  );
};
// what if we had skills as a slider tho
export default Skills;
