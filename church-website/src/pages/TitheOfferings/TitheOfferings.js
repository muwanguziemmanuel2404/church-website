import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import "./TitheOfferings.css";

// Banner images
import banner from "../../assets/Tithes/banner.jpg";
import worship from "../../assets/Tithes/worship.jpg";

function TitheOfferings() {
  return (
    <Container maxWidth="lg" className="tithes-container">
      
      {/* Hero Section */}
      <Box className="tithes-hero">
        <img src={banner} alt="Tithes Banner" className="tithes-hero-img" />
        <div className="tithes-hero-overlay">
          <Typography variant="h3" className="tithes-hero-title">
            Tithes & Offerings
          </Typography>
          <Typography variant="h6" className="tithes-hero-subtitle">
            Honouring God with our substance and expressing gratitude through giving.
          </Typography>
        </div>
      </Box>

      {/* Introduction */}
      <Box className="intro-section">
        <Typography variant="h4" className="section-title">
          A Biblical Act of Worship
        </Typography>
        <Typography variant="body1" className="section-text">
          Giving is an act of worship and obedience. Through our tithes and offerings, 
          we honour God, support kingdom work, and impact communities. Your commitment 
          helps us spread the Gospel, serve the needy, and grow our ministry.
        </Typography>
      </Box>

      {/* Tithes & Offerings Explanation */}
      <Grid container spacing={4} className="explanation-section">
        <Grid item xs={12} md={6}>
          <Card className="explanation-card">
            <CardContent>
              <Typography variant="h5" className="explanation-title">
                What is a Tithe?
              </Typography>
              <Typography variant="body1" className="explanation-text">
                A tithe is 10% of our income returned to God. It symbolizes trust, 
                obedience, and honour. Tithing is a covenant practice rooted in 
                Scripture (Malachi 3:10), enabling the church to function and fulfill its mission.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="explanation-card">
            <CardContent>
              <Typography variant="h5" className="explanation-title">
                What is an Offering?
              </Typography>
              <Typography variant="body1" className="explanation-text">
                Offerings are gifts given freely above the tithe. They reflect gratitude, 
                generosity, and love. Offerings allow us to support missions, charity work, 
                evangelism, and church expansion.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Image Block */}
      <Box className="worship-section">
        <Card className="worship-card">
          <CardMedia component="img" height="350" image={worship} alt="Worship Giving" />
        </Card>
      </Box>

      {/* Giving Methods */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "3rem" }}>
        Ways to Give
      </Typography>

      <Grid container spacing={3}>
        
        {/* Bank Transfer */}
        <Grid item xs={12} md={4}>
          <Card className="giving-card">
            <CardContent>
              <Typography variant="h6" className="giving-title">
                Bank Transfer
              </Typography>
              <Typography variant="body2" className="giving-text">
                <strong>Account Name:</strong> Grace Church International<br />
                <strong>Bank:</strong> Kingdom Bank<br />
                <strong>Account Number:</strong> 1234567890<br />
                <strong>SWIFT:</strong> KBIN234
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mobile Money */}
        <Grid item xs={12} md={4}>
          <Card className="giving-card">
            <CardContent>
              <Typography variant="h6" className="giving-title">
                Mobile Money
              </Typography>
              <Typography variant="body2" className="giving-text">
                <strong>MTN:</strong> +233 555 123 456<br />
                <strong>Vodafone:</strong> +233 555 987 654<br />
                <strong>AirtelTigo:</strong> +233 555 222 333
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Online Giving */}
        <Grid item xs={12} md={4}>
          <Card className="giving-card">
            <CardContent>
              <Typography variant="h6" className="giving-title">
                Online Giving
              </Typography>
              <Typography variant="body2" className="giving-text">
                Secure online tithes and offerings through PayPal.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="giving-btn"
                href="https://paypal.com"
                target="_blank"
              >
                Give Online
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Giving Buttons */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "3rem" }}>
        Quick Giving
      </Typography>

      <Grid container spacing={4}>
        {["Tithe", "Offering", "Missions", "Partnership"].map((label, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Button variant="contained" color="secondary" fullWidth className="quick-give-btn">
              Give {label}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Closing */}
      <Box className="closing-section">
        <Typography variant="h5" className="closing-title">
          Thank You for Your Faithfulness
        </Typography>
        <Typography variant="body1" className="closing-text">
          Your tithes and offerings help build God's work and transform lives. 
          We appreciate your obedience, sacrifice, and love for God’s Kingdom.
        </Typography>
      </Box>

    </Container>
  );
}

export default TitheOfferings;
