import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "./Mission.css";

function Mission() {
  return (
    <Container maxWidth="lg" className="mission-container">
      
      {/* Header Section */}
      <Box className="mission-header">
        <Typography variant="h3" className="mission-title">
          Our Mission
        </Typography>
        <Typography variant="h6" className="mission-subtitle">
          “To spread the message of faith, hope, and love to our community and the world.”
        </Typography>
      </Box>

      {/* Mission Statement */}
      <Box className="mission-section">
        <Typography variant="h4" className="section-title">
          What Drives Us
        </Typography>
        <Typography variant="body1" className="section-text">
          At Christ The Rock Foundation Ministries, our mission is to bring people closer to God, create a 
          loving and supportive community, and transform lives through the power 
          of the Gospel. We are committed to spiritual growth, outreach, and 
          fostering a deep sense of belonging among all who walk through our doors.
        </Typography>
      </Box>

      {/* Pillars Section */}
      <Box className="pillars-section">
        <Typography variant="h4" className="section-title">
          Our Core Pillars
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="pillar-card">
              <CardContent>
                <Typography variant="h6" className="pillar-title">
                  Faith
                </Typography>
                <Typography variant="body2" className="pillar-text">
                  We are dedicated to teaching and living out the Word of God in our daily lives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="pillar-card">
              <CardContent>
                <Typography variant="h6" className="pillar-title">
                  Community
                </Typography>
                <Typography variant="body2" className="pillar-text">
                  We believe in building strong, meaningful connections with one another.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="pillar-card">
              <CardContent>
                <Typography variant="h6" className="pillar-title">
                  Service
                </Typography>
                <Typography variant="body2" className="pillar-text">
                  We strive to serve others through outreach, compassion, and love.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Vision Section */}
      <Box className="vision-section">
        <Typography variant="h4" className="section-title">
          Our Vision
        </Typography>
        <Typography variant="body1" className="section-text">
          Our vision is to be a beacon of hope and spiritual transformation, where 
          every person can encounter God’s love. By empowering individuals and families, 
          we aim to create a thriving, faith-filled community that impacts the world for Christ.
        </Typography>
      </Box>
    </Container>
  );
}

export default Mission;

