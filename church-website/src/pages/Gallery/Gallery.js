import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import "./Gallery.css";

// Photo imports
import photo1 from "../../assets/Gallery/photo1.jpg";
import photo2 from "../../assets/Gallery/photo2.jpg";
import photo3 from "../../assets/Gallery/photo3.jpg";
import photo4 from "../../assets/Gallery/photo4.jpg";
import photo5 from "../../assets/Gallery/photo5.jpg";
import photo6 from "../../assets/Gallery/photo6.jpg";

// Optional local video import
// import videoClip from "../../assets/videos/clip1.mp4";

function Gallery() {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  const videos = [
    {
      title: "Sunday Worship Highlights",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1", // replace with your video ID
    },
    {
      title: "Youth Conference Recap",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2",
    },
    // If using a local MP4 file:
    // {
    //   title: "Local Event Footage",
    //   local: true,
    //   src: videoClip,
    // },
  ];

  return (
    <Container maxWidth="lg" className="gallery-container">

      {/* Header */}
      <Box className="gallery-header">
        <Typography variant="h3" className="gallery-title">
          Gallery
        </Typography>
        <Typography variant="h6" className="gallery-subtitle">
          A collection of beautiful moments from our church community.
        </Typography>
      </Box>

      {/* Photos Section */}
      <Typography variant="h4" className="section-title">
        Photos
      </Typography>

      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="photo-card">
              <CardMedia
                component="img"
                height="250"
                image={photo}
                alt={`Gallery Photo ${index + 1}`}
                className="photo-img"
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Videos Section */}
      <Typography variant="h4" className="section-title" style={{ marginTop: "3rem" }}>
        Videos
      </Typography>

      <Grid container spacing={4}>
        {videos.map((video, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box className="video-card">
              {video.local ? (
                <video controls className="video-player">
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  src={video.url}
                  title={video.title}
                  className="video-player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <Typography variant="h6" className="video-title">
                {video.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}

export default Gallery;
