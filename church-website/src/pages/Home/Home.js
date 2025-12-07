import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box
} from "@mui/material";
import "./Home.css";

// IMAGES
import hero from "../../assets/Home/hero.png";
import founder from "../../assets/Home/founder.png";
import mission from "../../assets/Home/mission.jpg";
import worship from "../../assets/Home/worship.jpg";

function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <Box className="hero-section">
        <img src={hero} alt="Hero" className="hero-img" />
        <div className="hero-overlay">
          <Typography variant="h3" className="hero-title">
            Welcome to Grace Church International
          </Typography>
          <Typography variant="h6" className="hero-subtitle">
            A place to experience God's love, grow spiritually, and connect with purpose.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/about"
            sx={{
              backgroundColor: "#FFA500", // Orange
              color: "#000000",           // Black text
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#FF8C00", // Darker orange on hover
              },
            }}
          >
            Learn More
          </Button>
        </div>
      </Box>

      <Container maxWidth="lg">

        {/* FOUNDER MESSAGE */}
        <Grid container spacing={4} className="founder-section">
          <Grid item xs={12} md={5}>
            <Card className="founder-card">
              <CardMedia
                component="img"
                height="420"
                image={founder}
                alt="Founder"
                className="founder-img"
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" className="section-title">
              Message From Our Founder
            </Typography>
            <Typography variant="body1" className="founder-text">
              “Grace and peace to you! Our mission is to raise a God-centered generation, 
              rooted in love, built on faith, and committed to serving humanity. 
              Every soul is precious to God, and our ministry exists to bring hope, 
              healing, and transformation. We welcome you to be part of a growing 
              family of believers who are passionate about fulfilling God's purpose.”
            </Typography>

            <Typography variant="body2" className="founder-name">
              — Apostle Priscillah Kisakye, Founder 
            </Typography>
          </Grid>
        </Grid>

        {/* OUR MISSION */}
        <Grid container spacing={4} className="mission-section">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="section-title">
              Our Mission
            </Typography>
            <Typography variant="body1" className="section-text">
              Our mission is to guide individuals into a deeper relationship with 
              Jesus Christ through worship, teaching, outreach, and discipleship. 
              We believe in transforming lives, strengthening families, and empowering 
              communities through faith-based initiatives.
            </Typography>

            <Button
              variant="contained"
              href="/mission"
              sx={{
                backgroundColor: "#FFA500", // Orange
                color: "#000000",           // Black text
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#FF8C00", // Darker orange on hover
                },
              }}
            >
              Read More
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="mission-card">
              <CardMedia component="img" height="350" image={mission} alt="Mission" />
            </Card>
          </Grid>
        </Grid>

        {/* MINISTRIES / BRANCHES PREVIEW */}
        <Box className="ministry-section">
          <Typography variant="h4" className="section-title-center">
            Explore Our Branches & Ministries
          </Typography>

          <Grid container spacing={4}>
            {[ 
              { img: worship, title: "Our Branches", text: "Discover our vibrant branches across the nation focused on growth, prayer, and community building.", href: "/branches", label: "View Branches" },
              { img: mission, title: "Outreach Missions", text: "Join us as we impact communities through charity, evangelism, and humanitarian support.", href: "/missions", label: "Learn More" },
              { img: founder, title: "Latest Sermons", text: "Be inspired by our weekly sermons rich in revelation and faith.", href: "/sermons", label: "Watch Sermons" }
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card className="ministry-card">
                  <CardMedia component="img" height="220" image={item.img} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6" className="ministry-title">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="ministry-text">
                      {item.text}
                    </Typography>
                    <Button
                      variant="contained"
                      href={item.href}
                      sx={{
                        backgroundColor: "#FFA500",
                        color: "#000000",
                        fontWeight: 600,
                        mt: 1,
                        "&:hover": {
                          backgroundColor: "#FF8C00",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </div>
  );
}

export default Home;
