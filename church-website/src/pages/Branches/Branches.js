import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import "./Branches.css";

// Import branch images
import branch1 from "../../assets/Branches/branch1.jpg";
import branch2 from "../../assets/Branches/branch2.jpg";
import branch3 from "../../assets/Branches/branch3.jpg";

// Import outreach images
import outreach1 from "../../assets/Outreach/outreach1.jpg";
import outreach2 from "../../assets/Outreach/outreach2.jpg";
import outreach3 from "../../assets/Outreach/outreach3.jpg";

function Branches() {
  const branches = [
    {
      title: "Downtown Branch",
      image: branch1,
      description:
        "Located in the heart of the city, serving the urban community with love, worship, and outreach.",
    },
    {
      title: "Northside Branch",
      image: branch2,
      description:
        "A growing family-oriented branch focused on youth empowerment, worship, and community support.",
    },
    {
      title: "Lakeside Branch",
      image: branch3,
      description:
        "A peaceful gathering place offering worship services, counseling, and community fellowship.",
    },
  ];

  const outreachMissions = [
    {
      title: "Food Bank Outreach",
      image: outreach1,
      text:
        "Supporting struggling families by distributing food supplies weekly across multiple branches.",
    },
    {
      title: "Rural Mission Support",
      image: outreach2,
      text:
        "Helping small rural branches with resources, volunteers, worship support, and community development.",
    },
    {
      title: "Youth Empowerment Drives",
      image: outreach3,
      text:
        "Organizing mentorship programs, youth conferences, and empowerment workshops for all church branches.",
    },
  ];

  return (
    <Container maxWidth="lg" className="branches-container">
      
      {/* Header */}
      <Box className="branches-header">
        <Typography variant="h3" className="branches-title">
          Our Branches
        </Typography>
        <Typography variant="h6" className="branches-subtitle">
          Reaching communities, spreading love, and growing in faith together.
        </Typography>
      </Box>

      {/* Branch Cards */}
      <Typography variant="h4" className="section-title">
        Church Branches
      </Typography>

      <Grid container spacing={4} className="section-grid">
        {branches.map((branch, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="branch-card">
              <CardMedia component="img" height="220" image={branch.image} alt={branch.title} />
              <CardContent>
                <Typography variant="h6" className="branch-name">
                  {branch.title}
                </Typography>
                <Typography variant="body2" className="branch-text">
                  {branch.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Outreach Header */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "3rem" }}>
        Outreach Missions
      </Typography>

      {/* Outreach Missions */}
      <Grid container spacing={4} className="section-grid">
        {outreachMissions.map((mission, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="mission-card">
              <CardMedia component="img" height="220" image={mission.image} alt={mission.title} />
              <CardContent>
                <Typography variant="h6" className="mission-title">
                  {mission.title}
                </Typography>
                <Typography variant="body2" className="mission-text">
                  {mission.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Branches;

