import React from "react";
import { Container, Typography, Paper, List, ListItem } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ minHeight: "100vh", paddingBottom: "60px" }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bohdana Matvieieva
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Software Quality Assurance Engineer
        </Typography>
        <Typography paragraph>
          Dynamic QA Engineer with 9 years of expertise spanning manual and
          automated testing. Fluent in Agile/Scrum methodologies and adept in a
          vast array of testing types, from Smoke to intricate Database testing.
          Skilled in crafting pivotal testing artifacts and leveraging top-tier
          tools like JavaScript OOP, Cypress, and Git/GitHub. Proficient with
          Postman, Jira, and GitLab for seamless QA operations. Committed to
          ensuring unparalleled quality with each test.
        </Typography>

        <Typography variant="h6">Tools & Technologies:</Typography>
        <List>
          <ListItem>UI/UX, JavaScript, HTML, XML, JSON, Node.js, CSS</ListItem>
          <ListItem>Cypress, PhpStorm, Visual Studio Code</ListItem>
          <ListItem>Windows, Mac OS, MongoDB, PostgreSQL</ListItem>
          <ListItem>JIRA, Asana, Mantis, Trello, Confluence, TestRail</ListItem>
          <ListItem>Chrome DevTools, Postman, RabbitMQ, Rancher, Git</ListItem>
          <ListItem>Android and iOS devices, Chrome, Firefox, Safari</ListItem>
        </List>

        <Typography variant="h6">Professional Experience:</Typography>
        <Typography variant="subtitle1">
          Software Quality Assurance Engineer - EpicentrM (August 2020 –
          Present)
        </Typography>
        <List>
          <ListItem>
            Developing and maintaining UI automated tests using Cypress
            (JavaScript).
          </ListItem>
          <ListItem>
            Transforming 50% of manual testing into automated processes,
            boosting team performance.
          </ListItem>
          <ListItem>
            Creating a REST API automation testing framework using JavaScript
            and NodeJS.
          </ListItem>
          <ListItem>
            Implementing Page Object Model (POM) in Cypress, reducing test
            maintenance time.
          </ListItem>
          <ListItem>
            Comprehensive profiling of BE & DB using SQL queries.
          </ListItem>
        </List>

        <Typography variant="subtitle1">
          Product Manager - Robota.ua (November 2018 - August 2020)
        </Typography>
        <List>
          <ListItem>
            Led and managed a team of 7 development engineers, increasing
            productivity by 25%.
          </ListItem>
          <ListItem>
            Orchestrated the release of a mobile application with 50,000+
            downloads in the first month.
          </ListItem>
        </List>

        <Typography variant="subtitle1">
          QA Engineer - DBO SOFT (April 2015 - November 2018)
        </Typography>
        <List>
          <ListItem>
            Conducted functional, regression, and smoke testing for Web and
            Desktop applications.
          </ListItem>
          <ListItem>
            Produced comprehensive test documentation, improving test coverage
            by 25%.
          </ListItem>
        </List>

        <Typography variant="h6">Education:</Typography>
        <List>
          <ListItem>
            Master of Science (MS), National Aviation University, Ukraine,
            February 2015
          </ListItem>
          <ListItem>
            Bachelor of Science (BS), National Aviation University, Ukraine,
            June 2013
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Home;
