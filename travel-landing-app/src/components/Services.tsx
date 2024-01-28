import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Services = () => {
  return (
    <div className="service-parent-div">
      <h1>We Offer Best Services</h1>
      <div className="service-div">
        <Card
          className="hover-up"
          sx={{
            borderRadius: "10%",
            maxWidth: 250,
            height: 320,
            padding: 1,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <CardMedia
            sx={{
              width: 200,
              height: 140,
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            image="https://i.pinimg.com/564x/f9/7c/09/f97c09cf21fbbf5af34298577b36a828.jpg"
            title="Service 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our advanced weather prediction algorithms provide accurate and
              up-to-date forecasts for your location.
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="hover-up"
          sx={{
            borderRadius: "10%",
            maxWidth: 250,
            height: 320,
            padding: 1,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <CardMedia
            sx={{
              width: 200,
              height: 140,
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            image="https://i.pinimg.com/564x/f1/e0/c3/f1e0c330e3b44e4d261c08fe7c831059.jpg"
            title="Service 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Best Flights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our curated travel packages and embark on unforgettable
              journeys. Discover experiences with our expertly crafted
              itineraries.
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="hover-up"
          sx={{
            borderRadius: "10%",
            maxWidth: 250,
            height: 320,
            padding: 1,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <CardMedia
            sx={{
              width: 200,
              height: 140,
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            image="https://i.pinimg.com/564x/d8/73/44/d87344a9fa1c52fb3ced1c46156d659f.jpg"
            title="Service 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Local Events
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dive into a world of culinary wonders. Our skilled chefs create
              unique dining experiences, offering the finest flavors from around
              the globe.
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="hover-up"
          sx={{
            borderRadius: "10%",
            maxWidth: 250,
            height: 320,
            padding: 1,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <CardMedia
            sx={{
              width: 200,
              height: 140,
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            image="https://i.pinimg.com/564x/d8/83/d6/d883d67854f5ea958fc66c0dc461b9e5.jpg"
            title="Service 4"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Communication
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Boost your well-being with personalized fitness programs. From
              yoga retreats to adventurous hikes more active lifestyle with us.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
