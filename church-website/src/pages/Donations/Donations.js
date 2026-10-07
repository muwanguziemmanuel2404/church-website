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
import "./Donations.css";

// Images
import banner from "../../assets/Donation/banner.jpg";
import giving from "../../assets/Donation/giving.jpg";

function Donations() {
  return (
    <Container maxWidth="lg" className="donations-container">

      {/* Hero Section */}
      <Box className="donation-hero">
        <img src={banner} alt="Giving Banner" className="donation-hero-img" />
        <div className="donation-hero-text">
          <Typography variant="h3" className="donation-title">
            Support Our Ministry
          </Typography>
          <Typography variant="h6" className="donation-subtitle">
            Your generosity helps us share the love of Christ and impact lives.
          </Typography>
        </div>
      </Box>

      {/* Why Give Section */}
      <Grid container spacing={4} className="why-give-section">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className="section-title">
            Why Your Giving Matters
          </Typography>
          <Typography variant="body1" className="section-text">
            Every donation you make goes directly toward supporting our outreach,
            missions, community development programs, and church activities.
            Your partnership helps us expand the Kingdom and bring hope to
            thousands.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="why-give-card">
            <CardMedia component="img" height="260" image={giving} alt="Giving" />
          </Card>
        </Grid>
      </Grid>

      {/* Donation Methods */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "3rem" }}>
        Ways to Give
      </Typography>

      <Grid container spacing={3}>
        {/* Bank Transfer */}
        <Grid item xs={12} md={4}>
          <Card className="donation-method-card">
            <CardContent>
              <Typography variant="h6" className="method-title">
                Bank Transfer
              </Typography>
              <Typography variant="body2" className="method-text">
                <strong>Account Name:</strong> Grace Church International<br />
                <strong>Bank:</strong> Kingdom Bank<br />
                <strong>Account Number:</strong> 1234567890<br />
                <strong>SWIFT Code:</strong> KBIN234
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mobile Money */}
        <Grid item xs={12} md={4}>
          <Card className="donation-method-card">
            <CardContent>
              <Typography variant="h6" className="method-title">
                Mobile Money
              </Typography>
              <Typography variant="body2" className="method-text">
                <strong>MTN:</strong> +44 555 143 456<br />
                <strong>Vodafone:</strong> +44 555 957 654<br />
                <strong>AirtelTigo:</strong> +44 556 222 333
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* PayPal */}
        <Grid item xs={12} md={4}>
          <Card className="donation-method-card">
            <CardContent>
              <Typography variant="h6" className="method-title">
                PayPal / Online Giving
              </Typography>
              <Typography variant="body2" className="method-text">
                Click the button below to donate securely through PayPal.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="donation-btn"
                href="https://paypal.com" // replace with your link
                target="_blank"
              >
                Give via PayPal
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Giving Tiers */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "4rem" }}>
        Suggested Giving Options
      </Typography>

      <Grid container spacing={4}>
        {[
          { amount: "$20", desc: "Helps support church upkeep & utilities" },
          { amount: "$50", desc: "Contributes to youth programs & outreach" },
          { amount: "$100", desc: "Supports missions and community impact" },
        ].map((tier, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="tier-card">
              <CardContent>
                <Typography variant="h5" className="tier-amount">
                  {tier.amount}
                </Typography>
                <Typography variant="body2" className="tier-desc">
                  {tier.desc}
                </Typography>
                <Button variant="contained" color="secondary" className="tier-btn">
                  Donate {tier.amount}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Closing Statement */}
      <Box className="closing-section">
        <Typography variant="h5" className="closing-title">
          Thank You for Your Generosity
        </Typography>
        <Typography variant="body1" className="closing-text">
          We deeply appreciate your continued support and commitment to the work 
          of God. Your giving makes a real difference in our ministry and in the 
          lives of many.
        </Typography>
      </Box>

    </Container>
  );
}

export default Donations;

