import React from "react";
import { Container, Typography, Grid, Box, Link, IconButton } from "@mui/material";
import "./Footer.css";

// Optional: Social media icons from Material UI
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box component="footer" className="footer-wrapper">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-grid">

          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="footer-logo">
              Grace Church International
            </Typography>
            <Typography variant="body2" className="footer-desc">
              A place to experience God's love, grow spiritually, and connect with purpose.
            </Typography>

            <Box className="social-icons">
              <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              Quick Links
            </Typography>
            <Box className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/mission" className="footer-link">Mission</Link>
              <Link href="/branches" className="footer-link">Branches</Link>
              <Link href="/sermons" className="footer-link">Sermons</Link>
              <Link href="/gallery" className="footer-link">Gallery</Link>
              <Link href="/donations" className="footer-link">Donations</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              Contact Us
            </Typography>
            <Typography variant="body2" className="footer-info">
              📍 123 Grace Avenue, Springfield City
            </Typography>
            <Typography variant="body2" className="footer-info">
              📞 +1 (555) 987-6543
            </Typography>
            <Typography variant="body2" className="footer-info">
              ✉️ info@gracechurch.org
            </Typography>
            <Typography variant="body2" className="footer-info">
              🕒 Sundays – 9:00 AM & 11:00 AM | Wednesdays – 6:00 PM
            </Typography>
          </Grid>

        </Grid>

        <Box className="footer-bottom">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Christ The Rock Foundation Ministries International. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
