import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import "./Sermons.css";

// Sermon images
import sermon1 from "../../assets/Sermons/sermon1.jpg";
import sermon2 from "../../assets/Sermons/sermon2.jpg";
import sermon3 from "../../assets/Sermons/sermon3.jpg";
import sermon4 from "../../assets/Sermons/sermon4.jpg";

function Sermons() {
  const sermonList = [
    {
      title: "Walking in Faith",
      img: sermon1,
      desc: "A powerful message on trusting God even when the path is unclear.",
    },
    {
      title: "Hope for Tomorrow",
      img: sermon2,
      desc: "Encouraging teachings about finding hope through Christ.",
    },
    {
      title: "Power of Prayer",
      img: sermon3,
      desc: "Understanding the importance and impact of purposeful prayer.",
    },
    {
      title: "Love Without Limits",
      img: sermon4,
      desc: "A message on expressing God’s love unconditionally in our daily lives.",
    },
  ];

  return (
    <Container maxWidth="lg" className="sermons-container">

      {/* Header */}
      <Box className="sermons-header">
        <Typography variant="h3" className="sermons-title">
          Sermons
        </Typography>
        <Typography variant="h6" className="sermons-subtitle">
          “Faith comes by hearing, and hearing by the word of God.”
        </Typography>
      </Box>

      {/* Featured Sermon */}
      <Box className="featured-section" sx={{ mb: 6 }}>
        <Typography variant="h4" className="section-title" sx={{ mb: 3 }}>
          Featured Sermon
        </Typography>

        <Card className="featured-card" sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="380"
            image={sermon1}
            alt="Featured Sermon"
          />
          <CardContent>
            <Typography variant="h5" className="featured-title" sx={{ mb: 2 }}>
              Living a Life Led by the Spirit
            </Typography>
            <Typography variant="body1" className="featured-text" sx={{ mb: 3 }}>
              A deep and inspiring message on allowing the Holy Spirit to guide
              every decision, moment, and direction of our lives.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFA500", // Orange default
                color: "#000000",           // Black text
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#FF8C00", // Darker orange on hover
                },
              }}
            >
              Watch Sermon
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Past Sermons */}
      <Box className="past-sermons-section">
        <Typography variant="h4" className="section-title" sx={{ mb: 3 }}>
          Past Sermons
        </Typography>

        <Grid container spacing={4}>
          {sermonList.map((sermon, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="sermon-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={sermon.img}
                  alt={sermon.title}
                />
                <CardContent>
                  <Typography variant="h6" className="sermon-name" sx={{ mb: 1 }}>
                    {sermon.title}
                  </Typography>
                  <Typography variant="body2" className="sermon-desc" sx={{ mb: 2 }}>
                    {sermon.desc}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFA500", // Orange default
                      color: "#000000",           // Black text
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#FF8C00", // Darker orange on hover
                      },
                    }}
                  >
                    Watch
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Sermons;
