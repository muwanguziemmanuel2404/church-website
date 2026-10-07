import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (You can connect backend later)");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="lg" className="contact-container">

      {/* Header */}
      <Box className="contact-header">
        <Typography variant="h3" className="contact-title">
          Contact Us
        </Typography>
        <Typography variant="h6" className="contact-subtitle">
          We'd love to hear from you. Reach out with any questions or prayer requests.
        </Typography>
      </Box>

      <Grid container spacing={4}>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Card
            className="contact-card"
            sx={{
              backgroundColor: "#FFFFFF", // White background for form
              color: "#000000",
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit} className="contact-form">
                <TextField
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  fullWidth
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: 2,
                  }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Church Contact Information */}
        <Grid item xs={12} md={5}>
          <Card
            className="contact-info-card"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Church Information
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                📍 <strong>Address:</strong> 145 Grace Avenue, Springfield City
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                📞 <strong>Phone:</strong> +1 (555) 987-6543
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                ✉️ <strong>Email:</strong> info@ctrfministries.org
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                🕒 <strong>Service Hours:</strong>  
                Sundays – 9:00 AM & 11:00 AM  
                Wednesdays – 6:00 PM Bible Study
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                🙏 <strong>Prayer Line:</strong> +1 (555) 222-3553
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Contact;
